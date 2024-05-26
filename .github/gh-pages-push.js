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
  }, function(err) {
    if(err){
      console.error('publish error',err);
      resolve(err);
    }else{
      console.log('Pushed');
      resolve(true);
    }
  });
});
console.log(tmp);
