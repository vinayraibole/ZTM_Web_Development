var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ol = document.querySelector("ol");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function toggleDone(element){
	element.addEventListener("click", function(){
		element.classList.toggle("done");
	})
}

function addDeleteButton(element){
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("Delete"));
	element.appendChild(deleteButton);
	deleteButton.addEventListener("click", function(){
		ol.removeChild(element);
	})
}
	
function createListElement() {
	var li = document.createElement("li");
	toggleDone(li);
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	addDeleteButton(li);
	input.value = "";

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

li.forEach(function(i){
	toggleDone(i);
	addDeleteButton(i);
})