var input = document.querySelector("#input");
var button = document.querySelector("#button");
var ul = document.querySelector("#ul");

var todos = JSON.parse(localStorage.getItem("list_todo")) || [];

function render() {
  ul.innerHTML = "";
  for (todo of todos) {
    var li = document.createElement("li");
    var text = document.createTextNode(todo);
    li.appendChild(text);
    ul.appendChild(li);
    var a = document.createElement("a");
    a.setAttribute("href", "#");
    var exclud = document.createTextNode("Exluir");
    a.appendChild(exclud);
    ul.appendChild(a);

    position = todos.indexOf(todo);
    a.setAttribute("onclick", `excluir(${position})`);
  }
}
button.onclick = addTodo;

function addTodo() {
  var text = input.value;
  todos.push(text);
  render();
  input.value = "";
  saveToStorage();
}

function excluir(id) {
  console.log(id);
  console.log(todos);

  todos.splice(id, 1);
  console.log(todos);

  render();
  saveToStorage();
}

render();

function saveToStorage() {
  localStorage.setItem("list_todo", JSON.stringify(todos));
}
