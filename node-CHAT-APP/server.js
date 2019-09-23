const express = require('express');
const bodyParser = require('body-parser');
//const io=require("socket.io")(server)

const route = require('./chatapp/routes/register.routes')
//var expressValidator = require('express-validator');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use("/", route)
var http = require('http').Server(app);
var io = require('socket.io')(http)
//Whenever someone connects this gets executed
io.on('connection', function(socket) {
    console.log('A user connected');
    
        socket.emit('testerEvent!',{description:"Hey this Chat app is developed by Mukul Vij"});
     
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
 });
 http.listen(3000, function() {
    console.log('Server is listening on port 3000 ');
 });

// Configuring the database
//app.use('/',expressValidator);
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
app.use(express.static('./UI'))
mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser',true)
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(bodyParser.json())
// define a simple route
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

// listen for requests
// require('./app/routes/register.routes')(app)
// app.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });      