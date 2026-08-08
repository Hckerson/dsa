const myArray = [64, 34, 25, 12, 22, 11, 90, 5]
const length = myArray.length


for (let i = 0; i < length - 1; i++) {
    let currentlyTrackedIndex = i;

    for (let j = (i + 1); j <= length - 1; j++) {
        if (myArray[currentlyTrackedIndex] > myArray[j]) {
            currentlyTrackedIndex = j;
        }
    }

    [myArray[currentlyTrackedIndex], myArray[i]] = [
        myArray[i],
        myArray[currentlyTrackedIndex],
    ];
}

console.log(myArray)