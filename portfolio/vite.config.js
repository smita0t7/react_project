// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '5173-smita0t7-reactproject-5531ccsmc5f.ws-us119.gitpod.io'
    ]
  }
});

