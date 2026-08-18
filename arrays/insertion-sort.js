const myArray = [64, 34, 25, 12, 22, 11, 90, 5];
const length = myArray.length;

for (let i = 0; i < length - 1; i++) {
	let currentlyTrackedIndex = i + 1;

	for (let j = i; j >= 0; j--) {
		if (myArray[j] > myArray[currentlyTrackedIndex]) {
			[myArray[j], myArray[currentlyTrackedIndex]] = [
				myArray[currentlyTrackedIndex],
				myArray[j],
			];
			currentlyTrackedIndex = j;
		}
	}
}

console.log(myArray);
