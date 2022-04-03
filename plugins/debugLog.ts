// NOTE: Plugin の作り方はまだよくわかっていないが、
//       typescript.nuxtjs.org のコード↓をそのままコピペし、 $debug 用に改造しています。
//       https://typescript.nuxtjs.org/cookbook/plugins
import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  // this.$debug inside Vue components
  interface Vue {
    $debug(...args: any[]): void
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$debug inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $debug(...args: any[]): void
  }
  // nuxtContext.$debug
  interface Context {
    $debug(...args: any[]): void
  }
}

declare module 'vuex/types/index' {
  // this.$debug inside Vuex stores
  // FIXME: どう解決したらよいのかわかんない。
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $debug(...args: any[]): void
  }
}

// NOTE: _ をつけると、 "使わない引数なので気にしないでね" という意味になる。らしい。
const myPlugin: Plugin = (context, inject) => {
  if (!context.isDev) {
    return
  }
  // eslint-disable-next-line no-console
  inject('debug', (...args: any[]) => console.log(...args))
}

export default myPlugin
