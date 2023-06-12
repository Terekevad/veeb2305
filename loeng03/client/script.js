const todoList = document.querySelector('#todo-list');
const inputElement = document.querySelector('#input');
const url = 'http://localhost:3000/todos/';

inputElement.addEventListener('keyup', function (event) {
  if (inputElement.value === '') {
    return;
  }

  if (event.key === "Enter") {
    lisaTodo();
  }
});

async function lisaTodo() {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: inputElement.value })
  }).then((data) => data.json());

  renderdaTodod(response);

  inputElement.value = '';
}

async function toggleTodo(todoId) {
  const response = await fetch(url + todoId, {
    method: 'PUT'
  }).then((data) => data.json());

  renderdaTodod(response);

  inputElement.value = '';
}

function kysiTodod() {
  fetch(url)
    .then((data) => data.json())
    .then((todos) => {
      renderdaTodod(todos);
    })
    .catch((error) => {
      console.error(error);
    })
}

async function kustutaTodo(todoId) {
  console.log('tahaks kustutada todo id:', todoId);
  const response = await fetch(url + todoId, {
    method: 'DELETE',
  }).then(res => res.json());

  renderdaTodod(response);
}

function renderdaTodod(todos) {
  todoList.innerHTML = '';

  for (let todo of todos) {
    let checkedText = '';
    if (todo.isChecked) {
      checkedText = 'checked';
    }

    todoList.innerHTML += `
      <div class="todo">
        <input type="checkbox" onclick="toggleTodo(${todo.todoId})" ${checkedText}>
        <span class="text ${checkedText}">${todo.text}</span>
        <span onclick="kustutaTodo(${todo.todoId})">x</span>
      </div>
    `;
  }
}

kysiTodod();