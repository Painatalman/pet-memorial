const express = require('express');
// no need to require this, unless you need to change settings
const hbs = require('hbs');

var app = express();

// views
app.set('view engine', 'hbs');
hbs.registerPartials(`${__dirname}/views/partials`)
// helpers
hbs.registerHelper(
  'getCurrentYear', require('./helpers/getCurrentYear')
);
hbs.registerHelper(
  'toUpperCase', require('./helpers/toUpperCase')
);

// middleware
app.use(require('./middleware/logRequest'));

// static files
app.use(express.static(`${__dirname}/public`));

app.get('/hello', (req, res) => {
  res.send('Hello Express!');
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About the bout'
  });
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Hello'
  });
});

app.listen(process.env.PORT || 3000);