<?php
function connectionToDatabase() {
  require_once 'parameters.php';
  try {
    $database = new PDO('mysql:dbname=' .DB. ';host=' .HOST. ';charset=utf8', USER, PASSWORD);
    return $database;
  } catch (Exception $ex) {
    die('La connexion à la base de données a échoué !');
  }
}
