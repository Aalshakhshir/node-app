const connection = require('../../database/connection').connection;
const TOKEN_SECRET = "7bc78545b1a3923cc1e1e19523fd5c3f20b409509";
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    return jwt.sign( { userId: user.id }, TOKEN_SECRET , { expiresIn: "2h" });
}

function login(req, res) {
    // get user from db and password and decrypt.
    connection.getConnection((err) => {
        if(err) throw err;
        connection.query("SELECT * from admin_users where username=" + `'${req.body.username}'`,function (err,results, fields) {
            console.log(err, results[0]);
            if (err) throw err;
            if(req.body.password === results[0].password) {
                res.json({ token: generateAccessToken(results[0])});
            }
        })
         ;
    })
}

module.exports = {
    login,
}