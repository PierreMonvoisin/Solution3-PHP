var mailStatus = false, usernameStatus = false, passwordStatus = false, formStatus = false;
var regExUsername = /^[\w\u00C0-\u00FF "\'-]{1,15}$/;
var regExMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// Have at least one lowercase and uppercase letter, a number and maybe a special character. Must be at least 8 character long
var regExPwd = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])?[\w!@#$%^&*]{8,}$/;
function loginValidate(array){
  mailStatus = false, passwordStatus = false, formStatus = false;
  var [loginMail, loginPwd] = array;
  regExMail.test(loginMail) ? mailStatus = true : mailStatus = false;
  regExPwd.test(loginPwd) ? passwordStatus = true : passwordStatus = false;
  if (mailStatus && passwordStatus){
    formStatus = true;
  } else {
    formStatus = false;
  }
  return formStatus;
}
function newUserValidate(array){
  var errorMessage = 'ERROR';
  mailStatus = false, usernameStatus = false, passwordStatus = false, matchStatus = false, formStatus = false;
  var [username, newMail, newPwd, pwdConfirmation] = array;
  regExUsername.test(username) ? usernameStatus = true : usernameStatus = false;
  regExMail.test(newMail) ? mailStatus = true : mailStatus = false;
  regExPwd.test(newPwd) ? passwordStatus = true : passwordStatus = false;
  if (passwordStatus) {
    matchStatus = passwordMatch(newPwd, pwdConfirmation);
  }
  if (! usernameStatus){
    return errorMessage = 'Nom d\'utilisateur incorrect';
  } else if (! mailStatus){
    return errorMessage = 'Mail incorrect';
  } else if (! passwordStatus){
    return errorMessage = 'Mot de passe incorrect';
  } else if (! matchStatus){
    return errorMessage = 'Mot de passe et confirmation différent';
  }
  if (mailStatus && usernameStatus && passwordStatus && matchStatus){
    formStatus = true;
  } else {
    formStatus = false
  }
  return formStatus;
}
function passwordMatch(password, confirmation){
  if (password === confirmation){
    matchStatus = true;
  } else {
    matchStatus = false
  }
  return matchStatus;
}
