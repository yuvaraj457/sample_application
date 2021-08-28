require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var {origin}= require('./config.json')

var indexRouter = require('./routes/index');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
app.use(cors({origin}))


app.use('/', indexRouter);


//Server
app.listen(5000,() => console.log("Server Started..."));

app.use('/static',express.static('uploads'));

//Database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('Database Connected'))
    .catch((error) => console.log(error))

mongoose.set('useFindAndModify', false);

module.exports = app;
