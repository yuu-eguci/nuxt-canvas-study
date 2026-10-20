import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import TheStringInputView from '@/components/index/TheStringInput/presentational/TheStringInputView.vue'

const mountView = setTheString => mount(TheStringInputView, {
  vuetify: new Vuetify(),
  propsData: { setTheString }
})

describe('TheStringInputView', () => {
  test('入力した文字列を setTheString に渡します', async () => {
    const setTheString = jest.fn()
    const wrapper = mountView(setTheString)

    await wrapper.find('input').setValue('canvas')

    expect(setTheString).toHaveBeenLastCalledWith('canvas')
  })

  test('クリアすると setTheString に空文字を渡します', async () => {
    const setTheString = jest.fn()
    const wrapper = mountView(setTheString)
    await wrapper.find('input').setValue('canvas')

    await wrapper.findComponent({ name: 'v-text-field' }).vm.$emit('input', null)

    expect(setTheString).toHaveBeenLastCalledWith('')
  })
})
