"use strict";
(() => {
  // src/main.ts
  var BassCodes = class {
    constructor() {
      this.navigationItems = [
        { label: "works", href: "#works" },
        { label: "github", href: "https://github.com/sebhein" },
        { label: "resume", href: "#resume" }
      ];
      this.initialize();
    }
    initialize() {
      this.setupNavigation();
      this.setupEventListeners();
    }
    setupNavigation() {
      const nav = document.querySelector("nav div.space-x-4");
      if (!nav)
        return;
      nav.innerHTML = this.navigationItems.map((item) => `<a href="${item.href}" class="nav-link"><span class="text-accent-500">$</span>./${item.label}</a>`).join("");
    }
    setupEventListeners() {
      document.querySelectorAll(".btn-primary, .btn-secondary").forEach((button) => {
        button.addEventListener("click", (e) => {
          const target = e.target;
          this.handleButtonClick(target);
        });
      });
    }
    handleButtonClick(button) {
      const action = button.dataset.action;
      switch (action) {
        case "works":
          window.location.href = "#works";
          break;
        case "github":
          window.location.href = "https://github.com/sebhein";
          break;
      }
    }
  };
  document.addEventListener("DOMContentLoaded", () => {
    new BassCodes();
  });
})();
