$(function(){
  // Change avatar image on mouse hover
  $('#avatarContainer').mouseenter(function(){
    $('#topAvatar').attr('src', 'assets/img/addPhotoAvatar.png');
  })
  $('#avatarContainer').mouseleave(function(){
    $('#topAvatar').attr('src', 'https://image.flaticon.com/icons/svg/163/163801.svg');
  })
  var message = 'ERROR', validity = false;
  var errorLog = [], valueLog = [], formInfos = [[], false, 'ERROR'];
  // Check all form inputs
  function checkInputs() {
    errorLog = [], valueLog = [], validity = false, formInfos = [[], [], false, 'ERROR'];
    // Check for the form to create a new user
    $('#newUserCard :input[class=form-control]').each(function(){
      if (($(this).val()).trim() === ''){
        if ( $(this).attr('id') != 'file-input' ){ errorLog.push($(this).attr('id')) };
      } else {
        valueLog.push(($(this).val()).trim());
      }
      if (errorLog.length > 0){
        message = 'Veuillez renseigner tous les champs';
        validity = false;
      } else {
        message = 'Merci d\'avoir renseigné tous les champs';
        validity = true;
      }
      formInfos = [valueLog, errorLog, validity, message];
      return formInfos;
    });
    var [valueLog, errorLog, validity, message] = formInfos;
    // If the new user form is empty, check the login form
    if (valueLog.length === 0 && errorLog.length === 0){
      // Reset the error logs
      errorLog = [], valueLog = [];
      $('#loginCard :input[class=form-control]').each(function(){
        if (($(this).val()).trim() === ''){
          errorLog.push($(this).attr('id'));
        } else {
          valueLog.push(($(this).val()).trim());
        }
        if (errorLog.length > 0){
          message = 'Veuillez renseigner tous les champs';
          validity = false;
        } else {
          message = 'Merci d\'avoir renseigné tous les champs';
          validity = true;
        }
      });
    }
    // Retourne les informations récoltées dans les formulaires
    formInfos = [valueLog, errorLog, validity, message];
    return formInfos;
  }
  $('.card input').blur(function(){
    var results = checkInputs();
    var loginValidity = '', newUserValidity = '';
    console.warn('final result is :');
    console.warn(results);
    var [values, errors, status, message] = results;
    if (status && errors.length == 0){
      alert(':D');
      values.length === 2 ? loginValidity = loginValidate(values) : newUserValidity = newUserValidate(values);
      if (typeof newUserValidity != 'boolean' && newUserValidity != ''){
        // Display error message
      } else if (! loginValidity){
        // Display error message
      }
      // Activate submit button
    } else if (errors.length > 0){
      // Display error message
    }
  })
});
