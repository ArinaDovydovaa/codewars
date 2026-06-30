//Make a program that filters a list of strings and returns a list
// with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has
// to be a friend of yours! Otherwise, you can be sure he's not...
//
//Создать программу, которая фильтрует список строк и возвращает
// список только с именами ваших друзей.
// Если в имени ровно 4 буквы, можете быть уверены, что это ваш друг!
// В противном случае можете быть уверены, что это не он...

//c циклом
// function friend(friends){
//   const result =[]
//   for (let i = 0; i < friends.length; i++){
//     if (friends[i].length === 4){
//       result.push(friends[i]);
//     }
//   }
//   return result
// }

//с filter и проверкой на строки
function friend(friends) {
  return friends.filter(name => typeof name === 'string' && name.length === 4);
}


console.log(friend(["Ryan", "Kieran", "Mark"]))
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
console.log(friend(["Love", "Your", "Face", "1"]))