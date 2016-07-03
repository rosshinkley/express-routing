//include express
var express = require('express');
//create an express application
var app = express();
  
//define a route on `/hello/world`
app.get('/hello/world', function(request, response){
  console.log('got request for "/hello/world"');
  response.send('hello there!');
});

app.get('/a(pp)?le', function(request, response){
  response.send('Apple or Ale?');
});

app.get('/who+a+', function(request, response){
  response.send('I know, right!?');
});

app.get('/reverse/:word', function(request, response){
  response.send(request.params.word.split('').reverse().join(''));
});

app.get('/:first/:last', function(request, response){
  response.send(`hello, ${request.params.first} ${request.params.last}`);
});

app.get('*', function(request, response){
  response.send('Uh oh!');
});

//have the application listen on a specific port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
