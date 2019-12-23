$(function(){
  // Auto open the stats menu
  $('#sideTimer').slideToggle('fast');
  $('#sideTimer').addClass('d-flex');
  // Side timer stats
  $('#menuToggle').click(function() {
    if ($('#sideTimer').is(":visible")) {
      // After animation ends, remove display flex
      $('#sideTimer').slideToggle('fast', function(){
        $('#sideTimer').removeClass('d-flex');
      });
    } else {
      $('#sideTimer').slideToggle('fast');
      $('#sideTimer').addClass('d-flex');
    } // Need changing because if useless
  });
});
