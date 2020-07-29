const express = require('express');
const authenticate = require('../authentication/authenticate');
const complaints = express.Router();
const authenticateToken = require('../authentication/authenticate').authenticateToken;
const getComplaints = require('./controller').getComplaints;
const getComplaintsByUserId = require('./controller').getComplaintsByUserId;
const updateComplaint = require('./controller').updateComplaintStatus;
const addNewComplaint = require('./controller').createComplaint;

complaints.get('/', authenticateToken, getComplaints);
complaints.get('/:id',authenticateToken, getComplaintsByUserId);

// update status for the admin

complaints.put('/:id', authenticateToken, updateComplaint);

// post a new complaint as a customer

complaints.post('/create', authenticateToken, addNewComplaint);




module.exports = complaints;