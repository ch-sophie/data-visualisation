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
var barColor3 = [
  'rgba(255, 159, 64, 0.2)',
]
var borderColor3 = [
  'rgba(255, 159, 64, 1)'
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
//   let yearsTable1 = yearData[1].innerText;
//   console.log(yearsTable1);
// }

// var tableData = document.querySelectorAll("#table1 td");
// for(let i=0; i<tableData.length; i++){
//   console.log(tableData[i]);
// }
// tableData[0].style.backgroundColor = 'green';

// array table1 in console
// const selectTable1 = document.querySelector('#table1');
// const arr1 = [...selectTable1.rows].map(r => [...r.querySelectorAll('td')].map(td => td.textContent));
// console.log(arr1);

// data table 1
let table1 = document.querySelector('#table1');
let countryTable1 = [];
let date1Table1 = [];
let date2Table1 = [];
let date3Table1 = [];
let date4Table1 = [];
let date5Table1 = [];
let date6Table1 = [];
let date7Table1 = [];
let date8Table1 = [];
let date9Table1 = [];
let date10Table1 = [];
let date11Table1 = [];
// let dates = [];

let dates = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012]


for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let countries1 = row1.cells[1].innerText;
  // console.log(countries1);
  countryTable1.push(countries1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date1in1 = row1.cells[2].innerText;
  console.log(date1in1);
  date1Table1.push(date1in1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date2in1 = row1.cells[3].innerText;
  // console.log(date2in1);
  date2Table1.push(date2in1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date3in1 = row1.cells[4].innerText;
  // console.log(date3in1);
  date3Table1.push(date3in1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date4in1 = row1.cells[5].innerText;
  // console.log(date4in1);
  date4Table1.push(date4in1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date5in1 = row1.cells[6].innerText;
  // console.log(date5in1);
  date5Table1.push(date5in1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date6in1 = row1.cells[7].innerText;
  // console.log(date6in1);
  date6Table1.push(date6in1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date7in1 = row1.cells[8].innerText;
  // console.log(date7in1);
  date7Table1.push(date7in1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date8in1 = row1.cells[9].innerText;
  // console.log(date8in1);
  date8Table1.push(date8in1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date9in1 = row1.cells[10].innerText;
  // console.log(date9in1);
  date9Table1.push(date9in1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date10in1 = row1.cells[11].innerText;
  // console.log(date10in1);
  date10Table1.push(date10in1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date11in1 = row1.cells[12].innerText;
  // console.log(date11in1);
  date11Table1.push(date11in1);
}

// *** Create chart 1
// var getChart1 = document.getElementById("myChart");


// Chart 1
// var getChart1 = document.getElementById("myChart");

// var getChart1 = document.getElementById("myChart");

// var dataFirst = {
//     label: "2002",
//     data: date2Table2,
//     lineTension: 0,
//     fill: false,
//     backgroundColor: barColor2,
//     borderColor: borderColor2,
//   };

// var dataSecond = {
//     label: "2003",
//     data: date1Table2,
//     lineTension: 0,
//     fill: false,
//     backgroundColor: barColor3,
//     borderColor: borderColor3
//   };

// var countriesDataTable1 = {
//   labels: countryTable1,
//   datasets: [dataFirst, dataSecond]
//   };

// var chartOptions1 = {
//   legend: {
//     display: true,
//     position: 'top',
//     labels: {
//       boxWidth: 80,
//       fontColor: 'black'
//       }
//     }
//   };

// var lineChart = new Chart(getChart1, {
//   type: 'line',
//   data: countriesDataTable1,
//   options: chartOptions1
// });
// ***** 

var getChart1 = document.getElementById("myChart");

var dataFirst = {
  label: '2002',
  data: date2Table1,
  backgroundColor: barColor1,
  borderColor: borderColor1,
  borderWidth: 1,
  yAxisID: "y-axis-density"
};
 
var dataSecond = {
  label: '2003',
  data: date3Table1,
  backgroundColor: barColor2,
  borderColor: borderColor2,
  borderWidth: 1,
  yAxisID: "y-axis-gravity"
};
 
var dataCountry = {
  labels: countryTable1,
  datasets: [dataFirst, dataSecond]
};
 
var chartOptions = {
  scales: {
    xAxes: [{
      barPercentage: 1,
      categoryPercentage: 0.6
    }],
    yAxes: [{
      id: "y-axis-density"
    }, {
      id: "y-axis-gravity"
    }]
  }
};
 
var barChart = new Chart(getChart1, {
  type: 'bar',
  data: dataCountry,
  options: chartOptions
});

// ***** 


// Graph table 2 ****************************************************
// var getTable2 = document.getElementById("table2");

// const tbl = document.querySelector("#table2");
// for(let row of tbl.rows) {
//   console.log(row.cells[1].innerHTML);
// }
// let firstRow = [];
// let valuesFirstRow = [];


// const table2 = document.querySelector("#table2");
// for(let row of table2.rows) {
//   console.log(row.cells[2].innerHTML);
// }

// const tablerow3 = document.querySelector("#table2");
// for(let row of tablerow3.rows) {
//   console.log(row.cells[3].innerHTML);
// }


let table2 = document.getElementById('table2');
let countryTable2 = [];
let date1Table2 = [];
let date2Table2 = [];

for(let i = 1; i < table2.rows.length; i++){
  let row = table2.rows[i];
  let colCountry = row.cells[1].innerText;
  // console.log(colCountry);
  countryTable2.push(colCountry);
}
for(let i = 1; i < table2.rows.length; i++){
  let row = table2.rows[i];
  let date1 = row.cells[2].innerText;
  // console.log(date1);
  date1Table2.push(date1);
}
for(let i = 1; i < table2.rows.length; i++){
  let row = table2.rows[i];
  let date2 = row.cells[3].innerText;
  // console.log(date2);
  date2Table2.push(date2);
}


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
// const selectTable2 = document.querySelector('#table2')
// const arr = [...selectTable2.rows].map(r => [...r.querySelectorAll('td')].map(td => td.textContent));
// console.log(arr);


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


// Chart 2 
var getChart2 = document.getElementById("myChart2");

var firstData = {
  label: '2007-09',
  data: date1Table2,
  backgroundColor: barColor1,
  borderColor: borderColor1,
  borderWidth: 1,
  yAxisID: "y-axis-density"
};
 
var secondData = {
  label: '2010-12',
  data: date2Table2,
  backgroundColor: barColor2,
  borderColor: borderColor2,
  borderWidth: 1,
  yAxisID: "y-axis-gravity"
};
 
var countriesData = {
  labels: countryTable2,
  datasets: [firstData, secondData]
};
 
var chartOptions = {
  scales: {
    xAxes: [{
      barPercentage: 1,
      categoryPercentage: 0.6
    }],
    yAxes: [{
      id: "y-axis-density"
    }, {
      id: "y-axis-gravity"
    }]
  }
};
 
var barChart = new Chart(getChart2, {
  type: 'bar',
  data: countriesData,
  options: chartOptions
});
// ***** 

// Chart data ajax ***************************************************
    // window.onload = function() {
    //   var dataPoints = [];
    //   var chart;
    //   $.getJSON("https://canvasjs.com/services/data/datapoints.php", function(data) {  
    //     $.each(data, function(key, value){
    //       dataPoints.push({x: value[0], y: parseInt(value[1])});
    //     });
    //     chart = new CanvasJS.Chart("chartContainer",{
    //       title:{
    //         text:"Live Chart with dataPoints from External JSON"
    //       },
    //       data: [{
    //         type: "line",
    //         dataPoints : dataPoints,
    //       }]
    //     });
    //     chart.render();
    //     updateChart();
    //   });
    //   function updateChart() {
    //   $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
    //     $.each(data, function(key, value) {
    //       dataPoints.push({
    //       x: parseInt(value[0]),
    //       y: parseInt(value[1])
    //       });
    //     });
    //     chart.render();
    //     setTimeout(function(){updateChart()}, 1000);
    //   });
    //   }
    // }

//  end data ajax
            
              