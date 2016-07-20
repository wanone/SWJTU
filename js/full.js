var pages = document.getElementsByClassName("page");
var contains = document.getElementsByClassName("contain");
addEvent(window, "scroll", pageFunc);
function pageFunc(){
    for(var i=0;i<pages.length;i++){
        if(getStyle(pages[i],"class").indexOf("current") !== -1){
            contains[i].classList.add('contain-anim');
        }
    }
    alert("hello");
}

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