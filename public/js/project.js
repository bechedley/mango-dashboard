// Reload the page when the back button is clicked
if (
  String(window.performance.getEntriesByType("navigation")[0].type) ===
  "back_forward"
) {
  window.location.reload();
}

const projectDeleteHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/project/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert("Failed to delete project!");
    }
  }
};

const nameUpdateHandler = async (event) => {
  event.preventDefault();

  // Get the id of the project
  let id;
  if (event.target.hasAttribute("data-id")) {
    id = event.target.getAttribute("data-id");
  }

  // Collect values from the name and date modal
  const project_name = document.querySelector("#new-name").value.trim();
  const project_due = document.querySelector("#new-due").value.trim();
  if (project_name !== null) {
    // Send a PUT request to the API endpoint
    const response = await fetch(`/api/project/${id}/name`, {
      method: "PUT",
      body: JSON.stringify({ project_name, project_due }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, refresh the project page
      document.location.replace(`/project/${id}`);
    } else {
      alert("Error when updating the name and due date!");
    }
  } else {
    alert("You must include a project name!");
  }
};

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

const summaryUpdateHandler = async (event) => {
  event.preventDefault();

  // Get the id of the project
  let id;
  if (event.target.hasAttribute("data-id")) {
    id = event.target.getAttribute("data-id");
  }

  // Collect values from the summary modal
  const project_summary = document.querySelector("#new-summary").value.trim();
  if (project_summary !== null) {
    // Send a PUT request to the API endpoint
    const response = await fetch(`/api/project/${id}/summary`, {
      method: "PUT",
      body: JSON.stringify({ project_summary }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, refresh the project page
      document.location.replace(`/project/${id}`);
    } else {
      alert("Error when updating the summary!");
    }
  } else {
    alert("Invalid Summary! Projects must include a summary!");
  }
};

const descriptionUpdateHandler = async (event) => {
  event.preventDefault();

  // Get the id of the project
  let id;
  if (event.target.hasAttribute("data-id")) {
    id = event.target.getAttribute("data-id");
  }

  // Collect values from the description modal
  const project_description = document
    .querySelector("#new-description")
    .value.trim();
  // Send a PUT request to the API endpoint
  const response = await fetch(`/api/project/${id}/description`, {
    method: "PUT",
    body: JSON.stringify({ project_description }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If successful, refresh the project page
    document.location.replace(`/project/${id}`);
  } else {
    alert("Error when updating the description!");
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

const tagAddHandler = async (event) => {
  event.preventDefault();

  // Get the id of the project
  let id;
  if (event.target.hasAttribute("data-id")) {
    id = event.target.getAttribute("data-id");
  }

  // Collect values from the budget modal
  const tag_name = document.querySelector("#new-tag").value.trim();
  if (tag_name) {
    // Send a POST request to the API endpoint
    const response = await fetch(`/api/project/${id}/tag`, {
      method: "POST",
      body: JSON.stringify({ tag_name }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, refresh the project page
      document.location.replace(`/project/${id}`);
    } else {
      alert("Error when adding the new tag!");
    }
  } else {
    alert("Error when adding the new tag!");
  }
};

const tagDeleteHandler = async (event) => {
  if (event.target.hasAttribute("data-tid")) {
    const tid = event.target.getAttribute("data-tid");
    const pid = event.target.closest(".tag-div").getAttribute("data-pid");

    const response = await fetch(`/api/project/${pid}/tag/${tid}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace(`/project/${pid}`);
    } else {
      alert("Failed to delete tag");
    }
  }
};

const statusUpdateHandler = async (event) => {
  event.preventDefault();

  // Get the id of the project
  const id = event.target.closest(".dropdown-menu").getAttribute("data-id");

  // Get the name of the status from the "name" attribute
  const project_status = event.target.getAttribute("name");
  if (project_status) {
    // Send a PUT request to the API endpoint
    const response = await fetch(`/api/project/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ project_status }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, refresh the project page
      document.location.replace(`/project/${id}`);
    } else {
      alert("Error when updating the status!");
    }
  } else {
    alert("Invalid status! Something has went wrong!");
  }
};

document
  .querySelector("#projectDeleteModal")
  .addEventListener("submit", projectDeleteHandler);

document
  .querySelector("#projectModal")
  .addEventListener("submit", nameUpdateHandler);

document
  .querySelector("#priceModal")
  .addEventListener("submit", budgetUpdateHandler);

document
  .querySelector("#summaryModal")
  .addEventListener("submit", summaryUpdateHandler);

document
  .querySelector("#descriptionModal")
  .addEventListener("submit", descriptionUpdateHandler);

document
  .querySelector("#collModal")
  .addEventListener("submit", collabAddHandler);

const collaborators = document.querySelectorAll(".collab-delete");
for (let i = 0; i < collaborators.length; i++) {
  collaborators[i].addEventListener("click", collabDeleteHandler);
}

document.querySelector("#linkModal").addEventListener("submit", linkAddHandler);

const links = document.querySelectorAll(".link-delete");
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", linkDeleteHandler);
}

document.querySelector("#tagModal").addEventListener("submit", tagAddHandler);

const tags = document.querySelectorAll(".tag-delete");
for (let i = 0; i < tags.length; i++) {
  tags[i].addEventListener("click", tagDeleteHandler);
}

const status = document.querySelectorAll(".status-item");
for (let i = 0; i < status.length; i++) {
  status[i].addEventListener("click", statusUpdateHandler);
}
