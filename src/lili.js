/**
 * @license
 * lili.js
 * Copyright (c) 2015-2016, Lopez Jimmy
 *
 * lili.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 */

/**
 * @author Lopez Jimmy https://github.com/Falindir/lili.js
 */

;(function() {

    var LILI = LILI || {};

    LILI.VERSION = "v0.0.1";

    LILI.AUTHOR = "Falindir";

    LILI.sayHello = function () {
        console.log('Lili.ls : ' + LILI.VERSION + " - author : " + LILI.AUTHOR);
    };

    LILI.sayHello();

    window.LILI = LILI;

}) ();
