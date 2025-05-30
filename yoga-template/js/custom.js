var tl = gsap.timeline()

tl.from("header .logo img", {
    opacity:0,
    duration:1,
    scale:0
    
})

tl.from("nav ul li ", {
    opacity:0,
    stagger: 0.5,
    scale:0
})


tl.from("nav i",{
    color:"#559ead",
    scale:0
})

gsap.from(".main-section .left .heading h1",{
    opacity:0,
    duration:1,
    scale:0,
    color:"white"
})


gsap.from(".main-section .left-img",{
    x:-200,
    duration:2,
})

gsap.from(".main-section .left .heading h5",{
    opacity:0,
    duration:1,
    delay:1,
    scale:0
})

gsap.from(".main-section .left .content",{
    opacity:0,
    y:500,
    x:-500,
    duration:1,
    scale:0
})

gsap.from(".main-section .right img",{
    y:1000,
    duration:1,
    scale:0,
    ease: "power2.out"

})

gsap.to(".main-section .right img",{
    x:1000,
    opacity:0,
    scrollTrigger:{
        trigger:".main-section",
        scroller:"body",
        start:"bottom 40%",
        end:"top 0%",
        scrub:2   
    }

})

gsap.from(".main-section .circle",{
    scale:0,
    duration:1
})

gsap.from(".main-section .right-pink",{
    y:1000,
    scale:0,
    duration:1.6,
    x:1000
})

gsap.from(".main-section .pink-top",{
    rotate:"360%",
    duration:3,
    yoyo:true
})

gsap.from(".about-us-section .left .about-us-img",{
    y:500,
    opacity:0,
    scrollTrigger:{
        trigger:".about-us-section",
        scroller:"body",
        start:"top 30%%",
        end:"-100%",
        scrub:2
    }
})


gsap.from(".about-us-circle",{
    scale:0,
    opacity:0,
    scrollTrigger:{
        trigger:".about-us-section",
        scroller:"body",
        start:"top 30%%",
        end:"-100%",
        scrub:2
    }
})

gsap.from(".about-us-pink ",{
    scale:0,
    rotate:"360%",
    opacity:0,
    scrollTrigger:{
        trigger:".about-us-section",
        scroller:"body",
        start:"top 30%%",
        end:"-100%",
        scrub:2
    }
})
gsap.from(".about-us-section .content ",{
    scale:0,
    x:500,
    opacity:0,
    scrollTrigger:{
        trigger:".about-us-section",
        scroller:"body",
        start:"top 30%",
        end:"-100%",
        scrub:2
    }
})


gsap.from(".why_inner-content h4",{
    opacity:0,
    scale:0,
    x: -500,
    stagger:1,
    scrollTrigger:{
        trigger:".why-choose-us",
        scroller:"body",
        start:"top 50%",
        end:"top 100%",
        scrub:3
    }
})
gsap.from(".why_inner-content ul li",{
    opacity:0,
    scale:0,
    x: -500,
    stagger:0.5,
    duration:0.5,
    scrollTrigger:{
        trigger:".why-choose-us",
        scroller:"body",
        start:"top 35%",
        end:"top 100%",
        scrub:2
    }
})
gsap.from(".why_inner-content a ",{
    opacity:0,
    y: -500,
    duration:0.5,
    scrollTrigger:{
        trigger:".why_inner-content a   ",
        scroller:"body",
        start:"top 80%",
        end:"top 100%",
        scrub:2
    }
})
gsap.from(".why_inner-img ",{
    opacity:0,
    y: 500,
    scrollTrigger:{
        trigger:".why_inner-img",
        scroller:"body",
        start:"top 100%",
        end:"-100%",
        scrub:2,
    
    }
})

gsap.from(".testomonial",{
  y:500,
  opacity:0,
  duration:1,
  scrollTrigger:{
    trigger:".testomonial-section",
    scroller:"body",
    scrub:2,
    start:"top 80%",
    end:"top 100%"
    
   

  }
})

gsap.from("img.position-absolute.sleek-img",{
  x:-500,
  duration:0.7,
  opacity:0,
  scrollTrigger:{
    trigger:".testomonial-section",
    scroller:"body",
    satrt:"bottom 80%",
    end:"bottom 100%",
    scrub:2
  }
  
})






// cards.slider
 document.addEventListener('DOMContentLoaded', function () {
  const treatmenSlider = document.getElementById('treatmenSlider');
  const treatNextBtn = document.getElementById('treatNextBtn');
  const treatPrevBtn = document.getElementById('treatPrevBtn');

  let cardWidth = document.querySelector('.Treatment-card').offsetWidth + 10; // margin included

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    updateActiveCard(1);
  });

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    updateActiveCard(-1);
  });

  function updateActiveCard(direction) {
    const cards = document.querySelectorAll('.Treatment-card');
    let currentIndex = Array.from(cards).findIndex(card => card.classList.contains('active-Treatment-card'));
    
    cards[currentIndex].classList.remove('active-Treatment-card');

    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = cards.length - 1;
    if (newIndex >= cards.length) newIndex = 0;

    cards[newIndex].classList.add('active-Treatment-card');
  }
});


  // treatment-section

const products = [
    {
      name: "Eco Yoga Mat",
      img: "img/yoga-shop.png",
      price: "$90",
      desc: "Eco-friendly yoga mat with extra grip."
    },
    {
      name: "Foam Roller",
      img: "img/yoga-shop.png",
      price: "$60",
      desc: "Perfect for muscle recovery after yoga."
    },
    {
      name: "Yoga Block",
      img: "img/yoga-shop.png",
      price: "$30",
      desc: "High-density yoga block for added support."
    },
  ];

  const slider = document.getElementById("slider");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let activeIndex = 0;

  // Generate slider cards
  function renderSliderCards() {
    slider.innerHTML = "";

    products.forEach((product, i) => {
      const card = document.createElement("div");
      card.className = "card-item" + (i === activeIndex ? " active" : "");
      card.innerHTML = `
        <img src="${product.img}" class="img-fluid" alt="${product.name}">
        <div class="item-name">${product.name}</div>
      `;
      slider.appendChild(card);
    });
  }

  // Smooth scroll function
  function smoothScrollTo(element, to, duration) {
    const start = element.scrollLeft;
    const change = to - start;
    const startTime = performance.now();

    function animateScroll(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      element.scrollLeft = start + change * ease;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  // Update content and scroll
  function updateActive() {
    const cards = document.querySelectorAll('.card-item');

    cards.forEach((card, i) => {
      card.classList.toggle("active", i === activeIndex);
    });

    document.querySelector(".price").textContent = products[activeIndex].price;
    document.querySelector(".description").textContent = products[activeIndex].desc;

    // Smooth scroll to active card
    const activeCard = cards[activeIndex];
    const scrollPos = activeCard.offsetLeft - (slider.offsetWidth / 2) + (activeCard.offsetWidth / 2);
    smoothScrollTo(slider, scrollPos, 500); // duration 500ms
  }

  // Button events
  prevBtn.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + products.length) % products.length;
    updateActive();
  });

  nextBtn.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % products.length;
    updateActive();
  });

  // Initialize
  renderSliderCards();
  updateActive();



  // sleekslider

  $(".tstomonial-sleek").slick({
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
  });
