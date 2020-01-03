$(function(){
  // Set var for timer
  var hours = minutes = seconds = milliseconds = 0;
  var prev_hours = prev_minutes = prev_seconds = prev_milliseconds = undefined;
  var timeUpdate;
  // Check if hours and/or minutes are null, not to display them
  if ($("#hours").html() == '00'){
    $("#hours, #separatorHours").hide();
  }
  if ($("#minutes").html() == '00'){
    $("#minutes, #separatorMinutes").hide();
  }
  // Indicator that timer is ready
  $(document).keypress(function (e) {
    // Indicator that timer is ready
    if ($('#start_stop').text() == 'Start'){
      if (e.keyCode == 32) {
        $("#timer").addClass('text-success');
      }
    }
  });
  $(document).keyup(function(e){
    if (e.keyCode == 32) {
      $("#timer").removeClass('text-success');
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
    // Start button
    if($(this).text() == "Start"){ // check button label
      $(this).html("<span class='ui-button-text'>Stop</span>");
      updateTime(0,0,0,0);
    }
    // Stop button
    else if($(this).text() == "Stop"){
      $(this).html("<span class='ui-button-text'>Start</span>");
      clearInterval(timeUpdate);
      addToLog(hours, minutes, seconds, milliseconds);
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
      single = Number(JSON.parse(localStorage.getItem(`singleHistory${numberOfSolve}`)));
      ao5 = Number(JSON.parse(localStorage.getItem(`averageOf5History${numberOfSolve}`)));
      ao12 = Number(JSON.parse(localStorage.getItem(`averageOf12History${numberOfSolve}`)));
      isNaN(ao5) ? ao5 = '-': ao5 = parseFloat(ao5).toFixed(3);
      // Check if averages are empty
      // ParseFloat to turn string to number and keep 3 numbers after the dot
      isNaN(ao12) ? ao12 = '-': ao12 = parseFloat(ao12).toFixed(3);
      // Create new line to put the informations in solve history
      var tr, _tr = '</tr>', tdSide, td1, td2, _td = '</td>';
      tr = '<tr id="' + index + '">';
      tdSide = '<td class="py-1 px-2 border border-light border-left-0 border-right-0 border-top-0">';
      td1 = '<td class="py-1 px-2 border border-light border-top-0">';
      td2 = '<td class="py-1 px-2 border border-light border-left-0 border-top-0">';
      $('#solveList tbody').append(tr + '\n' + tdSide + '#' + index + _td + '\n' + td1 + parseFloat(single).toFixed(3) + _td + '\n' + td2 + ao5 + _td + '\n' + tdSide + ao12 + _td + _tr);
      // Do this at the last solve
      if (numberOfSolve == currentIndex){
        ao50 = Number(JSON.parse(localStorage.getItem(`averageOf50History${numberOfSolve}`)));
        isNaN(ao50) ? ao50 = '-': ao50 = parseFloat(ao50).toFixed(3);
        // Put solve in solve statistics
        $('#sideStatIndex').html(index);
        $('#sideStatSingle').html(single);
        $('#sideStatAo5').html(ao5);
        $('#averageOf5 span').html(ao5);
        $('#sideStatAo12').html(ao12);
        $('#averageOf12 span').html(ao12);
        $('#sideStatAo50').html(ao50);
      }
    }
  }
  // Set the time in html page
  function setStopwatch(hours, minutes, seconds, milliseconds){
    $("#hours").html(prependZero(hours, 2));
    $("#minutes").html(prependZero(minutes, 2));
    $("#seconds").html(prependZero(seconds, 2));
    $("#milliseconds").html(prependZero(milliseconds, 3));
    //Check if hours and/or minutes are null, not to display them
    if ($("#hours").html() == '00'){
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

    // ADD CHECK OF LOCAL HISTORY HERE
    // Check for solveIndex, newTime, average5, average12, average50

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
