$(function(){
  var validationArray;
  // Check all the input of the form for their value
  function isEveryInputCompleted() {
    validationArray = [];
    $(':input').each(function() {
      // Create an array of either 0 or 1 to determine respectively if the input is empty or not
      if ($(this).val() == '' || $(this).val() == null) {
        validationArray += 0;
      } else {
        validationArray += 1;
      }
    });
  }
  // Everytime the mouse moves, run the function
  $(document).mousemove(function(){
    isEveryInputCompleted();
    // If every input are completed
    console.log(validationArray);
    if (!validationArray.includes(0)){
      $('#submitButton').attr('disabled', false);
    } else {
      $('#submitButton').attr('disabled', true);
    }
  })
});
