function sum(numberArray) {
	let total = 0;

	for (let num of numberArray) {
		total += num;
	}
	return total;
}

let numberArray = [1,12,17,3,24,8];
let total = sum(numberArray);