const budgetEditHandler = async (event) => {
  event.preventDefault();

  // Get the id of the project
  let id;
  if (event.target.hasAttribute("data-id")) {
    id = event.target.getAttribute("data-id");
  }

  // Collect values from the budget modal
  const project_budget = document.querySelector("#new-budget").value.trim();
  if (project_budget && parseInt(project_budget) !== NaN) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/project/${id}/budget`, {
      method: "PUT",
      body: JSON.stringify({ project_budget }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, refresh the project page
      document.location.replace(`/project/${id}`);
    } else {
      alert("Error when updating the budget!");
    }
  } else {
    alert("Invalid budget! Please type in a number!");
  }
};

document
  .querySelector("#priceModal")
  .addEventListener("submit", budgetEditHandler);
