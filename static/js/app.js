// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
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
        // append data in table data
        let cell = row.append("td");
        //holds only each value from the object
        cell.text(val);
        }
      );
    });
  }

  function handleClick() {
            // looks for datetime like vlookup first one embeded in html
            // .property("value") - date value stored on webpage - grab it and hold it in date variable
      let date = d3.select("#datetime").property("value");

            // table data is data table - we are passing it on to filter data so that we can filter
      let filteredData = tableData;
            // Check to see if a date was entered and filter the
            // data using that date.
            // if-statement syntax
            // if ( condition ) { code to execute }
            // key="datetime"
            // row[Key]
      if (date) {
            // Apply `filter` to the table data to only keep the
            // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
      };
            // Rebuild the table using the filtered data
            // @NOTE: If no date was entered, then filteredData will
            // just be the original tableData.
      buildTable(filteredData);
    };
            // function ends

    // Attach an event to listen for the form button
  d3.selectAll("#filter-btn").on("click", handleClick);


    // Build the table when the page loads
  buildTable(tableData);




    //function buildTable(data) {
    //clears the data in tbody html
    // tbody.html("");
    //   }
 
    // Looped through each object in the array
    // Appended a row to the HTML table
    // Added each value from the object into a cell

    // // data.forEach((dataRow)=> {
    // //tr tag is used for each row in table
    // let row= tbody.append("tr");
    // // Object Values refers one object from array
    // //datRow menas we want values to go into datarow
    // //specify one object per row
    // Object.values(dataRow).forEach((val) => {
    // // append data in table data
    // let cell = row.append("td");
    // //holds only each value from the object
    // cell.text(val);
    // }
    // };

    // });
    // // pseudocode practice
    // if (a date is entered) {
    //   Filter the default data to show only the date entered
    //   };

