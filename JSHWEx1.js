let colors = ['red', 'blue', 'green', 'orange'];

function cloneArray(arraytoClone) {
	newArray = [];

	for (let color of colors) {
		newArray.push(color);
	}
	return newArray;
}

let clonedArray = cloneArray(colors);