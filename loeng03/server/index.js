const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

let todoId = 0;
let todos = [];

app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.get('/todos', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(todos));
})

app.post('/todos', (req, res) => {
  todos.push({
    todoId: todoId++,
    text: req.body.text,
    isChecked: false
  });
  console.log(todos);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(todos));
})

app.put('/todos/:todoId', (req, res) => {
  console.log('toggle idga', req.params.todoId);
  for (let todo of todos) {
    if (todo.todoId === parseInt(req.params.todoId, 10)) {
      todo.isChecked = !todo.isChecked;
    }
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(todos));
});

app.delete('/todos/:todoId', (req, res) => {
  console.log('kustutame id-ga', req.params.todoId);
  todos = todos.filter((todo) => todo.todoId !== parseInt(req.params.todoId, 10));
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(todos));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})