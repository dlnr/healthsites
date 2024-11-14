import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/healthsites/',
  root: 'src',
  css: {
    sourcemap: true,
    devSourcemap: true,
  },
  build: {
    cssMinify: false,
    devSourcemap: true,
    rollupOptions: {
	  input: {
        main: resolve(__dirname, 'src/index.html'),
        map: resolve(__dirname, 'src/map/index.html'),
        detail: resolve(__dirname, 'src/map/detail/index.html'),
      },
      output: {
        entryFileNames: `js/[name].js`,
        chunkFileNames: `js/[name].js`,
        assetFileNames: 'assets/[name].[ext]',
      }
    },
    outDir: '../public',
  	sourcemap: true,
    emptyOutDir: true,
  }
})
