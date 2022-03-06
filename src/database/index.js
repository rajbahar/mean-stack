//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/user_management_db';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});


mongoose.connection.on('connected', function () {  
    console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`);
  }); 
  
  mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
  
  mongoose.connection.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
  });