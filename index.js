import { Board } from "./js/Board.js";
import { Players } from "./js/Players.js";

let player1 = new Players("X");
let player2 = new Players("O");
let circleTurn;
const X_CLASS = "x-image";
const CIRCLE_CLASS = "o-image";
const h1 = document.querySelector("h1");
const section = document.createElement("section");
const buttonStartGame = document.createElement("button");
buttonStartGame.classList.add("btn-start-game");
buttonStartGame.innerText = "Start Game";
h1.after(section);
section.append(buttonStartGame);
const startBtn = document.querySelector(".btn-start-game");

startBtn.addEventListener("click", () => {
  let board = new Board(90, 65); // x: %, y: vh;
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

let startGame = () => {
  const cellElements = document.querySelectorAll('[class*="field"]');
  // console.dir(cellElements); // look console log elements log.dir
  cellElements.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
};

let handleClick = (e) => {
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS; // if it´s circles turn than return circle class else return the x class
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    let winningAudio = new Audio("sound/winning.mp3");
    winningAudio.play();
    endGame(false);
  } else if (isDraw()) {
    let drawAudio = new Audio("sound/draw-sound.mp3");
    drawAudio.play();
    endGame(true);
  } else {
    swapTurns();
  }
};

let endGame = (draw) => {
  let pointsX = 0;
  let pointsO = 0;
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
};

let clearGame = () => {
  const cellElements = document.querySelectorAll('[class*="field"]');
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
  });
};

let isDraw = () => {
  const cellElements = document.querySelectorAll('[class*="field"]');
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
};

let placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
  let placeMarkAudio = new Audio("sound/clickSound.wav");
  placeMarkAudio.play();
};

let swapTurns = () => {
  circleTurn = !circleTurn;
};

let checkWin = (currentClass) => {
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
  const cellElements = document.querySelectorAll('[class*="field"]');
  return WINNING_COMBINATIONS.some((combination) => {
    // returns true, if any of the values inside of it are true
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    }); // check if the values in the cells have the same class
  });
};
