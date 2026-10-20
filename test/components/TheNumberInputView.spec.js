import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import TheNumberInputView from '@/components/index/TheNumberInput/presentational/TheNumberInputView.vue'

const mountView = setTheNumber => mount(TheNumberInputView, {
  vuetify: new Vuetify(),
  propsData: { setTheNumber }
})

describe('TheNumberInputView', () => {
  test('入力した数値を setTheNumber に number として渡します', async () => {
    const setTheNumber = jest.fn()
    const wrapper = mountView(setTheNumber)

    await wrapper.find('input').setValue('42')

    expect(setTheNumber).toHaveBeenLastCalledWith(42)
  })

  test('クリアすると setTheNumber に 0 を渡します', async () => {
    const setTheNumber = jest.fn()
    const wrapper = mountView(setTheNumber)
    await wrapper.find('input').setValue('42')

    await wrapper.findComponent({ name: 'v-text-field' }).vm.$emit('input', null)

    expect(setTheNumber).toHaveBeenLastCalledWith(0)
  })
})
