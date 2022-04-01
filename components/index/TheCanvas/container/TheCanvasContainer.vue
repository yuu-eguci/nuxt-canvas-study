<script lang="ts">
import Vue, { CreateElement, VNode } from 'vue'
import TheCanvasView from '../presentational/TheCanvasView.vue'

export default Vue.extend({
  // NOTE: Container component の methods は、 view の描画に必要な情報を取得する methods を持つ。
  methods: {
  },

  render (h: CreateElement): VNode {
    return h(TheCanvasView, {
      props: {
      }
    })
  }
})
</script>
