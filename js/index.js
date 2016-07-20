window.onload=function(){
		var badge=document.getElementsByClassName("badge");
		badge[0].classList.add("badge-anim");
}
$(document).ready(function(){
	$(".red").hide();
	$(".func").hover(
		function(){
			$(this).children(".gray").hide();
			$(this).children(".red").show();
		}
		, function(){
			$(this).children(".red").hide();
			$(this).children(".gray").show();
		}
	);
})
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
/*addLoadEvent(video);
function video(){
  var inclass=document.getElementById("inclass");
}*/
addLoadEvent(logFunc);
addLoadEvent(signFunc);
addLoadEvent(closeLog1);
addLoadEvent(closeLog2);
addLoadEvent(forgetFunc);
addLoadEvent(colorFunc);
var logPanel=document.getElementsByClassName("logPanel")[0];
var signPanel=document.getElementsByClassName("signPanel")[0];
var modal=document.getElementsByClassName("modal")[0];
var close=document.getElementsByClassName("close");
var forget=document.getElementsByClassName("forget")[0];
var forgetPass=document.getElementsByClassName("forgetPass")[0];
var logOn=document.getElementsByClassName("logOn")[0];
var userIn=document.getElementById("userIn");
var passIn=document.getElementById("passIn");
var sis=document.getElementsByClassName("si")
sis=Array.prototype.slice.call(sis, 0);
function colorFunc(){
    addEvent(logOn, "click", function(){
        if( userIn.value=="SWJTU" && passIn.value==120){
            sis.forEach(function(ele){
                ele.classList.add("siAnim");
            });
        }else{
            alert("用户名：SWJTU，密码：120");
        }
    });
}
function forgetFunc(){
    addEvent(forget, "mouseover", function(){
        forgetPass.style.display="block";
    });
    addEvent(forget, "mouseout", function(){
        forgetPass.style.display="none";
    });
}
function logFunc(){
    var modalHeight =document.body.style.height;
    var logBtn=document.getElementsByClassName("logBtn")[0];
    modal.style.height = modalHeight;
    addEvent(logBtn, "click", function(){
        modal.style.display="block";
        logPanel.style.display="block";
    // alert(logBtn.innerHTML);
  });
}
function closeLog1(){
    addEvent(close[0], "click", function(){
        logPanel.style.display="none";
        signPanel.style.display="none";
        modal.style.display="none";
    });
    addEvent(close[1], "click", function(){
        logPanel.style.display="none";
        signPanel.style.display="none";
        modal.style.display="none";
    });
}
function closeLog2(){
    addEvent(modal, "click", function(){
        logPanel.style.display="none";
        signPanel.style.display="none";
        modal.style.display="none";
    });
}
function signFunc(){
    var signBtn=document.getElementsByClassName("signBtn")[0];
    addEvent(signBtn, "click", function(){
        logPanel.style.display="none";
        signPanel.style.display="block";
    });
}


