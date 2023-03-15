import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'; // --> import it
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
   server: {
      port: 4200,
      host: 'localhost',
   },
   plugins: [react(), tsconfigPaths()],
   resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
   },
});
