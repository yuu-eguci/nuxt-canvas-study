<template>
  <v-row justify="center">
    <v-col cols="12">
      <TheIndexHeader />
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <TheCanvas />
    </v-col>
    <v-col
      cols="12"
      md="6"
    >
      <!--
        QUESTION: こうやって、自作 component に v-model を定義するときは……
                  どう定義する?
                  あるいは、定義せずにどう実装する?
      -->
      <TheNumberInput
        :set-the-number="setTheNumber"
      />
      <TheStringInput
        :set-the-string="setTheString"
      />
      <v-btn @click="onClickConsoleLogButton">
        Console.log the number and the string
      </v-btn>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
// QUESTION: これ↓は props とか無いので presentational/View.vue だけ用意している。
//           それでいいのかな?
//           -> それで OK. Dialog とかもそう。
import TheIndexHeader from '@/components/index/TheIndexHeader/presentational/TheIndexHeaderView.vue'
import TheCanvas from '@/components/index/TheCanvas/container/TheCanvasContainer.vue'
import TheNumberInput from '@/components/index/TheNumberInput/container/TheNumberInputContainer.vue'
import TheStringInput from '@/components/index/TheStringInput/container/TheStringInputContainer.vue'

// NOTE: vue-cli と近い使用感を実現するため Object Style で実装します。
export default Vue.extend({
  name: 'IndexPage',

  components: {
    TheIndexHeader,
    TheCanvas,
    TheNumberInput,
    TheStringInput
  },

  data: () => ({
    theNumber: 0,
    theString: ''
  }),

  methods: {
    // 子コンポーネントに、 theNumber を変更してもらうための method だよ。
    setTheNumber (newValue: number) {
      this.theNumber = newValue
    },

    setTheString (newValue: string) {
      this.theString = newValue
    },

    // QUESTION: このような、クリックしたときに発火させる関数は
    //           container に定義する? presentational に定義する?
    //           -> 役割としては、 container
    //           -> onClick の処理が複数あったりしたら presentational に定義することもある。
    onClickConsoleLogButton () {
      console.info({
        theNumber: this.theNumber,
        theString: this.theString
      })
    }
  }
})
</script>
