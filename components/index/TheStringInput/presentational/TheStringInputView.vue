<template>
  <v-text-field
    v-model="value"
    solo
    label="The string input"
    clearable
    type="text"
    counter
    maxlength="20"
  />
</template>

<script lang="ts">
import Vue from 'vue'

// NOTE: export type DataType = { でも良さそうだけど、 interface にしてみる。
interface DataType {
 innerValue: string
}

export default Vue.extend({
  name: 'TheStringInputView',

  components: {
  },

  props: {
    setTheString: {
      type: Function as Vue.PropType<(newValue: string) => void>,
      required: true
    }
  },

  data (): DataType {
    return {
      innerValue: ''
    }
  },

  computed: {
    value: {
      get (): string {
        return this.innerValue
      },
      // ここに↓波線を出せよ!!!!! (:string ないとき Property 'setTheString' does not exist on type '(() => any) が this.setTheString(val) に出る)
      // NOTE: v-text-field は入力値を string で、クリア時は null で渡してきます。
      set (val: string | null): void {
        this.innerValue = val ?? ''
        this.setTheString(this.innerValue)
      }
    }
  },

  methods: {
  }
})
</script>
