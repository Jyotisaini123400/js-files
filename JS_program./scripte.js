//selecting Element...
let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

//starting condition..
score0El = 0;
score1El = 0;
diceEl.classList.add("hidden");
let currentscore = 0;

btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  // console.log(dice);
  //player score..
  if (dice !== 1) {
    currentscore += dice;
    current0El.textContent = currentscore;
  }
  // else {
  // }
});
