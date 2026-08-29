const myArray = [64, 34, 25, 12, 22, 11, 90, 5, 25, 12, 64];
const length = myArray.length;

function linearSearch(array, num) {
  let numIndex;
  let found = false;
  for (let i = 0; i < length; i++) {
    if (array[i] == num) {
        numIndex = i;
        found = true
      break;
    }
  }
  return found ? numIndex : -1;
}

console.log(linearSearch(myArray, 25));
