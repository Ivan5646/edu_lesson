$(document).ready(function() {

	$(".popup").magnificPopup({type:'image'});

	$.stellar({
		responsive: true,
		horizontalOffset: 50
	});

	$(".carousel").owlCarousel({
		loop: true,
		responsive: {
			0: {
			items:1,
			nav:true
			}
		},
		navText: ""
	});

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

	$(".s_contacts .contacts-top .tabs .tab").click(function(){
		$(".s_contacts .tab_item").not(":first").hide();
		$(".s_contacts .contacts-top .tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".s_contacts .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	$(".bottom_phone .wrapper .tab").click(function(){
		$(".bottom_phone .tab_item").not(":first").hide();
		$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		//console.log($(this).index());
		$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// ajax send form
	$(".ajax_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail_ajax.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".ajax_form").trigger("reset");
		});
		return false;
	});

});


	//animation
$(window).load(function(){
	$(".top_header").animated("fadeInDown", "fadeOut");
	$(".tabs_header .wrapper").animated("flipInY", "fadeOut");
	$(".profi_item").animated("fadeInRight", "fadeOut");
	$(".s_profi form").animated("zoomInRight", "fadeOut");
	$(".s_back h3").animated("fadeInUp", "fadeOut");
	$("section h2, footer h2, .contacts_top .tabs").animated("fadeInUp", "fadeOut");
});

