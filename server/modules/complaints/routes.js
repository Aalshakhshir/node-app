const express = require('express');
const complaints = express.Router();
const authenticateToken = require('../authentication/authenticate').authenticateToken;
const getComplaints = require('./controller').getComplaints;
const getComplaintsByUserId = require('./controller').getComplaintsByUserId;

complaints.get('/', authenticateToken, getComplaints);
complaints.get('/:id',authenticateToken, getComplaintsByUserId);


module.exports = complaints;