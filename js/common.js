$(document).ready(function() {

	function wResize(){
		$("header").css("min-height", $(window).height()); // sets header's height to current window's height
	};
	wResize(); // вызов при загрузке DOM
	$(window).resize(function(){ // вызов при рисайзе
		wResize();
	});

	$(".top_phone .wrapper .tab").click(function(){
		$(".top_phone .tab_item").not(":first").hide();
		$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		//console.log($(this).index());
		$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".tabs_header .wrapper .tab").click(function(){
		$(".tabs_header .tab_item").not(":first").hide();
		$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

});