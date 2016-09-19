'use strict';
/* eslint-env es6 */

const debug = require('debug')('metalsmith-css-csum');
const fs = require('fs');

const css_csum = function (filepath) {

    return function (files, metalsmith, done) {
        const metadata = metalsmith.metadata();
        const stats_filepath = metalsmith.path(filepath);

        debug('CSS CSUM filepath: %s', stats_filepath);
        const css_csum_string = fs.readFileSync(stats_filepath);

        metadata.css = metadata.css || {};
        metadata.css.csum = css_csum_string;

        done();
    };
};

module.exports = css_csum;
