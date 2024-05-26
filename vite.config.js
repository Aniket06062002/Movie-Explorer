import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all IPs
    port: 3000,      // Specify the port you want to use (default is 3000)
    open: true,      // Optional: Opens the browser automatically
  },
});
