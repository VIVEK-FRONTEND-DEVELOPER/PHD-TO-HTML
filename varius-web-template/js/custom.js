var main = gsap.timeline()

main.from("header",{
    opacity:0,
    duration:0.5,
     delay:0.2

    
})

main.from("nav .logo",{

    opacity:0,
    x:-100,
    duration:0.5,
   
    
})

main.from(".search-icon",{
    opacity:0,
    x:100,
    duration:0.5,
    color:"#e8631c"
    
})


main.from("header nav ul a",{
    opacity:0,
    duration:0.5,
    y:-100,

    stagger:0.3,
    color:"#e8631c"
    
})

// // main.from(".section-main",{
// //     opacity:0,
// //     duration:1.5,
// // })

main.from(".section-main .info h1",{
    opacity:0,
    duration:1,
    y:100,
    stagger:1,
    color:"#e8631c"
    
})


main.from(".section-main .info .content",{
    opacity:0,
    duration:1,
    y:100,
    stagger:1,
    color:"#e8631c"
    
})
main.from(".section-main .info .button a",{
    opacity:0,
    duration:1,
    y:100,
    stagger:1,
    color:"#e8631c",
    stagger: "1"
    
})


gsap.from(".second-background-img",{
    opacity:0,
    duration:1,
   repeat:-1,
   yoyo:"true",
   x:-50,
   yoyo: " true"
      
})






gsap.from(".dance-tour-section .dance-tour-heading .dance-heading", {
   opacity:0,
    duration:0.5,
    y:100,  
    color:"#e8631c",
    stagger:1,
    scrollTrigger:{
        trigger:".dance-tour-section .dance-tour-heading .dance-heading",
        scroller:"body",
        markers:false,
        start:"top 70%",
        end:"top 40%",
        scrub: 2
    }
})

// gsap.from(".pricing-section .card",{
//     y:100,
//     opacity:0,
//     duration:0.5
// })

// gsap.from(".dance-tour-row", {
//     opacity:0,
//     duration:1,
//     delay:1,
//     y:500,
//     stagger:1
    

// })
// const tl = gsap.timeline();
// tl.from(" .pricing-section .card", { opacity: 0, delay:1 })
//   .to(" .pricing-section .card", { opacity: 1,delay:1, duration:0.5,  });

// tl.from(" .dance-card-2", { opacity: 0})
//   .to(" .dance-card-2", { opacity: 1,  duration:0.5,});

//   tl.from(" .dance-card-3", { opacity: 0 })
//   .to(" .dance-card-3", { opacity: 1,  duration:0.5, });



// testomonial

 $(".main-testimonial").slick({
        dots: false,
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
        })

//  counter
   $('#counter-block').ready(function(){
        $('.fb').animationCounter({
          start: 0,
          step: 5,
          delay:100,
          end:1240,
          txt:'+'
        });
        $('.bike').animationCounter({
          start: 0,
          end:1000,
          step: 2,
          delay:100,
          txt: '+'
        });
        $('.code').animationCounter({
          start: 0,
          end: 2000,
          step: 5,
          delay: 100,
          txt:'+'
        });

    });