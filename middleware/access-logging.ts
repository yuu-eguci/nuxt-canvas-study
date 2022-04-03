import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = (context): void => {
  console.warn({ context })
  context.app.$debug(JSON.stringify({
    hereIs: 'middleware/access-logging',
    fullPathIs: context.route.fullPath
  }))
}

export default myMiddleware
