//Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
people.sort((a, b) => a.age - b.age);
 
console.log(people);



//Задание 2

function isPositive(number) {

    return number > 0;
  }
  
function isMale(person) {

    return person.gender === 'male';
  }
  
function filter(arr, ruleFunction) {

    const result = [];

    for (let i = 0; i < arr.length; i++) {

      if (ruleFunction(arr[i])) {

        result.push(arr[i]);
      }
    }

    return result;
  }
  
console.log(filter([3, -4, 1, 9], isPositive));
  
const user = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
  
console.log(filter(user, isMale));


//Задание 3


function printCurrentDate() {

const currentDate = new Date();

console.log(currentDate.toString());

  }
  
let count = 0;

const interval = 3000;

const totalTime = 30000;
 
function printDateEvery3Seconds() {

 if (count * interval < totalTime) {

    printCurrentDate();

    count++;

    setTimeout(printDateEvery3Seconds, interval);

 } else {

console.log('30 секунд прошло');

 }
}
  
printDateEvery3Seconds();


//Задание 4


function delayForSecond(callback) {

setTimeout(callback, 1000);

}
      
delayForSecond(function () {

console.log('Привет, Глеб!');

});


//Задание 5

function delayForSecond(cb) {
 
setTimeout(() => {

console.log('Прошла одна секунда');

if (cb) {

 cb();

  }
 }, 1000)
}

function sayHi(name) {

  console.log(`Привет, ${name}!`);
}

delayForSecond(() => {

  sayHi('Глеб');
});




