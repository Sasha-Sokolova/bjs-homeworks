'use strict';

// первая задача


function compareArrays (arr1, arr2) {

    return arr1.length == arr2.length && arr1.every((v, i) => v === arr2[i]);
    }


arr1 = [1, 2 ,3];
arr2 = [1, 2, 3];

compareArrays (arr1, arr2);


// вторая задача

function memoize(fn, limit) {
    const memory = [];
    return function () {
      this.results =
        {
          args: Array.from(arguments),
          result: fn.apply(null, Array.from(arguments))
        };
      for (let value of memory) {
        if ((compareArrays(value.args, Array.from(arguments))) == true)
          return `Взято из памяти ${value.result}`;
      }
      memory.push({ args: Array.from(arguments), result: fn.apply(null, Array.from(arguments)) });
      if (memory.length > 2) {
        console.log(`Максимальное количество результатов памяти ${limit}`)
        memory.splice(0, 1);
      };
  
      return `Результат работы ${results.result}`;
    }
  }
  const sum = (a, b) => a + b;
  const mSum = memoize(sum, 2);