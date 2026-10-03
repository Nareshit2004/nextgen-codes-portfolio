import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Base path can be set if deploying to subdirectory
  // base: '/nextgen-portfolio/',
});
