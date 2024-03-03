//selecting Element...
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
let score0El = document.getElementById("score--0");
let score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

let currentscore, scores, Activeplayer, playing;
//starting condition..

const init = function () {
  currentscore = 0;
  scores = [0, 0];
  Activeplayer = 0;
  playing = true;

  score0El = 0;
  score1El = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--Active");
  player1El.classList.remove("player--Active");
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${Activeplayer}`).textContent = 0;
  currentscore = 0;

  Activeplayer = Activeplayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--Active");
  player1El.classList.toggle("player--Active");
};

//Rolling buttion
btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    //player score..
    if (dice !== 1) {
      currentscore += dice;

      document.getElementById(`current--${Activeplayer}`).textContent =
        currentscore;
    } else {
      switchPlayer();
    }
  }
});

//HOlding button

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[Activeplayer] += currentscore;

    document.getElementById(`score--${Activeplayer}`).textContent =
      scores[Activeplayer];

    if (scores[Activeplayer] >= 20) {
      playing = false;

      document
        .querySelector(`.player--${Activeplayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${Activeplayer}`)
        .classList.remove("player-Active");
    }
  } else {
    switchPlayer();
  }
});

btnNew.addEventListener("click", init);
