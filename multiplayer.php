<!DOCTYPE html>
<html lang="fr" dir="ltr">
<head>
  <!-- ³ = alt + 0179 -->
  <title>Multijoueurs - Solution³</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" type="text/css" href="assets/css/header.css">
  <link rel="stylesheet" type="text/css" href="assets/css/multiplayer.css">
</head>
<body class="bg-gainsboro">
  <!-- Header -->
  <?php include 'header.php'; ?>
  <div class="container py-3">
    <div class="row mainRow mb-3">
      <div class="mx-auto card-deck col-md-6">
        <!-- Top left card - Algorithm of the week -->
        <div id="algoCard" class="card mb-0 border-blue">
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
        <div id="friendsCard" class="card border-orange">
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
        <div id="battleCard" class="card border-red">
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
        <div id="newsCard" class="card border-green">
          <h3 class="card-header text-center bg-green text-white">News</h3>
          <div class="card-body">
            <div class="jumbotron py-0 mb-0">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non sem nisi. Nullam lorem erat, auctor nec lectus bibendum, finibus maximus erat. Cras nunc mauris, efficitur at ullamcorper vel, consequat et erat. Morbi porta elementum metus, id bibendum justo dictum ut. Aenean rutrum massa at varius convallis. Vivamus placerat mollis condimentum. Nulla facilisi. Nam malesuada diam quam, eu convallis arcu consequat nec. Donec fringilla elit condimentum, blandit turpis et, elementum enim. Praesent in nisi et justo congue gravida quis at metus. Phasellus eget nibh efficitur, ornare mauris non, rutrum est. Praesent elementum ligula in nulla hendrerit malesuada. Phasellus eu sollicitudin tellus, quis tincidunt neque.
                Vestibulum imperdiet eros eget condimentum lacinia. In tempus efficitur consectetur. Integer interdum non felis vel mattis. Duis sollicitudin sagittis velit. Phasellus aliquet faucibus tempor. Phasellus pretium, tortor convallis fermentum finibus, purus dui consequat leo, nec imperdiet ex est quis nunc. Donec viverra sodales scelerisque.
                Nunc sed nibh aliquam, aliquam mauris ut, porta augue. Integer luctus, lectus nec malesuada eleifend, nisi mi cursus leo, mattis ultrices mauris orci vitae est. Mauris ultricies interdum ornare. Donec venenatis orci faucibus urna consequat, ac faucibus ante pulvinar. Ut id lorem quis felis tempus congue. Nulla quis malesuada leo. Morbi consectetur magna eget mauris pulvinar posuere. Donec eu ullamcorper eros, eu dictum leo. In eu auctor eros.
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!-- Mandatory last script links -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="assets/js/header.js"></script>
</body>
</html>
