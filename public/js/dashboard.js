const projectClickHandler = (event) => {
  // Get the id of the project to be rendered
  if (event.currentTarget.hasAttribute("data-id")) {
    let id = event.currentTarget.getAttribute("data-id");
    document.location.assign(`/project/${id}`);
  }
};

// const newFormHandler = async (event) => {
//     event.preventDefault();

//     const name = document.querySelector('#project-name').value.trim();
//     const needed_funding = document.querySelector('#project-budget').value.trim();
//     const summary = document.querySelector('#project-desc').value.trim();

//     if (name && needed_funding && description) {
//       const response = await fetch(`/api/projects`, {
//         method: 'POST',
//         body: JSON.stringify({ name, needed_funding, description }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };

//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');

//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });

//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };

//   document
//     .querySelector('.new-project-form')
//     .addEventListener('submit', newFormHandler);

//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);

const projects = document.querySelectorAll(".project-div");

for (let i = 0; i < projects.length; i++) {
  projects[i].addEventListener("click", projectClickHandler);
}
