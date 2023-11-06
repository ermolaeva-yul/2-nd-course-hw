//Задание 1

const numbers = [1, 5, 4, 10, 0, 3];

for (const n of numbers) {
    if (n === 10) {
        console.log(n);
        break;
    }
    console.log(n);
}


//Задание 2

const numbs = [1, 5, 4, 10, 0, 3];

console.log(`${numbs.indexOf(4)}:4`);


//Задание 3

let arr = [1, 3, 5, 10, 20];

arr = arr.join(' ');

console.log(arr);


//Задание 4

let table = [];

for (let i = 0; i < 3; i++) {
  table[i] = [];
  for (let j = 0; j < 3; j++) {
    table[i][j] = 1;
  };
};
console.log(table);


//Задание 5

let e = [1, 1, 1];

e.push(2, 2, 2);

console.log(e);


//Задание 6

let mar = [9, 8, 7, 'a', 6, 5];

let rar = mar.filter(item => !isNaN(item));

rar = rar.sort();

console.log(rar);


//Задание 7

let arr1 = [9, 8, 7, 6, 5];

if (arr1.includes(Number(prompt(`Угадай число`)))) {

    alert(`Угадал`)

} else {

    alert(`Не угадал`)
}


//Задание 8

let str = 'abcdef';

let arrStr = str.split('');

arrStr = arrStr.reverse();

arrStr = arrStr.join('');

console.log(arrStr);


//Задание 9

let mass9 = [
    [1, 2, 3],
    [4, 5, 6],
]
const arrMass9 = mass9.flat();

console.log(arrMass9);


//Задание 10

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr2.length - 1; i++) {
    
    console.log(arr2[i] + arr2[i + 1]);
}


//Задание 11

function getQuaNumbers(arr) {

    return arr.map((num) => num * num);
}
console.log(getQuaNumbers(arr));


//Задание 12

const arr3 = ['слово', '', 'слог', 'длинное предложение', 'буква'];

const getLengthWords = function (arr) {

  let lengthArr = arr.map(el => el.length);

  return lengthArr;
};
console.log(getLengthWords(arr3));


//Задание 13

const arr4 = [-1, 0, 5, -10, 56];

const filterPositive = function (array) {

    return array.filter(i => i < 0); 
}

console.log(filterPositive(arr4));
   
//Задание 13.1

const arr5 = [-25, 25, 0, -1000, -2];

const filterPositive1 = function (array) {

    return array.filter(n => n < 0); 
}

console.log(filterPositive1(arr5));