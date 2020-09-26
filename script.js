var uniqueID = 1;
var counter = 0;
var reset = 0;
removebutton = document.getElementById('removebutton');
function addElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    counter++;
    document.getElementById("myList").appendChild(li);
    li.setAttribute('id', uniqueID);
    document.getElementById('carrier').innerHTML =counter;
    uniqueID++;
    console.log(li);
  }
  document.getElementById("myInput").value = "";
}
// Check part
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    if(ev.target.classList[0]){
        x = ev.target;
        console.log(x);
    }
  }
});
removebutton.addEventListener('click',function(){
    lists = document.querySelectorAll('.checked');
    lists.forEach(list => {
        list.remove();
       document.getElementById('carrier').innerHTML = counter-=1;
    })
})

//clear
function clearToDoItem() {
  document.getElementById('myList').innerHTML=""; 
  document.getElementById('carrier').innerHTML = reset;
}

