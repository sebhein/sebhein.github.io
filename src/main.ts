import type { NavigationItem } from './types';

class BassCodes {
  private navigationItems: NavigationItem[] = [
    { label: "works", href: "#works" },
    { label: "github", href: "https://github.com/sebhein" },
    { label: "resume", href: "#resume" },
  ];

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.setupNavigation();
    this.setupEventListeners();
  }

  private setupNavigation(): void {
    const nav = document.querySelector('nav div.space-x-4');
    if (!nav) return;

    nav.innerHTML = this.navigationItems
      .map(item => `<a href="${item.href}" class="nav-link"><span class="text-accent-500">$</span>./${item.label}</a>`)
      .join('');
  }

  private setupEventListeners(): void {
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
      button.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLButtonElement;
        this.handleButtonClick(target);
      });
    });
  }

  private handleButtonClick(button: HTMLButtonElement): void {
    const action = button.dataset.action;
    switch(action) {
      case 'works':
        window.location.href = '#works';
        break;
      case 'github':
        window.location.href = 'https://github.com/sebhein';
        break;
    }
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BassCodes();
});
