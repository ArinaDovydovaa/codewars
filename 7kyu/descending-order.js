// Your task is to make a function that can take any non-negative integer
// as an argument and return it with its digits in descending order.
//   Essentially, rearrange the digits to create the highest possible number.
//
// создать функцию, которая принимает любое неотрицательное целое число
// в качестве аргумента и возвращает его с цифрами в порядке убывания.
//  По сути, переставить цифры так, чтобы получить максимально возможное число.

function descendingOrder(n){
  const digits = String(n).split('');
  digits.sort((a, b) => b - a);
  return Number(digits.join(''));
}

//стрелочной функцией
//const descDigits = n => Number(String(n).split('').sort((a,b) => b-a).join(''));

console.log(descendingOrder(15));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
console.log(descendingOrder(1));
