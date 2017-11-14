$(function() {

 'use strict';

	$('ul.sf-menu').superfish({
		delay: 200, 
		cssArrows: false, 
		onInit : function() {
			$(this).find('ul').css('display','none');
		}
	});

	var $hamburger = $(".hamburger");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
  });

  $('.home-banner__carousel').owlCarousel({
  	items: 1,
    loop: true,
    dots: true,
	})


});
	