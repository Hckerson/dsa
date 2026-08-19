const myArray = [64, 34, 25, 12, 22, 11, 90, 5];
const length = myArray.length;

let unSorted = true;
let currentlyTrackedIndex = 0;

function rearrange(activeIndex, trackedIndex) {
	const target = myArray[activeIndex];

	if (myArray[trackedIndex] > target) {
		myArray.splice(activeIndex, 1);
		myArray.splice(trackedIndex, 0, target);
		trackedIndex = trackedIndex + 1;
	}
}

while (unSorted) {
	for (let i = 1; i <= length - 1; i++) {
		rearrange(i, currentlyTrackedIndex)
	}
	
}

console.log(myArray);
