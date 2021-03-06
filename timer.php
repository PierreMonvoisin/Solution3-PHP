<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <!-- ³ = alt + 0179 -->
  <title>Timer - Solution³</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Odibee+Sans&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Gugi&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Black+Ops+One&display=swap" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="assets/css/scrollbar.css">
  <link rel="stylesheet" type="text/css" href="assets/css/colorPalette.css">
  <link rel="stylesheet" type="text/css" href="assets/css/header.css">
  <link rel="stylesheet" type="text/css" href="assets/css/userAuthorization.css">
  <link rel="stylesheet" type="text/css" href="assets/css/timer.css">
</head>
<body class="bg-silver">
  <!-- Header -->
  <?php include 'header.php'; ?>
  <!-- Side Timer -->
  <div id="timerContainer" class="d-flex">

    <!-- Side stats button -->
    <div id="timerBody" class="d-flex flex-column">
      <button id="menuToggle" type="button" class="btn btn-outline-dark">Cacher les statistiques</button>
      <!-- Scramble -->
      <div class="row text-center mb-0 mx-0 mt-xl-2 mt-lg-5 mt-5">
        <h2 id="scramble" class="mt-4"><span class="py-2 px-2 border border-dark">Error</span></h2>
      </div>
      <!-- Timer -->
      <div class="row text-center mx-auto">
        <h1 class="p-0 m-0" id="timer">
          <span id="hours">00</span><span id="separatorHours">:</span>
          <span id="minutes">00</span><span id="separatorMinutes">:</span>
          <span id="seconds">00</span><span>.</span>
          <span id="milliseconds">000</span>
        </h1>
      </div>
      <div class="row text-center mx-auto mb-2 mt-1">
        <h2 class="p-0 m-0">
          <span id="averageOf5">Average of 5 : <span>-</span></span>
        </h2>
      </div>
      <div class="row text-center mx-auto">
        <h2 class="p-0 m-0">
          <span id="averageOf12">Average of 12 : <span>-</span></span>
        </h2>
      </div>
      <!-- Invisible button -->
      <div class="mx-auto" id="controls">
        <button id="start_stop" class="btn btn-light">Start</button>
      </div>
      <div id="sideTimer" class="row m-0 bg-secondary">
        <div id="sideStats">
          <p id="statsInMenu" class="bg-light font-weight-bold text-center mb-0 py-1">Statistique</p>
          <div id="statsTable" class="d-flex py-2 text-white">
            <div class="text-left ml-4 mr-0 w-50">
              <div>Numéro : </div>
              <hr class="p-0 mx-0 my-1 bg-light">
              <div>Temps : </div>
              <hr class="p-0 m-0 my-1 bg-light">
              <div>Average of 5 : </div>
              <hr class="p-0 m-0 my-1 bg-light">
              <div>Average of 12 : </div>
              <hr class="p-0 m-0 my-1 bg-light">
              <div>Average of 50 : </div>
            </div>
            <div class="text-center mr-3 w-50">
              <div>n° <span id="sideStatIndex">0</span></div>
              <hr class="p-0 m-0 bg-light my-1">
              <div><span id="sideStatSingle">-</span></div>
              <hr class="p-0 m-0 bg-light my-1">
              <div><span id="sideStatAo5">-</span></div>
              <hr class="p-0 m-0 bg-light my-1">
              <div><span id="sideStatAo12">-</span></div>
              <hr class="p-0 m-0 bg-light my-1">
              <div><span id="sideStatAo50">-</span></div>
            </div>
          </div>
        </div>

        <!-- Solve history -->
        <table id="solveList" class="table text-center mb-0">
          <thead class="bg-light">
            <tr>
              <th class="py-1 px-2 border-bottom-0">N°</th>
              <th class="py-1 px-2 border-bottom-0">Time</th>
              <th class="py-1 px-2 border-bottom-0">Ao5</th>
              <th class="py-1 px-2 border-bottom-0">Ao12</th>
            </tr>
          </thead>
          <tbody id="historyTbody" class="text-white">
            <tr id="noSolve">
              <td colspan="4" class="border border-light border-left-0 border-right-0 border-top-0">Pas de statistique</td>
            </tr>
          </tbody>
        </table>
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
  <script src="assets/js/timer.js"></script>
  <script src="assets/js/stopwatch.js"></script>
  <script src="assets/js/localstorage.js"></script>
  <script src="assets/js/averages.js"></script>
  <script src="assets/js/scrambler.js"></script>
</body>
</html>
