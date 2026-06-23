const myArray = [64, 34, 25, 12, 22, 11, 90, 5]
const length = myArray.length


for (i = 0; i < length; i++) {

    let smallNumberIndex = i
    for (j = (i + 1); j < length; j++) {
        if (myArray[smallNumberIndex] > myArray[j]) {
            smallNumberIndex = j
        }
    }

    [myArray[i], myArray[smallNumberIndex]] = [myArray[smallNumberIndex], myArray[i]]
}

console.log(myArray)