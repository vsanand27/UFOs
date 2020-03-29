// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters

// This function will replace your handleClick function
function updateFilters() {
  
  var filters = 
    {"datetime": d3.select("#datetime").property("value").trim().toLowerCase(),
    "city": d3.select("#city").property("value").trim().toLowerCase(),
    "state": d3.select("#state").property("value").trim().toLowerCase(),
    "country": d3.select("#country").property("value").trim().toLowerCase(),
    "shape": d3.select("#shape").property("value").trim().toLowerCase()}
  ;
  
  
  // to the filters list. Otherwise, clear that filter from the filters object
  // clear the input valued
  d3.select("#datetime").property("value","");
  d3.select("#city").property("value","");
  d3.select("#state").property("value","");
  d3.select("#country").property("value","");
  d3.select("#shape").property("value","");
  
  // Call function to apply all filters and rebuild the table
  filterTable(filters);
}

function filterTable(filters) {

  // Set the filteredData to the tableData
  let filteredData = tableData;
  // Loop through all of the filters and keep any data that

  Object.keys(filters).forEach(function (key) {
    if(filters[key]!=="") {
      filteredData = filteredData.filter(row => row[key] === filters[key])
      }
  });
  

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
}

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis

d3.select("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);
