// For Filters
document.addEventListener("DOMContentLoaded", function () {
  var filterBtn = document.getElementById("filter-btn");
  var btnTxt = document.getElementById("btn-txt");
  var filterAngle = document.getElementById("filter-angle");
  const collapseElementList = document.querySelectorAll(".collapse");

  $("#filterbar").collapse(false);
  var count = 0,
    count2 = 0;

  filterBtn.addEventListener("click", changeBtnTxt);

  function changeBtnTxt() {
    count++;

    const collapseList = [...collapseElementList].map(
      (collapseEl) => new bootstrap.Collapse(collapseEl)
    );

    if (count % 2 !== 0) {
      filterAngle.classList.add("fa-angle-right");
      btnTxt.innerText = "show filters";
      filterBtn.style.backgroundColor = "#ff935d";
    } else {
      filterAngle.classList.remove("fa-angle-right");
      btnTxt.innerText = "hide filters";
      filterBtn.style.backgroundColor = "#ff935d";
    }
  }

  // For Applying Filters
  $("#inner-box").collapse(false);
  $("#inner-box2").collapse(false);

  // For changing NavBar-Toggler-Icon
  var icon = document.getElementById("icon");

  function changeIcon() {
    count2++;
    if (count2 % 2 != 0) {
      icon.innerText = "";
      icon.innerHTML =
        '<span class="far fa-times-circle" style="width:100%"></span>';
      icon.style.paddingTop = "5px";
      icon.style.paddingBottom = "5px";
      icon.style.fontSize = "1.8rem";
    } else {
      icon.innerText = "";
      icon.innerHTML = '<span class="navbar-toggler-icon"></span>';
      icon.style.paddingTop = "5px";
      icon.style.paddingBottom = "5px";
      icon.style.fontSize = "1.2rem";
    }
  }
});
