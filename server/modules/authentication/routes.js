const express = require('express');
const auth = express.Router();
const login = require('./controller').login;
const signup = require('./controller').signUp;

auth.post('/login', login) // TBD in controller login functionality
auth.post('/signup', signup)

module.exports = auth;