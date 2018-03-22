const path = require('path');
function handle404(req,res){
  // res.status(404).render('404',{
  //   title: '404 - not found'
  // });
  res.status(403).sendFile(path.join(__dirname, '..','views','404.html'));
  //sendFile can only send html, send status with res.status(statuskod)
  // res.send('status: ' + 404)
  console.log(404);
}
module.exports = handle404;
