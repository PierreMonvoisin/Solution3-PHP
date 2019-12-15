<?php
class Scrambler {
  private $faces = array('U', 'D', 'L', 'R', 'F', 'B');
  public function __construct() {
    $this->length = 25;
    $this->chance_prime = 25;
    $this->chance_double = 35;
  }
  public function setLength($value) {
    $this->length = $value;
  }
  public function setChancePrime($value) {
    $this->chance_prime = $value;
  }
  public function setChanceDouble($value) {
    $this->chance_double = $value;
  }
  public function generate() {
    $last = null;
    do {
      $move = $this->faces[array_rand($this->faces)];
      if ($move != $last) {
        $last = $move;
        $rand = mt_rand(0, 100);
        if ($rand <= $this->chance_prime) {
          $move .= "'";
        } elseif ($rand <= $this->chance_prime + $this->chance_double) {
          $move .= '2';
        }
        $scramble[] = $move;
      }
    } while (count($scramble) < $this->length);
    return implode(' ', $scramble);
  }
}
// Original credit to : https://github.com/jamiebicknell/Cube-Scrambler.git
