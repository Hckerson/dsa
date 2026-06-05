const myArray = [64, 34, 25, 12, 22, 11, 90, 5]
const length = myArray.length

for (let i = (length - 1); i > 0; i--) {

    let swapped = false
    for (let j = 0; j < (length - 1); j++) {
        const a = myArray[j]
        const b = myArray[j + 1]
        const rightOrder = a < b
        if (!rightOrder) {
            myArray[j] = b
            myArray[j + 1] = a
            swapped = true
        }
    }
    if (!swapped) break
}

console.log(myArray)