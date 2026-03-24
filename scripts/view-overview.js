// --- Dashboard ---

function rDash(){
var el=document.getElementById('p-dash');
var subset=dashSubset();
var source=subset.length?subset:D.slice();
var ta=0,tp=0,tg=0,growthCt=0;
var noAdv=0,sweet=0,hasRK=0,bundled=0,late=0,empSec=0,noSH=0,hgr=0,dec=0,hbl=0,psh=0;
var k401=0,k403b=0,dbPlans=0,otherType=0;
var sz1=0,sz2=0,sz3=0,sz4=0,sz5=0;
var rkCounts={}, prospectRkCounts={}, cityMap={};
for(var i=0;i<source.length;i++){
  var p=source[i];
  ta+=p[4]; tp+=p[7];
  if(isFinite(p[6])){tg+=p[6]; growthCt++}
  if(!p[20])noAdv++;
  if(!p[20]&&p[7]<=300&&p[4]>=1e6)sweet++;
  if(p[18]){hasRK++; rkCounts[p[18]]=(rkCounts[p[18]]||0)+1}
  if(p[24]===2)bundled++;
  if(p[26])late++;
  if(p[27]>0)empSec++;
  var ss=(p[11]||'').split(',');
  for(var j=0;j<ss.length;j++){
    if(ss[j]==='NSH')noSH++;
    if(ss[j]==='HGR')hgr++;
    if(ss[j]==='DEC')dec++;
    if(ss[j]==='HBL')hbl++;
    if(ss[j]==='PSH')psh++;
  }
  if(p[8].indexOf('2E')>=0)k401++;
  else if(p[8].indexOf('2S')>=0)k403b++;
  else if(p[8].indexOf('1A')>=0||p[8].indexOf('1C')>=0)dbPlans++;
  else otherType++;
  if(p[4]<1e6)sz1++; else if(p[4]<5e6)sz2++; else if(p[4]<10e6)sz3++; else if(p[4]<50e6)sz4++; else sz5++;
  if(!p[20]&&p[7]<=300&&p[4]>=1e6&&p[18]) prospectRkCounts[p[18]]=(prospectRkCounts[p[18]]||0)+1;
  var c=p[2].toUpperCase();
  if(!cityMap[c])cityMap[c]=[0,0];
  cityMap[c][0]++; cityMap[c][1]+=p[4];
}
var avgGrowth=growthCt?tg/growthCt:0;
var rkTop=Object.entries(rkCounts).sort(function(a,b){return b[1]-a[1]}).slice(0,10);
var rkMax=rkTop[0]?rkTop[0][1]:1;
var prospectTop=Object.entries(prospectRkCounts).sort(function(a,b){return b[1]-a[1]}).slice(0,10);
var prospectMax=prospectTop[0]?prospectTop[0][1]:1;
var topCities=Object.entries(cityMap).sort(function(a,b){return b[1][1]-a[1][1]}).slice(0,10);
var topCityMax=topCities[0]?topCities[0][1][1]:1;
var activeMeta=activeDashSignal?DASH_SIGNAL_META[activeDashSignal]:null;

var h='<div class="ov-stage"><div class="ov-intro">';
h+='<div class="ov-hero-card"><div class="ov-kicker">Market intelligence layer</div><div class="ov-title">Overview</div><div class="ov-sub">'+(activeMeta?('Reframed around <b>'+H(activeMeta.label)+'</b> so you can see how this slice of the market behaves across assets, providers, and concentration.'):('A tighter read on the San Diego retirement-plan market: where assets sit, where advisor whitespace exists, and which signals are worth acting on first.'))+'</div><div class="ov-pill-row"><div class="ov-pill">'+(activeMeta?H(activeMeta.label)+' slice':'Prospect universe')+'</div><div class="ov-pill">'+(activeMeta?'Filtered market view':'Provider concentration')+'</div><div class="ov-pill">'+(activeMeta?(subset.length+' plans in scope'):'Signal quality')+'</div></div><div class="ov-mini-kpi"><div class="ov-kpi"><div class="ov-kpi-val">'+FM.n(source.length)+'</div><div class="ov-kpi-sub">Plans Tracked</div></div><div class="ov-kpi"><div class="ov-kpi-val">'+FM.usd(ta)+'</div><div class="ov-kpi-sub">Market Assets</div></div><div class="ov-kpi"><div class="ov-kpi-val">'+FM.n(tp)+'</div><div class="ov-kpi-sub">Participants</div></div><div class="ov-kpi"><div class="ov-kpi-val" style="color:'+(avgGrowth>=0?'var(--teal2)':'var(--coral)')+';">'+FM.p(avgGrowth)+'</div><div class="ov-kpi-sub">Avg Growth</div></div></div></div>';
h+='<div class="ov-side-stack"><div class="ov-side-card"><div class="ov-kicker">'+(activeMeta?'Filtered view':'Where to start')+'</div><div style="font-family:Jost,sans-serif;font-size:18px;font-weight:700;color:var(--txh);margin-bottom:6px">'+(activeMeta?('See '+H(activeMeta.label)+' in context'):('Scan the market, then drill down'))+'</div><div class="ov-sub">'+(activeMeta?('Every card below now reflects only plans tagged with this signal. Use it to judge market size, asset concentration, and which cities or providers deserve attention first.'):('Start with concentration and signal cards here, then move into the prospect table once a pocket of opportunity becomes obvious.'))+'</div></div><div class="ov-side-card"><div class="ov-kicker">Priority signals</div><div class="ov-signal-stack">';
[['HGR','rgba(62,142,138,.10)','var(--teal2)'],['NSH','rgba(238,107,77,.10)','var(--coral)'],['HBL','rgba(17,138,169,.10)','var(--acc2)']].forEach(function(sig){
  var key=sig[0], meta=DASH_SIGNAL_META[key], ct=source.filter(function(p){return dashSignalMatch(p,key)}).length;
  h+='<div class="signal-card'+(activeDashSignal===key?' is-active':'')+'" data-sig="'+key+'" style="background:'+sig[1]+';padding:12px"><div class="signal-ct" style="color:'+sig[2]+'">'+ct+'</div><div class="signal-nm">'+meta.label+'</div><div class="signal-desc">'+meta.desc+'</div></div>';
});
h+='</div></div></div></div>';
if(activeMeta){
  h+='<div class="ov-filter-bar"><div class="ov-filter-copy"><span class="ov-filter-label">Filtered by</span><span class="ov-filter-pill">'+H(activeMeta.label)+' · '+FM.n(source.length)+' plans</span></div><div style="display:flex;gap:6px"><button class="btn" id="ovViewProspects" style="font-size:9px;padding:4px 10px;background:var(--acc);color:#fff;border-color:var(--acc)">VIEW IN PROSPECTS</button><button class="ov-filter-clear" id="ovFilterClear">Clear</button></div></div>';
}
h+='<div class="dash-grid">';

// === SMART LISTS (curated prospect entry points) ===
var smartLists=[
  {name:'Hot Prospects',desc:'Score 70+, no advisor on filing',filter:function(p){return p[12]>=70&&!p[20]}},
  {name:'High-Fee Displacement',desc:'Above-median cost/participant, no advisor on filing',filter:function(p){return p[31]>=500&&!p[20]&&p[4]>=1e6}},
  {name:'Growing Plans',desc:'15%+ asset growth, $1M+ in assets',filter:function(p){return p[6]>=15&&p[4]>=1e6}},
  {name:'Large, No Advisor on Filing',desc:'$5M+ assets, no advisor listed on 5500',filter:function(p){return p[4]>=5e6&&!p[20]}},
  {name:'Plan Design Openers',desc:'No safe harbor or auto-enroll, no advisor on filing',filter:function(p){return(p[8]||'').indexOf('2S')<0&&(p[8]||'').indexOf('2T')<0&&(p[8]||'').indexOf('2V')<0&&!p[20]}},
  {name:'Healthcare Plans',desc:'Physician, dental, and hospital plans',filter:function(p){return p[38]&&(p[38].indexOf('Physician')>=0||p[38].indexOf('Dental')>=0||p[38].indexOf('Health')>=0||p[38].indexOf('Hospital')>=0)}},
];
h+='<div class="dash-card" style="grid-column:1/-1"><div class="dc-hdr"><div class="dc-title">Smart Lists</div><div class="dc-badge">Pre-built prospect filters</div></div><div class="dc-body"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">';
for(var sli=0;sli<smartLists.length;sli++){
  var sl=smartLists[sli];
  var slCount=source.filter(sl.filter).length;
  h+='<div class="smart-list-card" data-smartlist="'+sli+'" style="padding:12px;border:1px solid var(--brd);border-radius:10px;cursor:pointer;transition:all .15s;background:var(--bg3)">';
  h+='<div style="display:flex;justify-content:space-between;align-items:flex-start">';
  h+='<div><div style="font-size:12px;font-weight:700;color:var(--txh);font-family:Jost,sans-serif">'+sl.name+'</div>';
  h+='<div style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:2px">'+sl.desc+'</div></div>';
  h+='<div style="font-family:IBM Plex Mono,monospace;font-size:18px;font-weight:700;color:var(--acc2)">'+slCount+'</div>';
  h+='</div></div>';
}
h+='</div></div></div>';

// === TODAY'S TOP 5 PROSPECTS ===
var top5=source.filter(function(p){return !p[20]}).sort(function(a,b){return b[12]-a[12]}).slice(0,5);
h+='<div class="dash-card"><div class="dc-hdr"><div class="dc-title">Today\'s Top Prospects</div><div class="dc-badge">Highest-scoring unadvised</div></div><div class="dc-body">';
for(var ti=0;ti<top5.length;ti++){
  var tp=top5[ti];
  var tpScc=tp[12]>=70?'var(--coral)':tp[12]>=50?'var(--teal2)':'var(--acc2)';
  h+='<div class="top-prospect-row" data-ein="'+tp[14]+'" style="padding:10px 0;border-bottom:1px solid var(--brd);cursor:pointer;transition:background .15s">';
  h+='<div style="display:flex;justify-content:space-between;align-items:center">';
  h+='<div style="flex:1;min-width:0"><div style="font-size:12px;font-weight:600;color:var(--txh);font-family:Jost,sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+H(tp[0])+'</div>';
  h+='<div style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif">'+H(tp[1]).substring(0,30)+' &middot; '+FM.usd(tp[4])+' &middot; '+FM.n(tp[7])+' part.</div></div>';
  h+='<div style="font-family:IBM Plex Mono,monospace;font-size:16px;font-weight:700;color:'+tpScc+';margin-left:12px">'+tp[12]+'</div>';
  h+='</div></div>';
}
h+='</div></div>';

// === PIPELINE SUMMARY ===
var shortlistedPlans=Object.keys(shortlist).length;
var plansWithActivity=0,plansWithNotes=0;
for(var pi=0;pi<D.length;pi++){
  var planEin=D[pi][14];
  if(localStorage.getItem('act_'+planEin)){
    var acts=JSON.parse(localStorage.getItem('act_'+planEin)||'[]');
    if(acts.length>0)plansWithActivity++;
  }
  if(localStorage.getItem('note_'+planEin))plansWithNotes++;
}
h+='<div class="dash-card"><div class="dc-hdr"><div class="dc-title">Your Pipeline</div><div class="dc-badge">Activity summary</div></div><div class="dc-body">';
h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">';
h+='<div style="padding:14px;border-radius:8px;background:rgba(17,138,169,.06);text-align:center"><div style="font-family:IBM Plex Mono,monospace;font-size:24px;font-weight:700;color:var(--acc2)">'+shortlistedPlans+'</div><div style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:4px">Shortlisted</div></div>';
h+='<div style="padding:14px;border-radius:8px;background:rgba(62,142,138,.06);text-align:center"><div style="font-family:IBM Plex Mono,monospace;font-size:24px;font-weight:700;color:var(--teal2)">'+plansWithActivity+'</div><div style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:4px">With Activity</div></div>';
h+='<div style="padding:14px;border-radius:8px;background:rgba(235,220,197,.08);text-align:center"><div style="font-family:IBM Plex Mono,monospace;font-size:24px;font-weight:700;color:var(--sand)">'+plansWithNotes+'</div><div style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:4px">With Notes</div></div>';
h+='<div style="padding:14px;border-radius:8px;background:rgba(238,107,77,.06);text-align:center"><div style="font-family:IBM Plex Mono,monospace;font-size:24px;font-weight:700;color:var(--coral)">'+noAdv+'</div><div style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:4px">No Advisor on Filing</div></div>';
h+='</div></div></div>';
h+='<div class="dash-card"><div class="dc-hdr"><div class="dc-title">Recordkeeper Market Share</div><div class="dc-badge">'+hasRK+' identified</div></div><div class="dc-body">';
for(var i=0;i<rkTop.length;i++){var t=rkTop[i];h+='<div class="rk-row" style="cursor:pointer" data-rk="'+H(t[0])+'"><div class="rk-rank">'+(i+1)+'</div><div class="rk-name">'+H(t[0])+'</div><div class="rk-bar-wrap"><div class="rk-bar" style="width:'+(t[1]/rkMax*100)+'%;background:var(--acc)"></div></div><div class="rk-ct">'+t[1]+'</div></div>'}
if(!rkTop.length)h+='<div style="font-size:12px;color:var(--tx3);font-family:Jost,sans-serif">No recordkeeper data in this slice.</div>';
h+='</div></div>';
h+='<div class="dash-card"><div class="dc-hdr"><div class="dc-title">Plan Breakdown</div></div><div class="dc-body">';
h+='<div style="margin-bottom:14px;font-size:10px;color:var(--tx3);text-transform:uppercase;letter-spacing:1px;font-weight:600;font-family:Jost,sans-serif">Plan Types</div>';
var types=[['401(k)',k401,'var(--acc)'],['403(b)',k403b,'var(--teal)'],['Defined Benefit / Cash Balance',dbPlans,'var(--coral)'],['Other',otherType,'var(--sand2)']];
for(var i=0;i<types.length;i++){h+='<div class="comp-row"><div class="comp-icon" style="background:'+types[i][2]+'"></div><div class="comp-name">'+types[i][0]+'</div><div class="comp-val">'+FM.n(types[i][1])+'</div><div class="comp-pct">'+(source.length?(types[i][1]/source.length*100).toFixed(0):0)+'%</div></div>'}
h+='<div style="margin-top:16px;margin-bottom:8px;font-size:10px;color:var(--tx3);text-transform:uppercase;letter-spacing:1px;font-weight:600;font-family:Jost,sans-serif">Asset Size</div>';
var sizes=[['Under $1M',sz1,'var(--bg5)'],['$1M - $5M',sz2,'var(--teal)'],['$5M - $10M',sz3,'var(--acc)'],['$10M - $50M',sz4,'var(--coral)'],['$50M+',sz5,'var(--sand2)']];
for(var i=0;i<sizes.length;i++){h+='<div class="comp-row"><div class="comp-icon" style="background:'+sizes[i][2]+'"></div><div class="comp-name">'+sizes[i][0]+'</div><div class="comp-val">'+FM.n(sizes[i][1])+'</div><div class="comp-pct">'+(source.length?(sizes[i][1]/source.length*100).toFixed(0):0)+'%</div></div>'}
h+='</div></div>';
h+='<div class="dash-card"><div class="dc-hdr"><div class="dc-title">Top RK in Prospect Universe</div><div class="dc-badge">&le;300p &middot; $1M+ &middot; no adv</div></div><div class="dc-body">';
for(var i=0;i<prospectTop.length;i++){h+='<div class="rk-row" style="cursor:pointer" data-rk="'+H(prospectTop[i][0])+'"><div class="rk-rank">'+(i+1)+'</div><div class="rk-name">'+H(prospectTop[i][0])+'</div><div class="rk-bar-wrap"><div class="rk-bar" style="width:'+(prospectTop[i][1]/prospectMax*100)+'%;background:var(--coral)"></div></div><div class="rk-ct">'+prospectTop[i][1]+'</div></div>'}
if(!prospectTop.length)h+='<div style="font-size:12px;color:var(--tx3);font-family:Jost,sans-serif">No prospect-universe recordkeepers in this slice.</div>';
h+='</div></div>';
h+='<div class="dash-card"><div class="dc-hdr"><div class="dc-title">Top Markets by AUM</div></div><div class="dc-body">';
for(var i=0;i<topCities.length;i++){var cn=titleCaseCity(topCities[i][0]);h+='<div class="rk-row" style="cursor:pointer" data-city="'+H(topCities[i][0])+'"><div class="rk-rank">'+(i+1)+'</div><div class="rk-name">'+H(cn)+'</div><div class="rk-bar-wrap"><div class="rk-bar" style="width:'+(topCities[i][1][1]/topCityMax*100)+'%;background:var(--teal)"></div></div><div class="rk-ct">'+topCities[i][1][0]+' / '+FM.usd(topCities[i][1][1])+'</div></div>'}
if(!topCities.length)h+='<div style="font-size:12px;color:var(--tx3);font-family:Jost,sans-serif">No market data in this slice.</div>';
h+='</div></div></div>';
el.innerHTML=h;
document.querySelectorAll('[data-city]').forEach(function(node){node.addEventListener('click',function(){fi.c=this.dataset.city;go('tbl')})});
document.querySelectorAll('[data-rk]').forEach(function(node){
  node.addEventListener('click',function(){
    var rk=this.dataset.rk;
    fi={s:'',c:'',ms:0,ma:0,maMax:0,t:'',ia:'',prov:rk,minP:0,maxP:0,short:'',ind:''};
    go('tbl');
    toast('Displacement view: '+rk+' plans','info');
  });
});
document.querySelectorAll('[data-sig]').forEach(function(node){node.addEventListener('click',function(){var sig=this.dataset.sig;activeDashSignal=(activeDashSignal===sig?'':sig);rDash()})});
var clearBtn=document.getElementById('ovFilterClear');
if(clearBtn)clearBtn.addEventListener('click',function(){activeDashSignal='';rDash()});
var viewProsp=document.getElementById('ovViewProspects');
if(viewProsp)viewProsp.addEventListener('click',function(){
  var sigLabel=DASH_SIGNAL_META[activeDashSignal]?DASH_SIGNAL_META[activeDashSignal].label:'';
  fi.s=activeDashSignal;go('tbl');toast('Filtered to '+sigLabel+' plans','info');
});

// Smart List click handlers
var smartListFilters=[
  function(p){return p[12]>=70&&!p[20]},
  function(p){return p[31]>=500&&!p[20]&&p[4]>=1e6},
  function(p){return p[6]>=15&&p[4]>=1e6},
  function(p){return p[4]>=5e6&&!p[20]},
  function(p){return(p[8]||'').indexOf('2S')<0&&(p[8]||'').indexOf('2T')<0&&(p[8]||'').indexOf('2V')<0&&!p[20]},
  function(p){return p[38]&&(p[38].indexOf('Physician')>=0||p[38].indexOf('Dental')>=0||p[38].indexOf('Health')>=0||p[38].indexOf('Hospital')>=0)},
];
document.querySelectorAll('[data-smartlist]').forEach(function(card){
  card.addEventListener('click',function(){
    var idx=+this.dataset.smartlist;
    var filterFn=smartListFilters[idx];
    if(!filterFn)return;
    fd=D.filter(filterFn).sort(function(a,b){return b[12]-a[12]});
    pg=0;go('tbl');rTH();rTR();
    toast('Smart list applied','success');
  });
  card.addEventListener('mouseenter',function(){this.style.borderColor='var(--acc)';this.style.transform='translateY(-1px)'});
  card.addEventListener('mouseleave',function(){this.style.borderColor='var(--brd)';this.style.transform=''});
});

// Top Prospects click to open detail
document.querySelectorAll('.top-prospect-row').forEach(function(row){
  row.addEventListener('click',function(){
    var ein=this.dataset.ein;
    for(var i=0;i<D.length;i++){
      if(D[i][14]===ein){go('tbl');oD(i,D);break}
    }
  });
  row.addEventListener('mouseenter',function(){this.style.background='rgba(17,138,169,.04)'});
  row.addEventListener('mouseleave',function(){this.style.background=''});
});
}

