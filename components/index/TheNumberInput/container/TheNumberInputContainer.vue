<script lang="ts">
import Vue, { CreateElement, VNode } from 'vue'
import TheNumberInputView from '@/components/index/TheNumberInput/presentational/TheNumberInputView.vue'

export default Vue.extend({
  props: {
    setTheNumber: {
      type: Function as Vue.PropType<(newValue: number) => void>,
      required: true
    }
  },

  // NOTE: Container component の methods は、 view の描画に必要な情報を取得する methods を持つ。
  methods: {
  },

  render (h: CreateElement): VNode {
    return h(TheNumberInputView, {
      props: {
        setTheNumber: this.setTheNumber
      }
    })
  }
})
</script>
