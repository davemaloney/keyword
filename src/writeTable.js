function writeTable(data) {
  // create table
  let table = document.createElement("table");

  // create header for the table
  let tableHeader = document.createElement("tr");
  tableHeader.className = "header";
  tableHeader.innerHTML = "<th>Name</th>";
  table.appendChild(tableHeader);

  // create rows for each element in `data`
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    cell.innerHTML = data[i].name;
    row.appendChild(cell);
    table.appendChild(row);
  }

  // target node
  let tableSortable = document.getElementById("sortableTable");

  // clear out the old table
  let oldTable = tableSortable.getElementsByTagName("table");
  oldTable[0].remove();

  // add in the new table
  tableSortable.appendChild(table);
}

export default writeTable;
