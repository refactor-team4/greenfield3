const mysql = require('mysql2');

const database = 'youcamp';


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: database

});

connection.connect(function(err){
  if (err) throw err;
  console.log('connected!')
})



  module.exports = connection;



  