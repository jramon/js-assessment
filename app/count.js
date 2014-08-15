if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
      count : function (start, end) {
        var timeout;

        function magic () {
          console.log(start++);

          if (start  <= end) {
            timeout = setTimeout(magic, 100);
          }
        }

        magic();

      return {
        cancel: function () {
          timeout && clearTimeout(timeout);
        }
      };
    }
  }
});
