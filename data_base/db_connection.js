const mongoose = require('mongoose');
//const express = require('express');
//const bodyParser = require('body-parser');
//const app = express();

mongoose.connect('mongodb://localhost:27017/college-api',{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
})