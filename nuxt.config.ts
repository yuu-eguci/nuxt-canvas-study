import { NuxtConfig } from '@nuxt/types'
import colors from 'vuetify/es5/util/colors'

const nuxtConfig: NuxtConfig = {
  router: {
    base: '/nuxt-canvas-study/',
    // nuxt.config.js に書いた middleware はすべての page 用。
    // WARN: ここは middlewares じゃダメ。 middleware.
    middleware: ['access-logging']
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-canvas-study',
    title: 'nuxt-canvas-study',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/nuxt-canvas-study//favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/debugLog.ts', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        locales: [
          { code: 'ja', name: 'Japanese', iso: 'ja_JP', file: 'ja.json' },
          { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' }
        ],
        defaultLocale: 'ja',
        langDir: 'locales/',
        vueI18n: {
          fallbackLocale: 'ja'
        },
        vueI18nLoader: true,
        lazy: true
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // XXX: 今の所まったく意味がわかっていないが、この設定を入れることで下記問題が解消する。
    //      - 外部 package の vue-drawing-canvas を rendering する段で、
    //        [Vue warn]: `createElement()` has been called outside of render function.
    //        Uncaught (in promise) TypeError: Cannot read properties of null (reading 'getContext')
    //        というエラーが発生する。
    extend (config) {
      // Include the compiler version of Vue so that <component-name> works
      (config.resolve as any).alias.vue$ = 'vue/dist/vue.esm.js'
    }
  }
}

export default nuxtConfig
