
//add
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


//remove
var removeButton = document.getElementById("removebutton");
removeButton.addEventListener("dblclick", removeToDoItem);
function removeToDoItem() {
	for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}

var list = document.querySelector('ol');
list.addEventListener('dblclick', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  } 
}, false);


//clear
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearToDoItem);
function clearToDoItem() {
  document.getElementById('myList').style.display="none";
}
  