let open = false;
const dropdown = document.getElementById("dropdown");

document.getElementById("showList").addEventListener("click", function (e) {
  e.preventDefault();
  open = !open;
  if (open) {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
});
