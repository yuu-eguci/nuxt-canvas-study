# nuxt-canvas-study

âð½âð½ In this repository, I tried to study Nuxt.js + Object Style + Vuetify + Canvas + GitHub Pages.

## Project setup

```bash
yarn install
yarn dev
```

## Nuxt + TypeScript ã®å­¦ã³

- ãã¼ã¹ã¯ `npx create-nuxt-app PROJECT_NAME` ã§ä½ã
- ãã®ã³ãã³ãâã®æä¸­ã§ Axios ã¨ã ESLint ãé¸ã³æã­ãªãããã«æ³¨æ
- TypeScript
    - https://typescript.nuxtjs.org/guide/setup/ ã«å¾ã£ã¦é²ãã¦ãããããã­ã¥ã¡ã³ãã®ãã¼ã¸ã§ã³ãå¤ãã¿ããã§ããããªãã¨ãããªãã£ãã®ã¯ types/vue-shim.d.ts ãä½ãã¨ããã ã
    - TypeScript ãé¸æãã¦ãã Nuxt ã®åæç¶æã¯ JavaScript ã§ãã
    - Nuxt 3 ã«ã¤ãã¦ã¯ãã£ã¨é²ãã§ãã¦ãæåãã nuxt.config.ts ã«ãªã£ã¦ãããã
    - StandardJS ã¯ä½¿ããªã
    - Vetur ã«ããããããããã¨ã©ã¼ã¯ãåããã¡ã¤ã«ã®å¥ã®ã¨ããã«åãæ­£ããæå®ãã¦ããªããã¨ãåå ã§çºçãããã¨ãå¤ãæ°ããããæ³¢ç·ãåºã¦ããã¨ãããåå ã¨ã¯éããªã
    - this.$refs.Foo ãåã¨ã©ã¼ãçºçãããã¨ãã¯ã ;(this.$refs.Foo as any) ã¨ãã
    - ä½¿ããªãå¼æ°ã«ã¯ _ ãã¤ãããã§ãªãã¨ @typescript-eslint/no-unused-vars ã«æããã
    - æ°ããããã±ã¼ã¸ãè¶³ããã tsconfig.jsonã®compilerOptions.types[] ã«è¨­å®ãè¶³ããã¨ããæµããããã£ã½ã
- Nuxt
    - page ã¯ pages/page/index.vue ã«å®ç¾©ãã
    - middleware ã¯ middleware/...ts ã«å®ç¾©ãã (middlewares ã§ã¯ãã¡ãããã¯ç½ )
    - components ã¯ components/container/...Container.vue ã¨ component/presentational/...View.vue ã§å®ç¾©ãã
    - utils ã¯ export function ã¨ export class ã®ããã¡ã§å®ç¾©ãã
    - static/ ã®ãã¡ã¤ã«ã«ã¯ router.base ãé©ç¨ãããªã
    - èªä½ component ã« v-model ãçµã¿è¾¼ã¾ãã setVariable é¢æ°ã props ã«æ¸¡ã
    - `createElement()` has been called outside of render function. ã®ã¨ã©ã¼ã¯ nuxt.config.ts build.extend ã¸è¨­å®ãè¿½å ãã¦è§£æ¶ãã
    - plugin ã¯ https://typescript.nuxtjs.org/cookbook/plugins ã®ã³ã¼ããæ¹é ãã¦å®è£ãã
    - i18n ã¯ https://i18n.nuxtjs.org/ ãåèã«
    - è¤æ° .env ãå©ç¨ããã¨ãã¯ @nuxt/dotenv ãä½¿ãã dotenv ã¯ããå¤ããã¨ããæå ±ãããããããã¯åä¸ .env ãå©ç¨ããå ´åã®è©±ãè¤æ° .env.*** ãå©ç¨ãããªã dotenv ã§ãªãããã¡
