window.onload=function(){
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
window.onload = function () {
    var wookmark1 = new Wookmark('#wookmark1', {
        outerOffset: 10, // Optional, the distance to the containers border
        itemWidth: 210, // Optional, the width of a grid item
        align: 'center',
        resizeDelay: 50, //这是延时效果 默认是50
    });
};
addLoadEvent(redFunc);
function redFunc(){
    var wookmark1=document.getElementById("wookmark1");
    var hearts=wookmark1.getElementsByTagName("span");
    hearts=Array.prototype.slice.call(hearts, 0);
    var flag=1;
    hearts.forEach(function(ele){
        addEvent(ele, "click", function(){
            var text=document.createElement("span");
            ele.parentNode.appendChild(text);
            if(flag===1){
                ele.classList.add("red");
                ele.classList.remove("gray");
                text.innerHTML="+1";
                text.classList.add("plus1Moveanim");
                flag=0;
            }else{
                ele.classList.add("gray");
                ele.classList.remove("red");
                text.innerHTML="-1";
                text.classList.add("plus1Moveanim");
                flag=1;
            }
        });
    })
}
function goTop()
{
    $(window).scroll(function(e) {
        //若滚动条离顶部大于100元素
        if($(window).scrollTop()>100)
           {$("#gotop").css("display", "block")} //以1秒的间隔渐显id=gotop的元素
        else
           {$("#gotop").css("display", "none")}//以1秒的间隔渐隐id=gotop的元素
    });
};
$(function(){
    //点击回到顶部的元素
    $("#gotop").click(function(e) {
            //以1秒的间隔返回顶部
            $('body,html').animate({scrollTop:0},700);
    });
    goTop();//实现回到顶部元素的渐显与渐隐
});
