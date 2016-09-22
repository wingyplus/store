jest.mock('../todoStore');

describe('storeApp', () => {
  const request = require('supertest');
  const storeApp = require('../storeApp');
  const todoStore = require('../todoStore');

  describe('/', () => {
    it('should return "hello world" in json format', async () => {
      await request(storeApp)
        .get('/')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200, { text: 'hello world' });
    });
  });

  describe('/todo/list', () => {
    it('should return todos from store', async () => {
      const items = [
        { id: 1, title: 'Learn React', complete: false },
      ];
      todoStore.list.mockReturnValueOnce(Promise.resolve(items));

      await request(storeApp)
        .get('/todo/list')
        .expect(200, items);

      expect(todoStore.list).toBeCalled();
    });
  });
});
