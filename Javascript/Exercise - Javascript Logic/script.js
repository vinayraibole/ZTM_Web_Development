const stringSeperator = (arr) => {
	let numbers = [];
	let strings = [];
	for (element of arr) {
		typeof(element) === "number" ? numbers.push(element) : strings.push(element);
	}
	return [numbers,strings];
}

const organizeRoom = (arr) => {
	let obj = {};
	for (element of arr) {
		if (!obj[element]) {
			obj[element] = element;
		} else if (obj[element] && typeof(obj[element])!=="object") {
			obj[element] = [element,element];
		} else {
			obj[element].push(element);
		}
	}
	return Object.values(obj);
}

const cleanTheRoom = (arr) => {
	let newArr = stringSeperator(arr);
	let numbers = organizeRoom(newArr[0]);
	let strings = organizeRoom(newArr[1]);
	return [numbers,strings];
}

let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
let array2 = [1, "2", "3", 2];

console.log(array);
console.log(array2);

const targetFinder= (arr, target) => {
	for (let i=0;i<target;i++) {
		if (arr.includes(target-i) &&  arr.includes(i)) {
		return [target-i,i];
		}	
	}
	return "Not Possible";
}

console.log(targetFinder([1,2,3],4);

const colorConvertor = (string) => {
	if (string.length===7) {
		return `rgb(${parseInt((string[1]+string[2]),16)},${parseInt((string[3]+string[4]),16)},${parseInt((string[5]+string[6]),16)})`;	
	} else {
		let rgb1 = Number(string.split(",")[0].split("(")[1]);
		let rgb2 = Number(string.split(",")[1]);
		let rgb3 = Number(string.split(",")[2].split(")")[0]);
		return `#${rgb1.toString(16)}${rgb2.toString(16)}${rgb3.toString(16)}`.toUpperCase();
	}
}

console.log(colorConvertor("#FE42A7"));
console.log(colorConvertor(colorConvertor("#FE42A7")));