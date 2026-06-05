const myArray = [64, 34, 25, 12, 22, 11, 90, 5]
const length = myArray.length


for (let i = 1; i < length; i++) {

    let currentlyTrackingIndex = i
    for (let j = (i - 1); j >= 0; j--) {
        jContent = myArray[j]
        trackerContent = myArray[currentlyTrackingIndex]
        if (trackerContent < jContent) {
            myArray[j] = trackerContent
            myArray[currentlyTrackingIndex] = jContent
            currentlyTrackingIndex = j
        }
    }

}

console.log(myArray)