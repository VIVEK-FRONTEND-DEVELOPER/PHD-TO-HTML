//    $(".main-testimonial").slick({
//         dots: true,
//         infinite: true,
//         sliderToShow: 1,
//         autoplay: false,
//         arrows: false,
//         autoplaySpeed: 3000,
//         pauseOnHover: false,
//         responsive:[
//         { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//         { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//         { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//         ]
//         })


$(window).on("load scroll", function () {
	"use strict";
	$(".wow").css("animation-play-state", "paused");
	$(".wow").each(function () {
		if (!($(this).data("wow-duration"))) {
			$(this).data("wow-duration", "1s");
		}
		if ($(this).data("wow-offset") + $(this).offset().top <= $(window).scrollTop() + $(window).height() || (!($(this).data("wow-offset")) && $(this).offset().top <= $(window).scrollTop() + $(window).height())) {
			$(this).css("animation-play-state", "running ");
			$(this).css({
				"animationDuration": $(this).data("wow-duration"),
				"animationDelay": $(this).data("wow-delay"),
				"animationIterationCount": $(this).data("wow-iteration")
			});
		}
	});
});