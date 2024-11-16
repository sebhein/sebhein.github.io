import type { NavigationItem } from './types';

const githubURL: string = 'https://github.com/sebhein/sebhein.github.io';
const navigationItems: NavigationItem[] = [
  { label: 'proj', href: '#proj' },
  { label: 'src', href: githubURL },
];

function createNavigation(): string {
  return `
    <nav class="bg-primary-800/50 border-b border-accent-400 px-4 py-3">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <a href="/" class="hover:text-primary-50 transition-colors flex items-center">
          <img src="/assets/logo-800x800.png" alt="bass.codes logo" class="h-8 w-8 mr-2" />
          <h1 id="bass.codes" class="text-primary-100 text-xl font-bold mb-0">bass.codes</h1>
        </a>
        <div class="space-x-4">
          <!-- Navigation items will be injected -->
        </div>
      </div>
    </nav>
  `;
}

function setupNavigation(): void {
  const nav = document.querySelector('nav div.space-x-4');
  if (!nav) return;

  nav.innerHTML = navigationItems
    .map(item => `<a href='${item.href}' class='nav-link'><span class='text-accent-500'>$</span>./${item.label}</a>`)
    .join('');
}

export function injectNavComponents(): void {
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = createNavigation();
    setupNavigation()
  }
}
