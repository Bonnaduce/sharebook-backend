//version inicial

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var requestjson = require("request-json");
var urlMovimientosMlab = "";
var apiKey = "apiKey=GOLqWa850qO8tsdCUdby6eq9eKPInBkt";

bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
  next();
});

app.listen(port);

console.log('Todo listo RESTful API server started on port: ' + port);


app.get('/libros_fantasia', function(req, res){
    urlMovimientosMlab = 'https://api.mlab.com/api/1/databases/gfernandez/collections/libros_fantasia?' + apiKey;
    var clienteMlab = requestjson.createClient(urlMovimientosMlab);
    clienteMlab.get('', function(err, resM, body){
      if(err)
        console.log(body);
      else
        res.send(body);
    });
  });
  
  app.get('/libros_drama', function(req, res){
    urlMovimientosMlab = 'https://api.mlab.com/api/1/databases/gfernandez/collections/libros_drama?' + apiKey;
    var clienteMlab = requestjson.createClient(urlMovimientosMlab);
    clienteMlab.get('', function(err, resM, body){
      if(err)
        console.log(body);
      else
        res.send(body);
    });
  });
  
  app.get('/libros_educativos', function(req, res){
    urlMovimientosMlab = 'https://api.mlab.com/api/1/databases/gfernandez/collections/libros_educativos?' + apiKey;
    var clienteMlab = requestjson.createClient(urlMovimientosMlab);
    clienteMlab.get('', function(err, resM, body){
      if(err)
        console.log(body);
      else
        res.send(body);
    });
  });
  
  app.get('/libros_terror', function(req, res){
    urlMovimientosMlab = 'https://api.mlab.com/api/1/databases/gfernandez/collections/libros_terror?' + apiKey;
    var clienteMlab = requestjson.createClient(urlMovimientosMlab);
    clienteMlab.get('', function(err, resM, body){
      if(err)
        console.log(body);
      else
        res.send(body);
    });
  });
  
  app.post('/insertarLibro', function(req,res){
    urlMovimientosMlab = 'https://api.mlab.com/api/1/databases/gfernandez/collections/' + req.body.category + '?' + apiKey;
    var clienteMlab = requestjson.createClient(urlMovimientosMlab);
    clienteMlab.post('', req.body, function(err, resM, body){
      if(err)
        console.log("Body: " + body + " Error: " + err);
      else
        res.send(resM.statusCode);
    });
  });