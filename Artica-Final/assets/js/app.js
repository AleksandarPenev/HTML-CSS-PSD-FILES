$(document).ready(function() {
	
	var canvasButton = $('.canvas-button');
	var canvasMenu = $('.canvas-menu');
	var canvasInnerButton = $('.canvas-button_menu');

	var clicked = function() {
		if ( canvasMenu.hasClass('active') ) {
			canvasMenu.removeClass('active');
			return;
		}

		canvasMenu.addClass('active');
	}

	canvasButton.click(clicked); 
	canvasInnerButton.click(clicked);


	var brand = $('.brand');
	var popUp = $('.pop_up');
	var xBtn = $('.x_btn')

	var clicked = function() {
		if ( popUp.hasClass('show') ) {
			popUp.removeClass('show');
			return;
		}

		popUp.addClass('show');
	}

	brand.click(clicked);
	xBtn.click(clicked);

	var $carousel = $('.owl-carousel');
	$carousel.owlCarousel({
		items: 6,
		nav: true,
		dots: true,
		autoplay: true, 
		autoplayTimeout: 4000, 
		loop: true,
		autoplayHoverPause: true,
		autoplaySpeed: 2000,
		responsiveClass: true,
		responsive:{
		    0:{
		        items:2,
		        nav:true
		    },
		    600:{
		        items:4,
		        nav:true
		    },
		    800:{
		        items:5,
		        nav:true
		    },
		    1000:{
		        items:6,
		        nav:true
		    }
		}
	});
});