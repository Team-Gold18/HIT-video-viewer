var express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const url = 'mongodb://localhost/NewVideoDB'
var app =express();
app.use(express.json())
var port =process.env.PORT || 3000;

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () =>{
    console.log('DB connected....')
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/',require('./routes/index'))


app.listen(port);
console.log('port'+port);