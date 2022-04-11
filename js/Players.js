"use strict";
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
    const pTagX = document.createElement("p");
    pTagX.classList.add("p-x");
    const pTagO = document.createElement("p");
    pTagO.classList.add("p-o");

    boardSize.after(section);
    section.appendChild(pTagX);
    section.appendChild(pTagO);
    pTagX.textContent = "Points " + this.p1.playername + ": 0";
    pTagO.textContent = "Points " + this.p2.playername + ": 0";
  }
}
