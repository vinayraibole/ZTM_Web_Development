4+3;

// if (4+3 ===7){
// 	alert("You are smart!");
// }

console.log("We have loaded javascript")

var list = ["tiger","cat","bear","bird"]
console.log(list[1])
console.log(list[0])

var numbers = [1,2,3,4,5]

var booleans = [true,false,true]

var functions = [function apple(){
	console.log("Apple")
}]

var mixed = ["apples",2,3,false,true, function apple(){
	console.log("apple")
}]

var nestedArr = [[,1,2,3,4],["tiger","cat","bear","bird"]]


// Object
var user = {
	name : "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	spells: ['Abra Cadabra', 'Shazam', 'Expelliarmus'],
	shout: function() {
		console.log("AHHHHHH!!!")
	},
	superPower : null,
};

// Looping
var toDos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy",
];

for (var i=0; i< toDos.length; i++){
	toDos[i] = toDos[i]+"!";
	console.log(toDos[i]);
}

for (var i=0; i< toDos.length; i++){
	toDos.pop();
}

// This won't pop everything since toDos length will change

var toDos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy",
];

var toDosLength = toDos.length

for (var i=0; i< toDosLength; i++){
	toDos.pop();
}

var counterOne = 0;
while (counterOne<10) {
	console.log(counterOne);
	counterOne++;
}

var counterOne = 10;
while (counterOne>0) {
	console.log(counterOne);
	counterOne--;
}

var counterTwo = 10;
do {
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo>0);

var toDos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy",
];

for (var i=0; i< toDos.length; i++){
	console.log(toDos[i]);
}

toDos.forEach(function(i, index){
	console.log(i, index);
})