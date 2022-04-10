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
  
  const showSlides = () => {
    if (window.screen.width >= 576 ) {
      if (currentSlideIndex > 3) {
        currentSlideIndex = 0
      };
      if (currentSlideIndex < 0 ) {
        currentSlideIndex = 3 
      };
     
      slides.forEach((slide) => {
        if (slide.classList.contains("active")) {
          slide.classList.remove("active")
          }
        });
        nextSlide(slides,currentSlideIndex);
        nextSlide(slides,currentSlideIndex + 1);
        nextSlide(slides,currentSlideIndex + 2);
        isActive();
    } else {
      slides.forEach((slide) => {
        if (slide.classList.contains("active")) {
          slide.classList.remove("active")
        }
      });
      
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
          prevSlide(slides, currentSlideIndex);
          prevSlide(slides, currentSlideIndex + 1);
          prevSlide(slides, currentSlideIndex + 2);
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
          prevSlide(slides, currentSlideIndex);
          prevSlide(slides, currentSlideIndex + 1);
          prevSlide(slides, currentSlideIndex + 2);
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