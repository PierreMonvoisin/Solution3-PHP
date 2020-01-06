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
<div id="mainMenu" class="container">
    <div class="row">
        <div class="col-10 mx-auto my-2">
            <button type="button" class="btn btn-block btn-outline-primary">Comment résoudre le 3x3</button>
        </div>
        <div class="col-10 mx-auto my-2">
            <button type="button" class="btn btn-block btn-outline-light">La méthode CFOP</button>
        </div>
        <div class="col-10 mx-auto my-2">
            <button type="button" class="btn btn-block btn-outline-warning">Notation des mélanges</button>
        </div>
        <div class="col-10 mx-auto my-2">
            <button type="button" class="btn btn-block btn-outline-success">Listes d'algorithmes</button>
        </div>
        <div class="col-10 mx-auto my-2">
            <button type="button" class="btn btn-block btn-outline-danger">CFOP avancé</button>
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