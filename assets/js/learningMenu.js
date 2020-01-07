$(function () {
  $('button').click(function () {
    var whichButton = $(this).attr('id'), buttonName = [];
    buttonName = whichButton.split(/(?=[A-Z])/);
    // Detection of which button was pressed
    if (buttonName[0] === 'Top' && buttonName[1] === 'Left') {

    } else if (buttonName[0] === 'Top') {

    } else if (buttonName[1] === 'Left') {

    } else {

    }
  })
});