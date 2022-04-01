<script lang="ts">
import Vue, { CreateElement, VNode } from 'vue'
import TheStringInputView from '@/components/index/TheStringInput/presentational/TheStringInputView.vue'

export default Vue.extend({
  props: {
    setTheString: {
      type: Function as Vue.PropType<(newValue: string) => void>,
      required: true
    }
  },

  // NOTE: Container component の methods は、 view の描画に必要な情報を取得する methods を持つ。
  methods: {
  },

  render (h: CreateElement): VNode {
    return h(TheStringInputView, {
      props: {
        setTheString: this.setTheString
      }
    })
  }
})
</script>
