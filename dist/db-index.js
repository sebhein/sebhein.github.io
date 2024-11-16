"use strict";
(() => {
  // src/pages/db-index/script.ts
  var DbAnimation = class {
    constructor() {
      this.tableRows = Array.from(document.querySelectorAll(".db-animation-row")).filter((row) => !row.classList.contains("db-animation-header"));
      console.log(this.tableRows);
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    new DbAnimation();
  });
})();
//# sourceMappingURL=db-index.js.map
