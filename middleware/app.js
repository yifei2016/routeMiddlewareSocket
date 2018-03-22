//I en express-server skapar du en middleware-funktion som skriver ut aktuell
//tid (enbart klockslag) i console.log när servern får en request.
var express = require('express');
var app = express();
var fs = require('fs');

app.set('view engine', 'pug');//set up
app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use('/user/:id',function(req,res,next){
  // var d = new Date();
  // var n = d.getHours();
  console.log('Time:', Date.now()); //return number
  res.status(400);
  next();
 //res.sendFile(__dirname + '/index.html') not the common way, the common way is template engine
 //to terminate, send, status, render
})

//Lägg till en middleware-funktion som skriver statuskod, metod och tid till en fil.
//Använd fs.appendFile() för att inte skriva över gammal information.

app.use('/status',function(req,res,next){
  var request = ' method: ' + req.method + ' time: ' + Date.now() + ' status code: ' + res.statusCode;
  fs.appendFile('mynewfile1.txt', request, function (err) {
    if (err) throw err;
    console.log('Saved!');
    next();
  });
})
//Lägg till  en middleware-funktion som response skickar över innehållet i den fil du skrivit,
//och låt denna bara agera när användaren begär sökvägen /info
app.use('/request',function(req, res){
  var option = 'send request'
  fs.appendFile('file.txt', option, function(err){
     if (err) throw err;
     console.log('sended');
     next();
  })
})

app.get('/status',function(req,res,next) {
  res.send('');
})
app.get('/user/:id',function(req,res){
  console.log('--------', req.params.id)
  res.render('index');
})

app.listen(5000)
