const mongoose = require('mongoose');

//connect to mongodb

mongoose.connect('mongodb://localhost/mySignup');

// when connection successfully occur

mongoose.connection.once('once', function(){
  console.log('connection has been made')
});on('error', function(error){
  console.log('connection error', error);
});
