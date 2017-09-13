//Bygg en enkel express-server. Skapa routes för tre olika sidor som du serverar med
//sendFile. En av sidorna ska vara en 404 och skicka både status och fil.
var express = require('express');
var router = express.Router();
const path = require('path');
const firstPage = require(path.join(__dirname, 'firstPage'));
const handle404Page = require(path.join(__dirname, '404'));

router.get('/', firstPage);

router.get('*', handle404Page);

module.exports = router;
