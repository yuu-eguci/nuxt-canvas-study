<template>
  <v-card
    elevation="2"
    class="p-3"
  >
    <v-card-title>
      The handwriting
    </v-card-title>
    <v-card-text>
      <div>
        <VueDrawingCanvas
          ref="VueCanvasDrawing"
          :eraser="eraser"
          background-color="#fffaeb"
          width="300"
          height="200"
          :background-image="backgroundImage"
        />
      </div>
    </v-card-text>
    <v-card-text>
      <v-row
        class="mt-2"
      >
        <v-col
          cols="6"
        >
          <v-btn
            block
            color="success"
            :disabled="!eraser"
            @click="() => { eraser = false }"
          >
            Draw
          </v-btn>
        </v-col>
        <v-col
          cols="6"
        >
          <v-btn
            block
            color="warning"
            :disabled="eraser"
            @click="() => { eraser = true }"
          >
            Eraser
          </v-btn>
        </v-col>
        <v-col
          cols="6"
        >
          <v-btn
            block
            color="error"
            @click.prevent="onClickResetCanvas"
          >
            Reset
          </v-btn>
        </v-col>
        <v-col
          cols="6"
        >
          <v-btn
            block
            @click="downloadCanvas"
          >
            Download
          </v-btn>
        </v-col>
        <v-col
          cols="6"
        >
          <v-btn
            block
            dark
            color="teal"
            @click="onClickSetImageA"
          >
            Set image A
          </v-btn>
        </v-col>
        <v-col
          cols="6"
        >
          <v-btn
            block
            dark
            color="teal"
            @click="onClickSetImageB"
          >
            Set image B
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheCanvasView',

  components: {
  },

  props: {
  },

  data () {
    return {
      eraser: false,
      backgroundImage: null
    }
  },

  computed: {
  },

  methods: {
    downloadCanvas (): void {
      console.info('downloadCanvas')
    },

    onClickResetCanvas (): void {
      console.info('onClickResetCanvas')
    },

    onClickSetImageA (): void {
      console.info('onClickSetImageA')
    },

    onClickSetImageB (): void {
      console.info('onClickSetImageB')
    }
  }
})
</script>
