//📌Multiply the number
// Jack really likes his number five: the trick here is that you have to multiply
// each number by 5 raised to the number of digits of each numbers, so, for example:
//
//✅
function multiply(number){
  const digitCount = Math.abs(number).toString().length;
  return number * Math.pow(5, digitCount);
}

console.log(multiply(10))

//TESTS
// assert.strictEqual(multiply(10), 250);
// assert.strictEqual(multiply(0), 0);
// assert.strictEqual(multiply(-2), -10);