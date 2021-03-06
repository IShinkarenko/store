$(document).ready(function() {

	'use strict';

	// equal height product desc in product carousel 
	$('.products-carousel__item .descr').matchHeight();
	$('.products-carousel__item h4').matchHeight();

	// desktop menu
	$('ul.sf-menu').superfish({
		delay: 200, 
		cssArrows: false, 
		pathLevels: 3,
		onInit : function() {
			$(this).find('ul').css('display','none');
		}
	}).after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");


	// mobile menu 
	$("#mobile-menu").find("*").attr("style", "");
	$("#mobile-menu").children("ul").removeClass("sf-menu main-menu")
	.parent().mmenu({
		extensions: ["fx-menu-fade", "widescreen", "pagedim-black", "theme-white", "border-offset", "shadow-page" ],
		navbar: {
			title: "e-license.store"
		},

	});


	// hamburger event
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


	// home top banner
	$('.home-banner__carousel').owlCarousel({
		items: 1,
		loop: true,
		dots: true,
		responsive:{
			0:{
				autoWidth: false,
				center: false,
				items: 1,
				margin: 0,
			},
			550:{
				autoWidth: true,
				center: true,
				items: 1,
				margin: 10,
			},
			1200:{
				autoWidth: false,
				margin: 0
			}
		}
	});


	// products carousel
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
			800:{
				autoWidth: false,
				items: 3,
			},
			1200:{
				items: 4,
				autoWidth: false,
			}
		}
	});


	//resize owl carousel
	$('.owl-carousel').on('resized.owl.carousel', function(event) {
		$(window).trigger("resize");
	});


	// show hidden text
	var prod = $(".card-box__body--descr"),
	prodBottom = $(".card-box__body__bottom"),
	lastTitle = prod.find("h2").last(),
	hiddenText = lastTitle.nextUntil(prodBottom).addBack();

	hiddenText.hide();
	$('.less-text').hide();

	$(".more-text").on('click', function(e) {
		hiddenText.fadeIn("slow");
		$(this).hide();
		$('.less-text').show();
		e.preventDefault();
	});

	$(".less-text").on('click', function(e) {
		hiddenText.fadeOut("fast");
		$(this).hide();
		$('.more-text').show();
		e.preventDefault();
	});
	// end show hidden text

	// tabs
	$('.card-tabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	// buy in one click
	var paySection = $("#pay"),
	staticSection = $(".card-information .card-box");

	$(".buy-click").click(function() {
		if ( staticSection.is(':visible') ) {
			paySection.fadeIn();
			staticSection.fadeOut();
			$('html, body').animate({
				scrollTop: staticSection.offset().top
			}, 800);
		}
		
	}); 

	$(".close-pay").click(function() {
		paySection.fadeOut();
		staticSection.fadeIn();
		$('html, body').animate({
			scrollTop: $(".card").offset().top
		}, 800);
	});

	
	// check payment method
	$(document).on("click", ".pay-list input[type='radio']:checked", function() {
		$(".pay__item").removeClass("active");
		var payMethod = $(this).prev().find(".pay-title-method").text(),
		paySum = $(this).val();
		$(this).parents(".pay__item").addClass("active");

		$('html, body').animate({
			scrollTop: $(".pay-sumup").offset().top
		}, 800);

		$(".pay-sumup-method").text(payMethod);
		$(".pay-sumup-total").text(paySum);
	});

	$(document).on("change", ".pay-sumup--condition input[type='checkbox']", function() {
		var notSelected = $(".pay-sumup--condition input[type='checkbox']").length,
		selected = $(".pay-sumup--condition input[type='checkbox']:checked").length;

		if ( notSelected == selected ) {
			$(".pay-sumup--bottom .btn-buy").prop("disabled", false);
		} else {
			$(".pay-sumup--bottom .btn-buy").prop("disabled", true);
		}
	});

	// increment/decrement
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});



	//resize fn
	$( window ).resize(function() {
		$('.products-carousel__item .descr').matchHeight();		
		$('.products-carousel__item h4').matchHeight();		
	});


});
