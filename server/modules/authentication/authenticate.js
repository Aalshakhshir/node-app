const jwt = require('jsonwebtoken');
const TOKEN_SECRET = "7bc78545b1a3923cc1e1e19523fd5c3f20b409509";

function authenticateToken(req, res, next) {
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token
    jwt.verify(token, TOKEN_SECRET , (err, user ) => {
      console.log(err)
      if (err) return res.sendStatus(403)
      req.user = user
      next() // pass the execution off to whatever request the client intended
    })
}

module.exports = {
    authenticateToken
}