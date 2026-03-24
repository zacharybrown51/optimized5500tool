// --- Plan Detail Panel ---
function oD(idx,src,isPreview){sel=idx;var p=src[idx];
var dl=document.getElementById('dtl');
var sv=localStorage.getItem('note_'+p[14])||'';

// Score classification
var scc=p[12]>=70?'var(--coral)':p[12]>=50?'var(--teal2)':p[12]>=30?'var(--acc2)':'var(--tx3)';
var slbl=p[12]>=70?'HOT PROSPECT':p[12]>=50?'WARM LEAD':p[12]>=30?'MODERATE':'LOW PRIORITY';

var h='<div class="dtl-hdr"><div>';
h+='<div style="font-size:15px;font-weight:700;color:var(--txh);font-family:Jost,sans-serif;line-height:1.3">'+H(p[0])+'</div>';
h+='<div style="font-size:11px;color:var(--tx2);margin-top:2px;font-family:Jost,sans-serif">'+H(p[1])+'</div>';
h+='<div style="font-size:10px;color:var(--tx3);margin-top:4px;font-family:IBM Plex Mono,monospace">'+p[2]+', CA '+p[3]+' &middot; EIN: '+p[14]+(p[38]?' &middot; '+H(p[38]):'')+'</div>';h+='<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:6px">'+(isShortlisted(p[14])?'<span class="short-pill">★ Saved</span>':'')+'</div>';
h+='</div><button class="dtl-x" id="dc">&times;</button></div>';

h+='<div class="dtl-b">';

// === DECISIVE TOP SECTION ===
var verdict=(function(){
if(p[12]>=70)return 'Strong prospect';
if(p[12]>=50)return 'Worth a close look';
if(p[12]>=30)return 'Selective follow-up';
return 'Lower-priority target';
})();
var whyRows=(function(){
var rows=[];
var addRow=function(score,title,detail,key){rows.push({score:score,title:title,detail:detail,key:key||title})};
if(!p[20])addRow(98,'No advisor listed on filing','May indicate competitive opening','advisor');
else addRow(26,'Advisor already listed',H(p[20]),'advisor');
if(p[4]>=5e6&&p[4]<50e6)addRow(92,'Asset range fits core prospecting lane',FM.usd(p[4])+' total assets','assets');
else if(p[4]>=50e6)addRow(81,'Meaningful asset pool',FM.usd(p[4])+' in plan assets','assets');
else if(p[4]>0)addRow(52,'Established plan asset base',FM.usd(p[4])+' total assets','assets');
if(p[6]>=20)addRow(88,'Fast recent growth',FM.p(p[6])+' year over year','growth');
else if(p[6]>=8)addRow(67,'Positive asset growth',FM.p(p[6])+' year over year','growth');
else if(p[6]<-8)addRow(22,'Asset base has softened',FM.p(p[6])+' year over year','growth');
if(p[7]>=20&&p[7]<=300)addRow(72,'Participant count sits in a workable range',FM.n(p[7])+' participants','parts');
else if(p[7]>0)addRow(41,'Participant count',FM.n(p[7])+' participants','parts');
if(p[11].indexOf('NSH')>=0)addRow(76,'No safe harbor design','more plan design context to explore','nsh');
if(p[11].indexOf('HBL')>=0)addRow(73,'Higher-balance population',p[23]?'~$'+FM.n(p[23])+' per participant':'balance signal flagged','hbl');
if(p[11].indexOf('HGR')>=0)addRow(69,'Signal density is constructive','high-growth tag present','hgr');
if(p[11].indexOf('LTC')>=0)addRow(34,'Compliance follow-up may be needed','late contribution flag present','ltc');
var seen={};rows=rows.filter(function(r){if(seen[r.key])return false;seen[r.key]=1;return true}).sort(function(a,b){return b.score-a.score});
return rows.slice(0,4);
})();
var summaryBits=whyRows.slice(0,3).map(function(r){return r.title.toLowerCase()});
var verdictSummary=summaryBits.join(' · ');
if(!verdictSummary)verdictSummary='surface-level fit is modest, but still reviewable';

h+='<div style="margin-bottom:16px;padding:16px 16px 14px;border:1px solid var(--brd);border-radius:16px;background:var(--bg2);box-shadow:var(--shadow-sm)">';
h+='<div style="display:grid;grid-template-columns:104px minmax(0,1fr);gap:14px;align-items:start">';
h+='<div style="padding:12px 10px;border-radius:14px;background:rgba(17,138,169,.06);border:1px solid rgba(17,138,169,.12);text-align:center">';
h+='<div style="font-family:Jost,sans-serif;font-size:10px;font-weight:700;letter-spacing:.9px;text-transform:uppercase;color:var(--tx3)">Prospect Score</div>';
h+='<div style="font-family:IBM Plex Mono,monospace;font-size:34px;font-weight:700;line-height:1;color:'+scc+';margin-top:8px">'+p[12]+'</div>';
h+='<div style="font-family:Jost,sans-serif;font-size:10px;font-weight:600;color:var(--tx2);margin-top:6px">'+slbl+'</div>';
h+='</div>';
h+='<div>';
h+='<div style="font-family:Jost,sans-serif;font-size:18px;font-weight:700;line-height:1.2;color:var(--txh)">'+verdict+'</div>';
h+='<div style="font-family:Jost,sans-serif;font-size:12px;line-height:1.5;color:var(--tx2);margin-top:5px">'+verdictSummary+'</div>';
h+='<div style="height:6px;background:var(--bg);border-radius:999px;overflow:hidden;margin-top:12px"><div style="width:'+p[12]+'%;height:100%;background:'+scc+';border-radius:999px"></div></div>';
h+='<div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:12px">';
h+='<div style="padding:10px 11px;border-radius:12px;background:var(--bg3);border:1px solid var(--brd);min-height:76px;display:flex;flex-direction:column;justify-content:flex-start;text-align:left"><div style="font-family:Jost,sans-serif;font-size:9px;color:var(--tx3);font-weight:700;letter-spacing:.7px;text-transform:uppercase">Assets</div><div style="font-family:IBM Plex Mono,monospace;font-size:14px;font-weight:700;color:var(--txh);margin-top:6px;line-height:1.2">'+FM.usd(p[4])+'</div></div>';
h+='<div style="padding:10px 11px;border-radius:12px;background:var(--bg3);border:1px solid var(--brd);min-height:76px;display:flex;flex-direction:column;justify-content:flex-start;text-align:left"><div style="font-family:Jost,sans-serif;font-size:9px;color:var(--tx3);font-weight:700;letter-spacing:.7px;text-transform:uppercase">Particip.</div><div style="font-family:IBM Plex Mono,monospace;font-size:14px;font-weight:700;color:var(--txh);margin-top:6px;line-height:1.2">'+FM.n(p[7])+'</div></div>';
h+='<div style="padding:10px 11px;border-radius:12px;background:var(--bg3);border:1px solid var(--brd);min-height:76px;display:flex;flex-direction:column;justify-content:flex-start;text-align:left"><div style="font-family:Jost,sans-serif;font-size:9px;color:var(--tx3);font-weight:700;letter-spacing:.7px;text-transform:uppercase">Growth</div><div style="font-family:IBM Plex Mono,monospace;font-size:14px;font-weight:700;color:'+(p[6]>=0?'var(--teal2)':'var(--coral)')+';margin-top:6px;line-height:1.2">'+FM.p(p[6])+'</div></div>';
h+='<div style="padding:10px 11px;border-radius:12px;background:var(--bg3);border:1px solid var(--brd);min-height:76px;display:flex;flex-direction:column;justify-content:flex-start;text-align:left"><div style="font-family:Jost,sans-serif;font-size:9px;color:var(--tx3);font-weight:700;letter-spacing:.7px;text-transform:uppercase">Plan Type</div><div style="font-family:Jost,sans-serif;font-size:13px;font-weight:700;color:var(--txh);margin-top:6px;line-height:1.25">'+H((p[22]||p[9]||'401(k)').split('|')[0])+'</div></div>';
h+='</div>';
h+='</div></div>';
h+='<div style="margin-top:14px;padding-top:12px;border-top:1px solid var(--brd)">';
h+='<div style="font-family:Jost,sans-serif;font-size:10px;font-weight:700;letter-spacing:.9px;text-transform:uppercase;color:var(--tx3);margin-bottom:8px">Why it surfaced</div>';
h+='<div style="display:grid;gap:7px">'+whyRows.map(function(row){return '<div style="display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:flex-start;gap:12px;padding:8px 10px;border-radius:10px;background:var(--bg3);border:1px solid var(--brd)"><div><div style="font-family:Jost,sans-serif;font-size:11px;line-height:1.35;color:var(--tx);font-weight:700">'+row.title+'</div><div style="font-family:Jost,sans-serif;font-size:10.5px;line-height:1.35;color:var(--tx2);margin-top:2px">'+row.detail+'</div></div><span style="font-family:IBM Plex Mono,monospace;font-size:10px;line-height:1;color:var(--acc2);background:rgba(17,138,169,.08);border:1px solid rgba(17,138,169,.14);padding:5px 6px;border-radius:999px">'+row.score+'</span></div>';}).join('')+'</div>';
h+='</div>';
h+='</div>';

// Quick actions
h+='<div style="display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap">';
h+='<button class="btn" id="qa-short" style="flex:1;font-size:9px;padding:6px;background:'+(isShortlisted(p[14])?'var(--acc)':'rgba(255,255,255,.92)')+';color:'+(isShortlisted(p[14])?'#fff':'var(--tx2)')+';border-color:'+(isShortlisted(p[14])?'var(--acc)':'var(--brd2)')+'">'+shortlistButtonLabel(p)+'</button>';
h+='<button class="btn" id="qa-copy" style="flex:1;font-size:9px;padding:6px">COPY INFO</button>';
h+='<button class="btn" id="qa-goog" style="flex:1;font-size:9px;padding:6px;background:var(--acc);color:#fff;border-color:var(--acc)">GOOGLE</button>';
h+='<button class="btn" id="qa-li" style="flex:1;font-size:9px;padding:6px;background:#0a66c2;color:#fff;border-color:#0a66c2">LINKEDIN</button>';
if(p[13])h+='<a href="'+p[13]+'" target="_blank" class="btn" style="flex:1;font-size:9px;padding:6px;text-align:center;text-decoration:none">DOL FILING</a>';
h+='</div>';
h+='<div style="display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap">';
h+='<button class="btn" id="qa-similar" style="flex:1;font-size:9px;padding:6px">FIND SIMILAR</button>';
h+='<button class="btn" id="qa-email" style="flex:1;font-size:9px;padding:6px">DRAFT EMAIL</button>';
h+='</div>';

// === KEY METRICS ===
h+='<div class="dtl-sec"><div class="dtl-st">KEY METRICS</div>';
h+='<div class="dtl-g">';
h+='<div class="dtl-i"><div class="dtl-il">Total Assets</div><div class="dtl-iv">'+FM.usd(p[4])+'</div><div style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:4px">BOY: '+FM.usd(p[5])+'</div></div>';
h+='<div class="dtl-i"><div class="dtl-il">Growth</div><div class="dtl-iv" style="color:'+(p[6]>=0?'var(--teal2)':'var(--coral)')+'">'+FM.p(p[6])+'</div></div>';
h+='<div class="dtl-i"><div class="dtl-il">Particip.</div><div class="dtl-iv">'+FM.n(p[7])+'</div><div style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:4px">BOY: '+FM.n(p[17])+'</div></div>';
h+='<div class="dtl-i"><div class="dtl-il">Per Participant</div><div class="dtl-iv">'+(p[23]?'$'+FM.n(p[23]):'--')+'</div></div>';
h+='</div></div>';

// === FEE INFORMATION ===
(function(){
var hasFees=p[29]>0||p[30]>0||p[35]>0||p[31]>0;
if(!hasFees)return;
h+='<div class="dtl-sec"><div class="dtl-st">FEE INFORMATION</div>';
h+='<div class="dtl-g">';
if(p[31]>0)h+='<div class="dtl-i"><div class="dtl-il">Cost Per Participant</div><div class="dtl-iv" style="font-size:14px">$'+FM.n(p[31])+'</div></div>';
if(p[29]>0)h+='<div class="dtl-i"><div class="dtl-il">Plan Admin Fees</div><div class="dtl-iv" style="font-size:12px">'+FM.usd(p[29])+'</div><div style="font-size:9px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:2px">Audit, legal, TPA — from plan assets</div></div>';
if(p[35]>0)h+='<div class="dtl-i"><div class="dtl-il">Total Provider Comp</div><div class="dtl-iv" style="font-size:12px">'+FM.usd(p[35])+'</div><div style="font-size:9px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:2px">Direct comp from Schedule C</div></div>';
if(p[30]>0&&p[30]!==p[29])h+='<div class="dtl-i"><div class="dtl-il">Total Plan Expenses</div><div class="dtl-iv" style="font-size:12px">'+FM.usd(p[30])+'</div></div>';
h+='</div>';
// Indirect comp flag
if(p[36]){
h+='<div style="margin-top:8px;padding:8px 10px;border-radius:6px;background:rgba(235,220,197,.10);border:1px solid rgba(235,220,197,.25)">';
h+='<div style="font-size:10px;font-weight:600;color:var(--sand);font-family:Jost,sans-serif">Revenue Sharing / Indirect Compensation Detected</div>';
if(p[37]>0)h+='<div style="font-size:11px;color:var(--tx2);font-family:Jost,sans-serif;margin-top:3px">Disclosed amount: '+FM.usd(p[37])+'</div>';
else h+='<div style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:3px">Providers received indirect comp (12b-1, sub-TA, revenue sharing) — amount not fully disclosed</div>';
h+='</div>';
}
// Fee per participant benchmark
if(p[31]>0&&p[4]>0){
var fppBuckets=[{label:'Under $1M',max:1e6,median:800,p75:1500},{label:'$1M–$5M',max:5e6,median:450,p75:850},{label:'$5M–$10M',max:1e7,median:300,p75:550},{label:'$10M–$50M',max:5e7,median:200,p75:380},{label:'$50M+',max:Infinity,median:120,p75:250}];
var bucket=fppBuckets[fppBuckets.length-1];
for(var bi=0;bi<fppBuckets.length;bi++){if(p[4]<fppBuckets[bi].max){bucket=fppBuckets[bi];break}}
var vs=p[31]<=bucket.median?'below median':'above median';
var vsC=p[31]<=bucket.median?'var(--teal2)':'var(--coral)';
h+='<div style="margin-top:8px;font-size:10px;color:var(--tx3);font-family:Jost,sans-serif">';
h+='$'+FM.n(p[31])+'/participant is <span style="color:'+vsC+';font-weight:600">'+vs+'</span> for '+bucket.label+' plans';
h+=' (median: $'+FM.n(bucket.median)+', 75th: $'+FM.n(bucket.p75)+')';
h+='</div>';
}
h+='<div style="margin-top:6px;font-size:9px;color:var(--tx3);font-family:Jost,sans-serif;font-style:italic">Note: Excludes investment-level fees (fund expense ratios) which are deducted at the fund level and not reported on Form 5500.</div>';
h+='</div>';
})();

// === PROVIDERS ===
h+='<div class="dtl-sec"><div class="dtl-st">PROVIDERS</div>';
if(p[21].length>0){
var showProvs=p[21].slice(0,8);
h+='<table class="pv-tbl"><thead><tr><th>Provider</th><th style="text-align:right">Compensation</th></tr></thead><tbody>';
for(var pvi=0;pvi<showProvs.length;pvi++){var pv=showProvs[pvi];
var isAdv=pv[1]==='IA';
h+='<tr><td><a href="#" class="prov-link" style="color:var(--acc2);cursor:pointer;text-decoration:none" data-pn="'+H(pv[0])+'">'+H(pv[0])+'</a>'+(isAdv?' <span style="font-size:9px;padding:1px 5px;border-radius:3px;background:rgba(238,107,77,.12);color:var(--coral);font-weight:600;margin-left:4px">ADVISOR</span>':'')+'</td><td style="text-align:right">'+(pv[2]?'$'+FM.n(pv[2]):'--')+'</td></tr>'}
if(p[21].length>8)h+='<tr><td colspan="2" style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif;text-align:center;padding:6px">+'+(p[21].length-8)+' more on full filing</td></tr>';
h+='</tbody></table>';
// Research links for key providers
var advName=p[20];
var rkName=p[18];
if(advName||rkName){
h+='<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">';
if(advName)h+='<a href="https://adviserinfo.sec.gov/search/genericsearch/firmgrid?SearchValue='+encodeURIComponent(advName)+'&SearchType=FirmName" target="_blank" class="btn" style="font-size:9px;padding:4px 8px;text-decoration:none;color:var(--acc2);border-color:var(--acc2)">SEC ADV: '+H(advName.length>20?advName.substring(0,20)+'...':advName)+'</a>';
if(rkName)h+='<a href="https://www.google.com/search?q='+encodeURIComponent(rkName+' 401k recordkeeper reviews')+'" target="_blank" class="btn" style="font-size:9px;padding:4px 8px;text-decoration:none">Research '+H(rkName.length>15?rkName.substring(0,15)+'...':rkName)+'</a>';
h+='</div>';
}
}
else{
h+='<div style="font-size:11px;color:var(--tx3);font-family:Jost,sans-serif;padding:8px 0">No Schedule C providers reported'+(p[20]?' (advisor: <span style="color:var(--coral)">'+H(p[20])+'</span>)':'')+'</div>';
}
if(!p[20]){
h+='<div style="font-size:9px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:6px;font-style:italic">No investment advisor listed on Schedule C. Advisors compensated outside the plan (e.g. billed directly to the sponsor) will not appear on the Form 5500.</div>';
}
h+='</div>';

// === SIGNALS & PLAN DESIGN ===
var signals=p[11]?p[11].split(',').filter(function(s){return s&&SIG_SHOW[s]}):'';
var feats=p[22]?p[22].split('|'):[];
if(signals.length>0||feats.length>0){
h+='<div class="dtl-sec"><div class="dtl-st">SIGNALS & PLAN DESIGN</div>';
h+='<div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px">';
var SIG2={NSH:'No Safe Harbor',DEC:'Declining Assets',HGR:'High Growth',HBL:'High Avg Balance',LTC:'Late Contributions'};
var SIGC2={NSH:'var(--coral)',DEC:'var(--coral)',HGR:'var(--teal2)',HBL:'var(--acc2)',LTC:'var(--coral)'};
for(var si=0;si<signals.length;si++){var sg=signals[si];h+='<span class="sig-tag" style="background:rgba(0,0,0,.06);color:'+(SIGC2[sg]||'var(--tx2)')+'">'+sg+': '+(SIG2[sg]||sg)+'</span>'}
for(var fi2=0;fi2<feats.length;fi2++){h+='<span class="feat-tag">'+feats[fi2]+'</span>'}
h+='</div>';
h+='</div>'}

// === INVESTMENT SCAN ===
h+='<div class="dtl-sec"><div class="dtl-st">INVESTMENT LINEUP</div>';
// Show likely TDF from RK mapping
if(p[34]){
h+='<div style="padding:10px 12px;border-radius:8px;background:rgba(62,142,138,.06);border:1px solid rgba(62,142,138,.14);margin-bottom:10px;display:flex;align-items:center;gap:10px">';
h+='<div style="font-family:Jost,sans-serif;font-size:11px;color:var(--tx3);white-space:nowrap">Likely TDF</div>';
h+='<div style="font-family:Jost,sans-serif;font-size:13px;font-weight:700;color:var(--teal2)">'+H(p[34])+'</div>';
h+='<div style="font-size:9px;color:var(--tx3);font-family:Jost,sans-serif;margin-left:auto">based on RK</div>';
h+='</div>';
}
// EDGAR results area (auto-populated)
h+='<div id="scanResults_'+p[14].replace(/-/g,'')+'">';
h+='<div style="font-size:10px;color:var(--acc2);font-family:Jost,sans-serif;padding:8px 0" id="edgarAutoStatus"><span style="display:inline-block;width:10px;height:10px;border:2px solid var(--acc2);border-top-color:transparent;border-radius:50%;animation:spin .8s linear infinite;vertical-align:middle;margin-right:6px"></span>Searching SEC EDGAR...</div>';
h+='</div>';
// PDF scan fallback (shown after EDGAR completes)
h+='<div id="pdfScanFallback" style="display:none">';
h+='<div style="display:flex;gap:8px">';
h+='<div id="scanDrop" data-ein="'+p[14].replace(/-/g,'')+'" data-planname="'+H(p[0])+'" style="flex:1;border:2px dashed var(--brd);border-radius:8px;padding:14px;text-align:center;cursor:pointer;transition:all .2s">';
h+='<div style="font-size:11px;color:var(--tx2);font-family:Jost,sans-serif;margin-bottom:2px">Drop 5500 PDF to scan fund lineup</div>';
h+='<div style="font-size:9px;color:var(--tx3);font-family:Jost,sans-serif">Pattern matching \u2022 free \u2022 instant</div>';
h+='<input type="file" id="scanFileInput" accept=".pdf" style="display:none">';
h+='</div>';
h+='</div>';
h+='<div id="scanStatus" style="display:none;font-size:10px;color:var(--acc2);font-family:Jost,sans-serif;margin-top:8px"></div>';
h+='</div>';
h+='</div>';

// === GENERATE REPORT ===
h+='<button class="snap-btn" id="sg">GENERATE PLAN REPORT</button>';

// === NOTES ===
h+='<div class="dtl-sec" style="margin-top:16px"><div class="dtl-st">OUTREACH & NOTES</div>';
// Activity log
var activities=JSON.parse(localStorage.getItem('act_'+p[14])||'[]');
h+='<div style="display:flex;gap:4px;margin-bottom:8px;flex-wrap:wrap">';
h+='<button class="btn act-btn" data-act="called" style="font-size:9px;padding:4px 8px">+ Called</button>';
h+='<button class="btn act-btn" data-act="emailed" style="font-size:9px;padding:4px 8px">+ Emailed</button>';
h+='<button class="btn act-btn" data-act="meeting" style="font-size:9px;padding:4px 8px">+ Meeting</button>';
h+='<button class="btn act-btn" data-act="proposal" style="font-size:9px;padding:4px 8px">+ Proposal</button>';
h+='<button class="btn act-btn" data-act="note" style="font-size:9px;padding:4px 8px">+ Note</button>';
h+='</div>';
if(activities.length>0){
h+='<div id="actLog" style="margin-bottom:8px;max-height:120px;overflow-y:auto">';
for(var ai=activities.length-1;ai>=0;ai--){
  var act=activities[ai];
  var actLabel=act.type==='called'?'CALL':act.type==='emailed'?'EMAIL':act.type==='meeting'?'MTG':act.type==='proposal'?'PROP':'NOTE';
  h+='<div style="font-size:10px;color:var(--tx2);font-family:Jost,sans-serif;padding:4px 0;border-bottom:1px solid var(--brd);display:flex;gap:6px;align-items:flex-start">';
  h+='<span style="font-family:IBM Plex Mono,monospace;font-size:8px;font-weight:700;color:var(--acc2);background:rgba(17,138,169,.08);padding:2px 5px;border-radius:3px">'+actLabel+'</span><span style="color:var(--tx3);font-family:IBM Plex Mono,monospace;font-size:9px;white-space:nowrap">'+act.date+'</span>';
  h+='<span style="flex:1">'+H(act.text||act.type)+'</span>';
  h+='<button class="act-del" data-aidx="'+ai+'" style="background:none;border:none;color:var(--tx3);cursor:pointer;font-size:12px;padding:0 2px">&times;</button>';
  h+='</div>';
}
h+='</div>';
}
h+='<textarea class="notes" id="dn" placeholder="Contact info, next steps, general notes...">'+H(sv)+'</textarea></div>';

h+='</div>';
dl.innerHTML=h;

// Wire events
document.getElementById('dc').addEventListener('click',cD);
document.getElementById('dn').addEventListener('input',function(){localStorage.setItem('note_'+p[14],this.value);if(ct==='tbl')rTR()});
// Activity log buttons
document.querySelectorAll('.act-btn').forEach(function(btn){btn.addEventListener('click',function(){
  var actType=this.dataset.act;
  var text=actType;
  if(actType==='note'){text=prompt('Add a note:');if(!text)return}
  var acts=JSON.parse(localStorage.getItem('act_'+p[14])||'[]');
  acts.push({type:actType,text:text,date:new Date().toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})});
  localStorage.setItem('act_'+p[14],JSON.stringify(acts));
  toast('Activity logged: '+actType,'success');
  oD(sel,fd);
})});
document.querySelectorAll('.act-del').forEach(function(btn){btn.addEventListener('click',function(){
  var aidx=+this.dataset.aidx;
  var acts=JSON.parse(localStorage.getItem('act_'+p[14])||'[]');
  acts.splice(aidx,1);
  localStorage.setItem('act_'+p[14],JSON.stringify(acts));
  oD(sel,fd);
})});
var qaShort=document.getElementById('qa-short');if(qaShort){qaShort.addEventListener('click',function(){
var saved=toggleShortlistPlan(p);
this.textContent=saved?'SAVED':'SHORTLIST';
this.style.background=saved?'var(--acc)':'rgba(255,255,255,.92)';
this.style.color=saved?'#fff':'var(--tx2)';
this.style.borderColor=saved?'var(--acc)':'var(--brd2)';
toast(saved?'Added to shortlist':'Removed from shortlist',saved?'success':'info');
rTR();
})}
document.getElementById('qa-copy').addEventListener('click',function(){var t=p[0]+'\n'+p[1]+'\n'+p[2]+', CA '+p[3]+'\nEIN: '+p[14]+'\nAssets: '+FM.usd(p[4])+'\nParticipants: '+p[7]+'\nRK: '+(p[18]||'Unknown')+'\nScore: '+p[12];navigator.clipboard.writeText(t);toast('Plan info copied to clipboard','success')});
document.getElementById('qa-goog').addEventListener('click',function(){window.open('https://www.google.com/search?q='+encodeURIComponent(p[1]+' '+p[2]+' 401k'),'_blank')});
document.getElementById('qa-li').addEventListener('click',function(){window.open('https://www.linkedin.com/search/results/companies/?keywords='+encodeURIComponent(p[1]),'_blank')});
document.getElementById('sg').addEventListener('click',function(){gSnap(p)});

// Similar Plans finder
document.getElementById('qa-similar').addEventListener('click',function(){
  var results=findSimilarPlans(p);
  if(results.length===0){toast('No similar plans found','warn');return}
  // Close detail panel, filter to similar plans, jump to prospects
  var simEINs={};for(var i=0;i<results.length;i++)simEINs[results[i][14]]=true;
  simEINs[p[14]]=true;// include current plan
  fd=D.filter(function(plan){return simEINs[plan[14]]});
  fd.sort(function(a,b){return b[12]-a[12]});
  pg=0;dl.classList.remove('open');
  if(ct!=='tbl')go('tbl');
  rTH();rTR();
  toast('Found '+results.length+' similar plans','success');
});

// Draft Email
document.getElementById('qa-email').addEventListener('click',function(){draftProspectEmail(p)});

// Provider links
document.querySelectorAll('.prov-link').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();var nm=this.dataset.pn;fi.prov=nm;dl.classList.remove('open');go('tbl')})});

// Scan lineup: auto-fire EDGAR lookup, then show PDF fallback
var scanEin=p[14].replace(/-/g,'');
var scanPlanName=p[0];
(function(ein,planName){
  fetch('/api/scan-lineup',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({mode:'edgar-lookup',ein:ein,planName:planName})})
  .then(function(r){return r.json()}).then(function(data){
    var statusEl=document.getElementById('edgarAutoStatus');
    if(data.ok&&((data.edgar&&data.edgar.filings&&data.edgar.filings.length>0)||(data.edgar&&data.edgar.funds&&data.edgar.funds.length>0))){
      // EDGAR found results (or extracted funds from 11-K)
      renderScanResults(ein,data);
      if(statusEl)statusEl.style.display='none';
    }else{
      // No EDGAR results — show PDF fallback
      if(statusEl)statusEl.innerHTML='<span style="color:var(--tx3)">No SEC EDGAR filings found for this EIN.</span>';
    }
    // Always show the PDF drop zone as an option
    var fb=document.getElementById('pdfScanFallback');
    if(fb)fb.style.display='block';
  }).catch(function(e){
    var statusEl=document.getElementById('edgarAutoStatus');
    if(statusEl)statusEl.innerHTML='<span style="color:var(--tx3)">EDGAR lookup unavailable.</span>';
    var fb=document.getElementById('pdfScanFallback');
    if(fb)fb.style.display='block';
  });
})(scanEin,scanPlanName);

// PDF scan drop zone
var scanDrop=document.getElementById('scanDrop');if(scanDrop){var scanInput=document.getElementById('scanFileInput');
scanDrop.addEventListener('click',function(e){scanInput.click()});
scanDrop.addEventListener('dragover',function(e){e.preventDefault();this.style.borderColor='var(--acc)';this.style.background='rgba(17,138,169,.04)'});
scanDrop.addEventListener('dragleave',function(){this.style.borderColor='var(--brd)';this.style.background=''});
scanDrop.addEventListener('drop',function(e){e.preventDefault();this.style.borderColor='var(--brd)';this.style.background='';if(e.dataTransfer.files.length)scanLineupFile(scanEin,scanDrop.dataset.planname,e.dataTransfer.files[0])});
scanInput.addEventListener('change',function(){if(this.files.length)scanLineupFile(scanEin,scanDrop.dataset.planname,this.files[0])})}

dl.classList.add('open');rTR()}


function cD(){sel=null;document.getElementById('dtl').classList.remove('open');rTR()}

// --- Plan Snapshot ---
function gSnap(p){
var planName=H(p[0]),sponsor=H(p[1]),city=p[2],zip=p[3],ein=p[14];
var scc=p[12]>=70?'#ee6b4d':p[12]>=50?'#3e8e8a':p[12]>=30?'#118aa9':'#6b7280';
var slbl=p[12]>=70?'Hot Prospect':p[12]>=50?'Warm Lead':p[12]>=30?'Moderate':'Lower Priority';
var w=window.open('','','width=850,height=1100');
var css='@import url("https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap");';
css+='*{margin:0;padding:0;box-sizing:border-box}';
css+='body{font-family:Jost,sans-serif;color:#183042;background:#fff}';
css+='.page{max-width:780px;margin:0 auto;padding:32px 40px}';
css+='.hdr{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #118aa9;padding-bottom:16px;margin-bottom:24px}';
css+='.hdr-left{flex:1}.hdr-right{text-align:right}';
css+='.hdr-logo-img{height:64px;margin-bottom:10px}';
css+='.plan-name{font-size:22px;font-weight:700;line-height:1.2;margin-bottom:4px}';
css+='.sponsor{font-size:13px;color:#6b7280;margin-bottom:2px}';
css+='.meta{font-family:"IBM Plex Mono",monospace;font-size:10px;color:#9ca3af}';
css+='.score-badge{display:inline-block;padding:6px 14px;border-radius:8px;font-family:"IBM Plex Mono",monospace;font-size:24px;font-weight:700;color:#fff;margin-bottom:4px}';
css+='.score-label{font-size:10px;color:#6b7280;text-align:right}';
css+='.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:24px}';
css+='.kpi{border:1px solid #e5e7eb;border-radius:8px;padding:14px}';
css+='.kpi-label{font-size:9px;text-transform:uppercase;letter-spacing:.8px;color:#9ca3af;font-weight:600;margin-bottom:6px}';
css+='.kpi-val{font-family:"IBM Plex Mono",monospace;font-size:18px;font-weight:700;line-height:1}';
css+='.kpi-sub{font-size:9px;color:#9ca3af;margin-top:3px}';
css+='.section{margin-bottom:20px}.sec-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#118aa9;margin-bottom:8px;padding-bottom:4px;border-bottom:1px solid #e5e7eb}';
css+='table{width:100%;border-collapse:collapse;font-size:11px;margin-bottom:4px}';
css+='th{background:#f8fafb;padding:6px 10px;text-align:left;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;border-bottom:1px solid #e5e7eb}';
css+='td{padding:6px 10px;border-bottom:1px solid #f3f4f6}';
css+='.tag{display:inline-block;padding:2px 8px;border-radius:4px;font-size:9px;font-weight:600;background:#f3f4f6;color:#6b7280;margin:2px}';
css+='.two-col{display:grid;grid-template-columns:1fr 1fr;gap:16px}';
css+='.footer{text-align:center;padding-top:16px;border-top:2px solid #e5e7eb;margin-top:24px;font-size:9px;color:#9ca3af}';
css+='.advisor-tag{background:#fef2f2;color:#dc2626}.no-advisor-tag{background:#f0fdfa;color:#0f766e}';
css+='@media print{body{padding:0}button,.no-print{display:none!important}.page{padding:20px 28px}}';
var h='<html><head><title>Plan Report - '+planName+'</title><style>'+css+'</style></head><body><div class="page">';
// Header
h+='<div class="hdr"><div class="hdr-left"><img class="hdr-logo-img" src="'+LOGO_SQUARE_B64+'" alt="Mammini Company"><div class="plan-name">'+planName+'</div><div class="sponsor">'+sponsor+'</div>';
var cityTitle=city.split(' ').map(function(w){return w[0]+w.slice(1).toLowerCase()}).join(' ');
h+='<div class="meta">'+cityTitle+', CA '+zip+' &middot; EIN: '+ein+(p[38]?' &middot; '+H(p[38]):'')+' &middot; Filed '+H(p[15])+'</div>';
h+='</div><div class="hdr-right"><div class="score-badge" style="background:'+scc+'">'+p[12]+'</div><div class="score-label">'+slbl+'</div></div></div>';
// KPIs
h+='<div class="kpi-grid">';
h+='<div class="kpi"><div class="kpi-label">Total Assets</div><div class="kpi-val">'+FM.usd(p[4])+'</div><div class="kpi-sub">Prior year: '+FM.usd(p[5])+'</div></div>';
h+='<div class="kpi"><div class="kpi-label">YoY Growth</div><div class="kpi-val" style="color:'+(p[6]>=0?'#0f766e':'#dc2626')+'">'+FM.p(p[6])+'</div><div class="kpi-sub">&Delta; '+FM.usd(Math.abs(p[4]-p[5]))+'</div></div>';
h+='<div class="kpi"><div class="kpi-label">Participants</div><div class="kpi-val">'+FM.n(p[7])+'</div><div class="kpi-sub">Avg balance: '+(p[23]?'$'+FM.n(p[23]):'--')+'</div></div>';
h+='<div class="kpi"><div class="kpi-label">Contributions</div><div class="kpi-val">'+(p[32]?FM.usd(p[32]):'--')+'</div><div class="kpi-sub">'+(p[33]?'$'+FM.n(p[33])+'/participant':'')+'</div></div>';
h+='</div>';
// Two column layout
h+='<div class="two-col">';
// Left: Providers
h+='<div class="section"><div class="sec-title">Service Providers</div>';
if(p[21].length>0){
h+='<table><thead><tr><th>Provider</th><th style="text-align:right">Compensation</th></tr></thead><tbody>';
for(var i=0;i<Math.min(p[21].length,8);i++){var pv=p[21][i];h+='<tr><td>'+H(pv[0])+(pv[1]==='IA'?' <span class="tag advisor-tag">Advisor</span>':'')+'</td><td style="text-align:right">'+(pv[2]?'$'+FM.n(pv[2]):'--')+'</td></tr>'}
h+='</tbody></table>';
}
h+='<div style="margin-top:8px;font-size:11px"><strong>Advisor Status:</strong> <span class="tag '+(p[20]?'advisor-tag':'no-advisor-tag')+'">'+(p[20]?H(p[20]):'None on filing')+'</span></div>';
if(!p[20])h+='<div style="font-size:9px;color:var(--tx3);font-family:Jost,sans-serif;margin-top:4px;font-style:italic">Based on Schedule C filing. Some advisors are compensated outside the plan and may not appear here.</div>';
if(p[34])h+='<div style="margin-top:6px;font-size:11px"><strong>Likely TDF:</strong> '+H(p[34])+'</div>';
h+='</div>';
// Right: Plan Design & Fees
h+='<div>';
h+='<div class="section"><div class="sec-title">Plan Design</div>';
var feats=p[22]?p[22].split('|'):[];
if(feats.length)h+='<div>'+feats.map(function(f){return '<span class="tag">'+f+'</span>'}).join('')+'</div>';
var sigs=p[11]?p[11].split(',').filter(function(s){return s}):[];
if(sigs.length)h+='<div style="margin-top:6px">'+sigs.map(function(s){return '<span class="tag">'+s+'</span>'}).join('')+'</div>';
h+='</div>';
if(p[31]>0||p[29]>0){
h+='<div class="section"><div class="sec-title">Fee Information</div>';
h+='<div style="font-size:11px">';
if(p[29]>0)h+='<div>Admin Expenses: <strong>'+FM.usd(p[29])+'</strong></div>';
if(p[31]>0)h+='<div>Expense Ratio: <strong>'+p[31]+'%</strong> of assets</div>';
if(p[30]>0)h+='<div>Total Expenses: <strong>'+FM.usd(p[30])+'</strong></div>';
h+='</div></div>';
}
h+='</div></div>';
// Notes
var noteVal=localStorage.getItem('note_'+p[14]);
var acts=JSON.parse(localStorage.getItem('act_'+p[14])||'[]');
if(noteVal||acts.length){
h+='<div class="section"><div class="sec-title">Notes & Activity</div>';
if(acts.length){h+='<div style="font-size:10px;margin-bottom:8px">';for(var i=acts.length-1;i>=Math.max(0,acts.length-5);i--){h+='<div style="margin-bottom:3px"><strong>'+H(acts[i].date)+'</strong> &mdash; '+H(acts[i].text||acts[i].type)+'</div>'}h+='</div>'}
if(noteVal)h+='<div style="font-size:11px;white-space:pre-wrap;color:#374151">'+H(noteVal)+'</div>';
h+='</div>';
}
// Footer
h+='<div class="footer">';
h+='<img src="'+LOGO_SQUARE_B64+'" alt="Mammini Company" style="height:44px;margin-bottom:8px;opacity:.4">';
h+='<div>Generated '+new Date().toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'})+' &middot; Mammini Company &middot; 401(k) Prospector</div>';
h+='<div style="margin-top:2px">Source: DOL EFAST2 Form 5500 &middot; FY 2024/25 &middot; San Diego County</div>';
h+='</div>';
h+='</div>';
h+='<button onclick="window.print()" class="no-print" style="position:fixed;top:16px;right:16px;padding:10px 20px;background:#118aa9;color:#fff;border:none;border-radius:8px;cursor:pointer;font-family:Jost,sans-serif;font-size:13px;font-weight:600;box-shadow:0 4px 12px rgba(0,0,0,.15)">PRINT / SAVE PDF</button>';
h+='</body></html>';
w.document.write(h);w.document.close();
setTimeout(function(){w.focus()},300);
}


