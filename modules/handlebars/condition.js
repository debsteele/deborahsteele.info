'use strict';
/* eslint-env es6 */

const debug_lib  = require('debug');
// const debug = debug_lib('handlebars-condition');
const error = debug_lib('handlebars-condition:error');


const condition = function (v1, operator, v2) {
    const types = {
        '==': () => {
            /* eslint eqeqeq: 0 */
            return v1 == v2;
        },
        '!=': () => {
            /* eslint eqeqeq: 0 */
            return v1 != v2;
        },
        '==='    : () => v1 === v2,
        '!=='    : () => v1 !== v2,
        '<'      : () => v1 < v2,
        '<='     : () => v1 <= v2,
        '>'      : () => v1 > v2,
        '>='     : () => v1 >= v2,
        '&&'     : () => v1 && v2,
        '||'     : () => v1 || v2,
        'regex'  : () => RegExp(v2, 'i').test(v1),
        'indexOf': () => v1.indexOf(v2)
    };
    const is_function = (function_name) => typeof types[function_name] === 'function';

    if (is_function(operator)) {
        return types[operator]();
    }
    else {
        error('Operator: %s not defined!', operator);
        return false;
    }
};

module.exports = condition;
