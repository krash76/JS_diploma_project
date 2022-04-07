export const benefitsSlider = () => {
  const leftArrow = document.querySelector(".benefits__arrow--left");
  const rightArrow = document.querySelector(".benefits__arrow--right");
  const sliders = document.querySelectorAll(".benefits__item");
  let slidersArray = Array.from(sliders);

  
 
  for (let i = 3; i< sliders.length; i++) {
      sliders[i].style.display = "none";
    }
  
    for (let i = 0; i < sliders.length/2; i++) {
      sliders[i].style.display = "block";
    }
  

  let nextIndex;

  function isActive(slide) {
    return slide.style.display === "block";
  }
  
  function activate(slide) {
    slide.style.display = "none";
  }

  rightArrow.addEventListener("click", () => {
    let activeIndex = slidersArray.findIndex(isActive);
    slidersArray[activeIndex].className = "benefits__item";
    if (activeIndex < (slidersArray.length - 1)) {
      nextIndex = activeIndex + 1;
    } else {
      nextIndex = 0;
    }
    activate(slidersArray[nextIndex]);
  });

  leftArrow.addEventListener("click", () => {
    let activeIndex = slidersArray.findIndex(isActive);
    slidersArray[activeIndex].className = "benefits__item";
    if (activeIndex === 0) {
      nextIndex = slidersArray.length - 1;
    } else {
      nextIndex = activeIndex - 1;
    }
    activate(slidersArray[nextIndex]);
  })
}