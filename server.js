var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Message = require('./api/models/msgModel'),
    bodyParser = require('body-parser'),
    mongoUrl = process.env.MONGODB || 'mongodb://localhost/msgdb';

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/msgRoutes');
routes(app);
app.listen(port);
console.log('Message RESTful API server started on: ' + port);