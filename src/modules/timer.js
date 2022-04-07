export const timer = (deadline) => {
 
  const allCounts = document.querySelectorAll(".count");
  let span;

  const getSpan =(el) => {
    span = el.querySelector("span");
  };

  const getTimeRest = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRest = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRest / 60 / 60 / 24);
    let hours = Math.floor((timeRest / 60 / 60) % 24);
    let minutes = Math.floor((timeRest / 60 ) % 60);
    let seconds = Math.floor(timeRest % 60);

    return {timeRest, days, hours, minutes, seconds};
  };
 
  const updateClock = () => {
    
    let getTime = getTimeRest();

    if (getTime.days.toString().length < 2) {
      getTime.days = ` 0${getTime.days.toString()} `;
    };
    if (getTime.hours.toString().length < 2) {
      getTime.hours = ` 0${getTime.hours.toString()} `;
    };
    if (getTime.minutes.toString().length < 2) {
      getTime.minutes = ` 0${getTime.minutes.toString()} `;
    };
    if (getTime.seconds.toString().length < 2) {
      getTime.seconds = `0${getTime.seconds.toString()}`;
    };
  
    allCounts.forEach((count) => {
      if (count.classList.contains("count_1")) {
          getSpan(count);
          span.textContent = getTime.days;
      } else if (count.classList.contains("count_2")) {
          getSpan(count);
          span.textContent = getTime.hours;
      } else if (count.classList.contains("count_3")) {
          getSpan(count);
          span.textContent = getTime.minutes;
      } else if (count.classList.contains("count_4")) {
          getSpan(count);
          span.textContent = getTime.seconds;
      };

      if(getTime.timeRest > 0) {
        setTimeout(updateClock, 1000);
      } else {
        span.textContent = "00";
      };

    });
  };

  updateClock();
  
};


