var http    = require('http');              // load http package
var express    = require('express');        // load express
var app        = express();                 // create express app
var bodyParser = require('body-parser');    // load body-parser
var mongoose = require('mongoose');         // mongodb package
var Contact     = require('./contact');
var mongoUri = 'mongodb://localhost:27017/contacts';

// configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
//configure app to use json
app.use(bodyParser.json());

//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

//set up port
var port = process.env.PORT || 8080;

// ROUTES API
//*************************************************************
var router = express.Router();


router.route('/contacts')

    // create /api/contacts
    .post(function(req, res) {

        var contact = new Contact();
        contact.name = req.body.name;
        contact.phone = req.body.phone;
        contact.email = req.body.email;
        contact.address = req.body.address;

        contact.save(function(err, doc) {
            if (err)
                res.send(err);

            res.json(doc);
        });

    })


    //getAll /api/contacts
    .get(function(req, res) {
        Contact.find(function(err, contacts) {
            if (err)
                res.send(err);

            res.json(contacts);
        });
    });


  router.route('/contacts/:id')

    // getById /contacts/:id
    .get(function(req, res) {
        Contact.findById(req.params.id, function(err, contact) {
            if (err)
                res.send(err);
            res.json(contact);
        });
    })

    //updateById /contacts/:id
    .put(function(req, res) {

        Contact.findById(req.params.id, function(err, contact) {

            if (err)
                res.send(err);

            contact.name = req.body.name;
            contact.phone = req.body.phone;
            contact.email = req.body.email;
            contact.address = req.body.address;

            contact.save(function(err, doc) {
                if (err)
                    res.send(err);

                res.json(doc);
            });

        });
    })

    //deleteById /contacts/:id
    .delete(function(req, res) {
        Contact.remove({
            _id: req.params.id
        }, function(err, doc) {
            if (err)
                res.send(err);

            res.json(doc);
        });
    });


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'Contact List api is up!' });
});

// more routes for our API will happen here

// REGISTER ROUTES
// register previous routers prefixed with /api
app.use('/api', router);




// MONGODB CONNECTION
// Connectiong ta a mongoDB database
if (app.get('env') !== 'development') {
    mongoUri = process.env['MONGOLAB_URI'];
}
var connection = mongoose.connect(mongoUri, function(err){
    if (err){
        console.warn(err);
        throw err;
    }
    else {
        console.log('connected to mongodb');
    }
});

// START SERVER
var server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);


/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Contact List API serving on port ' + bind);
}

//ERROR HANDLERS
server.on('error', onError);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
