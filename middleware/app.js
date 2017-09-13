//I en express-server skapar du en middleware-funktion som skriver ut aktuell
//tid (enbart klockslag) i console.log när servern får en request.
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', __dirname);
app.use('/user/:id',function(req,res,next){
  // var d = new Date();
  // var n = d.getHours();
  // console.log(n)
  console.log('Time:', Date.now());
  res.status(400)
  next();
 //res.sendFile(__dirname + '/index.html') not the common way, the common way is template engine
 //to terminate, send, status, render
})

app.get('/user/:id',function(req,res){
  console.log('--------' + req.params.id)
  res.render('index');
})

app.listen(5000)
