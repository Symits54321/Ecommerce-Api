const port = 8280;



// Requiring dependencies
const express = require('express');
const cors = require('cors');
const cookieParser=require('cookie-parser');
const app = express();
const db = require('./config/mongoose');

const path = require('path');





//Parsers
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

//static files including
app.use(express.static('assets'));



// ------- Middlewares

// EJS 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


//routes
app.use('/',require('./routes/index'));


// Listening
app.listen(port,function(err){
    if(err){
        console.log('not able to listen port');
    }
    console.log(`Ecoomerce API is Listening to port:${port}`);
});




