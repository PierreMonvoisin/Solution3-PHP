<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <!-- ³ = alt + 0179 -->
  <title>Leçons - Solution³</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="assets/css/scrollbar.css">
  <link rel="stylesheet" type="text/css" href="assets/css/colorPalette.css">
  <link rel="stylesheet" type="text/css" href="assets/css/header.css">
  <link rel="stylesheet" type="text/css" href="assets/css/userAuthorization.css">
  <link rel="stylesheet" type="text/css" href="assets/css/lesson.css">
</head>
<body class="bg-gainsboro">
  <!-- Top pagination  -->
  <div id="pageBody" class="container-fluid">
    <div id="topPagination" class="row mx-0 my-4 w-100 border border-dark">
      <div class="d-flex w-100 mx-5 justify-content-around">
        <h6 class="align-self-center m-0">3x3x3 Tutoriel</h6>
        <img src="https://image.flaticon.com/icons/svg/148/148953.svg" alt="file">
        <img src="https://image.flaticon.com/icons/svg/60/60949.svg" alt="right arrow">
        <h6 class="align-self-center m-0">Méthode CFOP</h6>
        <img src="https://image.flaticon.com/icons/svg/148/148953.svg" alt="file">
        <img src="https://image.flaticon.com/icons/svg/60/60949.svg" alt="right arrow">
        <h6 class="align-self-center m-0">Étape par étape</h6>
        <img src="https://image.flaticon.com/icons/svg/148/148953.svg" alt="file">
      </div>
    </div>
    <div id="lessonContainer">
      <div id="lessons" class="row mx-0 w-100 d-flex flex-column flex-nowrap justify-content-center">
        <div class="card">
          <p class="card-header text-center">Croix (Cross)</p>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </p>
          </div>
        </div>
        <img class="mx-auto" src="https://image.flaticon.com/icons/svg/59/59690.svg" alt="Down arrow">
        <div class="card">
          <p class="card-header text-center">First Two Layers (F2L)</p>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </p>
          </div>
        </div>
        <img class="mx-auto" src="https://image.flaticon.com/icons/svg/59/59690.svg" alt="Down arrow">
        <div class="card">
          <p class="card-header text-center">Orientation of Last Layer (OLL)</p>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </p>
          </div>
        </div>
        <img class="mx-auto" src="https://image.flaticon.com/icons/svg/59/59690.svg" alt="Down arrow">
        <div class="card mb-4">
          <p class="card-header text-center">Positionning of Last Layer (PLL)</p>
          <div class="card-body">
            <div class="card-text d-flex">
              <p class="card-text">
                Some quick example text to build on the card title
                and make up the bulk of the card's content.
              </p>
              <img class="lessonImage" src="https://image.flaticon.com/icons/svg/2285/2285806.svg" alt="cube">
            </div>
          </div>
        </div>
      </div>
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
</body>
</html>
