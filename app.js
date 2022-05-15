import { isValidHtml } from "./utility/isValidHTML.js";
import { testCases } from "./data/testcases.js";

//Interface:
const userInput = document.getElementById("inputHTML");
const output = document.getElementById("result");
const buttonCheck = document.getElementById("buttonCheck");
const buttonReset = document.getElementById("buttonReset");

console.log(output);
console.log(userInput);

//Variables

let inputHTML = "";

//Render result

const renderResult = (result) => {
  if (result) {
    output.value = "yay, valid HTML!";
    output.classList.remove("neutral");
    output.classList.remove("invalid");
    output.classList.add("valid");
  } else {
    output.value = "invalid HTML";
    output.classList.remove("neutral");
    output.classList.remove("valid");
    output.classList.add("invalid");
  }
};

//Button click handling:

buttonCheck.addEventListener("click", () => {
  inputHTML = userInput.value;
  let result = isValidHtml(inputHTML);
  renderResult(result);
});

buttonReset.addEventListener("click", () => {
  userInput.value = "";
  output.classList.remove("valid");
  output.classList.remove("invalid");
  output.classList.add("neutral");
  output.value = "...";
});

// console.log(testCases);

// testCases.forEach((element, index) => {
//   console.log("Input HTML " + index);
//   console.log(element);
//   console.log("result: " + isValidHtml(element));
// });
