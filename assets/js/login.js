$(function(){
  // Change avatar image on mouse hover
  $('#avatarContainer').mouseenter(function(){
    $('#topAvatar').attr('src', 'assets/img/addPhotoAvatar.png');
  })
  $('#avatarContainer').mouseleave(function(){
    $('#topAvatar').attr('src', 'https://image.flaticon.com/icons/svg/163/163801.svg');
  })
  var message = 'ERROR';
  var errorLog, valueLog, full, form;
  // Check all form inputs
  function checkInputs() {
    errorLog = [], valueLog = [], full = false, validity = false, form = 'default';
    // Check for the form to create a new user
    $('#newUserCard :input[class=form-control]').each(function(){
      // Loop though all inputs and get their value
      if ($(this).val() != ''){
        valueLog.push($(this).attr('id'));
      } else {
        // Check if input is file-input, if yes, default add it to the set value log
        $(this).attr('id') === 'file-input' ? valueLog.push($(this).attr('id')) : errorLog.push($(this).attr('id'));
      }
      // Change message depending on the number of value gathered
      if (valueLog.length < 5 && errorLog.length >= 0){
        message = 'Veuillez renseigner tous les champs';
      } else {
        message = 'Merci d\'avoir renseigné tous les champs';
        full = true;
        form = 'newUser';
      }
      return valueLog, errorLog;
    });
    // If the new user form is empty, check the login form
    if (valueLog.length == 0 && (errorLog.length == 5 || errorLog.length == 0)){
      // Reset the error and value logs;
      errorLog = [], valueLog = [];
      $('#loginCard :input[class=form-control]').each(function(){
        if ($(this).val() != ''){
          valueLog.push($(this).attr('id'));
        } else {
          errorLog.push($(this).attr('id'));
        }
        if (valueLog.length < 2 && errorLog.length >= 0){
          message = 'Veuillez renseigner tous les champs';
        } else {
          message = 'Merci d\'avoir renseigné tous les champs';
          full = true;
          form = 'login';
        }
      });
    }
    // Retourne les informations récoltées dans les formulaires
    return [form, full, message, valueLog, errorLog];
  }
  $('.card input').blur(function(){
    var results = checkInputs();
    console.log('final result is :');
    console.log(results);
    var formName = results[0], status = results[1], message = results[2];
    var values = results[3], errors = results[4];
    if (status && errors.length == 0){
      validity = true;
      
    } else if (errors.length > 0){
      alert('proot');
    }
  })
});
