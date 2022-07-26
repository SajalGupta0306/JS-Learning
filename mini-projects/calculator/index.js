document.getElementById("clear").addEventListener("click", function () {
    let form = document.getElementById("mainForm");
    let child = form.children["calInput"];
    child.value = "";
    document.getElementById("input").focus();
  });