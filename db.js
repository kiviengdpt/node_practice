const low = require('lowdb');
const fileSync = require('lowdb/adapters/FileSync');
const adapters = new fileSync('db.json');

db = low(adapters);
db.defaults({ users: [] })
  .write();

module.exports = db;