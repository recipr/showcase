var Sidebar = require('./elements/sidebar'); 
var Header = require('./elements/header');
var Search = require('./elements/search');
var Viewport = require('./gui/viewport'); 

var $app = document.querySelector('.app');
var $sidebar = $app.querySelector('.recipe-sidebar');
var $showSidebar = $app.querySelector('.show-sidebar');
var $header = $app.querySelector('.header'); 
var $ingredients = $app.querySelector('.recipe-detail .ingredients');
var $search = $app.querySelector('#search');

if($ingredients && $showSidebar){
  var viewport = new Viewport($ingredients);
  viewport.onLeftViewport(function(){
    $showSidebar.classList.add('show');
  });

  viewport.onEnteredViewport(function(){
    $showSidebar.classList.remove('show');
  });
}; 

if($sidebar && $showSidebar){
  var sidebar = new Sidebar($app, $sidebar);
  $showSidebar.addEventListener('click', function(){
    sidebar.show();
  })
}

if($header && $search){
  var viewport = new Viewport($search);
  viewport.onLeftViewport(function(){
    $header.classList.add('show-search-icon');
  });

  viewport.onEnteredViewport(function(){
    $header.classList.remove('show-search-icon');
  });

  var header = new Header($header);
  var search = new Search($search);
  header.onSearchClick(search.focus);
}