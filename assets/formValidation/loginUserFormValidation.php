<?php
function validateAllLoginInputs($array){
  // Initiate variables
  $mail = ''; $password = '';
  // Put the values in the correct variable
  foreach ($array as $name => $value){
    ${$name} = $value;
  }
  // Sanitize all inputs
  $mail = filter_var($mail, FILTER_SANITIZE_EMAIL);
  $password = filter_var($password, FILTER_SANITIZE_STRING);
  // Validate all inputs
  $mail = filter_var($mail, FILTER_VALIDATE_EMAIL);
  // If validate return boolean, set value as null
  gettype($mail) != 'boolean' ?: $mail = null;
  // Create the options array with the reg ex for the password
  $passwordOptions = ['options'=>['regexp'=>'/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])?[\w!@#$%^&*]{8,}$/']];
  $password = filter_var($password, FILTER_VALIDATE_REGEXP,$passwordOptions);
  // If validate return boolean, set value as null
  gettype($password) != 'boolean' ?: $password = null;
  // If either mail or password value is null, return error message
  if ($mail == null || $password == null){
    return 'Email ou mot de passe invalide !';
  } else {
    // Else, return associative array of values
    $cleanedInfos = ['mail'=>$mail,'password'=>$password];
    return $cleanedInfos;
  }
}
