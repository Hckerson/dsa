const myArray = [64, 2, 25, 12, 22, 11, 90];
const length = myArray.length;

function binarySearch(arr, num) {
    const sortedArray = arr.sort();
    let left = 0;
    let right = length;

    let mid = Math.floor((right - left) / 2);

    while (num != mid) {
        if (sortedArray[mid] > num) {
            right = mid;
        } else {
            left = mid;
        }
        mid = Math.floor((right - left) / 2);
    }
    return mid;
}

const x = binarySearch(myArray, 2);
console.log(x);
