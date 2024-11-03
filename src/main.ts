import { injectNavComponents } from './nav';

class BassCodes {
  constructor() {
    this.initialize();
  }

  private initialize(): void {
    injectNavComponents();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new BassCodes();
});
