import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import IndexPage from '@/pages/index.vue'

describe('IndexPage', () => {
  test('入力した数値と文字列を console.info に出力します', async () => {
    const info = jest.spyOn(console, 'info').mockImplementation(() => {})
    const wrapper = mount(IndexPage, {
      vuetify: new Vuetify(),
      stubs: { TheIndexHeader: true, TheCanvas: true },
      mocks: { $i18n: { setLocale: jest.fn() } }
    })
    const inputs = wrapper.findAll('input')

    await inputs.at(0).setValue('7')
    await inputs.at(1).setValue('nuxt')
    await wrapper.findAll('button').filter(b => b.text().startsWith('Console.log')).at(0).trigger('click')

    expect(info).toHaveBeenCalledWith({ theNumber: 7, theString: 'nuxt' })
    info.mockRestore()
  })

  test('言語ボタンで $i18n.setLocale を呼びます', async () => {
    const setLocale = jest.fn()
    const wrapper = mount(IndexPage, {
      vuetify: new Vuetify(),
      stubs: { TheIndexHeader: true, TheCanvas: true },
      mocks: { $i18n: { setLocale } }
    })
    const buttons = wrapper.findAll('button')

    await buttons.filter(b => b.text() === 'en').at(0).trigger('click')
    await buttons.filter(b => b.text() === 'ja').at(0).trigger('click')

    expect(setLocale.mock.calls).toEqual([['en'], ['ja']])
  })
})
