const myArray = [64, 34, 25, 12, 22, 11, 90, 5];
const length = myArray.length;

for (let i = length - 1; i > 0; i++) {
	let swapped = false;

	for (let j = 0; j < i; j++) {
		if (myArray[j] > myArray[j + 1]) {
			[myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
			swapped = true;
		}
	}

	if (!swapped) break;
}

console.log(myArray);
