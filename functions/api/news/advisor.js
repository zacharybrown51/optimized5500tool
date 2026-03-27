// Cloudflare Pages Function: /api/news/advisor
// Aggregates advisor-relevant stories from Marketaux + Finnhub

function jsonResp(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Cache-Control': 'public, max-age=300'
    }
  });
}

function toIsoDate(v) {
  if (!v) return '';
  var d = new Date(v);
  if (isNaN(d.getTime())) return '';
  return d.toISOString();
}

function hashId(v) {
  var s = String(v || '');
  var h = 0;
  for (var i = 0; i < s.length; i++) {
    h = ((h << 5) - h) + s.charCodeAt(i);
    h |= 0;
  }
  return 'fh_' + Math.abs(h);
}

function asArray(v) {
  return Array.isArray(v) ? v : [];
}

function normalizeMarketaux(rows) {
  var out = [];
  rows = asArray(rows);
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i] || {};
    var entities = asArray(r.entities);
    var entity0 = entities.length ? entities[0] || {} : {};
    var topics = [];
    for (var e = 0; e < entities.length; e++) {
      var t = entities[e] && entities[e].type ? String(entities[e].type).trim() : '';
      if (t && topics.indexOf(t) < 0) topics.push(t);
    }
    out.push({
      id: r.uuid || ('mx_' + i + '_' + Date.now()),
      title: r.title || '',
      summary: r.snippet || '',
      source: (r.source && r.source.name) ? r.source.name : 'Marketaux',
      link: r.url || '',
      publishedAt: toIsoDate(r.published_at),
      topics: topics,
      sentiment: (typeof entity0.sentiment_score === 'number') ? entity0.sentiment_score : null
    });
  }
  return out;
}

function normalizeFinnhub(rows) {
  var out = [];
  rows = asArray(rows);
  for (var i = 0; i < rows.length; i++) {
    var r = rows[i] || {};
    out.push({
      id: hashId(r.id || r.url || r.headline || ('row_' + i)),
      title: r.headline || '',
      summary: r.summary || '',
      source: r.source || 'Finnhub',
      link: r.url || '',
      publishedAt: toIsoDate((r.datetime || 0) * 1000),
      topics: r.category ? [String(r.category)] : [],
      sentiment: null
    });
  }
  return out;
}

function dedupeAndSort(items, limit) {
  var seen = {};
  var out = [];
  for (var i = 0; i < items.length; i++) {
    var it = items[i] || {};
    var key = String(it.link || '').trim();
    if (!key) continue;
    if (seen[key]) continue;
    seen[key] = 1;
    out.push(it);
  }
  out.sort(function (a, b) {
    var ta = Date.parse(a.publishedAt || '') || 0;
    var tb = Date.parse(b.publishedAt || '') || 0;
    return tb - ta;
  });
  return out.slice(0, limit);
}

async function fetchMarketaux(apiKey, search, limit) {
  if (!apiKey) throw new Error('MARKETAUX_API_KEY missing');
  var url = 'https://api.marketaux.com/v1/news/all?search=' + encodeURIComponent(search) + '&language=en&limit=' + encodeURIComponent(String(limit)) + '&api_token=' + encodeURIComponent(apiKey);
  var resp = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  if (!resp.ok) throw new Error('Marketaux failed: ' + resp.status);
  var data = await resp.json();
  return normalizeMarketaux(data && data.data ? data.data : []);
}

async function fetchFinnhub(apiKey) {
  if (!apiKey) throw new Error('FINNHUB_API_KEY missing');
  var url = 'https://finnhub.io/api/v1/news?category=general&token=' + encodeURIComponent(apiKey);
  var resp = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  if (!resp.ok) throw new Error('Finnhub failed: ' + resp.status);
  var data = await resp.json();
  return normalizeFinnhub(data);
}

export async function onRequestOptions() {
  return new Response('', {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, OPTIONS'
    }
  });
}

export async function onRequestGet(context) {
  try {
    var url = new URL(context.request.url);
    var limit = parseInt(url.searchParams.get('limit') || '40', 10);
    if (!isFinite(limit) || limit <= 0) limit = 40;
    limit = Math.min(limit, 100);

    var marketauxKey = context.env && context.env.MARKETAUX_API_KEY ? String(context.env.MARKETAUX_API_KEY) : '';
    var finnhubKey = context.env && context.env.FINNHUB_API_KEY ? String(context.env.FINNHUB_API_KEY) : '';
    var search = 'retirement plan sponsor advisor workplace benefits';

    var settled = await Promise.all([
      fetchMarketaux(marketauxKey, search, 20).then(function (items) { return { ok: true, name: 'marketaux', items: items }; }).catch(function (err) { return { ok: false, name: 'marketaux', error: err.message || 'failed', items: [] }; }),
      fetchFinnhub(finnhubKey).then(function (items) { return { ok: true, name: 'finnhub', items: items }; }).catch(function (err) { return { ok: false, name: 'finnhub', error: err.message || 'failed', items: [] }; })
    ]);

    var combined = [];
    var anyOk = false;
    var errors = [];
    for (var i = 0; i < settled.length; i++) {
      if (settled[i].ok) {
        anyOk = true;
        combined = combined.concat(settled[i].items || []);
      } else {
        errors.push(settled[i].name + ': ' + settled[i].error);
      }
    }

    if (!anyOk) {
      return jsonResp(200, { ok: false, items: [], error: errors.join('; ') || 'All news sources failed' });
    }

    var items = dedupeAndSort(combined, limit);
    return jsonResp(200, { ok: true, items: items, sources: ['marketaux', 'finnhub'] });
  } catch (err) {
    return jsonResp(200, { ok: false, items: [], error: err && err.message ? err.message : 'Failed to load advisor news' });
  }
}
