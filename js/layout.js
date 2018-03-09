$('#holiday-tour').carousel({
  interval: 9000
})

$('#hill_station').carousel({
  interval: 9000
})

$('#temple_tour').carousel({
  interval: 9000
})

$('.carousel .carousel-item').each(function(){
	var next = $(this).next();
	if (!next.length) {
	next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));
	
	if (next.next().length>0) {
	next.next().children(':first-child').clone().appendTo($(this));
	}
	else {
	  $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	}
});

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 750) {
		$(".home .top-section").addClass("addHeader");
		$(".home .middle-section").addClass("movebanner");				
	} else {
		$(".home .top-section").removeClass("addHeader");
		$(".home .middle-section").removeClass("movebanner");
	}
});

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 100) {
		$(".inner-page .top-section").addClass("addHeader");
		$(".inner-page .middle-section").addClass("movebanner");				
	} else {
		$(".inner-page .top-section").removeClass("addHeader");
		$(".inner-page .middle-section").removeClass("movebanner");
	}
});