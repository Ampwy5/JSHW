// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

function buildTable (data) {
    tbody.html("")
    data.forEach((dataRow)=> {
        var row = tbody.append("tr")
        Object.values(dataRow).forEach(function(value) {
            var cell = row.append("td")
            cell.text(value) 

    });
        
  
}); 
}  
buildTable(tableData); 

var filterButton = d3.select("#filter-btn") 

filterButton.on("click", function() {
    d3.event.preventDefault()
    var date = d3.select("#datetime").property("value") 
    var filterData = tableData 
    if (date) {
        filterData = filterData.filter(row => row.datetime === date) 

    }
    buildTable(filterData);
 
}); 

