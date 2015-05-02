var Search = function($element){

  var $value = $element.querySelector('.value');

  var init = function(){
    eventBindings();
  };

  var eventBindings = function(){
  }; 

  this.focus = function(){
    $value.focus();
  };

  init();
}

module.exports = Search; 