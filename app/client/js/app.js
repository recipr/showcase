var Sidebar = require('./gui/sidebar'); 
var Viewport = require('./gui/viewport'); 


var $app = document.querySelector('.app');
var $sidebar = $app.querySelector('.recipe-sidebar');
var $showSidebar = $app.querySelector('.show-sidebar');

var $ingredients = $app.querySelector('.recipe-detail .ingredients');

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