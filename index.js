  var express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./routes/users.route');

var port = 3000;
var app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', {
    name: 'by Duoc ku'
  });
});

app.use(express.static('public'));

app.use('/users', userRoute);
app.listen(port, () => {
  console.log('Nodejs server is listening on port : ' + port);
}); 