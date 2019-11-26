"use strict"

function getSolutions( a, b, c ) {
 
    let D = (Math.pow(b, 2)) - 4 * a * c;
    let x1, x2;
    if (D < 0) {
      return { D };
    } else if (D === 0) {
      x1 = -b / (2 * a);
      return { roots: { x1 }, D };
    } else if (D > 0) {
      x1 = (-b - Math.sqrt(D)) / (2 * a);
      x2 = (-b + Math.sqrt(D)) / (2 * a);
      return { roots: { x1, x2 }, D };
    }
  }
  function showSolutionsMessage(a,b,c) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if(result.D < 0) {
      console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0 ) {
      console.log(`Уравнение имеет один корень: X₁=${result.roots.x1}`);
    } else if (result.D > 0 ) {
      console.log(`Уравнение имеет два корня: X₁=${result.roots.x1}, X₂=${result.roots.x2}`);
    }  
  }
  showSolutionsMessage(1,2,3);
  showSolutionsMessage(2,4,2);
  showSolutionsMessage(7,20,-3);


  function getAverageScore(data) {
    let sum = 0;
    let count = 0;
    let resultObject = {};
    
    for (let prop in data) {
      
      function propAverage(arr) {
        let sumProp = 0;
        for (let i = 0; i < arr.length; i++){
          sumProp += arr[i];
        }
  
        let resultAverage = sumProp / arr.length;
        
        return resultAverage;
      }
  
      resultObject[prop] = propAverage(data[prop]);
      sum += propAverage(data[prop]);
      count ++;
    }
  
  let avg = sum / count;
  resultObject['average'] = avg;
  return resultObject;
  }
  
  getAverageScore({
    algebra : [5,5, 5],
    russian: [2,2, 2],
    english: [3,3,3],
    literature: [4, 4, 4]
  });


  function getPersonData(secretData){
    
    if (secretData.aaa == 0 & secretData.bbb == 0){
      return  {
        firstName: 'Родриго', 
        lastName: 'Родриго'
      };
    } else if (secretData.aaa == 1 & secretData.bbb == 0){
      return  {
        firstName: 'Эмильо', 
        lastName: 'Родриго'
      };
    } else if (secretData.aaa == 1 & secretData.bbb == 1){
      return  {
        firstName: 'Эмильо', 
        lastName: 'Эмильо'
      };
    } else if (secretData.aaa == 0 & secretData.bbb == 1){
      return  {
        firstName: 'Родриго', 
        lastName: 'Эмильо'
      };
    }
  } 
  getPersonData({
      aaa: 0,
      bbb: 0
  });


