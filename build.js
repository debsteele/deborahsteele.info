'use strict';
/* eslint-env es6 */

// core packages
const path = require('path');

// npm packages
const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const default_values = require('metalsmith-default-values');
const permalinks = require('metalsmith-permalinks');

const yaml_config = require('node-yaml-config');

// local packages
const css_csum = require('./modules/metalsmith_css_csum');


var config = yaml_config.load(path.join(__dirname, '/config.yml'));

metalsmith(__dirname)
    .source('src')
    .destination('site')
    // Standard site processing
    .metadata({
        site: config.site
    })
    .use(default_values(config.page_defaults))
    .use(css_csum('scss.csum'))
    .use(markdown())
    .use(layouts({
        engine   : 'handlebars',
        directory: 'layouts',
        partials : 'layouts/partials',
        helpers  : {
            head_title: () => config.site.title
        }
    }))
    .use(permalinks({
        relative: false
    }))
    .build(function (err) {
        if (err) {
            throw err;
        }
        console.log('Build Complete');
    });
