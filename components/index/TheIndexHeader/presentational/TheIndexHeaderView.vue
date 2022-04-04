<template>
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
      <small>
        {{ envName }}
      </small>
    </h1>
  </v-alert>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheIndexHeaderView',

  data: () => ({
    envName: process.env.ENV_NAME
  })
})
</script>
