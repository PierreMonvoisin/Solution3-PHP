$(function(){
  // Launch the tooltip fucntion
  $('[data-toggle="tooltip"]').tooltip();
  $('#topLeftButton').click(function(){
    window.location = 'user.php';
  });
  $('#topRightButton').click(function(){
    window.location = 'timer.php';
  });
  $('#bottomLeftButton').click(function(){
    window.location = 'learningMenu.php';
  });
  $('#bottomRightButton').click(function(){
    window.location = 'multiplayer.php';
  });
});
