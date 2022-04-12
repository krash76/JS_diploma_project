export const servicesSlider = () => {

  const arrows = document.querySelectorAll(".services__arrow");
  const slides = document.querySelectorAll(".col-md-12.col-lg-6");
  const arrowsBlock = document.querySelector(".services-arrows");

  arrowsBlock.setAttribute("style", "padding-top: 25px");

  let currentSlideIndex = 0;
  
  const isActive = () => {
    slides.forEach((slide) => {
      if (slide.classList.contains("active")) {
        slide.style.display = "block";
        slide.style.margin = "auto"
      } else {
        slide.style.display = "none";
      }
    })
  };

  const prevSlide = (elems, index) => {
    elems[index].classList.remove("active")
  };

  const nextSlide = (elems, index) => {
    elems[index].classList.add("active")
  };
  
  const toRemoveActive = () => {
    slides.forEach((slide) => {
      if (slide.classList.contains("active")) {
        slide.classList.remove("active")
      }
    })
  };

  const showSlides = () => {
    if (window.screen.width >= 576 ) {
      if ( currentSlideIndex > (slides.length-1)) {
        currentSlideIndex = 0
      };
      if (currentSlideIndex < 0 ) {
        if (slides.length % 2 === 1) {
          currentSlideIndex = slides.length - 1
        } else if (slides.length % 2 === 0) {
          currentSlideIndex =  slides.length - 2
        }
      };
     
      toRemoveActive();

      if (slides.length % 2 === 0) {
        nextSlide(slides,currentSlideIndex);
        nextSlide(slides,currentSlideIndex + 1);
        
      } else if (slides.length % 2 === 1 && currentSlideIndex <= (slides.length-2)){
        nextSlide(slides,currentSlideIndex);
        nextSlide(slides,currentSlideIndex + 1);
        
      } else if (slides.length % 2 === 1 && currentSlideIndex > (slides.length-2)){
        nextSlide(slides,slides.length-1);
        slides[slides.length - 1].setAttribute("style", "min-width: 1200px");
        
      };
      isActive();
  
    } else {
      toRemoveActive();
      nextSlide(slides,currentSlideIndex);
      isActive();
    };

    if (window.screen.width < 1200 ) {
      const serviseBlockActive = document.querySelectorAll(".service-block.active");
      serviseBlockActive.forEach((block) => {
        block.setAttribute("style", "margin-bottom: 20px")
      })
    }
  };

  showSlides();

  const changeSlide = (el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest("div").matches(".services__arrow--right")) {
        if (window.screen.width < 576 ) {
          prevSlide(slides, currentSlideIndex);
          currentSlideIndex++;
          if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
          };
          nextSlide(slides, currentSlideIndex);
          isActive();
        } else if (window.screen.width >= 576 ) {
            toRemoveActive();
            currentSlideIndex += 2;
            showSlides();
        }
      } else if (e.target.closest("div").matches(".services__arrow--left")) {
        if (window.screen.width < 576 ) {
          prevSlide(slides, currentSlideIndex);
          currentSlideIndex--;
          if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
          };
          nextSlide(slides, currentSlideIndex);
          isActive(); 
        } else if (window.screen.width >= 576 ) {
          toRemoveActive();
          currentSlideIndex -= 2;
          showSlides();
        }
      }
    })
  };

  arrows.forEach((arrow) => {
    changeSlide(arrow)
  });
    
  window.addEventListener("resize", () => {
    showSlides();
    
  });
}

