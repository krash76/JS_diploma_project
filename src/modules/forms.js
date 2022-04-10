export const forms = () => {

  const orderForms = document.querySelectorAll(".order-form.rf");

  orderForms.forEach((form) => {
    const nameInput = form.querySelector('input[name="fio"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    //const inputButton = form.querySelector(".order-form-button");
   // const hiddenButtons = document.querySelectorAll(".btn-block.feedback");

   form.addEventListener("input", (e) => {
     if (e.target === nameInput) {
       e.target.value = e.target.value.replace(/[^а-яёa-z\s]/ig, "");
     };

     if (e.target === phoneInput) {
       e.target.value = e.target.value.replace(/[^\d\+]/ig, "");
       //e.target.value.trim().match(/\d/g).length < 17
     };
   }) 
  })
}
  
