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

    LILI.VERSION = "v0.1.0";

    LILI.AUTHOR = "Falindir";

    LILI.sayHello = function () {
        console.log('Lili.ls : ' + LILI.VERSION + " - author : " + LILI.AUTHOR);
    };

    /* Simple JavaScript Inheritance
     * By John Resig http://ejohn.org/
     * MIT Licensed.
     */
    // Inspired by base2 and Prototype
    var initializing = false, fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;
    LILI.Class = function(){};
    LILI.Class.extend = function(prop) {
      var _super = this.prototype;

      // Instantiate a base class (but only create the instance,
      // don't run the init constructor)
      initializing = true;
      var prototype = new this();
      initializing = false;

      // Copy the properties over onto the new prototype
      for (var name in prop) {
        // Check if we're overwriting an existing function
        prototype[name] = typeof prop[name] == "function" &&
          typeof _super[name] == "function" && fnTest.test(prop[name]) ?
          (function(name, fn){
            return function() {
              var tmp = this._super;

              // Add a new ._super() method that is the same method
              // but on the super-class
              this._super = _super[name];

              // The method only need to be bound temporarily, so we
              // remove it when we're done executing
              var ret = fn.apply(this, arguments);
              this._super = tmp;

              return ret;
            };
          })(name, prop[name]) :
          prop[name];
      }

      // The dummy class constructor
      function Class() {
        // All construction is actually done in the init method
        if ( !initializing && this.init )
          this.init.apply(this, arguments);
      }

      // Populate our constructed prototype object
      Class.prototype = prototype;

      // Enforce the constructor to be what we expect
      Class.prototype.constructor = Class;

      // And make this class extendable
      Class.extend = arguments.callee;

      return Class;
    };

    LILI.Collections = {

        /** repository of Collections with LIXI"**/

    };

    LILI.Collections.List = LILI.Class.extend({

        init : function() {
           this.collections = [];
           this.size = 0;
        },

        clear : function () {
            this.collections = [];
            this.size = 0;
        },

        add : function (value) {
            this.collections.push(value);
            this.size += 1;
        },

        get : function (index) {
            return this.collections[index];
        },

        last : function () {
            if(this.collections.length === 0)
              return undefined;
            else
              return this.collections[this.collections.length - 1];
        },

        set : function (index, value) {
            this.collections[index] = value;
        },

        remove : function (index) {
            this.collections.splice(index, 1);
            if(this.size > 0)
                this.size -= 1;
        },

        contains : function (value) {
            for (i = 0; i < this.collections.length; i++)
                if(this.collections[i] === value)
                    return true;

            return false;
        },

        getFirstIndex : function (value) {
            for (i = 0; i < this.collections.length; i++)
                if(this.collections[i] === value)
                    return i;

            return undefined;
        },

        getAllIndex : function (value) {
            var index = new LILI.Collections.List();

            for (i = 0; i < this.collections.length; i++)
                if(this.collections[i] === value)
                    index.add(i);

            return index;

        },

        getLastIndex : function (value) {
            var listVal = this.getAllIndex(value);

            if(listVal.size === 0)
                return undefined;

            return listVal.last();
        },

        getInterval : function (start, end) {
            var interval = new LILI.Collections.List();

            for (i = start; i <= end; i++) {
                interval.add(this.get(i));
            }

            return interval;
        },

        addTab : function (tab, reset) {
            if(reset)
                this.clear();

            for(var i = 0; i < tab.length; i++)
                this.add(tab[i]);
        }
    });

    LILI.sayHello();

    window.LILI = LILI;

}) ();
