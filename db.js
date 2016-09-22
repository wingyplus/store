const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'store-user',
  password: 'store-secret',
  database: 'store',
});
connection.connect();

module.exports = {
  query(q) {
    return new Promise((resolve, reject) => {
      connection.query(q, (err, result) => {
        resolve(result);
      });
    });
  },
};
