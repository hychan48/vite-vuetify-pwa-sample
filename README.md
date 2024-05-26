## Vuetify
* vuetify
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
* https://vite-plugin-pwa.netlify.app/
```bash
```