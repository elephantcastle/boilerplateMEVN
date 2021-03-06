const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
let book = require('./routes/book');
let auth = require('./routes/auth');

//setup moongose with bluebird promise handling
let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.set('useCreateIndex', true)

const mongoString = process.env.MONGO_URL || 'mongodb://localhost:27017/ocean'

mongoose.connect(mongoString, { promiseLibrary: require('bluebird'),  useNewUrlParser: true, useUnifiedTopology: true})
  .then(() =>  console.log('Db connection succesful'))
  .catch((err) => console.error(err));

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,  './dist' )));
  app.use('/books', express.static(path.join(__dirname,  './dist' )));
}

app.use('/book', book);
app.use('/api/auth', auth);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
// restful api error handler
app.use(function(err, req, res, next) {
    if(err){
      next(err)
      console.log(err);
    }else{
      if (req.app.get('env') !== 'development') {
          delete err.stack;
      }
      res.status(err.statusCode || 500).json(err);
    }
  
});

const port = process.env.PORT || 4000;
app.set('port', port);
let server = http.createServer(app);

server.listen(port, () => {
    console.log(`listening on ${port}`);
});
