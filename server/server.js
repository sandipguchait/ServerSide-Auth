const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');

const MONGOURL = "mongodb://sandipguchait:roshni77@ds147965.mlab.com:47965/server-auth"
//DATABASE SETUP
mongoose.connect(MONGOURL,{useNewUrlParser: true})
    .then(()=> console.log("DB connected"))
    .catch(error => console.log(error));

// APP SETUP
app.use(morgan('combined'));
app.use(bodyParser.json());
router(app);

// SERVER SETUP
const port = process.env.PORT || 3090;
app.listen(port, ()=> {
    console.log(`SERVER Running on ${port}`)
});