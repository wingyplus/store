const db = require('./db');

module.exports = {
  list() {
    return db.query('SELECT * FROM todo').then((result) => {
      return result.map((todo) => {
        return {
          id: todo.id,
          title: todo.title,
          completed: todo.completed == 1
        };
      });
    });
  }
};
