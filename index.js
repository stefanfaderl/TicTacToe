import { Board } from "./js/Board.js";
import { Players } from "./js/Players.js";

// console.log(Board.whichGame());
let board = new Board(90, 65); // x = %, y = vh;
let player1 = new Players("X");
let player2 = new Players("O");
// console.log(board.SayCoordinates());
// console.log(board.allCoordinates);
// board.newCoordinates = { x: 100, y: 250 };
// console.log(board.allCoordinates);
const h1 = document.querySelector("h1");
const section = document.createElement("section");
const buttonStartGame = document.createElement("button");
buttonStartGame.classList.add("btn-start-game");
buttonStartGame.innerText = "Start Game";
h1.after(section);
section.append(buttonStartGame);
let startBtn = document.querySelector(".btn-start-game");

startBtn.addEventListener("click", () => {
  section.remove();
  board.drawBoard(board);
  Players.printPlayers(player1, player2);
  const p = document.querySelector("p");
  const buttonRestartGame = document.createElement("button");
  buttonRestartGame.classList.add("btn-start-game");
  buttonRestartGame.innerText = "Restart Game";
  p.after(buttonRestartGame);
  buttonRestartGame.addEventListener("click", () => window.location.reload());
  startGame();
});

function startGame() {
  const cellElements = document.querySelectorAll('[class*="field"]');
  console.dir(cellElements); // look console log elements log.dir
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
}

let pointsX = 0;
let pointsO = 0;
let circleTurn;
const X_CLASS = "x-image";
const CIRCLE_CLASS = "o-image";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleClick(e) {
  // console.log("clicked");
  const cell = e.target;
  let audio = new Audio("sound/clickSound.wav");
  audio.play();
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS; // if it´s circles turn than return circle class else return the x class
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    let audio2 = new Audio("sound/winning.mp3");
    audio2.play();
    console.log("WINNER");
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
  }
}

function endGame(draw) {
  const pTagX = document.querySelector(".p-x");
  const pTagO = document.querySelector(".p-o");
  if (draw) {
    pointsX++;
    pointsO++;
    pTagX.textContent = "Points " + player1.playername + ": " + pointsX;
    pTagO.textContent = "Points " + player2.playername + ": " + pointsO;
    alert("It's a draw!");
  } else {
    if (circleTurn) {
      alert("O wins!");
      pointsO++;
      pTagO.textContent = "Points " + player2.playername + ": " + pointsO;
    } else {
      alert("X wins!");
      pointsX++;
      pTagX.textContent = "Points " + player1.playername + ": " + pointsX;
    }
  }
  clearGame();
  startGame();
}

function clearGame() {
  const cellElements = document.querySelectorAll('[class*="field"]');
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
  });
}

function isDraw() {
  const cellElements = document.querySelectorAll('[class*="field"]');
  return [...cellElements].every((cell) => {
    // array destructuring
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurns() {
  circleTurn = !circleTurn;
}

function checkWin(currentClass) {
  const cellElements = document.querySelectorAll('[class*="field"]');
  return WINNING_COMBINATIONS.some((combination) => {
    // returns true, if any of the values inside of it are true
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    }); // check if the values in the cells have the same class
  });
}
