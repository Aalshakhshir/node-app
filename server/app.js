const express = require('express');
const cors = require('cors');


const app = express();

const authRoutes = require('./modules/authentication/routes');
const userRoutes = require('./modules/users/routes');
const complaintRoutes = require('./modules/complaints/routes');
const adminAuthRoutes = require('./modules/admin/routes');
const bodyParser = require('body-parser');


app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
  }));


app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port: 3000`)
})

app.get('/', (req,res, next) => {
    res.send("public api's");
    next();
})

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/complaints', complaintRoutes);

app.use('/api/admin', adminAuthRoutes);