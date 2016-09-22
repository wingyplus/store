function createTodo(connection) {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO todo SET ?',
      { title: 'Learn React', completed: 0 },
      (err, result) => {
        resolve();
      });
  });
}

function destroyTodos(connection) {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM todo', () => {
      resolve();
    });
  });
}

describe('todoStore', () => {
  const todoStore = require('../todoStore');
  const mysql = require('mysql');

  describe('list', () => {
    let connection;

    beforeAll(() => {
      connection = mysql.createConnection({
        host: 'localhost',
        user: 'store-user',
        password: 'store-secret',
        database: 'store',
      });
      connection.connect();
    });

    afterAll(() => {
      connection.end();
    });

    beforeEach(async () => {
      await createTodo(connection);
    });

    afterEach(async () => {
      await destroyTodos(connection);
    });

    it('should retrieve all todos', async () => {
      let todos = await todoStore.list();
      expect(todos[0].title).toEqual('Learn React');
      expect(todos[0].completed).toBe(false);
    });
  });
});
