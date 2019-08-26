var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var userRoute = require('./routes/users.route');
var authRoute = require('./routes/auth.route');

var authMiddleware = require('./middleware/auth.middleware');

var port = 3000;
var app = express();
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', {
    name: 'by Duoc ku'
  });
});

app.use(express.static('public'));

app.use('/users', authMiddleware.requireAuth ,userRoute);
app.use('/auth', authRoute);

app.listen(port, () => {
  console.log('Nodejs server is listening on port : ' + port);
}); 