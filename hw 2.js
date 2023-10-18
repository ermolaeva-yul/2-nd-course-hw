let a = 10;
alert(a);
// Задание 1

let year = 2007;
alert(year);
//Задание 2

let creator = 'Brendan Eich';
alert(creator);
//Задание 3

let b = 10;
let c = 2;
let sum = b + c;
let difference = b - c;
let multiplication = b * c;
let division = b / c;
alert(`${sum} ${difference} ${multiplication} ${division}`);
//Задание 4

let result = 2 ** 5;
alert(result);
//Задание 5

let aa = 9;
let bb = 2;
alert(aa%bb);
//Задание 6

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
//Задание 7

let age = prompt('Сколько вам лет?');
alert(age);
//Задание 8

const user = {
    name: 'Sofa',
    age: 25,
    isAdmin: false
}
user["city of residence"] = 'London';
user.age = 30;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);
//Задания 9.0-9.4

let name1 = prompt('Как вас зовут?');
alert(`Привет, ${name1}!`);
//Задание 10