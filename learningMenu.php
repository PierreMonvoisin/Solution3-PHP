<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <!-- ³ = alt + 0179 -->
  <title>Leçons - Solution³</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="assets/css/scrollbar.css">
  <link rel="stylesheet" type="text/css" href="assets/css/colorPalette.css">
  <link rel="stylesheet" type="text/css" href="assets/css/header.css">
  <link rel="stylesheet" type="text/css" href="assets/css/userAuthorization.css">
  <link rel="stylesheet" type="text/css" href="assets/css/learningMenu.css">
</head>
<body class="bg-gainsboro">
  <!-- Header -->
  <?php include 'header.php'; ?>
  <div id="mainMenu" class="container-fluid p-0">
    <div class="row w-100 p-0 m-0">
      <div class="col p-0 m-0">
        <button id="TopLeft" type="button" class="btn bg-blue" data-toggle="tooltip"
        data-placement="bottom" title="Comment résoudre un 3x3"><img src="https://i.pinimg.com/originals/4f/37/4c/4f374c5803ccb759755066a8e887e623.png" alt="3x3 cube"></button>
        <button id="BottomLeft" type="button" class="btn btn-light" data-toggle="tooltip"
        data-placement="top" title="Paramètres"><img src="https://image.flaticon.com/icons/svg/1242/1242443.svg" alt="Settings"> </button>
      </div>
      <div id="mainLesson" class="col-9">
        <ul id="default" class="list-group shadow">
          <li class="TopLeft list-group-item bg-blue text-center text-white sectionTitle m-0 py-0">Comment résoudre un rubik's cube</li>
          <li class="TopLeft list-group-item list-group-item-primary">Morbi leo risus</li>
          <li class="TopRight list-group-item bg-green text-center text-white sectionTitle m-0 py-0">Algorithmes et conseils pour s'améliorer</li>
          <li class="TopRight list-group-item list-group-item-success">Porta ac consectetur ac</li>
          <li class="BottomLeft list-group-item bg-secondary text-center text-white sectionTitle m-0 py-0">Paramètres de personnalisation</li>
          <li class="BottomLeft list-group-item list-group-item-light">Vestibulum at eros</li>
          <li class="BottomRight list-group-item bg-yellow text-center sectionTitle m-0 py-0">Rechercher des algorithmes ou des leçons</li>
          <li class="BottomRight list-group-item list-group-item-warning">Vestibulum at eros</li>
        </ul>
      </div>
      <div class="col p-0 ml-auto mr-0 my-0">
        <button id="TopRight" type="button" class="btn bg-green" data-toggle="tooltip"
        data-placement="bottom" title="Algorithmes et conseils"><img src="http://static1.squarespace.com/static/54f2df67e4b079e94c291e4f/t/54f700b9e4b06512fa5f4528/1425473725865/rubiks+cube+corner+permuted?format=1500w" alt="Algorithms"></button>
        <button id="BottomRight" type="button" class="btn bg-yellow" data-toggle="tooltip"
        data-placement="top" title="Rechercher dans les lessons"><img src="https://image.flaticon.com/icons/svg/639/639375.svg" alt="Search"></button>
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
  <script src="assets/js/learningMenu.js"></script>
</body>
</html>
