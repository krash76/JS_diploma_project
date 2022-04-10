import {calc} from "./calc.js";

export const forms = () => {

  const horisontalForms = document.querySelectorAll(".form-horizontal");

  horisontalForms.forEach((form) => {
    const nameInput = form.querySelector('input[name="fio"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    
    form.addEventListener("input", (e) => {
      if (e.target === nameInput) {
        e.target.value = e.target.value.replace(/[^а-яёa-z\s]/ig, "");
      };
      if (e.target === phoneInput) {
        e.target.value = e.target.value.replace(/[^\d\+]/ig, "");
      };
    });
   
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formElements = form.querySelectorAll("input.form-control");
      const body = document.querySelector("body");
      let userData;
      if (!body.classList.contains("balkony" )) {
        userData = {
          name: nameInput.value,
          tel: phoneInput.value,
        }
      } else {
        const calcTotal = document.getElementById("calc-total");
        calc();
        userData = {
          name: nameInput.value,
          tel: phoneInput.value,
          calcTotal: calcTotal.value
        }
      };
          
      const validate = (list) => {
        let success = true;
          list.forEach(input => {
          inputSuccess(input);
          if (!input.classList.contains("success")) {
            success = false;
          };
        })
        return success
      };

      const inputSuccess = (input) => {
        if ((input.name === "fio" && input.value.trim().length > 1 && /^([а-яА-ЯёЁa-zA-Z\s]*)$/.test(input.value))
          || (input.name === "phone"  && /^([\d\+]*)\d$/.test(input.value) && input.value.trim().match(/\d/g).length < 17)) {
          input.classList.add ("success");
        } else {
          input.classList.add("error") ;  
        }
      };
    
      const sendData = (data) => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json())
      };
    
      if (validate(formElements)) {
        sendData(userData)
        .then(data => {
          formElements.forEach(input => {
            input.value = "";
            input.classList.remove("error"); 
            input.classList.remove ("success"); 
          })
        })
        .catch(error => {
          console.log (error.message);
        })
      };

    })
  })
}
 

  
