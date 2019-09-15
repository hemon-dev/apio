const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/apio';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to DB!'));

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));