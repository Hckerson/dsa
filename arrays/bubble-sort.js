const myArray = [64, 34, 25, 12, 22, 11, 90, 5]
const length = myArray.length

for (let i = (length - 1); i > 0; i--) {

    let swapped = false
    for (let i = 0; i < (length - 1); i++) {
        const a = myArray[i]
        const b = myArray[i + 1]
        const rightOrder = a < b
        if (!rightOrder) {
            myArray[i] = b
            myArray[i + 1] = a
            swapped = true
        }
    }
    if (!swapped) break
}

console.log(myArray)