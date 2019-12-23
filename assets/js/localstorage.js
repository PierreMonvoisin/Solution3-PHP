// Add informations to the local storage
function addToStorage(solveIndex, newTime, average5, average12, average50){
  // Add stats to local storage
  if (typeof(Storage) != "undefined") {
    if (localStorage.getItem('indexLog')){
      // Delete last solve
      localStorage.removeItem('indexLog');
      localStorage.removeItem('singleLog');
      localStorage.removeItem('averageOf5Log');
      localStorage.removeItem('averageOf12Log');
      localStorage.removeItem('averageOf50Log');
    }
    // Add current solve to local storage
    localStorage.setItem('indexLog', JSON.stringify(solveIndex));
    localStorage.setItem('singleLog', JSON.stringify(newTime));
    localStorage.setItem('averageOf5Log', JSON.stringify(average5));
    localStorage.setItem('averageOf12Log', JSON.stringify(average12));
    localStorage.setItem('averageOf50Log', JSON.stringify(average50));
    var indexHistory = localStorage.getItem('indexLog');
    // Add solve to local history storage
    localStorage.setItem(`indexHistory${indexHistory}`, JSON.stringify(solveIndex));
    localStorage.setItem(`singleHistory${indexHistory}`, JSON.stringify(newTime));
    localStorage.setItem(`averageOf5History${indexHistory}`, JSON.stringify(average5));
    localStorage.setItem(`averageOf12History${indexHistory}`, JSON.stringify(average12));
    localStorage.setItem(`averageOf50History${indexHistory}`, JSON.stringify(average50));
  } else {
    // Alert if browser does not support local storage function
    alert('Désolé, notre navigateur ne supporte pas le local storage');
  }
}
// Clear local storage hidden button
$('#scramble').click(function failSafe(){
  var secretCode = prompt('Secret Password :');
  if (secretCode == 'reset'){
    localStorage.clear();
  }
});
