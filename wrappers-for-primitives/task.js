"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    console.log(parseInt(percent));
    console.log(parseInt(contribution));
    console.log(parseInt(amount));


    
    let currentDate = new Date();
    let data = new Date(date);
    let month = new Date((data.getFullYear() - currentDate.getFullYear()) * 12 + (data.getMonth() + 1) - (currentDate.getMonth() + 1));

    let mortgage = amount - contribution;

    let monthPercents = (percent / 12) / 100;


    let monthPayment = amount * (monthPercents + monthPercents / ((Math.pow((1 + monthPercents), month) - 1)));

    let totalAmount = monthPayment * month + mortgage;

    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);
}

calculateTotalMortgage(10, 0, 50000, 12);




function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    let greeting;
    if (name.length > 0) {
        greeting = `Привет, мир! Меня зовут ${name}`;
    } else {
        greeting = "Привет, мир! Меня зовут Аноним"
    }

    return greeting;
}

