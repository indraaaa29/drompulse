import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        hostel_map: resolve(__dirname, 'hostel_map.html'),
        savings_timeline: resolve(__dirname, 'savings_timeline.html'),
        ai_advisor: resolve(__dirname, 'ai_advisor.html'),
        sustainability_impact: resolve(__dirname, 'sustainability_impact.html')
      }
    }
  }
});
