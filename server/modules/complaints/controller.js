const connection = require('../../database/connection').connection;

// tbd to move to DB 
const dummyComplaint = {
    id: '1',
    message: 'A dummy complaint by the user',
    status: 'resolved'
}

const complaints = [
    {
        id: '1',
        message: 'A dummy complaint by the user',
        status: 'pending resolution'
    },
    {
        id: '3',
        message: 'A dummy complaint by the user',
        status: 'dismissed'
    },
    {
        id: '2',
        message: 'A dummy complaint by the user',
        status: 'resolved'
    }
]

// for admin to get all must be guarded with admin permits
function getComplaints(req, res) {
    if (req.user.isAdmin) {
        connection.getConnection((err) => {
            if (err) console.log(err);
            connection.query("SELECT * from complaints", (err, results, fields) => {
                if (err) console.log(err);
                res.json(results)
            });
        })
    }
    else res.status(403)
}

function updateComplaintStatus(req, res) {
    const id = req.params.id;
    const newStatus = req.body.status
    // to use mysql update statement
    console.log(req.user);
    if (req.user.isAdmin) {
        connection.getConnection((err) => {
            if (err) console.log(err);
            connection.query(`UPDATE complaints SET status = ? WHERE id = ?`, [newStatus, id], (err, results, fields) => {
                if (err) console.log(err);
                res.json({ message: 'success' })
            });
        })
    }
}
function getComplaintsByUserId(req, res) {
    const id = req.params.id;
    if (req.user.isAdmin) {
        connection.getConnection((err) => {
            if (err) console.log(err);
            connection.query("SELECT * from complaints", (err, results, fields) => {
                if (err) console.log(err);
                res.json(results);
            });
        })
    }
    else {
        connection.getConnection((err) => {
            if (err) console.log(err);
            connection.query("SELECT * from complaints where userId=" + `${id}`, (err, results, fields) => {
                if (err) console.log(err);
                res.json(results);
            });
        })
    }
}
function createComplaint(req, res) {
    const userId = req.user.userId;
    connection.getConnection((err) => {
        if (err) console.log(err);
        connection.query(`INSERT INTO complaints SET ?`, { message: req.body.message, status: 'pending resolution', userId }, (err, results, fields) => {
            if (err) console.log(err);
            res.json(results)
        });
    })
}

module.exports = {
    getComplaintsByUserId,
    getComplaints,
    updateComplaintStatus,
    createComplaint,
}