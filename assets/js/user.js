$(function(){
  var lastIndex, lastSingle, lastAo5, lastAo12, lastAo50;
  lastIndex = lastSingle = lastAo5 = lastAo12 = lastAo50 = 0;
  // Add avatar if it is set in the localStorage
  if (typeof(Storage) != "undefined") {
    if (localStorage.getItem('userAvatarUrl')){
      // Add avatar as the image
      $('#topAvatar').attr('src', JSON.parse(localStorage.getItem('userAvatarUrl')));
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
  // Check for solves in the local storage on load
  if (localStorage.getItem('indexLog')){
    // Last solve
    // Get values from the local storage ( typeof = strings )
    lastIndex = JSON.parse(localStorage.getItem('indexLog'));
    lastSingle = JSON.parse(localStorage.getItem('singleLog'));
    lastAo5 = JSON.parse(localStorage.getItem('averageOf5Log'));
    lastAo12 = JSON.parse(localStorage.getItem('averageOf12Log'));
    lastAo50 = JSON.parse(localStorage.getItem('averageOf50Log'));
    // Check if averages are empty
    isNaN(lastAo5) ? lastAo5 = '-': lastAo5 = correctTime(parseFloat(lastAo5));
    isNaN(lastAo12) ? lastAo12 = '-': lastAo12 = correctTime(parseFloat(lastAo12));
    isNaN(lastAo50) ? lastAo50 = '-': lastAo50 = correctTime(parseFloat(lastAo50));
    // Put last solves in stats
    $('#lastSingle').text(correctTime(lastSingle));
    $('#lastAo5').text(lastAo5);
    $('#lastAo12').text(lastAo12);
    $('#lastAo50').text(lastAo50);
    // Best solves
    var testBest, bestSingle, bestAo5, bestAo12, bestAo50;
    testBest = bestSingle = bestAo5 = bestAo12 = bestAo50 = 999999999999;
    for (var numberOfSolve = Number(lastIndex); numberOfSolve > 0; numberOfSolve--){
      testBest = JSON.parse(localStorage.getItem(`singleHistory${numberOfSolve}`));
      testBest < bestSingle ? bestSingle = testBest : bestSingle;
      testBest = JSON.parse(localStorage.getItem(`averageOf5History${numberOfSolve}`));
      testBest < bestAo5 ? bestAo5 = testBest : bestAo5;
      testBest = JSON.parse(localStorage.getItem(`averageOf12History${numberOfSolve}`));
      testBest < bestAo12 ? bestAo12 = testBest : bestAo12;
      testBest = JSON.parse(localStorage.getItem(`averageOf50History${numberOfSolve}`));
      testBest < bestAo50 ? bestAo50 = testBest : bestAo50;
    }
    // Check if there was not enough solve to calculate worst time
    // Not enough solve mean '-' in localStorage which return 0 in variable
    (bestAo5 == 0 || bestAo5 == 999999999999) ? bestAo5 = '-' : bestAo5 = correctTime(bestAo5);
    (bestAo12 == 0 || bestAo12 == 999999999999) ? bestAo12 = '-' : bestAo12 = correctTime(bestAo12);
    (bestAo50 == 0 || bestAo50 == 999999999999) ? bestAo50 = '-' : bestAo50 = correctTime(bestAo50);
    // Put worst solves in stats
    $('#bestSingle').text(correctTime(bestSingle));
    $('#bestAo5').text(bestAo5);
    $('#bestAo12').text(bestAo12);
    $('#bestAo50').text(bestAo50);
    // Worst solves
    var testWorst, worstSingle, worstAo5, worstAo12, worstAo50;
    testWorst = worstSingle = worstAo5 = worstAo12 = worstAo50 = 0;
    for (numberOfSolve = Number(lastIndex); numberOfSolve > 0; numberOfSolve--){
      testWorst = JSON.parse(localStorage.getItem(`singleHistory${numberOfSolve}`));
      testWorst > worstSingle ? worstSingle = testWorst : worstSingle;
      testWorst = JSON.parse(localStorage.getItem(`averageOf5History${numberOfSolve}`));
      testWorst > worstAo5 ? worstAo5 = testWorst : worstAo5;
      testWorst = JSON.parse(localStorage.getItem(`averageOf12History${numberOfSolve}`));
      testWorst > worstAo12 ? worstAo12 = testWorst : worstAo12;
      testWorst = JSON.parse(localStorage.getItem(`averageOf50History${numberOfSolve}`));
      testWorst > worstAo50 ? worstAo50 = testWorst : worstAo50;
    }
    worstAo5 == 0 ? worstAo5 = '-' : worstAo5 = correctTime(worstAo5);
    worstAo12 == 0 ? worstAo12 = '-' : worstAo12 = correctTime(worstAo12);
    worstAo50 == 0 ? worstAo50 = '-' : worstAo50 = correctTime(worstAo50);
    // Put worst solves in stats
    $('#worstSingle').text(correctTime(worstSingle));
    $('#worstAo5').text(worstAo5);
    $('#worstAo12').text(worstAo12);
    $('#worstAo50').text(worstAo50);
    // Delete " no solve " message
    $('#noSolve').hide();
    // Render chart to add DataPoints (necessary !)
    renderChart();
    // Add solves in localStorage to history
    for (numberOfSolve = Number(lastIndex); numberOfSolve > 0; numberOfSolve--){
      var index = Number(JSON.parse(localStorage.getItem(`indexHistory${numberOfSolve}`)));
      var single = JSON.parse(localStorage.getItem(`singleHistory${numberOfSolve}`));
      var ao5 = JSON.parse(localStorage.getItem(`averageOf5History${numberOfSolve}`));
      var ao12 = JSON.parse(localStorage.getItem(`averageOf12History${numberOfSolve}`));
      var ao50 = JSON.parse(localStorage.getItem(`averageOf50History${numberOfSolve}`));
      // Check if averages are empty ( typeof string )
      isNaN(ao5) ? ao5 = '-': ao5 = correctTime(parseFloat(ao5));
      // ParseFloat to turn string to number and keep 3 numbers after the dot
      isNaN(ao12) ? ao12 = '-': ao12 = correctTime(parseFloat(ao12));
      isNaN(ao50) ? ao50 = '-': ao50 = correctTime(parseFloat(ao50));
      var tr = '<tr id="' + index + '">', _tr = '</tr>', td  = '<td class="py-2">', _td = '</td>';
      $('#history tbody').append(tr + '\n' + td + '#' + index + _td + '\n' + td + correctTime(parseFloat(single)) + _td + '\n' + td + ao5 + _td + '\n' + td + ao12 + _td + '\n' + td + ao50 + _td + _tr);
      // Add solves to datapoints for the chart
      if (numberOfSolve > (Number(lastIndex) - 13)){
        addDataPoints(index, correctTime(parseFloat(single)), correctTime(parseFloat(ao5)), correctTime(parseFloat(ao12)), correctTime(parseFloat(ao50)));
      }
    }
  }
  // Render chart on page load
  renderChart();
});
