// Calculation of the average of 5 solves
var solves5 = [], average5;
function averageOf5(hours, minutes, seconds, milliseconds) {
  var average5Milli = hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;
  solves5.splice(0, 0, average5Milli);
  // Check the length of the array solves5
  if (solves5.length < 5){
    average5 = '-';
  } else {
    for (var i = 0; i < 4; i++){
      average5Milli += solves5[i];
    }
    average5Milli = average5Milli / 5;
    solves5.splice(solves5.length - 1, 1);
    hours = Math.floor(average5Milli / 3600000);
    minutes = Math.floor( (average5Milli - (hours * 3600000)) / 60000 );
    seconds = Math.floor( (average5Milli - (hours * 3600000) - (minutes * 60000)) / 1000 );
    milliseconds = Math.floor(average5Milli - (hours * 3600000) - (minutes * 600000) - (seconds * 1000));
    average5 = hours + ': ' + minutes + ': ' + seconds + '.' + milliseconds;
    if (hours == 0){
      average5 = minutes + ': ' + seconds + '.' + milliseconds;
    }
    if (hours == 0 && minutes == 0){
      average5 = seconds + '.' + milliseconds;
    }
  }
}
// Calculation of the average of 12 solves
var solves12 = [], average12;
function averageOf12(hours, minutes, seconds, milliseconds) {
  var average12Milli = hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;  solves12.splice(0, 0, average12Milli);
  // Check the length of the array solves12
  if (solves12.length < 12){
    average12 = '-';
  } else {
    for (var i = 0; i < 11; i++){
      average12Milli += solves12[i];
    }
    average12Milli = average12Milli / 12;
    solves12.splice(solves12.length - 1, 1);
    hours = Math.floor(average12Milli / 3600000);
    minutes = Math.floor( (average12Milli - (hours * 3600000)) / 60000 );
    seconds = Math.floor( (average12Milli - (hours * 3600000) - (minutes * 60000)) / 1000 );
    milliseconds = Math.floor(average12Milli - (hours * 3600000) - (minutes * 600000) - (seconds * 1000));
    average12 = hours + ': ' + minutes + ': ' + seconds + '.' + milliseconds;
    if (hours == 0){
      average12 = minutes + ': ' + seconds + '.' + milliseconds;
    }
    if (hours == 0 && minutes == 0){
      average12 = seconds + '.' + milliseconds;
    }
  }
}
// Calculation of the average of 50 solves
var solves50 = [], average50;
function averageOf50(hours, minutes, seconds, milliseconds) {
  var average50Milli = hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;  solves50.splice(0, 0, average50Milli);
  // Check the length of the array solves50
  if (solves50.length < 50){
    average50 = '-';
  } else {
    for (var i = 0; i < 49; i++){
      average50Milli += solves50[i];
    }
    average50Milli = average50Milli / 50;
    solves50.splice(solves50.length - 1, 1);
    hours = Math.floor(average50Milli / 3600000);
    minutes = Math.floor( (average50Milli - (hours * 3600000)) / 60000 );
    seconds = Math.floor( (average50Milli - (hours * 3600000) - (minutes * 60000)) / 1000 );
    milliseconds = Math.floor(average50Milli - (hours * 3600000) - (minutes * 600000) - (seconds * 1000));
    average50 = hours + ': ' + minutes + ': ' + seconds + '.' + milliseconds;
    if (hours == 0){
      average50 = minutes + ': ' + seconds + '.' + milliseconds;
    }
    if (hours == 0 && minutes == 0){
      average50 = seconds + '.' + milliseconds;
    }
  }
}
