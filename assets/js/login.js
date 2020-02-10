$(function(){
  var topAvatar = 'default';
  // Add avatar if it is set in the localStorage
  if (typeof(Storage) != "undefined") {
    if (localStorage.getItem('userAvatarUrl')){
      // Set the status of the avatar as set
      topAvatar = 'set';
      // Add avatar as the image
      $('#topAvatar').attr('src', JSON.parse(localStorage.getItem('userAvatarUrl')));
      // Add url value in the form input
      $('#avatarUrl').val(JSON.parse(localStorage.getItem('userAvatarUrl')));
    }
  }
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
    // Creation of url to put as randomly created scramble of image
    userAvatarUrl = 'visualcube.php?' + 'fmt=png&' + 'bg=t&' + 'pzl=3&' + 'alg=' + scramble;
    $('#topAvatar').attr('src', userAvatarUrl);
    // Set the status of the avatar as set
    topAvatar = 'set';
    if (typeof(Storage) != "undefined") {
      // Add url to the local storage
      localStorage.setItem('userAvatarUrl', JSON.stringify(userAvatarUrl));
      // Add url value in the form input
      $('#avatarUrl').val(JSON.stringify(userAvatarUrl));
    } else {
      // Alert if browser does not support local storage function
      alert('Désolé, notre navigateur ne supporte pas le local storage');
      // Redirect the window after 3 seconds
      setTimeout(function(){ location.href = "https://www.google.com/"; }, 3000);
    }
  }
  var message = 'ERROR', validity = false;
  var errorLog = [], valueLog = [], formInfos = [[], false, 'ERROR'];
  // Check all form inputs
  function checkInputs() {
    // Initiate all values
    errorLog = [], valueLog = [], validity = false, formInfos = [[], [], false, 'ERROR'];
    // Check for the form to create a new user
    $('#newUserCard :input[class=form-control]').each(function(){
      // For all the inputs, check if they are empty
      if (($(this).val()).trim() === ''){
        // If yes, put their name in the error log
        errorLog.push($(this).attr('id'));
      } else {
        // If no, put their value in the value log
        valueLog.push(($(this).val()).trim());
      }
      // If there has at least one value in the error log
      if (errorLog.length > 0){
        message = 'Veuillez renseigner tous les champs';
        validity = false;
      } else {
        message = 'Merci d\'avoir renseigné tous les champs';
        validity = true;
      }
      // Return both logs, the validity status and the final message
      formInfos = [valueLog, errorLog, validity, message];
      return formInfos;
    });
    // Put all values in different variables from the array
    var [valueLog, errorLog, validity, message] = formInfos;
    // If the new user form is empty, check the login form
    if (valueLog.length === 0 && errorLog.length === 0){
      // Reset the error logs
      errorLog = [], valueLog = [];
      $('#loginCard :input[class=form-control]').each(function(){
        // For all the inputs, check if they are empty
        if (($(this).val()).trim() === ''){
          // If yes, put their name in the error log
          errorLog.push($(this).attr('id'));
        } else {
          // If no, put their value in the value log
          valueLog.push(($(this).val()).trim());
        }
        // If there has at least one value in the error log
        if (errorLog.length > 0){
          message = 'Veuillez renseigner tous les champs';
          validity = false;
        } else {
          message = 'Merci d\'avoir renseigné tous les champs';
          validity = true;
        }
      });
    }
    // Return both logs, the validity status and the final message
    formInfos = [valueLog, errorLog, validity, message];
    return formInfos;
  }
  $('#loginContainer :input').blur(function(){
    // Launch the function to collect, sanitize and validate all inputs values
    var results = checkInputs();
    var loginValidity = '', newUserValidity = '';
    // console.log('final result is :');
    // console.log(results);
    var [values, errors, status, message] = results;
    // If the status is true, the error log is empty and the value log has either 2 or 4 values, depending on the form
    if (status && errors.length == 0 && ( values.length == 2 || values.length == 4 ) ){
      // Launch the correct function depending on the form
      values.length === 2 ? loginValidity = loginValidate(values) : newUserValidity = newUserValidate(values);
      // If the returned value is neither " false " nor empty (so a string), dispay error message
      if (typeof newUserValidity != 'boolean' && newUserValidity != ''){
        $('.outputMessage').text(newUserValidity);
      } else if (newUserValidity){
        // If returned value is a boolean true, display confirmation message
        $('.outputMessage').text(message);
        $('button[disabled]').attr('disabled', false);
        // Set a new avatar if it isn't already
        if (topAvatar != 'set'){
          generateAvatar();
        }
      }
      // If the returned value is neither " false " nor empty (so a string), dispay error message
      if (loginValidity && typeof newUserValidity != 'boolean'){
        $('.outputMessage').text(message);
        $('button[disabled]').attr('disabled', false);
      } else {
        $('.outputMessage').text(message);
      }
    } else if (errors.length > 0){
      // If error log has at least one value
      $('.outputMessage').text(message);
    }
  });
});
