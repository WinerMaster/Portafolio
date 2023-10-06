import { defineConfig } from 'vite';
import ReactRefresh from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [ReactRefresh()],
});