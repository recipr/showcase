var express = require('express');
var app = express();
var path = require('path');
var exphbs  = require('express-handlebars');
var Routes = require('./src/routes');

/* Helpers */
var linkify = require('./src/helpers/linkify');

var hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs',
    partialsDir: ["views/partials/"],
    helpers: {
        linkify: linkify,
        log: function(data){
          console.log(data);
        }
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));

var routes = new Routes(app);

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
})