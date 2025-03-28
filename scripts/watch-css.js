const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Get absolute paths
const rootDir = path.resolve(__dirname, '..');
const pagesDir = path.join(rootDir, 'src/pages');
const tailwindBin = path.join(rootDir, 'node_modules/.bin/tailwindcss');

// Check if tailwindcss exists
if (!fs.existsSync(tailwindBin)) {
    console.error('tailwindcss not found in node_modules. Please run npm install');
    process.exit(1);
}

// Start the main CSS watcher
spawn(tailwindBin, [
    '-i', path.join(rootDir, 'styles/main.css'),
    '-o', path.join(rootDir, 'styles/output.css'),
    '--watch'
], { stdio: 'inherit' });

// Find all page CSS files
const pages = fs.readdirSync(pagesDir);

// Start a watcher for each page's CSS
pages.forEach(page => {
    const cssPath = path.join(pagesDir, page, 'styles.css');
    if (fs.existsSync(cssPath)) {
        console.log(`Starting watcher for ${cssPath}`);
        spawn(tailwindBin, [
            '-i', cssPath,
            '-o', path.join(rootDir, 'styles', `${page}.css`),
            '--watch'
        ], { stdio: 'inherit' });
    }
});
