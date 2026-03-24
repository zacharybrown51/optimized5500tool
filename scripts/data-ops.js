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


