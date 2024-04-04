var addButton = document.getElementById("add-button");
addButton.addEventListener("click", addToDoItem);
function addToDoItem() {
  alert("add button clicked");
}

var toDoEntryBox = document.getElementById("todo-entry-box");
var toDoList = document.getElementById("todo-list");

function newToDoItem(itemText, completed) {
  var toDoItem = document.createElement("li");
  var todoText = document.createTextNode(itemText);
  toDoItem.appendChild(todoText);

  if (completed) {
    toDoItem.classList.add("completed");
  }

  toDoList.appendChild(toDoItem);
  toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
  var itemText = toDoEntryBox.value;
  newToDoItem(itemText, false);
}

function toggleToDoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}

function clearCompletedToDoItems() {
  var completedItems = toDoList.getElementsByClassName("completed");

  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}

function emptyList() {
  var toDoItems = toDoList.children;
  while (toDoItems.length > 0) {
    toDoItems.item(0).remove();
  }
  // alert("Semua List Dihapus");
}

var myArray = [];
myArray.push("Welcome");
myArray.push("got it");
alert(myArray[0]);

var toDoInfo = {
  task: "Thing i need to do",
  completed: false,
};

function saveList() {
  var toDos = [];

  for (var i = 0; i < toDoList.children.length; i++) {
    var toDo = toDoList.children.item(i);

    var toDoInfo = {
      task: toDo.innerText,
      completed: toDo.classList.contains("completed"),
    };

    toDos.push(toDoInfo);
  }

  localStorage.setItem("toDos", JSON.stringify(toDos));
  console.log("come in here");

  // alert("List Disimpan");
}

function loadList() {
  if (localStorage.getItem("toDos")) {
    var toDos = JSON.parse(localStorage.getItem("toDos"));

    for (var i = 0; i < toDos.length; i++) {
      var toDo = toDos[i];
      newToDoItem(toDo.task, toDo.completed);
    }
  }
}

loadList();
