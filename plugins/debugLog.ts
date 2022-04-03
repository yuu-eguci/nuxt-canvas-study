// NOTE: Plugin の作り方はまだよくわかっていないが、
//       typescript.nuxtjs.org のコード↓をそのままコピペし、 $debugLog 用に改造しています。
//       https://typescript.nuxtjs.org/cookbook/plugins
import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  // this.$debugLog inside Vue components
  interface Vue {
    $debugLog(...args: any[]): void
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$debugLog inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $debugLog(...args: any[]): void
  }
  // nuxtContext.$debugLog
  interface Context {
    $debugLog(...args: any[]): void
  }
}

declare module 'vuex/types/index' {
  // this.$debugLog inside Vuex stores
  // FIXME: どう解決したらよいのかわかんない。
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $debugLog(...args: any[]): void
  }
}

// NOTE: _ をつけると、 "使わない引数なので気にしないでね" という意味になる。らしい。
const myPlugin: Plugin = (context, inject) => {
  if (context.isDev) {
    // eslint-disable-next-line no-console
    inject('debugLog', (...args: any[]) => console.log(...args))
  }
}

export default myPlugin
