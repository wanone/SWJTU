addLoadEvent(scrollFunc);
addLoadEvent(browserFunc);
function scrollFunc(){
  var timer = 0;
  var container = document.getElementById("marquee"),
      original = container.getElementsByTagName("dt")[0],
      clone = container.getElementsByTagName("dd")[0];
      clone.innerHTML =original.innerHTML;
      timer = setInterval(function(){
       if (container.scrollTop==clone.offsetTop){
             container.scrollTop=0;
          }else{
            container.scrollTop++;
          }
    }, 30);
    container.onmouseover=function(){clearInterval(timer);};
    container.onmouseout=function(){
      timer = setInterval(function(){
       if (container.scrollTop==clone.offsetTop){
             container.scrollTop=0;
          }else{
            container.scrollTop++;
          }
       }, 15);
    };
}
function browserFunc(){
    var userAgent=navigator.userAgent.toLowerCase(), s, o = {};   
    var browser={
        version:(userAgent.match(/(?:firefox|opera|safari|chrome|msie)[\/: ]([\d.]+)/))[1],
        safari:/version.+safari/.test(userAgent),
        chrome:/chrome/.test(userAgent),
        firefox:/firefox/.test(userAgent),
        ie:/msie/.test(userAgent),
        opera: /opera/.test(userAgent ) 
    } /* 获得浏览器的名称及版本信息 */

    if (browser.ie && browser.version > 6)
    {
      /* 判断是否为IE 6以上版本，是则执行以下操作 */
      alert("为了您更好的视听体验，请使用chrome等现代浏览器打开网站，谢谢支持");
    }
    if (browser.firefox) {
        var footer=document.getElementsByTagName("footer")[0];
        footer.classList.add("foxFooter");
    }
}
function addLoadEvent(func){
  var oldload = window.onload;
  if (typeof oldload != "function"){
    window.onload = func;
  }else{
    window.onload=function(){
      oldload();
      func();
    }
  }
}



