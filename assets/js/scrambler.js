// Generate a scramble on page load
newScramble();
// Random creation of a scramble
function newScramble(){
  // Declare variables (faces, probabilities ...)
  var faces = ['U', 'D', 'L', 'R', 'F', 'B'];
  var scrambleLength = 25, chancePrime = 25, chanceDouble = 35;
  var lastMove = null, scramble = [], numberOfMoves = 0;
  // Loop to create an array with 25 letters
  while (numberOfMoves < scrambleLength){
    // Get a random letter
    var move = (faces.sort(() => Math.random() - 0.5))[Math.floor(Math.random() * 6)];
    // Check if it is the same as the last letter
    if (lastMove != move){
      numberOfMoves++;
      lastMove = move;
      // Set probabilities
      var chance = Math.floor(Math.random() * 101);
      // Add prime or add double if the probability is right
      if (chance <= chancePrime){
        move += "'";
      } else if (chance <= (chancePrime + chanceDouble)){
        move += '2';
      }
      // Add move to the scramble
      scramble.push(move);
    } else {
      // If new letter = old letter, restart the function
      newScramble();
      return;
    }
  }
  // Add scramble to the page
  $('#scramble span').text(scramble.join(' '));
}
// Original PHP credit to : https://github.com/jamiebicknell/Cube-Scrambler.git
