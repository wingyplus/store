const express = require('express');
const app = express();
const todoStore = require('./todoStore');

app.get('/', (req, res) => {
  res.set({
    'Content-Type': 'application/json',
  });
  res.send({ text: 'hello world' });
});

app.get('/todo/list', (req, res) => {
  todoStore
    .list()
    .then((items) => res.send(items));
});

module.exports = app;
