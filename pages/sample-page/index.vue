<template>
  <div>
    <TheSampleContainer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { foo, bar } from '@/utils/CommonUtils'
import { Baz } from '@/utils/Baz'
import TheSampleContainer from '@/components/TheSample/container/TheSampleContainer.vue'

// NOTE: vue-cli と近い使用感を実現するため Object Style で実装します。
export default Vue.extend({
  name: 'SamplePage',
  components: {
    TheSampleContainer
  },
  mounted () {
    // 動作確認用、意味のないコード
    // const foo: string = ''
    // console.log(foo)

    // eslint-disable-next-line
    this.$debugLog(foo())
    this.$debugLog(bar())
    this.$debugLog(new Baz(1, 2))
  }
})
</script>
