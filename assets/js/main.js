(function(){
  // Radar scope bearing ticks (home page only): every 10°, longer every 30°
  var g=document.getElementById('ticks'),ns='http://www.w3.org/2000/svg';
  if(g){
    for(var d=0;d<360;d+=10){
      var a=(d-90)*Math.PI/180,r1=d%30?172:164,r2=180;
      var l=document.createElementNS(ns,'line');
      l.setAttribute('x1',200+r1*Math.cos(a));l.setAttribute('y1',200+r1*Math.sin(a));
      l.setAttribute('x2',200+r2*Math.cos(a));l.setAttribute('y2',200+r2*Math.sin(a));
      l.setAttribute('stroke','var(--scope-dim)');l.setAttribute('stroke-width',d%30?1:1.5);
      g.appendChild(l);
    }
  }

  // UTC + GPS week / time-of-week (GPS epoch 1980-01-06, GPS = UTC + 18 s)
  var utc=document.getElementById('utc'),gw=document.getElementById('gpsw'),tw=document.getElementById('tow');
  if(utc&&gw&&tw){
    var EPOCH=Date.UTC(1980,0,6),LEAP=18,WEEK=604800;
    var pad=function(n,w){n=String(n);while(n.length<w)n='0'+n;return n};
    var tick=function(){
      var now=new Date();
      utc.textContent=now.getUTCFullYear()+'-'+pad(now.getUTCMonth()+1,2)+'-'+pad(now.getUTCDate(),2)+' '+
        pad(now.getUTCHours(),2)+':'+pad(now.getUTCMinutes(),2)+':'+pad(now.getUTCSeconds(),2)+'.'+pad(now.getUTCMilliseconds(),3);
      var s=(now.getTime()-EPOCH)/1000+LEAP;
      gw.textContent=Math.floor(s/WEEK);
      tw.textContent=(s%WEEK).toFixed(1);
    };
    tick();setInterval(tick,100);
  }

  var yr=document.getElementById('yr');
  if(yr)yr.textContent=new Date().getFullYear();

  // Copy address (contact page)
  var btn=document.getElementById('copy-addr'),addr=document.getElementById('addr');
  if(btn&&addr){
    btn.addEventListener('click',function(){
      var t=addr.textContent;
      function sel(){var r=document.createRange();r.selectNodeContents(addr);var s=getSelection();s.removeAllRanges();s.addRange(r);btn.textContent='선택됨'}
      try{navigator.clipboard.writeText(t).then(function(){btn.textContent='복사됨'},sel)}catch(e){sel()}
      setTimeout(function(){btn.textContent='복사'},1800);
    });
  }
})();
