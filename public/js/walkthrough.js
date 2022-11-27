const tour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true
      },
      classes: 'class-1 class-2',
      scrollTo: { behavior: 'smooth', block: 'center' }
    }
  });
  
  tour.addStep({
            title: "Take the tour",
            text: "\n         <p>\n           Welcome to the Mango Project Management Dashboard! \n           Mango is a responsive web app designed to improve your organisation and productivity. \n         </p>\n        \n         <p>\n           To take a quick tour of Mango, click 'Next'. If you already know what you're doing, you can click 'Exit' to get started. \n         </p>\n",
          buttons: [
            {
              action: function() {
                return this.cancel();
              },
              secondary: true,
              text: 'Exit'
            },
            {
              action: function() {
                return this.next();
              },
              text: 'Next'
            }
          ],
          id: 'welcome'
        });

    // const element = document.createElement('p');
    // element.innerText = 'Including Shepherd is easy! Just include shepherd.js. The styles are bundled with the JS.';

    // These steps should be added via `addSteps`
    tour.addStep({
    title: "Add a new project",
    text: "Simply click the 'Add Project' button and start filling in the project form. Click the button to try it now!",
    attachTo: {
        element: '.btn-add',
        on: 'left'
      },
    advanceOn: { selector: '.btn-add', event: 'click' },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
          
        ],
        id: 'tour-addNew'
      });

      tour.addStep({
        title: "Project Name",
        text: "Start by giving your project a name. Once you've added a name, click 'Next' to continue.",
        attachTo: {
          element: '#addProjectName',
          on: 'left'
        },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
          {
            action: function() {
              return this.next();
            },
            text: 'Next'
          }
        ],
        id: 'tour-addName'
      });

      tour.addStep({
        title: "Project Due Date",
        text: "Type or select to choose the projected date of completion, or when your project is due. Enter a date and then click 'Next'.",
        attachTo: {
          element: '#addProjectDue',
          on: 'right'
        },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
          {
            action: function() {
              return this.next();
            },
            text: 'Next'
          }
        ],
        id: 'tour-addDate'
      });

      tour.addStep({
        title: "Project Budget",
        text: "Input the quoted cost of the project as a total number. You can include decimal points, but don't use commas or currency symbols. Once you've added a budget, click 'Next'.",
        attachTo: {
          element: '#addProjectBudget',
          on: 'right'
        },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
          {
            action: function() {
              return this.next();
            },
            text: 'Next'
          }
        ],
        id: 'tour-addBudget'
      });

      tour.addStep({
        title: "Project Summary",
        text: "This is the short summary that will show up for each project on your dashboard. Stick to one to two lines of text. Once you've added a summary, click 'Next'.",
        attachTo: {
          element: '#addProjectSummary',
          on: 'right'
        },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
          {
            action: function() {
              return this.next();
            },
            text: 'Next'
          }
        ],
        id: 'tour-addSummary'
      });

     tour.addStep({
        title: "Project Description",
        text: "Here you can add more detailed information about your project, such as the user story and acceptance criteria. This can also be added to or edited later. Once you've added a description, click 'Next'.",
        attachTo: {
          element: '#addProjectDescription',
          on: 'right'
        },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
          {
            action: function() {
              return this.next();
            },
            text: 'Next'
          }
        ],
        id: 'tour-addDescription'
      });

     tour.addStep({
        title: "Project Status",
        text: "Select a status from the dropdown list. 'Active' is used for projects in-progress. 'Pending' is used for projects where you're waiting on a third party, such as client approval. 'Upcoming' is used for projects which are booked but not yet started. 'Cancelled' is used for projects which have been cancelled, or cancelled for now. And 'Finished' is used for projects which have been completed. Choose a status from the menu and then click 'Next'.",
        attachTo: {
          element: '#addProjectStatus',
          on: 'bottom'
        },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
          {
            action: function() {
              return this.next();
            },
            text: 'Next'
          }
        ],
        id: 'tour-addStatus'
      });

      tour.addStep({
        title: "Add your project",
        text: "Once you've completed all fields, click the 'Add Project' button to add your first project. Try it now!",
        attachTo: {
          element: '#add-project-btn-submit',
          on: 'right'
        },
        advanceOn: { selector: '#add-project-btn-submit', event: 'click' },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
        ],
        id: 'tour-addButton'
      });


  $(function() {
    if ( document.location.href.indexOf('dashboard') > -1 ) { 
         tour.start();
    }
});


