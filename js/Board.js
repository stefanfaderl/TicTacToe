export class Board {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  SayCoordinates() {
    return `Size of Board in X: ${this.x} and Y: ${this.y}`;
  }

  get allCoordinates() {
    return `${this.x} ${this.y}`;
  }

  set newCoordinates(data) {
    this.x = data.x;
    this.y = data.y;
  }

  static whichGame() {
    return "Tic Tac Toe";
  }

  drawBoard() {
  }
}
