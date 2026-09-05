const myArray = [64, 2, 25, 12, 22, 11, 90];

function binarySearch(arr, num) {
    const sortedArray = [...arr].sort((a, b) => a - b);
    let left = 0;
    let right = sortedArray.length;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (sortedArray[mid] === num) {
            return mid;
        } else if (sortedArray[mid] > num) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

const x = binarySearch(myArray, 64);
console.log(x);
