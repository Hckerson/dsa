const myArray = [64, 34, 25, 12, 22, 11, 90, 5]
const length = myArray.length


for (let i = 0; i < (length - 1); i++) {

    let smallestNumberIndex = i
    for (let j = (i + 1); j < length; j++) {

        if (myArray[j] < myArray[smallestNumberIndex]) {
            smallestNumberIndex = j
        }
    }

    [myArray[i], myArray[smallestNumberIndex]] = [myArray[smallestNumberIndex], myArray[i]]

}

console.log(myArray)