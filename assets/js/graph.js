// Chart
var chart = new CanvasJS.Chart('chartContainer', {
  animationEnabled: true,
  theme: 'light2',
  title:{
    text: 'Graphique des 12 dernières résolutions'
  },
  axisY :{
    title: "Temps",
    titleFontSize: 15,
    titleFontColor: "black",
    labelFontSize: 14
  },
  axisX :{
    title: "Résolutions",
    titleFontSize: 15,
    titleFontColor: "black",
    labelFontSize: 14,
    gridDashType: "dot",
		gridThickness: 1,
    prefix: 'N° '
  },
  toolTip: {
    shared: true,
    animationEnabled: true
  },
  legend: {
    fontSize: 15,
    itemmouseover: function(e) {
			e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 2;
			e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 2;
			e.chart.render();
		},
		itemmouseout: function(e) {
			e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
			e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 2;
			e.chart.render();
		},
  },
  data: [{
    type: 'spline',
    showInLegend: true,
    name: 'Single',
    dataPoints: []
  },{
    type: 'spline',
    showInLegend: true,
    name: 'Average of 5',
    dataPoints: []
  },{
    type: 'spline',
    showInLegend: true,
    name: 'Average of 12',
    dataPoints: []
  },{
    type: 'spline',
    showInLegend: true,
    name: 'Average of 50',
    dataPoints: []
  }]
});
// Add last ten solves to the chart
function addDataPoints(index, single, ao5, ao12, ao50){
  if ($.isNumeric(single)){
    chart.data[0].addTo("dataPoints", { x: index, y: single });
  }
  if ($.isNumeric(ao5)){
    chart.data[1].addTo("dataPoints", { x: index, y: ao5 });
  }
  if ($.isNumeric(ao12)){
    chart.data[2].addTo("dataPoints", { x: index, y: ao12 });
  }
  if ($.isNumeric(ao50)){
    chart.data[3].addTo("dataPoints", { x: index, y: ao50 });
  }
}
function renderChart() {
  // Render chart
  chart.render();
}
