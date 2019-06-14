'use strict';

//***************** REQUIRED PACKAGES ********************/
//********************************************************/
const PORT          = 8080;
const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//********************* DATABASE *************************/
//********************************************************/
const MongoClient   = require('mongodb').MongoClient;
const MONGODB_URI   = 'mongodb://localhost:27017/tweeter';


//****************** SERVER ROUTING **********************/
//********************************************************/
MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  const DataHelpers = require('./lib/data-helpers.js')(db);
  const tweetsRoutes = require('./routes/tweets')(DataHelpers);
  app.use('/tweets', tweetsRoutes);
  

  app.listen(PORT, () => {
    console.log('Tweeter app listening on port ' + PORT);
  });
  
  // db.close();  // need to determine what to do with this
  
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