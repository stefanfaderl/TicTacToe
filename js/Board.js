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
    // 1. HTML Objekte erzeugen und hinzufügen -> sehr effiziente und umfangreichste Methode
    console.log(boardSize.x);
    console.log(boardSize.y);

    const main = document.querySelector("main");
    const newDiv = document.createElement("div");
    newDiv.classList.add("board-size");
    newDiv.style.width = `${boardSize.x}%`;
    newDiv.style.height = `${boardSize.y}vh`;
    //newDiv.textContent = "Seas";
    main.append(newDiv);

    printFields();

    /*     const ul = document.querySelector(".liste");
    const newListItem = document.createElement("li"); // erstellt sowas: <li></li> dem Liste element wird somit der Text übergeben, den Inhalt
    // so: <li>Der Rettich ist scharf</li>
    newListItem.textContent = "Der Rettich ist scharf";
    // so: <li class="special">Der Rettich ist scharf</li>
    newListItem.classList.add("special"); // klasse übergeben

    newListItem.addEventListener("click", () => {
      // () ist quasi wie Function () ohne namen
      console.log("Hallo, ich bins der Rettich!");
    });

    ul.append(newListItem);
    // wenn mans z.B. oben haben möchte in der ul, gibt´s auch prepend
    ul.prepend(newListItem);
    ul.append(newListItem); */
  }
}

function printFields() {
  const newDiv = document.querySelector(".board-size");
  // noch mit anderen for loops probieren
  for (let i = 1; i < 10; i++) {
    const fields = document.createElement("div");
    fields.classList.add(`field-${i}`);
    newDiv.appendChild(fields);
  }
}
