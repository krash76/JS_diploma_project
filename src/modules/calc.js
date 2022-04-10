export const calc = () => {

  const calcBlock = document.getElementById("calc");
  const calcType = document.getElementById("calc-type");
  const calcTypeMaterial = document.getElementById("calc-type-material");
  const calcInput = document.getElementById("calc-input");
  const calcTotal = document.getElementById("calc-total");
  let total;
  
  calcInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d]/ig, "");
  });

  const toCalcTotal = () => {
    if (calcType.value !== "--" && calcTypeMaterial.value !== "--" && calcInput.value > 0) {
      total = calcType.value * calcTypeMaterial.value * calcInput.value;
      calcTotal.value = Math.floor(total);
    }
  };

  calcBlock.addEventListener("input", (e) => {
    if (e.target === calcType || e.target === calcTypeMaterial ||
      e.target === calcInput || e.target === calcInput) {
      toCalcTotal();  
    }
  });

}
