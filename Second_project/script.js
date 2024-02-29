"use strict";
const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");
const btnCloseModel = document.querySelector(".close-model");
const btnsOpenModel = document.querySelectorAll(".show-model");
// console.log(btnCloseModel);

console.log(btnsOpenModel);
const openModel = function () {
  console.log("button clicked");
  hidden.style.display = "inline-block";
  overlay.classList.remove("hidden");
};
const closeModel = function () {
  console.log("click");
  model.classList.add("hidden");
  hidden.style.display = "none ";
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener("click", openModel);
}

btnCloseModel.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeModel();
  }
});
