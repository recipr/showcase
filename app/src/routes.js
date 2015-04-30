var index = require('./routes/index');

var Routes = function(app){
  app.use(index);
}

module.exports = Routes;