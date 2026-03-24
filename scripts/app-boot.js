// --- Init ---

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
