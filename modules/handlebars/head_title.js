'use strict';
/* eslint-env es6 */

const head_title = function (options) {
    const file = options.data.root;
    const title = options.hash.title || file.title;

    return (title) ? title + ' | ' + file.site.name : file.site.name;
};

module.exports = head_title;
