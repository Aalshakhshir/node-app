const express = require('express');
const adminAuth = express.Router();
const login = require('./controller').login;

adminAuth.post('/login', login) // TBD in controller login functionality

module.exports = adminAuth;