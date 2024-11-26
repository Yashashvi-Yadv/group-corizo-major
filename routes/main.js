const express = require('express');
const app = express();
//const userController = require('../controllers/userController');
const Sign = require('../controllers/Basic/Sign');
const Login = require('../controllers/Basic/Login');


app.get('/', (req, res) => {
    res.render('Home');
  });

  app.get('/logout', (req, res) => {
    res.redirect('/');
  });
  // Render Login Page
app.get('/login', (req, res) => {
    res.render('Login');
  });

app.get('/signup', (req, res) => {
    res.render('Sign');
  });

  app.post("/signup", Sign)
app.post("/login", Login)

module.exports = app;