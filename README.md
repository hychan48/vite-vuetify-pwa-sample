## Vuetify
* [Repo](https://github.com/hychan48/vite-vuetify-pwa-sample)
* [Pages](https://hychan48.github.io/vite-vuetify-pwa-sample/)
```bash
pnpm create vuetify
D:\dev_drive_git_repos\github\vite-vuetify-pwa-sample
git init .
git add . && git commit -m "init"
pnpm add -D vitest

pnpm add -D @vue/test-utils
touch public/.nojekyll
pnpm install gh-pages -D
# edit vite.config.js
# console.log(import.meta.env.VITE_SOME_KEY) // "123"
echo "/dist/" >> .gitignore
mv README.md readme.vuetify.md
touch README.md
```
* [ ] fix editorconfig
* [ ] modify index.html
  * For Title
* [ ] [ ] Setup env
```bash 
# 
# add to package.json
# .env.local and .env

echo "BASE_URL=/repo/" >> .env
echo "BASE_URL=/repo/" >> .env.local
echo "BASE_URL=/repo/" >> .env.production
## or remember it's VITE_* doesnt work on vite.config.js
# unless uou either loadEnv or process.env
pnpm add dotenv-expand
echo "BASE_URL=/$(basename $(pwd))/" >> .env
echo "BASE_URL=/$(basename $(pwd))/" >> .env.local
echo "BASE_URL=/$(basename $(pwd))/" >> .env.production

# highly recommended
mkdir test
touch test/setup.js
pnpm add @pinia/testing -D
# pnpm add @pinia/jest -D # for snap shots
pnpm add vue-test-utils -D

```
* [ ] Add Theme / Wireframes
  * [Wireframes](https://vuetifyjs.com/en/getting-started/wireframes/#examples)
  * [ ] Change favicon / logo
```bash
# use gh to push secret
```
```jsonc
{
  "author":"hychan48",
  "private":true,
  "scripts": {
    "dev": "vite",
    "dev:host": "vite --host",
    "test": "vitest test/",
    "gh-pages-deploy": "gh-pages --dotfiles --dist dist"
  },
  //auto version
}
```jsonc
{
  base: "/repo/",
}
```
* [ ] GitHub Actions
### pwa
* [vite-plugin-pwa](https://vite-plugin-pwa.netlify.app/)
* [assets-generator](https://vite-pwa-org.netlify.app/assets-generator/)
* [ ] image/icons/metadata
  * [ ] ogImage
* [ ] manifest in vite.config.js
  * [ ] Check icons / assets
  * [ ] Theme
  * [ ] Descriptions
* [ ] robots.txt
* [ ] sw refresh
* [ ] validate using og checker
* https://www.opengraph.xyz/
* [check ghpage opengraph]( https://www.opengraph.xyz/url/https%3A%2F%2Fhychan48.github.io%2Fvite-vuetify-pwa-sample )
* https://www.opengraph.xyz/url/https%3A%2F%2Fhychan48.github.io%2Fvite-vuetify-pwa-sample
```bash
pnpm add -D @vite-pwa/assets-generator
# svg recommended
#pwa-assets-generator --preset minimal-2023 public/logo.svg
pwa-assets-generator --preset minimal-2023 src/assets/logo.svg
```
```jsonc
scripts:{
  "generate:pwa": "pwa-assets-generator --preset minimal-2023 src/assets/logo.svg"
}
```
```html
<!-- vite pwa generated -->
<head>
  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png">
</head>
```
```js
/* https://vite-pwa-org.netlify.app/guide/#configuring-vite-plugin-pwa */
/* vite.config.js */
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        // enabled: true,//check in dev
        enabled: false,
      },
      workbox: {
        sourcemap: true
      },
      //Check file names:
      includeAssets: ['favicon.ico','favicon.svg', 'apple-touch-icon-180x180.png', 'maskable-icon-512x512.png'],
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#121212',//for dark theme
        //https://m2.material.io/design/color/dark-theme.html#properties
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
    //  import { registerSW } from 'virtual:pwa-register'
    //  registerSW({ immediate: true })
  ]
})
```
#### ssr/ssg
* https://vite-pwa-org.netlify.app/guide/prompt-for-update.html#ssr-ssg
```js
import { registerSW } from 'virtual:pwa-register'

registerSW({ /* ... */ })
```
#### static asset
* https://vite-pwa-org.netlify.app/guide/static-assets.html


# auto version
* https://github.com/semantic-release/semantic-release/tree/e424297f2f97b712e83203c91d12220e9b4cae9f
## yarn
* lazy way
```jsonc
script:{
  "release-it": "yarn version --patch && git push --follow-tags",
  "yarn-patch": "yarn version --patch",
  "yarn-minor": "yarn version --minor",
  "yarn-major": "yarn version --major",

}
//doesn't work on windows nvm

```
```bash
# should work using git bash on windows
yarn run release-it
yarn version --patch
yarn version --minor
yarn version --major
git tag -l
git tag | xargs git tag -d

```

## Editor Config
```editorconfig
[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

[*.py]
indent_style = space
indent_size = 4
[*.{js,jsx,ts,tsx,vue}]
indent_style = space
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true

```