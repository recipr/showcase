var Sidebar = function($app, $element){

  var $hide = $element.querySelector('.hide');

  var init = function(){
    eventBindings();
  };

  var eventBindings = function(){
    $hide.addEventListener('click', hide);
  }; 

  var hide = function(){
    $element.classList.remove('show');
    $app.classList.remove('noScroll');
    $app.classList.remove('flyoutVisible');
  }

  var show = function(){ 
    $element.classList.add('show');
    $app.classList.add('noScroll');
    $app.classList.add('flyoutVisible');
  };

  this.hide = function(){
    hide();
  };

  this.show = function(){
    show();
  };

  init();
}

module.exports = Sidebar;