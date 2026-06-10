//📌Given an array of integers your solution should find the smallest integer.
//Дан массив целых чисел. Ваше решение должно найти наименьшее целое число.

//✅
//С помощью Math.min и spread оператора
// function findSmallestInt(arr) {
//   return Math.min(...arr);
// }

function findSmallestInt(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(findSmallestInt([34, 15, 88, 2]))
console.log(findSmallestInt([34, -345, -1, 100]))