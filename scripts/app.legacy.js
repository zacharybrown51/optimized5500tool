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

// --- Filtering & Sorting ---
function aFi(){fd=D.filter(function(p){
if(fi.s){var s=fi.s.toLowerCase();if(p[0].toLowerCase().indexOf(s)<0&&p[1].toLowerCase().indexOf(s)<0&&p[14].indexOf(fi.s)<0)return false}
if(fi.c&&p[2].toUpperCase()!==fi.c)return false;if(fi.ms&&p[12]<fi.ms)return false;if(fi.ma&&p[4]<fi.ma)return false;if(fi.maMax&&p[4]>fi.maMax)return false;
if(fi.minP&&p[7]<fi.minP)return false;if(fi.maxP&&p[7]>fi.maxP)return false;
if(fi.t==='corp'&&p[10])return false;if(fi.t==='union'&&!p[10])return false;
if(fi.ia==='n'&&p[20])return false;if(fi.ia==='y'&&!p[20])return false;
if(fi.ind&&p[38]!==fi.ind)return false;
if(fi.prov){var pq=fi.prov.toLowerCase(),ok=false;for(var k=0;k<p[21].length;k++)if(p[21][k][0].toLowerCase().indexOf(pq)>=0)ok=true;if(p[18].toLowerCase().indexOf(pq)>=0||p[19].toLowerCase().indexOf(pq)>=0)ok=true;if(!ok)return false}
if(fi.short==='y'&&!shortlist[p[14]])return false;
return true});fd.sort(function(a,b){return sd*(a[sc]>b[sc]?1:a[sc]<b[sc]?-1:0)});pg=0;rTR()}

// --- Prospect Table ---
function rTbl(){
var cs={};for(var i=0;i<D.length;i++){var c=D[i][2].toUpperCase();cs[c]=(cs[c]||0)+1}
var co=Object.entries(cs).sort(function(a,b){return b[1]-a[1]});
var opthtml='<option value="">ALL CITIES</option>';for(var i=0;i<co.length;i++){var cn=co[i][0].split(' ').map(function(w){return w[0]+w.slice(1).toLowerCase()}).join(' ');opthtml+='<option value="'+H(co[i][0])+'">'+H(cn)+' ('+co[i][1]+')</option>'}
document.getElementById('p-tbl').innerHTML='<div class="tbl-filters" id="tfi"></div><div class="info-bar" id="ibar"></div><div class="tbl-wrap"><table><thead id="thd"></thead><tbody id="tbd"></tbody></table></div>';
var tfi=document.getElementById('tfi');tfi.innerHTML='';
var mk=function(tag,at){var e=document.createElement(tag);for(var k in at){if(k==='innerHTML')e.innerHTML=at[k];else if(k==='on')for(var ev in at[k])e.addEventListener(ev,at[k][ev]);else if(k==='style')e.style.cssText=at[k];else e[k]=at[k]}return e};
tfi.appendChild(mk('input',{type:'text',placeholder:'Search plan, sponsor, EIN...',value:fi.s,style:'width:200px',on:{input:function(){fi.s=this.value;aFi()}}}));
tfi.appendChild(mk('select',{innerHTML:opthtml,value:fi.c,on:{change:function(){fi.c=this.value;aFi()}}}));
tfi.appendChild(mk('select',{innerHTML:'<option value="0">SCORE: ANY</option><option value="30">30+</option><option value="50">50+</option><option value="60">60+</option><option value="70">70+</option>',on:{change:function(){fi.ms=+this.value;aFi()}}}));
var ag=mk('div',{className:'range-grp'});ag.appendChild(mk('span',{textContent:'ASSETS:'}));ag.appendChild(mk('input',{type:'text',placeholder:'Min (e.g. 1m)',value:fi.ma?FM.usd(fi.ma):'',on:{change:function(){fi.ma=pn(this.value);aFi()}}}));ag.appendChild(mk('span',{textContent:'-'}));ag.appendChild(mk('input',{type:'text',placeholder:'Max',value:fi.maMax?FM.usd(fi.maMax):'',on:{change:function(){fi.maMax=pn(this.value);aFi()}}}));tfi.appendChild(ag);
var pg2=mk('div',{className:'range-grp'});pg2.appendChild(mk('span',{textContent:'PART:'}));pg2.appendChild(mk('input',{type:'text',placeholder:'Min',value:fi.minP||'',style:'width:50px',on:{change:function(){fi.minP=parseInt(this.value)||0;aFi()}}}));pg2.appendChild(mk('span',{textContent:'-'}));pg2.appendChild(mk('input',{type:'text',placeholder:'Max',value:fi.maxP||'',style:'width:50px',on:{change:function(){fi.maxP=parseInt(this.value)||0;aFi()}}}));tfi.appendChild(pg2);
tfi.appendChild(mk('select',{innerHTML:'<option value="">TYPE: ALL</option><option value="corp">CORPORATE</option><option value="union">UNION/CBA</option>',on:{change:function(){fi.t=this.value;aFi()}}}));
tfi.appendChild(mk('select',{innerHTML:'<option value="n" selected>NO ADVISOR ON FILING</option><option value="y">HAS ADVISOR</option><option value="">ALL</option>',on:{change:function(){fi.ia=this.value;aFi()}}}));
// Industry filter
var indCounts={};for(var ii=0;ii<D.length;ii++){var ind=D[ii][38];if(ind)indCounts[ind]=(indCounts[ind]||0)+1}
var indOpts=Object.entries(indCounts).sort(function(a,b){return b[1]-a[1]});
var indHtml='<option value="">INDUSTRY: ALL</option>';
for(var ii=0;ii<indOpts.length;ii++){indHtml+='<option value="'+H(indOpts[ii][0])+'">'+H(indOpts[ii][0])+' ('+indOpts[ii][1]+')</option>'}
tfi.appendChild(mk('select',{innerHTML:indHtml,value:fi.ind,on:{change:function(){fi.ind=this.value;aFi()}}}));
tfi.appendChild(mk('input',{type:'text',placeholder:'Filter provider...',value:fi.prov,style:'width:140px',on:{input:function(){fi.prov=this.value;aFi()}}}));
var seg=mk('div',{className:'seg-toggle'});
seg.appendChild(mk('button',{className:'seg-btn'+(fi.short!=='y'?' active':''),textContent:'All',on:{click:function(){if(fi.short!==''){fi.short='';aFi();rTbl()}}}}));
seg.appendChild(mk('button',{className:'seg-btn'+(fi.short==='y'?' active':''),textContent:'Shortlist',on:{click:function(){if(fi.short!=='y'){fi.short='y';aFi();rTbl()}}}}));
tfi.appendChild(seg);
tfi.appendChild(mk('button',{className:'btn',textContent:'RESET',on:{click:function(){fi={s:'',c:'',ms:0,ma:0,maMax:0,t:'',ia:'n',prov:'',minP:0,maxP:0,short:'',ind:''};checked={};rTbl()}}}));
tfi.appendChild(mk('button',{className:'btn',textContent:'COMPARE',style:'background:var(--teal);color:#fff;border-color:var(--teal)',on:{click:function(){openCompare()}}}));

tfi.appendChild(mk('button',{className:'btn',textContent:'EXPORT',style:'border-color:var(--amb);color:var(--amb2)',on:{click:exSel}}));
tfi.appendChild(mk('button',{className:'btn',textContent:'EXPORT SEL → APOLLO',style:'background:#6C63FF;color:#fff;border-color:#6C63FF',on:{click:function(){var ct=0;for(var k in checked)if(checked[k])ct++;if(ct===0){alert('Select plans with checkboxes first, then export to Apollo.');return}exApollo()}}}));
rTH();aFi()}

var cols=[['',99],['SC',12],['PLAN',0],['SPONSOR',1],['CITY',2],['ASSETS',4],['GR%',6],['PART',7],['CONTRIB',32],['$/PART',33],['ADVISOR',20]];
function rTH(){var h='<tr>';for(var i=0;i<cols.length;i++){if(cols[i][1]===99){h+='<th style="width:30px;cursor:default"><input type="checkbox" id="chkAll" style="cursor:pointer"></th>';continue}var a=sc===cols[i][1]?(sd===1?'&#9650;':'&#9660;'):'';h+='<th data-col="'+cols[i][1]+'">'+cols[i][0]+'<span class="sa">'+a+'</span></th>'}h+='</tr>';document.getElementById('thd').innerHTML=h;
document.querySelectorAll('#thd th[data-col]').forEach(function(th){th.addEventListener('click',function(){srt(+this.dataset.col)})});
document.getElementById('chkAll').addEventListener('change',function(){var c=this.checked;document.querySelectorAll('.row-chk').forEach(function(cb){cb.checked=c;var idx=+cb.dataset.idx;if(c)checked[idx]=true;else delete checked[idx]})})}

function rTR(){if(fd.length===0){document.getElementById('ibar').innerHTML='<div style="color:var(--tx3)">No plans match your filters</div><div class="pg"></div>';document.getElementById('tbd').innerHTML='<tr><td colspan="11" style="text-align:center;padding:40px;color:var(--tx3);font-family:Jost,sans-serif"><div style="font-size:16px;margin-bottom:8px">No results found</div><div style="font-size:12px">Try adjusting your filters or expanding your search criteria.</div></td></tr>';return}var s=pg*pp,pd=fd.slice(s,s+pp);var ta=0;for(var i=0;i<fd.length;i++)ta+=fd[i][4];
var nc=Object.keys(checked).length;
var ib=document.getElementById('ibar');ib.innerHTML='<div>'+FM.n(fd.length)+' plans &middot; '+FM.usd(ta)+' AUM &middot; '+(s+1)+'&ndash;'+Math.min(s+pp,fd.length)+(shortlistCount()?' &middot; <span class="short-pill">★ Shortlist: '+shortlistCount()+'</span>':'')+(nc?' &middot; <span style="color:var(--amb2)">'+nc+' selected</span>':'')+'</div><div style="display:flex;align-items:center;gap:6px">'+(nc?'<button class="btn" id="bulkExport" style="font-size:9px;padding:4px 8px;white-space:nowrap">EXPORT '+nc+'</button><button class="btn" id="bulkShortlist" style="font-size:9px;padding:4px 8px;white-space:nowrap">SHORTLIST '+nc+'</button>':'')+'<button class="btn" id="exportCsvBtn" style="font-size:9px;padding:4px 10px;white-space:nowrap">EXPORT ALL</button><div class="pg" id="pgb"></div></div>';
var pe=document.getElementById('pgb');var pb2=document.createElement('button');pb2.className='pg-btn';pb2.textContent='PREV';pb2.disabled=pg===0;pb2.addEventListener('click',function(){pg=Math.max(0,pg-1);rTR()});pe.appendChild(pb2);
var pi=document.createElement('span');pi.className='pg-info';pi.textContent=(pg+1)+'/'+Math.ceil(fd.length/pp);pe.appendChild(pi);
var nb=document.createElement('button');nb.className='pg-btn';nb.textContent='NEXT';nb.disabled=s+pp>=fd.length;nb.addEventListener('click',function(){pg=Math.min(Math.ceil(fd.length/pp)-1,pg+1);rTR()});pe.appendChild(nb);
var h='';for(var i=0;i<pd.length;i++){var p=pd[i],idx=s+i;var scl=p[12]>=70?'sc-h':p[12]>=50?'sc-w':p[12]>=30?'sc-m':'sc-c';
h+='<tr data-idx="'+idx+'"'+(sel===idx?' class="sel"':'')+'><td style="width:30px" onclick="event.stopPropagation()"><input type="checkbox" class="row-chk" data-idx="'+idx+'"'+(checked[idx]?' checked':'')+'></td><td><span class="sc '+scl+'">'+p[12]+'</span></td><td class="plan-cell"><span class="plan-main">'+(isShortlisted(p[14])?'<span class="row-short">★</span> ':'')+H(p[0])+'</span><span class="note-preview'+(getPlanNotePreview(p[14])?'':' empty')+'">'+H(getPlanNotePreview(p[14])||'')+'</span></td><td style="max-width:160px;overflow:hidden;text-overflow:ellipsis">'+H(p[1])+'</td><td>'+H(p[2])+'</td><td>'+FM.usd(p[4])+'</td><td style="color:'+(p[6]>=0?'var(--up)':'var(--dn)')+'">'+FM.p(p[6])+'</td><td>'+FM.n(p[7])+'</td><td>'+(p[32]?FM.usd(p[32]):'<span style="color:var(--tx3)">--</span>')+'</td><td>'+(p[33]?'$'+FM.n(p[33]):'<span style="color:var(--tx3)">--</span>')+'</td><td><span class="pv-tag" style="color:'+(p[20]?'var(--coral2)':'var(--tx3)')+'">'+H(p[20]||'None on filing')+'</span></td></tr>'}
document.getElementById('tbd').innerHTML=h;
document.querySelectorAll('#tbd tr').forEach(function(tr){
tr.addEventListener('click',function(){oD(+this.dataset.idx,fd)});

});
document.querySelectorAll('.row-chk').forEach(function(cb){cb.addEventListener('change',function(){var idx=+this.dataset.idx;if(this.checked)checked[idx]=true;else delete checked[idx];rTR()})});
// CSV export
var csvBtn=document.getElementById('exportCsvBtn');if(csvBtn){csvBtn.addEventListener('click',function(){exportCSV()})}
// Bulk export selected
var bulkExp=document.getElementById('bulkExport');if(bulkExp){bulkExp.addEventListener('click',function(){
  var sel=[];for(var k in checked){sel.push(fd[+k])}
  if(sel.length)exportCSV(sel);
})}
// Bulk shortlist selected
var bulkShort=document.getElementById('bulkShortlist');if(bulkShort){bulkShort.addEventListener('click',function(){
  var added=0;
  for(var k in checked){var plan=fd[+k];if(plan&&plan[14]&&!shortlist[plan[14]]){shortlist[plan[14]]={name:plan[0],sponsor:plan[1],city:plan[2],score:plan[12],assets:plan[4],ts:Date.now()};added++}}
  saveShortlist();checked={};rTR();
  toast('Added '+added+' plans to shortlist','success');
})}
}
function exportCSV(subset){
  var plans=subset||fd;
  var NL=String.fromCharCode(10);
  var rows=['Plan Name,Sponsor,City,ZIP,Industry,Assets,Growth %,Participants,Score,RK,TPA,Advisor,Contributions,Contrib/Part,Fee/Part,Direct Comp,Indirect Comp,Likely TDF,EIN,Signals,Features'];
  for(var i=0;i<plans.length;i++){
    var p=plans[i];
    rows.push(['"'+(p[0]||'').replace(/"/g,'""')+'"','"'+(p[1]||'').replace(/"/g,'""')+'"','"'+(p[2]||'')+'"',p[3],'"'+(p[38]||'')+'"',p[4],p[6],p[7],p[12],'"'+(p[18]||'')+'"','"'+(p[19]||'')+'"','"'+(p[20]||'')+'"',p[32]||'',p[33]||'',p[31]||'',p[35]||'',p[37]||'','"'+(p[34]||'')+'"',p[14],'"'+(p[11]||'')+'"','"'+(p[22]||'')+'"'].join(','));
  }
  var blob=new Blob([rows.join(NL)],{type:'text/csv'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a');
  a.href=url;a.download='mammini_prospects_'+new Date().toISOString().slice(0,10)+'.csv';
  document.body.appendChild(a);a.click();document.body.removeChild(a);
  toast('Exported '+plans.length+' plans to CSV','success');
}
function srt(c){if(sc===c)sd*=-1;else{sc=c;sd=c===0||c===1||c===2||c===11||c===18||c===19||c===20?1:-1}rTH();aFi()}

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


// --- Geo Map ---
// Precise SD County city coordinates
var CITY_COORDS={
'SAN DIEGO':[32.7157,-117.1611],'CARLSBAD':[33.1581,-117.3506],
'LA JOLLA':[32.8328,-117.2713],'ESCONDIDO':[33.1192,-117.0864],
'VISTA':[33.2000,-117.2428],'POWAY':[32.9628,-117.0359],
'EL CAJON':[32.7948,-116.9625],'CHULA VISTA':[32.6401,-117.0842],
'ENCINITAS':[33.0369,-117.2919],'OCEANSIDE':[33.1959,-117.3795],
'SOLANA BEACH':[32.9912,-117.2714],'SAN MARCOS':[33.1434,-117.1661],
'LA MESA':[32.7678,-117.0231],'SANTEE':[32.8384,-116.9739],
'DEL MAR':[32.9595,-117.2653],'RANCHO SANTA FE':[33.0203,-117.2028],
'CORONADO':[32.6859,-117.1831],'NATIONAL CITY':[32.6781,-117.0992],
'SPRING VALLEY':[32.7448,-116.9989],'LEMON GROVE':[32.7426,-117.0314],
'ALPINE':[32.8351,-116.7664],'FALLBROOK':[33.3764,-117.2511],
'BONITA':[32.6589,-117.0303],'RAMONA':[33.0442,-116.8678],
'CARDIFF':[33.0167,-117.2781],'CARDIFF BY THE SEA':[33.0167,-117.2781],
'LAKESIDE':[32.8571,-116.9223],'VALLEY CENTER':[33.2158,-117.0342],
'BONSALL':[33.2889,-117.2250],'IMPERIAL BEACH':[32.5839,-117.1131],
'JAMUL':[32.7176,-116.8764],'CAMP PENDLETON':[33.3060,-117.3650],
'RANCHO BERNARDO':[33.0174,-117.0753],'SORRENTO VALLEY':[32.8987,-117.1917],
'KEARNY MESA':[32.8017,-117.1528],'MISSION VALLEY':[32.7639,-117.1578],
'POINT LOMA':[32.6734,-117.2425],'PACIFIC BEACH':[32.7972,-117.2382],
'MIRA MESA':[32.9156,-117.1436],'CLAIREMONT':[32.8281,-117.1903],
'UNIVERSITY CITY':[32.8622,-117.2097],'CARMEL MOUNTAIN':[32.9764,-117.0822],
'RANCHO PENASQUITOS':[32.9597,-117.1136],'SCRIPPS RANCH':[32.9003,-117.1064],
'SAN YSIDRO':[32.5542,-117.0542],'OTAY MESA':[32.5681,-117.0522],
'TIERRASANTA':[32.8236,-117.0728],'SABRE SPRINGS':[32.9575,-117.0711]
};

var leafMap=null;
function rHM(){var el=document.getElementById('p-hm');
if(document.getElementById('mapDiv')){if(leafMap)setTimeout(function(){leafMap.invalidateSize()},100);return}

// Compute rich city-level stats
var cityStats={};
for(var i=0;i<D.length;i++){
var c=D[i][2].toUpperCase();
if(!cityStats[c])cityStats[c]={plans:0,aum:0,parts:0,avgScore:0,scores:[],growth:[],topPlans:[],signals:{},noAdv:0};
var cs=cityStats[c];
cs.plans++;cs.aum+=D[i][4];cs.parts+=D[i][7];
if(!D[i][20])cs.noAdv++;
cs.scores.push(D[i][12]);cs.growth.push(D[i][6]);
if(D[i][12]>=50)cs.topPlans.push(D[i]);
var ss=D[i][11].split(',');for(var j=0;j<ss.length;j++){if(ss[j]){if(!cs.signals[ss[j]])cs.signals[ss[j]]=0;cs.signals[ss[j]]++}}}

for(var k in cityStats){
var cs=cityStats[k];
cs.avgScore=Math.round(cs.scores.reduce(function(a,b){return a+b},0)/cs.scores.length);
cs.avgGrowth=+(cs.growth.reduce(function(a,b){return a+b},0)/cs.growth.length).toFixed(1);
cs.noAdvPct=Math.round(cs.noAdv/cs.plans*100);
cs.topPlans.sort(function(a,b){return b[12]-a[12]});
cs.topPlans=cs.topPlans.slice(0,3)}

var sorted=Object.entries(cityStats).sort(function(a,b){return b[1].aum-a[1].aum});
var totalAUM=0,totalPlans=0,totalParts=0;
for(var i=0;i<sorted.length;i++){totalAUM+=sorted[i][1].aum;totalPlans+=sorted[i][1].plans;totalParts+=sorted[i][1].parts}

// Build HTML
var h='<div class="map-shell">';

// Left: Quick list + Map
h+='<div class="map-pane">';
h+='<div class="map-side-card" style="padding:16px 18px">';
h+='<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:10px">';
h+='<div style="font-family:Jost,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--tx3);font-weight:600">County + city quick list</div>';
h+='<div style="font-family:IBM Plex Mono,monospace;font-size:10px;color:var(--tx3)">San Diego County · '+FM.n(totalPlans)+' plans · '+sorted.length+' cities</div>';
h+='</div>';
h+='<div class="map-chip-grid" style="display:flex;flex-wrap:wrap;gap:8px">';
h+='<button class="map-chip" data-mapcity="" type="button">San Diego County</button>';
for(var ci=0;ci<Math.min(sorted.length,18);ci++){
 var cityLabel=sorted[ci][0].split(' ').map(function(w){return w[0]+w.slice(1).toLowerCase()}).join(' ');
 h+='<button class="map-chip" data-mapcity="'+H(sorted[ci][0])+'" type="button">'+H(cityLabel)+'</button>';
}
h+='</div>';
h+='</div>';
h+='<div class="map-canvas"><div id="mapDiv" style="height:100%"></div>';
h+='<div class="map-info-overlay" style="position:absolute;top:16px;right:16px;max-width:360px;border-radius:18px;padding:16px 16px 14px;font-family:Jost,sans-serif;box-shadow:0 20px 38px rgba(0,0,0,.12);z-index:500;backdrop-filter:blur(8px)"><div class="map-kicker">Geographic view</div><div class="map-title" style="font-size:22px;margin-bottom:6px">Geo Map</div><div class="map-sub" style="font-size:11px;color:var(--tx2);margin-bottom:10px">See where plan assets cluster and which cities carry the most opportunity.</div>';
h+='<div style="display:flex;gap:4px;flex-wrap:wrap"><button class="map-color-btn" data-mapcolor="score" style="font-size:9px;padding:4px 8px;border-radius:6px;border:1px solid var(--brd);background:var(--bg3);cursor:pointer;font-family:Jost,sans-serif;font-weight:600;color:var(--acc2)">By Score</button><button class="map-color-btn" data-mapcolor="assets" style="font-size:9px;padding:4px 8px;border-radius:6px;border:1px solid var(--brd);background:var(--bg3);cursor:pointer;font-family:Jost,sans-serif;font-weight:600;color:var(--tx2)">By Assets</button><button class="map-color-btn" data-mapcolor="noadv" style="font-size:9px;padding:4px 8px;border-radius:6px;border:1px solid var(--brd);background:var(--bg3);cursor:pointer;font-family:Jost,sans-serif;font-weight:600;color:var(--tx2)">No Advisor on Filing %</button><button class="map-color-btn" data-mapcolor="growth" style="font-size:9px;padding:4px 8px;border-radius:6px;border:1px solid var(--brd);background:var(--bg3);cursor:pointer;font-family:Jost,sans-serif;font-weight:600;color:var(--tx2)">By Growth</button></div>';
h+='</div>';

// Legend overlay
h+='<div class="map-legend-overlay" style="position:absolute;bottom:16px;left:16px;border-radius:8px;padding:12px 16px;font-family:Jost,sans-serif;font-size:10px;box-shadow:0 2px 12px rgba(0,0,0,.12);z-index:500;backdrop-filter:blur(4px)">';
h+='<div style="font-weight:700;margin-bottom:8px;color:var(--txh);font-size:11px">San Diego County</div>';
h+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><svg width="20" height="20"><circle cx="10" cy="10" r="8" fill="var(--acc)" opacity=".6"/></svg> Circle size = AUM</div>';
h+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:4px"><svg width="20" height="6"><rect width="20" height="6" rx="3" fill="var(--teal)"/></svg> High avg score</div>';
h+='<div style="display:flex;align-items:center;gap:8px"><svg width="20" height="6"><rect width="20" height="6" rx="3" fill="var(--coral)"/></svg> Low avg score</div>';
h+='<div style="margin-top:6px;font-size:9px;color:var(--tx3)">'+sorted.length+' cities &middot; '+FM.n(totalPlans)+' plans &middot; '+FM.usd(totalAUM)+'</div>';
h+='</div></div></div>';

// Right: Side panel
h+='<div class="map-side">';

// Summary KPIs
h+='<div class="map-hero">';
h+='<div style="font-family:Jost,sans-serif;font-size:10px;text-transform:uppercase;letter-spacing:2px;opacity:.7;margin-bottom:12px">Market Overview</div>';
h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">';
h+='<div><div style="font-family:IBM Plex Mono,monospace;font-size:22px;font-weight:700">'+FM.usd(totalAUM)+'</div><div style="font-size:10px;opacity:.6">Total AUM</div></div>';
h+='<div><div style="font-family:IBM Plex Mono,monospace;font-size:22px;font-weight:700">'+FM.n(totalPlans)+'</div><div style="font-size:10px;opacity:.6">Plans</div></div>';
h+='<div><div style="font-family:IBM Plex Mono,monospace;font-size:22px;font-weight:700">'+FM.n(totalParts)+'</div><div style="font-size:10px;opacity:.6">Participants</div></div>';
h+='<div><div style="font-family:IBM Plex Mono,monospace;font-size:22px;font-weight:700">'+sorted.length+'</div><div style="font-size:10px;opacity:.6">Cities</div></div>';
h+='</div></div>';

// City list
h+='<div class="map-side-scroll"><div class="map-side-card">';
h+='<div style="font-family:Jost,sans-serif;font-size:10.5px;letter-spacing:.7px;color:var(--tx3);font-weight:700;margin-bottom:10px;text-transform:uppercase">Cities Ranked by AUM</div>';

var visibleCities=8;
var topCities=sorted.slice(0,visibleCities);
var extraCities=sorted.slice(visibleCities,20);
var maxAum=(sorted[0]&&sorted[0][1])?sorted[0][1].aum:1;

function cityRowHtml(entry,idx,hidden){
 var cn=entry[0].split(' ').map(function(w){return w[0]+w.slice(1).toLowerCase()}).join(' ');
 var cs=entry[1];
 var barPct=(cs.aum/maxAum*100).toFixed(0);
 var scoreClr=cs.avgScore>=50?'var(--teal2)':'var(--coral)';
 var growthClr=cs.avgGrowth>=0?'var(--teal2)':'var(--coral)';
 var row='';
 row+='<div class="map-city-row'+(hidden?' map-city-extra':'')+'" data-mapcity="'+H(entry[0])+'" style="padding:10px 0;border-bottom:1px solid var(--brd);cursor:pointer;transition:all .15s'+(hidden?';display:none':'')+'">';
 row+='<div style="display:flex;justify-content:space-between;align-items:center">';
 row+='<div style="font-family:Jost,sans-serif;font-size:13.5px;font-weight:700;color:var(--txh);letter-spacing:-.01em">'+idx+'. '+H(cn)+'</div>';
 row+='<div style="font-family:IBM Plex Mono,monospace;font-size:11.5px;font-weight:700;color:var(--acc2)">'+FM.usd(cs.aum)+'</div></div>';
 row+='<div style="height:4px;background:var(--brd);border-radius:2px;margin:6px 0;overflow:hidden"><div style="height:100%;width:'+barPct+'%;background:linear-gradient(90deg,var(--acc),var(--teal));border-radius:2px"></div></div>';
 row+='<div style="display:flex;gap:14px;font-family:Jost,sans-serif;font-size:10.5px;color:var(--tx3);flex-wrap:wrap;line-height:1.35">';
 row+='<span>'+cs.plans+' plans</span>';
 row+='<span>'+FM.n(cs.parts)+' ppl</span>';
 row+='<span style="color:'+scoreClr+'">avg '+cs.avgScore+' score</span>';
 row+='<span style="color:'+growthClr+'">'+FM.p(cs.avgGrowth)+' growth</span>';
 row+='</div>';
 var sigKeys=Object.entries(cs.signals).sort(function(a,b){return b[1]-a[1]}).slice(0,3);
 if(sigKeys.length>0){
   row+='<div style="margin-top:4px;display:flex;gap:4px;flex-wrap:wrap">';
   for(var j=0;j<sigKeys.length;j++){
     var sigClr=sigKeys[j][0]==='LTC'||sigKeys[j][0]==='ESC'||sigKeys[j][0]==='DEC'?'rgba(238,107,77,.12)':'rgba(17,138,169,.1)';
     var sigTxt=sigKeys[j][0]==='LTC'||sigKeys[j][0]==='ESC'||sigKeys[j][0]==='DEC'?'var(--coral2)':'var(--acc2)';
     row+='<span style="font-family:Jost,sans-serif;font-size:8.5px;padding:2px 6px;border-radius:999px;background:'+sigClr+';color:'+sigTxt+';font-weight:600">'+sigKeys[j][0]+' '+sigKeys[j][1]+'</span>';
   }
   row+='</div>';
 }
 row+='</div>';
 return row;
}

for(var i=0;i<topCities.length;i++){ h+=cityRowHtml(topCities[i],i+1,false); }
for(var ei=0;ei<extraCities.length;ei++){ h+=cityRowHtml(extraCities[ei],visibleCities+ei+1,true); }

if(extraCities.length>0){
 h+='<div style="padding-top:14px;display:flex;justify-content:center">';
 h+='<button type="button" id="mapSeeMoreBtn" class="btn" style="min-width:148px">See more</button>';
 h+='</div>';
}

h+='</div></div>';
el.innerHTML=h;

// City row interactions
document.querySelectorAll('.map-city-row,[data-mapcity].map-chip').forEach(function(row){
row.addEventListener('click',function(){fi.c=this.dataset.mapcity||'';go('tbl')});
row.addEventListener('mouseenter',function(){if(this.dataset.mapcity){setMapCityHover(this.dataset.mapcity)}this.style.transform='translateX(2px)'});
row.addEventListener('mouseleave',function(){setMapCityHover('');this.style.transform=''})});

var mapSeeMoreBtn=document.getElementById('mapSeeMoreBtn');
if(mapSeeMoreBtn){
mapSeeMoreBtn.addEventListener('click',function(){
  var hiddenRows=document.querySelectorAll('.map-city-extra');
  var expanded=this.getAttribute('data-expanded')==='1';
  hiddenRows.forEach(function(row){ row.style.display=expanded?'none':''; });
  this.textContent=expanded?'See more':'Show less';
  this.setAttribute('data-expanded',expanded?'0':'1');
});
}

// Build Leaflet map
mapLayerByCity={};
leafMap=L.map('mapDiv',{zoomControl:true,attributionControl:false}).setView([32.92,-117.1],10);
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',{maxZoom:18,subdomains:'abcd'}).addTo(leafMap);

var ma=0,mp=0;
for(var i=0;i<CD.length;i++){if(CD[i].a>ma)ma=CD[i].a;if(CD[i].p>mp)mp=CD[i].p}

for(var i=0;i<CD.length;i++){
var c=CD[i];
// Use precise coords
var cc=CITY_COORDS[c.n.toUpperCase()];
if(cc){c.la=cc[0];c.lo=cc[1]}

var r=Math.max(300,Math.sqrt(c.a/ma)*7000);
var cs2=cityStats[c.n.toUpperCase()];
var avgSc=cs2?cs2.avgScore:40;

// Color by selected mode
var fillColor,borderColor;
if(mapColorMode==='assets'){
  var t=Math.min(1,c.a/Math.max(ma,.01));
  fillColor='rgb('+Math.round(17+t*100)+','+Math.round(138-t*30)+','+Math.round(169-t*100)+')';
  borderColor=t>0.3?'#0d7a96':'#6ba8c2';
}else if(mapColorMode==='noadv'){
  var noAdvPct=cs2?cs2.noAdvPct:0;
  var t=Math.min(1,noAdvPct/100);
  fillColor='rgb('+Math.round(238-(238-17)*t)+','+Math.round(107+(31)*t)+','+Math.round(77+(92)*t)+')';
  borderColor=t>0.5?'#0d7a96':'#c44d3a';
}else if(mapColorMode==='growth'){
  var avgGr=cs2?cs2.avgGrowth:0;
  var t=Math.min(1,Math.max(0,(avgGr+10)/30));
  fillColor='rgb('+Math.round(238-(238-62)*t)+','+Math.round(107+(35)*t)+','+Math.round(77+(61)*t)+')';
  borderColor=t>0.5?'#2d7572':'#c44d3a';
}else{// score (default)
  var t=Math.min(1,Math.max(0,(avgSc-20)/60));
  var r1=Math.round(238-(238-62)*t);
  var g1=Math.round(107+(142-107)*t);
  var b1=Math.round(77+(138-77)*t);
  fillColor='rgb('+r1+','+g1+','+b1+')';
  borderColor=t>0.5?'#2d7572':'#c44d3a';
}

var op=.25+.5*(c.p/mp);
var ci=L.circle([c.la,c.lo],{radius:r,color:borderColor,fillColor:fillColor,fillOpacity:Math.min(op,.7),weight:1.5,opacity:.8}).addTo(leafMap);
ci._ci=i;ci._baseFillOpacity=Math.min(op,.7);mapLayerByCity[c.n.toUpperCase()]=ci;

// Rich popup
var popHtml='<div style="font-family:Jost,sans-serif;min-width:200px">';
popHtml+='<div style="font-size:15px;font-weight:700;color:#223743;margin-bottom:8px">'+H(c.n)+'</div>';
popHtml+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 16px;font-size:11px;color:#4a6275">';
popHtml+='<span>Plans</span><span style="font-weight:600;color:#223743;font-family:IBM Plex Mono,monospace">'+c.p+'</span>';
popHtml+='<span>AUM</span><span style="font-weight:600;color:#223743;font-family:IBM Plex Mono,monospace">'+FM.usd(c.a)+'</span>';
popHtml+='<span>Participants</span><span style="font-weight:600;color:#223743;font-family:IBM Plex Mono,monospace">'+FM.n(c.pt)+'</span>';
if(cs2){
popHtml+='<span>Avg Score</span><span style="font-weight:600;color:'+(cs2.avgScore>=50?'#3e8e8a':'#ee6b4d')+';font-family:IBM Plex Mono,monospace">'+cs2.avgScore+'/100</span>';
popHtml+='<span>Avg Growth</span><span style="font-weight:600;color:'+(cs2.avgGrowth>=0?'#3e8e8a':'#ee6b4d')+';font-family:IBM Plex Mono,monospace">'+FM.p(cs2.avgGrowth)+'</span>';
popHtml+='<span>No Advisor on Filing</span><span style="font-weight:600;color:'+(cs2.noAdvPct>=60?'#3e8e8a':'#4a6275')+';font-family:IBM Plex Mono,monospace">'+cs2.noAdvPct+'%</span>';
}
popHtml+='</div>';
if(cs2&&cs2.topPlans.length>0){
popHtml+='<div style="margin-top:8px;padding-top:8px;border-top:1px solid #e0d8cc;font-size:10px;color:#8a9aa6">Top prospects:</div>';
for(var j=0;j<cs2.topPlans.length;j++){
var tp=cs2.topPlans[j];
popHtml+='<div style="font-size:10px;margin-top:3px;display:flex;justify-content:space-between"><span style="color:#223743">'+H(tp[0].substring(0,30))+'</span><span style="font-family:IBM Plex Mono,monospace;color:#118aa9;font-weight:600">'+tp[12]+'</span></div>'}}
popHtml+='<div style="margin-top:8px;font-size:9px;color:#118aa9;cursor:pointer">Click to view all plans &rarr;</div>';
popHtml+='</div>';

ci.bindPopup(popHtml,{maxWidth:280});
var tipHtml='<div style="font-family:Jost,sans-serif;min-width:160px"><div style="font-size:12px;font-weight:700;color:#223743;margin-bottom:4px">'+H(c.n)+'</div><div style="font-size:10px;color:#4a6275">'+c.p+' plans &middot; '+FM.usd(c.a)+'</div>'+(cs2?'<div style="font-size:10px;color:#4a6275;margin-top:2px">Avg score '+cs2.avgScore+' &middot; '+FM.p(cs2.avgGrowth)+' growth</div>':'')+'</div>';
ci.bindTooltip(tipHtml,{direction:'top',offset:[0,-6],sticky:true,opacity:.96});
ci.on('mouseover',function(){this.openTooltip();setMapCityHover(CD[this._ci].n.toUpperCase())});
ci.on('mouseout',function(){setMapCityHover('')});
ci.on('click',function(e){fi.c=CD[e.target._ci].n.toUpperCase();go('tbl')})}

// Map color mode buttons - recolor circles in place
document.querySelectorAll('.map-color-btn').forEach(function(btn){
  btn.addEventListener('click',function(){
    mapColorMode=this.dataset.mapcolor;
    document.querySelectorAll('.map-color-btn').forEach(function(b){b.style.color='var(--tx2)';b.style.borderColor='var(--brd)'});
    this.style.color='var(--acc2)';this.style.borderColor='var(--acc2)';
    // Recolor existing circles
    for(var k in mapLayerByCity){
      var layer=mapLayerByCity[k];
      var cs2=cityStats[k];
      var cData=null;
      for(var ci2=0;ci2<CD.length;ci2++){if(CD[ci2].n.toUpperCase()===k){cData=CD[ci2];break}}
      if(!cData||!cs2)continue;
      var fc,bc;
      if(mapColorMode==='assets'){
        var t=Math.min(1,cData.a/Math.max(ma,.01));
        fc='rgb('+Math.round(17+t*100)+','+Math.round(138-t*30)+','+Math.round(169-t*100)+')';
        bc=t>0.3?'#0d7a96':'#6ba8c2';
      }else if(mapColorMode==='noadv'){
        var t=Math.min(1,cs2.noAdvPct/100);
        fc='rgb('+Math.round(238-(238-17)*t)+','+Math.round(107+31*t)+','+Math.round(77+92*t)+')';
        bc=t>0.5?'#0d7a96':'#c44d3a';
      }else if(mapColorMode==='growth'){
        var t=Math.min(1,Math.max(0,(cs2.avgGrowth+10)/30));
        fc='rgb('+Math.round(238-(238-62)*t)+','+Math.round(107+35*t)+','+Math.round(77+61*t)+')';
        bc=t>0.5?'#2d7572':'#c44d3a';
      }else{
        var t=Math.min(1,Math.max(0,(cs2.avgScore-20)/60));
        fc='rgb('+Math.round(238-(238-62)*t)+','+Math.round(107+(142-107)*t)+','+Math.round(77+(138-77)*t)+')';
        bc=t>0.5?'#2d7572':'#c44d3a';
      }
      layer.setStyle({fillColor:fc,color:bc});
    }
    toast('Map: colored by '+mapColorMode,'info');
  });
});

setTimeout(function(){leafMap.invalidateSize()},200)}


// --- CSV Export ---
function exCSV(){doExport(fd)}
function exSel(){var s=[];for(var i=0;i<fd.length;i++){if(checked[i])s.push(fd[i])}if(!s.length){alert('No plans selected. Use checkboxes to select plans.');return}doExport(s)}
function doExport(data){var h='Score,Confidence,Warnings,Plan Name,Sponsor,City,Zip,Assets,Assets BOY,Growth %,Participants,Eligible,Participation %,Assets/Part,Admin Expense %,Total Expense %,Contrib/Assets %,Employer Contrib,Employee Contrib,Plan Type,Union,Signals,EIN,Recordkeeper,TPA,Advisor,Plan Features,Filed,Address,Link'+String.fromCharCode(10);var rows=[];for(var i=0;i<data.length;i++){var p=data[i],eq=p._enrich||{},sigs=p[11]?p[11].split(',').map(function(s){return SIG[s]||s}).join('; '):'',warns=(eq.warnings||[]).join(' | '),conf=eq.overallConfidence||'';rows.push([p[12],'"'+conf+'"','"'+warns.replace(/"/g,'""')+'"','"'+p[0].replace(/"/g,'""')+'"','"'+p[1].replace(/"/g,'""')+'"','"'+p[2]+'"',p[3],p[4],p[5],p[6],p[7],eq.derived&&eq.derived.eligibleParticipants?eq.derived.eligibleParticipants:'',eq.derived&&eq.derived.participationRatePct!=null?eq.derived.participationRatePct.toFixed(1):'',p[23]||'',eq.derived&&eq.derived.expenseRatioPct!=null?eq.derived.expenseRatioPct.toFixed(2):'',eq.derived&&eq.derived.totalExpenseRatioPct!=null?eq.derived.totalExpenseRatioPct.toFixed(2):'',eq.derived&&eq.derived.contributionRatioPct!=null?eq.derived.contributionRatioPct.toFixed(1):'',eq.derived&&eq.derived.employerContributions?eq.derived.employerContributions:'',eq.derived&&eq.derived.employeeContributions?eq.derived.employeeContributions:'','"'+p[9]+'"',p[10]?'Yes':'No','"'+sigs+'"',p[14],'"'+(p[18]||'').replace(/"/g,'""')+'"','"'+(p[19]||'').replace(/"/g,'""')+'"','"'+(p[20]||'').replace(/"/g,'""')+'"','"'+(p[22]||'').replace(/["|]/g,' ')+'"',p[15],'"'+p[16].replace(/"/g,'""')+'"',p[13]].join(','))}var b=new Blob([h+rows.join(String.fromCharCode(10))],{type:'text/csv'});var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='sd_401k_'+(data.length<fd.length?'selected_':'')+new Date().toISOString().slice(0,10)+'.csv';a.click()}


// --- Plan Comparison ---
function openCompare(){
var sel=[];
for(var k in checked){if(checked[k])sel.push(+k)}
if(sel.length<2){alert('Select 2-3 plans using checkboxes to compare.');return}
if(sel.length>4)sel=sel.slice(0,4);
var plans=sel.map(function(i){return fd[i]});
var cols=plans.length+1;
var el=document.getElementById('compareContent');
var h='<div class="compare-hdr"><div style="font-family:Jost,sans-serif;font-size:18px;font-weight:700;color:var(--txh)">Plan Comparison</div><button class="dtl-x" id="compClose">&times;</button></div>';
h+='<div class="compare-grid" style="grid-template-columns:180px repeat('+plans.length+',1fr)">';

// Header row
h+='<div class="cg-label">PLAN</div>';
for(var i=0;i<plans.length;i++){h+='<div class="cg-val" style="font-family:Jost,sans-serif;font-weight:600;font-size:11px">'+H(plans[i][0].substring(0,35))+'</div>'}

// Rows
var rows=[
['Sponsor',function(p){return H(p[1])}],
['Score',function(p){return p[12]+'/100'}],
['Assets',function(p){return FM.usd(p[4])},'max'],
['Growth',function(p){return FM.p(p[6])},'max'],
['Participants',function(p){return FM.n(p[7])}],
['Assets/Participant',function(p){return p[23]?'$'+FM.n(p[23]):'--'}],
['Recordkeeper',function(p){return p[18]?H(p[18]):'--'}],
['TPA',function(p){return p[19]?H(p[19]):'--'}],
['Advisor',function(p){return p[20]?H(p[20]):'None'}],
['Bundled Status',function(p){return p[24]===3?'Bundled':p[24]===4?'Likely Bundled':p[24]===5?'Unbundled':'Unknown'}],
['Signals',function(p){return p[11]||'None'}],
['Plan Type',function(p){return p[9]}],
['Plan Codes',function(p){return (p[22]||'').split('|').slice(0,3).join(', ')}],
['Admin Fees',function(p){return p[29]?'$'+FM.n(p[29]):'--'}],
['Expense Ratio',function(p){return p[31]?p[31]+'%':'--'}],
['Late Contributions',function(p){return p[26]?'YES':'No'}],
['City',function(p){return p[2]}],
];

for(var r=0;r<rows.length;r++){
var row=rows[r];
h+='<div class="cg-label">'+row[0]+'</div>';
// Find best value if applicable
var bestIdx=-1;
if(row[2]==='max'){
var bestVal=-Infinity;
for(var i=0;i<plans.length;i++){var v=typeof plans[i][4]==='number'?plans[i][row[0]==='Growth'?6:4]:0;if(v>bestVal){bestVal=v;bestIdx=i}}
}
for(var i=0;i<plans.length;i++){
var cls='cg-val'+(i===bestIdx?' cg-best':'');
h+='<div class="'+cls+'">'+row[1](plans[i])+'</div>'}}

h+='</div>';
el.innerHTML=h;
document.getElementById('compareOv').classList.add('open');
document.getElementById('compClose').addEventListener('click',function(){document.getElementById('compareOv').classList.remove('open')});
document.getElementById('compareOv').addEventListener('click',function(e){if(e.target===this)this.classList.remove('open')})}


// --- Init ---

// --- Provider Search ---
function provSearch(query){
if(!query){query=prompt('Search provider name (e.g. Empower, Fidelity):');if(!query)return}
var q=query.toLowerCase();
var matches=[];
for(var i=0;i<D.length;i++){
var p=D[i];
if((p[18]&&p[18].toLowerCase().indexOf(q)>=0)||(p[19]&&p[19].toLowerCase().indexOf(q)>=0)||(p[20]&&p[20].toLowerCase().indexOf(q)>=0)){
matches.push(p);continue}
for(var j=0;j<p[21].length;j++){if(p[21][j][0].toLowerCase().indexOf(q)>=0){matches.push(p);break}}}
if(matches.length===0){alert('No plans found for "'+query+'"');return}
// Show results overlay
var totalAUM=0,totalParts=0,asRK=0,asTPA=0,asIA=0;
for(var i=0;i<matches.length;i++){
totalAUM+=matches[i][4];totalParts+=matches[i][7];
if(matches[i][18]&&matches[i][18].toLowerCase().indexOf(q)>=0)asRK++;
if(matches[i][19]&&matches[i][19].toLowerCase().indexOf(q)>=0)asTPA++;
if(matches[i][20]&&matches[i][20].toLowerCase().indexOf(q)>=0)asIA++}
var ov=document.createElement('div');
ov.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:2500;display:flex;align-items:center;justify-content:center';
var card=document.createElement('div');
card.style.cssText='background:var(--bg2,#fff);border-radius:8px;padding:28px;max-width:700px;width:90%;max-height:80vh;overflow-y:auto;box-shadow:0 8px 40px rgba(0,0,0,.15)';
var h='<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">';
h+='<div><div style="font-family:Jost,sans-serif;font-size:18px;font-weight:700;color:var(--txh)">'+H(query)+'</div>';
h+='<div style="font-size:11px;color:var(--tx3);font-family:Jost,sans-serif">'+matches.length+' plans found</div></div>';
h+='<button class="dtl-x" id="provClose">&times;</button></div>';
h+='<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px">';
h+='<div style="background:var(--bg3);border-radius:5px;padding:10px"><div style="font-family:IBM Plex Mono,monospace;font-size:16px;font-weight:700;color:var(--acc2)">'+FM.usd(totalAUM)+'</div><div style="font-size:9px;color:var(--tx3)">Total AUM</div></div>';
h+='<div style="background:var(--bg3);border-radius:5px;padding:10px"><div style="font-family:IBM Plex Mono,monospace;font-size:16px;font-weight:700;color:var(--txh)">'+FM.n(totalParts)+'</div><div style="font-size:9px;color:var(--tx3)">Participants</div></div>';
h+='<div style="background:var(--bg3);border-radius:5px;padding:10px"><div style="font-family:IBM Plex Mono,monospace;font-size:16px;font-weight:700;color:var(--teal2)">'+asRK+'</div><div style="font-size:9px;color:var(--tx3)">As RK</div></div>';
h+='<div style="background:var(--bg3);border-radius:5px;padding:10px"><div style="font-family:IBM Plex Mono,monospace;font-size:16px;font-weight:700;color:var(--coral)">'+asTPA+'</div><div style="font-size:9px;color:var(--tx3)">As TPA</div></div></div>';
h+='<table style="width:100%;border-collapse:collapse;font-size:11px"><thead><tr>';
h+='<th style="text-align:left;padding:6px 8px;background:var(--bg3);font-family:Jost,sans-serif;font-size:9px;text-transform:uppercase;letter-spacing:.8px;color:var(--tx3);border-bottom:1px solid var(--brd)">Plan</th>';
h+='<th style="text-align:right;padding:6px 8px;background:var(--bg3);font-family:Jost,sans-serif;font-size:9px;text-transform:uppercase;letter-spacing:.8px;color:var(--tx3);border-bottom:1px solid var(--brd)">Assets</th>';
h+='<th style="text-align:right;padding:6px 8px;background:var(--bg3);font-family:Jost,sans-serif;font-size:9px;text-transform:uppercase;letter-spacing:.8px;color:var(--tx3);border-bottom:1px solid var(--brd)">Parts</th>';
h+='<th style="text-align:left;padding:6px 8px;background:var(--bg3);font-family:Jost,sans-serif;font-size:9px;text-transform:uppercase;letter-spacing:.8px;color:var(--tx3);border-bottom:1px solid var(--brd)">Role</th>';
h+='<th style="text-align:left;padding:6px 8px;background:var(--bg3);font-family:Jost,sans-serif;font-size:9px;text-transform:uppercase;letter-spacing:.8px;color:var(--tx3);border-bottom:1px solid var(--brd)">City</th></tr></thead><tbody>';
matches.sort(function(a,b){return b[4]-a[4]});
for(var i=0;i<Math.min(matches.length,50);i++){var m=matches[i];
var role=m[18]&&m[18].toLowerCase().indexOf(q)>=0?'RK':m[19]&&m[19].toLowerCase().indexOf(q)>=0?'TPA':m[20]&&m[20].toLowerCase().indexOf(q)>=0?'IA':'Other';
h+='<tr style="border-bottom:1px solid var(--brd);cursor:pointer" data-provein="'+m[14]+'"><td style="padding:5px 8px;font-family:Jost,sans-serif;font-size:11px">'+H(m[0].substring(0,40))+'</td>';
h+='<td style="padding:5px 8px;text-align:right;font-family:IBM Plex Mono,monospace;font-size:10px">'+FM.usd(m[4])+'</td>';
h+='<td style="padding:5px 8px;text-align:right;font-family:IBM Plex Mono,monospace;font-size:10px">'+FM.n(m[7])+'</td>';
h+='<td style="padding:5px 8px"><span class="role-tag role-'+role+'">'+role+'</span></td>';
h+='<td style="padding:5px 8px;font-size:10px;color:var(--tx2)">'+m[2]+'</td></tr>'}
if(matches.length>50)h+='<tr><td colspan="5" style="padding:8px;font-size:10px;color:var(--tx3)">+'+(matches.length-50)+' more plans</td></tr>';
h+='</tbody></table>';
h+='<div style="margin-top:12px;display:flex;gap:8px"><button class="btn btn-grn" id="provFilter">SHOW IN PROSPECTS TABLE</button></div>';
card.innerHTML=h;ov.appendChild(card);document.body.appendChild(ov);
document.getElementById('provClose').addEventListener('click',function(){document.body.removeChild(ov)});
ov.addEventListener('click',function(e){if(e.target===ov)document.body.removeChild(ov)});
document.getElementById('provFilter').addEventListener('click',function(){fi.prov=query;document.body.removeChild(ov);go('tbl')});
document.querySelectorAll('[data-provein]').forEach(function(row){row.addEventListener('click',function(){
var ein=this.dataset.provein;for(var i=0;i<D.length;i++){if(D[i][14]===ein){document.body.removeChild(ov);oD(D.indexOf(D[i]),D);break}}})})}


// --- CSV Import ---
function doImport(){
var inp=document.createElement('textarea');
inp.placeholder='Paste EINs or company names (one per line)';
inp.style.cssText='width:400px;height:200px;font-family:IBM Plex Mono,monospace;font-size:11px;padding:10px;border:1px solid var(--brd);border-radius:4px';
var ov=document.createElement('div');
ov.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.4);z-index:2500;display:flex;align-items:center;justify-content:center';
var card=document.createElement('div');
card.style.cssText='background:var(--bg2,#fff);border-radius:8px;padding:28px;max-width:480px;width:90%;box-shadow:0 8px 40px rgba(0,0,0,.15)';
var title=document.createElement('div');
title.style.cssText='font-family:Jost,sans-serif;font-size:16px;font-weight:700;color:var(--txh);margin-bottom:12px';
title.textContent='Import Target List';
var hint=document.createElement('div');
hint.style.cssText='font-family:Jost,sans-serif;font-size:11px;color:var(--tx3);margin-bottom:12px';
hint.textContent='Paste EINs (e.g. 123456789) or company names, one per line. Plans matching any entry will be shown.';
var btns=document.createElement('div');
btns.style.cssText='display:flex;gap:8px;margin-top:12px';
var goBtn=document.createElement('button');
goBtn.className='btn btn-grn';goBtn.textContent='FILTER';
goBtn.addEventListener('click',function(){
var lines=inp.value.split('\n').map(function(l){return l.trim().replace(/[-\s]/g,'')}).filter(function(l){return l.length>0});
if(lines.length===0)return;
fd=D.filter(function(p){
var ein=p[14].replace(/-/g,'');
var name=p[0].toLowerCase();
var sponsor=p[1].toLowerCase();
for(var i=0;i<lines.length;i++){
var q=lines[i].toLowerCase();
if(ein.indexOf(q)>=0||name.indexOf(q)>=0||sponsor.indexOf(q)>=0)return true}
return false});
fd.sort(function(a,b){return b[12]-a[12]});
pg=0;rTR();
document.body.removeChild(ov)});
var cancelBtn=document.createElement('button');
cancelBtn.className='btn';cancelBtn.textContent='CANCEL';
cancelBtn.addEventListener('click',function(){document.body.removeChild(ov)});
btns.appendChild(goBtn);btns.appendChild(cancelBtn);
card.appendChild(title);card.appendChild(hint);card.appendChild(inp);card.appendChild(btns);
ov.appendChild(card);document.body.appendChild(ov);
ov.addEventListener('click',function(e){if(e.target===ov)document.body.removeChild(ov)});
inp.focus()}


// --- Apollo Export ---
function exApollo(){
var plans=[];
for(var k in checked){if(checked[k])plans.push(fd[+k])}

var NL=String.fromCharCode(10);
var headers=[
'Company Name',
'Company Phone',
'Company Address',
'Company City',
'Company State',
'Company Zip Code',
'# Employees',
'Industry',
'Plan Name',
'EIN',
'Plan Assets',
'Plan Participants',
'Asset Growth %',
'Prospect Score',
'Recordkeeper',
'TPA',
'Advisor',
'Signals',
'Plan Type',
'DOL Filing Link'
];

var rows=[headers.join(',')];
for(var i=0;i<plans.length;i++){
var p=plans[i];
var sponsor='"'+p[1].replace(/"/g,'""')+'"';
var phone='';
var addr='"'+p[16].replace(/"/g,'""')+'"';
var city='"'+p[2].replace(/"/g,'""')+'"';
var state='"CA"';
var zip='"'+p[3]+'"';
var employees=p[7];
var industry='"Retirement Plan Sponsor"';
var planName='"'+p[0].replace(/"/g,'""')+'"';
var ein='"'+p[14]+'"';
var assets=p[4];
var parts=p[7];
var growth=p[6];
var score=p[12];
var eq=p._enrich||{};
var confidence=eq.overallConfidence||'';
var warnings=(eq.warnings||[]).join(' | ');
var participation=eq.derived&&eq.derived.participationRatePct!=null?eq.derived.participationRatePct.toFixed(1)+'%':'';
var employerContrib=eq.derived&&eq.derived.employerContributions?eq.derived.employerContributions:'';
var employeeContrib=eq.derived&&eq.derived.employeeContributions?eq.derived.employeeContributions:'';
var rk='"'+(p[18]||'').replace(/"/g,'""')+'"';
var tpa='"'+(p[19]||'').replace(/"/g,'""')+'"';
var ia='"'+(p[20]||'').replace(/"/g,'""')+'"';
var sigs='"'+p[11]+'"';
var planType='"'+p[9].replace(/"/g,'""')+'"';
var link='"'+p[13]+'"';
rows.push([sponsor,phone,addr,city,state,zip,employees,industry,planName,ein,assets,parts,growth,score,rk,tpa,ia,sigs,confidence,warnings,participation,employerContrib,employeeContrib,planType,link].join(','))}

var csv=rows.join(NL);
var blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});
var url=URL.createObjectURL(blob);
var a=document.createElement('a');
a.href=url;a.download='apollo_import_'+plans.length+'_plans.csv';
document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url)}


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

// --- Settings & Dark Mode ---
(function(){
var isDark=localStorage.getItem('mammini_dark')==='1';
if(isDark)document.body.classList.add('dark');

function toggleDark(explicit){
  if(typeof explicit==='boolean'){
    document.body.classList.toggle('dark',explicit);
  }else{
    document.body.classList.toggle('dark');
  }
  localStorage.setItem('mammini_dark',document.body.classList.contains('dark')?'1':'0');
  // Update toggle switch if settings panel is open
  var sw=document.getElementById('darkSwitch');
  if(sw)sw.checked=document.body.classList.contains('dark');
}

// Settings panel
function openSettings(){
  var existing=document.getElementById('settingsOv');
  if(existing){document.body.removeChild(existing);return}
  var ov=document.createElement('div');
  ov.id='settingsOv';
  ov.className='settings-ov open';
  var dark=document.body.classList.contains('dark');
  var w=SCORE_W;

  function slider(id,label,min,max,val){
    return '<div class="score-slider"><div class="score-slider-label">'+label+'</div><input type="range" id="sw_'+id+'" min="'+min+'" max="'+max+'" value="'+val+'"><span class="score-slider-val" id="sv_'+id+'">'+val+'</span></div>';
  }
  function thresh(id,label,val,ph){
    return '<div class="threshold-row"><label>'+label+'</label><input type="text" id="sr_'+id+'" value="'+val+'" placeholder="'+(ph||'')+'"></div>';
  }
  function fmtAmt(v){if(v>=1e6)return(v/1e6)+'M';if(v>=1e3)return(v/1e3)+'K';return String(v)}

  var h='<div class="settings-card">';
  h+='<div class="settings-hdr"><div class="settings-title">Settings</div><button class="settings-close" id="settingsClose">&times;</button></div>';

  h+='<div class="settings-section"><div class="settings-section-title">Display</div>';
  h+='<div class="settings-row"><div class="settings-label">Dark Mode<small>Keyboard shortcut: D</small></div><label class="toggle-switch"><input type="checkbox" id="darkSwitch"'+(dark?' checked':'')+'><span class="toggle-track"></span><span class="toggle-knob"></span></label></div>';
  h+='</div>';

  h+='<div class="settings-section"><div class="settings-section-title">Prospect Scoring</div>';
  h+='<div style="font-size:10px;color:var(--tx3);margin-bottom:12px;line-height:1.4">Customize how each factor contributes to the prospect score. Adjust weights and thresholds. Saved to your browser.</div>';

  h+='<div class="score-block"><div class="score-block-hdr"><div class="score-block-title">No Advisor on Filing</div></div><div class="score-block-desc">Plans without an advisor listed on the 5500 may present an opening. Note: some advisors are compensated outside the plan.</div>'+slider('noAdvisor','Weight (points)',0,40,w.noAdvisor)+'</div>';

  h+='<div class="score-block"><div class="score-block-hdr"><div class="score-block-title">Asset Sweet Spot</div></div><div class="score-block-desc">Plans in your target asset range score higher. Plans above the max still get half points.</div>'+slider('assetFit','Weight (points)',0,30,w.assetFit)+thresh('assetMin','Minimum assets',fmtAmt(w.assetMin),'e.g. 1M')+thresh('assetMax','Maximum assets',fmtAmt(w.assetMax),'e.g. 50M')+'</div>';

  h+='<div class="score-block"><div class="score-block-hdr"><div class="score-block-title">Asset Growth</div></div><div class="score-block-desc">Any positive growth earns points. Growth above the threshold earns a +5 bonus on top.</div>'+slider('growth','Weight (points)',0,20,w.growth)+thresh('growthThresh','High growth threshold',w.growthThresh+'%','e.g. 20%')+'</div>';

  h+='<div class="score-block"><div class="score-block-hdr"><div class="score-block-title">Participant Sweet Spot</div></div><div class="score-block-desc">Plans with a participant count in your target range score higher.</div>'+slider('partFit','Weight (points)',0,20,w.partFit)+thresh('partMin','Minimum participants',String(w.partMin),'e.g. 10')+thresh('partMax','Maximum participants',String(w.partMax),'e.g. 300')+'</div>';

  h+='<div class="score-block"><div class="score-block-hdr"><div class="score-block-title">No Safe Harbor Design</div></div><div class="score-block-desc">Plans without safe harbor (2S/2T codes) have more plan design context to explore.</div>'+slider('noSafeHarbor','Weight (points)',0,15,w.noSafeHarbor)+'</div>';

  h+='<div class="score-block"><div class="score-block-hdr"><div class="score-block-title">High Average Balance</div></div><div class="score-block-desc">Plans with high per-participant balances signal fee sensitivity.</div>'+slider('highBalance','Weight (points)',0,15,w.highBalance)+thresh('balanceThresh','Balance threshold','$'+fmtAmt(w.balanceThresh),'e.g. $100K')+'</div>';

  h+='<div class="score-block"><div class="score-block-hdr"><div class="score-block-title">High Contributions per Participant</div></div><div class="score-block-desc">Active plans with strong contribution flow indicate an engaged sponsor.</div>'+slider('highContrib','Weight (points)',0,15,w.highContrib)+thresh('contribPerPartThresh','Contrib/participant threshold','$'+fmtAmt(w.contribPerPartThresh),'e.g. $10K')+'</div>';

  h+='<div class="score-block"><div class="score-block-hdr"><div class="score-block-title">High Fee Per Participant</div></div><div class="score-block-desc">Plans with above-average per-participant costs represent a displacement opportunity.</div>'+slider('highExpenseRatio','Weight (points)',0,15,w.highExpenseRatio)+thresh('feePerPartThresh','Fee/participant threshold','$'+fmtAmt(w.feePerPartThresh),'e.g. $500')+'</div>';

  h+='<div class="score-block" style="border-color:rgba(255,107,82,.2)"><div class="score-block-hdr"><div class="score-block-title" style="color:var(--coral)">Penalties</div></div><div class="score-block-desc">These factors reduce a plan\'s score. Set to 0 to disable.</div>'+slider('lateContrib','Late Contributions',-15,0,w.lateContrib)+slider('emplrSec','Employer Securities',-10,0,w.emplrSec)+'</div>';

  h+='<div class="score-block"><div class="score-block-hdr"><div class="score-block-title">Base Score</div></div><div class="score-block-desc">Every plan starts with this score before any factors are applied.</div>'+slider('base','Base (points)',10,50,w.base)+'</div>';

  h+='<div class="score-block" style="border-color:rgba(26,141,255,.2)"><div class="score-block-hdr"><div class="score-block-title" style="color:var(--acc)">RK Targeting</div></div><div class="score-block-desc">Plans on a specific recordkeeper get +10 bonus points. Great for displacement campaigns.</div><div class="threshold-row"><label>Target Recordkeeper</label><input type="text" id="sr_targetRK" value="'+H(w.targetRK||'')+'" placeholder="e.g. Empower, Fidelity..." style="width:160px"></div></div>';

  h+='</div>';

  h+='<div style="display:flex;gap:8px;margin:16px 0"><button class="btn btn-grn" id="scoreApply" style="flex:1;padding:10px;font-size:12px">APPLY & RESCORE ALL PLANS</button><button class="btn" id="scoreReset" style="padding:10px;font-size:11px">RESET DEFAULTS</button></div>';

  h+='<div class="settings-section" style="margin-bottom:0"><div class="settings-section-title">Keyboard Shortcuts</div><div style="display:grid;grid-template-columns:auto 1fr auto 1fr;gap:5px 12px;font-size:11px;color:var(--tx2)"><span class="kbd" style="background:var(--bg4);border:1px solid var(--brd);color:var(--tx2)">Esc</span><span>Close panels</span><span class="kbd" style="background:var(--bg4);border:1px solid var(--brd);color:var(--tx2)">D</span><span>Dark mode</span><span class="kbd" style="background:var(--bg4);border:1px solid var(--brd);color:var(--tx2)">/</span><span>Focus search</span><span class="kbd" style="background:var(--bg4);border:1px solid var(--brd);color:var(--tx2)">1-4</span><span>Switch tabs</span></div></div>';
  h+='<div style="padding-top:10px;border-top:1px solid var(--brd);font-size:9px;color:var(--tx3);text-align:center;margin-top:12px">Mammini 401(k) Prospector \xb7 San Diego County \xb7 FY 2024/25</div></div>';

  ov.innerHTML=h;
  document.body.appendChild(ov);

  document.getElementById('settingsClose').addEventListener('click',function(){document.body.removeChild(ov)});
  document.getElementById('darkSwitch').addEventListener('change',function(){toggleDark(this.checked)});
  ov.addEventListener('click',function(e){if(e.target===ov)document.body.removeChild(ov)});

  var sliderKeys=['noAdvisor','assetFit','growth','partFit','noSafeHarbor','highBalance','highContrib','highExpenseRatio','lateContrib','emplrSec','base'];
  sliderKeys.forEach(function(key){var inp=document.getElementById('sw_'+key);var lbl=document.getElementById('sv_'+key);if(inp&&lbl){inp.addEventListener('input',function(){lbl.textContent=this.value})}});

  function parseAmt(str){str=String(str).replace(/[$%,\s]/g,'');var n=parseFloat(str);if(!isFinite(n))return 0;if(str.toUpperCase().indexOf('M')>=0)return n*1e6;if(str.toUpperCase().indexOf('K')>=0)return n*1e3;return n}

  document.getElementById('scoreApply').addEventListener('click',function(){
    sliderKeys.forEach(function(key){var inp=document.getElementById('sw_'+key);if(inp)SCORE_W[key]=parseInt(inp.value)});
    var r=function(id,fb){var el=document.getElementById('sr_'+id);return el?el.value:fb};
    SCORE_W.assetMin=parseAmt(r('assetMin','1M'))||1e6;SCORE_W.assetMax=parseAmt(r('assetMax','50M'))||5e7;
    SCORE_W.partMin=parseInt(r('partMin','10'))||10;SCORE_W.partMax=parseInt(r('partMax','300'))||300;
    SCORE_W.balanceThresh=parseAmt(r('balanceThresh','$100K'))||100000;SCORE_W.growthThresh=parseFloat(r('growthThresh','20'))||20;
    SCORE_W.contribPerPartThresh=parseAmt(r('contribPerPartThresh','$10K'))||10000;SCORE_W.feePerPartThresh=parseAmt(r('feePerPartThresh','$500'))||500;
    SCORE_W.targetRK=(document.getElementById('sr_targetRK')||{}).value||'';
    saveScoreWeights();rescoreAll();if(ct==='tbl'){aFi()}if(ct==='dash'){rDash()}document.body.removeChild(ov);toast('All '+D.length+' plans rescored','success')});

  document.getElementById('scoreReset').addEventListener('click',function(){
    var d=SCORE_DEFAULTS;
    sliderKeys.forEach(function(key){var inp=document.getElementById('sw_'+key);var lbl=document.getElementById('sv_'+key);if(inp){inp.value=d[key];if(lbl)lbl.textContent=d[key]}});
    var rF={assetMin:fmtAmt(d.assetMin),assetMax:fmtAmt(d.assetMax),partMin:String(d.partMin),partMax:String(d.partMax),balanceThresh:'$'+fmtAmt(d.balanceThresh),growthThresh:d.growthThresh+'%',contribPerPartThresh:'$'+fmtAmt(d.contribPerPartThresh),feePerPartThresh:'$'+fmtAmt(d.feePerPartThresh),targetRK:''};
    for(var k in rF){var el=document.getElementById('sr_'+k);if(el)el.value=rF[k]}});
}


document.getElementById('settingsBtn').addEventListener('click',openSettings);

// --- Keyboard Shortcuts ---
document.addEventListener('keydown',function(e){
  var tag=e.target.tagName;
  var isInput=(tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||e.target.isContentEditable);

  if(e.key==='Escape'){
    // Close settings
    var setOv=document.getElementById('settingsOv');
    if(setOv){document.body.removeChild(setOv);e.preventDefault();return}
    // Close detail panel
    var dtl=document.getElementById('dtl');
    if(dtl&&dtl.classList.contains('open')){cD();e.preventDefault();return}
    var compOv=document.getElementById('compareOv');
    if(compOv&&compOv.classList.contains('open')){compOv.classList.remove('open');e.preventDefault();return}
    var snapOv=document.querySelector('.snap-ov.open');
    if(snapOv){snapOv.classList.remove('open');e.preventDefault();return}
    var welOv=document.querySelector('.welcome-ov');
    if(welOv&&welOv.parentNode){welOv.parentNode.removeChild(welOv);e.preventDefault();return}
    var provOv=document.querySelector('[style*="z-index:4000"]');
    if(provOv&&provOv.parentNode===document.body){document.body.removeChild(provOv);e.preventDefault();return}
    var strip=document.getElementById('marketStrip');
    if(strip)strip.querySelectorAll('.market-detail').forEach(function(d){d.classList.remove('mkt-detail-open')});
    return;
  }

  if(isInput)return;

  if(e.key==='d'||e.key==='D'){
    if(!e.ctrlKey&&!e.metaKey&&!e.altKey){toggleDark();e.preventDefault();return}
  }

  if(e.key==='/'||(e.key==='k'&&(e.ctrlKey||e.metaKey))){
    e.preventDefault();
    if(ct==='tbl'){
      var si=document.querySelector('#tfi input[type="text"]');
      if(si)si.focus();
    }else if(ct==='analyze'){
      var li=document.getElementById('azLookupInput');
      if(li)li.focus();
    }
    return;
  }

  if(e.key>='1'&&e.key<='4'&&!e.ctrlKey&&!e.metaKey&&!e.altKey){
    var tabs=['dash','tbl','hm','analyze'];
    go(tabs[parseInt(e.key)-1]);
    e.preventDefault();
    return;
  }

  if(ct==='tbl'&&(e.key==='ArrowDown'||e.key==='ArrowUp')){
    var rows=document.querySelectorAll('#tbd tr[data-idx]');
    if(!rows.length)return;
    var curIdx=-1;
    rows.forEach(function(r,i){if(r.classList.contains('sel'))curIdx=i});
    if(e.key==='ArrowDown')curIdx=Math.min(curIdx+1,rows.length-1);
    else curIdx=Math.max(curIdx-1,0);
    if(curIdx>=0&&rows[curIdx]){
      var planIdx=+rows[curIdx].dataset.idx;
      oD(planIdx,fd);
      rows[curIdx].scrollIntoView({block:'nearest'});
      e.preventDefault();
    }
    return;
  }
});
})();

rDash();
