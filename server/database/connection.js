var mysql = require('mysql')
var connection        = mysql.createPool({
    connectionLimit : 10, // default = 10
    host            : 'localhost',
    user            : 'root',
    password        : 'K@rgo123!',
    database        : 'complaints'
});


function connect() {
    connection.getConnection()
}

function endConection() {
     
}

module.exports = {
    connect,
    endConection,
    connection,
}