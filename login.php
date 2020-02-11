<?php
// Initiate the error boolean and the error message
$error = false; $errorMessage = 'ERROR';
// Check if the post request contains the name of either forms
if ($_SERVER['REQUEST_METHOD'] === 'POST' && (isset($_POST['newSubmit']) || isset($_POST['loginSubmit'])) ){
  // Initiate all variables to collect infos
  $newMail = ''; $newUsername = ''; $newPassword = ''; $newConfirmation = ''; $loginMail = ''; $loginPassword = '';
  // Check if the form is for a new user
  if (isset($_POST['newSubmit'])) {
    // Verifiy if all values are not empty. If they are, replace them with a null
    if (! empty(trim($_POST['avatarUrl']))){ $avatarUrl = trim($_POST['avatarUrl'], '"'); }
    ! empty(trim($_POST['username'])) ? $newUsername = $_POST['username'] : $newUsername = null;
    ! empty(trim($_POST['newMail'])) ? $newMail = $_POST['newMail'] : $newMail = null;
    ! empty(trim($_POST['newPassword'])) ? $newPassword = $_POST['newPassword'] : $newPassword = null;
    ! empty(trim($_POST['confirmation'])) ? $newConfirmation = $_POST['confirmation'] : $newConfirmation = null;
    // Put all values in an associative array
    $newUserInfos = ['avatarUrl'=>$avatarUrl,'username'=>$newUsername,'mail'=>$newMail,'password'=>$newPassword,'confirmation'=>$newConfirmation];
    // If the array contains a null value, display the error message
    if (in_array(null, $newUserInfos)){
      $errorMessage = '- Un des champs est incomplet -';
      $error = true;
    } else {
      // Verify that the password and the confirmation are identical
      if ($newPassword === $newConfirmation){
        $error = false;
        // Include the form validation file
        require 'assets/formValidation/newUserFormValidation.php';
        // Sanitize and validate all values
        $cleanedNewInfos = validateAllNewInputs($newUserInfos);
        if (gettype($cleanedNewInfos) != 'string'){
          // Add default value to complete all the parametres of the request
          $cleanedNewInfos['idPersonnalisations'] = 1;
          $userInfos = $cleanedNewInfos;
          // Initiate connection to database
          require_once 'assets/db/connection.php';
          $database = connectionToDatabase();
          try {
            // Déclaration de la requête SQL avec paramètres
            $stmt = $database->prepare('INSERT INTO `users` (`username`,`mail`,`password`,`avatar_url`,`id_personnalisations`) VALUES (?, ?, ?, ?, ?)');
            // Execute la requête avec les variables en paramètres
            $stmtStatus = $stmt->execute([$userInfos['username'], $userInfos['mail'], $userInfos['password'], $userInfos['avatarUrl'], $userInfos['idPersonnalisations']]);
            // Réinitialise la requête
            $stmt = null;
            // $stmtStatus = boolean
            if ($stmtStatus){
              $cookieName = 'connected'; $cookieValue = 'true';
              // Unix timestamp + (86400 seconds in a day * 7 to make a week)
              $cookieExpDate = time() + (86400 * 7);
              // Available on the whole website
              $cookiePath = '/';
              setcookie($cookieName, $cookieValue, $cookieExpDate, $cookiePath);
              // Add simple information to get once the user already logged in
              setcookie('userMail', $userInfos['mail'], $cookieExpDate, $cookiePath);
              setcookie('avatarUrl', $userInfos['avatarUrl'], $cookieExpDate, $cookiePath);
            } else {
              // Error has occured when adding the patient, display error
            };
          } catch (PDOException $e) {
            echo $$query . '/' . $e->getMessage();
          }
        } else {
          // If there is an error in the validation, display the appropriate error message
          $errorMessage = $cleanedNewInfos;
          $error = true;
        }
        // If the password is different than the confirmation, display the error message
      } else {
        $errorMessage = '- Le mot de passe est différent de la confirmation -';
        $error = true;
      }
    }
    // If the form isn't for a new user, verify that it is for a login
  } else if (isset($_POST['loginSubmit'])) {
    // Verifiy if all values are not empty. If they are, replace them with a null
    ! empty(trim($_POST['loginMail'])) ? $loginMail = $_POST['loginMail'] : $loginMail = null;
    ! empty(trim($_POST['loginPassword'])) ? $loginPassword = $_POST['loginPassword'] : $loginPassword = null;
    // Put all values in a single associative array
    $loginUserInfos = ['mail'=>$loginMail,'password'=>$loginPassword];
    // If the array contains a null value, display the error message
    if (in_array(null, $loginUserInfos)){
      $errorMessage = '- Un des champs est incomplet -';
      $error = true;
    } else {
      // Include the form validation file
      require 'assets/formValidation/loginUserFormValidation.php';
      // Sanitize and validate all values
      $cleanedLoginInfos = validateAllLoginInputs($loginUserInfos);
      if (gettype($cleanedLoginInfos) != 'string'){
        // Check with database if user exist
      } else {
        // If there is an error in the validation, display the appropriate error message
        $errorMessage = $cleanedLoginInfos;
        $error = true;
      }
    }
  }
}
?>
<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <!-- ³ = alt + 0179 -->
  <title>Login - Solution³</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="assets/css/scrollbar.css">
  <link rel="stylesheet" type="text/css" href="assets/css/colorPalette.css">
  <link rel="stylesheet" type="text/css" href="assets/css/header.css">
  <link rel="stylesheet" type="text/css" href="assets/css/userAuthorization.css">
  <link rel="stylesheet" type="text/css" href="assets/css/login.css">
</head>
<body class="bg-silver">
  <?php include 'header.php'; ?>
  <div class="container d-flex" id="loginContainer">
    <!-- If the user wants to login instead of signing up -->
    <?php if ( isset($_POST[ 'connected' ]) ) { ?>
      <div class="card m-auto pt-3 shadow-lg" id="loginCard">
        <div class="card-body">
          <h3 class="card-title text-center mb-4">Connection</h3>
          <!-- Display the error message if there is one -->
          <?php if ($error) { ?>
            <h4 class="text-center"><?= $errorMessage ?></h4>
          <?php } else { ?>
            <h4 class="text-center outputMessage"></h4>
          <?php } ?>
          <form id="loginForm" action="user.php" method="post" autocomplete="on">
            <!-- Email input -->
            <div class="form-group row">
              <label for="loginMail" class="col-xl-3 col-form-label">Email</label>
              <div class="col-xl-9">
                <input name="loginMail" type="email" class="form-control" id="loginMail" placeholder="Email">
              </div>
            </div>
            <!-- Password input -->
            <div class="form-group row">
              <label for="loginPassword" class="col-xl-3 col-form-label">Mot de passe</label>
              <div class="col-xl-9">
                <input name="loginPassword" type="password" class="form-control finalInput" id="loginPassword" placeholder="Password">
              </div>
            </div>
            <!-- Buttons -->
            <div class="form-group row">
              <div class="col-xl-9 offset-xl-3 d-flex">
                <button type="submit" name="loginSubmit" class="btn btn-success mr-1" disabled>Se connecter</button>
                <button type="submit" formaction="login.php" class="btn btn-info">Créer votre compte</button>
              </div>
              <a href="#!" class="offset-md-5 offset-3 pt-3">Mot de passe oublié ?</a>
            </div>
          </form>
        </div>
      </div>
    <?php } else { ?>
      <div class="card m-auto pt-3 shadow-lg" id="newUserCard">
        <div class="bg-secondary mx-auto image-upload" id="avatarContainer">
          <img class="card-img-top" src="https://image.flaticon.com/icons/svg/163/163801.svg" alt="login"
          id="topAvatar"/>
        </div>
        <div class="card-body">
          <h3 class="card-title text-center">Nouveau Compte</h3>
          <!-- Display the error message if there is one -->
          <?php if ($error) { ?>
            <h4 class="text-center"><?= $errorMessage ?></h4>
          <?php } else { ?>
            <h4 class="text-center outputMessage"></h4>
          <?php } ?>
          <form id="newUserForm" action="login.php" method="post" autocomplete="on">
            <label for="avatarUrl" class="sr-only">Url de votre avatar</label>
            <input type="text" name="avatarUrl" id="avatarUrl" class="invisible">
            <!-- Username input -->
            <div class="form-group row">
              <label for="username" class="col-xl-3 col-form-label">Nom d'utilisateur</label>
              <div class="col-xl-9">
                <input name="username" type="text" class="form-control" id="username" placeholder="Username">
              </div>
            </div>
            <!-- Email input -->
            <div class="form-group row">
              <label for="newMail" class="col-xl-3 col-form-label">Email</label>
              <div class="col-xl-9">
                <input name="newMail" type="email" class="form-control" id="newMail" placeholder="Email">
              </div>
            </div>
            <!-- Password input -->
            <div class="form-group row">
              <label for="newPassword" class="col-xl-3 col-form-label">Mot de passe</label>
              <div class="col-xl-9">
                <input name="newPassword" type="password" class="form-control" id="newPassword" placeholder="Password">
              </div>
            </div>
            <!-- Password confirmation input -->
            <div class="form-group row">
              <label for="confirmation" class="col-xl-3 col-form-label finalInput">Confirmation du mot de passe</label>
              <div class="col-xl-9">
                <input name="confirmation" type="password" class="form-control" id="confirmation" placeholder="Confirmation">
              </div>
            </div>
            <!-- Buttons -->
            <div class="form-group row">
              <div class="col-xl-9 offset-xl-3 d-md-flex">
                <button type="submit" name="newSubmit" class="btn btn-success mr-1" disabled>Créer votre compte</button>
                <button formaction="login.php" name="connected" type="submit" id="loginButton" class="btn btn-info">Se connecter</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    <?php } ?>
  </div>
  <?php // Local storage authorization modal
  include 'userAuthorization.php'; ?>
  <!-- Mandatory last script links -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="assets/js/header.js"></script>
  <script src="assets/js/userAuthorization.js"></script>
  <script src="assets/js/loginForm-inputValidation.js"></script>
  <script src="assets/js/login.js"></script>
</body>
</html>
