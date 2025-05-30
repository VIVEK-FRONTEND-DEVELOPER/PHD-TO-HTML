// toggle-function
function toggleNav() {
  const sidenav = document.getElementById("mySidenav");
  if (sidenav.style.width === "75%") {
    sidenav.style.width = "0";
    console.log("Navigation closed");
  } else {
    sidenav.style.width = "75%";
    console.log("Navigation opened");
  }
}

// HAMBURGER_FUNCTION
$(".openbtn").click(function () {
  $(this).toggleClass('active');
}); 




$(".main-upcoming-events").slick({
  dots: true,
  infinite: true,
  sliderToShow: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  responsive:[
  { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  { breakpoint: 991, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ]
  });


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