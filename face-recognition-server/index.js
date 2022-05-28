const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');


//MongoDB local URL
const database = "mongodb://localhost:27017/face-recognition";

// DB connection
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log(`MongoDB connected ${database} `))
.catch(err => console.log(err));

//express instance
const app = express();

//body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

//Routes
app.use('/', require('./api/api'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//start your server on port 5000
app.listen(5000, () => {
  console.log('Server Listening on port 5000');
});