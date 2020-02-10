<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <!-- ³ = alt + 0179 -->
  <title>Compte - Solution³</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="assets/css/scrollbar.css">
  <link rel="stylesheet" type="text/css" href="assets/css/colorPalette.css">
  <link rel="stylesheet" type="text/css" href="assets/css/header.css">
  <link rel="stylesheet" type="text/css" href="assets/css/userAuthorization.css">
  <link rel="stylesheet" type="text/css" href="assets/css/user.css">
</head>
<body class="bg-silver">
  <!-- Header -->
  <?php include 'header.php'; ?>
  <div class="container-fluid w-100">
    <div class="row bg-taupe">
      <img id="topAvatar" class="mx-auto my-2 bg-light border border-dark" src="https://image.flaticon.com/icons/svg/163/163801.svg" alt="Avatar Picture">
      <h1 class="col-6 text-center text-white my-auto pr-5 pl-0">Compte Personnel</h1>
    </div>
  </div>
  <div id="userStats" class="container w-100">
    <div class="row justify-content-between">
      <!-- General info -->
      <div id="overview" class="card my-2 col-12 px-0 bg-copper shadow">
        <h5 class="text-center text-white px-0 pt-1">Statistiques</h5>
        <div class="card-body py-1 px-0 userStat d-flex justify-content-around">
          <table id="overviewStats" class="col-5 table bg-light mb-0 text-center">
            <thead>
              <tr>
                <th>/</th>
                <th>Single</th>
                <th>Ao5</th>
                <th>Ao12</th>
                <th>Ao50</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Dernier</th>
                <td id="lastSingle">-</td>
                <td id="lastAo5">-</td>
                <td id="lastAo12">-</td>
                <td id="lastAo50">-</td>
              </tr>
              <tr>
                <th>Meilleur</th>
                <td id="bestSingle">-</td>
                <td id="bestAo5">-</td>
                <td id="bestAo12">-</td>
                <td id="best1o50">-</td>
              </tr>
              <tr>
                <th>Pire</th>
                <td id="worstSingle">-</td>
                <td id="worstAo5">-</td>
                <td id="worstAo12">-</td>
                <td id="worstAo50">-</td>
              </tr>
            </tbody>
          </table>
          <!-- Chart -->
          <div class="col-6 p-0" id="chartContainer"></div>
        </div>
      </div>
      <!-- Online Friends -->
      <div id="friends" class="card col-xl-3 col-lg-4 col-md-5 my-2 px-0 bg-copper shadow">
        <div class="card-body p-2 userStat">
          <h5 class="text-center text-white">Liste d'amis</h5>
          <div class="card">
            <ul class="list-group">
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Pierre Monvoisin
                <span class="badge badge-success">En ligne</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Lily Dubas
                <span class="badge badge-success">En ligne</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Felix Zemdegs
                <span class="badge badge-warning text-white">Inactif</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center">
                Max Park
                <span class="badge badge-danger">Hors ligne</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- History log -->
      <div id="history" class="card col-xl-8 col-md-7 col-12 my-2 px-0 bg-copper shadow">
        <div class="card-body userStat p-2">
          <h5 class="text-center text-white">Historique</h5>
          <table class="table text-center">
            <thead class="thead-light">
              <tr>
                <th class="py-1">N°</th>
                <th class="py-1">Time</th>
                <th class="py-1">Ao5</th>
                <th class="py-1">Ao12</th>
                <th class="py-1">Ao50</th>
              </tr>
            </thead>
            <tbody>
              <tr id="noSolve">
                <td colspan="5" class="py-2">Pas d'historique</td>
              </tr>
            </tbody>
          </table>
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
  <script src="assets/js/user.js"></script>
  <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
  <script src="assets/js/graph.js"></script>
</body>
</html>
