countries = [
  "India",
  "Germany",
  "Spain",
  "London",
  "Brazil",
  "Japan",
  "Canada",
];

updateIndex = 0;

function fetchAll() {
  var countryName = "<table border='1|1'>";
  for (var i = 0; i < countries.length; i++) {
    countryName += "<tr>";
    countryName += "<td>" + countries[i] + "</td>";
    countryName += '<td><button onclick="edit(' + i + ')">Edit</button>';
    countryName += '<td><button onclick="del(' + i + ')">Delete</button>';
    countryName += "</tr>";
  }
  countryName += "</table>";
  document.getElementById("show").innerHTML = countryName;
}

function saveAndUpdate() {
  document.getElementById("btn").innerHTML == "Submit"
    ? this.add()
    : this.update();
}

function add() {
  newInput = document.getElementById("name");
  var coun = newInput.value;
  if (coun) {
    countries.push(coun.trim());
    newInput.value = "";
    fetchAll();
  }
}

function update() {
  val = document.getElementById("name");
  var coun = val.value;
  countries[updateIndex] = coun;
  document.getElementById("name").value = "";
  document.getElementById("btn").innerHTML = "Submit";
  fetchAll();
}

function edit(i) {
  document.getElementById("btn").innerHTML = "Update";
  document.getElementById("name").value = countries[i];
  updateIndex = i;
  fetchAll();
}

function del(i) {
  countries.splice(i, 1);
  fetchAll();
}
