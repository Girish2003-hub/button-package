import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.ts', styles: 'src/styles.css' },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  external: ['react', 'react-dom'],
  // Keeps the directive so it works if you add hooks/state later
  banner: { js: '"use client";' },
});
