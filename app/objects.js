if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var result = [];

      for (ownProp in obj) {
        if (obj.hasOwnProperty(ownProp)) {
          result.push(ownProp + ': ' + obj[ownProp]);
        }
      }

      return result;
    }
  };
});
