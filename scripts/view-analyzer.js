// --- Filing Analyzer ---
var analyzedFilings=[];
try{
analyzedFilings=JSON.parse(localStorage.getItem('recent_5500_analyses')||'[]');
if(!Array.isArray(analyzedFilings))analyzedFilings=[];
}catch(e){
analyzedFilings=[];
}
function rAnalyze(){
var el=document.getElementById('p-analyze');
if(el.dataset.built==='1')return;
el.dataset.built='1';

var h='<div class="az-container">';

// Compact hero
h+='<div class="az-hero" style="padding-bottom:24px">';
h+='<div class="az-hero-gridline"></div>';
h+='<div style="max-width:680px">';
h+='<div class="az-hero-kicker"><span class="az-hero-kicker-dot"></span>Filing Analysis</div>';
h+='<div class="az-hero-title" style="font-size:28px">Form 5500 Analyzer</div>';
h+='<div class="az-hero-sub" style="font-size:12px;max-width:520px">Upload a Form 5500 PDF to extract plan financials, provider details, investment lineups, and compliance flags. Results are saved automatically.</div>';
h+='</div></div>';

// Body
h+='<div class="az-body">';

// Two-column: Upload + Recent
h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px">';

// Upload area
h+='<div>';
h+='<div class="az-upload" id="azUpload" style="min-height:160px">';
h+='<div style="font-size:13px;color:var(--tx2);font-family:Jost,sans-serif;font-weight:600;margin-bottom:4px">Drop a Form 5500 PDF here</div>';
h+='<div style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif">or click to browse &middot; Supports 5500, 5500-SF, and all schedules</div>';
h+='<input type="file" id="azFileInput" accept=".pdf" style="display:none" multiple>';
h+='</div>';
h+='</div>';

// Recent analyses
h+='<div>';
h+='<div style="font-family:Jost,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--tx3);font-weight:700;margin-bottom:10px">Recent Analyses</div>';
var recentEINs=Object.keys(enrichCache);
if(recentEINs.length>0){
  h+='<div style="display:flex;flex-direction:column;gap:6px">';
  var shown=0;
  for(var ri=recentEINs.length-1;ri>=0&&shown<6;ri--){
    var rEin=recentEINs[ri];
    var rData=enrichCache[rEin];
    var planName=rData.planName||rData.plan_name||'Plan '+rEin;
    var sponsor=rData.sponsorName||rData.sponsor_name||'';
    h+='<div class="recent-plan-row" data-rein="'+rEin+'" style="padding:8px 10px;border:1px solid var(--brd);border-radius:8px;cursor:pointer;transition:all .15s;background:var(--bg3)">';
    h+='<div style="font-size:11px;font-weight:600;color:var(--txh);font-family:Jost,sans-serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+H(planName)+'</div>';
    if(sponsor)h+='<div style="font-size:9px;color:var(--tx3);font-family:Jost,sans-serif">'+H(sponsor)+' &middot; EIN: '+rEin+'</div>';
    h+='</div>';
    shown++;
  }
  h+='</div>';
}else{
  h+='<div style="padding:20px;text-align:center;border:1px dashed var(--brd);border-radius:8px;color:var(--tx3);font-size:11px;font-family:Jost,sans-serif">No analyses yet. Upload a PDF to get started.</div>';
}
h+='</div>';
h+='</div>';

// Processing indicator
h+='<div id="azProcessing" style="display:none;text-align:center;padding:48px">';
h+='<div class="az-spinner"></div>';
h+='<div id="azProcText" style="font-size:14px;color:var(--txh);margin-top:16px;font-family:Jost,sans-serif;font-weight:600">Analyzing filing...</div>';
h+='<div id="azProcSub" style="font-size:11px;color:var(--tx3);margin-top:6px;font-family:Jost,sans-serif">Reading schedules and extracting data</div>';
h+='<div style="display:flex;justify-content:center;gap:6px;margin-top:16px" id="azDots"><div class="az-dot"></div><div class="az-dot"></div><div class="az-dot"></div><div class="az-dot"></div></div>';
h+='</div>';

// Results area
h+='<div id="azResults" style="display:none" class="az-results"></div>';

// Quick lookup
h+='<div style="margin-top:24px;padding-top:20px;border-top:1px solid var(--brd)">';
h+='<div style="font-family:Jost,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:1.2px;color:var(--tx3);font-weight:700;margin-bottom:10px">Quick Plan Lookup</div>';
h+='<div style="display:flex;gap:8px;align-items:center">';
h+='<input type="text" id="azLookupInput" placeholder="Search by EIN or plan name..." style="flex:1;padding:10px 14px;font-size:13px;border-radius:6px">';
h+='<button class="btn btn-grn" id="azLookupBtn" style="padding:10px 20px;font-size:12px">LOOKUP</button>';
h+='</div>';
h+='<div id="azLookupResults" style="margin-top:12px"></div>';
h+='</div>';

h+='</div></div>';
el.innerHTML=h;

// Wire upload
var azUp=document.getElementById('azUpload');
var azFi=document.getElementById('azFileInput');
azUp.addEventListener('click',function(e){if(e.target.tagName!=='INPUT')azFi.click()});
azUp.addEventListener('dragover',function(e){e.preventDefault();this.style.borderColor='var(--acc)';this.style.background='rgba(17,138,169,.04)'});
azUp.addEventListener('dragleave',function(){this.style.borderColor='var(--brd)';this.style.background=''});
azUp.addEventListener('drop',function(e){e.preventDefault();this.style.borderColor='var(--brd)';this.style.background='';if(e.dataTransfer.files.length)azProcess(e.dataTransfer.files[0])});
azFi.addEventListener('change',function(){if(this.files.length)azProcess(this.files[0])});

// Wire lookup
document.getElementById('azLookupBtn').addEventListener('click',function(){doLookup()});
document.getElementById('azLookupInput').addEventListener('keydown',function(e){if(e.key==='Enter')doLookup()});

// Wire recent analysis rows
document.querySelectorAll('.recent-plan-row').forEach(function(row){
  row.addEventListener('click',function(){
    var rEin=this.dataset.rein;
    // Find the plan in D and open detail
    for(var i=0;i<D.length;i++){
      if(D[i][14].replace(/-/g,'')===rEin){go('tbl');oD(i,D);return}
    }
    toast('Plan not found in current dataset','warn');
  });
  row.addEventListener('mouseenter',function(){this.style.borderColor='var(--acc)';this.style.transform='translateY(-1px)'});
  row.addEventListener('mouseleave',function(){this.style.borderColor='var(--brd)';this.style.transform=''});
});
}


function saveRecentAnalyses(){
try{localStorage.setItem('recent_5500_analyses',JSON.stringify(analyzedFilings.slice(0,5)))}catch(e){}
}

function renderRecentAnalyses(){
var recentEl=document.getElementById('azRecent');
var listEl=document.getElementById('azRecentList');
if(!recentEl||!listEl)return;
if(!analyzedFilings.length){recentEl.style.display='none';listEl.innerHTML='';return}
recentEl.style.display='block';
var rh='';
for(var i=0;i<analyzedFilings.length;i++){var af=analyzedFilings[i];
rh+='<div class="az-recent-item" data-recent-idx="'+i+'"><div style="flex:1"><div style="font-family:Jost,sans-serif;font-size:12px;font-weight:600;color:var(--txh)">'+H(af.name||'Unnamed Filing')+'</div><div style="font-size:10px;color:var(--tx3)">'+H(af.time||'')+(af.ein?' &middot; EIN: '+H(af.ein):'')+'</div></div></div>'}
listEl.innerHTML=rh;
document.querySelectorAll('[data-recent-idx]').forEach(function(row){row.addEventListener('click',function(){var idx=Number(this.dataset.recentIdx);var item=analyzedFilings[idx];if(item&&item.data){renderSmartAnalysis(item.data)}})});
}

function doLookup(){
var q=document.getElementById('azLookupInput').value.trim();
if(!q)return;
var results=[];
var ql=q.toLowerCase().replace(/[-\s]/g,'');
for(var i=0;i<D.length;i++){
var p=D[i];
var ein=p[14].replace(/-/g,'');
if(ein.indexOf(ql)>=0||p[0].toLowerCase().indexOf(ql)>=0||p[1].toLowerCase().indexOf(ql)>=0){results.push(p);if(results.length>=10)break}}
var el=document.getElementById('azLookupResults');
if(results.length===0){el.innerHTML='<div style="padding:12px;color:var(--tx3);font-size:12px;font-family:Jost,sans-serif">No plans found for "'+H(q)+'"</div>';return}
var h='';
for(var i=0;i<results.length;i++){var p=results[i];
h+='<div class="az-recent-item" data-lein="'+p[14]+'" style="margin-bottom:6px">';
h+='<div style="flex:1"><div style="font-family:Jost,sans-serif;font-size:12px;font-weight:600;color:var(--txh)">'+H(p[0])+'</div>';
h+='<div style="font-size:10px;color:var(--tx3)">'+H(p[1])+' &middot; '+p[2]+' &middot; EIN: '+p[14]+'</div></div>';
h+='<div style="text-align:right"><div style="font-family:IBM Plex Mono,monospace;font-size:14px;font-weight:700;color:var(--acc2)">'+FM.usd(p[4])+'</div>';
h+='<div style="font-size:9px;color:var(--tx3)">Score: '+p[12]+'</div></div></div>'}
el.innerHTML=h;
document.querySelectorAll('[data-lein]').forEach(function(row){row.addEventListener('click',function(){
var ein=this.dataset.lein;
for(var i=0;i<D.length;i++){if(D[i][14]===ein){oD(i,D);break}}})})
}

function analyzeFile(file){
if(!file){return}
var validTypes=['application/pdf','text/csv','application/vnd.ms-excel'];
var isPDF=file.name.toLowerCase().endsWith('.pdf');
var isCSV=file.name.toLowerCase().endsWith('.csv');
if(!isPDF&&!isCSV){alert('Please upload a PDF or CSV file.');return}

document.getElementById('azUpload').style.display='none';
document.getElementById('azProcessing').style.display='block';
document.getElementById('azProcessing').scrollIntoView({behavior:'smooth',block:'center'});
var procMsgs=['Reading form data...','Parsing Schedule C providers...','Analyzing investment lineup...','Checking compliance flags...','Generating observations...'];
var procIdx=0;
var procInterval=setInterval(function(){procIdx++;if(procIdx<procMsgs.length){document.getElementById('azProcText').textContent=procMsgs[procIdx];document.getElementById('azProcSub').textContent=['Identifying service providers','Extracting fund names and values','Reviewing DOL compliance items','Building comprehensive analysis'][procIdx-1]||''}},3000);
// spinner text handled by azProcText

var reader=new FileReader();
reader.onload=function(e){
var base64=btoa(new Uint8Array(e.target.result).reduce(function(data,byte){return data+String.fromCharCode(byte)},''));

var systemPrompt='You are a Form 5500 retirement plan filing analyst. Extract ALL available data from this filing into a structured JSON response. Be thorough - extract every number, every provider name, every fund name you can find.\n\nReturn ONLY valid JSON (no markdown, no backticks, no explanation) with this exact structure:\n{\n  "planName": "string",\n  "sponsor": "string",\n  "ein": "string (digits only)",\n  "planNumber": "string",\n  "planYear": "string",\n  "planType": "string (e.g. 401k, 403b, DB, etc.)",\n  "filingType": "string (5500, 5500-SF, amended, etc.)",\n  "participants": {\n    "beginningOfYear": number or null,\n    "activeEndOfYear": number or null,\n    "totalEndOfYear": number or null,\n    "retired": number or null,\n    "separated": number or null,\n    "deceased": number or null,\n    "withAccountBalances": number or null,\n    "terminatedUnvested": number or null\n  },\n  "financials": {\n    "totalAssetsBOY": number or null,\n    "totalAssetsEOY": number or null,\n    "netAssets": number or null,\n    "totalContributions": number or null,\n    "employerContributions": number or null,\n    "participantContributions": number or null,\n    "rollovers": number or null,\n    "benefitsPaid": number or null,\n    "totalIncome": number or null,\n    "totalExpenses": number or null,\n    "adminExpenses": number or null,\n    "investmentGainLoss": number or null,\n    "netIncome": number or null,\n    "participantLoans": number or null,\n    "employerSecurities": number or null\n  },\n  "assetAllocation": [\n    {"category": "string", "beginningValue": number or null, "endValue": number or null}\n  ],\n  "investments": [\n    {"name": "string", "value": number or null, "type": "string (mutual fund, CCT, etc.)"}\n  ],\n  "serviceProviders": [\n    {"name": "string", "ein": "string or null", "role": "string (Recordkeeper, TPA, Advisor, Auditor, Custodian, etc.)", "serviceCodes": "string or null", "directCompensation": number or null, "indirectCompensation": number or null, "relationship": "string or null"}\n  ],\n  "planFeatures": [\n    {"code": "string", "description": "string"}\n  ],\n  "compliance": {\n    "lateContributions": boolean,\n    "lateContributionAmount": number or null,\n    "prohibitedTransactions": boolean,\n    "loansInDefault": boolean,\n    "fidelityBond": boolean,\n    "fidelityBondAmount": number or null,\n    "blackoutPeriod": boolean,\n    "failedToPayBenefits": boolean,\n    "assetsHeldForInvestment": boolean,\n    "planTerminating": boolean\n  },\n  "auditor": {\n    "name": "string or null",\n    "ein": "string or null",\n    "opinionType": "string or null (unmodified, qualified, disclaimer, adverse)"\n  },\n  "fundingInfo": {\n    "minimumRequired": number or null,\n    "actualContribution": number or null,\n    "fundingShortfall": number or null\n  },\n  "notes": "string - any additional observations, red flags, or notable items you see in the filing"\n}';

fetch('/api/analyze',{
method:'POST',
headers:{'Content-Type':'application/json'},
body:JSON.stringify({
mode:'extract_5500',
base64:base64,
fileName:file.name,
systemPrompt:systemPrompt
})
}).then(function(resp){
return resp.text().then(function(text){
var data;
try{data=JSON.parse(text)}catch(e){throw {message:'Server returned an invalid response. The function may have timed out — try a smaller PDF.',rawText:text.substring(0,500)}}
return {ok:resp.ok,status:resp.status,data:data}});
}).then(function(res){
document.getElementById('azProcessing').style.display='none';if(typeof procInterval!=='undefined')clearInterval(procInterval);
if(!res.ok||!res.data||!res.data.ok){throw {message:(res.data&&res.data.error)||('Analysis request failed ('+res.status+')'),rawText:res.data&&res.data.rawText,details:res.data&&res.data.details}}
var parsed=res.data.parsed||{};
parsed.filename=file.name;
parsed._partialExtraction=!!res.data.partial;
parsed._repairedExtraction=!!res.data.repaired;
parsed._aiInsights=res.data.insights||null;
if(parsed.ein){
var cleanEin=String(parsed.ein||'').replace(/[-\s]/g,'');
for(var i=0;i<D.length;i++){if(D[i][14].replace(/-/g,'')===cleanEin){parsed.dbMatch=D[i];break}}}
renderSmartAnalysis(parsed);
}).catch(function(err){
document.getElementById('azProcessing').style.display='none';
document.getElementById('azUpload').style.opacity='1';document.getElementById('azUpload').style.pointerEvents='';
document.getElementById('azResults').style.display='block';
document.getElementById('azResults').innerHTML='<div class="az-card"><div class="az-card-body"><div style="color:var(--coral);font-family:Jost,sans-serif;font-size:14px;margin-bottom:8px">Analysis Error</div><div style="font-size:12px;color:var(--tx2)">'+H(err.message||'Analysis failed')+'</div>'+(err.details?'<pre style="margin-top:12px;font-size:10px;color:var(--tx3);white-space:pre-wrap;max-height:160px;overflow:auto">'+H(err.details)+'</pre>':'')+(err.rawText?'<pre style="margin-top:12px;font-size:10px;color:var(--tx3);white-space:pre-wrap;max-height:220px;overflow:auto">'+H(err.rawText)+'</pre>':'')+'</div></div>'})};
reader.readAsArrayBuffer(file)}

function renderSmartAnalysis(r){
var el=document.getElementById('azResults');
el.style.display='block';
document.getElementById('azUpload').style.opacity='1';document.getElementById('azUpload').style.pointerEvents='';

var h='';
// Partial/repaired banners
if(r._partialExtraction){
h+='<div class="az-card" style="border-color:rgba(17,138,169,.28);margin-bottom:12px"><div class="az-card-body" style="background:rgba(17,138,169,.05)"><div style="font-family:Jost,sans-serif;font-size:12px;font-weight:600;color:var(--acc2);margin-bottom:4px">Partial extraction</div><div style="font-size:11px;color:var(--tx2)">Some deeper fields may be incomplete for this filing.</div></div></div>';
}

// Action row
h+='<div class="az-action-row"><button class="btn az-export-btn" id="azExportCsv" style="font-size:10px">&#128190; EXPORT CSV</button><button class="btn az-print-btn" id="azPrint" style="font-size:10px">&#128424; PRINT REPORT</button></div>';
h+='<div id="azPrintArea">';

// === HERO SUMMARY ===
var f=r.financials||{};
var p=r.participants||{};
var c=r.compliance||{};
var ai=r._aiInsights||{};
var meta=ai.meta||{};

h+='<div class="az-card" style="border:none;background:linear-gradient(135deg,#223743 0%,#2a5060 100%);color:#fff;margin-bottom:16px"><div class="az-card-body" style="padding:24px">';

// Plan name + sponsor
h+='<div style="font-family:Jost,sans-serif;font-size:22px;font-weight:700;line-height:1.2">'+H(r.planName||r.filename||'Form 5500 Analysis')+'</div>';
if(r.sponsor)h+='<div style="font-size:13px;opacity:.8;margin-top:4px;font-family:Jost,sans-serif">'+H(r.sponsor)+'</div>';

// Meta tags row
h+='<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:12px">';
if(r.ein)h+='<span style="font-family:IBM Plex Mono,monospace;font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,.12)">EIN: '+H(r.ein)+'</span>';
if(r.planYear)h+='<span style="font-family:IBM Plex Mono,monospace;font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,.12)">PY: '+H(r.planYear)+'</span>';
if(r.planType)h+='<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,.12)">'+H(r.planType)+'</span>';
if(meta.planSegment)h+='<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,.15);font-weight:600">'+H(meta.planSegment)+' Market</span>';
if(meta.likelyRecordkeeper)h+='<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(17,138,169,.4)">RK: '+H(meta.likelyRecordkeeper)+'</span>';
if(r.dbMatch)h+='<span style="font-size:10px;padding:3px 8px;border-radius:4px;background:rgba(62,142,138,.4)">&#10003; In Database (Score: '+r.dbMatch[12]+')</span>';
h+='</div>';

// KPI strip on the hero
h+='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin-top:18px">';
if(f.totalAssetsEOY)h+='<div style="background:rgba(255,255,255,.08);border-radius:6px;padding:12px"><div style="font-size:8px;text-transform:uppercase;letter-spacing:1px;opacity:.6">Total Assets</div><div style="font-family:IBM Plex Mono,monospace;font-size:18px;font-weight:700;margin-top:4px">'+FM.usd(f.totalAssetsEOY)+'</div>'+(f.totalAssetsBOY?'<div style="font-size:9px;opacity:.5;margin-top:2px">BOY: '+FM.usd(f.totalAssetsBOY)+'</div>':'')+'</div>';
var partCount=p.totalEndOfYear||p.activeEndOfYear;
if(partCount)h+='<div style="background:rgba(255,255,255,.08);border-radius:6px;padding:12px"><div style="font-size:8px;text-transform:uppercase;letter-spacing:1px;opacity:.6">Participants</div><div style="font-family:IBM Plex Mono,monospace;font-size:18px;font-weight:700;margin-top:4px">'+FM.n(partCount)+'</div>'+(p.withAccountBalances?'<div style="font-size:9px;opacity:.5;margin-top:2px">'+FM.n(p.withAccountBalances)+' with balances</div>':'')+'</div>';
if(meta.assetsPerParticipant)h+='<div style="background:rgba(255,255,255,.08);border-radius:6px;padding:12px"><div style="font-size:8px;text-transform:uppercase;letter-spacing:1px;opacity:.6">Avg Balance</div><div style="font-family:IBM Plex Mono,monospace;font-size:18px;font-weight:700;margin-top:4px">$'+FM.n(meta.assetsPerParticipant)+'</div></div>';
if(ai.score!=null)h+='<div style="background:rgba(255,255,255,.08);border-radius:6px;padding:12px"><div style="font-size:8px;text-transform:uppercase;letter-spacing:1px;opacity:.6">Prospect Score</div><div style="font-family:IBM Plex Mono,monospace;font-size:18px;font-weight:700;margin-top:4px;color:'+(ai.score>=7?'#6ee7b7':ai.score>=4?'#93c5fd':'#fca5a5')+'">'+ai.score+'/10</div></div>';
h+='</div>';
h+='</div></div>';

// === AI LEAD READ (if available) ===
if(ai.subjectiveSummary){
h+='<div class="az-card" style="margin-bottom:12px"><div class="az-card-body" style="padding:16px">';
h+='<div style="font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:var(--acc2);font-weight:600;margin-bottom:6px;font-family:Jost,sans-serif">Lead Read</div>';
h+='<div style="font-size:13px;color:var(--txh);line-height:1.6;font-family:Jost,sans-serif">'+H(ai.subjectiveSummary)+'</div>';
if(ai.growthCommentary){h+='<div style="margin-top:8px;font-size:11px;color:var(--tx2);line-height:1.5;font-family:Jost,sans-serif;font-style:italic">'+H(ai.growthCommentary)+'</div>'}
h+='</div></div>';
}

// === WHAT STANDS OUT + DISCUSSION POINTS (side by side) ===
var hasStandout=ai.whatStandsOut&&ai.whatStandsOut.length;
var hasDiscussion=ai.discussionPoints&&ai.discussionPoints.length;
var hasValidate=ai.questionsToValidate&&ai.questionsToValidate.length;
if(hasStandout||hasDiscussion||hasValidate){
h+='<div style="display:grid;grid-template-columns:'+(hasValidate?'1fr 1fr 1fr':'1fr 1fr')+';gap:12px;margin-bottom:12px">';
if(hasStandout){h+='<div class="az-card" style="margin-bottom:0"><div class="az-card-hdr"><div class="az-card-title">What Stands Out</div></div><div class="az-card-body"><ul style="padding-left:16px;margin:0;font-size:11px;color:var(--tx2);line-height:1.7;font-family:Jost,sans-serif">';for(var i=0;i<ai.whatStandsOut.length;i++)h+='<li>'+H(ai.whatStandsOut[i])+'</li>';h+='</ul></div></div>'}
if(hasDiscussion){h+='<div class="az-card" style="margin-bottom:0"><div class="az-card-hdr"><div class="az-card-title">Discussion Points</div></div><div class="az-card-body"><ul style="padding-left:16px;margin:0;font-size:11px;color:var(--tx2);line-height:1.7;font-family:Jost,sans-serif">';for(var i=0;i<ai.discussionPoints.length;i++)h+='<li>'+H(ai.discussionPoints[i])+'</li>';h+='</ul></div></div>'}
if(hasValidate){h+='<div class="az-card" style="margin-bottom:0"><div class="az-card-hdr"><div class="az-card-title">Questions to Validate</div></div><div class="az-card-body"><ul style="padding-left:16px;margin:0;font-size:11px;color:var(--tx2);line-height:1.7;font-family:Jost,sans-serif">';for(var i=0;i<ai.questionsToValidate.length;i++)h+='<li>'+H(ai.questionsToValidate[i])+'</li>';h+='</ul></div></div>'}
h+='</div>';
}

// === FINANCIALS DETAIL ===
var hasFinancials=f.totalContributions||f.employerContributions||f.benefitsPaid||f.adminExpenses||f.investmentGainLoss!=null||f.netIncome!=null;
if(hasFinancials){
h+='<div class="az-card"><div class="az-card-hdr"><div class="az-card-title">Financials</div></div><div class="az-card-body"><div class="az-kpi-grid">';
if(f.totalContributions)h+='<div class="az-kpi"><div class="az-kpi-label">Total Contributions</div><div class="az-kpi-val">'+FM.usd(f.totalContributions)+'</div>'+(f.employerContributions?'<div class="az-kpi-sub">Employer: '+FM.usd(f.employerContributions)+'</div>':'')+(f.participantContributions?'<div class="az-kpi-sub">Participant: '+FM.usd(f.participantContributions)+'</div>':'')+'</div>';
if(f.benefitsPaid)h+='<div class="az-kpi"><div class="az-kpi-label">Benefits Paid</div><div class="az-kpi-val">'+FM.usd(f.benefitsPaid)+'</div></div>';
if(f.investmentGainLoss!=null)h+='<div class="az-kpi"><div class="az-kpi-label">Investment Gain/Loss</div><div class="az-kpi-val" style="color:'+(f.investmentGainLoss>=0?'var(--teal2)':'var(--coral)')+'">'+FM.usd(f.investmentGainLoss)+'</div></div>';
if(f.netIncome!=null)h+='<div class="az-kpi"><div class="az-kpi-label">Net Income</div><div class="az-kpi-val" style="color:'+(f.netIncome>=0?'var(--teal2)':'var(--coral)')+'">'+FM.usd(f.netIncome)+'</div></div>';
if(f.adminExpenses)h+='<div class="az-kpi"><div class="az-kpi-label">Admin Expenses</div><div class="az-kpi-val">'+FM.usd(f.adminExpenses)+'</div>'+(f.totalAssetsEOY?'<div class="az-kpi-sub">'+(f.adminExpenses/f.totalAssetsEOY*100).toFixed(2)+'% of assets</div>':'')+'</div>';
if(f.participantLoans)h+='<div class="az-kpi"><div class="az-kpi-label">Participant Loans</div><div class="az-kpi-val">'+FM.usd(f.participantLoans)+'</div></div>';
h+='</div></div></div>';
}

// === FEE BENCHMARKING (in analyzer) ===
(function(){
var azAssets=f.totalAssetsEOY||0;
// Prefer admin expenses (the actual plan admin cost) over total fees which can include benefit payments
var azExpenses=f.adminExpenses||f.totalFees||0;
var azRatio=(azAssets>0&&azExpenses>0)?(azExpenses/azAssets*100):0;
var azParts=p.totalEndOfYear||p.activeEndOfYear||0;
if(azRatio>0&&azAssets>0){
h+=feeBenchmarkHtml(azAssets,+azRatio.toFixed(3),azExpenses,azParts);
}
})();

// === INVESTMENT LINEUP ===
if((r.investments&&r.investments.length>0)||(r.assetAllocation&&r.assetAllocation.length>0)){
h+='<div class="az-card"><div class="az-card-hdr"><div class="az-card-title">Investment Lineup</div>';
if(r.investments)h+='<div style="display:flex;align-items:center;gap:8px"><div class="az-card-badge" style="background:rgba(62,142,138,.1);color:var(--teal2)">'+r.investments.length+' funds</div><button class="btn" id="azExportCsvInline" style="padding:4px 10px;font-size:9px">Export CSV</button></div>';
h+='</div><div class="az-card-body">';
if(r.assetAllocation&&r.assetAllocation.length>0){
var totalAlloc=0;for(var i=0;i<r.assetAllocation.length;i++){totalAlloc+=r.assetAllocation[i].endValue||0}
var allocColors=['var(--acc)','var(--teal)','var(--coral)','var(--sand2)','#8b5cf6','#ec4899','#f59e0b','#6366f1'];
if(totalAlloc>0){h+='<div style="display:flex;height:24px;border-radius:4px;overflow:hidden;margin-bottom:8px">';for(var i=0;i<r.assetAllocation.length;i++){var aa=r.assetAllocation[i];var pct=(aa.endValue||0)/totalAlloc*100;if(pct>1)h+='<div style="width:'+pct+'%;background:'+allocColors[i%allocColors.length]+';display:flex;align-items:center;justify-content:center;font-size:8px;color:#fff;font-weight:600;font-family:IBM Plex Mono,monospace">'+(pct>=5?pct.toFixed(0)+'%':'')+'</div>'}h+='</div>'}
for(var i=0;i<r.assetAllocation.length;i++){var aa=r.assetAllocation[i];h+='<div style="display:flex;align-items:center;gap:8px;padding:3px 0;font-size:11px"><div style="width:8px;height:8px;border-radius:2px;background:'+allocColors[i%allocColors.length]+';flex-shrink:0"></div><div style="flex:1;font-family:Jost,sans-serif;color:var(--tx2)">'+H(aa.category)+'</div><div style="font-family:IBM Plex Mono,monospace;color:var(--txh)">'+FM.usd(aa.endValue||0)+'</div>'+(totalAlloc>0?'<div style="font-family:IBM Plex Mono,monospace;color:var(--tx3);min-width:40px;text-align:right">'+((aa.endValue||0)/totalAlloc*100).toFixed(1)+'%</div>':'')+'</div>'}
h+='<div style="height:12px"></div>'}
if(r.investments&&r.investments.length>0){
h+='<table class="az-inv-tbl"><thead><tr><th>Fund Name</th><th>Type</th><th style="text-align:right">Value</th></tr></thead><tbody>';
r.investments.sort(function(a,b){return(b.value||0)-(a.value||0)});
for(var i=0;i<r.investments.length;i++){var inv=r.investments[i];h+='<tr><td style="font-family:Jost,sans-serif">'+H(inv.name)+'</td><td style="font-size:9px;color:var(--tx3)">'+H(inv.type||'')+'</td><td style="text-align:right">'+(inv.value?FM.usd(inv.value):'—')+'</td></tr>'}
h+='</tbody></table>'}
h+='</div></div>'}

// === SERVICE PROVIDERS ===
if(r.serviceProviders&&r.serviceProviders.length>0){
h+='<div class="az-card"><div class="az-card-hdr"><div class="az-card-title">Service Providers</div><div class="az-card-badge" style="background:rgba(17,138,169,.1);color:var(--acc2)">'+r.serviceProviders.length+'</div></div><div class="az-card-body">';
h+='<table class="az-inv-tbl"><thead><tr><th>Provider</th><th>Role</th><th style="text-align:right">Direct Comp</th><th style="text-align:right">Indirect</th></tr></thead><tbody>';
for(var i=0;i<r.serviceProviders.length;i++){var sp=r.serviceProviders[i];
var roleClr=(sp.role||'').match(/record/i)?'role-RK':(sp.role||'').match(/tpa|admin/i)?'role-TPA':(sp.role||'').match(/advis|invest/i)?'role-IA':(sp.role||'').match(/audit/i)?'role-AUD':(sp.role||'').match(/custod/i)?'role-CUS':'role-OTH';
h+='<tr><td style="font-family:Jost,sans-serif;font-weight:500">'+H(sp.name)+'</td><td><span class="role-tag '+roleClr+'">'+H(sp.role||'Other')+'</span></td><td style="text-align:right">'+(sp.directCompensation?'$'+FM.n(sp.directCompensation):'—')+'</td><td style="text-align:right">'+(sp.indirectCompensation?'$'+FM.n(sp.indirectCompensation):'—')+'</td></tr>'}
h+='</tbody></table></div></div>'}

// === PLAN FEATURES + COMPLIANCE (side by side) ===
var hasFeatures=r.planFeatures&&r.planFeatures.length>0;
var flags=[];
if(c.lateContributions)flags.push(['Late Contributions'+(c.lateContributionAmount?' — $'+FM.n(c.lateContributionAmount):''),'warn']);
if(c.prohibitedTransactions)flags.push(['Prohibited Transactions','warn']);
if(c.loansInDefault)flags.push(['Loans in Default','warn']);
if(c.blackoutPeriod)flags.push(['Blackout Period','warn']);
if(c.failedToPayBenefits)flags.push(['Failed to Pay Benefits','warn']);
if(c.planTerminating)flags.push(['Plan Terminating','warn']);
if(c.fidelityBond)flags.push(['Fidelity Bond'+(c.fidelityBondAmount?' — $'+FM.n(c.fidelityBondAmount):''),'ok']);
if(f.employerSecurities)flags.push(['Employer Securities — '+FM.usd(f.employerSecurities),'warn']);
var hasFlags=flags.length>0;

if(hasFeatures||hasFlags){
h+='<div style="display:grid;grid-template-columns:'+(hasFeatures&&hasFlags?'1fr 1fr':'1fr')+';gap:12px;margin-bottom:0">';
if(hasFeatures){h+='<div class="az-card" style="margin-bottom:0"><div class="az-card-hdr"><div class="az-card-title">Plan Features</div></div><div class="az-card-body"><div style="display:flex;flex-wrap:wrap;gap:5px">';for(var i=0;i<r.planFeatures.length;i++){h+='<span class="az-flag az-flag-info">'+H(r.planFeatures[i].description||r.planFeatures[i].code)+'</span>'}h+='</div></div></div>'}
if(hasFlags){h+='<div class="az-card" style="margin-bottom:0"><div class="az-card-hdr"><div class="az-card-title">Compliance</div></div><div class="az-card-body">';for(var i=0;i<flags.length;i++){h+='<span class="az-flag az-flag-'+flags[i][1]+'">'+(flags[i][1]==='warn'?'&#9888;':'&#10003;')+' '+flags[i][0]+'</span>'}h+='</div></div>'}
h+='</div>'}

// === AUDITOR ===
if(r.auditor&&r.auditor.name){
h+='<div class="az-card"><div class="az-card-hdr"><div class="az-card-title">Audit</div></div><div class="az-card-body"><div style="display:flex;align-items:center;gap:10px"><div style="font-family:Jost,sans-serif;font-size:13px;font-weight:500;color:var(--txh)">'+H(r.auditor.name)+'</div>';
if(r.auditor.opinionType)h+='<span class="az-flag '+(r.auditor.opinionType.match(/unmod|unqual/i)?'az-flag-ok':'az-flag-warn')+'">'+H(r.auditor.opinionType)+'</span>';
h+='</div></div></div>'}

// === NOTES ===
if(r.notes){
h+='<div class="az-card"><div class="az-card-hdr"><div class="az-card-title">Filing Notes</div></div><div class="az-card-body"><div style="font-size:11px;color:var(--tx2);line-height:1.6;font-family:Jost,sans-serif">'+H(r.notes).replace(/\n/g,'<br>')+'</div></div></div>'}

// Close printArea
h+='</div>';

// DB match button
if(r.dbMatch){h+='<div style="margin-top:16px;text-align:center"><button class="btn btn-grn" id="azViewDetail" style="padding:12px 32px;font-size:13px">VIEW FULL PLAN DETAIL FROM DATABASE</button></div>'}

el.innerHTML=h;

// Wire export CSV
function exportAnalyzerCsv(){
if(!(r.investments&&r.investments.length))return;
var NL=String.fromCharCode(10);var rows=['Fund Name,Type,Value'];
for(var i=0;i<r.investments.length;i++){var inv=r.investments[i];rows.push('"'+String(inv.name||'').replace(/"/g,'""')+'","'+String(inv.type||'').replace(/"/g,'""')+'",'+(inv.value||''))}
var csv=rows.join(NL);var blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});var url=URL.createObjectURL(blob);var a=document.createElement('a');a.href=url;a.download=(r.planName?r.planName.replace(/[^a-z0-9]+/gi,'_').replace(/^_+|_+$/g,''):'investment_lineup')+'_lineup.csv';document.body.appendChild(a);a.click();document.body.removeChild(a);setTimeout(function(){URL.revokeObjectURL(url)},500)}
var azExportCsv=document.getElementById('azExportCsv');
if(azExportCsv){if(!(r.investments&&r.investments.length))azExportCsv.style.display='none';else azExportCsv.addEventListener('click',exportAnalyzerCsv)}
var azExportCsvInline=document.getElementById('azExportCsvInline');
if(azExportCsvInline){azExportCsvInline.addEventListener('click',exportAnalyzerCsv)}

// Wire print
document.getElementById('azPrint').addEventListener('click',function(){
var area=document.getElementById('azPrintArea');
var w=window.open('','','width=900,height=700');
w.document.write('<html><head><title>Filing Analysis - '+(r.planName||r.filename)+'</title>');
w.document.write('<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,sans-serif;padding:28px;color:#223743;font-size:12px}');
w.document.write('.az-card{border:1px solid #ddd;border-radius:6px;margin-bottom:14px;page-break-inside:avoid;overflow:hidden}.az-card-hdr{padding:10px 14px;background:#f5f0e8;border-bottom:1px solid #ddd;display:flex;justify-content:space-between;align-items:center}.az-card-title{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:#888;font-weight:600}.az-card-badge{font-size:9px;padding:2px 6px;border-radius:3px}.az-card-body{padding:14px}');
w.document.write('.az-kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.az-kpi{background:#f9f5ee;border:1px solid #ebdcc5;border-radius:4px;padding:10px}.az-kpi-label{font-size:8px;text-transform:uppercase;letter-spacing:1px;color:#888;font-weight:600}.az-kpi-val{font-family:monospace;font-size:16px;font-weight:700;margin-top:4px}.az-kpi-sub{font-size:9px;color:#888;margin-top:2px}');
w.document.write('.az-inv-tbl{width:100%;border-collapse:collapse}.az-inv-tbl th{background:#f0ece5;padding:6px 8px;text-align:left;font-size:9px;color:#888;font-weight:600;border-bottom:1px solid #ddd}.az-inv-tbl td{padding:5px 8px;border-bottom:1px solid #eee;font-family:monospace;font-size:10px}');
w.document.write('.az-flag{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:3px;font-size:10px;margin:2px}.az-flag-warn{background:#fde8e4;color:#c44d3a}.az-flag-ok{background:#e6f4f3;color:#2d7572}.az-flag-info{background:#e3f1f5;color:#0d7a96}');
w.document.write('.role-tag{display:inline-block;padding:1px 4px;border-radius:2px;font-size:8px;font-weight:600}.role-RK{background:#d9eef2;color:#0d7a96}.role-TPA{background:#ddf0ef;color:#2d7572}.role-IA{background:#fde8e4;color:#c44d3a}.role-AUD{background:#e8e2d8;color:#4a6275}.role-CUS{background:#e3f1f5;color:#118aa9}.role-OTH{background:#e8e2d8;color:#888}');
w.document.write('.btn{display:none}');
w.document.write('</style></head><body><div style="text-align:center;margin-bottom:20px;padding-bottom:14px;border-bottom:2px solid #ebdcc5"><div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#888;margin-bottom:6px">Mammini 401(k) Prospector</div><div style="font-size:18px;font-weight:700">'+(r.planName||r.filename)+'</div><div style="font-size:11px;color:#888;margin-top:4px">Generated '+new Date().toLocaleDateString()+'</div></div>');
w.document.write(area.innerHTML);
w.document.write('</body></html>');w.document.close();w.print()});

if(r.dbMatch){document.getElementById('azViewDetail').addEventListener('click',function(){for(var i=0;i<D.length;i++){if(D[i][14].replace(/-/g,'')===r.ein.replace(/-/g,'')){oD(i,D);break}}})}

// Recent
var recentKey=(r.ein||'')+'|'+(r.planYear||'')+'|'+(r.planName||r.filename||'');
analyzedFilings=analyzedFilings.filter(function(x){return x.key!==recentKey});
analyzedFilings.unshift({key:recentKey,name:r.planName||r.filename,ein:r.ein||'',time:new Date().toLocaleString(),data:JSON.parse(JSON.stringify(r))});
if(analyzedFilings.length>5)analyzedFilings=analyzedFilings.slice(0,5);
saveRecentAnalyses();
renderRecentAnalyses()}

var LOGO_SQUARE_B64='data:image/jpeg;base64,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';
// --- Similar Plans Finder ---
function findSimilarPlans(p,maxResults){
  maxResults=maxResults||20;
  var results=[];
  var assetLow=p[4]*0.4, assetHigh=p[4]*2.5;
  var partLow=Math.max(1,Math.floor(p[7]*0.4)), partHigh=Math.ceil(p[7]*2.5);
  var city=p[2], zip3=String(p[3]).substring(0,3), rk=p[18]||'';
  for(var i=0;i<D.length;i++){
    var q=D[i];
    if(q[14]===p[14])continue;// skip self
    var score=0;
    // Asset similarity (0-30)
    if(q[4]>=assetLow&&q[4]<=assetHigh){
      var assetDiff=Math.abs(q[4]-p[4])/Math.max(p[4],1);
      score+=Math.round(30*(1-Math.min(assetDiff,1)));
    }
    // Participant similarity (0-20)
    if(q[7]>=partLow&&q[7]<=partHigh){
      var partDiff=Math.abs(q[7]-p[7])/Math.max(p[7],1);
      score+=Math.round(20*(1-Math.min(partDiff,1)));
    }
    // Same city (20)
    if(q[2]===city)score+=20;
    // Same ZIP3 (10)
    else if(String(q[3]).substring(0,3)===zip3)score+=10;
    // Same RK (15)
    if(rk&&q[18]===rk)score+=15;
    // Same advisor status (10)
    if(!q[20]&&!p[20])score+=10;
    else if(q[20]&&p[20])score+=5;
    // Similar growth direction (5)
    if((q[6]>0&&p[6]>0)||(q[6]<0&&p[6]<0))score+=5;
    if(score>=25)results.push({plan:q,similarity:score});
  }
  results.sort(function(a,b){return b.similarity-a.similarity});
  return results.slice(0,maxResults).map(function(r){return r.plan});
}

// --- Draft Prospecting Email ---
function draftProspectEmail(p){
  var sponsor=p[1];
  var city=p[2];
  var assets=FM.usd(p[4]);
  var parts=FM.n(p[7]);
  var rk=p[18]||'your current recordkeeper';
  var hasAdvisor=!!p[20];
  var growth=p[6];
  var avgBal=p[23]?'$'+FM.n(p[23]):'';

  var subject='401(k) Plan Review — '+sponsor;
  var body='Hi,\n\n';
  body+='I noticed that '+sponsor+' sponsors a 401(k) plan with approximately '+assets+' in assets and '+parts+' participants';
  if(city)body+=', based in '+city.split(' ').map(function(w){return w[0]+w.slice(1).toLowerCase()}).join(' ');
  body+='.\n\n';

  if(!hasAdvisor){
    body+='Based on the most recent Form 5500 filing, it appears the plan may not currently have a dedicated investment advisor on record. ';
    body+='Many plan sponsors in a similar position find value in having an independent advisor review their plan\'s investment lineup, fee structure, and fiduciary compliance.\n\n';
  } else {
    body+='I work with several plan sponsors of similar size in the San Diego area and wanted to reach out about how we might be able to add value to your retirement program.\n\n';
  }

  if(growth>15)body+='Your plan has seen strong growth recently, which is a great sign — and also a good time to ensure your plan design and investment lineup are keeping pace.\n\n';
  if(avgBal)body+='With an average participant balance of '+avgBal+', your employees clearly value the plan. ';
  body+='I\'d welcome the opportunity to share some insights specific to plans like yours — no obligation, just a conversation.\n\n';
  body+='Would you have 15 minutes for a brief call this week or next?\n\n';
  body+='Best regards';

  // Open in new window for copy
  var w=window.open('','','width=640,height=600');
  w.document.write('<html><head><title>Draft Email</title><style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Jost,system-ui,sans-serif;padding:28px;color:#183042;background:#fff}.field{margin-bottom:16px}.label{font-size:10px;text-transform:uppercase;letter-spacing:1px;color:#9ca3af;font-weight:600;margin-bottom:4px}.subject{font-size:16px;font-weight:700;padding:8px 0;border-bottom:1px solid #e5e7eb}.body{white-space:pre-wrap;font-size:13px;line-height:1.7;padding:16px 0}button{padding:10px 20px;background:#118aa9;color:#fff;border:none;border-radius:6px;cursor:pointer;font-family:Jost,sans-serif;font-size:13px;font-weight:600;margin-right:8px}button:hover{background:#0d7a96}.hint{font-size:10px;color:#9ca3af;margin-top:12px}</style></head><body>');
  w.document.write('<div class="field"><div class="label">Subject</div><div class="subject" id="subj">'+subject.replace(/</g,'&lt;')+'</div></div>');
  w.document.write('<div class="field"><div class="label">Body</div><div class="body" id="emailBody" contenteditable="true">'+body.replace(/</g,'&lt;').replace(/\n/g,'<br>')+'</div></div>');
  w.document.write('<button onclick="var t=document.getElementById(\'subj\').textContent+\'\\n\\n\'+document.getElementById(\'emailBody\').innerText;navigator.clipboard.writeText(t);this.textContent=\'Copied!\'">COPY TO CLIPBOARD</button>');
  w.document.write('<button onclick="window.location.href=\'mailto:?subject=\'+encodeURIComponent(document.getElementById(\'subj\').textContent)+\'&body=\'+encodeURIComponent(document.getElementById(\'emailBody\').innerText)">OPEN IN MAIL</button>');
  w.document.write('<div class="hint">Edit the body above, then copy or open in your email client.</div>');
  w.document.write('</body></html>');
  w.document.close();
}

// --- Scan Lineup (free, no AI) ---
function scanLineupFile(ein,planName,file){
  if(!file||!file.name.toLowerCase().endsWith('.pdf')){alert('Please drop a PDF file.');return}
  var status=document.getElementById('scanStatus');
  status.style.display='block';status.textContent='Scanning PDF for investment lineup...';status.style.color='var(--acc2)';
  var reader=new FileReader();
  reader.onload=function(e){
    var b64=btoa(new Uint8Array(e.target.result).reduce(function(d,b){return d+String.fromCharCode(b)},''));
    status.textContent='Pattern matching fund families...';
    fetch('/api/scan-lineup',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({mode:'scan',base64:b64,ein:ein,planName:planName})})
    .then(function(r){return r.json()})
    .then(function(data){
      if(data.ok){
        renderScanResults(ein,data);
        status.style.display='none';
      }else{
        status.textContent='Scan failed: '+(data.error||'unknown error');
        status.style.color='var(--coral)';
      }
    }).catch(function(err){
      status.textContent='Error: '+err.message;
      status.style.color='var(--coral)';
    });
  };
  reader.readAsArrayBuffer(file);
}

function renderScanResults(ein,data){
  var el=document.getElementById('scanResults_'+ein);
  if(!el)return;
  var scan=data.scan||{};
  var edgar=data.edgar;
  var h='';

  // TDF Provider headline
  if(scan.tdfProvider){
    h+='<div style="padding:10px 12px;border-radius:8px;background:rgba(62,142,138,.08);border:1px solid rgba(62,142,138,.18);margin-bottom:10px">';
    h+='<div style="font-family:Jost,sans-serif;font-size:12px;font-weight:700;color:var(--teal2)">&#10003; TDF Provider: '+H(scan.tdfProvider)+'</div>';
    if(scan.tdfYears&&scan.tdfYears.length){
      h+='<div style="font-family:IBM Plex Mono,monospace;font-size:10px;color:var(--tx2);margin-top:4px">Vintages: '+scan.tdfYears.join(', ')+'</div>';
    }
    h+='</div>';
  }

  // CIT indicator
  if(scan.hasCIT){
    h+='<div style="padding:8px 12px;border-radius:8px;background:rgba(235,220,197,.12);border:1px solid rgba(235,220,197,.3);margin-bottom:10px;display:flex;align-items:center;gap:8px">';
    h+='<span style="font-family:Jost,sans-serif;font-size:11px;font-weight:700;color:var(--sand)">CIT/CIF Detected</span>';
    h+='<span style="font-size:10px;color:var(--tx3);font-family:Jost,sans-serif">Collective investment trusts found \u2014 not SEC-registered, bank-administered</span>';
    h+='</div>';
  }

  // Fund families found
  if(scan.fundFamilies&&scan.fundFamilies.length){
    h+='<div style="font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--tx3);font-weight:600;margin-bottom:6px;font-family:Jost,sans-serif">Fund Families Detected ('+scan.fundFamilies.length+')</div>';
    h+='<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:10px">';
    for(var i=0;i<scan.fundFamilies.length;i++){
      var ff=scan.fundFamilies[i];
      var badge=ff.hasTDF?'background:rgba(62,142,138,.12);color:var(--teal2);border:1px solid rgba(62,142,138,.18)':'background:var(--bg4);color:var(--tx2);border:1px solid var(--brd)';
      h+='<span style="display:inline-block;padding:3px 8px;border-radius:999px;font-size:10px;font-family:Jost,sans-serif;font-weight:600;'+badge+'">'+H(ff.name)+(ff.hasTDF?' (TDF)':'')+'</span>';
    }
    h+='</div>';
  }

  // Individual funds table
  if(scan.funds&&scan.funds.length){
    h+='<div style="font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--tx3);font-weight:600;margin-bottom:6px;font-family:Jost,sans-serif">Funds Identified ('+scan.funds.length+')</div>';
    h+='<table class="pv-tbl"><thead><tr><th>Fund Name</th><th>Type</th><th style="text-align:right">Value</th></tr></thead><tbody>';
    var showFunds=scan.funds.slice(0,15);
    for(var i=0;i<showFunds.length;i++){
      var fund=showFunds[i];
      h+='<tr><td style="font-family:Jost,sans-serif;font-size:10px">'+H(fund.name)+'</td><td style="font-size:9px;color:var(--tx3)">'+H(fund.type)+'</td><td style="text-align:right">'+(fund.value?FM.usd(fund.value):'\u2014')+'</td></tr>';
    }
    if(scan.funds.length>15)h+='<tr><td colspan="3" style="font-size:10px;color:var(--tx3);text-align:center">+'+(scan.funds.length-15)+' more</td></tr>';
    h+='</tbody></table>';
  }

  // EDGAR results
  if(edgar&&edgar.filings&&edgar.filings.length){
    h+='<div style="font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--tx3);font-weight:600;margin-top:10px;margin-bottom:6px;font-family:Jost,sans-serif">SEC EDGAR Filings</div>';
    for(var i=0;i<edgar.filings.length;i++){
      var f=edgar.filings[i];
      h+='<div style="font-size:10px;color:var(--tx2);margin-bottom:3px;font-family:Jost,sans-serif">'+H(f.form||'Filing')+' &middot; '+H(f.date||'')+(f.names&&f.names.length?' &middot; '+H(f.names[0]):'')+'</div>';
    }
  }

  // 11-K extracted funds (from EDGAR)
  if(edgar&&edgar.funds&&edgar.funds.length){
    if(!scan.tdfProvider&&edgar.tdfProvider){
      h+='<div style="padding:10px 12px;border-radius:8px;background:rgba(62,142,138,.08);border:1px solid rgba(62,142,138,.18);margin-top:10px;margin-bottom:10px">';
      h+='<div style="font-family:Jost,sans-serif;font-size:12px;font-weight:700;color:var(--teal2)">&#10003; TDF Provider (from 11-K): '+H(edgar.tdfProvider)+'</div>';
      h+='</div>';
    }
    if(edgar.fundFamilies&&edgar.fundFamilies.length&&(!scan.fundFamilies||!scan.fundFamilies.length)){
      h+='<div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:8px">';
      for(var i=0;i<edgar.fundFamilies.length;i++){
        var ff=edgar.fundFamilies[i];
        h+='<span style="display:inline-block;padding:3px 8px;border-radius:999px;font-size:10px;font-family:Jost,sans-serif;font-weight:600;background:rgba(17,138,169,.08);color:var(--acc2);border:1px solid rgba(17,138,169,.14)">'+H(ff.name)+(ff.hasTDF?' (TDF)':'')+'</span>';
      }
      h+='</div>';
    }
    h+='<div style="font-size:9px;text-transform:uppercase;letter-spacing:1px;color:var(--acc2);font-weight:600;margin-top:8px;margin-bottom:6px;font-family:Jost,sans-serif">Fund Lineup from 11-K Filing ('+edgar.funds.length+' funds)</div>';
    h+='<table class="pv-tbl"><thead><tr><th>Fund Name</th><th>Type</th><th style="text-align:right">Value</th></tr></thead><tbody>';
    var showEdgarFunds=edgar.funds.slice(0,20);
    for(var i=0;i<showEdgarFunds.length;i++){
      var fund=showEdgarFunds[i];
      h+='<tr><td style="font-family:Jost,sans-serif;font-size:10px">'+H(fund.name)+'</td><td style="font-size:9px;color:var(--tx3)">'+H(fund.type)+'</td><td style="text-align:right">'+(fund.value?FM.usd(fund.value):'\u2014')+'</td></tr>';
    }
    if(edgar.funds.length>20)h+='<tr><td colspan="3" style="font-size:10px;color:var(--tx3);text-align:center">+'+(edgar.funds.length-20)+' more</td></tr>';
    h+='</tbody></table>';
  }

  // Confidence + method
  var conf=scan.confidence||'none';
  var confColor=conf==='high'?'var(--teal2)':conf==='medium'?'var(--acc2)':conf==='low'?'var(--coral)':'var(--tx3)';
  h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px;padding-top:8px;border-top:1px solid var(--brd)">';
  h+='<span style="font-size:9px;color:'+confColor+';font-family:IBM Plex Mono,monospace;font-weight:600">Confidence: '+conf.toUpperCase()+'</span>';
  h+='<span style="font-size:9px;color:var(--tx3);font-family:Jost,sans-serif">'+H(data.method||'pdf-scan')+' &middot; '+(scan.textLength||0)+' chars extracted</span>';
  h+='</div>';

  // No results state
  if(!scan.fundFamilies||!scan.fundFamilies.length){
    if(!scan.funds||!scan.funds.length){
      h='<div style="padding:12px;text-align:center;color:var(--tx3);font-family:Jost,sans-serif;font-size:11px">';
      h+='No fund names detected in this PDF. ';
      if(data.method==='pdf-scan')h+='The filing may not include an investment schedule, or the text may not be extractable (scanned image). Try the AI Deep Analysis below for more thorough extraction.';
      h+='</div>';
    }
  }

  el.innerHTML=h;
  el.style.display='block';
}

function enrichFromFile(ein,file){if(!file||!file.name.toLowerCase().endsWith('.pdf')){alert('Please drop a PDF file.');return}var status=document.getElementById('enrichStatus');status.style.display='block';status.textContent='Analyzing filing...';var drop=document.getElementById('enrichDrop');drop.style.borderColor='var(--acc)';drop.style.opacity='.6';var reader=new FileReader();reader.onload=function(e){var b64=btoa(new Uint8Array(e.target.result).reduce(function(d,b){return d+String.fromCharCode(b)},''));status.textContent='Processing with AI...';fetch('/api/analyze',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({mode:'extract_5500',base64:b64,fileName:file.name})}).then(function(resp){return resp.text().then(function(text){var data;try{data=JSON.parse(text)}catch(e){throw new Error('Server returned invalid response — try a smaller PDF.')}return {ok:resp.ok,status:resp.status,data:data}})}).then(function(res){if(!res.ok||!res.data||!res.data.ok)throw new Error((res.data&&res.data.error)||('Analysis failed ('+res.status+')'));enrichCache[ein]=res.data.parsed;saveEnrichCache();status.textContent='Analysis complete!';for(var i=0;i<D.length;i++){if(D[i][14].replace(/-/g,'')===ein){setTimeout(function(){oD(i,D)},300);break}}}).catch(function(err){status.textContent='Error: '+err.message;drop.style.opacity='1'})};reader.readAsArrayBuffer(file)}
document.getElementById('logoHome').addEventListener('click',function(){go('dash')});
document.getElementById('hdrShortlistStat').addEventListener('click',function(){fi.short='y';go('tbl')});
// Market card click delegation (runs once)
document.addEventListener('click',function(e){
  var card=e.target.closest('.market-card');
  var strip=document.getElementById('marketStrip');
  if(!strip)return;
  if(card&&strip.contains(card)){
    e.stopPropagation();
    var detail=card.querySelector('.market-detail');
    if(!detail)return;
    var wasOpen=detail.classList.contains('mkt-detail-open');
    strip.querySelectorAll('.market-detail').forEach(function(d){d.classList.remove('mkt-detail-open')});
    if(!wasOpen)detail.classList.add('mkt-detail-open');
  }else{
    strip.querySelectorAll('.market-detail').forEach(function(d){d.classList.remove('mkt-detail-open')});
  }
});

// Market auto-refresh: 15s when open, 5min when closed
var mktRefreshTimer=null;
function scheduleMktRefresh(){
  if(mktRefreshTimer)clearTimeout(mktRefreshTimer);
  var interval=mktStatus==='open'?15000:300000;
  mktRefreshTimer=setTimeout(async function(){
    await fetchMarketIndices();
    scheduleMktRefresh();
  },interval);
}
fetchMarketIndices().then(function(){scheduleMktRefresh()});

