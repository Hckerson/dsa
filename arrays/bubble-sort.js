const myArray = [64, 34, 25, 12, 22, 11, 90, 5]
const length = myArray.length

for (let i = length; i > 0; i--) {

    let swapped = false
    for (j = 0; j < (i - 1); j++) {

        if (myArray[j] > myArray[j + 1]) {
            [myArray[j + 1], myArray[j]] = [myArray[j], myArray[j + 1]]
            swapped = true
        }
    }

    if (!swapped) break
}

console.log(myArray)