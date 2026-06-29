let numbers = [1,2,3,4,5,6];
let count = numbers.map(number => number * number)
    .filter(number => number % 2 == 0)
    .reduce((n1, n2) => n1 + n2)
console.log(count);