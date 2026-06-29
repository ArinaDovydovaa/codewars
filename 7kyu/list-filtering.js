//-In this kata you will create a function that takes a list of non-negative
// integers and strings and returns a new list with the strings filtered out.
//-создать функцию,которая принимает список из неотрицательных целых чисел и строк,
// и возвращает новый список, из которого отфильтрованы (удалены) все строки.

//1
// const filter_list = (l) => l.filter((item) => Number.isInteger(item))

//2
// function filter_list(l) {
//   return l.filter((item) => typeof item === 'number')
// }

//3 Через цикл (без filter)
// function filter_list(l) {
//   let result = [];
//   for (let i = 0; i < l.length; i++) {
//     if (typeof l[i] === 'number') {
//       result.push(l[i]);
//     }
//   }
//   return result;
// }
console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));