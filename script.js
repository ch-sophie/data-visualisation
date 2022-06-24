// Create element canvas *****
var getDiv = document.getElementById("Crimes_et_d.C3.A9lits_enregistr.C3.A9s_par_les_services_de_police");
var createDiv = document.createElement("div");
var createCanvas = document.createElement("canvas");
createCanvas.setAttribute("id", "myChart");
createDiv.appendChild(createCanvas);
getDiv.appendChild(createDiv);
createCanvas.style.width = '1000px';
createCanvas.style.height = '1000px';

// create element canvas in table 2
var getTable2 = document.querySelector('#Homicides');
var createDiv2 = document.createElement('div');
var createCanvas2 = document.createElement('canvas');
createCanvas2.setAttribute('id', 'myChart2');
createDiv2.appendChild(createCanvas2);
getTable2.appendChild(createDiv2);
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
var barColor3 = [
  'rgba(255, 159, 64, 0.2)',
]
var barColor4 = [
  'rgba(54, 162, 235, 0.2)',
]
var barColor5 = [
  'rgba(255, 206, 86, 0.2)',
]
var barColor6 = [
  'rgba(153, 102, 255, 0.2)',
]

var borderColor1 = [
  'rgba(255, 99, 132, 1)',
]
var borderColor2 = [
  'rgba(75, 192, 192, 1)',
]
var borderColor3 = [
  'rgba(255, 159, 64, 1)'
]
var borderColor4 = [
  'rgba(54, 162, 235, 1)',
]
var borderColor5 = [
  'rgba(255, 206, 86, 1)',
]
var borderColor6 = [
  'rgba(153, 102, 255, 1)',
]
// *****

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
let dates = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];

function replaceNumDot(decimal) {
    return parseFloat((decimal + "").replace(",", "."));
}

for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let countries1 = row1.cells[1].innerText;
//   console.log(countries1);
  countryTable1.push(countries1);
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date1in1 = row1.cells[2].innerText;
//   console.log(replaceNumDot(date1in1));
  date1Table1.push(replaceNumDot(date1in1));
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date2in1 = row1.cells[3].innerText;
//   console.log(replaceNumDot(date2in1));
  date2Table1.push(replaceNumDot(date2in1));
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date3in1 = row1.cells[4].innerText;
//   console.log(replaceNumDot(date3in1));
  date3Table1.push(replaceNumDot(date3in1));
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date4in1 = row1.cells[5].innerText;
//   console.log(replaceNumDot(date4in1));
  date4Table1.push(replaceNumDot(date4in1));
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date5in1 = row1.cells[6].innerText;
//   console.log(replaceNumDot(date5in1));
  date5Table1.push(replaceNumDot(date5in1));
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date6in1 = row1.cells[7].innerText;
//   console.log(replaceNumDot(date6in1));
  date6Table1.push(replaceNumDot(date6in1));
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date7in1 = row1.cells[8].innerText;
//   console.log(replaceNumDot(date7in1));
  date7Table1.push(replaceNumDot(date7in1));
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date8in1 = row1.cells[9].innerText;
//   console.log(replaceNumDot(date8in1));
  date8Table1.push(replaceNumDot(date8in1));
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date9in1 = row1.cells[10].innerText;
//   console.log(replaceNumDot(date9in1));
  date9Table1.push(replaceNumDot(date9in1));
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date10in1 = row1.cells[11].innerText;
//   console.log(replaceNumDot(date10in1));
  date10Table1.push(replaceNumDot(date10in1));
}
for(let i = 2; i < table1.rows.length; i++){
  let row1 = table1.rows[i];
  let date11in1 = row1.cells[12].innerText;
//   console.log(replaceNumDot(date11in1));
  date11Table1.push(replaceNumDot(date11in1));
}

var getChart1 = document.getElementById("myChart");
var xValues = countryTable1;

new Chart(getChart1, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: date1Table1,
      backgroundColor: barColor1,
      borderColor: borderColor1,
      fill: false,
      label: "2002",
    }, 
    { 
      data: date2Table1,
      backgroundColor: barColor2,
      borderColor: borderColor2,
      fill: false,
      label: "2003",
    },
    {
      data: date3Table1,
      backgroundColor: barColor3,
      borderColor: borderColor3,
      fill: false,
      label: "2004",
    },
    { data: date4Table1, 
      backgroundColor: barColor4,
      borderColor: borderColor4,
      fill: false,
      label: "2005",
    },
    {
      data: date5Table1,
      backgroundColor: barColor5,
      borderColor: borderColor5,
      fill: false,
      label: "2006",
    },
    {
      data: date6Table1,
      backgroundColor: barColor6, 
      borderColor: borderColor6,
      fill: false,
      label: "2007",
    },
    {
      data: date7Table1,
      backgroundColor: barColor1, 
      borderColor: borderColor1,
      fill: false,
      label: "2008",
    },
    {
      data: date8Table1,
      backgroundColor: barColor2, 
      borderColor: borderColor2,
      fill: false,
      label: "2009",
    },
    {
      data: date9Table1,
      backgroundColor: barColor3, 
      borderColor: borderColor3,
      fill: false,
      label: "2010",
    },
    {
      data: date10Table1,
      backgroundColor: barColor4, 
      borderColor: borderColor4,
      fill: false,
      label: "2011",
    },
    {
      data: date11Table1,
      backgroundColor: barColor5, 
      borderColor: borderColor5,
      fill: false,
      label: "2012",
    },
  ]
  },
  options: {
    legend: {display: true}
  }
});
// ***** 

// Graph table 2 ****************************************************
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
// Chart 2 
var getChart2 = document.getElementById("myChart2");
var firstData = {
  label: '2007-09',
  data: date1Table2,
  backgroundColor: barColor1,
  borderColor: borderColor1,
  borderWidth: 1,
  // yAxisID: "y-axis-first"
};
var secondData = {
  label: '2010-12',
  data: date2Table2,
  backgroundColor: barColor2,
  borderColor: borderColor2,
  borderWidth: 1,
  // yAxisID: "y-axis-second"
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
      // id: "y-axis-first"
    }, {
      // id: "y-axis-second"
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
            
              