$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('#default li').mouseover(function(){
    var classList = $(this)[0].className.split(' ');
    $("#" + classList[0]).css({'transition': '0.5s', 'transform': 'scale(1.1)'});
  })
  $('#default li').mouseleave(function(){
    var classList = $(this)[0].className.split(' ');
    $("#" + classList[0]).css({'transition': '0.5s', 'transform': 'scale(1)'});
  })
  $('button').click(function () {
    var whichButton = $(this).attr('id'), buttonName = [];
    buttonName = whichButton.split(/(?=[A-Z])/);
    // Detection of which button was pressed
    if (buttonName[0] === 'Top' && buttonName[1] === 'Left') {
      // Top left
    } else if (buttonName[0] === 'Top') {
      // Top Right
    } else if (buttonName[1] === 'Left') {
      // Bottom Left
    } else {
      // Bottom Right
    }
  })
});
