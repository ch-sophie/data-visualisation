// Graph table 1

// {/* <script> */}

//               const ctx = document.getElementById('myChart').getContext('2d');
//               const myChart = new Chart(ctx, {
//                 type: 'bar',
//                 data: {
//                   labels: ['Belgium', 'Bulgaria', 'Czech Republic', 'Denmark', 'Germany', 'Estonia', 'Ireland', 'Greece', 'Spain', 'France', 'Croatia', 'Italy', 'Cyprus', 'Latvia', 'Lithuania', 'Luxembourg', 'Hungary', 'Malta', 'The Netherlands', 'Austria', 'Poland', 'Protugal', 'Romania', 'Slovenia', 'Slovakia', 'Finland', 'Sweden', 'Iceland', 'Liechtenstein', 'Norway', 'Switzerland', 'Montenegro', 'Macedonia', 'Serbia', 'Turkey'],
//                   datasets: [{
//                     label: 'Crimes recorded by the police, 2002-',
//                     data: [1012.8, 146.9, 372.3, 491.5, 6507.4, 3800, 106.4, 441.1,],
//                     backgroundColor: [
//                       'rgba(255, 99, 132, 0.2)',
//                       'rgba(54, 162, 235, 0.2)',
//                       'rgba(255, 206, 86, 0.2)',
//                       'rgba(75, 192, 192, 0.2)',
//                       'rgba(153, 102, 255, 0.2)',
//                       'rgba(255, 159, 64, 0.2)'
//                     ],
//                     borderColor: [
//                       'rgba(255, 99, 132, 1)',
//                       'rgba(54, 162, 235, 1)',
//                       'rgba(255, 206, 86, 1)',
//                       'rgba(75, 192, 192, 1)',
//                       'rgba(153, 102, 255, 1)',
//                       'rgba(255, 159, 64, 1)'
//                     ],
//                     borderWidth: 1
//                   }]
//                 },
//                 options: {
//                   // indexAxis: 'y',
//                   scales: {
//                     y: {
//                       beginAtZero: true
//                     }
//                   }
//                 }
//                 });
//                 {/* </script> */}

var xValues = ['Belgium', 'Bulgaria', 'Czech Republic', 'Denmark', 'Germany', 'Estonia', 'Ireland', 'Greece', 'Spain', 'France', 'Croatia', 'Italy', 'Cyprus', 'Latvia', 'Lithuania', 'Luxembourg', 'Hungary', 'Malta', 'The Netherlands', 'Austria', 'Poland', 'Protugal', 'Romania', 'Slovenia', 'Slovakia', 'Finland', 'Sweden', 'Iceland', 'Liechtenstein', 'Norway', 'Switzerland', 'Montenegro', 'Macedonia', 'Serbia', 'Turkey'];
var yValues = [55, 49, 44, 24, 15, 78];
var barColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',

];
var borderColor = [
                          'rgba(255, 99, 132, 1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                        ];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      borderColor: borderColor,
      data: yValues
    }]
  },
  options: {
    plugins:{
    legend: {display: true,
    },
    title: {
      display: true,
      text: "Crimes recorded by police",
    }
  }
}
});

// get data 
const data_year = document.querySelectorAll('th');



// Graph table 2 ****************************************************

var xValues = ['Belgium', 'Bulgaria', 'Czech Republic', 'Denmark', 'Germany', 'Estonia', 'Ireland', 'Greece', 'Spain', 'France', 'Croatia', 'Italy', 'Cyprus', 'Latvia', 'Lithuania', 'Luxembourg', 'Hungary', 'Malta', 'The Netherlands', 'Austria', 'Poland', 'Protugal', 'Romania', 'Slovenia', 'Slovakia', 'Finland', 'Sweden', 'Iceland', 'Liechtenstein', 'Norway', 'Switzerland', 'Montenegro', 'Macedonia', 'Serbia', 'Turkey'];
var yValues = [55, 49, 44, 24, 15, 78];
var barColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',

];

new Chart("myChart2", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    plugins: {
    legend: {display: false},
    title: {
      display: true,
      text: "Prison population, average per year, 2007-2009 and 2010-2012",
    }
  }
}
});



// Chat data ajax ***************************************************
// <script type="text/javascript">
    window.onload = function() {
      var dataPoints = [];
      var chart;
      $.getJSON("https://canvasjs.com/services/data/datapoints.php", function(data) {  
        $.each(data, function(key, value){
          dataPoints.push({x: value[0], y: parseInt(value[1])});
        });
        chart = new CanvasJS.Chart("chartContainer",{
          title:{
            text:"Live Chart with dataPoints from External JSON"
          },
          data: [{
            type: "line",
            dataPoints : dataPoints,
          }]
        });
        chart.render();
        updateChart();
      });
      function updateChart() {
      $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
        $.each(data, function(key, value) {
          dataPoints.push({
          x: parseInt(value[0]),
          y: parseInt(value[1])
          });
        });
        chart.render();
        setTimeout(function(){updateChart()}, 1000);
      });
      }
    }

//   <!-- end data ajax -->


            
              