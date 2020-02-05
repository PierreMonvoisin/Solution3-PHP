$(function(){
  // Change avatar image on mouse hover
  $('#avatarContainer').mouseenter(function(){
    $('#topAvatar').attr('src', 'assets/img/addPhotoAvatar.png');
  })
  $('#avatarContainer').mouseleave(function(){
    $('#topAvatar').attr('src', 'https://image.flaticon.com/icons/svg/163/163801.svg');
  })
  $('.card input').blur(function(){
    checkInputs();
  })
  // Check all form inputs
  function checkInputs() {
    var message = 'ERROR';
    var errorLog = [], valueLog = [], full = false;
    // Check for the form to create a new user
    $('#newUserCard :input[class=form-control]').each(function(){
      // Loop though all inputs and get their value
      if ($(this).val() != ''){
        valueLog.push($(this).val());
      } else {
        errorLog.push($(this).val());
      }
      // Change message depending on the number of value gathered
      if (valueLog.length < 4 && errorLog.length >= 0){
        message = 'Veuillez renseigner tous les champs';
      } else {
        message = 'Merci d\'avoir renseigné tous les champs';
        full = true;
        return full;
      }
    });
    // If the new user form is empty, check the login form
    if (valueLog.length == 0 && (errorLog.length == 4 || errorLog.length == 0)){
      // Reset the error and value logs;
      errorLog = [], valueLog = [];
      $('#loginCard :input[class=form-control]').each(function(){
        if ($(this).val() != ''){
          valueLog.push($(this).val());
        } else {
          errorLog.push($(this).val());
        }
        if (valueLog.length < 2 && errorLog.length >= 0){
          message = 'Veuillez renseigner tous les champs';
        } else {
          message = 'Merci d\'avoir renseigné tous les champs';
          full = true;
          return full;
        }
      });
    }
    return full;
  }
});
