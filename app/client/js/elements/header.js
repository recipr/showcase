var Header = function($element){

  var $searchIcon = $element.querySelector('.search'),
      searchClickCb;

  var init = function(){
    eventBindings();
  };

  var eventBindings = function(){
    $searchIcon.addEventListener('click', onSearchClick);
  }; 

  var onSearchClick = function(e){ 
    e.preventDefault();
    if(searchClickCb != undefined){
      searchClickCb();
    }
  }

  this.onSearchClick = function(callback){
    searchClickCb = callback;
  }

  init();
}

module.exports = Header; 