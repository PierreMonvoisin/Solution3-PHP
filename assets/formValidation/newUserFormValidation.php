<?php
function validateAllNewInputs($array){
  // Initiate variables
  $username = ''; $mail = ''; $password = ''; $avatarUrl = '';
  // Put the values in the correct variable
  foreach ($array as $name => $value){
    ${$name} = $value;
  }
  // Sanitize all inputs
  $mail = filter_var($mail, FILTER_SANITIZE_EMAIL);
  $username = filter_var($username, FILTER_SANITIZE_STRING);
  $password = filter_var($password, FILTER_SANITIZE_STRING);
  // Validate all inputs
  $mail = filter_var($mail, FILTER_VALIDATE_EMAIL);
  // If validate return boolean, set value as null
  gettype($mail) != 'boolean' ?: $mail = null;
  // Create the options array with the reg ex for the username
  $usernameOptions = ['options'=>['regexp'=>'/^[\w\x{00C0}-\x{00FF} "\'-]{1,15}$/']];
  $username = filter_var($username, FILTER_VALIDATE_REGEXP, $usernameOptions);
  gettype($username) != 'boolean' ?: $username = null;
  // Create the options array with the reg ex for the password
  $passwordOptions = ['options'=>['regexp'=>'/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])?[\w!@#$%^&*]{8,}$/']];
  $password = filter_var($password, FILTER_VALIDATE_REGEXP, $passwordOptions);
  gettype($password) != 'boolean' ?: $password = null;
  // Create the options array with the reg ex for the url
  $avatarUrlOptions = ['options'=>['regexp'=>"/^(visualcube\.php\?fmt=png&bg=t&pzl=3&alg=)+([A-Z2']{15,30})+$/"]];
  $avatarUrl = filter_var($avatarUrl, FILTER_VALIDATE_REGEXP, $avatarUrlOptions);
  gettype($avatarUrl) != 'boolean' ?: $avatarUrl = null;
  // Check all variables one by one if they are null, and if so, return the associated error message
  if ($mail == null){
    return 'Email invalide !';
  } else if ($username == null){
    return 'Nom d\'utilisateur invalide !';
  } else if ($password == null){
    return 'Mot de passe invalide !';
  } else {
    // Else, return associative array of values
    $cleanedInfos = ['username'=>$username,'mail'=>$mail,'password'=>$password];
    // If the avatar url is set, add it to the array
    if ($avatarUrl != null){ $cleanedInfos['avatarUrl'] = $avatarUrl; }
    return $cleanedInfos;
  }
}
