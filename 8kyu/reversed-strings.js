//📌Complete the solution so that it reverses the string passed into it.
//Напишите функцию, которая принимает строку и возвращает эту же строку
// в обратном порядке (перевернутую).
//✅
function solution(str){
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(solution('world'));
console.log(solution('hello'));

