var database = [
	{
		username: "Vinny",
		password: "123456"
	},
	{
		username: "Danny",
		password: "asdfgh"
	},
	{
		username: "Manny",
		password: "qwerty"
	},
];

var newsFeed = [
	{
		username: "Danny",
		timeline: "So tired of all that learning",
	},
	{
		username: "Manny",
		timeline: "Javascript is soooo cool!"
	}
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass) {
	for (var i = 0; i < database.length; i++){
		if (database[i].username === user && database[i].password === pass){
			return true;
		}
	}
	return false;
}

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
		console.log(newsFeed);
	} else{
		alert("Sorry, wrong username and password!")
	}
}

signIn(userNamePrompt,passwordPrompt);