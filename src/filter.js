import Fuse from "fuse.js";
import data from "./data";
import options from "./options";
import writeTable from "./writeTable";

export class filterTypes {
  simpleFilter() {
    const input = document
      .getElementById("simpleFilterInput")
      .value.toUpperCase();
    const table = document.getElementById("simpleFilterTable");
    const tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(input) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  keywordFilter() {
    const input = document.getElementById("simpleFilterInput").value.trim();
    const table = document.getElementById("keywordFilterTable");
    const tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
      const td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        const list = [];
        const name = td.innerHTML;
        list.push({ name: name });
        const fuse = new Fuse(list, options);
        const result = fuse.search(input);
        if (input == "" || input == null || result.length >= 1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  sortFilter() {
    const input = document.getElementById("simpleFilterInput").value.trim();
    const fuse = new Fuse(data, options);
    const result = fuse.search(input);
    if (input == "" || input == null) {
      writeTable(data);
    } else {
      writeTable(result);
    }
  }
}
