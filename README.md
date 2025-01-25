
# Tutorial Instalasi Proyek Vue 3 dengan Vite

1. Install Node.js
   - Download dan install Node.js versi terbaru dari https://nodejs.org/.
   - Pastikan Node.js sudah terinstall dengan perintah:
     ```
     node -v
     npm -v
     ```

2. Clone Repository dari GitHub
   - Clone repository proyek Anda:
     git clone https://github.com/ridoananda/portfolio-2023
   - Masuk ke folder proyek:
     `cd portfolio-2023`

3. Install Dependencies
   - Jalankan perintah berikut untuk menginstal semua dependencies:
     ```
     npm install
     ```

4. Menjalankan Proyek Secara Lokal
   - Jalankan server pengembangan:
     ```
     npm run dev
     ```
   - Buka browser Anda dan akses: `http://localhost:5173`

5. Build Proyek
   - Untuk membuat build produksi, jalankan:
     ```
     npm run build
     ```
   - File hasil build akan tersedia di folder `dist`.

6. Deploy ke GitHub Pages (opsional)
   - Install plugin vite-plugin-gh-pages:
     ```
     npm install -D vite-plugin-gh-pages
     ```
   - Tambahkan konfigurasi deploy di file vite.config.js:
     ```js
     import { defineConfig } from 'vite';
     import vue from '@vitejs/plugin-vue';
     import { ghPages } from 'vite-plugin-gh-pages';

     export default defineConfig({
       plugins: [vue(), ghPages()],
       base: '/portfolio-2023/',
     });
     ```
   - Deploy dengan perintah:
     ```
     npm run deploy
     ```

   Repository Anda sekarang akan dideploy ke GitHub Pages di URL:
   https://<USERNAME>.github.io/portfolio-2023

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
