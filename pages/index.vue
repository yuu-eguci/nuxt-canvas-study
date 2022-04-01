<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-alert
        dense
        text
        type="success"
      >
        <div>
          Nuxt.js + Object Style + Vuetify + Canvas + GitHub Pages
          <v-btn
            class="ms-2"
            elevation="2"
            fab
            x-small
            color="teal"
            href="https://github.com/yuu-eguci/nuxt-canvas-study"
            target="_blank"
          >
            <v-icon>
              mdi-github
            </v-icon>
          </v-btn>
        </div>
        <h1>
          Nuxt-Canvas-Study
        </h1>
      </v-alert>
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
      TheNumberInput, TheStringInput
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import TheCanvas from '@/components/index/TheCanvas/container/TheCanvasContainer.vue'

// NOTE: vue-cli と近い使用感を実現するため Object Style で実装します。
export default Vue.extend({
  name: 'IndexPage',

  components: {
    TheCanvas
  }
})
</script>
