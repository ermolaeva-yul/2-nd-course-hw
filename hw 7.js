//Задание 1

let str = 'js'; 
console.log(str.toUpperCase()); 


//Задание 2

function searchStart(arr, str) {

    return arr.filter(el => el.toLowerCase().startsWith(str));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));


//Задание 3

let num = 32.58884;

console.log(Math.floor(num));

console.log(Math.ceil(num));

console.log(Math.round(num));


//Задание 4

let number = [52, 53, 49, 77, 21, 32];

console.log(Math.min(...number));

console.log(Math.max(...number));


//Задание 5

function getRandomInt(minValue, maxValue) {

    return Math.round(Math.random()*maxValue);
}
                                       
console.log(getRandomInt(0, 10));


//Задание 6

function getRandomArrNumbers(m) {
    let result = [];
    for (let i = 0; i < m / 2; i++) {
        result.push(Math.floor(Math.random() * m));
    }
    return result;
}
console.log(getRandomArrNumbers(10));

//Задание 7

function randomBetween(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomBetween(0, 20));


//Задание 8

let nowDate = new Date();

console.log(nowDate);


//Задание 9

let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);


//Задание 10

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +
" " + myDate.getFullYear() + " - это " + days[myDate.getDay()];
let fullTime = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();

console.log(fullDate);
console.log(fullTime);