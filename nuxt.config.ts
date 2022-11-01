import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    typescript: {
        strict: true
    },
    css:[
        'primevue/resources/themes/tailwind-light/theme.css',       //theme
        'primevue/resources/primevue.min.css',                 //core css
        'primeicons/primeicons.css',
        '@/assets/css/fs-style.css'
    ],
    icon: 'awesome',

    Modules: [
        'nuxt-vite'
    ],
    vite:{
        server: {
            proxy: {
              // string shorthand
              //'/foo': 'http://localhost:4567',
              // with options
              '/api': {
                target: 'http://localhost:8082',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/')
              },

             
            }
          }
    }
})
