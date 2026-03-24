/* App shell logic extracted from index.html for safer iteration. */

function H(s){if(typeof s!=='string')return s;return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}
var CD=[{"n":"San Diego","la":32.7157,"lo":-117.1611,"p":2246,"a":71241138297,"pt":813610},{"n":"Carlsbad","la":33.1581,"lo":-117.3506,"p":369,"a":5106787966,"pt":73766},{"n":"La Jolla","la":32.8328,"lo":-117.2713,"p":205,"a":4734525247,"pt":40164},{"n":"Escondido","la":33.1192,"lo":-117.0864,"p":155,"a":1181133720,"pt":16646},{"n":"Poway","la":32.9628,"lo":-117.0359,"p":117,"a":807417334,"pt":10694},{"n":"El Cajon","la":32.7948,"lo":-116.9625,"p":112,"a":722010115,"pt":11739},{"n":"Vista","la":33.2,"lo":-117.2428,"p":154,"a":647988665,"pt":16794},{"n":"San Marcos","la":33.1434,"lo":-117.1661,"p":85,"a":601114473,"pt":8934},{"n":"Encinitas","la":33.0369,"lo":-117.2919,"p":105,"a":546261208,"pt":12970},{"n":"Solana Beach","la":32.9912,"lo":-117.2714,"p":90,"a":463807012,"pt":10671},{"n":"Oceanside","la":33.1959,"lo":-117.3795,"p":92,"a":457306773,"pt":33678},{"n":"Chula Vista","la":32.6401,"lo":-117.0842,"p":112,"a":363356540,"pt":5336},{"n":"La Mesa","la":32.7678,"lo":-117.0231,"p":78,"a":310811348,"pt":3024},{"n":"Lakeside","la":32.8571,"lo":-116.9223,"p":30,"a":263804995,"pt":4234},{"n":"Santee","la":32.8384,"lo":-116.9739,"p":52,"a":247932412,"pt":4245},{"n":"Del Mar","la":32.9595,"lo":-117.2653,"p":46,"a":219446217,"pt":3418},{"n":"National City","la":32.6781,"lo":-117.0992,"p":33,"a":192968182,"pt":4189},{"n":"Lemon Grove","la":32.7426,"lo":-117.0314,"p":11,"a":188689899,"pt":3118},{"n":"Rancho Santa Fe","la":33.0203,"lo":-117.2028,"p":35,"a":122764766,"pt":2218},{"n":"Alpine","la":32.8351,"lo":-116.7664,"p":10,"a":86342461,"pt":2403},{"n":"Valley Center","la":33.2158,"lo":-117.0342,"p":14,"a":78447334,"pt":1827},{"n":"Fallbrook","la":33.3764,"lo":-117.2511,"p":22,"a":76867864,"pt":862},{"n":"Pala","la":33.3614,"lo":-117.0739,"p":1,"a":72659132,"pt":1425},{"n":"Coronado","la":32.6859,"lo":-117.1831,"p":17,"a":66084708,"pt":641},{"n":"Spring Valley","la":32.7448,"lo":-116.9989,"p":17,"a":41776175,"pt":697},{"n":"Cardiff By The Sea","la":33.0167,"lo":-117.2781,"p":8,"a":37122323,"pt":163},{"n":"Bonita","la":32.6589,"lo":-117.0303,"p":10,"a":34630680,"pt":101},{"n":"Cardiff","la":33.0167,"lo":-117.2781,"p":13,"a":29733731,"pt":327},{"n":"Ramona","la":33.0442,"lo":-116.8678,"p":9,"a":27046045,"pt":412},{"n":"Us Poway","la":32.9628,"lo":-117.0359,"p":1,"a":20424185,"pt":293},{"n":"Bonsall","la":33.2889,"lo":-117.225,"p":9,"a":14789190,"pt":177},{"n":"Jamul","la":32.7176,"lo":-116.8764,"p":5,"a":12909123,"pt":253},{"n":"San Diego Ca","la":32.7157,"lo":-117.1611,"p":1,"a":10424527,"pt":144},{"n":"Imperial Beach","la":32.5839,"lo":-117.1131,"p":4,"a":6106669,"pt":70},{"n":"Lake San Marcos","la":33.1434,"lo":-117.1661,"p":1,"a":1434153,"pt":1},{"n":"San Ysidro","la":32.5542,"lo":-117.0542,"p":1,"a":1313044,"pt":6}];
var TP=[["Fidelity Investments",135,8314309],["Empower",107,21373624],["Principal",79,12071173],["ADP",64,1878246],["MMA Securities",44,1387017],["Charles Schwab",33,4333443],["John Hancock",30,1392595],["Ascensus",27,650549],["Vanguard",25,1930771],["Morgan Stanley",25,1212688],["OneDigital",25,851260],["Transamerica",22,1152263],["Wells Fargo",20,628422],["Cambridge Investment Research",20,378374],["Voya",19,859424]];
var RKP=[["Guideline",71],["Fidelity Investments",40],["ADP",13],["Principal",13],["John Hancock",7],["Ascensus",6],["Charles Schwab",5],["Lincoln Financial",4],["Voya",4],["Paychex",4]];
var NB={"all":{"med_growth":12.0,"med_app":95000,"pct_safe_harbor":52,"pct_roth":76,"pct_match":84,"pct_profit_share":42,"pct_auto_enroll":62,"pct_with_advisor":48,"source":"National benchmarks (PSCA/Vanguard/Fidelity surveys, 2023-2024)"},"$1M-$5M":{"med_growth":14.0,"med_app":85000,"pct_safe_harbor":55,"pct_roth":72,"pct_match":82,"pct_profit_share":45,"pct_auto_enroll":45,"pct_with_advisor":28},"$5M-$10M":{"med_growth":13.0,"med_app":92000,"pct_safe_harbor":58,"pct_roth":78,"pct_match":86,"pct_profit_share":40,"pct_auto_enroll":55,"pct_with_advisor":42},"$10M-$50M":{"med_growth":12.5,"med_app":100000,"pct_safe_harbor":55,"pct_roth":82,"pct_match":88,"pct_profit_share":38,"pct_auto_enroll":65,"pct_with_advisor":55},"$50M+":{"med_growth":11.0,"med_app":115000,"pct_safe_harbor":45,"pct_roth":89,"pct_match":85,"pct_profit_share":35,"pct_auto_enroll":75,"pct_with_advisor":72}};
function getAssetBucket(a){if(a<1e6)return'Under $1M';if(a<5e6)return'$1M-$5M';if(a<1e7)return'$5M-$10M';if(a<5e7)return'$10M-$50M';return'$50M+'}
function getPartBucket(p){if(p<=10)return'1-10';if(p<=25)return'11-25';if(p<=50)return'26-50';if(p<=100)return'51-100';if(p<=250)return'101-250';return'250+'}

// --- Benchmark Display ---
function bmBar(label,val,peerVal,fmt,inverted){
var pct=peerVal>0?val/peerVal*100:100;
var isAbove=inverted?(val<peerVal):(val>peerVal);
var color=isAbove?'var(--teal2)':'var(--coral)';
var arrow=isAbove?'&#9650;':'&#9660;';
var diff=peerVal>0?Math.abs((val-peerVal)/peerVal*100):0;
var diffStr=diff>0?(isAbove?'+':'-')+diff.toFixed(0)+'%':'--';
return '<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;font-size:10px;margin-bottom:3px"><span style="color:var(--tx2)">'+label+'</span><span style="color:'+color+'">'+arrow+' '+diffStr+' vs peers</span></div><div style="display:flex;gap:8px;align-items:center"><div style="flex:1"><div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;margin-bottom:2px"><span style="color:var(--txh)">'+fmt(val)+'</span><span style="color:var(--tx3);font-size:10px">Peer med: '+fmt(peerVal)+'</span></div><div style="height:5px;background:var(--bg);border-radius:3px;overflow:hidden;position:relative"><div style="position:absolute;left:0;top:0;height:100%;width:50%;background:var(--bg4);border-radius:3px"></div><div style="position:absolute;left:0;top:0;height:100%;width:'+Math.min(pct/2,100)+'%;background:'+color+';border-radius:3px"></div></div></div></div></div>'}
function bmPct(label,val,peerPct){
var isAbove=val>0;
var diff=peerPct-val;
var color=Math.abs(diff)<5?'var(--tx2)':(val>=peerPct?'var(--teal2)':'var(--coral)');
return '<div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--brd);font-size:11px"><span style="color:var(--tx2)">'+label+'</span><span><span style="color:var(--txh);font-weight:600">'+(val?'Yes':'No')+'</span> <span style="color:'+color+';font-size:10px">('+peerPct.toFixed(0)+'% of peers)</span></span></div>'}

// --- Fee Benchmarking ---
var FEE_BENCHMARKS=[
{label:'Under $1M',min:0,max:1e6,median:1.20,p25:0.85,p75:1.60},
{label:'$1M–$5M',min:1e6,max:5e6,median:0.95,p25:0.65,p75:1.30},
{label:'$5M–$10M',min:5e6,max:1e7,median:0.72,p25:0.50,p75:0.95},
{label:'$10M–$50M',min:1e7,max:5e7,median:0.52,p25:0.35,p75:0.70},
{label:'$50M–$250M',min:5e7,max:2.5e8,median:0.35,p25:0.22,p75:0.48},
{label:'$250M+',min:2.5e8,max:Infinity,median:0.22,p25:0.12,p75:0.32}
];
function getFeeBucket(assets){for(var i=0;i<FEE_BENCHMARKS.length;i++){if(assets>=FEE_BENCHMARKS[i].min&&assets<FEE_BENCHMARKS[i].max)return FEE_BENCHMARKS[i]}return FEE_BENCHMARKS[FEE_BENCHMARKS.length-1]}

function feeBenchmarkHtml(assets,expenseRatio,totalExpenses,participants){
// expenseRatio = p[31] (admin fees / assets * 100), totalExpenses = p[30], participants = p[7]
var ratio=expenseRatio;
if(!ratio&&totalExpenses>0&&assets>0)ratio=+(totalExpenses/assets*100).toFixed(2);
if(!ratio||!assets)return '';

// --- Strict display criteria: only show if data looks reliable ---
// Skip if no real assets
if(assets<100000)return '';
// Skip if ratio is implausibly high (>2% for $10M+, >3% for $1M+, >5% for any)
if(ratio>5)return '';
if(ratio>3&&assets>=1e6)return '';
if(ratio>2&&assets>=1e7)return '';
// Skip if ratio is implausibly low (likely fees paid outside plan)
if(ratio<0.005)return '';
// Skip if no participants (data quality concern)
if(!participants||participants<1)return '';

var bk=getFeeBucket(assets);
var perPart=(totalExpenses>0&&participants>0)?Math.round(totalExpenses/participants):0;

// --- Data quality checks ---
var warnings=[];
var isSuspect=false;

// Still flag elevated but displayable ratios
if(ratio>1.8&&assets>=5e6){
  isSuspect=true;
  warnings.push('Ratio of '+ratio.toFixed(2)+'% is elevated for a '+FM.usd(assets)+' plan — may include one-time costs or a reporting anomaly.');
}
else if(ratio>2.5){
  isSuspect=true;
  warnings.push('Ratio of '+ratio.toFixed(2)+'% is high even for a smaller plan — verify this reflects ongoing admin costs.');
}
// Flag when admin cost per participant seems unreasonable (>$3,000/head)
if(perPart>3000&&participants>5){
  if(!isSuspect)warnings.push('Admin cost of $'+FM.n(perPart)+' per participant is above typical ranges.');
  isSuspect=true;
}

// Cap displayed ratio for visual positioning
var displayRatio=Math.min(ratio,bk.p75*2.5);

// Position on scale: 0% = p25, 50% = median, 100% = p75
var range=bk.p75-bk.p25;
var pos=range>0?((displayRatio-bk.p25)/range)*100:50;
pos=Math.max(0,Math.min(100,pos));

var isHigh=ratio>bk.median*1.15;
var isLow=ratio<bk.median*0.85;
var statusColor=isSuspect?'var(--coral)':isHigh?'var(--coral)':isLow?'var(--teal2)':'var(--acc2)';
var statusLabel=isSuspect?'VERIFY DATA':isHigh?'ABOVE MEDIAN':isLow?'BELOW MEDIAN':'NEAR MEDIAN';
var statusIcon=isSuspect?'&#9888;':isHigh?'&#9650;':isLow?'&#9660;':'&#9679;';
var diffPct=bk.median>0?((ratio-bk.median)/bk.median*100):0;

var h='<div class="dtl-sec"><div class="dtl-st">FEE BENCHMARKING</div>';
h+='<div style="padding:14px;border:1px solid '+(isSuspect?'rgba(255,107,82,.3)':'var(--brd)')+';border-radius:12px;background:var(--bg3)">';

// Header row
h+='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">';
h+='<div>';
h+='<div style="font-family:IBM Plex Mono,monospace;font-size:22px;font-weight:700;color:'+(isSuspect?'var(--coral)':'var(--txh)')+'">'+ratio.toFixed(2)+'%</div>';
h+='<div style="font-family:Jost,sans-serif;font-size:10px;color:var(--tx3)">Admin expense ratio'+(perPart>0?' · $'+FM.n(perPart)+'/participant':'')+'</div>';
h+='</div>';
h+='<div style="text-align:right">';
h+='<div style="font-family:IBM Plex Mono,monospace;font-size:11px;font-weight:700;color:'+statusColor+'">'+statusIcon+' '+statusLabel+'</div>';
h+='<div style="font-family:IBM Plex Mono,monospace;font-size:10px;color:var(--tx3)">'+(diffPct>=0?'+':'')+diffPct.toFixed(0)+'% vs median</div>';
h+='<div style="font-family:Jost,sans-serif;font-size:9px;color:var(--tx3);margin-top:2px">'+bk.label+' plans</div>';
h+='</div></div>';

// Warning banner if suspect
if(warnings.length){
h+='<div style="padding:8px 10px;border-radius:8px;background:rgba(255,107,82,.08);border:1px solid rgba(255,107,82,.18);margin-bottom:10px">';
for(var wi=0;wi<warnings.length;wi++){
h+='<div style="font-family:Jost,sans-serif;font-size:10px;color:var(--coral);line-height:1.5'+(wi>0?';margin-top:4px':'')+'">&#9888; '+warnings[wi]+'</div>';
}
h+='</div>';
}

// Visual bar
h+='<div style="margin-bottom:10px">';
h+='<div style="display:flex;justify-content:space-between;font-family:IBM Plex Mono,monospace;font-size:9px;color:var(--tx3);margin-bottom:4px"><span>'+bk.p25.toFixed(2)+'%</span><span>Median '+bk.median.toFixed(2)+'%</span><span>'+bk.p75.toFixed(2)+'%</span></div>';
h+='<div style="position:relative;height:22px;background:linear-gradient(90deg,rgba(46,212,191,.18) 0%,rgba(62,168,255,.14) 50%,rgba(255,107,82,.18) 100%);border-radius:11px;overflow:visible">';
// Median marker
h+='<div style="position:absolute;left:50%;top:0;width:2px;height:100%;background:var(--tx3);opacity:.4;transform:translateX(-1px)"></div>';
// Plan position marker
h+='<div style="position:absolute;left:'+pos+'%;top:50%;transform:translate(-50%,-50%);width:14px;height:14px;border-radius:50%;background:'+statusColor+';border:2px solid var(--bg3);box-shadow:0 2px 6px rgba(0,0,0,.2);z-index:1"></div>';
h+='</div></div>';

// Benchmark context
h+='<div style="font-family:Jost,sans-serif;font-size:10px;color:var(--tx3);line-height:1.5">';
if(isSuspect)h+='Review the filing to confirm this reflects normal ongoing admin costs before using in a prospect conversation.';
else if(isHigh)h+='Fees are above the peer median — a potential conversation starter about cost reduction and value optimization.';
else if(isLow)h+='Fees are competitive for this plan size. Focus the value conversation on service quality and outcomes rather than cost.';
else h+='Fees are in line with peers. Explore whether service quality and investment performance justify the current cost structure.';
h+='</div>';

// Disclaimer
h+='<div style="font-family:Jost,sans-serif;font-size:9px;color:var(--tx3);opacity:.7;margin-top:8px;padding-top:6px;border-top:1px solid var(--brd);line-height:1.4">Based on admin expenses reported on the Form 5500. May not reflect fees billed outside the plan (e.g. advisor fees paid directly by the sponsor, revenue sharing, or sub-TA fees netted from fund returns).</div>';

h+='</div></div>';
return h;
}

// --- Lookup Tables ---
var RL={RK:'Recordkeeper',TPA:'TPA',IA:'Advisor',BD:'Broker-Dealer',AUD:'Auditor',CUS:'Custodian',ACT:'Actuary',SVC:'Service Provider',EMP:'Employee',OTH:'Other',INS:'Insurance',LAW:'ERISA Attorney','':''};
var SIG={NSH:'No Safe Harbor',DEC:'Declining Assets',HGR:'High Growth',HBL:'High Balances',LTC:'Late Contributions',ESC:'Employer Securities',NAD:'No Advisor on Filing',HFE:'Elevated Fees',NAE:'No Auto Enroll'};
var SIGC={NSH:['rgba(238,107,77,.15)','#ee6b4d'],DEC:['rgba(238,107,77,.2)','#ee6b4d'],HGR:['rgba(62,142,138,.2)','#3e8e8a'],HBL:['rgba(17,138,169,.2)','#118aa9'],LTC:['rgba(238,107,77,.25)','#ee6b4d'],ESC:['rgba(238,107,77,.2)','#ee6b4d'],NAD:['rgba(238,107,77,.14)','#c44d3a'],HFE:['rgba(238,107,77,.18)','#c44d3a'],NAE:['rgba(17,138,169,.10)','#0d6e8a']};
var SIG_SHOW={NSH:1,HGR:1,HBL:1,LTC:1,DEC:1};
var SIGS={NSH:['#fdf0ec','#c44a2f'],DEC:['#fdf0ec','#c44a2f'],HGR:['#e8f5f4','#2d6e6b'],HBL:['#e6f2f7','#0d6e8a'],PSH:['#f5f0e8','#8a8077'],LTC:['#fdf0ec','#c44a2f'],ESC:['#fdf0ec','#c44a2f'],NAD:['#fdf0ec','#c44a2f'],LPG:['#e6f2f7','#0d6e8a'],HFE:['#fdf0ec','#c44a2f'],LCT:['#f5f0e8','#7f7469'],BND:['#e8f5f4','#0d6e8a'],DQR:['#f5f0e8','#7a6b5f'],LPR:['#fdf0ec','#c44a2f'],NEC:['#f5f0e8','#7f7469'],NAE:['#e6f2f7','#0d6e8a'],INS:['#e8f5f4','#0d6e8a']};

var FM={usd:function(v){if(v>=1e9)return'$'+(v/1e9).toFixed(1)+'B';if(v>=1e6)return'$'+(v/1e6).toFixed(1)+'M';if(v>=1e3)return'$'+(v/1e3).toFixed(0)+'K';return'$'+v.toLocaleString()},n:function(v){return v.toLocaleString()},p:function(v){return(v>=0?'+':'')+v.toFixed(1)+'%'}};

/* === Client-side data enrichment layer === */
var PROVIDER_ALIASES=[
  {canon:'Empower',match:/\b(empower|great[- ]west|gwrs|prudential retirement)\b/i},
  {canon:'Fidelity',match:/\b(fidelity|fmr)\b/i},
  {canon:'Vanguard',match:/\b(vanguard)\b/i},
  {canon:'John Hancock',match:/\b(john hancock|jhancock|jh trust|john hancock trust)\b/i},
  {canon:'Principal',match:/\b(principal)\b/i},
  {canon:'Transamerica',match:/\b(transamerica)\b/i},
  {canon:'MassMutual',match:/\b(massmutual|mass mutual)\b/i},
  {canon:'Nationwide',match:/\b(nationwide)\b/i},
  {canon:'T. Rowe Price',match:/\b(t\.?\s?rowe|trowe|t\. rowe)\b/i},
  {canon:'ADP',match:/\b(adp)\b/i},
  {canon:'Paychex',match:/\b(paychex)\b/i},
  {canon:'Guideline',match:/\b(guideline)\b/i},
  {canon:'Human Interest',match:/\b(human interest)\b/i},
  {canon:'Lincoln Financial',match:/\b(lincoln financial|lincoln national)\b/i},
  {canon:'Talcott Resolution Life',match:/\b(talcott)\b/i},
  {canon:'Voya',match:/\b(voya)\b/i},
  {canon:'Merrill',match:/\b(merrill|mlpf&s)\b/i},
  {canon:'Schwab',match:/\b(schwab)\b/i}
];

function cleanProviderName(name){
  if(!name)return '';
  var s=String(name).replace(/\s+/g,' ').trim();
  for(var i=0;i<PROVIDER_ALIASES.length;i++){
    if(PROVIDER_ALIASES[i].match.test(s))return PROVIDER_ALIASES[i].canon;
  }
  return s.replace(/\b(inc|llc|l\.l\.c\.|corp|corporation|company|co\.|trust company|trust co\.?)\b/ig,'').replace(/\s{2,}/g,' ').replace(/[,\-]\s*$/,'').trim();
}
function pctOf(num,den){
  num=Number(num); den=Number(den);
  if(!isFinite(num)||!isFinite(den)||den<=0)return null;
  return num/den*100;
}
function clamp(n,min,max){return Math.max(min,Math.min(max,n))}
function enrichPlanRow(p){
  var e={normalized:{},derived:{},warnings:[],confidence:{},notes:[],signals:[],signalCodes:[],baseScore:Number(p[12])||0,schedules:{},features:{}};
  var assets=Number(p[4])||0, assetsBoy=Number(p[5])||0, growth=Number(p[6]), parts=Number(p[7])||0, partsBoy=Number(p[17])||0;
  var rk=cleanProviderName(p[18]), tpa=cleanProviderName(p[19]), advisor=cleanProviderName(p[20]);
  p[18]=rk; p[19]=tpa; p[20]=advisor;
  if(Array.isArray(p[21])){
    for(var i=0;i<p[21].length;i++){
      if(p[21][i]&&p[21][i][0])p[21][i][0]=cleanProviderName(p[21][i][0]);
    }
  }
  e.normalized.recordkeeper=rk||'';
  e.normalized.tpa=tpa||'';
  e.normalized.advisor=advisor||'';

  var avgBalance=Number(p[23])||0;
  if(!avgBalance&&assets>0&&parts>0)avgBalance=Math.round(assets/parts);
  e.derived.avgBalance=avgBalance||null;
  if(avgBalance&&!p[23]){ p[23]=avgBalance; e.notes.push('Average balance derived from assets and participant count.'); }

  var adminExpenses=Number(p[29])||0;
  var totalContrib=Number(p[30])||0;
  var expenseRatioRaw=Number(p[31]);
  var eligible=Number(p[32])||0;
  var employerContrib=Number(p[33])||0;
  var employeeContrib=Number(p[34])||0;
  var totalExpenses=Number(p[35])||0;
  var scheduleText=(p[36]||'').toString();
  var insuranceRaw=p[37];

  // Improved admin expense ratio calculation (more conservative)
// Only trust explicit ratio if clearly valid
var expenseRatioPct = null;
if(isFinite(expenseRatioRaw) && expenseRatioRaw > 0){
  // If it's a decimal like 0.008 → convert to %
  if(expenseRatioRaw < 0.2){
    expenseRatioPct = expenseRatioRaw * 100;
  }
  // If it's already a % like 0.85 or 1.2 → keep
  else if(expenseRatioRaw < 5){
    expenseRatioPct = expenseRatioRaw;
  }
}
// Fallback ONLY if adminExpenses looks reasonable relative to assets
if(expenseRatioPct === null && adminExpenses > 0 && assets > 0){
  var calc = pctOf(adminExpenses, assets);
  // sanity bounds: ignore if clearly unrealistic
  if(calc > 0.05 && calc < 3.5){
    expenseRatioPct = calc;
  }
}

  var totalExpenseRatioPct=totalExpenses>0&&assets>0?pctOf(totalExpenses,assets):null;
  var contribRatioPct=totalContrib>0&&assets>0?pctOf(totalContrib,assets):null;
  var participationRatePct=eligible>0&&parts>0?pctOf(parts,eligible):null;
  var employerRatioPct=employerContrib>0&&assets>0?pctOf(employerContrib,assets):null;
  var employeeRatioPct=employeeContrib>0&&assets>0?pctOf(employeeContrib,assets):null;

  e.derived.adminExpenses=adminExpenses||null;
  e.derived.totalContributions=totalContrib||null;
  e.derived.expenseRatioPct=expenseRatioPct;
  e.derived.totalExpenseRatioPct=totalExpenseRatioPct;
  e.derived.contributionRatioPct=contribRatioPct;
  e.derived.assetDelta=assetsBoy>0?(assets-assetsBoy):null;
  e.derived.eligibleParticipants=eligible||null;
  e.derived.participationRatePct=participationRatePct;
  e.derived.employerContributions=employerContrib||null;
  e.derived.employeeContributions=employeeContrib||null;
  e.derived.employerContributionRatioPct=employerRatioPct;
  e.derived.employeeContributionRatioPct=employeeRatioPct;
  e.derived.totalExpenses=totalExpenses||null;

  e.schedules.A=/\bA\b/i.test(scheduleText);
  e.schedules.C=/\bC\b/i.test(scheduleText);
  e.schedules.H=/\bH\b/i.test(scheduleText);
  e.schedules.I=/\bI\b/i.test(scheduleText);

  var featureText=(p[22]||'').toLowerCase();
  e.features.safeHarbor=/safe\s*harbor/.test(featureText);
  e.features.autoEnroll=/auto[^a-z]{0,4}enroll|automatic\s+enroll/.test(featureText);
  e.features.autoEscalation=/auto[^a-z]{0,4}escal|automatic\s+escal/.test(featureText);
  e.features.loans=/loan/.test(featureText);
  e.features.roth=/roth/.test(featureText);

  var existingSignals=(p[11]?String(p[11]).split(',').filter(Boolean):[]);
  function addSignal(code){
    if(existingSignals.indexOf(code)<0)existingSignals.push(code);
    if(e.signalCodes.indexOf(code)<0)e.signalCodes.push(code);
  }

  var insuranceBased = !!insuranceRaw || e.schedules.A || featureText.indexOf('insurance contract')>=0 || /lincoln|talcott|massmutual|nationwide|john hancock|principal/i.test(rk);
  if(!advisor){ addSignal('NAD'); e.warnings.push('Advisor not listed in current filing data.'); }
  if(assets>=7500000 || (assets>=5000000 && parts>=75)){ addSignal('LPG'); }
  if(
  expenseRatioPct!=null &&
  adminExpenses>0 &&
  (
    (assets>=10000000 && expenseRatioPct>=0.85) ||
    (assets>=5000000 && assets<10000000 && expenseRatioPct>=0.95) ||
    (assets>=1000000 && assets<5000000 && expenseRatioPct>=1.20)
  )
){
  addSignal('HFE');
  e.notes.push('Administrative cost ratio looks elevated at an estimated '+expenseRatioPct.toFixed(2)+'% of assets.');
}
  if(totalExpenseRatioPct!=null && assets>=5000000 && totalExpenseRatioPct>=1.25){ e.warnings.push('Total plan expenses look elevated for plan size.'); }
  if(expenseRatioPct!=null && adminExpenses>0 && assets>=1000000 && !existingSignals.includes('HFE') && expenseRatioPct>=0.75){
  e.notes.push('Administrative cost ratio may warrant review at an estimated '+expenseRatioPct.toFixed(2)+'% of assets.');
}
if(contribRatioPct!=null && assets>=2000000 && parts>=25 && contribRatioPct<2.5){ addSignal('LCT'); e.notes.push('Contribution activity looks light relative to plan assets.'); }
  if(participationRatePct!=null && eligible>=30 && participationRatePct<65){ addSignal('LPR'); e.warnings.push('Participation rate appears light relative to eligible employees.'); }
  if(employerContrib===0 && employeeContrib>0 && assets>=2000000 && !e.features.safeHarbor){ addSignal('NEC'); e.notes.push('No employer contribution detected from available filing totals.'); }
  if(!e.features.autoEnroll && assets>=5000000 && parts>=50){ addSignal('NAE'); }
  if(insuranceBased && assets>=1000000){ addSignal('INS'); }
  if(((featureText.indexOf('insurance contract')>=0) || /lincoln|talcott|massmutual|nationwide|john hancock|principal/i.test(rk)) && !advisor && assets>=1000000){ addSignal('BND'); }
  if((assets>0&&parts===0) || (assets>=500000&&parts>0&&avgBalance<1500) || (assetsBoy===0&&assets>0&&growth<-15) || (contribRatioPct!=null&&contribRatioPct>40) || (eligible>0&&parts>eligible*1.15)){ addSignal('DQR'); e.warnings.push('One or more plan metrics look unusual and should be reviewed against the filing.'); }

  if(parts>=25&&assets>0&&avgBalance>300000) e.notes.push('High average balance profile.');
  if(isFinite(growth)&&growth>=40 && assets>=1000000) e.notes.push('Strong year-over-year asset growth.');
  if(isFinite(growth)&&growth<=-25 && assets>=1000000) e.warnings.push('Meaningful asset decline year over year.');
  if(e.schedules.C) e.notes.push('Schedule C provider compensation detail available.');
  if(e.schedules.A) e.notes.push('Schedule A insurance detail available.');
  if(e.features.loans) e.notes.push('Participant loans appear to be permitted.');
  if(e.features.roth) e.notes.push('Roth feature appears to be available.');

  var confCount=0, confScore=0;
  function setConfidence(key,label){
    e.confidence[key]=label;
    confCount++;
    confScore += label==='high' ? 3 : label==='medium' ? 2 : 1;
  }
  setConfidence('assets', assets>0?'high':'low');
  setConfidence('participants', parts>0?'high':'low');
  setConfidence('recordkeeper', rk?'high':'low');
  setConfidence('advisor', advisor?'medium':'low');
  setConfidence('avgBalance', avgBalance?(p[23]===avgBalance&&Number(p[23])===avgBalance?'high':'medium'):'low');
  var feeConfidence='low';
if(expenseRatioPct!=null){
  if(isFinite(expenseRatioRaw) && expenseRatioRaw>0) feeConfidence='medium';
  else if(adminExpenses>0 && assets>=1000000) feeConfidence='medium';
}
setConfidence('fees', feeConfidence);
  setConfidence('participation', participationRatePct!=null?'medium':'low');
  setConfidence('contributions', (employerContrib>0||employeeContrib>0||totalContrib>0)?'medium':'medium');

  var overall=confCount?confScore/confCount:1;
  e.overallConfidence = overall>=2.5?'High':overall>=1.8?'Medium':'Low';

  var score=e.baseScore;
  if(existingSignals.indexOf('NAD')>=0)score+=8;
  if(existingSignals.indexOf('LPG')>=0)score+=4;
  if(existingSignals.indexOf('HFE')>=0)score+=6;
  if(existingSignals.indexOf('BND')>=0)score+=3;
  if(existingSignals.indexOf('INS')>=0)score+=3;
  if(existingSignals.indexOf('LPR')>=0)score+=5;
  if(existingSignals.indexOf('NEC')>=0)score+=3;
  if(existingSignals.indexOf('NAE')>=0)score+=2;
  if(existingSignals.indexOf('LCT')>=0)score+=2;
  if(existingSignals.indexOf('DQR')>=0)score-=5;
  if(advisor)score-=1;
  e.adjustedScore=clamp(Math.round(score),0,100);

  p[11]=existingSignals.join(',');
  p[12]=e.adjustedScore;
  p._enrich=e;
  return p;
}
function enrichDataset(rows){
  for(var i=0;i<rows.length;i++)enrichPlanRow(rows[i]);
}
enrichDataset(D);


var MARKET_CONFIG=[
  {symbol:'^GSPC',label:'S&P 500'},
  {symbol:'^DJI',label:'Dow'},
  {symbol:'^IXIC',label:'Nasdaq'}
];
function fmtMarketPrice(v){
  var n=Number(v);
  if(!isFinite(n))return '--';
  return n.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2});
}
function fmtMarketPct(v){
  var n=Number(v);
  if(!isFinite(n))return '--';
  return (n>=0?'+':'')+n.toFixed(2)+'%';
}
function buildSparkSVG(data, w, h, color) {
  if (!data || data.length < 2) return '';
  var mn = Math.min.apply(null, data), mx = Math.max.apply(null, data);
  var range = mx - mn || 1;
  var pts = data.map(function(v, i) {
    var x = (i / (data.length - 1)) * w;
    var y = h - ((v - mn) / range) * (h - 2) - 1;
    return x.toFixed(1) + ',' + y.toFixed(1);
  });
  return '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" style="display:block">'
    + '<polyline points="' + pts.join(' ') + '" fill="none" stroke="' + color + '" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>'
    + '</svg>';
}
function marketCardHTML(item, quote) {
  quote = quote || {};
  var pct = Number(quote.changesPercentage);
  var cls = isFinite(pct) ? (pct >= 0 ? 'text-green' : 'text-red') : '';
  var arrow = isFinite(pct) ? (pct >= 0 ? '<span class="market-arrow">&#9650;</span>' : '<span class="market-arrow">&#9660;</span>') : '';
  var loaded = quote.symbol ? 'mkt-loaded' : 'market-loading';
  var sparkColor = isFinite(pct) ? (pct >= 0 ? '#53d3b0' : '#ff8a76') : '#8aa0b1';
  var sparkHtml = (quote.sparkline && quote.sparkline.length > 1) ? '<div class="market-spark">' + buildSparkSVG(quote.sparkline, 48, 18, sparkColor) + '</div>' : '';
  var bigSparkHtml = (quote.sparkline && quote.sparkline.length > 1) ? '<div class="market-detail-spark">' + buildSparkSVG(quote.sparkline, 172, 36, sparkColor) + '</div>' : '';
  var changePts = quote.change != null ? (quote.change >= 0 ? '+' : '') + quote.change.toFixed(2) : '';

  var detail = '<div class="market-detail">';
  detail += '<div class="market-detail-row"><span>Previous Close</span><span>' + (quote.previousClose ? fmtMarketPrice(quote.previousClose) : '--') + '</span></div>';
  detail += '<div class="market-detail-row"><span>Change</span><span class="' + cls + '">' + (changePts || '--') + '</span></div>';
  detail += '<div class="market-detail-row"><span>Change %</span><span class="' + cls + '">' + (isFinite(pct) ? (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%' : '--') + '</span></div>';
  if (quote.sparkline && quote.sparkline.length > 1) {
    var sparkMin = Math.min.apply(null, quote.sparkline);
    var sparkMax = Math.max.apply(null, quote.sparkline);
    detail += '<div class="market-detail-row"><span>5d Range</span><span>' + fmtMarketPrice(sparkMin) + ' – ' + fmtMarketPrice(sparkMax) + '</span></div>';
  }
  detail += bigSparkHtml;
  detail += '</div>';

  return '<div class="market-card ' + loaded + '">'
    + '<div class="market-label-row"><span class="market-label">' + item.label + '</span>' + sparkHtml + '</div>'
    + '<div class="market-value-row">'
    + '<span class="market-price">' + fmtMarketPrice(quote.price) + '</span>'
    + '<span class="market-change ' + cls + '">' + arrow + fmtMarketPct(quote.changesPercentage) + '</span>'
    + (changePts ? '<span class="market-pts">' + changePts + '</span>' : '')
    + '</div>'
    + detail
    + '</div>';
}
var mktStatus='closed';
var mktLastTs=null;
var mktFirstRender=true;
function renderMarketStrip(quotes){
  var strip=document.getElementById('marketStrip');
  if(!strip)return;
  var bySymbol={};
  var hasData=false;
  (quotes||[]).forEach(function(q){
    if(q&&q.symbol){bySymbol[q.symbol]=q;if(q.price)hasData=true}
  });
  var isOpen=mktStatus==='open';
  var isPrePost=mktStatus==='prepost';
  var statusLabel=isOpen?'Market Open':isPrePost?'Pre/Post Market':'Market Closed';
  var statusCls=isOpen?'':(isPrePost?'mkt-prepost':'mkt-closed');

  // If first render or no cards exist yet, do full innerHTML
  var existingCards=strip.querySelectorAll('.market-card');
  if(mktFirstRender||!existingCards.length||!hasData){
    var tsLabel='';
    if(mktLastTs){
      var d=new Date(mktLastTs*1000);
      var h2=d.getHours(),m2=d.getMinutes(),ampm2=h2>=12?'PM':'AM';
      h2=h2%12||12;
      tsLabel=' \xb7 '+h2+':'+String(m2).padStart(2,'0')+ampm2;
    }
    var liveTag=hasData?'<div class="market-live '+statusCls+'"><div class="market-live-dot"></div><div class="market-live-text">'+statusLabel+tsLabel+'</div></div>':'';
    var cards=MARKET_CONFIG.map(function(item){
      return marketCardHTML(item, bySymbol[item.symbol]);
    }).join('');
    strip.innerHTML=liveTag+cards;
    mktFirstRender=false;
    return;
  }

  // In-place update: just update text values, no DOM rebuild
  // Update live tag
  var liveEl=strip.querySelector('.market-live');
  if(liveEl){
    liveEl.className='market-live '+statusCls;
    var textEl=liveEl.querySelector('.market-live-text');
    if(textEl){
      var tsLabel2='';
      if(mktLastTs){
        var d2=new Date(mktLastTs*1000);
        var h3=d2.getHours(),m3=d2.getMinutes(),ampm3=h3>=12?'PM':'AM';
        h3=h3%12||12;
        tsLabel2=' \xb7 '+h3+':'+String(m3).padStart(2,'0')+ampm3;
      }
      textEl.textContent=statusLabel+tsLabel2;
    }
  }

  // Update each market card in place
  existingCards.forEach(function(card,idx){
    var item=MARKET_CONFIG[idx];
    if(!item)return;
    var quote=bySymbol[item.symbol]||{};
    var pct=Number(quote.changesPercentage);
    var cls=isFinite(pct)?(pct>=0?'text-green':'text-red'):'';
    var arrow=isFinite(pct)?(pct>=0?'\u25B2':'\u25BC'):'';
    var changePts=quote.change!=null?(quote.change>=0?'+':'')+quote.change.toFixed(2):'';

    // Update price
    var priceEl=card.querySelector('.market-price');
    if(priceEl)priceEl.textContent=fmtMarketPrice(quote.price);

    // Update change % with color
    var changeEl=card.querySelector('.market-change');
    if(changeEl){
      changeEl.className='market-change '+cls;
      changeEl.innerHTML=(arrow?'<span class="market-arrow">'+arrow+'</span>':'')+fmtMarketPct(quote.changesPercentage);
    }

    // Update pts
    var ptsEl=card.querySelector('.market-pts');
    if(ptsEl)ptsEl.textContent=changePts;
    else if(changePts){
      var sp=document.createElement('span');
      sp.className='market-pts';
      sp.textContent=changePts;
      var vr=card.querySelector('.market-value-row');
      if(vr)vr.appendChild(sp);
    }

    // Update sparkline
    var sparkEl=card.querySelector('.market-spark');
    if(sparkEl&&quote.sparkline&&quote.sparkline.length>1){
      var sparkColor=isFinite(pct)?(pct>=0?'#53d3b0':'#ff8a76'):'#8aa0b1';
      sparkEl.innerHTML=buildSparkSVG(quote.sparkline,48,18,sparkColor);
    }

    // Update detail panel if it exists
    var detailRows=card.querySelectorAll('.market-detail-row');
    if(detailRows.length>=3){
      var prevSpan=detailRows[0].querySelector('span:last-child');
      if(prevSpan)prevSpan.textContent=quote.previousClose?fmtMarketPrice(quote.previousClose):'--';
      var chgSpan=detailRows[1].querySelector('span:last-child');
      if(chgSpan){chgSpan.className=cls;chgSpan.textContent=changePts||'--'}
      var pctSpan=detailRows[2].querySelector('span:last-child');
      if(pctSpan){pctSpan.className=cls;pctSpan.textContent=isFinite(pct)?(pct>=0?'+':'')+pct.toFixed(2)+'%':'--'}
    }

    // Remove loading state
    card.classList.remove('market-loading');
    if(!card.classList.contains('mkt-loaded'))card.classList.add('mkt-loaded');
  });
}

// --- News Ticker ---
function fetchNews(){
  fetch('/api/news?_t='+Date.now()).then(function(r){return r.json()}).then(function(data){
    if(!data.ok||!data.items||!data.items.length)return;
    var ticker=document.getElementById('newsTicker');
    var inner=document.getElementById('newsTickerInner');
    if(!ticker||!inner)return;
    // Build doubled content for seamless loop
    var html='';
    for(var pass=0;pass<2;pass++){
      for(var i=0;i<data.items.length;i++){
        if(i>0||pass>0)html+='<span class="news-ticker-sep">\xb7</span>';
        html+='<a class="news-ticker-item" href="'+data.items[i].link+'" target="_blank" rel="noopener">'+data.items[i].title+'</a>';
      }
    }
    inner.innerHTML=html;
    // Calculate animation duration based on content width
    requestAnimationFrame(function(){
      var totalW=inner.scrollWidth/2;
      var duration=Math.max(totalW/40,30);// ~40px/sec, min 30s
      inner.style.animationDuration=duration+'s';
      ticker.classList.add('has-news');
      document.body.classList.add('has-news-ticker');
    });
  }).catch(function(){/* silent fail — news is non-critical */});
}
setTimeout(fetchNews,2000);// fetch news 2s after load
setInterval(fetchNews,600000);// refresh every 10min
async function fetchMarketIndices(){
  try{
    var resp=await fetch('/api/market-indices?_t='+Date.now(),{cache:'no-store'});
    if(!resp.ok)throw new Error('fn-'+resp.status);
    var data=await resp.json();
    if(data._debug)console.log('[Market]',data.source,data.marketState,data._debug);
    if(data.ok&&Array.isArray(data.quotes)&&data.quotes.length){
      // Use server-determined status, fallback to reading quote marketState directly
      if(data.marketStatus){
        mktStatus=data.marketStatus;
      }else if(data.quotes[0]&&data.quotes[0].marketState){
        var rawState=(data.quotes[0].marketState||'').toUpperCase();
        mktStatus=rawState==='REGULAR'?'open':(rawState==='PRE'||rawState==='POST'||rawState==='POSTPOST')?'prepost':'closed';
      }
      if(data.lastUpdated)mktLastTs=data.lastUpdated;
      renderMarketStrip(data.quotes);
      return;
    }
    throw new Error('fn-empty');
  }catch(e1){
    console.error('Market data error:',e1.message);
    renderMarketStrip([]);
  }
}

// --- State Variables ---
// Toast notifications
function toast(msg,type){
  type=type||'info';
  var box=document.getElementById('toastBox');
  var t=document.createElement('div');
  t.className='toast toast-'+type;
  t.textContent=msg;
  box.appendChild(t);
  setTimeout(function(){t.classList.add('out');setTimeout(function(){if(t.parentNode)t.parentNode.removeChild(t)},300)},2500);
}

var enrichCache=(function(){try{return JSON.parse(localStorage.getItem('mammini_enrich')||'{}')}catch(e){return{}}})();
function saveEnrichCache(){try{localStorage.setItem('mammini_enrich',JSON.stringify(enrichCache))}catch(e){}}
var savedViews={};
// Scoring weights (user-adjustable via Settings)
var SCORE_DEFAULTS={noAdvisor:25,assetFit:15,growth:10,partFit:8,noSafeHarbor:5,highBalance:5,highContrib:5,highExpenseRatio:5,lateContrib:-5,emplrSec:-3,base:30,assetMin:1e6,assetMax:5e7,partMin:10,partMax:300,balanceThresh:100000,growthThresh:20,contribPerPartThresh:10000,feePerPartThresh:500,targetRK:''};
var SCORE_W=(function(){
  try{var s=JSON.parse(localStorage.getItem('mammini_score_weights'));if(s&&typeof s.base==='number')return s}catch(e){}
  return JSON.parse(JSON.stringify(SCORE_DEFAULTS));
})();
function saveScoreWeights(){try{localStorage.setItem('mammini_score_weights',JSON.stringify(SCORE_W))}catch(e){}}
function rescoreAll(){
  var w=SCORE_W;
  var tRK=(w.targetRK||'').toLowerCase().trim();
  for(var i=0;i<D.length;i++){
    var p=D[i],s=w.base;
    // No advisor
    if(!p[20])s+=w.noAdvisor;
    // Asset sweet spot (custom range)
    if(p[4]>=w.assetMin&&p[4]<=w.assetMax)s+=w.assetFit;
    else if(p[4]>w.assetMax)s+=Math.round(w.assetFit/2);
    // Growth
    if(p[6]>w.growthThresh)s+=w.growth+5;
    else if(p[6]>0)s+=w.growth;
    else if(p[6]<-5)s-=3;
    // Participant sweet spot (custom range)
    if(p[7]>=w.partMin&&p[7]<=w.partMax)s+=w.partFit;
    // No safe harbor
    var codes=p[8]||'';
    if(codes.indexOf('2T')<0&&codes.indexOf('2S')<0)s+=w.noSafeHarbor;
    // High balance (custom threshold)
    if(p[23]>=w.balanceThresh)s+=w.highBalance;
    // High contributions per participant (custom threshold)
    if(p[33]>=w.contribPerPartThresh&&p[33]>0)s+=w.highContrib;
    // High expense ratio (above threshold = displacement opportunity)
    if(p[31]>=w.feePerPartThresh&&p[31]>0)s+=w.highExpenseRatio;
    // Target RK bonus
    if(tRK&&p[18]&&p[18].toLowerCase().indexOf(tRK)>=0)s+=10;
    // Penalties
    if(p[26])s+=w.lateContrib;
    if(p[27]>0)s+=w.emplrSec;
    p[12]=Math.max(0,Math.min(100,s));
  }
}
// RK → Likely TDF Provider mapping (includes CIT notes for large plans)
var RK_TDF_MAP={
'Fidelity Investments':'Fidelity Freedom','Fidelity':'Fidelity Freedom',
'Vanguard':'Vanguard Target Retirement',
'Empower':'BlackRock LifePath',
'Principal':'Principal Lifetime',
'John Hancock':'John Hancock Multimanager Lifetime',
'Nationwide':'Nationwide Destination',
'Charles Schwab':'Schwab Target','Schwab':'Schwab Target',
'T. Rowe Price':'T. Rowe Price Retirement',
'TIAA':'TIAA-CREF Lifecycle',
'Transamerica':'Transamerica ClearPath',
'Lincoln Financial':'Lincoln Director',
'Voya':'Voya Target Retirement',
'ADP':'Voya Target Retirement (typical)',
'Paychex':'Paychex / John Hancock Lifetime',
'MassMutual':'MassMutual RetireSmart',
'Prudential':'Prudential Day One','PGIM':'Prudential Day One',
'Guideline':'Vanguard Target Retirement (typical)',
'Ascensus':'Varies by plan',
'American Funds':'American Funds Target Date Retirement',
'CAPITAL GROUP':'American Funds Target Date Retirement',
'Hartford':'Hartford Target Retirement',
'MetLife':'MetLife Target Retirement',
'JPMORGAN':'JPMorgan SmartRetirement',
'Goldman Sachs':'Goldman Sachs Target Date',
'Morgan Stanley':'Morgan Stanley Pathway',
'Wells Fargo':'Allspring Target Date','Allspring':'Allspring Target Date',
'BETTERMENT':'Betterment (custom allocation)',
'HUMAN INTEREST':'Vanguard Target Retirement (typical)',
'American United Life':'OneAmerica / custom',
'STANCORP FINANCIAL':'StanCorp / standard',
'MUTUAL OF AMERICA':'Mutual of America Retirement',
'NEWPORT GROUP':'Varies by plan',
'EQUITABLE':'Equitable / custom',
'Great-West':'BlackRock LifePath',
'Alight Solutions':'Varies by plan','ALIGHT SOLUTIONS':'Varies by plan',
'VARIABLE ANNUITY LIFE':'VALIC / custom',
'PCS RETIREMENT':'Varies by plan',
'CMFG LIFE':'CUNA Mutual / custom',
'Standard Insurance':'Standard / custom',
'Mercer':'Varies by plan',
'INSPERITY':'Vanguard Target Retirement (typical)',
'CAPITAL RESEARCH':'American Funds Target Date Retirement',
'CAPITOL GROUP':'American Funds Target Date Retirement',
'ONEAMERICA':'OneAmerica / custom',
'Alerus Financial':'Varies by plan',
'LEADING RETIREMENT':'Varies by plan',
'STANCORP':'StanCorp / standard',
'FID INVEST':'Fidelity Freedom',
'NORTHERN TRUST':'Northern Trust / custom',
'Matrix Trust':'Varies by plan',
'Newport Trust':'Varies by plan'
};
// Large plans (>$10M) often use CITs instead of mutual funds
var RK_CIT_LIKELY={
'Fidelity Investments':true,'Fidelity':true,
'Vanguard':true,'Empower':true,'Great-West':true,
'T. Rowe Price':true,'TIAA':true,
'Principal':true,'John Hancock':true,
'JPMORGAN':true,'Goldman Sachs':true,
'BlackRock':true,'State Street':true,
'NORTHERN TRUST':true,'Mercer':true,
'Alight Solutions':true,'ALIGHT SOLUTIONS':true
};
function getTDFForRK(rk,assets){
  if(!rk)return '';
  var tdf='';
  if(RK_TDF_MAP[rk]){tdf=RK_TDF_MAP[rk]}
  else{
    var rkUp=rk.toUpperCase();
    for(var key in RK_TDF_MAP){
      if(rkUp.indexOf(key.toUpperCase())>=0){tdf=RK_TDF_MAP[key];break}
    }
  }
  // Flag CIT possibility for large plans
  if(tdf&&assets&&assets>=1e7){
    var isCIT=false;
    if(RK_CIT_LIKELY[rk])isCIT=true;
    else{for(var k in RK_CIT_LIKELY){if(rk.toUpperCase().indexOf(k.toUpperCase())>=0){isCIT=true;break}}}
    if(isCIT&&tdf.indexOf('CIT')<0&&tdf.indexOf('Varies')<0)tdf+=' (may use CIT)';
  }
  return tdf;
}
// Populate p[34] (likely TDF) for all plans on load
(function(){
  for(var i=0;i<D.length;i++){
    while(D[i].length<35)D[i].push('');
    if(!D[i][34])D[i][34]=getTDFForRK(D[i][18],D[i][4]);
  }
})();
var ct='dash',sc=12,sd=-1,fi={s:'',c:'',ms:0,ma:0,maMax:0,t:'',ia:'n',prov:'',minP:0,maxP:0,short:'',ind:''},fd=D.slice(),pg=0,pp=100,sel=null,notes={},leafMap=null,checked={},shortlist={},mapLayerByCity={},activeHoverCity='',activeDashSignal='',mapColorMode='score';
var DASH_SIGNAL_META={HGR:{label:'High Growth',desc:'Expanding needs'},NSH:{label:'No Safe Harbor',desc:'Design opening'},HBL:{label:'High Balances',desc:'Fee/value review'}};
function dashSignalMatch(p,sig){var s=(p[11]||'').split(',');return s.indexOf(sig)>=0}
function dashSubset(){if(!activeDashSignal)return D.slice();return D.filter(function(p){return dashSignalMatch(p,activeDashSignal)})}
function titleCaseCity(v){return (v||'').split(' ').map(function(w){return w?w[0]+w.slice(1).toLowerCase():w}).join(' ')}
try{shortlist=JSON.parse(localStorage.getItem('mammini_shortlist')||'{}')||{}}catch(e){shortlist={}}
setTimeout(updateShortlistHeader,0)
function saveShortlist(){try{localStorage.setItem('mammini_shortlist',JSON.stringify(shortlist))}catch(e){}updateShortlistHeader()}
function isShortlisted(ein){return !!shortlist[ein]}
function toggleShortlistPlan(plan){if(!plan||!plan[14])return false;if(shortlist[plan[14]])delete shortlist[plan[14]];else shortlist[plan[14]]={name:plan[0],sponsor:plan[1],city:plan[2],score:plan[12],assets:plan[4],ts:Date.now()};saveShortlist();return !!shortlist[plan[14]]}
function shortlistCount(){return Object.keys(shortlist).length}
function shortlistButtonLabel(plan){return isShortlisted(plan[14])?'SAVED':'SHORTLIST'}
function getPlanNotePreview(ein){
  try{
    var raw=localStorage.getItem('note_'+ein)||'';
    raw=raw.replace(/\s+/g,' ').trim();
    return raw.length>72?raw.slice(0,72)+'…':raw;
  }catch(e){return ''}
}
function updateShortlistHeader(){
  var el=document.getElementById('hdrShortlistStat');
  if(!el)return;
  var ct=shortlistCount();
  if(ct){
    el.style.display='inline';
    el.innerHTML='SHORTLIST <b>'+ct+'</b>';
  }else{
    el.style.display='none';
    el.innerHTML='';
  }
}
function setMapCityHover(city){
 activeHoverCity=(city||'').toUpperCase();
 document.querySelectorAll('[data-mapcity]').forEach(function(el){
   var hit=activeHoverCity && (el.dataset.mapcity||'').toUpperCase()===activeHoverCity;
   el.classList.toggle('is-hovered',!!hit);
 });
 for(var k in mapLayerByCity){
   var layer=mapLayerByCity[k];
   if(!layer)continue;
   var hot=activeHoverCity && k===activeHoverCity;
   layer.setStyle({weight:hot?2.4:1.5,opacity:hot?1:.8,fillOpacity:hot?Math.min((layer._baseFillOpacity||.45)+.18,.92):(layer._baseFillOpacity||.45)});
   if(hot){layer.bringToFront();layer.openTooltip()}else{layer.closeTooltip()}
 }
}
var tabIds=['dash','tbl','hm','analyze'];var tabsEl=document.getElementById('tabs');
['OVERVIEW','PROSPECTS','GEO MAP','FILING ANALYZER'].forEach(function(nm,i){var b=document.createElement('button');b.className='tab'+(i===0?' active':'');b.textContent=nm;b.dataset.tab=tabIds[i];b.addEventListener('click',function(){go(this.dataset.tab)});tabsEl.appendChild(b)});

// --- Tab Navigation ---
function go(t){
if(document.getElementById('dtl').classList.contains('open'))cD();
document.body.classList.toggle('hm-lock',t==='hm');
ct=t;
document.querySelectorAll('.tab').forEach(function(b){b.classList.toggle('active',b.dataset.tab===t)});
document.querySelectorAll('.panel').forEach(function(p,i){p.classList.toggle('active',tabIds[i]===t)});
var titles={analyze:'Filing Analyzer',dash:'Overview',tbl:'Prospects',hm:'Geo Map'};
document.title=(titles[t]||'Mammini')+' | Mammini 401k Prospector';
if(t==='analyze')rAnalyze();
if(t==='dash')rDash();
if(t==='tbl')rTbl();
if(t==='hm')rHM()
}
function pn(v){var s=String(v).replace(/[$,\s]/g,'');var n=parseFloat(s)||0;var lc=String(v).toLowerCase();if(lc.indexOf('b')>=0)n*=1e9;else if(lc.indexOf('m')>=0)n*=1e6;else if(lc.indexOf('k')>=0)n*=1e3;return n}

