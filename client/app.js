var express = require('express');
var app = express();
var path = require('path');

//var fileManager = require('express-file-manager');

//app.use('/filemanager', fileManager(__dirname + '/public', {}));

app.use(express.static(path.join(__dirname + '/public')));

app.listen(3000);
console.log('Listening on port 3000');
