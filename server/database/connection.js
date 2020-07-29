var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'K@rgo123!',
  database: 'complaints'
});


function connect() {
    connection.connect()
}

function endConection() {
    connection.end()
}

module.exports = {
    connect,
    endConection,
    connection,
}