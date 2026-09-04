const myArray = [170, 45, 75, 2, 802, 24, 2, 66];
const radixSortArray = [[], [], [], [], [], [], [], [], [], []];

function extractDigit(digit, idx) {
    return Number(String(digit).split("").reverse()[idx]) || 0;
}

const max_value = Math.max(...myArray);
let exp = 1;
let trackedIndex = 1;

while (Math.floor(max_value / exp) > 0) {
    for (let i = 0; i < myArray.length; i++) {
        radixSortArray[extractDigit(myArray[i], trackedIndex)].push(myArray[i]);
    }

    myArray.length = 0;

    for (let j = 0; j < radixSortArray.length; j++) {
        for (let k = 0; k < radixSortArray[j].length; k++) {
            myArray.push(radixSortArray[j][k]);
        }
        radixSortArray[j].length = 0;
    }
    exp *= 10;
    trackedIndex += 1;
}

console.log(myArray);
