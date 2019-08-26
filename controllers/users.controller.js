var db = require('../db');
var shortId = require('shortid');

module.exports.index = (req, res) => {
  res.render('users/index', {
    users: db.get('users').value()
  });
}

module.exports.search = (req, res) => {
  //return value of key 'q'
  var q = req.query.q;
  //return a array matching with query object non-consider low-upper case
  var matchedUsers = db.get('users').value().filter((users) => {
    return users.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  //render
  res.render('users/index', {
    users: matchedUsers
  });
}

module.exports.create = (req, res) => {
  res.render('users/create');
}

module.exports.postCreate = (req, res) => {
  req.body.id = shortId.generate();

  db.get('users').push(req.body).write();
  res.redirect('/users');
}

module.exports.get = (req, res) => {
  var id = req.params.id;

  var user = db.get('users').find({ id: id }).value();

  res.render('users/view', {
    user: user
  });
}
