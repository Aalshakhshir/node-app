const connection = require('../../database/connection').connection;
const TOKEN_SECRET = "7bc78545b1a3923cc1e1e19523fd5c3f20b409509";
const jwt = require('jsonwebtoken');

function generateAccessToken(user) {
    return jwt.sign( { userId: user.id }, TOKEN_SECRET , { expiresIn: "2h" });
}

function login(req, res) {
    // get user from db and password and decrypt.
    connection.getConnection((err) => {
        if(err) console.log(err);
        connection.query("SELECT * from users where username=" + `'${req.body.username}'`,function (err,results, fields) {
            console.log(err, results[0]);
            if (err)  console.log(err);
            if(req.body.password === results[0].password) {
                res.json({ token: generateAccessToken(results[0])});
            }
        })
    })
}
function signUp(req, res) {
    const user = {
        username: req.body.username,
        password: req.body.password, // encrypt with JWT,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        isAdmin: false // admins will be created through a special admin api or directly from DB
    }
    connection.getConnection((err) => {
        if(err) console.log(err);
        connection.query('INSERT INTO users SET ?', user, (err, results,fields) => {
            if (err) console.log(err);
            res.send({ message: 'success', user})
        })
         ;
    })

}

module.exports = {
    login,
    signUp,
}