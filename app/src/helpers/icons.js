var file = require('read-file');
var iconPath = './views/icons/icons.svg';

var Icons = function(name){
  return '<span style="height: 0; width: 0; position: absolute; visibility: hidden">' + file.readFileSync(iconPath) + '</span>';
}

module.exports = Icons;