// Задание 1

let b = 0;
while (b < 2) {
    console.log('Привет');
    b++;
}

// Задание 2

let i = 1;

while (i < 6) {
	console.log(i);
	i++;
}

// Задание 3

let a = 7;

while (a < 23) {
	console.log(a);
	a++;
}

// Задание 4

const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};
 for (let key in obj) {
    alert(`${key} - зарплата ${obj[key]} долларов`)
}

// Задание 5

let n = 1000;
let num = 0;

while (n > 50) {
    n = n / 2;
    num++;
}
console.log(`Количество итераций ${num}`);

// Задание 6

for (let i = 2; i <= 31; i += 7) {
    alert(`Сегодня пятница ${i}-е число. Необходимо подготовить отчет.`);
  }