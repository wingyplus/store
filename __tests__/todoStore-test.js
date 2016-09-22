describe('todoStore', () => {
  const todoStore = require('../todoStore');

  describe('list', () => {
    it('should retrieve all todos', () => {
      expect(todoStore.list()).toEqual([]);
    });
  });
});
