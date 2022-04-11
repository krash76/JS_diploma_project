export const forms = () => {

  const allForms = document.querySelectorAll("form");
  
  allForms.forEach((form) => {
    
    const nameInput = form.querySelector('input[name="fio"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const pageInput = form.querySelector('input[name="page"]');
    nameInput.classList.add ("error");
    phoneInput.classList.add ("error");
    
    const inputSuccess = (input) => {
        if ((input.name === "fio" && input.value.trim().length > 1 && /^([а-яА-ЯёЁa-zA-Z\s]*)$/.test(input.value))
          || (input.name === "phone" && /^([\d\+]*)\d$/.test(input.value) && input.value.trim().match(/\d/g).length < 17)) {
          input.classList.remove("error");
        }
      };

    form.addEventListener("input", (e) => {
      
      inputSuccess(e.target.value);
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
      let userData;
     
      if (pageInput.value !== "Балконы"){
        userData = {
          name: nameInput.value,
          tel: phoneInput.value,
          page:pageInput.value
        }
      } else {
        const calcTotal = document.getElementById("calc-total");
        if (calcTotal.value !== "") {
          userData = {
          name: nameInput.value,
          tel: phoneInput.value,
          page:pageInput.value,
          calcTotal: calcTotal.value
          }
        } else {
          userData = {
          name: nameInput.value,
          tel: phoneInput.value,
          page:pageInput.value
          }
        }
      };
          
      const validate = (list) => {
        let success = true;
          list.forEach(input => {
          inputSuccess(input);
          if (input.classList.contains("error")) {
            success = false;
          } 
        })
        return success;
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
            input.classList.add("error"); 
          })
        })
        .catch(error => {
          console.log (error.message);
        })
      };

    })
  })
}
