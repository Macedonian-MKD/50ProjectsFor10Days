const todosContainer = document.querySelector("#todos");
const form = document.getElementById("form");
const input = document.getElementById("input");

const todos = JSON.parse(localStorage.getItem("todosElements"));

if (todos) {
  todos.forEach((todo) => {
    createTodo(todo);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  createTodo();
});

function createTodo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;
    todoEl.addEventListener("click", function () {
      todoEl.classList.toggle("completed");
      updateLS();
    });
    todoEl.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todosContainer.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
}

function updateLS() {
  const todosEls = document.querySelectorAll("li");
  const todos = [];
  todosEls.forEach((todo) => {
    todos.push({
      text: todo.innerText,
      completed: todo.classList.contains("completed"),
    });
  });
  localStorage.setItem("todosElements", JSON.stringify(todos));
}
