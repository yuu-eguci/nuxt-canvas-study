# nuxt-canvas-study

✌🏽✌🏽 In this repository, I tried to study Nuxt.js + Object Style + Vuetify + Canvas + GitHub Pages.

## Project setup

```bash
yarn install
yarn dev
```

## Nuxt + TypeScript の学び

- ベースは `npx create-nuxt-app PROJECT_NAME` で作る
- このコマンド↑の最中で Axios とか ESLint を選び損ねないように注意
- TypeScript
    - https://typescript.nuxtjs.org/guide/setup/ に従って進めていくが、ドキュメントのバージョンが古いみたいで、やらないといけなかったのは types/vue-shim.d.ts を作るところだけ
    - TypeScript を選択しても、 Nuxt の初期状態は JavaScript である
    - Nuxt 3 についてはもっと進んでいて、最初から nuxt.config.ts になってるらしい
    - StandardJS は使わない
    - Vetur によるよくわからんエラーは、同じファイルの別のところに型を正しく指定していないことが原因で発生することが多い気がする。波線が出ているところが原因とは限らない
    - this.$refs.Foo が型エラーを発生させるときは、 ;(this.$refs.Foo as any) とする
    - 使わない引数には _ をつける。でないと @typescript-eslint/no-unused-vars に怒られる
    - 新しいパッケージを足したら tsconfig.jsonのcompilerOptions.types[] に設定を足す、という流れがあるっぽい
- Nuxt
    - page は pages/page/index.vue に定義する
    - middleware は middleware/...ts に定義する (middlewares ではダメ。これは罠)
    - components は components/container/...Container.vue と component/presentational/...View.vue で定義する
    - utils は export function と export class のかたちで定義する
    - static/ のファイルには router.base が適用されない
    - 自作 component に v-model を組み込まず、 setVariable 関数を props に渡す
    - `createElement()` has been called outside of render function. のエラーは nuxt.config.ts build.extend へ設定を追加して解消する
    - plugin は https://typescript.nuxtjs.org/cookbook/plugins のコードを改造して実装する
    - i18n は https://i18n.nuxtjs.org/ を参考に
    - 複数 .env を利用するときは @nuxt/dotenv を使う。 dotenv はもう古い、という情報があるが、それは単一 .env を利用する場合の話。複数 .env.*** を利用するなら dotenv でなきゃダメ
