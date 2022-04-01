<template>
  <v-text-field
    v-model="innerValue"
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
 innerValue: number
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
      get (): number {
        return this.innerValue
      },
      // ここに↓波線を出せよ!!!!! (:number ないとき Property 'setTheNumber' does not exist on type '(() => any) が this.setTheNumber(val) に出る)
      set (val: number): void {
        this.setTheNumber(val)
      }
    }
  },

  methods: {
  }
})
</script>
