
export const forms = () => {

  const allForms = document.querySelectorAll("form");
  
  allForms.forEach((form) => {
    const nameInput = form.querySelector('input[name="fio"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const pageInput = form.querySelector('input[name="page"]');
    const subjectInput = form.querySelector('input[name="subject"]');
    let userData;

    const inputSuccess = (input) => {
      if ((input.name === "fio" && input.value.trim().length > 1 && /^([а-яА-ЯёЁa-zA-Z\s]*)$/.test(input.value))
        || (input.name === "phone" && /^([\d\+]*)\d$/.test(input.value) && input.value.trim().match(/\d/g).length < 17 && input.value.trim().match(/\d/g).length > 6)) {
        input.classList.remove("error");
      } else {
        input.classList.add("error");
      }
    };

    form.addEventListener("input", (e) => {
      if (e.target === nameInput) {
        e.target.value = e.target.value.replace(/[^а-яёa-z\s]/ig, "");
        inputSuccess(nameInput);
      };
      if (e.target === phoneInput) {
        e.target.value = e.target.value.replace(/[^\d\+]/ig, "");
        inputSuccess(phoneInput);
      };
    });

    
    const doUserData = () => {
      userData = {
        name: nameInput.value,
        tel: phoneInput.value,
        page:pageInput.value
      }
    };
    
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formElements = form.querySelectorAll("input.form-control");
       
      if (pageInput.value !== "Балконы") {
        if (subjectInput && subjectInput.value !== "") {
          doUserData()
          userData.subject = subjectInput.value
        } else {
          doUserData();
        }
      } else {
        const calcTotal = document.getElementById("calc-total");
        if (subjectInput && subjectInput.value !== "") {
          if (calcTotal.value !== "") {
            doUserData();
            userData.subject = subjectInput.value;
            userData.calcTotal = calcTotal.value;
          } else {
            doUserData();
            userData.subject = subjectInput.value;
          }
        } else {
          if (calcTotal.value !== "") {
            doUserData();
            userData.calcTotal = calcTotal.value;
          } else doUserData();
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
            
          })
        })
        .catch(error => {
          console.log (error.message);
        })
      };

    })
  })
}
