// Test 2

export const anagram = (str, str2) => {
	let simNum = 0; // 相同字符的数量
	let percent; // 相同字符数量的百分比
	str = str.replace(/\s/g,"").replace(/[^a-zA-Z0-9]/g,"").toLowerCase().split("");
	str2 = str2.replace(/\s/g,"").replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
	str.map( item => { 
		if (str2.includes(item)) simNum += 1;
	})
	percent = str.length > str2.length ? simNum/str.length : simNum/str2.length;
	return percent > 0.8 ? true : false;
};
