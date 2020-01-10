$(function () {
  // Enable tooltip
  $('[data-toggle="tooltip"]').tooltip();
  // Zoom on the button on list mousover
  $('#default li').mouseover(function(){
    var classList = $(this)[0].className.split(' ');
    $("#" + classList[0]).css({'transition': '0.5s', 'transform': 'scale(1.1)'});
  })
  // Zoom back to initial on mouseleave
  $('#default li').mouseleave(function(){
    var classList = $(this)[0].className.split(' ');
    $("#" + classList[0]).css({'transition': '0.5s', 'transform': 'scale(1)'});
  })
  // Recognition of which button was pushed and launch the right function
  $('button').click(function () {
    var whichButton = $(this).attr('id'), buttonName = [];
    var buttonName = whichButton.split(/(?=[A-Z])/);
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
