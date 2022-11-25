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
    const project_budget = document.querySelector("#addProjectBudget").value.trim();
    const project_due = document.querySelector("#addProjectDue").value.trim();
    const project_summary = document.querySelector("#addProjectSummary").value.trim();
    const project_description= document.querySelector("#addProjectDescription").value.trim();
    const project_status = document.querySelector("#addProjectStatus").value.trim();

    if (project_name && project_summary && project_status) {
      const response = await fetch(`/api/project`, {
        method: 'POST',
        body: JSON.stringify({ project_name, project_budget, project_due, project_summary, project_description, project_status }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert('Failed to create project');
      }
    }
  };
  
  document
    .querySelector(".add-project-form")
    .addEventListener('submit', newProjectHandler);


const projects = document.querySelectorAll(".project-div");

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", projectClickHandler);
}
