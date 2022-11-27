// Reload the page when the back button is clicked
if (
  String(window.performance.getEntriesByType("navigation")[0].type) ===
  "back_forward"
) {
  window.location.reload();
}

const projectClickHandler = (event) => {
  // Get the id of the project to be rendered
  if (event.currentTarget.hasAttribute("data-id")) {
    let id = event.currentTarget.getAttribute("data-id");
    document.location.assign(`/project/${id}`);
  }
};

const newProjectHandler = async (event) => {
  event.preventDefault();

  const project_name = document.querySelector("#addProjectName").value.trim();
  const project_budget = document
    .querySelector("#addProjectBudget")
    .value.trim();
  const project_due = document.querySelector("#addProjectDue").value.trim();
  const project_summary = document
    .querySelector("#addProjectSummary")
    .value.trim();
  const project_description = document
    .querySelector("#addProjectDescription")
    .value.trim();
  const project_status = document
    .querySelector("#addProjectStatus")
    .value.trim();

  if (project_name && project_summary && project_status) {
    const response = await fetch(`/api/project`, {
      method: "POST",
      body: JSON.stringify({
        project_name,
        project_budget,
        project_due,
        project_summary,
        project_description,
        project_status,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create project");
    }
  }
};

$(document).ready(function () {
  const getQueryParameter = (param) =>
    new URLSearchParams(document.location.search.substring(1)).get(param);

  if (getQueryParameter("tags") != null) {
    let tagQuery = getQueryParameter("tags");
    $(".tag_checks").each(function () {
      if (tagQuery.includes($(this).attr("data-tag"))) {
        $(this).prop("checked", true);
      }
    });
  }

  $("#search-form").on("submit", function (e) {
    e.preventDefault();
    let userSearch = $("#search-form input").val();

    if (userSearch) {
      document.location.replace("/dashboard?q=" + userSearch);
    } else console.log("empty");
  });

  $("#sortBtn").on("click", function (e) {
    e.preventDefault();
    let sortVal = $("#sort").find(":selected").val();
    let querySearch = "?sort=" + sortVal;
    if (getQueryParameter("q") != null) {
      querySearch += "&q=" + getQueryParameter("q");
    }
    if (getQueryParameter("tags") != null) {
      querySearch += "&tags=" + getQueryParameter("tags");
    }
    document.location.replace("/dashboard" + querySearch);
  });

  $("#resetBtn").on("click", function (e) {
    e.preventDefault();
    document.location.replace("/dashboard");
  });

  $("#applyTag").on("click", function (e) {
    e.preventDefault();
    let tagsList = [];
    $(".tag_checks").each(function () {
      if ($(this).is(":checked")) {
        console.log("het");
        tagsList.push($(this).attr("data-tag"));
      }
    });
    if (tagsList) {
      let queryText = "?tags=" + tagsList.join(",");
      if (getQueryParameter("q") != null) {
        queryText += "&q=" + getQueryParameter("q");
      }
      document.location.replace("/dashboard" + queryText);
    }
  });
});

document
  .querySelector(".add-project-form")
  .addEventListener("submit", newProjectHandler);

const projects = document.querySelectorAll(".project-div");

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", projectClickHandler);
}
