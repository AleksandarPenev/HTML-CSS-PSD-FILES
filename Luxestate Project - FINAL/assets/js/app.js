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
});