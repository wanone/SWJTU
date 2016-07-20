addLoadEvent(imgFunc);
function imgFunc(){
	var imgss=document.getElementsByClassName("imgs")[0];
	var imgs=imgss.getElementsByTagName("img");
	imgs=Array.prototype.slice.call(imgs, 0);
	imgs.forEach(function(ele){
		addEvent(ele, "mouseover", function(){
			ele.classList.add("imgAnimOver");
			ele.parentNode.classList.add("imgBlack");
			ele.classList.remove("imgAnimOut");
		});
		addEvent(ele, "mouseout", function(){
			ele.classList.add("imgAnimOut");
			ele.classList.remove("imgAnimOver");
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