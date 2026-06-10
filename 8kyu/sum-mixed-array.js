// 📌Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.
//   Return your answer as a number.
//  Дан массив целых чисел в виде строк и чисел.
//  Верните сумму значений массива, как если бы все они были числами.
//
// ✅
function sumMix(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}
console.log(sumMix([1,2,3]))