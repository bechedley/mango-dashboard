// Dashboard tour
const tour1 = new Shepherd.Tour({
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    },
    classes: 'class-1 class-2',
    scrollTo: { behavior: 'smooth', block: 'center' }
  },
  useModalOverlay: true,
});

tour1.addStep({
  title: "Take the tour",
  text: "\n         <p>\n           Welcome to the Mango Project Management Dashboard! \n           Mango is a responsive web app designed to improve your organisation and productivity. \n         </p>\n        \n         <p>\n           To take a quick tour of Mango, click 'Next'. If you already know what you're doing, you can click 'Exit' to get started. \n         </p>\n",
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'welcome'
});

tour1.addStep({
  title: "Search projects",
  text: "You can use the search bar to find specific projects by name.",
  attachTo: {
    element: '#search-form',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-search'
});

tour1.addStep({
  title: "Sort projects",
  text: "You can also choose to sort your projects alphabetically by name, or in order of the project due date or status.",
  attachTo: {
    element: '#sort',
    on: 'left'
  },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-sort'
});

tour1.addStep({
  title: "Filter projects",
  text: "You can click here to hide or show the filter options",
  attachTo: {
    element: '#filter-btn',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-filter'
});

tour1.addStep({
  title: "Filter options",
  text: "\n         <p>\n           Once you add tags to your projects, they'll be available here to filter. \n         </p>\n        \n         <p>\n           Click the tag checkbox to view only projects which include that tag. You'll see how to add tags to your project in a minute.\n         </p>\n        ",
  attachTo: {
    element: '#filterbar',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-filterTags'
});
tour1.addStep({
  title: "Add a new project",
  text: "Simply click the 'Add Project' button and start filling in the project form. Click the button to try it now!",
  attachTo: {
    element: '.btn-add',
    on: 'left'
  },
  advanceOn: { selector: '.btn-add', event: 'click' },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },

  ],
  id: 'tour-addNew'
});

tour1.addStep({
  title: "Project Name",
  text: "Start by giving your project a name. Once you've added a name, click 'Next' to continue.",
  advanceOn: {selector: '#addProjectName', event: 'input'},
  attachTo: {
    element: '#addProjectName',
    on: 'left'
  },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
    // {
    //   action: function () {
    //     return this.next();
    //   },
    //   text: 'Next'
    // }
  ],
  id: 'tour-addName'
});

tour1.addStep({
  title: "Project Name",
  text: "Start by giving your project a name. Once you've added a name, click 'Next' to continue.",
  attachTo: {
    element: '#addProjectName',
    on: 'left'
  },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-addName2'
});

tour1.addStep({
  title: "Project Due Date",
  text: "Type or select to choose the projected date of completion, or when your project is due. Enter a date and then click 'Next'.",
  attachTo: {
    element: '#addProjectDue',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-addDate'
});

tour1.addStep({
  title: "Project Budget",
  text: "Input the quoted cost of the project as a total number. Make sure you don't use commas or currency symbols. Once you've added a budget, click 'Next'.",
  attachTo: {
    element: '#addProjectBudget',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-addBudget'
});

tour1.addStep({
  title: "Project Summary",
  text: "This is the short summary that will show up for each project on your dashboard. Stick to one to two lines of text. Once you've added a summary, click 'Next'.",
  attachTo: {
    element: '#addProjectSummary',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-addSummary'
});

tour1.addStep({
  title: "Project Description",
  text: "\n         <p>\n           Here you can add more detailed information about your project, such as the user story and acceptance criteria. This can also be added to or edited later.\n         </p>\n        \n         <p>\n           Once you've added a description, click 'Next'.\n         </p>\n        ",
  attachTo: {
    element: '#addProjectDescription',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-addDescription'
});

tour1.addStep({
  title: "Project Status",
  text: "\n         <p>\n           Select a status from the dropdown list.\n         </p>\n         \n         <p>\n           'Active' is used for projects in-progress. 'Pending' is used for projects where you're waiting on a third party, such as client approval. 'Upcoming' is used for projects which are booked but not yet started. 'Cancelled' is used for projects which have been cancelled, or cancelled for now. And 'Finished' is used for projects which have been completed.\n         </p>\n         \n         <p>\n           Choose a status from the menu and then click 'Next'.\n         </p>\n        ",
  attachTo: {
    element: '#addProjectStatus',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-addStatus'
});

tour1.addStep({
  title: "Add your project",
  text: "\n         <p>\n           If you've completed all fields, click the 'Add Project' button to add your first project. \n         </p>\n        \n         <p>\n           Once your new project is added, it will appear in your dashboard and you can click the project to continue your tour. \n         </p>\n        \n         <p>\n           Try it now!\n         </p>\n        ",
  attachTo: {
    element: '#add-project-btn-submit',
    on: 'right'
  },
  advanceOn: { selector: '#add-project-btn-submit', event: 'click' },
  buttons: [
    {
      action: function () {
        return this.back();
      },
      secondary: true,
      text: 'Back'
    },
  ],
  id: 'tour-addButton'
});

// Project Tour
const tour2 = new Shepherd.Tour({
  defaultStepOptions: {
    cancelIcon: {
      enabled: true
    },
    classes: 'class-1 class-2',
    scrollTo: { behavior: 'smooth', block: 'center' }
  },
  useModalOverlay: true,
});

tour2.addStep({
  title: "Welcome to your Project!",
  text: "This is the project page, where you can add and view details about your project.",
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-project'
});

tour2.addStep({
  title: "Edit name or due date",
  text: "Click the pen icon here to update the name or due date of your project.",
  attachTo: {
    element: '.name-and-date',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-edit-name'
});

tour2.addStep({
  title: "Change the project status",
  text: "As the project progresses, you can change your project status by clicking the dropdown and selecting a new status option.",
  attachTo: {
    element: '.dropdown',
    on: 'left'
  },
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-edit-status'
});

tour2.addStep({
  title: "Edit the project budget",
  text: "Click the pen icon here to update the budget for your project. Make sure you don't include any commas or currency symbols.",
  attachTo: {
    element: '.budget-text',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-edit-budget'
});

tour2.addStep({
  title: "Edit project summary",
  text: "Click the pen icon here to update the summary for your project. Try to stick to one or two lines.",
  attachTo: {
    element: '.summary-text',
    on: 'left'
  },
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-edit-summary'
});

tour2.addStep({
  title: "Edit project description",
  text: "Click the pen icon here to update the project description. You can add more detailed information here as the project progresses.",
  attachTo: {
    element: '.description-text',
    on: 'left'
  },
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-edit-description'
});

tour2.addStep({
  title: "Add collaborators",
  text: "\n         <p>\n           Click the plus icon to add the email addresses of collaborators and key contacts. You can remove any existing email addresses by clicking the 'X' next to the email address. \n         </p>\n        \n         <p>\n           Clicking on an email address will open a new email to that contact.\n         </p>\n        ",
  attachTo: {
    element: '.collaborators-text',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-new-collaborator'
});

tour2.addStep({
  title: "Add links",
  text: "\n         <p>\n           Click the plus icon here to add useful links for your project, such as the website URL or the client's website and social pages. You could even add competitor inpiration. \n         </p>\n        \n         <p>\n           You can click the link to open the webpage in a new tab. You can begin URLs with either 'www.' or 'https://' to create a useable link. \n         </p>\n        \n         <p>\n           You can delete links from a project by clicking the 'X' next to the link.\n         </p>\n        ",
  attachTo: {
    element: '.links-text',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-new-link'
});

tour2.addStep({
  title: "Add tags",
  text: "\n         <p>\n           Click the plus icon here to add a new tag to your project. Tags will show up in the dashboard as filter options to help you find and sort your projects. \n         </p>\n        \n         <p>\n           You can create as many custom tags as you want. Some suggestions include the client name, the type of project, and the technology you'll be using but the tags you use are only limited by your imagination! \n         </p>\n        \n         <p>\n           You can delete tags from a project by clicking the 'X' next to the tag.\n         </p>\n        ",
  attachTo: {
    element: '.tags-text',
    on: 'right'
  },
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-new-tag'
});

tour2.addStep({
  title: "Delete project",
  text: "\n         <p>\n           If you no longer want a record of your project, you can delete it here. \n         </p>\n        \n         <p>\n           But be careful: once deleted, projects and their associated data can't be recovered!\n         </p>\n        ",
  attachTo: {
    element: '.delete-project-btn',
    on: 'left'
  },
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-delete-project'
});

tour2.addStep({
  title: "Dashboard",
  text: "\n         <p>\n           You can return to the main dashboard at any time by clicking the Mango logo at the top of the page. \n         </p>\n        \n         <p>\n           If you need to come back to the project, just click on the project name in your dashboard.\n         </p>\n        ",
  attachTo: {
    element: '#mango-logo',
    on: 'bottom'
  },
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.next();
      },
      text: 'Next'
    }
  ],
  id: 'tour-return'
});

tour2.addStep({
  title: "That's It!",
  text: "You've reached the end of the tour! Now you're ready to start adding your projects and getting on top of your workload!",
  buttons: [
    {
      action: function () {
        return this.cancel();
      },
      secondary: true,
      text: 'Exit'
    },
    {
      action: function () {
        return this.complete();
      },
      text: 'End Tour'
    }
  ],
  id: 'tour2-end'
});

// Show tour based on location

$(function () {
  if ((document.location.href.indexOf('dashboard') > -1) && (!localStorage.getItem('shepherd-tour1'))) {
      tour1.start();
      localStorage.setItem('shepherd-tour1', 'yes');
    }
});

$(function () {
  if ((document.location.href.indexOf('project') > -1) && (!localStorage.getItem('shepherd-tour2'))) {
      tour2.start();
      localStorage.setItem('shepherd-tour2', 'yes');
    }
});


