/**
 * Created by Dave on 9/25/15.
 */
var express = require('express');
var path = require('path');
var data = require('./data/data.json');
var app = express();

app.use(express.static(path.join(__dirname, './public')));

app.get("/", function(req, res){
    res.sendFile(__dirname + '/public/views/index.html');
})


app.get("/getColors", function(req, res){
    res.send(data);
})


var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
});