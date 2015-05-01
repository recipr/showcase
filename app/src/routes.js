var index = require('./routes/index');
var search = require('./routes/search');
var recipe = require('./routes/recipe');

var Routes = function(app){
  app.use(index);
  app.use(search);
  app.use(recipe);
}

module.exports = Routes;