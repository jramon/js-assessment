if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var i,
            sum = 0;

        for(i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        return sum;
    },

    remove : function(arr, item) {
        var i,
            toDelete = arr.indexOf(item);

        while (toDelete !== -1) {
            arr.splice(toDelete, 1);
            toDelete = arr.indexOf(item);
        }

        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        return this.remove(arr, item);
    },

    append : function(arr, item) {
        arr.push(item);

        return arr;
    },

    truncate : function(arr) {
      //pop removes the last element of the array
        arr.pop(arr);

        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);

        return arr;
    },

    curtail : function(arr) {
        //removes the first element and returns it
        arr.shift();

        return arr;
    },

    concat : function(arr1, arr2) {
        return Array.prototype.concat(arr1, arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);

        return arr;
    },

    count : function(arr, item) {
        var i, count = 0;

        for (i = 0; i <= arr.length; i++) {
            if (item === arr[i]) {
                count++
            }
        }

        return count;
    },

    duplicates : function(arr) {
        var i, temp = {}, dupes = [], prev;

        arr.map(function(value, index, arr) {
            if (!temp.hasOwnProperty(value)) {
                temp[value] = 1
            } else {
                temp[value] += 1;
            }
        });

        for (var item in temp) {
            if (temp[item] > 1) {
                dupes.push(item);
            }
        }

        return dupes;
    },

    square : function(arr) {
        var square = [];

        arr.map(function (value, index) {
            square.push(value * value);
        });

        return square;
    },

    findAllOccurrences : function(arr, target) {
        var occurrences = [],
            count = 0;

        arr.map(function (val, index) {
            if (val === target) {
                occurrences.push(index);
            }
        });

        return occurrences;
    }

  };
});
