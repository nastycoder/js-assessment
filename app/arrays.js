if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for(i=0; i<arr.length; i++){
        if(arr[i] == item){
          return i;
        }
      }
      return -1;
    },

    sum : function(arr) {
      total = 0
      arr.forEach(function(element){
        total += element
      });
      return total;
    },

    remove : function(arr, item) {
      retArr = [];
      for(i=0; i<arr.length; i++){
        if(arr[i] != item){
          retArr.push(arr[i]);
        }
      }
      return retArr;
    },

    removeWithoutCopy : function(arr, item) {
      var i, length
      for(i=0, length = arr.length; i < length; i++){
        if(arr[i] == item){
          arr.splice(i, 1);
          --i
          --length
        }
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.splice(arr.length-1, 1);
      return arr;
    },

    prepend : function(arr, item) {
      retArr = [item];
      for(i=0; i<arr.length; i++){
        retArr.push(arr[i]);
      };
      return retArr;
    },

    curtail : function(arr) {
      arr.splice(0, 1);
      return arr;
    },

    concat : function(arr1, arr2) {
      retArr = arr1;
      for(i=0; i<arr2.length; i++){
        retArr.push(arr2[i]);
      };
      return retArr;
    },

    insert : function(arr, item, index) {
      retArr = [];
      for(i=0; i<arr.length; i++){
        if(i == index){
          retArr.push(item);
          --i;
          index = null;
        }else{
          retArr.push(arr[i]);
        }
      };
      return retArr;
    },

    count : function(arr, item) {
      count = 0;
      for(i=0; i<arr.length; i++){
        if(arr[i] == item){
          count++;
        }
      }
      return count;
    },

    duplicates : function(arr) {
      seen = {};
      duplicates = [];

      for(i=0; i<arr.length; i++){
        seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
      }

      for(var e in seen){
        if(seen[e] > 1){
          duplicates.push(e);
        }
      }

      return duplicates;
    },

    square : function(arr) {
      retArr = [];
      arr.forEach(function(e){
        retArr.push(e*e);
      });
      return retArr;
    },

    findAllOccurrences : function(arr, target) {
      retArr = [];
      for(i=0; i<arr.length; i++){
        if(arr[i] == target){
          retArr.push(i);
        }
      }
      return retArr;
    }
  };
});
