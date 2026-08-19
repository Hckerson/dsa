const myArray = [64, 34, 25, 12, 22, 11, 90, 5, 25, 12, 64];
const length = myArray.length;

const countSort = (arr) => {
	const sorted = new Map();

	for (let i = 0; i <= length - 1; i++) {
		sorted.set(
			arr[i],
			sorted.get(arr[i]) === undefined ? 1 : sorted.get(arr[i]) + 1,
		);
	}

	arr.length = 0;

	Array.from(sorted)
		.sort(([a], [b]) => a - b)
		.forEach(([a, b]) => {
			Array(b).fill().forEach(() => arr.push(a));
		});

	console.log(myArray);
};

countSort(myArray);
