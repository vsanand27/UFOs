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
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }








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


