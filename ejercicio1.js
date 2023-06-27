const arr = [1, 2, 3, 4, 5, 6];

// utilizar el método map de los arreglos para duplicar cada elemento
// [2, 4, 6, 8, 10, 12]

const map1 = arr.map(x => x * 2);

console.log(map1);

// utilizar el método filter para filtrar los números pares de arr
// [2, 4, 6]

const even = arr.filter(number => number % 2 == 0);

console.log(even);

// utilizar el método reduce para sumar todos los elementos
// 21

const initialValue = 0;
const sumWithInitial = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);