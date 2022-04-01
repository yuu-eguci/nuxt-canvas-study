import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = (context) => {
  // console.info(`You access ${route.fullPath}`)
  console.info('ここは middleware/access-logging')
  console.info({ context })
}

export default myMiddleware
