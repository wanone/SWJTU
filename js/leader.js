$(document).ready(function(){
	$(".job").hide();
	$(".person").hover(
		function(){
			$(this).children(".name").hide();
			$(this).children(".job").show();
		}
		, function(){
			$(this).children(".job").hide();
			$(this).children(".name").show();
		}
	);
})