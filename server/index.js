'use strict';

//***************** REQUIRED PACKAGES ********************/
//********************************************************/
require('dotenv').config();
const PORT            = 8080;
const express         = require('express');
const bodyParser      = require('body-parser');
const app             = express();
const sassMiddleware  = require('node-sass-middleware');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(sassMiddleware({
  src: 'scss',
  dest: 'public/styles',
  debug: true,
  outputStyle: 'compressed',
  prefix:  '/styles'
}));
app.use(express.static('public'));

//********************* DATABASE *************************/
//********************************************************/
const MongoClient   = require('mongodb').MongoClient;
const MONGODB_URI   = 'mongodb://localhost:27017/tweeter';
// const MONGODB_URI   = process.env.MONGODB_URI;


//****************** SERVER ROUTING **********************/
//********************************************************/
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error('Failed to connect');
    throw err;
  }

  console.log('Connected to mongodb');

  const DataHelpers = require('./lib/data-helpers.js')(db);
  const tweetsRoutes = require('./routes/tweets')(DataHelpers);
  app.use('/tweets', tweetsRoutes);
  

  let server = app.listen(PORT, () => {
    console.log(`Tweeter app listening on port: ${PORT}`);
  });
  
  process.on('SIGINT', function() {
    console.log('Goodbye!');
    server.close(); // close connection to server
    db.close(); // close connection to MongoDB
  });
  
});


//*********************** NOTES **************************/
//********************************************************/
/*

The `data-helpers` module provides an interface to the 
database of tweets. Because it exports a function that
expects the `db` as a parameter, we can require it and
pass the `db` parameter immediately.

The `tweets-routes` module works similarly: we pass it 
the `DataHelpers` object so it can define routes that
use it to interact with the data layer.

app.use mounts the tweets routes at the "/tweets" path
prefix.

*/