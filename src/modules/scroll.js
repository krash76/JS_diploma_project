export const toScrollUp = () => {
  const scrollBtn = document.querySelector(".smooth-scroll");
  const secondSectionDiv = document.getElementById("benefits");
  
  let scrolled;
  let timer;

  scrollBtn.style.display = "none";
  
  const scrollToTop = () => {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 200;
      timer = setTimeout(scrollToTop, 20);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  };

  document.addEventListener("scroll", () => {
    secondSectionDiv.getBoundingClientRect();
    if (secondSectionDiv.getBoundingClientRect().top <= 0) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    scrolled = window.pageYOffset;
    scrollToTop();
  });

} 