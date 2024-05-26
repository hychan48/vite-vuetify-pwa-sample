## Vite Vuetify PWA Sample
```bash
pnpm create vuetify
# follow wizard
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

# add and commit
# modify index.html
# add to package.json
# .env.local and .env
echo "BASE_URL=/repo/" >> .env
echo "BASE_URL=/repo/" >> .env.local
echo "BASE_URL=/repo/" >> .env.production

```
```jsonc
/* add to package.json */
{
  "author":"hychan48",
  "private":true,
  "scripts": {
    "dev": "vite",
    "dev:host": "vite --host",
    "test": "vitest test/",
    "gh-pages-deploy": "gh-pages --dotfiles --dist dist"
  },
}
```