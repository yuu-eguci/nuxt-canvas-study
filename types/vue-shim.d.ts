// .d. は type の定義を意味するみたい?
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*.png' {
  const src: string
  export default src
}
