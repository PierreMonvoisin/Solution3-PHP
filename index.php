<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <!-- ³ = alt + 0179 -->
  <title>Accueil - Solution³</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="assets/css/scrollbar.css">
  <link rel="stylesheet" type="text/css" href="assets/css/colorPalette.css">
  <link rel="stylesheet" type="text/css" href="assets/css/header.css">
  <link rel="stylesheet" type="text/css" href="assets/css/userAuthorization.css">
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body class="bg-gainsboro">
  <?php include 'header.php'; ?>
  <!-- Buttons -->
  <div id="mainBody" class="row m-0">
    <h1 id="mainTitle" class="col-12 mt-5 text-center">Welcome to the Jungle</h1>
    <div class="btn-group top-button-group btn-group-lg mt-5 mb-3 mx-auto col-8" role="group">
      <!-- Top Left -->
      <button id="topLeftButton" type="button" class="btn btn-success mr-3 py-5" data-toggle="tooltip" data-placement="left" title="Compte Personnel"></button>
      <!-- Top Right -->
      <button id="topRightButton" type="button" class="btn btn-primary py-5" data-toggle="tooltip" data-placement="right" title="Chronomètre"></button>
    </div>
    <div class="btn-group bottom-button-group btn-group-lg mb-3 mx-auto col-8" role="group">
      <!-- Bottom Left -->
      <button id="bottomLeftButton" type="button" class="btn btnTooLarge btn-warning text-white mr-3 py-5" data-toggle="tooltip" data-placement="left" title="Apprentissage"></button>
      <!-- Bottome Right -->
      <button id="bottomRightButton" type="button" class="btn btn-danger py-5" data-toggle="tooltip" data-placement="right" title="Multijoueurs"></button>
    </div>
  </div>
  <?php // Local storage authorization modal
  include 'userAuthorization.php'; ?>
  <!-- Mandatory last script links -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="assets/js/header.js"></script>
  <script src="assets/js/userAuthorization.js"></script>
  <script src="assets/js/script.js"></script>
</body>
</html>
