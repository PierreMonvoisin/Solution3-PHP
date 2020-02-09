<?php
function validateAllLoginInputs($array){
  $mail = ''; $password = '';
  foreach ($array as $name => $value){
    ${$name} = $value;
  }
  // Sanitize all inputs
  $mail = filter_var($mail, FILTER_SANITIZE_EMAIL);
  $password = filter_var($password, FILTER_SANITIZE_STRING);
  // Validate all inputs
  $mail = filter_var($mail, FILTER_VALIDATE_EMAIL);
  gettype($mail) != 'boolean' ?: $mail = null;
  $passwordOptions = ['options'=>['regexp'=>'/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])?[\w!@#$%^&*]{8,}$/']];
  $password = filter_var($password, FILTER_VALIDATE_REGEXP,$passwordOptions);
  gettype($password) != 'boolean' ?: $password = null;
  if ($mail == null || $password == null){
    return 'Email ou mot de passe invalide !';
  } else {
    $cleanedInfos = ['mail'=>$mail,'password'=>$password];
    return $cleanedInfos;
  }
}
