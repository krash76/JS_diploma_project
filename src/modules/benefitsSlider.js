export const benefitsSlider = () => {
  const arrows = document.querySelectorAll(".benefits-arrows");
  const slides = document.querySelectorAll(".benefits__item");

  let currentSlideIndex = 0;
  
  const isActive = () => {
    slides.forEach((slide) => {
      if (slide.classList.contains("active")){
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
        if (slides.length % 3 === 2) {
          currentSlideIndex = slides.length - 2
        } else if (slides.length % 3 === 1) {
          currentSlideIndex =  slides.length - 1
        } else if (slides.length % 3 === 0) {
          currentSlideIndex =  slides.length - 3
        }
      };
     
      toRemoveActive();

      if (slides.length % 3 === 0) {
        nextSlide(slides,currentSlideIndex);
        nextSlide(slides,currentSlideIndex + 1);
        nextSlide(slides,currentSlideIndex + 2);
      } else if (slides.length % 3 === 2 && currentSlideIndex <= (slides.length-3)){
        nextSlide(slides,currentSlideIndex);
        nextSlide(slides,currentSlideIndex + 1);
        nextSlide(slides,currentSlideIndex + 2);
      } else if (slides.length % 3 === 2 && currentSlideIndex > (slides.length-3)){
        nextSlide(slides,currentSlideIndex);
        nextSlide(slides,currentSlideIndex + 1);
      } else if (slides.length % 3 === 1 && currentSlideIndex <= (slides.length-2)){
        nextSlide(slides,currentSlideIndex);
        nextSlide(slides,currentSlideIndex + 1);
        nextSlide(slides,currentSlideIndex + 2); 
      } else if (slides.length % 3 === 1 && currentSlideIndex > (slides.length-2)){
        nextSlide(slides,currentSlideIndex);
      };
      isActive();
  
    } else {
      toRemoveActive();
      nextSlide(slides,currentSlideIndex);
      isActive();
    }
  };

  showSlides();

  const changeSlide = (el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest("div").matches(".benefits__arrow--right")) {
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
            currentSlideIndex += 3;
            showSlides();
        }
      } else if (e.target.closest("div").matches(".benefits__arrow--left")) {
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
          currentSlideIndex -= 3;
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

};