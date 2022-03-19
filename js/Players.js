export class Players {
  constructor(playername) {
    this.playername = playername;
  }

  static printPlayers(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
    const boardSize = document.querySelector(".board-size");
    const section = document.createElement("section");
    section.classList.add("score-container");
    const pTag = document.createElement("p");
    const pTag2 = document.createElement("p");

    boardSize.after(section);
    section.appendChild(pTag);
    section.appendChild(pTag2);
    pTag.textContent = "Points " + this.p1.playername + " :";
    pTag2.textContent = "Points " + this.p2.playername + " :";
  }
}
