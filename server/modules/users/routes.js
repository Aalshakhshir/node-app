const express = require('express');
const users = express.Router();
const getUsers = require('./controller').getUsers;

users.get('/', getUsers) // TBD in controller login functionality

module.exports = users;