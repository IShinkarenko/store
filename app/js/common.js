$(function() {

	'use strict';

	$('ul.sf-menu').superfish({
		delay: 200, 
		cssArrows: false, 
		onInit : function() {
			$(this).find('ul').css('display','none');
		}
	});

	var $hamburger = $(".hamburger"),
	mainMenu = $(".main-menu");
	$hamburger.on("click", function() {
		$hamburger.toggleClass("is-active");
	});


	$('.home-banner__carousel').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		autoWidth: false,
	});

	$('.products-carousel').owlCarousel({
		items: 4,
		loop: true,
		dots: false,
		nav: true,
		margin: 25,
		navText: ["<img src='../img/home/chevron-left.png'>", "<img src='../img/home/chevron-right.png'>"]
	});


	$( window ).resize(function() {
		
	});


});
