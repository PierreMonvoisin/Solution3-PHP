<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <!-- ³ = alt + 0179 -->
  <title>Compte - Solution³</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="assets/css/header.css">
  <link rel="stylesheet" type="text/css" href="assets/css/user.css">
</head>
<body class="bg-silver">
  <!-- Header -->
  <?php include 'header.php'; ?>
  <div class="container-fluid w-100">
    <div class="row bg-taupe">
      <img id="topAvatar" class="mx-auto bg-light border border-dark" src="https://image.flaticon.com/icons/svg/163/163801.svg" alt="Avatar photo">
    </div>
  </div>
  <div id="userStats" class="container w-100">
    <div class="row justify-content-between">
      <!-- History -->
      <div class="userStat py-2 col-12 d-flex my-3 bg-copper justify-content-around">
        <table class="col-5 table bg-light mb-0 text-center">
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
              <td id="bestSingle">11:352</td>
              <td id="bestAo5">14:521</td>
              <td id="bestAo12">15:948</td>
              <td id="best1o50">17:131</td>
            </tr>
            <tr>
              <th>Pire</th>
              <td id="worstSingle">37:119</td>
              <td id="worstAo5">42:736</td>
              <td id="worstAo12">39:486</td>
              <td id="worstAo50">40:844</td>
            </tr>
          </tbody>
        </table>
        <!-- Chart -->
        <div class="col-6 p-0" id="chartContainer">
        </div>
      </div>
      <!-- Online Friends -->
      <div class="userStat py-2 col-3 my-3 bg-copper">
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
      <!-- History log -->
      <div id="history" class="userStat py-2 col-8 my-3 bg-copper">
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
            <tr>
              <td class="py-2">#0</td>
              <td class="py-2">-</td>
              <td class="py-2">-</td>
              <td class="py-2">-</td>
              <td class="py-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- Mandatory last script links -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="assets/js/header.js"></script>
  <script src="assets/js/user.js"></script>
</body>
</html>
