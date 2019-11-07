"use strict";

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let y = Math.pow(b,2) - 4 * a * c;
    if (y < 0){
        let x = 'Дискриминат  меньше нуля, корней нет.';
        console.log('Дискриминат  меньше нуля, корней нет.');
        return x; 
    } else if (y == 0){
        let x = - b / (2 *a);
        return x;
    } else {
        let x = (- b + Math.sqrt(d))/ (2 *a);
        let x2 = (- b - Math.sqrt(d))/ (2 *a);
        return [x, ` x2= ${x2}`];   
    } 
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let arr = marks;
    let sum = 0;
    let maximum = 5;

    if (arr.length >= maximum) {
        arr.splice(maximum);
        console.log(`Количество оценок больше ${maximum}`);
    }

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let averageMark = sum / arr.length;
    
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let date = dateOfBirthday.getFullYear();
    let today = new Date();
    let year = today.getFullYear();
    let age = year - date;
    let result = '';
    if (age >= 18) {
        result =`Не желаете ли олд-фэшн, ${name} ?`;
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    console.log(result);
    return result;
}