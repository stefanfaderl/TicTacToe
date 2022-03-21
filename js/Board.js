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

  drawBoard(boardSize) {
    const main = document.querySelector("main");
    const newDiv = document.createElement("div");
    newDiv.classList.add("board-size");
    newDiv.style.width = `${boardSize.x}%`;
    newDiv.style.height = `${boardSize.y}vh`;
    main.append(newDiv);
    printFields();
  }
}

function printFields() {
  const newDiv = document.querySelector(".board-size");
  for (let i = 1; i < 10; i++) {
    const fields = document.createElement("div");
    fields.classList.add(`field-${i}`);
    newDiv.appendChild(fields);
  }
}
