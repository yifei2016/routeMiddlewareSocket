//middleware
//Bygg en enkel express-server. Skapa routes för tre olika sidor som du serverar med
//sendFile. En av sidorna ska vara en 404 och skicka både status och fil.
var express = require('express');
var path = require('path');
var app = express();
var routy = require(path.join(__dirname, 'routes'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/',routy);

app.listen(3000);
