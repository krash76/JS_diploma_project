export const benefitsSlider = () => {
  const arrows = document.querySelectorAll(".benefits-arrows");
  const slides = document.querySelectorAll(".benefits__item");
  const slidesArray = Array.from(slides);
  
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
 

 
 // isActive();
   
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
        if (window.screen.width < 576 ) {
          prevSlide(slides, currentSlide);
          currentSlide++;
        if (currentSlide >= slides.length) {
        currentSlide = 0;
        };
        nextSlide(slides, currentSlide);
        isActive();
        console.log (slidesArray)
        } else {

        }
        
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

  const showSlides = () => {
  if (window.screen.width >= 576 ) {
    nextSlide(slides,currentSlide)
    nextSlide(slides,(currentSlide + 1));
    nextSlide(slides,(currentSlide + 2));
    isActive();
  } else {
    prevSlide(slides, currentSlide);
    prevSlide(slides, (currentSlide + 1));
    prevSlide(slides, (currentSlide + 2));

    nextSlide(slides,currentSlide);
    isActive();
  }
    
   
  };

  showSlides();
  window.addEventListener("resize", () => {
    showSlides();
  })
 

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