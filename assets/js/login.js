$(function(){
  var topAvatar = 'default';
  // Change avatar image on mouse hover
  $('#avatarContainer').mouseenter(function(){
    if (topAvatar != 'set'){
      $('#topAvatar').attr('src', 'assets/img/addPhotoAvatar.png');
    }
  })
  $('#avatarContainer').mouseleave(function(){
    if (topAvatar != 'set'){
      $('#topAvatar').attr('src', 'https://image.flaticon.com/icons/svg/163/163801.svg');
    }
  })
  function generateAvatar() {
    // Declare variables (faces, probabilities ...)
    var faces = ['U', 'D', 'L', 'R', 'F', 'B'];
    var scrambleLength = 15, chancePrime = 25, chanceDouble = 35;
    var antePenulMove = null, penulMove = null, scramble = [], numberOfMoves = 0;
    // Loop to create an array with 25 letters
    while (numberOfMoves < scrambleLength){
      // Get a random letter
      var move = (faces.sort(() => Math.random() - 0.5))[Math.floor(Math.random() * 6)];
      // Check if it is the same as the last letter
      while (penulMove == move){
        move = (faces.sort(() => Math.random() - 0.5))[Math.floor(Math.random() * 6)];
      }
      setLetter();
    }
    function setLetter(){
      // Extra security not to have "useless moves"
      if (antePenulMove == move){
        // Verify if the set of three moves are really useless
        if ((move == 'F' && penulMove == 'B') || (move == 'B' && penulMove == 'F') || (move == 'D' && penulMove == 'U') || (move == 'U' && penulMove == 'D') || (move == 'R' && penulMove == 'L') || (move == 'L' && penulMove == 'R')){
          // Change the move until the problem is solved
          while (move == antePenulMove || move == penulMove){
            move = (faces.sort(() => Math.random() - 0.5))[Math.floor(Math.random() * 6)];
          }
        }
      }
      // Update the move history
      antePenulMove = penulMove; penulMove = move;
      // Set probability
      var chance = Math.floor(Math.random() * 101);
      // Add prime or add double if the probability is right
      if (chance <= chancePrime){
        move += "'";
      } else if (chance <= (chancePrime + chanceDouble)){
        move += '2';
      }
      // Add move to the scramble
      scramble.push(move);
      numberOfMoves++;
    }
    scramble = scramble.join('');
    urlComposition = 'visualcube.php?' + 'fmt=png&' + 'bg=t&' + 'pzl=3&' + 'alg=' + scramble;
    $('#topAvatar').attr('src', urlComposition);
    topAvatar = 'set';
  }
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
    if (status && errors.length == 0 && ( values.length == 2 || values.length == 4 ) ){
      values.length === 2 ? loginValidity = loginValidate(values) : newUserValidity = newUserValidate(values);
      if (typeof newUserValidity != 'boolean' && newUserValidity != ''){
        $('.outputMessage').text(newUserValidity);
      } else if (newUserValidity){
        $('.outputMessage').text('Tous les champs sont correctes');
        $('button[disabled]').attr('disabled', false);
        generateAvatar();
      }
      if (loginValidity && typeof newUserValidity != 'boolean'){
        $('.outputMessage').text('Tous les champs sont correctes');
        $('button[disabled]').attr('disabled', false);
      } else {
        $('.outputMessage').text('Veuillez bien renseigner tous les champs');
      }
    } else if (errors.length > 0){
      $('.outputMessage').text('Veuillez bien renseigner tous les champs');
    }
  })
});
