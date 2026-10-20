import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import { reset, redraw } from '../VueDrawingCanvasMock'
import TheCanvasView from '@/components/index/TheCanvas/presentational/TheCanvasView.vue'
// jest.config.js の moduleNameMapper で vue-drawing-canvas はこの mock に差し替わっています。

const mountView = () => mount(TheCanvasView, {
  vuetify: new Vuetify(),
  mocks: { $t: key => key }
})

const findButton = (wrapper, key) => wrapper.findAll('button').filter(b => b.text() === `indexPage.theCanvas.${key}`).at(0)

const findCanvas = wrapper => wrapper.findComponent({ name: 'VueDrawingCanvas' })

describe('TheCanvasView', () => {
  test('消すボタンと書くボタンで eraser を切り替えます', async () => {
    const wrapper = mountView()
    expect(findCanvas(wrapper).props('eraser')).toBe(false)
    expect(findButton(wrapper, 'draw').attributes('disabled')).toBe('disabled')

    await findButton(wrapper, 'eraser').trigger('click')
    expect(findCanvas(wrapper).props('eraser')).toBe(true)
    expect(findButton(wrapper, 'eraser').attributes('disabled')).toBe('disabled')

    await findButton(wrapper, 'draw').trigger('click')
    expect(findCanvas(wrapper).props('eraser')).toBe(false)
  })

  test('リセットボタンでキャンバスを reset します', async () => {
    const wrapper = mountView()
    reset.mockClear()

    await findButton(wrapper, 'reset').trigger('click')

    expect(reset).toHaveBeenCalledTimes(1)
  })

  test('画像ボタンで背景画像を設定してから redraw します', async () => {
    const wrapper = mountView()
    redraw.mockClear()

    await findButton(wrapper, 'setImageA').trigger('click')
    await findButton(wrapper, 'setImageB').trigger('click')

    expect(redraw.mock.calls).toEqual([['penta.png'], ['hexa.png']])
  })

  test('ダウンロードボタンでキャンバスを JPEG ファイルとしてダウンロードします', async () => {
    const wrapper = mountView()
    const toDataURL = jest.spyOn(HTMLCanvasElement.prototype, 'toDataURL').mockReturnValue('data:image/jpeg;base64,AAAA')
    const clickedLinks = []
    const click = jest.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function () {
      clickedLinks.push({ href: this.href, download: this.download })
    })

    await findButton(wrapper, 'download').trigger('click')

    expect(toDataURL).toHaveBeenCalledWith('image/jpeg')
    expect(clickedLinks).toEqual([{ href: 'data:image/jpeg;base64,AAAA', download: 'canvas-image.jpg' }])
    toDataURL.mockRestore()
    click.mockRestore()
  })
})
