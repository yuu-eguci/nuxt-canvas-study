<template>
  <v-text-field
    v-model="value"
    solo
    label="The number input"
    clearable
    type="number"
  />
</template>

<script lang="ts">
import Vue from 'vue'

// NOTE: export type DataType = { でも良さそうだけど、 interface にしてみる。
interface DataType {
 innerValue: number | string
}

export default Vue.extend({
  name: 'TheNumberInputView',

  components: {
  },

  props: {
    setTheNumber: {
      type: Function as Vue.PropType<(newValue: number) => void>,
      required: true
    }
  },

  data (): DataType {
    return {
      innerValue: 0
    }
  },

  computed: {
    value: {
      get (): number | string {
        return this.innerValue
      },
      // ここに↓波線を出せよ!!!!! (:number ないとき Property 'setTheNumber' does not exist on type '(() => any) が this.setTheNumber(val) に出る)
      // NOTE: v-text-field は入力値を string で、クリア時は null で渡してきます。
      set (val: number | string | null): void {
        this.innerValue = val ?? ''
        this.setTheNumber(Number(this.innerValue))
      }
    }
  },

  methods: {
  }
})
</script>
