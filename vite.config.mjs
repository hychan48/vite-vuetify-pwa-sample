// Plugins
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Fonts from 'unplugin-fonts/vite'
import Layouts from 'vite-plugin-vue-layouts'
import Vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { VitePWA } from 'vite-plugin-pwa'
import Sitemap from 'vite-plugin-sitemap'
import { robots } from 'vite-plugin-robots'


// Utilities
import { defineConfig } from 'vite'

import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  // base:import.meta.env.VITE_BASE_URL,
  base: "/vite-vuetify-pwa-sample/",
  plugins: [
    VueRouter(),
    Layouts(),
    Vue({
      template: {transformAssetUrls}
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Components(),
    Fonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
      ],
      eslintrc: {
        enabled: false,
      },
      vueTemplate: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        // enabled: true,//check in dev
        enabled: false,
      },
      workbox: {
        sourcemap: true
      },
      //Check file names:
      includeAssets: ['favicon.ico', 'favicon.svg', 'apple-touch-icon-180x180.png', 'maskable-icon-512x512.png'],
      manifest: {
        name: 'Vite Vuetify 3 PWA',
        short_name: 'vite-vuetify-pwa-sample',
        description: 'hychan48/vite-vuetify-pwa-sample',
        theme_color: '#121212',//for dark theme
        //https://m2.material.io/design/color/dark-theme.html#properties
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),//vite-plugin-pwa
    Sitemap({

    }),
    robots({
      UserAgent: '*',
      Allow: '/',
      Sitemap: 'https://hychan48.github.io/vite-vuetify-pwa-sample/sitemap.xml',
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },

  server: {
    port: 3000,
  },
})
