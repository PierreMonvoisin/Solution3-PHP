<?php
// /^(visualcube\.php\?fmt=png&bg=t&pzl=3&alg=)+([A-Z2']{15,30})+$/
function validateAllNewInputs($array){
  $username = ''; $mail = ''; $password = ''; $avatarUrl = '';
  foreach ($array as $name => $value){
    ${$name} = $value;
  }
  // Sanitize all inputs
  $mail = filter_var($mail, FILTER_SANITIZE_EMAIL);
  $username = filter_var($username, FILTER_SANITIZE_STRING);
  $password = filter_var($password, FILTER_SANITIZE_STRING);
  // Validate all inputs
  $mail = filter_var($mail, FILTER_VALIDATE_EMAIL);
  gettype($mail) != 'boolean' ?: $mail = null;
  $usernameOptions = ['options'=>['regexp'=>'/^[\w\x{00C0}-\x{00FF} "\'-]{1,15}$/']];
  $username = filter_var($username, FILTER_VALIDATE_REGEXP, $usernameOptions);
  gettype($username) != 'boolean' ?: $username = null;
  $passwordOptions = ['options'=>['regexp'=>'/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])?[\w!@#$%^&*]{8,}$/']];
  $password = filter_var($password, FILTER_VALIDATE_REGEXP, $passwordOptions);
  gettype($password) != 'boolean' ?: $password = null;
  $avatarUrlOptions = ['options'=>['regexp'=>"/^(visualcube\.php\?fmt=png&bg=t&pzl=3&alg=)+([A-Z2']{15,30})+$/"]];
  $avatarUrl = filter_var($avatarUrl, FILTER_VALIDATE_REGEXP, $avatarUrlOptions);
  gettype($avatarUrl) != 'boolean' ?: $avatarUrl = null;
  if ($mail == null){
    return 'Email invalide !';
  } else if ($username == null){
    return 'Nom d\'utilisateur invalide !';
  } else if ($password == null){
    return 'Mot de passe invalide !';
  } else {
    $cleanedInfos = ['username'=>$username,'mail'=>$mail,'password'=>$password];
    if ($avatarUrl != null){ $cleanedInfos['avatarUrl'] = $avatarUrl; }
    return $cleanedInfos;
  }
}
