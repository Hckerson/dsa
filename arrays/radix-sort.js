const myArray = [170, 45, 75, 90, 802, 24, 2, 66];

const radixSortArray = [[], [], [], [], [], [], [], [], [], []];

const length = Math.max(...myArray).toString().length;

function extractDigit(num, index) {
	return String(num).split("").reverse()[index] || null;
}

for (let i = 0; i < length; i++) {

	for (let j = 0; j < myArray.length; j++) {
		const digit = extractDigit(myArray[j], i);
		if (!digit) return;
		radixSortArray[digit].push(myArray[j]);
	}

console.log(myArray)


	myArray.length = 0;

	myArray.push(
		...radixSortArray.flatMap((bucket) => bucket)
	);
    
}

console.log(myArray)


