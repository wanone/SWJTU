$(document).ready(function(){
    $(".sectionfunc").hover(
        function(){
            $(this).children(".s").children(".noDiv").addClass("shadowDiv");
            $(this).children(".s").children(".noText").addClass("shadowText");
            $(this).children(".s").children(".noImg").addClass("shadowImg");
        }
        , function(){
            $(this).children(".s").children(".noDiv").removeClass("shadowDiv");
            $(this).children(".s").children(".noText").removeClass("shadowText");
            $(this).children(".s").children(".noImg").removeClass("shadowImg");
        }
    );
})
window.onload=browserFunc;
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

