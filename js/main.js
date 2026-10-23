(function(){
  var t=document.getElementById("mob-toggle"),d=document.getElementById("mob-drawer"),o=document.getElementById("mob-overlay"),c=document.getElementById("drawer-close");
  function open(){d.removeAttribute("hidden");o.classList.add("visible");t.setAttribute("aria-expanded","true");t.setAttribute("aria-label","Close navigation menu");document.documentElement.style.overflow="hidden";}
  function close(){d.setAttribute("hidden","");o.classList.remove("visible");t.setAttribute("aria-expanded","false");t.setAttribute("aria-label","Open navigation menu");document.documentElement.style.overflow="";}
  if(t&&d&&o){
    t.addEventListener("click",function(){t.getAttribute("aria-expanded")==="true"?close():open();});
    if(c)c.addEventListener("click",close);
    o.addEventListener("click",close);
    d.querySelectorAll("a").forEach(function(a){a.addEventListener("click",close);});
    document.addEventListener("keydown",function(e){if(e.key==="Escape")close();});
    window.addEventListener("resize",function(){if(window.innerWidth>768)close();});
    d.querySelectorAll(".dd-toggle").forEach(function(b){
      b.addEventListener("click",function(){
        var s=document.getElementById(b.getAttribute("aria-controls"));
        var on=b.getAttribute("aria-expanded")==="true";
        b.setAttribute("aria-expanded",on?"false":"true");
        if(s){s.classList.toggle("open",!on);}
      });
    });
  }
  document.querySelectorAll(".faq-q").forEach(function(q){
    q.addEventListener("click",function(){
      var it=q.parentNode,on=it.classList.contains("open");
      it.classList.toggle("open",!on);
      q.setAttribute("aria-expanded",on?"false":"true");
    });
  });
  var f=document.querySelector(".float-call"),ft=document.querySelector("footer");
  if(f&&ft&&"IntersectionObserver" in window){
    new IntersectionObserver(function(es){es.forEach(function(e){f.classList.toggle("hide",e.isIntersecting);});}).observe(ft);
  }
})();
