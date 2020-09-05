var addButton = document.getElementById("addbutton");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
	alert("ADD BUTTON CLICKED!");
}
var removeButton = document.getElementById("removebutton");
removeButton.addEventListener("click", removeToDoItem);
function removeToDoItem() {
	alert("REMOVE BUTTON CLICKED!");
}
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearToDoItem);
function clearToDoItem() {
	alert("CLEAR BUTTON CLICKED!");
}
