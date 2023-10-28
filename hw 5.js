//Задание 1

function minNumber(a, b) {
    return a < b ? a : b;
}
console.log(minNumber(8, 4));

console.log(minNumber(6, 6));

//Задание 2

function enterNumber() {
     
    const userNum = Number(prompt('Введите число'));
    if (userNum % 2 === 0) {
       return('Число четное'); 
    } else {
        return('Число нечетное');
    }
}
alert(enterNumber());

//Задание 3.1

function squareOutput(num1) {
    console.log(num1 ** 2);
}
squareOutput(Number(prompt('Введите число для возведения в степень')));


//Задание 3.2

function getdegreeNum() {

    let num = Number(prompt('Введите число'));

    console.log(num ** 2);

    return;
}
getdegreeNum();


//Задание 4

function question() {
    let age = Number(prompt('Сколько вам лет?'));

    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age <= 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}
question();


//Задание 5

function mult() {
    num1 = prompt('Введите 1e число');
    num2 = prompt('Введите 2e число');
    
    if (isNaN(num1) || isNaN(num2)) {
     alert('Одно или оба значения не являются числом.');
    }
    else  {
        return alert(num1 * num2);
    }
}
mult();


//Задание 6

const checkNumber = () => {
    let number = Number(prompt('Введите число'));
     if (isNaN(number)) {
        console.log('Переданный параметр не является числом');
     } else {
        let mathOperation = number ** 3;
        return console.log(`${number} в кубе равняется ${mathOperation}`);
     }
}
checkNumber();

//Задание 7

function getArea() {
    return Math.PI * this.radius * this.radius;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 5,
    getArea,
    getPerimeter,
}
console.log(circle1.getArea());

const circle2 = {
    radius: 10,
    getArea,
    getPerimeter,
}
console.log(circle2.getPerimeter());
