import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
  root: 'src',
  base: '/goit-team-CodeWave/',
  plugins: [injectHTML()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});