if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or the value provided is not a number
      var isNumber = typeof num === 'number',
          results = {};

      if(isNumber) {
          var by3 = num%3,
              by5 = num%5;

          if (by3 !== 0 && by5 !== 0) {
            return num;
          }

          if (by3 + by5 === 0) {
            return 'fizzbuzz';
          }

          if (by3 === 0)  {
            return 'fizz';
          }

          if (by5 === 0) {
            return 'buzz';
          }

      } else {
        return false;
      }

    }
  };
});
