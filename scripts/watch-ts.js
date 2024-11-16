const { context } = require('esbuild');
const path = require('path');
const fs = require('fs');

const rootDir = path.resolve(__dirname, '..');
const pagesDir = path.join(rootDir, 'src/pages');

async function startBuilders() {
  // Shared build options
  const buildOptions = {
    bundle: true,
    sourcemap: true,
    logLevel: 'info',
  };

  // Main site build context
  console.log('Setting up main.ts builder...');
  const mainCtx = await context({
    ...buildOptions,
    entryPoints: ['src/main.ts'],
    outfile: 'dist/bundle.js',
  });

  await mainCtx.watch();
  console.log('Watching main.ts...');

  // List all directories in pages
  const pages = fs.readdirSync(pagesDir);
  console.log('Found pages:', pages);
  
  for (const page of pages) {
    const tsPath = path.join(pagesDir, page, 'script.ts');
    console.log(`Checking for ${tsPath}`);
    
    if (fs.existsSync(tsPath)) {
      console.log(`Found script for ${page}, starting builder...`);
      
      const pageCtx = await context({
        ...buildOptions,
        entryPoints: [tsPath],
        outfile: `dist/${page}.js`,
      });
      
      await pageCtx.rebuild();
      await pageCtx.watch();
      
      console.log(`Builder started for ${page}`);
    } else {
      console.log(`No script.ts found for ${page}`);
    }
  }

  console.log('All builders started. Press Ctrl+C to stop.');
}

startBuilders().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});

// Handle cleanup on exit
process.on('SIGTERM', () => process.exit(0));
process.on('SIGINT', () => process.exit(0));
