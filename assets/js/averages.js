// Turn time format HH:MM:SS.MMM to only milliseconds
function unfoldTime(time){
  if (time != '-'){
    // Delete the dot between the seconds and milliseconds
    time = time.replace(/\./g, '');
    // Split between hours, minutes and milliseconds
    time = time.split(': ');
    if (time.length == 2){
      time = Number(time[0]) * 60000 + Number(time[1]);
    } else if (time.length == 3){
      time = Number(time[0]) * 3600000 + Number(time[1]) * 60000 + Number(time[2]);
    } else {
      time = Number(time);
    }
  }
  // Return the time in milliseconds
  return time;
}
var solves5 = [], solves12 = [], solves50 = [];
// Set averages in solves 5, 12 and 50
if (localStorage.getItem('indexLog')){
  currentIndex = Number(JSON.parse(localStorage.getItem('indexLog')));
  // Add solves in localStorage to history
  var index, single, ao5, ao12, ao50;
  for (var numberOfSolve = Number(currentIndex); numberOfSolve > 0; numberOfSolve--){
    // Get all solves in sole history ( strings except index )
    index = Number(JSON.parse(localStorage.getItem(`indexHistory${numberOfSolve}`)));
    ao5 = JSON.parse(localStorage.getItem(`averageOf5History${numberOfSolve}`));
    ao12 = JSON.parse(localStorage.getItem(`averageOf12History${numberOfSolve}`));
    ao50 = JSON.parse(localStorage.getItem(`averageOf50History${numberOfSolve}`));
    // Turn the times from normal format to milliseconds for the averages calculations
    ao5 = unfoldTime(ao5); ao12 = unfoldTime(ao12); ao50 = unfoldTime(ao50);
    // Add the time to the array of average until it is full minus one solve
    if (numberOfSolve > (Number(currentIndex) - 4 )){
      if (ao5 != '-'){ solves5.splice(0, 0, ao5); }
    }
    console.log(solves5);
    if (numberOfSolve > (Number(currentIndex) - 11 )){
      if (ao12 != '-'){ solves12.splice(0, 0, ao12); }
    }
    if (numberOfSolve > (Number(currentIndex) - 49 )){
      if (ao50 != '-'){ solves50.splice(0, 0, ao50); }
    }
  }
}
// Prepend zeros to the digits in stopwatch
function prependZero(time, length) {
  time = new String(time); // stringify time
  return new Array(Math.max(length - time.length + 1, 0)).join("0") + time;
}
// Calculation of the average of 5 solves
var average5;

// Encore besoin de travailler sur l'insertion des résolutions on reload
// EXPLICATIONS : Les résolutions s'ajoutent une à une dans les array des moyennes ( sous format millisecondes ), sauf que si il y a moins de 5, 12, 50 résolutions dans les array respectifs, l'array se reset et attend de nouveau 5, 12, 50 résolutions

function averageOf5(hours, minutes, seconds, milliseconds) {
  // Transform all parametres to milliseconds
  var average5Milli = hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;
  // Add time to the averages array
  solves5.splice(0, 0, average5Milli);
  // Check the length of the array solves5
  if (solves5.length < 5){
    // If there is less than 5 solves
    average5 = '-';
  } else {
    // Get the highest and lowest time ( and their index ) not to calculate them in the average
    var maxValue = Math.max(...solves5);
    // ' ... ' in front of an array will convert array values to distinct variables
    var indexMaxValue = solves5.indexOf(Math.max(...solves5));
    var minValue = Math.min(...solves5);
    var indexMinValue = solves5.indexOf(Math.min(...solves5));
    // Delete the max and min time form the array
    solves5.splice(indexMaxValue, 1);
    solves5.splice(indexMinValue, 1);
    // Add all 5 solves together
    for (var i = 0; i < 2; i++){
      average5Milli += solves5[i];
    }
    // Get the average
    average5Milli = average5Milli / 3;
    // Put the max and min values back in the array in the right order
    if (Math.min(indexMaxValue, indexMinValue) == indexMaxValue){
      solves5.splice(indexMaxValue, 0, maxValue);
      solves5.splice(indexMinValue, 0, minValue);
    } else {
      solves5.splice(indexMinValue, 0, minValue);
      solves5.splice(indexMaxValue, 0, maxValue);
    }
    // Delete 5th solve waiting for the next one
    solves5.splice(solves5.length - 1, 1);
    // Convert time back to hours, minutes, seconds and milliseconds
    hours = Math.floor(average5Milli / 3600000);
    minutes = Math.floor( (average5Milli - (hours * 3600000)) / 60000 );
    seconds = Math.floor( (average5Milli - (hours * 3600000) - (minutes * 60000)) / 1000 );
    milliseconds = Math.floor(average5Milli - (hours * 3600000) - (minutes * 600000) - (seconds * 1000));
    // Check if hours / hours and minutes are empty not to display
    average5 = hours + ': ' + prependZero(minutes, 2) + ': ' + prependZero(seconds, 2) + '.' + prependZero(milliseconds, 3);
    if (hours == 0){
      average5 = minutes + ': ' + prependZero(seconds, 2) + '.' + prependZero(milliseconds, 3);
    }
    if (hours == 0 && minutes == 0){
      average5 = seconds + '.' + prependZero(milliseconds, 3);
    }
  }
}
// Calculation of the average of 12 solves
var average12;
function averageOf12(hours, minutes, seconds, milliseconds) {
  var average12Milli = hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;  solves12.splice(0, 0, average12Milli);
  if (solves12.length < 12){
    average12 = '-';
  } else {
    var maxValue = Math.max(...solves12);
    var indexMaxValue = solves12.indexOf(Math.max(...solves12));
    var minValue = Math.min(...solves12);
    var indexMinValue = solves12.indexOf(Math.min(...solves12));
    solves12.splice(indexMaxValue, 1);
    solves12.splice(indexMinValue, 1);
    for (var i = 0; i < 9; i++){
      average12Milli += solves12[i];
    }
    average12Milli = average12Milli / 10;
    if (Math.min(indexMaxValue, indexMinValue) == indexMaxValue){
      solves12.splice(indexMaxValue, 0, maxValue);
      solves12.splice(indexMinValue, 0, minValue);
    } else {
      solves12.splice(indexMinValue, 0, minValue);
      solves12.splice(indexMaxValue, 0, maxValue);
    }
    solves12.splice(solves12.length - 1, 1);
    hours = Math.floor(average12Milli / 3600000);
    minutes = Math.floor( (average12Milli - (hours * 3600000)) / 60000 );
    seconds = Math.floor( (average12Milli - (hours * 3600000) - (minutes * 60000)) / 1000 );
    milliseconds = Math.floor(average12Milli - (hours * 3600000) - (minutes * 600000) - (seconds * 1000));
    average12 = hours + ': ' + prependZero(minutes, 2) + ': ' + prependZero(seconds, 2) + '.' + prependZero(milliseconds, 3);
    if (hours == 0){
      average12 = minutes + ': ' + prependZero(seconds, 2) + '.' + prependZero(milliseconds, 3);
    }
    if (hours == 0 && minutes == 0){
      average12 = seconds + '.' + prependZero(milliseconds, 3);
    }
  }
}
// Calculation of the average of 50 solves
var average50;
function averageOf50(hours, minutes, seconds, milliseconds) {
  var average50Milli = hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;  solves50.splice(0, 0, average50Milli);
  if (solves50.length < 50){
    average50 = '-';
  } else {
    var maxValue = Math.max(...solves50);
    var indexMaxValue = solves50.indexOf(Math.max(...solves50));
    var minValue = Math.min(...solves50);
    var indexMinValue = solves50.indexOf(Math.min(...solves50));
    solves50.splice(indexMaxValue, 1);
    solves50.splice(indexMinValue, 1);
    for (var i = 0; i < 47; i++){
      average50Milli += solves50[i];
    }
    average50Milli = average50Milli / 48;
    if (Math.min(indexMaxValue, indexMinValue) == indexMaxValue){
      solves50.splice(indexMaxValue, 0, maxValue);
      solves50.splice(indexMinValue, 0, minValue);
    } else {
      solves50.splice(indexMinValue, 0, minValue);
      solves50.splice(indexMaxValue, 0, maxValue);
    }
    solves50.splice(solves50.length - 1, 1);
    hours = Math.floor(average50Milli / 3600000);
    minutes = Math.floor( (average50Milli - (hours * 3600000)) / 60000 );
    seconds = Math.floor( (average50Milli - (hours * 3600000) - (minutes * 60000)) / 1000 );
    milliseconds = Math.floor(average50Milli - (hours * 3600000) - (minutes * 600000) - (seconds * 1000));
    average50 = hours + ': ' + prependZero(minutes, 2) + ': ' + prependZero(seconds, 2) + '.' + prependZero(milliseconds, 3);
    if (hours == 0){
      average50 = minutes + ': ' + prependZero(seconds, 2) + '.' + prependZero(milliseconds, 3);
    }
    if (hours == 0 && minutes == 0){
      average50 = seconds + '.' + prependZero(milliseconds, 3);
    }
  }
}
