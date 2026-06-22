// 📌 Give you a function animal, accept 1 parameter:obj like this:
// {name:"dog",legs:4,color:"white"}
// and return a string like this:
// "This white dog has 4 legs."
//дана функция принимающая объект и возвращающая строку

//✅
function animal({name, color, legs}){
  return `This ${color} ${name} has ${legs} legs.`;
}
console.log(animal({ name: "dog", legs: 4, color: "white" }))
console.log(animal({ name: "cock", legs: 2, color: "red" }))
console.log(animal({ name: "rabbit", legs: 4, color: "gray" }))