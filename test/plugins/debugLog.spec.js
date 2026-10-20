import debugLog from '@/plugins/debugLog'

const injectDebug = (isDev) => {
  let debug
  debugLog({ isDev }, (_key, fn) => { debug = fn })
  return debug
}

describe('debugLog plugin', () => {
  test('開発環境では $debug が console.log を呼びます', () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => {})

    injectDebug(true)('hello', 1)

    expect(log).toHaveBeenCalledWith('hello', 1)
    log.mockRestore()
  })

  test('開発環境以外では $debug は何も出力しません', () => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => {})

    injectDebug(false)('hello')

    expect(log).not.toHaveBeenCalled()
    log.mockRestore()
  })
})
