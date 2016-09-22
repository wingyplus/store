const mysql = require('mysql');

let connection = null;

module.exports = {
  connect() {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'store-user',
      password: 'store-secret',
      database: 'store',
    });
    connection.connect();
  },

  end() {
    connection.end();
  },

  query(table) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM ??', [table], (err, result) => {
        resolve(result);
      });
    });
  },

  insert(table, data) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO ?? SET ?',
        [table, data],
        (err, result) => {
          resolve();
        });
    });
  },

  deleteAll(table) {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM ??', [table], () => {
        resolve();
      });
    });
  },
};
