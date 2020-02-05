$(function(){
  // Change avatar image on mouse hover
  $('#avatarContainer').mouseenter(function(){
    $('#topAvatar').attr('src', 'assets/img/addPhotoAvatar.png');
  })
  $('#avatarContainer').mouseleave(function(){
    $('#topAvatar').attr('src', 'https://image.flaticon.com/icons/svg/163/163801.svg');
  })
  var message = 'ERROR', validity = false;
  var errorLog = [], formInfos = [[], false, 'ERROR'];
  // Check all form inputs
  function checkInputs() {
    errorLog = [], validity = false, formInfos = [[], false, 'ERROR'];
    // Check for the form to create a new user
    $('#newUserCard :input[class=form-control]').each(function(){
      if (($(this).val()).trim() === ''){
        if ( $(this).attr('id') != 'file-input' ){ errorLog.push($(this).attr('id')) };
      }
      if (errorLog.length > 0){
        message = 'Veuillez renseigner tous les champs';
        validity = false;
      } else {
        message = 'Merci d\'avoir renseigné tous les champs';
        validity = true;
      }
      formInfos = [errorLog, validity, message];
      return formInfos;
    });
    var [errorLog, validity, message] = formInfos;
    // If the new user form is empty, check the login form
    if (errorLog.length === 0){
      // Reset the error logs
      errorLog = [];
      $('#loginCard :input[class=form-control]').each(function(){
        if (($(this).val()).trim() === ''){
          errorLog.push($(this).attr('id'));
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
    formInfos = [errorLog, validity, message];
    return formInfos;
  }
  $('.card input').blur(function(){
    var results = checkInputs();
    console.warn('final result is :');
    console.warn(results);
    var [errors, status, message] = results;
    if (status && errors.length == 0){
      alert(':D');
    } else if (errors.length > 0){
      // alert(':C');
    }
  })
});
