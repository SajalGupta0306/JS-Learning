document.getElementById("clear").addEventListener("click", function () {
  const form = document.getElementById("mainForm");
  const child = form.children["calInput"];
  child.value = "";
  document.getElementById("input").focus();
});
