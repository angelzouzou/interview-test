// Test 1 

export const flux = (num) => {
	let arr = [];
	for (let i=1;i<=num;i++) {
		let up = i % 3 === 0;
		let down = i % 5 === 0;
		arr.push (up & down ? "up&down" : up ? "up" : down ? "down" : i);
	}
	return arr;
};