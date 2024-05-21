// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  runtimeConfig: {
    // 只在服务器端可用的私有键
    weatherKey: '',
    musicApi: ''
  },
  modules: [
    '@element-plus/nuxt',
    // https://icones.js.org/collection/bxl
    'nuxt-icon',
  ],
})

