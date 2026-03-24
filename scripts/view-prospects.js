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

