$(function () {
  var position = 'open';
  // Check scroll wheel direction to trigger the right function
  $(document).bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      headerOpening(e);
    } else if (e.originalEvent.wheelDelta < 0) {
      headerClosing(e);
    }
  });
  // Close the top menu
  function headerClosing(e) {
    // If it is open and the page is scrolled to the top
    if (position === 'open' && $(document).scrollTop() < 5) {
      $('header').slideUp('slow', function () {
        // Set position as closed
        position = 'closed';
      });
    }
  }
  // Open the top menu
  function headerOpening(e) {
    // If it is closed and the page is scrolled to the top
    if (position === 'closed' && $(document).scrollTop() < 5) {
      $('header').slideDown('slow', function () {
        // Set position as opened
        position = 'open';
      });
    }
  }
});
