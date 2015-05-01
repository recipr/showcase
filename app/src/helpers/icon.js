var file = require('read-file');
var iconPath = './views/icons/';

var Icon = function(name){
  var path = iconPath + name + '.svg';
  return '<span class="icon">' + file.readFileSync(path) + '</span>';
}

module.exports = Icon;