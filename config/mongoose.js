// IMPORTING PACKAGE
const mongoose = require("mongoose");


// MAKING CONNECTION 

// mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');

const DB = 'mongodb+srv://skillsproject111:aBZNLd5aaFFSIPYx@cluster0.2bje0zq.mongodb.net/'

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;

// CHECKING CONNECTION
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

module.exports = db;