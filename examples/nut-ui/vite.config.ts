import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import * as path from 'path'
import { NutUiResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@nutui/nutui/dist/styles/variables.scss";'
      }
    }
  },
  plugins: [
    vue(),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Layouts(),
    Inspect(),
    Components({
      dts: true,
      include: [/\.vue$/, /\.md$/],
      resolvers: [
        NutUiResolver(),
      ],
    })
  ]
})
