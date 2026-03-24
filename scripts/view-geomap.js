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


