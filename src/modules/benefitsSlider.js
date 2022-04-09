export const benefitsSlider = () => {
  const arrows = document.querySelectorAll(".benefits-arrows");
  const slides = document.querySelectorAll(".benefits__item");
  let currentSlideIndex = 0;
 
  let slide_2Index;
  let slide_3Index ;

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
    elems[index].classList.add("active");
  };
  
  const showSlides = () => {
  
    if (window.screen.width >= 576 ) {
 
      if (currentSlideIndex < slides.length - 2) {
        slide_2Index = currentSlideIndex + 1;
        slide_3Index = slide_2Index + 1;
      };
      if (currentSlideIndex === slides.length-2) {
        slide_2Index = currentSlideIndex + 1;  
        slide_3Index = 0;
      };
      if (currentSlideIndex === slides.length-1) {
        slide_2Index = 0;
        slide_3Index = slide_2Index + 1;
      };    
      if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
        slide_2Index = currentSlideIndex + 1;
        slide_3Index = slide_2Index + 1;
      };
      
      if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
        slide_2Index = 0;
        slide_3Index = slide_2Index + 1;
      };
     /*  if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
        slide_2Index = 0;
        slide_3Index = slide_2Index + 1;
      };*/


      console.log (currentSlideIndex, slide_2Index, slide_3Index)

      
      
      nextSlide(slides,currentSlideIndex);
      nextSlide(slides,slide_2Index);
      nextSlide(slides,slide_3Index);
      isActive();
    } else {
      prevSlide(slides, currentSlideIndex);
      prevSlide(slides, slide_2Index);
      prevSlide(slides, slide_3Index);
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
          
        console.log (currentSlideIndex, slide_2Index, slide_3Index);

          prevSlide(slides, currentSlideIndex);
          prevSlide(slides, slide_2Index);
          prevSlide(slides, slide_3Index);
          currentSlideIndex++;
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
          prevSlide(slides, slide_2Index);
          prevSlide(slides, slide_3Index);
          currentSlideIndex--;
          showSlides();

        }
        
      }
    })
  };


  
  arrows.forEach((arrow) => {
    changeSlide(arrow)
  })
    
  window.addEventListener("resize", () => {
    showSlides();
  })

};