$(function(){
  // Set var for timer
  var hours, minutes, seconds, milliseconds;
  hours = minutes = seconds = milliseconds = 0;
  var prev_hours, prev_minutes, prev_seconds, prev_milliseconds;
  prev_hours = prev_minutes = prev_seconds = prev_milliseconds = undefined;
  var timeUpdate;
  // Check if hours and/or minutes are null, not to display them
  if ($("#hours").html() == '00'){
    $("#hours, #separatorHours").hide();
  }
  if ($("#minutes").html() == '00'){
    $("#minutes, #separatorMinutes").hide();
  } else {
    $("#minutes, #separatorMinutes").show();
  }
  // Indicator that timer is ready
  var timerReady, timerValidity = false;
  var delay = 400; // Delay ( in milliseconds ) between the key press and the timer ready state
  $(document).keypress(function (e) {
    // Indicator that timer is ready
    if ($('#start_stop').text() == 'Start'){
      if (e.keyCode == 32) {
        // Check if the user is holding the spacebar
        if(! $("#timer").hasClass('holding')){
          // Timer not ready so red
          $("#timer").addClass('text-danger');
          // Don't let the timer start until the timeout is over
          timerReady = setTimeout(function(){
            $("#timer").removeClass('text-danger');
            // Timer ready so green
            $("#timer").addClass('text-success');
            // Set timer as ready
            timerValidity = true;
            // Add the holding class after the first detection of a press
            $("#timer").addClass('holding');
          }, delay);
        }
      }
    }
  });
  $(document).keyup(function(e){
    if (e.keyCode == 32) {
      // On timer launch, clear all the classes and the timeout for the color
      $("#timer").removeClass('text-danger');
      $("#timer").removeClass('text-success');
      $("#timer").removeClass('holding');
      clearTimeout(timerReady);
    }
    if ($("#start_stop").text() == "Stop"){
      $("#start_stop").button().click();
      return;
    }
    if (e.keyCode == 32) {
      $("#start_stop").button().click();
    }
  });
  // Start/Stop button
  $("#start_stop").button().click(function(){
    // Start button ( if the spacebar was pressed too quickly, the function doesn't launch
    if($(this).text() == "Start" && timerValidity == true){ // check button label
      $(this).html("<span class='ui-button-text'>Stop</span>");
      // Launch the timer
      updateTime(0,0,0,0);
      timerValidity = false;
    }
    // Stop button
    else if($(this).text() == "Stop"){
      $(this).html("<span class='ui-button-text'>Start</span>");
      // Stop the timer
      clearInterval(timeUpdate);
      // Add the value to the log
      addToLog(hours, minutes, seconds, milliseconds);
      // Generate a new scramble
      newScramble();
    }
  });
  // Launch main stopwatch function
  function updateTime(prev_hours, prev_minutes, prev_seconds, prev_milliseconds){
    var startTime = new Date(); // fetch current time
    timeUpdate = setInterval(function () {
      // Calculate the time elapsed in milliseconds
      var timeElapsed = new Date().getTime() - startTime.getTime();
      // Calculate hours
      hours = parseInt(timeElapsed / 1000 / 60 / 60) + prev_hours;
      // Calculate minutes
      minutes = parseInt(timeElapsed / 1000 / 60) + prev_minutes;
      if (minutes > 60) minutes %= 60;
      // Calculate seconds
      seconds = parseInt(timeElapsed / 1000) + prev_seconds;
      if (seconds > 60) seconds %= 60;
      // Calculate milliseconds
      milliseconds = timeElapsed + prev_milliseconds;
      if (milliseconds > 1000) milliseconds %= 1000;
      // Set the stopwatch
      setStopwatch(hours, minutes, seconds, milliseconds);
    }, 1); // Update time in stopwatch every 1ms
  }
  // Set the time in html page
  function setStopwatch(hours, minutes, seconds, milliseconds){
    $("#hours").html(prependZero(hours, 2));
    $("#minutes").html(prependZero(minutes, 2));
    $("#seconds").html(prependZero(seconds, 2));
    $("#milliseconds").html(prependZero(milliseconds, 3));
    //Check if hours and/or minutes are null, not to display them
    if ($("#hours").html() === '00'){
      $("#hours, #separatorHours").hide();
    } else {
      $("#hours, #separatorHours").show();
    }
    if ($("#minutes").html() == '00'){
      $("#minutes, #separatorMinutes").hide();
    } else {
      $("#minutes, #separatorMinutes").show();
    }
  }
  // Prepend zeros to the digits in stopwatch
  function prependZero(time, length) {
    time = new String(time); // stringify time
    return new Array(Math.max(length - time.length + 1, 0)).join("0") + time;
  }
  // Turn time format H:M:S.MM to HH:MM:SS.MMM
  function correctTime(time){
    if (time != '-'){
      // Turn the dot in ': ' to help split the time
      time = (time.toString()).replace(/\./g, ': ');
      // Split between hours, minutes, second and milliseconds
      time = time.split(': ');
      // Seconds and milli
      if (time.length == 2){
        time[1] = prependZero(time[1], 3);
        time = time[0] + '.' + time[1];
        // Minutes, seconds and milli
      } else if (time.length == 3){
        time[1] = prependZero(time[1], 2);
        time[2] = prependZero(time[2], 3);
        time = time[0] + ': ' + time[1] + '.' + time[2];
        // Hours, minutes, seconds and milli
      } else if (time.length == 4){
        time[1] = prependZero(time[1], 2);
        time[2] = prependZero(time[2], 2);
        time[3] = prependZero(time[3], 3);
        time = time[0] + ': ' + time[1] + ': ' + time[2] + '.' + time[3];
      } else {
        time = Number(time);
      }
    }
    // Return the time in milliseconds
    return time;
  }
  var currentIndex
  // Check for solves in the localStorage to display them on load
  if (localStorage.getItem('indexLog')){
    currentIndex = Number(JSON.parse(localStorage.getItem('indexLog')));
    // Delete " no solve " message
    $('#noSolve').remove();
    // Add solves in localStorage to history
    var index, single, ao5, ao12, ao50;
    for (var numberOfSolve = Number(currentIndex); numberOfSolve > 0; numberOfSolve--){
      // ( typeof number )
      index = Number(JSON.parse(localStorage.getItem(`indexHistory${numberOfSolve}`)));
      single = JSON.parse(localStorage.getItem(`singleHistory${numberOfSolve}`));
      ao5 = JSON.parse(localStorage.getItem(`averageOf5History${numberOfSolve}`));
      ao12 = JSON.parse(localStorage.getItem(`averageOf12History${numberOfSolve}`));
      // Check if averages are empty
      // ParseFloat to turn string to number and keep 3 numbers after the dot
      isNaN(ao5) ? ao5 = '-': ao5 = correctTime(parseFloat(ao5));
      isNaN(ao12) ? ao12 = '-': ao12 = correctTime(parseFloat(ao12));
      // Go to solves5 [];
      // Create new line to put the informations in solve history
      var tr, _tr = '</tr>', tdSide, td1, td2, _td = '</td>';
      tr = '<tr id="' + index + '">';
      tdSide = '<td class="py-1 px-2 border border-light border-left-0 border-right-0 border-top-0">';
      td1 = '<td class="py-1 px-2 border border-light border-top-0">';
      td2 = '<td class="py-1 px-2 border border-light border-left-0 border-top-0">';
      $('#solveList tbody').append(tr + '\n' + tdSide + '#' + index + _td + '\n' + td1 + correctTime(single) + _td + '\n' + td2 + ao5 + _td + '\n' + tdSide + ao12 + _td + _tr);
      // Do this at the last solve
      if (numberOfSolve == currentIndex){
        ao50 = JSON.parse(localStorage.getItem(`averageOf50History${numberOfSolve}`));
        isNaN(ao50) ? ao50 = '-': ao50 = correctTime(parseFloat(ao50));
        // Put solve in solve statistics
        $('#sideStatIndex').html(index);
        $('#sideStatSingle').html(correctTime(single));
        $('#sideStatAo5').html(ao5);
        $('#averageOf5 span').html(ao5);
        $('#sideStatAo12').html(ao12);
        $('#averageOf12 span').html(ao12);
        $('#sideStatAo50').html(ao50);
      }
    }
  }
  // Add solve to stats menu
  function addToLog(hours, minutes, seconds, milliseconds){
    // Get index of last solve, if none found, attribute 1 to the current index
    var solveIndex = Number($('#solveList tbody tr:first-child').attr('id'));
    if (isNaN(solveIndex)){
      solveIndex = 1;
    } else {
      solveIndex = solveIndex + 1;
    }
    // Check if hours are null not to display them
    var newTime = hours + ': ' + minutes + ': ' + seconds + '.' + milliseconds;
    if (hours == 0){
      newTime = minutes + ': ' + seconds + '.' + milliseconds;
    }
    // Check hours and minutes are null not to display them
    if (hours == 0 && minutes == 0){
      newTime = seconds + '.' + milliseconds;
    }
    // Delete "no solve" message
    $('#noSolve').hide();
    // Launch averages functions
    averageOf5(hours, minutes, seconds, milliseconds);
    averageOf12(hours, minutes, seconds, milliseconds);
    averageOf50(hours, minutes, seconds, milliseconds);
    // Put averages under timer
    $('#averageOf5 span').text(average5);
    $('#averageOf12 span').text(average12);
    // Create new line to put the informations in solve history
    var tr, _tr = '</tr>', tdSide, td1, td2, _td = '</td>';
    tr = '<tr id="' + solveIndex + '">';
    tdSide = '<td class="py-1 px-2 border border-light border-left-0 border-right-0 border-top-0">';
    td1 = '<td class="py-1 px-2 border border-light border-top-0">';
    td2 = '<td class="py-1 px-2 border border-light border-left-0 border-top-0">';
    $('#solveList tbody').prepend(tr + '\n' + tdSide + '#' + solveIndex + _td + '\n' + td1 + newTime + _td + td2 + average5 + _td + tdSide + average12 + _td + _tr);
    // Put solve in solve statistics
    $('#sideStatIndex').html(solveIndex);
    $('#sideStatSingle').html(newTime);
    $('#sideStatAo5').html(average5);
    $('#sideStatAo12').html(average12);
    $('#sideStatAo50').html(average50);
    // Call the function to add to the localStorage
    addToStorage(solveIndex, newTime, average5, average12, average50);
  }
});
