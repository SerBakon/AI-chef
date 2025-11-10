import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  // Load .env variables for current mode
  const env = loadEnv(mode, process.cwd(), '');

  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(env.VITE_PORT) || 5173, // fallback to default port
    },
  });
};
