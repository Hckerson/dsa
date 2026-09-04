const fibonacci = (n) => {
    const fib = [];
    if (n <= 2) {
        if (n === 2) {
            fib.push(0, 1);
        } else {
            fib.push(0);
        }
        return fib;
    }
    fib.push(0, 1);
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
};

console.log(fibonacci(12));

const recursiveFibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fib = recursiveFibonacci(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
};

console.log(recursiveFibonacci(12));

const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(19));
