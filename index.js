import { Board } from "./js/Board.js";

// console.log(Board.whichGame());
let board = new Board(90, 70); // x = %, y = vh;
// console.log(board.SayCoordinates());
// console.log(board.allCoordinates);
// board.newCoordinates = { x: 100, y: 250 };
// console.log(board.allCoordinates);

board.drawBoard(board);
