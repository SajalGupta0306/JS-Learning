var searchTerms = [
  "apple",
  "apple watch",
  "apple macbook",
  "apple macbook pro",
  "iphone",
  "iphone 12",
];

const input = document.getElementById("q");
const res = document.getElementById("result");

function autocompleteMatch(inputVal) {
  if (inputVal === "") {
    return [];
  }
  return searchTerms.filter((term) => {
    return term.toLowerCase().includes(inputVal.toLowerCase()) ? term : "";
  });
}

function showResults() {
  res.innerHTML = "";
  const val = input.value.trim();
  let list = "";
  const terms = autocompleteMatch(val);
  if (terms.length !== 0) {
    for (let i = 0; i < terms.length; i++) {
      list += "<li>" + terms[i] + "</li>";
    }
    res.innerHTML = "<ul>" + list + "</ul>";
  }
}

input.addEventListener("keyup", showResults);
