addLoadEvent(imgFunc);
function imgFunc(){
	var article=document.getElementsByTagName("article")[0];
	var imgs=article.getElementsByTagName("img");
	imgs=Array.prototype.slice.call(imgs, 0);
	imgs.forEach(function(ele){
		addEvent(ele, "mouseover", function(){
			ele.classList.add("imgAnimOver");
			ele.classList.remove("imgAnimOut");
		});
		addEvent(ele, "mouseout", function(){
			ele.classList.add("imgAnimOut");
			ele.classList.remove("imgAnimOver");
		});
	})
}