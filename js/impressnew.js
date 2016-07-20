$(function(){
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': false,
        'sectionsColor': ['#fff', '#fff', '#fff', '#fff','#fff'],
        anchors: ['1', '2', '3', '4','5'],
        'navigation': true,
        'navigationPosition': 'right',
        'scrollOverflow': false,
        'scrollingSpeed': 1500,
        'easing': 'easeInOutExpo',
        afterLoad: function(link, index){
            switch(index){
                case 1:
                   $(".daxue").addClass("daxueAnim");
                   $("header a").addClass("aNew");
                   break;
                case 2:
                   $("header a").removeClass("aNew");
                   $("header a").addClass("a");
                   $(".swjtu1").addClass("swjtu1Anim");
                   $(".swjtu2").addClass("swjtu2Anim");
                   $(".swjtu3").addClass("swjtu3Anim");
                   $(".swjtu4").addClass("swjtu4Anim");
                   $(".swjtu5").addClass("swjtu5Anim");
                   $(".zhudi2").addClass("zhudi2Anim");
                   $(".text1").addClass("text1Anim");
                   $(".text1").addClass("text2Anim");                   
                   break;
                case 3:
                   $("header a").addClass("a");
                   break;
                case 4:
                   $("header a").addClass("aNew");
                   $(".zhudi5").addClass("zhudi5Anim");
                   break;
                case 5:
                   $("header a").addClass("a");
                   $(".lion").addClass("lionAnim");
                   $(".lionText").addClass("lionTextAnim");
                   $(".lionText").addClass("lionText2Anim");
                   $(".rabbit").addClass("rabbitAnim");
                   $(".rabbitText").addClass("rabbitTextAnim");
                   $(".rabbitText").addClass("rabbitText2Anim");
                   break;
                default:
                   break;
            };
        },
        afterSlideLoad: function(anchorLink, index, slideIndex, direction){
            var idx =index + slideIndex;
            switch(idx){
                case 3:
                   $(".zhudi41").addClass("zhudi41Anim");
                   $(".text41").addClass("text41Anim");
                   $(".text41").addClass("text412Anim");
                   break;
                case 4:  
                   $(".zhudi42").addClass("zhudi42Anim");
                   $(".text42").addClass("text42Anim");
                   $(".text42").addClass("text422Anim");             
                   break;
                case 5:
                   $(".zhudi43").addClass("zhudi43Anim"); 
                   $(".text43").addClass("text43Anim");
                   $(".text43").addClass("text432Anim");  
                   break;
                case 6:
                   $(".zhudi44").addClass("zhudi44Anim");
                   $(".text44").addClass("text44Anim");
                   $(".text44").addClass("text442Anim");
                   break;
                case 7:
                   $(".zhudi45").addClass("zhudi45Anim");
                   $(".text45").addClass("text45Anim");
                   $(".text45").addClass("text452Anim");
                   break;
                default:
                   break;
            };
        },
    })
});
$(document).ready(function(){

            /*
             * Instance CirclePlayer inside jQuery doc ready
             *
             * CirclePlayer(jPlayerSelector, media, options)
             *   jPlayerSelector: String - The css selector of the jPlayer div.
             *   media: Object - The media object used in jPlayer("setMedia",media).
             *   options: Object - The jPlayer options.
             *
             * Multiple instances must set the cssSelectorAncestor in the jPlayer options. Defaults to "#cp_container_1" in CirclePlayer.
             */

        

            // This code creates a 2nd instance. Delete if not required.

            var myOtherOne = new CirclePlayer("#jquery_jplayer_2",
            {
                m4a:"../img/赵照 - 犀安路999号.mp3",
                oga:"../img/赵照 - 犀安路999号.ogg",
            },
            {
                cssSelectorAncestor: "#cp_container_2"
            });
        });
addLoadEvent(scrollFunc);
function scrollFunc(){
  var timer = 0;
  var container = document.getElementById("marquee"),
    original = container.getElementsByTagName("dt")[0],
    clone = container.getElementsByTagName("dd")[0];
    clone.innerHTML =original.innerHTML;
    timer = setInterval(function(){
       if (container.scrollLeft==clone.offsetLeft){
             container.scrollLeft=0;
          }else{
            container.scrollLeft++;
          }
    }, 10);
    container.onmouseover=function(){clearInterval(timer);};
    container.onmouseout=function(){
      timer = setInterval(function(){
      if (container.scrollLeft==clone.offsetLeft){
             container.scrollLeft=0;
          }else{
            container.scrollLeft++;
          }
        }, 10);
    };
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