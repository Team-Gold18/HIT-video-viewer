var express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const url =
  'mongodb+srv://Dilusha:Dilusha123@cluster0.swm0d.mongodb.net/videoViewerDB?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true });

var app = express();

app.use(express.json());

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on('open', () => {
  console.log('DB connected....');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', require('./routes/index'));

app.listen(3000, () => {
  console.log('server connected');
});
