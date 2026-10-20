import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import TheSampleView from '@/components/TheSample/presentational/TheSampleView.vue'

describe('TheSampleView', () => {
  test('画像を assets から読み込みます (router.base が適用されるようにするため)', () => {
    const wrapper = mount(TheSampleView, {
      vuetify: new Vuetify(),
      propsData: { getRandomData: () => 'foo', alan: 'alan' }
    })

    expect(wrapper.find('img').attributes('src')).toBe('v.png')
  })
})
