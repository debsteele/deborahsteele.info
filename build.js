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
const css_csum = require('./modules/metalsmith/css_csum');

const handlebars_helpers = {
    condition : require('./modules/handlebars/condition'),
    head_title: require('./modules/handlebars/head_title'),
    moment    : require('./modules/handlebars/moment')
};


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
    .use(markdown({
        gfm        : true,
        tables     : true,
        breaks     : true,
        pedantic   : false,
        sanitize   : false,
        smartLists : true,
        smartypants: true
    }))
    .use(layouts({
        engine   : 'handlebars',
        directory: 'layouts',
        partials : 'layouts/partials',
        helpers  : handlebars_helpers
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
