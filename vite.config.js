import {fileURLToPath, URL} from 'node:url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({mode}) => {
  const isProd = mode === 'production'
  return {
     //base: 'http://www.carvalhoadvocaciarr.com.br/',
    plugins: [
      vue(),
      !isProd && vueDevTools(),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        },
      },
      devSourcemap: true,
    },
    esbuild: {
      drop: isProd ? ['console', 'debugger'] : [],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('vue') || id.includes('pinia') || id.includes('router')) {
                return 'vendor-vue'
              }
              if (id.includes('bootstrap') || id.includes('popper')) {
                return 'vendor-ui'
              }
              if (id.includes('fontawesome') || id.includes('flaticon')) {
                return 'vendor-icons'
              }
              if (id.includes('swiper') || id.includes('aos') || id.includes('wow')) {
                return 'vendor-libs'
              }
              return 'vendor'
            }
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },
  }
})
