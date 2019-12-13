$(function(){
  var mouseX, mouseY;
  // Check mouse position to trigger top navigation tabs
  $(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    if ( mouseY < 10) {
      $('header').slideDown('fast');
    }
    if ( mouseY > ($('header').height() + 20)) {
      $('header').slideUp('slow');
    }
  });
});
