nuxt-canvas-study
===

In this repository, I tried to study Nuxt.js + Object Style + Vuetify + Canvas + GitHub Pages.

- Docker: 対応!
- Node.js: 24!
- Linter: ESLint 8 (@nuxtjs/eslint-config-typescript)!
- Test: Jest 29 + Vue Test Utils 1!
- Nuxt: 2.18.1 / Vue: 2.7.16 / Vuetify: 2.7.2 / vue-drawing-canvas: 1.0.14!

## パッと実行してみたい

```bash
docker compose up --build
# http://localhost:3000/ を開く
```

## 開発コマンド

```bash
# Lint
docker compose run --rm app yarn lint

# Test
docker compose run --rm app yarn test

# GitHub Pages 用の静的ファイルを dist/ に生成
docker compose run --rm app yarn generate-for-github-pages
```

Docker なしなら Node.js 24 と Yarn 1 を使う。
`yarn install` のあと `yarn dev` で起動。
Node.js のバージョン指定は `.node-version`。

## CI/CD

- CI (`.github/workflows/ci.yml`): main への push と pull request で lint 、 test 、 `generate-for-github-pages` を実行。
- CD (`.github/workflows/cd-github-pages.yml`): Actions 画面から手動実行 (workflow_dispatch) すると、 `dist/` を gh-pages ブランチへデプロイ。

## 既知の制約

- Nuxt 2 / Vue 2 / Vuetify 2 はサポート終了済み。
- `yarn audit` の指摘が残る (2026-10-20 時点で Critical 2 、 High 74 、 Moderate 71 、 Low 18) 。
- 残りはすべて Nuxt 2 (webpack 4) 、 Vue 2 、 Vuetify 2 、 @nuxtjs/i18n 7 、 Jest 29 、 ESLint 8 系が固定している旧メジャー版の依存。
    - 例: tar 6 (terser-webpack-plugin 経由) 、 devalue 2 (@nuxtjs/i18n 経由) 、 webpack-dev-middleware 5 (@nuxt/webpack 経由) 。
    - 修正版がないか、互換性のない新メジャー版 (cookie 、 decode-uri-component 、 tmp のような 0.x 系は新マイナー版) にしかない。
    - そのため、 resolutions で修正版へ差し替えると依存元が動く保証がない。
    - 同じメジャー版で直せる minimatch 9 だけは、 package.json の resolutions で修正版にしている。
    - 解消には Nuxt 3 以降 (Vue 3 、 Vuetify 3) への移行が必要。
- 影響範囲
    - 大半はビルド時と dev サーバ実行時だけ使う依存。
    - 公開されるのは静的ファイルだけ (`ssr: false` 、 `target: 'static'`) なので、サーバ側の指摘は公開サイトには影響しない。
    - ブラウザへ配信される依存で指摘が残るのは vue と vuetify 。
        - vue: テンプレートコンパイラ (parseHTML) の ReDoS (CVE-2024-9506) 。本アプリは利用者の入力をテンプレートとして扱わない。
        - vuetify: VDatePicker の XSS (CVE-2025-8082) と、設定値をマージする処理の prototype pollution (CVE-2025-8083) 。本アプリは VDatePicker を使わず、設定値に外部入力を渡していない。
    - nuxt 自体への指摘 (navigateTo 、 `<NoScript>`) は Nuxt 3 の機能に関するもので、 Nuxt 2 にはその機能がない。
    - dev サーバは `compose.yaml` で `127.0.0.1` にだけ公開している。

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
    - components は components/.../container/...Container.vue と components/.../presentational/...View.vue で定義する
    - utils は export function と export class のかたちで定義する
    - static/ のファイルには router.base が適用されない。 GitHub Pages のように router.base を使う環境で表示する画像は assets/ に置いて import する
    - 自作 component に v-model を組み込まず、 setVariable 関数を props に渡す
    - `createElement()` has been called outside of render function. のエラーは nuxt.config.ts build.extend へ設定を追加して解消する
    - plugin は https://typescript.nuxtjs.org/cookbook/plugins のコードを改造して実装する
    - i18n は https://v7.i18n.nuxtjs.org/ (本プロジェクトで使っている @nuxtjs/i18n 7 のドキュメント) を参考に
    - 複数 .env.*** を切り替えるときは、 nuxt.config.ts 内で使う値と vue 側で使う値を別々に読み込む
        - nuxt.config.ts 内 (router.base など): nuxt.config.ts の先頭で `dotenv.config()` する
        - vue 側 (`process.env.ENV_NAME` など): @nuxtjs/dotenv の `filename` で同じ .env.*** を指定する
        - @nuxtjs/dotenv の代わりに、 `dotenv.config()` で読んだ値を publicRuntimeConfig に渡して `$config` から使う方法もある。本プロジェクトは @nuxtjs/dotenv を使っている
