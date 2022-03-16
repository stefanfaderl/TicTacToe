import { Board } from "./js/Board.js";

// console.log(Board.whichGame());
let board = new Board(350, 300); // in px
// console.log(board.SayCoordinates());
// console.log(board.allCoordinates);
// board.newCoordinates = { x: 100, y: 250 };
// console.log(board.allCoordinates);

board.drawBoard();
