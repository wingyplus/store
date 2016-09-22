const db = require('./db');
db.connect();
db.insert('todo', { title: 'Learn React', completed: 0 });

const app = require('./storeApp');
const server = app.listen(3000, () => {
  console.log('listen on 3000');
});
