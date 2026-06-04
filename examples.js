
const factorial = (n) => {
    if (n === 0 || n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))

const sumOfFirstSetOFNumbers = (n) => {
    if (n === 1) return 1
    return n + sumOfFirstSetOFNumbers(n - 1)
}
console.log(sumOfFirstSetOFNumbers(9))

const numbers = [3, 42, 2, 1, 5, 8, 13, 21]

// index only needed when you need to work with an external set of numbrs

const maxOfNumber = (num,idx)=>{
    if (idx === (num.length - 1)) return num[idx]

    return Math.max(num[idx], maxOfNumber(num, (idx + 1)))
}

console.log(maxOfNumber(numbers, 0))