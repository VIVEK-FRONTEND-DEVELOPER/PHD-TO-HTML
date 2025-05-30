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

function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }


  document.querySelector('.down-arrow a').addEventListener('click', function(e) {
    e.preventDefault(); // prevent default anchor behavior
    document.querySelector('#about').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });

// read more

