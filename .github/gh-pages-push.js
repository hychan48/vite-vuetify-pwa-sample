import { createRequire } from 'module';
const require = createRequire(import. meta. url);
const ghpages = require('gh-pages');

/**
 * https://www.npmjs.com/package/gh-pages
 */
const tmp = await new Promise(resolve => {
  ghpages.publish('dist', {
    dotfiles: true,
    nojekyll: true,
    history: false
  }, resolve());
});
console.log(tmp);
