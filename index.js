'use strict'
const express = require('express');
const exphbs  = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;
const MongoDbMiddleWear = require('./db_middlewear');
const Robots = require('./robots')


let app = express();


app.use(MongoDbMiddleWear({"url": "mongodb://localhost:27017/robots"}))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get(app.use(express.static('public')));
app.get('/', Robots.directory)
app.get('/robot/:user', Robots.user)
app.listen(3000, () => console.log('listening on http://localhost:3000'));
