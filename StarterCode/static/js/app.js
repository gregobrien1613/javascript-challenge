// from data.js
var tableData = data;

//Function on button click
d3.select("#filter-btn").on("click", function() {

  //Clears previous table
  var tbody = d3.select("tbody");
  tbody.html('');

  //Selects inputs
  var datetime = d3.select("#datetime").node().value;
  var city = d3.select("#city").node().value;
  var state = d3.select("#state").node().value;
  var country = d3.select("#country").node().value;
  var shape = d3.select("#shape").node().value;

  //Initializes filteredData for data to get passed through
 var filteredData = undefined;

 //If input not empty add it to filteredData
 if (datetime !== ""){
    var filteredData = tableData.filter(data => data.datetime === datetime);
    d3.select("#datetime").node().value = "";
  }
  if (city !== ""){
    if (filteredData === undefined) {
    var filteredData = tableData.filter(data => data.city === city)
    }
    var filteredData = filteredData.filter(data => data.city === city);
    d3.select("#city").node().value = "";
  }
  if (state !== ""){
    if (filteredData === undefined) {
    var filteredData = tableData.filter(data => data.state === state);
    }
    var filteredData = filteredData.filter(data => data.state === state);
    d3.select("#state").node().value = "";
  }
  if (country !== ""){
    if (filteredData === undefined){
    var filteredData = tableData.filter(data => data.country === country);
    }
    var filteredData = filteredData.filter(data => data.country === country);
    d3.select("#country").node().value = "";
  }
  if (shape !== ""){
    if (filteredData === undefined){
    var filteredData = tableData.filter(data => data.shape === shape);
    }
    var filteredData = filteredData.filter(data => data.shape === shape);
    d3.select("#shape").node().value = "";
  }

    //Append Rows to table
    filteredData.forEach((data) => {
      var row = tbody.append("tr");
      Object.entries(data).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
});
