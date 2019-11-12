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
    let arr = [];
    let count = 0;
    let sum = 0;

    for (let prop in data) {
        count++;
    for (let i = 0; i < data[prop].length; i++){
      sum += data[prop][i];
    };
    let average = sum / data[prop].length;
    arr.push(average);
    console.log(prop + ': ' + average);
  }
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  let average = sum/count;
  return 'average: ' + average;

}

  getAverageScore ({
    algebra : [5,4,4],
    russian: [2,1,3],
    literature: [4,5,6,4],
    english: [3, 4 ,4,5]
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


