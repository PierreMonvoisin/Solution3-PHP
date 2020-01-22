$(function () {
  var position = 'open';
  // Check mouse position to trigger top navigation tabs
  $(document).bind('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta > 0) {
      headerOpening(e);
    } else if (e.originalEvent.wheelDelta < 0) {
      headerClosing(e);
    }
  });

  function headerClosing(e) {
    if (position === 'open' && $(document).scrollTop() < 5) {
        $('header').slideUp('slow', function () {
        position = 'closed';
      });
    }
  }

  function headerOpening(e) {
    if (position === 'closed' && $(document).scrollTop() < 5) {
        $('header').slideDown('slow', function () {
        position = 'open';
      });
    }
  }
});
