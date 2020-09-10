$(document).ready(function() {
	var $carousel = $('.owl-carousel');
	$carousel.owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		autoplay: true, 
		autoplayTimeout: 6000, 
		loop: true,
		autoplayHoverPause: true,
		autoplaySpeed: 1000
	});
});