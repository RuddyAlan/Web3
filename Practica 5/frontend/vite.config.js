import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()], // Añade el plugin de Vue
  server: {
    port: 5173,
    strictPort: false, // Cambiado a false para evitar conflictos de puerto
  },
});