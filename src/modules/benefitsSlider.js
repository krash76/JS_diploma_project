export const benefitsSlider = () => {
  const arrows = document.querySelectorAll(".benefits-arrows");
  const slides = document.querySelectorAll(".benefits__item");
  let currentSlide = 0;
 
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
  
  isActive();
   
  const prevSlide = (elems, index) => {
    elems[index].classList.remove("active")
  };

  const nextSlide = (elems, index) => {
    elems[index].classList.add("active");
  };
  
  const changeSlideByOne = (el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.closest("div").matches(".benefits__arrow--right")) {
        prevSlide(slides, currentSlide);
        currentSlide++;
        if (currentSlide >= slides.length) {
        currentSlide = 0;
        };
        nextSlide(slides, currentSlide);
        isActive();
      } else if (e.target.closest("div").matches(".benefits__arrow--left")) {
        prevSlide(slides, currentSlide);
        currentSlide--;
        if (currentSlide < 0) {
          currentSlide = slides.length - 1;
        };
        nextSlide(slides, currentSlide);
        isActive(); 
      }
    })
  };

  for (let i = 0; i < slides.length; i++) {
    if (window.screen.width >= 576 ) {
      if (i < 3) {
      slides[i].style.display = "block";
      slides[i].classList.add("active") ;
      } else {
        slides[i].style.display = "none";
      }
    }
  };

  const changeSlideBlock = () => {
    
  };
  
  arrows.forEach((arrow) => {
    if (window.screen.width < 576 ) {
      changeSlideByOne(arrow)
    } else {
     // changeSlideBlock();
    }
    
  });

};