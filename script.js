console.log('Задание 1');
for (let i = 0; i < 12; i++) {
  (i === 0) ? console.log(i + ' - это ноль') : (i % 2 === 0) ? console.log((i + ' - четное число')) : console.log((i + ' - нечетное число'));
}

console.log('Задание 2');
// способ 1
const firastArray = [1, 2, 3, 4, 5, 6, 7];
const newArray = [];
for (let i = 0; i < firastArray.length; i++) {
  (firastArray[i] !== 4 && firastArray[i] !== 5) ? newArray.push((firastArray[i])) : null;
}
console.log(newArray);

// способ 2
// const firastArray = [1, 2, 3, 4, 5, 6, 7];
// const newArray = [];
// newArray.push(firastArray.shift());
// newArray.push(firastArray.shift());
// newArray.push(firastArray.shift());
// firastArray.shift();
// firastArray.shift();
// newArray.push(firastArray.shift());
// newArray.push(firastArray.shift());
// console.log(newArray);


console.log('Задание 3');
const arrayNew = [];
let summ = 0;
let min = -1;
for (let i = 0; i < 5; i++) {
  arrayNew.push(Math.round(Math.random() * 9));
  summ += arrayNew[i];
  (arrayNew[i] > min) ? min = arrayNew[i] : null;
}
console.log(arrayNew);
console.log('Сумма элементов массива ' + summ);
console.log(min);
(arrayNew.indexOf(3) !== -1) ? console.log('Есть 3') : console.log('нет 3');


console.log('доп задание');
let mountain = '';
for (let i = 0; i < 20; i++) {
  mountain += 'x';
  console.log(mountain);
}
