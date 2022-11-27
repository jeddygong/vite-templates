// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  modules: [
    // ...
    '@pinia/nuxt',
    '@vueuse/nuxt'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";'	
        }
      }
    }
  }
})
