<template>
  <v-card
    elevation="2"
    class="p-3"
  >
    <v-card-title>
      {{ $t('indexPage.theCanvas.theHandwriting') }}
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
            {{ $t('indexPage.theCanvas.draw') }}
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
            {{ $t('indexPage.theCanvas.eraser') }}
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
            {{ $t('indexPage.theCanvas.reset') }}
          </v-btn>
        </v-col>
        <v-col
          cols="6"
        >
          <v-btn
            block
            @click="downloadCanvas"
          >
            {{ $t('indexPage.theCanvas.download') }}
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
            {{ $t('indexPage.theCanvas.setImageA') }}
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
            {{ $t('indexPage.theCanvas.setImageB') }}
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
      const canvas = (this.$refs.VueCanvasDrawing as any).$el
      const base64 = canvas.toDataURL('image/jpeg')
      const link = document.createElement('a')
      link.href = base64
      link.download = 'canvas-image'
      link.click()
    },

    onClickResetCanvas (): void {
      // QUESTION: Object is possibly 'undefined'.Vetur(2532)
      //           ↓なんでやねん。これも違う場所の型不足か?
      //               -> なんかよくわからんけど ;(... as any) すると通る。
      //               -> any は object 型のひとつで、 undefined ではないことを意味する。
      //               -> 型が用意されていない package だったら as any 使おう...
      ;(this.$refs.VueCanvasDrawing as any).reset()
    },

    onClickSetImageA (): void {
      this.backgroundImage = require('@/assets/penta.png')
      ;(this.$refs.VueCanvasDrawing as any).redraw()
    },

    onClickSetImageB (): void {
      this.backgroundImage = require('@/assets/hexa.png')
      ;(this.$refs.VueCanvasDrawing as any).redraw()
    }
  }
})
</script>
