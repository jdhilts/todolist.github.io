var nameButton = document.getElementById("new_list_name");
var nameInput = document.getElementById("list_name");
var listContainerDiv = document.getElementById("container");
var input = document.getElementById("input");
var addBtn = document.getElementById("addBtn");

nameButton.addEventListener("click", changeListNameOnClick);
nameInput.addEventListener("keypress", changeListNameOnKeyPress);

addBtn.addEventListener("click", addItemOnClick);
input.addEventListener("keypress", addItemOnKeyPress);

function listNameInputLength(){
	if(nameInput.value.length > 0){
		return nameInput.value.length;
	}
}

function inputLength(){
	if(input.value.length > 0){
		return input.value.length;
	}
}

function addItem(){
	var ul = document.querySelector("ul");
	var li = document.createElement("li");
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("DELETE"));
	deleteBtn.classList.add("delete");
	deleteBtn.addEventListener("click", removeItem);
	li.appendChild(document.createTextNode(input.value + " "));
	li.addEventListener("click", done);
	ul.appendChild(li);
	li.appendChild(deleteBtn);
	input.value = "";
}

function addItemOnClick(){
	if(inputLength() > 0){
		addItem();
	}
}

function addItemOnKeyPress(event){
	if(inputLength() > 0 && event.which === 13){
		addItem();
	}
}

function removeItem(){
	var item = document.getElementsByClassName("delete");
	this.parentNode.remove(item);
}

function done(){
	var li = document.querySelectorAll("li");
	this.classList.add("done");
}

function createListName(){
	var oldP = document.querySelector("p");
	var h2 = document.querySelector("h2");
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(nameInput.value));
	listContainerDiv.replaceChild(p, oldP);
	listContainerDiv.insertBefore(p, h2);
	nameInput.value = "";
}



function changeListNameOnClick(){
	if(listNameInputLength() > 0){
		createListName();
	}
}

function changeListNameOnKeyPress(event){
	if(listNameInputLength() > 0 && event.which === 13){
		createListName();
	}
}

