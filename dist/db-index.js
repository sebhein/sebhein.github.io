"use strict";
(() => {
  // src/pages/db-index/script.ts
  var DbAnimation = class {
    constructor() {
      this.rowIdx = 0;
      this.DELAY = 200;
      this.tableRows = Array.from(document.querySelectorAll(".db-animation-row")).filter((row) => !row.classList.contains("db-animation-header"));
      console.log(this.tableRows);
      this.status = document.getElementById("status");
      this.playBtn = document.getElementById("playBtn");
      this.nextFrame();
    }
    nextFrame() {
      this.tableRows.forEach((row2) => row2.classList.remove("highlight"));
      const row = this.tableRows[this.rowIdx];
      row.classList.add("highlight");
      const nameCol = row.querySelector(".db-animation-cell:nth-child(2)");
      this.status.textContent = `${nameCol?.textContent} == Maelcum`;
      if (nameCol?.textContent === "Maelcum") {
        console.log("flashing");
      } else if (nameCol?.textContent === "...") {
        console.log("wtf");
      }
      this.rowIdx = this.rowIdx == this.tableRows.length - 1 ? 0 : this.rowIdx + 1;
      window.setTimeout(() => this.nextFrame(), this.DELAY);
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    new DbAnimation();
  });
})();
//# sourceMappingURL=db-index.js.map
