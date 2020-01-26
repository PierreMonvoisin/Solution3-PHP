<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <!-- ³ = alt + 0179 -->
  <title>Login - Solution³</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="assets/css/scrollbar.css">
  <link rel="stylesheet" type="text/css" href="assets/css/colorPalette.css">
  <link rel="stylesheet" type="text/css" href="assets/css/header.css">
  <link rel="stylesheet" type="text/css" href="assets/css/userAuthorization.css">
  <link rel="stylesheet" type="text/css" href="assets/css/login.css">
</head>
<body class="bg-gainsboro">
<?php include 'header.php'; ?>
<div class="container d-flex" id="loginContainer">
	<?php if ( isset($_POST[ 'connected' ]) ) { ?>
   <div class="card m-auto pt-3 shadow-lg" id="loginCard">
     <div class="card-body">
       <h3 class="card-title text-center mb-4">Connection</h3>
       <form id="loginForm" action="login.php" method="post" autocomplete="on">
         <div class="form-group row">
           <label for="loginMail" class="col-sm-3 col-form-label">Email</label>
           <div class="col-sm-9">
             <input name="loginEmail" type="email" class="form-control" id="loginMail" placeholder="Email">
           </div>
         </div>
         <div class="form-group row">
           <label for="loginPassword" class="col-sm-3 col-form-label">Mot de passe</label>
           <div class="col-sm-9">
             <input name="loginPassword" type="password" class="form-control" id="loginPassword" placeholder="Password">
           </div>
         </div>
         <div class="form-group row">
           <div class="col-sm-9 offset-sm-3 d-flex flex-column">
             <button type="submit" class="btn btn-primary w-50">Se connecter</button>
             <a href="#!" class="pt-3">Mot de passe oublié ?</a>
           </div>
         </div>
       </form>
     </div>
   </div>
	<?php } else { ?>
   <div class="card m-auto pt-3 shadow-lg" id="newUserCard">
     <div class="bg-secondary mx-auto image-upload" id="avatarContainer">
       <label for="file-input" class="m-0">
         <img class="card-img-top" src="https://image.flaticon.com/icons/svg/163/163801.svg" alt="login"
              id="topAvatar"/>
       </label>
       <input id="file-input" class="d-none" type="file"/>
       <img>
     </div>
     <div class="card-body">
       <h3 class="card-title text-center">Nouveau Compte</h3>
       <form id="newUserForm" action="login.php" method="post" autocomplete="on">
         <div class="form-group row">
           <label for="newMail" class="col-sm-3 col-form-label">Email</label>
           <div class="col-sm-9">
             <input name="newMail" type="email" class="form-control" id="newMail" placeholder="Email">
           </div>
         </div>
         <div class="form-group row">
           <label for="newPassword" class="col-sm-3 col-form-label">Mot de passe</label>
           <div class="col-sm-9">
             <input name="newPassword" type="password" class="form-control" id="newPassword" placeholder="Password">
           </div>
         </div>
         <div class="form-group row">
           <label for="confirmation" class="col-sm-3 col-form-label">Confirmation du mot de passe</label>
           <div class="col-sm-9">
             <input name="confirmation" type="password" class="form-control" id="confirmation" placeholder="Confirmation">
           </div>
         </div>
         <div class="form-group row">
           <div class="col-sm-9 offset-sm-3 d-flex">
             <button type="submit" class="btn btn-primary w-50 mr-1">Créer votre compte</button>
             <button name="connected" type="submit" id="loginButton" class="btn btn-primary w-50">Se connecter</button>
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
<script src="assets/js/login.js"></script>
</body>
</html>
