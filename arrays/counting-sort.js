const myArray = [64, 34, 25, 12, 22, 11, 90, 5, 25, 12, 64]
const length = myArray.length


const storex = new Map()
const arrangedArray = []
for (let i = 0; i < length; i++) {
    const number = myArray[i]
    storex.set(number, storex.get(number) === undefined ? 1 : (storex.get(number) + 1))
}

Array.from(storex).sort(([a], [b]) => a - b).map(([num, count]) => {
    for (let i = 0; i < count; i++) {
        arrangedArray.push(num)
    }
})

console.log(arrangedArray)