$(function() {

	'use strict';

	$('ul.sf-menu').superfish({
		delay: 200, 
		cssArrows: false, 
		pathLevels: 3,
		onInit : function() {
			$(this).find('ul').css('display','none');
		}
	}).after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");


	$("#mobile-menu").find("*").attr("style", "");
	$("#mobile-menu").children("ul").removeClass("sf-menu main-menu")
	.parent().mmenu({
		extensions: ["fx-menu-fade", "widescreen", "pagedim-black", "theme-white", "border-offset", "shadow-page" ],
		navbar: {
			title: "e-license.store"
		},

	});

	var $hamburger = $(".hamburger"),
	mainMenu = $(".main-menu");
	$hamburger.on("click", function() {
		$hamburger.toggleClass("is-active");
	});

		// close mobile button menu
	var api = $("#mobile-menu").data("mmenu");
	api.bind("closed", function () {
		$hamburger.removeClass("is-active");
	});


	$('.home-banner__carousel').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		responsive:{
        0:{
					autoWidth: false,
					margin: 10,
        },
        1100:{
					autoWidth: false,
        }
    }
	});

	$('.products-carousel').owlCarousel({
		items: 4,
		loop: true,
		dots: false,
		nav: true,
		margin: 25,
		navText: ["<img src='../img/home/chevron-left.png'>", "<img src='../img/home/chevron-right.png'>"],
				responsive:{
				0: {
					autoWidth: true,
					items: 3,
					center: true
				},
        768:{
					autoWidth: false,
					items: 3,
        },
        992:{
					items: 4,

        }
    }
	});


	$( window ).resize(function() {
		
	});


});
