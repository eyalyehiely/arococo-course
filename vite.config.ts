import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT as string) || 4173, // Use the port set by Railway or default to 4173
    host: true, // Expose the server to the network
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});