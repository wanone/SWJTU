$(document).ready(function(){
    $(".modal-content").hover(
        function(){
            $(this).children(".modal-body").children(".xixi").addClass("xixiAnim");
            $(this).children(".modal-body").children(".nannan").addClass("nannanAnim");
            $(this).children(".modal-body").children(".jiaojiao").addClass("jiaojiaoAnim");
            $(this).children(".modal-body").children(".dada").addClass("dadaAnim");
            $(this).children(".modal-body").children(".pp").addClass("ppAnim");
        }
        , function(){
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