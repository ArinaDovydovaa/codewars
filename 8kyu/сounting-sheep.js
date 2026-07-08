// Consider an array/list of sheep where some sheep may be missing from their
// place. We need a function that counts the number of sheep present in the array
// (true means present).
// функция, которая подсчитывает количество овец, присутствующих в массиве
// (истинный означает присутствие).


function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}

const sheep = [
  true,  true,  true,  false,
  true,  true,  true,  true,
  true,  false, true,  false,
  true,  false, false, true,
  true,  true,  true,  true,
  false, false, true,  true
];
console.log(`количество присутствующих овец: ${countSheeps(sheep)}`);


// через цикл
// function countSheeps(sheep) {
//   let result = 0;
//   for (let i = 0; i < sheep.length; i++) {
//     if (sheep[i] === true) {
//       result++;
//     }
//   }
//   return result;
// }
// const sheep = [
//   true,  true,  true,  false,
//   true,  true,  true,  true,
//   true,  false, true,  false,
//   true,  false, false, true,
//   true,  true,  true,  true,
//   false, false, true,  true
// ];
// console.log(`количество присутствующих овец: ${countSheeps(sheep)}`);



