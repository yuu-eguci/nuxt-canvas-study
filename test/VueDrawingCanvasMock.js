export const reset = jest.fn()
export const redraw = jest.fn()

export default {
  name: 'VueDrawingCanvas',
  props: ['eraser', 'backgroundImage'],
  methods: {
    reset () { reset() },
    // redraw した時点の背景画像を記録します。
    redraw () { redraw(this.backgroundImage) }
  },
  render (h) {
    return h('canvas')
  }
}
