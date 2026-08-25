const myArray = [64, 34, 25, 12, 22, 11, 90, 5, 25, 12, 64];
const length = myArray.length;

const highestValue = Math.max(...myArray)
const countingArray = new Array(highestValue + 1).fill(0)

for (let i = 0; i < length; i++) {
    countingArray[myArray[i]]++
}

const arrangedArray = []
for (let i = 0; i < countingArray.length; i++) {
    while (countingArray[i] > 0) {
        arrangedArray.push(i)
        countingArray[i]--
    }
}

console.log(arrangedArray)
