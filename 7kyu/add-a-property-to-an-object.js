// Write a function that adds a named property to an object.
//   It must be possible to set the property to a new value.
// If the property already exists on the object, and error should be thrown.
//написать функцию которая добавляет именованное свойство объекту
//с возможностью присвоения свойству нового значения
//если свойство уже существует выдать ошибку


function addProperty(obj, prop, value) {
  if (obj.hasOwnProperty(prop)) {
    throw new Error(`Свойство "${prop}" уже существует в объекте`);
  }

  obj[prop] = value;
  return obj;
}

