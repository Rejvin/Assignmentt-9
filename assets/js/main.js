(function ($) {
	"use strict";

    jQuery(document).ready(function($){


       $(".case-studies-carousel").owlCarousel({
        items: 3,
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
		autoplay: true,
       });

	   
	    $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            nav: false,
            mouseDrag: false,
			touchDrag: false,
        });
        
        $(".testimonial-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
		autoplay: true,
       });

        $(".logo-carousel").owlCarousel({
        items: 6,
        loop: true,
        nav: false,
        dots: false,
		margin: 30,
		autoplay: true,
       }); 


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	