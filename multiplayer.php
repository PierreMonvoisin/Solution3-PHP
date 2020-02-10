<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <!-- ³ = alt + 0179 -->
  <title>Multijoueurs - Solution³</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="assets/css/scrollbar.css">
  <link rel="stylesheet" type="text/css" href="assets/css/colorPalette.css">
  <link rel="stylesheet" type="text/css" href="assets/css/header.css">
  <link rel="stylesheet" type="text/css" href="assets/css/userAuthorization.css">
  <link rel="stylesheet" type="text/css" href="assets/css/multiplayer.css">
</head>
<body class="bg-gainsboro">
  <!-- Header -->
  <?php include 'header.php'; ?>
  <div class="container py-3">
    <h1 class="text-center my-2">Multijoueurs</h1>
    <div class="row mainRow mb-3">
      <div class="mx-auto card-deck col-md-6">
        <!-- Top left card - Algorithm of the week -->
        <div id="algoCard" class="card mb-0">
          <h3 class="card-header pt-2 text-center bg-blue text-white">Alg of the week</h3>
          <div class="card-body py-0">
            <p class="card-title text-center border border-dark border-left-0 border-right-0 m-0">F' L B2 R D2 L2 D2 L' B2 D2 R' F2 R2 F' D' F' R2 D' B U2 F</p>
            <table class="table table-striped text-center">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Leaderboard</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ada Lovelace</td>
                  <td>12:543 s</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Grace Hopper</td>
                  <td>12:960 s</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Margaret Hamilton</td>
                  <td>13:045 s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Top right card - Online friends -->
      <div class="mx-auto card-deck col-md-6">
        <div id="friendsCard" class="card">
          <h3 class="card-header text-center bg-orange text-white">Friends</h3>
          <div class="card-body">
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
    </div>
    <!-- Bottom left card - Battle mode -->
    <div class="row mainRow">
      <div class="mx-auto card-deck col-md-6">
        <div id="battleCard" class="card">
          <h3 class="card-header text-center bg-red text-white">Battle mode</h3>
          <div class="card-body py-0">
            <div class="card-deck h-100 align-content-center">
              <div class="card bg-secondary">
                <div id="button1v1" class="card-body pt-3">
                  <h4 class="card-title text-white text-center mb-4">1 vs 1</h4>
                  <button type="button" class="btn btn-block btn-lg btn-warning py-4">Je suis prêt !</button>
                </div>
              </div>
              <div id="card2v2" class="card bg-secondary">
                <div id="button2v2" class="card-body pt-3">
                  <h4 class="card-title text-white text-center mb-4">2 vs 2</h4>
                  <button type="button" class="btn btn-block btn-lg btn-light py-4">Je suis prêt !</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Bottom right card - News -->
      <div class="mx-auto card-deck col-md-6">
        <div id="newsCard" class="card">
          <h3 class="card-header text-center bg-green text-white">News</h3>
          <div class="card-body">
            <div class="jumbotron py-0 mb-0">
              <span>
                Strong selfish pious fearful ocean sexuality right revaluation christianity. Superiority merciful merciful prejudice society spirit ideal noble play decrepit hope disgust will. Holiest play morality deceptions horror reason selfish law oneself eternal-return. Hatred oneself truth pinnacle spirit moral. Decrepit of merciful moral endless convictions ultimate. Society dead sea eternal-return snare good selfish enlightenment mountains ultimate fearful god merciful horror.
                Grandeur ultimate strong of play endless moral. Burying passion prejudice eternal-return reason play strong depths pious.
                Abstract deceptions reason contradict right love ubermensch endless depths disgust aversion. Disgust pious spirit spirit burying disgust truth fearful morality madness selfish.
                Self sexuality hatred reason grandeur virtues holiest endless play ultimate. Christianity morality fearful chaos merciful justice god mountains self. Virtues marvelous of will suicide self burying deceptions deceptions christianity. Ultimate god pious decrepit inexpedient war moral war ideal oneself faith play selfish reason.
                Law morality eternal-return noble ultimate ascetic. Faith overcome pious self of against of hatred love christianity chaos pinnacle. Free ubermensch zarathustra holiest mountains enlightenment revaluation abstract grandeur fearful passion. Eternal-return decieve convictions decieve eternal-return. Morality revaluation ideal intentions sexuality holiest. Oneself eternal-return christianity dead pinnacle noble will passion philosophy prejudice evil. Ultimate ideal faith will hope reason faithful justice decrepit.
              </span>
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
