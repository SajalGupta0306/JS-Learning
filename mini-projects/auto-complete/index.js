import "./styles.css";

var search_terms = [
  "apple",
  "apple watch",
  "apple macbook",
  "apple macbook pro",
  "iphone",
  "iphone 12"
];

const input = document.getElementById("q");
const res = document.getElementById("result");

function autocompleteMatch(input) {
  if (input === "") {
    return [];
  }
  return search_terms.filter((term) => {
    return term.toLowerCase().includes(input.toLowerCase()) ? term : "";
  });
}

function showResults() {
  res.innerHTML = "";
  const val = input.value.trim();
  let list = "";
  let terms = autocompleteMatch(val);
  if (terms.length !== 0) {
    for (let i = 0; i < terms.length; i++) {
      list += "<li>" + terms[i] + "</li>";
    }
    res.innerHTML = "<ul>" + list + "</ul>";
  }
}

input.addEventListener("keyup", showResults);
