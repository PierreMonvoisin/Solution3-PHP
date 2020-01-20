$(function(){
  var mouseX, mouseY, closing;
  // Check mouse position to trigger top navigation tabs
  $(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    if ( mouseY < 20) {
      $('header').slideDown('fast');
    } else if ( mouseY >= 20 && mouseY <= ($('header').height() + 20)){
      clearTimeout(closing);
    } else if ( mouseY > ($('header').height() + 20)) {
      closing = setTimeout(function(){ $('header').slideUp('slow'); }, 2000);
    }
  });
  $(document).bind('mousewheel', function(e){
    if (e.originalEvent.wheelDelta / 120 > 0) {
      console.log('up by ' + $(document).scrollTop());
      $('header').slideDown('fast');
    }
  });
});
