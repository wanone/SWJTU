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
    $(function() {
    //single book
    $('#mybook').booklet({
         width:  1000,
         height: 520,
         speed: 800,
         startingPage: 1,
         direction:  'LTR',
         pagePadding: 0,
         autoCenter: true
    });
      
    //multiple books with ID's
    $('#mybook1, #mybook2').booklet();
      
    //multiple books with a class
    $('.mycustombooks').booklet();
});