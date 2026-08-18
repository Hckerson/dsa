const myArray = [64, 34, 25, 12, 22, 11, 90, 5];
const length = myArray.length;

let unSorted = true;
let currentlyTrackedIndex = 0;

while (unSorted) {
	for (let i = 1; i <= length - 1; i++) {
		const target = myArray[i];
        
		if (myArray[currentlyTrackedIndex] > target) {
			myArray.splice(i, 1);
			myArray.splice(currentlyTrackedIndex, 0, target);
			currentlyTrackedIndex = currentlyTrackedIndex + 1;
		}
	}
}

console.log(myArray);
