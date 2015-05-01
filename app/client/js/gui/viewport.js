var Viewport = function($el){
  
  var inViewport = false,
      timeout,
      debounce = 50,
      onEnterCallback,
      onLeaveCallback;

  var init = function(){
    eventBindings();
  };

  var eventBindings = function(){
    window.addEventListener('scroll', onScroll);
  };

  var onScroll = function(){
    clearTimeout(timeout);
    timeout = setTimeout(checkViewport, debounce);
  };

  var checkViewport = function(){
    if(isInViewport($el)){
      if(inViewport == false && onEnterCallback != undefined){
        onEnterCallback();
      }
      inViewport = true;
    } else {
      if(inViewport == true && onLeaveCallback != undefined){
        onLeaveCallback();
      }
      inViewport = false;
    }
  };

  this.onLeftViewport = function(callback){
    onLeaveCallback = callback;
  };

  this.onEnteredViewport = function(callback){
    onEnterCallback = callback;
  };

  this.isInViewport = function(){
    return isInViewport($el);
  };

  var isInViewport = function(el){
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

  init();
}

module.exports = Viewport;