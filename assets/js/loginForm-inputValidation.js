// Initiate all variables
var matchStatus = false, mailStatus = false, usernameStatus = false, passwordStatus = false, formStatus = false;
// Declare all reg ex
var regExUsername = /^[\w\u00C0-\u00FF "\'-]{1,15}$/;
var regExMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Have at least one lowercase and uppercase letter, a number and maybe a special character. Must be at least 8 character long
var regExPwd = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])?[\w!@#$%^&*]{8,}$/;
// Validate the login form values
function loginValidate(array){
  mailStatus = false, passwordStatus = false, formStatus = false;
  // Put values in different variables form array
  var [loginMail, loginPwd] = array;
  regExMail.test(loginMail) ? mailStatus = true : mailStatus = false;
  regExPwd.test(loginPwd) ? passwordStatus = true : passwordStatus = false;
  // If both values are validated, return true
  if (mailStatus && passwordStatus){
    formStatus = true;
  } else {
    // Else return false
    formStatus = false;
  }
  return formStatus;
}
// Validate the new user form values
function newUserValidate(array){
  var errorMessage = 'ERROR';
  // Initiate all values as false
  mailStatus = false, usernameStatus = false, passwordStatus = false, formStatus = false;
  var matchStatus = false;
  var [username, newMail, newPwd, pwdConfirmation] = array;
  regExUsername.test(username) ? usernameStatus = true : usernameStatus = false;
  regExMail.test(newMail) ? mailStatus = true : mailStatus = false;
  regExPwd.test(newPwd) ? passwordStatus = true : passwordStatus = false;
  // If the password is validated, check if the confirmation is identical
  if (passwordStatus) {
    matchStatus = passwordMatch(newPwd, pwdConfirmation);
  }
  // Check one by one if the values are all validated. If not, return the correct error message
  if (! usernameStatus){
    return errorMessage = 'Nom d\'utilisateur incorrect';
  } else if (! mailStatus){
    return errorMessage = 'Mail incorrect';
  } else if (! passwordStatus){
    return errorMessage = 'Mot de passe incorrect';
  } else if (! matchStatus){
    return errorMessage = 'Mot de passe et confirmation différent';
  }
  // If everything is " true ", return the status as true
  if (mailStatus && usernameStatus && passwordStatus && matchStatus){
    formStatus = true;
  } else {
    // If not, return the status as false
    formStatus = false;
  }
  return formStatus;
}
function passwordMatch(password, confirmation){
  // Check if the password is identical to the confirmation
  if (password === confirmation){
    matchStatus = true;
  } else {
    matchStatus = false;
  }
  return matchStatus;
}
