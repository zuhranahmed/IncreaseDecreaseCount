// Selecting Elements

const counterNumber = document.querySelector(".counter-number");
const btnLower = document.querySelector(".lower");
const btnAdd = document.querySelector(".add");

// Initializing

let number = 0;

btnAdd.addEventListener("click", function () {
  number++;
  counterNumber.textContent = number;
});
btnLower.addEventListener("click", function () {
  number--;
  counterNumber.textContent = number;
});
