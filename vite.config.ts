import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import sass from 'sass';

export default defineConfig({
  plugins: [
    react(),

    checker({
      typescript: {
        buildMode: true,
      },
      eslint: {
        lintCommand: 'eslint .',
        useFlatConfig: true,
      },
    }),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
