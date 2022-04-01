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
import VueDrawingCanvas from 'vue-drawing-canvas'

interface DataType {
  eraser: boolean,
  backgroundImage: string
}

export default Vue.extend({
  name: 'TheCanvasView',

  components: {
    VueDrawingCanvas
  },

  props: {
  },

  data (): DataType {
    return {
      eraser: false,
      backgroundImage: ''
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

      // QUESTION: Object is possibly 'undefined'.Vetur(2532)
      //           ↓なんでやねん。これも違う場所の型不足か?
      //               -> なんかよくわからんけど ;(... as any) すると通る。
      //               -> any は object 型のひとつで、 undefined ではないことを意味する。
      //               -> 型が用意されていない package だったら as any 使おう...
      ;(this.$refs.VueCanvasDrawing as any).reset()
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
