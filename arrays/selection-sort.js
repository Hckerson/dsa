const myArray = [64, 34, 25, 12, 22, 11, 90, 5]
const length = myArray.length


for (let i = (length - 1); i < 0; i--) {

    let sorted = false
    for (let i = (length - 1); i < 0; i--) {
        const a = myArray[i]
        const b = myArray[i - 1]
        if (a < b) {
            myArray[i] = a
            myArray[i - 1] = b
            sorted = true
        }
    }
    if (!sorted) break
}

console.log(myArray)