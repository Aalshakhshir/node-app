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
    // mock api for now until DB is structured and created
     setTimeout(() => {
        res.send([dummyComplaint]);
     }, 400)
}

function updateComplaintStatus(req, res) {
    const id = req.params.id;
    const newStatus = req.body.status
    // to use mysql update statement

    setTimeout(() => {
        complaints.map(item => {
            if (item.id === id) {
                res.json({...item, status: newStatus })
                return {...item, status: newStatus}
            }
            return item;
        })
    })
}
function getComplaintsByUserId(req, res) {
    const id = req.params.id;
    connection.getConnection((err) => {
        if(err) console.log(err);
        connection.query("SELECT * from complaints where userId=" + `${id}`, (err, results,fields) => {
            if (err) console.log(err);
            res.json(complaints)
        })
         ;
    })
}

module.exports = {
    getComplaintsByUserId,
    getComplaints,
    updateComplaintStatus,
}