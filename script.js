// Create element canvas *****
// var createTable1 = document.createElement("canvas");
// var textNode = document.createTextNode("canvas");
// createTable1.appendChild(textNode);
// var newTable = document.getElementById("table1");
// newTable.insertBefore(createTable1, newTable.children[0]);

// var createDiv = document.createElement("div");
// var createCanvas = document.createElement("canvas");
// createCanvas.setAttribute("id", "myChart");
// var getTable = document.getElementById("table1");
// createDiv.appendChild(createCanvas);
// getTable.insertBefore(createDiv, getTable.children[0]);
// *****

// Colors bars ***** 
// var barColors = [
//   'rgba(255, 99, 132, 0.2)',
//   'rgba(54, 162, 235, 0.2)',
//   'rgba(255, 206, 86, 0.2)',
//   'rgba(75, 192, 192, 0.2)',
//   'rgba(153, 102, 255, 0.2)',
//   'rgba(255, 159, 64, 0.2)',
// ];
// var borderColor = [
//   'rgba(255, 99, 132, 1)',
//   'rgba(54, 162, 235, 1)',
//   'rgba(255, 206, 86, 1)',
//   'rgba(75, 192, 192, 1)',
//   'rgba(153, 102, 255, 1)',
//   'rgba(255, 159, 64, 1)'
// ];
var barColor1 = [
  'rgba(255, 99, 132, 0.2)',
]
var barColor2 = [
  'rgba(75, 192, 192, 0.2)',
]
var borderColor1 = [
  'rgba(255, 99, 132, 1)',
]
var borderColor2 = [
  'rgba(75, 192, 192, 1)',
]
// *****


// var getTable = document.getElementById("table1");
// Get data table 1
// var rowLength = getTable.rows.length;
// for(i = 1; i < rowLength; i++){
//   var getCells = getTable.rows.item(i).cells;
//   var cellLength = getCells.length; 
//   for(var j = 0; j < cellLength; j++){
//     var cellValue = getCells.item(j).innerHTML;
//     console.log(cellValue[1]);
//   }
// }


// var yearData = document.querySelectorAll("#table1 tr");
// for(let i = 0; i < yearData.length; i++){
//   yearData[1].style.backgroundColor = 'green';
// }

// var tableData = document.querySelectorAll("#table1 td");
// for(let i=0; i<tableData.length; i++){
//   console.log(tableData[i]);
// }
// tableData[0].style.backgroundColor = 'green';

// array table1 in console
const selectTable1 = document.querySelector('#table1')
const arr1 = [...selectTable1.rows].map(r => [...r.querySelectorAll('td')].map(td => td.textContent));
console.log(arr1);


// test
// function BuildChart(labels, values, chartTitle) {
//   var ctx = document.getElementById("myChart").getContext('2d');
//   var myChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//           labels: labels, // Our labels
//           datasets: [{
//               label: chartTitle, // Name the series
//               data: values, // Our values
//               backgroundColor: [ // Specify custom colors
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ],
//               borderColor: [ // Add custom color borders
//                   'rgba(255,99,132,1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)'
//               ],
//               borderWidth: 1 // Specify bar border width
//           }]
//       },
//       options: {
//           responsive: true, // Instruct chart js to respond nicely.
//           maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
//       }
//   });
//   return myChart;
// }
// var table = document.getElementById('table1');
// var json = []; // First row needs to be headers 
// var headers =[];
// for (var i = 1; i < table.rows[0].cells.length; i++) {
//   headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
// }
// // Go through cells 
// for (var i = 1; i < table.rows.length; i++) {
//   var tableRow = table.rows[i];
//   var rowData = {};
//   for (var j = 1; j < tableRow.cells.length; j++) {
//     rowData[headers[j]] = tableRow.cells[j].innerHTML;
//   }

//   json.push(rowData);
// }

// console.log(json);

// // Map json values back to label array
// var labels = json.map(function (e) {
//   return e.country;
// });
// // console.log(labels);
// // Map json values back to values array
// var values = json.map(function (e) {
//   return e.undefined;
// });
// // console.log(values);
// var chart = BuildChart(labels, values, "Items");
// test


// basic chart 
// const ctx = document.getElementById('myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: barColor1,
//             borderColor: borderColor1,
//             borderWidth: 1,
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


// create Chart js




//  Country Values table1
// var xValues = ['Belgium', 'Bulgaria', 'Czech Republic', 'Denmark', 'Germany', 'Estonia', 'Ireland', 'Greece', 'Spain', 'France', 'Croatia', 'Italy', 'Cyprus', 'Latvia', 'Lithuania', 'Luxembourg', 'Hungary', 'Malta', 'The Netherlands', 'Austria', 'Poland', 'Protugal', 'Romania', 'Slovenia', 'Slovakia', 'Finland', 'Sweden', 'Iceland', 'Liechtenstein', 'Norway', 'Switzerland', 'Montenegro', 'Macedonia', 'Serbia', 'Turkey'];



// Graph table 2 ****************************************************
// var getTable2 = document.getElementById("table2");

// const tbl = document.querySelector("#table2");
// for(let row of tbl.rows) {
//   console.log(row.cells[1].innerHTML);
// }
// let firstRow = []


// const table2 = document.querySelector("#table2");
// for(let row of table2.rows) {
//   console.log(row.cells[2].innerHTML);
// }

// const tablerow3 = document.querySelector("#table2");
// for(let row of tablerow3.rows) {
//   console.log(row.cells[3].innerHTML);
// }

// test
// const tbl = document.getElementById("table2");
// for(let i in tbl.rows){
//   let row = tbl.rows[i]; {
//     for(let j in row.cells){
//       let col = row.cells[j];
//       console.log(row.cells[1].innerHTML);

//     }
//   }
// }

// array ok 
const selectTable2 = document.querySelector('#table2')
const arr = [...selectTable2.rows].map(r => [...r.querySelectorAll('td')].map(td => td.textContent));
console.log(arr);

let contentTable2 = []



// var table2 = document.querySelectorAll("#table2");
// var countryData = document.querySelectorAll("#table2 tbody tr td:nth-of-type(1)")
// console.log(countryData);
// // countryData.map(country => country.innerText);
// [...countryData].map(country => country.innerText);



// basic chart
{/* <canvas id="myChart" width="400" height="400"></canvas> */}

// const ctx = document.getElementById('myChart2');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });


// test chart 2 
// var getChart2 = document.getElementById("myChart2");

// var firstValues = [
//   310, 243, 514, 333, 326, 687, 71, 638
// ]

// var secondValues

// var countriesValues

// var firstData = {
//   label: '2007',
//   data: firstValues,
//   backgroundColor: 'rgba(0, 99, 132, 0.6)',
//   borderColor: 'rgba(0, 99, 132, 1)',
//   yAxisID: "y-axis-density"
// };
 
// var secondData = {
//   label: '2010',
//   data: [312, 89, 98, 37, 231, 90, 87, 110],
//   backgroundColor: 'rgba(99, 132, 0, 0.6)',
//   borderColor: 'rgba(99, 132, 0, 1)',
//   yAxisID: "y-axis-gravity"
// };
 
// var planetData = {
//   labels: ["Latvia", "Lithuania", "Estonia", "Czech Republic", "Poland", "Slovakia", "Hungary", "England and Wales(UK)"],
//   datasets: [firstData, secondData]
// };
 
// var chartOptions = {
//   scales: {
//     xAxes: [{
//       barPercentage: 1,
//       categoryPercentage: 0.6
//     }],
//     yAxes: [{
//       id: "y-axis-density"
//     }, {
//       id: "y-axis-gravity"
//     }]
//   }
// };
 
// var barChart = new Chart(getChart2, {
//   type: 'bar',
//   data: planetData,
//   options: chartOptions
// });
// ***** 


// Chart data ajax ***************************************************
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


            
              