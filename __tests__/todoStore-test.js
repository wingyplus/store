const db = require('../db');

function createTodo() {
  return db.insert('todo', { title: 'Learn React', completed: 0 });
}

function destroyTodos() {
  return db.deleteAll('todo');
}

describe('todoStore', () => {
  const todoStore = require('../todoStore');

  describe('list', () => {
    beforeAll(() => {
      db.connect()
    });

    afterAll(() => {
      db.end();
    });

    beforeEach(async () => {
      await createTodo();
    });

    afterEach(async () => {
      await destroyTodos();
    });

    it('should retrieve all todos', async () => {
      let todos = await todoStore.list();
      expect(todos[0].title).toEqual('Learn React');
      expect(todos[0].completed).toBe(false);
    });
  });
});
