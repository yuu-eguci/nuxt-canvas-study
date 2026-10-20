import accessLogging from '@/middleware/access-logging'

describe('access-logging middleware', () => {
  test('アクセスしたパスを $debug に渡します', () => {
    const $debug = jest.fn()

    accessLogging({ app: { $debug }, route: { fullPath: '/sample-page?x=1' } })

    expect($debug).toHaveBeenCalledWith(JSON.stringify({
      hereIs: 'middleware/access-logging',
      fullPathIs: '/sample-page?x=1'
    }))
  })
})
