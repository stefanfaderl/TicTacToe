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
    let circleTurn;
    const X_CLASS = "x";
    const CIRCLE_CLASS = "circle";
    // const cellElements = document.querySelectorAll('[class*="fielde"]');
    const cellElements = document.querySelectorAll('[class*="field"]');
    console.dir(cellElements); // look console log elements log.dir
    cellElements.forEach((cell) => {
      cell.addEventListener("click", handleClick, { once: true });
    });
}

function handleClick(e) {
  console.log("clicked");
  // placeMark
  // check for win
  // check for draw
  // switch turns
}

