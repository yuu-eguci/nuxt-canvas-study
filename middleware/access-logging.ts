import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = (context) => {
  console.info(JSON.stringify({
    hereIs: 'middleware/access-logging',
    fullPathIs: context.route.fullPath
  }))
}

export default myMiddleware
