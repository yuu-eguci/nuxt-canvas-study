<template>
  <v-row>
    <v-col class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

// NOTE: vue-cli と近い使用感を実現するため Object Style で実装します。
export default Vue.extend({
  components: {
  },
  mounted () {
    // 動作確認用、意味のないコード
    const foo: string = ''
    console.log(foo)
  }
})
</script>
