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
      alert("<p>您使用的是IE "+browser.version+"<\/p>");
    }
    if (browser.safari)  {alert("safari")}  /* 判断是否为safari */
   
    if (browser.chrome)  {alert("chrome")}  /* 判断是否为chrome */
    if (browser.opera)   {alert("opera")}   /* 判断是否为opera */
    if (browser.ie)      {alert("ie")}      /* 判断是否为IE */
}
