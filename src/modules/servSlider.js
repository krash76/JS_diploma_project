export const servSlider = () => {

  const arrows = document.querySelectorAll(".services__arrow");
  const slides = document.querySelectorAll(".col-md-12.col-lg-6");
  const arrowsBlock = document.querySelector(".services-arrows");
  const sliderBlock = arrowsBlock.closest(".row");
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

  const toRemoveActive = () => {
    slides.forEach((slide) => {
      if (slide.classList.contains("active")) {
        slide.classList.remove("active")
      }
    })
  };

  const showSlidesRight = () => {
     console.log(currentSlideIndex)
    if (window.screen.width >= 576 ) {
    
      if (currentSlideIndex === slides.length) {
         currentSlideIndex = 0;
      };
      if (currentSlideIndex === slides.length - 1) {
        let changePosition = sliderBlock.prepend(slides[slides.length - 1]);
        let arrowsChangePosition = sliderBlock.appendChild(arrowsBlock);
        slides[currentSlideIndex].classList.add("active");
        slides[0].classList.add("active");
      } else if (currentSlideIndex === 0) {
        let changePosition = sliderBlock.append(slides[slides.length - 1]);
        let arrowsChangePosition = sliderBlock.appendChild(arrowsBlock);
        slides[currentSlideIndex].classList.add("active");
        slides[currentSlideIndex+1].classList.add("active");
      } else {
        slides[currentSlideIndex].classList.add("active");
        slides[currentSlideIndex+1].classList.add("active");
      }
    isActive();
    } else if (window.screen.width < 576 ) {
      toRemoveActive();
      if (currentSlideIndex === slides.length) {
         currentSlideIndex = 0;
      };
      slides[currentSlideIndex].classList.add("active");
      isActive();
    }
  };
  
 showSlidesRight();

  const showSlidesLeft = () => {
     if (window.screen.width >= 576 ) {
             
       if (currentSlideIndex < 0 ) {
        currentSlideIndex = slides.length - 1;
        let changePosition = sliderBlock.prepend(slides[slides.length - 1]);
        let arrowsChangePosition = sliderBlock.appendChild(arrowsBlock);
        slides[currentSlideIndex].classList.add("active");
        slides[0].classList.add("active");
       
      } else if (currentSlideIndex === slides.length - 2 ) {
        let changePosition = sliderBlock.append(slides[slides.length - 1]);
        let arrowsChangePosition = sliderBlock.appendChild(arrowsBlock);
        slides[currentSlideIndex].classList.add("active");
        slides[currentSlideIndex+1].classList.add("active");
      } 
      else {
        slides[currentSlideIndex].classList.add("active");
        slides[currentSlideIndex+1].classList.add("active");
      }
      isActive();
    } else if (window.screen.width < 576 ) {
      toRemoveActive();
      if (currentSlideIndex < 0 ) {
        currentSlideIndex = slides.length - 1;
      };
      slides[currentSlideIndex].classList.add("active");
      isActive();
    
    }
  };
    
  const changeSlide = (el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest("div").matches(".services__arrow--right")) {
        toRemoveActive();
        currentSlideIndex += 1;
        showSlidesRight();
      } else if (e.target.closest("div").matches(".services__arrow--left")) {
        toRemoveActive();
        currentSlideIndex -= 1;
        showSlidesLeft();
      }
    })
  };

  arrows.forEach((arrow) => {
    changeSlide(arrow)
  });

  window.addEventListener("resize", () => {
    showSlidesRight();
    
  });

}

