const express = require('express');
const bodyParser = require('body-parser');
//const io=require("socket.io")(server)

const route = require('./app/routes/register.routes')
//var expressValidator = require('express-validator');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use("/", route)
// Configuring the database
//app.use('/',expressValidator);
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to the new trend,CHAT APP. Now dont feel far away from your loved ones.Ping them with one click and spread Happiness. " });
});

// listen for requests
// require('./app/routes/register.routes')(app)
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});