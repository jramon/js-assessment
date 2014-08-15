if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return  fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function (str2) {
            return str + ', ' + str2;
        }
    },

    makeClosures : function(arr, fn) {
        var fns = [];

        arr.forEach(function (v, i) {
            fns.push(function () { return fn(v) });
        });

        return fns;
    },

    partial : function(fn, str1, str2) {
        return function (str3) {
            return fn(str1, str2, str3);
        }
    },

    useArguments : function() {
        var args = Array.prototype.slice.call(arguments);

        return args.reduce(function (prev, curr) {
            return prev + curr;
        });

    },

    callIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);

        return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var args =  Array.prototype.slice.call(arguments, 1);

        return function () {

            var pArgs = args.concat(Array.prototype.slice.call(arguments));

            return fn.apply(null, pArgs);
        }
    },

    curryIt : function(fn) {
        var firstArgs = [].slice.call(arguments, 1);

        return function () {
            return fn.apply(this, firstArgs.concat([].slice.call(arguments)));
        }

    }
  };
});
