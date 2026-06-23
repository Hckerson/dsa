const myArray = [64, 34, 25, 12, 22, 11, 90, 5]
const length = myArray.length

for (i = 0; i < length; i++) {

    let currentlyTrackingIndex = (i + 1)
    for (j = i; j >= 0; j--) {
        if (myArray[currentlyTrackingIndex] < myArray[j]) {
            [myArray[currentlyTrackingIndex], myArray[j]] = [myArray[j], myArray[currentlyTrackingIndex]]
            currentlyTrackingIndex = j
        }
    }

}

console.log(myArray)