
const startTime = Date.now();

const  values = Array.from({ length: 10000000 }, (_, i) => i);
const endTime = Date.now();
console.log(`Time taken: ${endTime - startTime} ms`);
console.log(`Time taken in seconds: ${(endTime - startTime) / 1000} s`);