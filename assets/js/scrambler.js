// Generate a scramble on page load
newScramble();
// Random creation of a scramble
function newScramble(){
  // Declare variables (faces, probabilities ...)
  var faces = ['U', 'D', 'L', 'R', 'F', 'B'];
  var scrambleLength = 25, chancePrime = 25, chanceDouble = 35;
  var antePenulMove = null, penulMove = null, scramble = [], numberOfMoves = 0;
  // Loop to create an array with 25 letters
  while (numberOfMoves < scrambleLength){
    // Get a random letter
    var move = (faces.sort(() => Math.random() - 0.5))[Math.floor(Math.random() * 6)];
    // Check if it is the same as the last letter
    while (penulMove == move){
      move = (faces.sort(() => Math.random() - 0.5))[Math.floor(Math.random() * 6)];
    }
    setLetter();
  }
  function setLetter(){
    // Extra security not to have "useless moves"
    if (antePenulMove == move){
      // Verify if the set of three moves are really useless
      if ((move == 'F' && penulMove == 'B') || (move == 'B' && penulMove == 'F') || (move == 'U' && penulMove == 'D') || (move == 'U' && penulMove == 'D') || (move == 'R' && penulMove == 'L') || (move == 'R' && penulMove == 'L')){
        // Change the move until the problem is solve
        while (move == antePenulMove || move == penulMove){
          move = (faces.sort(() => Math.random() - 0.5))[Math.floor(Math.random() * 6)];
        }
      }
    }
    // Update the move history
    antePenulMove = penulMove; penulMove = move;
    // Set probability
    var chance = Math.floor(Math.random() * 101);
    // Add prime or add double if the probability is right
    if (chance <= chancePrime){
      move += "'";
    } else if (chance <= (chancePrime + chanceDouble)){
      move += '2';
    }
    // Add move to the scramble
    scramble.push(move);
    numberOfMoves++;
  }
  // Add scramble to the page
  $('#scramble span').text(scramble.join(' '));
}
// Original PHP credits to : https://github.com/jamiebicknell/Cube-Scrambler.git
