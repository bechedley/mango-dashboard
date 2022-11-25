const budgetUpdateHandler = async (event) => {
  event.preventDefault();

  // Get the id of the project
  let id;
  if (event.target.hasAttribute("data-id")) {
    id = event.target.getAttribute("data-id");
  }

  // Collect values from the budget modal
  const project_budget = document.querySelector("#new-budget").value.trim();
  if (project_budget && parseInt(project_budget) !== NaN) {
    // Send a PUT request to the API endpoint
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

const collabAddHandler = async (event) => {
  event.preventDefault();

  // Get the id of the project
  let id;
  if (event.target.hasAttribute("data-id")) {
    id = event.target.getAttribute("data-id");
  }

  // Collect values from the budget modal
  const collab_email = document.querySelector("#new-collab").value.trim();
  if (collab_email) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/project/${id}/collab`, {
      method: "POST",
      body: JSON.stringify({ collab_email }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, refresh the project page
      document.location.replace(`/project/${id}`);
    } else {
      alert("Error when adding the new collaborator!");
    }
  } else {
    alert("Invalid email link!");
  }
};

const collabDeleteHandler = async (event) => {
  if (event.target.hasAttribute("data-cid")) {
    const cid = event.target.getAttribute("data-cid");
    const pid = event.target.closest(".collab-div").getAttribute("data-pid");

    const response = await fetch(`/api/project/${pid}/collab/${cid}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/project/${pid}`);
    } else {
      alert("Failed to delete collaborator");
    }
  }
};

const linkAddHandler = async (event) => {
  event.preventDefault();

  // Get the id of the project
  let id;
  if (event.target.hasAttribute("data-id")) {
    id = event.target.getAttribute("data-id");
  }

  // Collect values from the budget modal
  const link_url = document.querySelector("#new-link").value.trim();
  if (link_url) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/project/${id}/link`, {
      method: "POST",
      body: JSON.stringify({ link_url }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, refresh the project page
      document.location.replace(`/project/${id}`);
    } else {
      alert("Error when adding the new link!");
    }
  } else {
    alert("Invalid link!");
  }
};

const linkDeleteHandler = async (event) => {
  if (event.target.hasAttribute("data-lid")) {
    const lid = event.target.getAttribute("data-lid");
    const pid = event.target.closest(".link-div").getAttribute("data-pid");

    const response = await fetch(`/api/project/${pid}/link/${lid}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/project/${pid}`);
    } else {
      alert("Failed to delete link");
    }
  }
};

document
  .querySelector("#priceModal")
  .addEventListener("submit", budgetUpdateHandler);

document
  .querySelector("#collModal")
  .addEventListener("submit", collabAddHandler);

const collaborators = document.querySelectorAll(".collab-delete");
for (let i = 0; i < collaborators.length; i++) {
  collaborators[i].addEventListener("click", collabDeleteHandler);
}

document
  .querySelector("#linkModal")
  .addEventListener("submit", linkAddHandler);

const links = document.querySelectorAll(".link-delete");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", linkDeleteHandler);
}
