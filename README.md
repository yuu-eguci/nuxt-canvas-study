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
- `yarn audit` の残件は Critical 2 / High 74 / Moderate 71 / Low 18 (2026-10-20 確認) 。
- 残件は旧バージョンの依存由来。修正版がないものや、互換性のない更新が必要なものがある。
- 同じメジャー版で更新できる minimatch 9 は `resolutions` で修正版を指定。
- 残件を解消するには、 Nuxt 3 以降 / Vue 3 / Vuetify 3 などへの移行が必要。
- 大半はビルド・ dev サーバ用の依存。公開するのは静的ファイルのみ。
- ブラウザ側の Vue にはテンプレートコンパイラの ReDoS 指摘が残る (CVE-2024-9506) 。このアプリは入力をテンプレートとして扱わない。
- Vuetify には VDatePicker の XSS (CVE-2025-8082) と設定マージ時の prototype pollution (CVE-2025-8083) の指摘が残る。このアプリは VDatePicker を使わず、設定値に外部入力を渡していない。
- ブラウザ側の cookie 0.5 (@nuxtjs/i18n 経由) にも name / path / domain の検証不足の指摘が残る (CVE-2024-47764) 。このアプリでは、これらの値に @nuxtjs/i18n の固定値を使う。
- Nuxt の `navigateTo`・ `<NoScript>` に関する指摘は、利用していない Nuxt 3 の機能が対象。
- Docker の dev サーバは `127.0.0.1` にだけ公開。

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
