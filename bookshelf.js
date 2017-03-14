const fs = require('fs');

fs.readFile('/path/to/file.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    var obj = JSON.parse(data);
});

const dbConfig = {
  client: 'mariasql',
  connection: {
    host     : '127.0.0.1',
    user     : 'wulfcode',
    password : 'your_database_password',
    database : 'footybot',
    charset  : 'utf8'
  }
}

const knex = require('knex');
module.exports = require('bookshelf')(knex);