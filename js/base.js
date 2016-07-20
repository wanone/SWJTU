function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,false)[attr];
    }
}
function addEvent(eventTarget, eventType, eventHandler) {
     if (eventTarget.addEventListener) {
         eventTarget.addEventListener(eventType, eventHandler, false);
     } else {
         if (eventTarget.attachEvent) {
            eventType = "on" + eventType;
            eventTarget.attachEvent(eventType, eventHandler);
         } else {
             eventTarget["on" + eventType] = eventHandler;
         }
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