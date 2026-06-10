//📌I want to get the sum of two arrays...
//получить сумму двух массивов...
// Actually the sum of all their elements.
//сумму всех их элементов
//Each array includes only integer numbers. Output is a number too.
//Каждый массив содержит только целые числа. Результат тоже число.

//✅
function arrayPlusArray(arr1, arr2) {
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
   sum += arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))