function getSeason() {
    let month = Number(prompt('Введите номер месяца'));
    if (month === 12 || month === 1 || month === 2) {
        return alert('Зима');
    } else if (month >=3 && month <= 5) {
        return alert('Весна');
    } else if (month >=6 && month <= 8) {
        return alert('Лето');
    } else if (month >=9 && month <= 11) {
        return alert('Осень');
    } else {
        return console.log('Вы ввели неправильное значение');
    }
}

function rememberWords() {
    let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    fruit = fruit.sort(() => Math.random() - 0.5);
    alert(fruit);

    let oneFruit = prompt('Какое слово было первым?');
    let lastFruit = prompt('А какое слово было последним?');

    if (oneFruit === fruit[0] && lastFruit === fruit[fruit.length - 1]) {
        alert('Так держать! Оба элемента верны!');
    } else if (oneFruit === fruit[0] || lastFruit === fruit[fruit.length - 1] ) {
        alert('Вы были близки к победе!');
    } else {
        alert('Ответ не верный!');
    }
}