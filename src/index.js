import "./style.css";
import input from "./input.html";
import table from "./table.html";
import { filterTypes } from "./filter.js";

const filterListener = new filterTypes();

// combining examples from
// https://www.w3schools.com/howto/howto_js_filter_table.asp
// and
// https://github.com/superjose/webpack-simple-example

function component() {
  let tableSimple = document.createElement("div");
  tableSimple.id = "simpleFilterTable";
  tableSimple.className = "table-wrap";
  tableSimple.innerHTML = "<p>Simple string-match search.</p>";
  tableSimple.innerHTML += table;

  let tableKeyword = document.createElement("div");
  tableKeyword.id = "keywordFilterTable";
  tableKeyword.className = "table-wrap";
  tableKeyword.innerHTML =
    "<p>A fuzzy search based on <a href='https://www.npmjs.com/package/fuse.js' target='_blank'>fuse.js</a></p>";
  tableKeyword.innerHTML += table;

  let tableSortable = document.createElement("div");
  tableSortable.id = "sortableTable";
  tableSortable.className = "table-wrap";
  tableSortable.innerHTML += "<p>Same fuzzy search with dynamic sorting.</p>";
  tableSortable.innerHTML += table;

  let innerContainer = document.createElement("div");
  innerContainer.className = "table-container";
  innerContainer.appendChild(tableSimple);
  innerContainer.appendChild(tableKeyword);
  innerContainer.appendChild(tableSortable);

  let outerContainer = document.createElement("div");
  outerContainer.innerHTML = input;
  outerContainer.appendChild(innerContainer);

  return outerContainer;
}

document.body.appendChild(component());

document.addEventListener("DOMContentLoaded", () => {
  const filterInput = document.getElementById("simpleFilterInput");
  filterInput.addEventListener("keyup", filterListener.simpleFilter);
  filterInput.addEventListener("keyup", filterListener.keywordFilter);
  filterInput.addEventListener("keyup", filterListener.sortFilter);
});
