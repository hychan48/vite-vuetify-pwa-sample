/**
// vitest-environment jsdom
 * Smoke Testing for sitemap.xml and robot.txt
 *
*/
import {describe, test} from 'vitest';
import {expect} from 'chai';

import fs from 'node:fs';
import { vi } from 'vitest'

// `process.env.NODE_ENV` and `import.meta.env.NODE_ENV`
// are "development" before calling "vi.stubEnv"
// https://vitest.dev/api/vi.html#vi-stubenv
// vi.stubEnv('NODE_ENV', 'production')

// process.env.NODE_ENV === 'production'
// import.meta.env.NODE_ENV === 'production'

/**
 * https://github.com/kolirt/vite-plugin-robots
 * https://github.com/jbaubree/vite-plugin-sitemap
 */
describe('SEO Verify Plugin', function(){
  test('Sitemap.xml verify', function(){
    const sSitemap = fs.readFileSync('dist/sitemap.xml','utf8');
    console.dir(sSitemap);
    expect(sSitemap).to.be.a('string');
    expect(sSitemap).to.include('<?xml version="1.0" encoding="UTF-8"?>');
  });
  test('robot.txt.xml verify', function(){
    const robotTxt = fs.readFileSync('dist/robots.txt','utf8');
    console.dir(robotTxt);
    expect(robotTxt).to.be.a('string');
    expect(robotTxt).to.include('Sitemap');//production shouldn't be this though
    // expect(robotTxt).to.include('localhost');//production shouldn't be this though
  });
});
