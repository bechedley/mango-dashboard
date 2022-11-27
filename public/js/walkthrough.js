'use strict';

(function() {
  function init() {
    var shepherd = setupShepherd();
    setTimeout(function() {
      shepherd.start();
    }, 400);
  }

  function setupShepherd() {
    var shepherd = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: 'class-1 class-2',
        scrollTo: {
          behavior: 'smooth',
          block: 'center'
        }
      },
      // This should add the first tour step
      steps: [
        {
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
        }
      ],
      useModalOverlay: true
    });

    const element = document.createElement('p');
    element.innerText = 'Including Shepherd is easy! Just include shepherd.js. The styles are bundled with the JS.';

    // These steps should be added via `addSteps`
    const steps = [
      {
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
      },
      {
        title: "Project name",
        text: "Start by giving your project a name.",
        attachTo: {
          element: '#addProjectName',
          on: 'right'
        },
        advanceOn: { selector: '#addProjectName', event: 'input' },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
        ],
        id: 'tour-addName'
      },
      {
        title: "Project Due Date",
        text: "Type or select to choose the projected date of completion, or when your project is due. Enter a date and then click 'Next' to continue.",
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
      },
      {
        title: "Project Budget",
        text: "Input the quoted cost of the project as a total number. You can include decimal points, but don't use commas.",
        attachTo: {
          element: '#addProjectBudget',
          on: 'right'
        },
        advanceOn: { selector: '#addProjectBudget', event: 'input' },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
        ],
        id: 'tour-addBudget'
      },
      {
        title: "Project Summary",
        text: "This is the short summary that will show up for each project on your dashboard. Stick to one to two lines of text.",
        attachTo: {
          element: '#addProjectSummary',
          on: 'right'
        },
        advanceOn: { selector: '#addProjectSummary', event: 'input' },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
        ],
        id: 'tour-addSummary'
      },
      {
        title: "Project Description",
        text: "Here you can add more detailed information about your project, such as the user story and acceptance criteria. This can also be added to or edited later.",
        attachTo: {
          element: '#addProjectDescription',
          on: 'right'
        },
        advanceOn: { selector: '#addProjectDescription', event: 'input' },
        buttons: [
          {
            action: function() {
              return this.back();
            },
            secondary: true,
            text: 'Back'
          },
        ],
        id: 'tour-addDescription'
      },
      {
        title: "Project Status",
        text: "Select a status from the dropdown list. 'Active' is used for projects in-progress. 'Pending' is used for projects where you're waiting on a third party, such as client approval. 'Upcoming' is used for projects which are booked but not yet started. 'Cancelled' is used for projects which have been cancelled, or cancelled for now. And 'Finished' is used for projects which have been completed. Choose a status from the menu and then click 'Next' to continue.",
        attachTo: {
          element: '#addProjectStatus',
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
        id: 'tour-addStatus'
      },
      {
        title: "Add your project",
        text: "Once you've completed all fields, click the 'Add Project' button to add your first project. Try it now!",
        attachTo: {
          element: '.btn-new-submit',
          on: 'right'
        },
        advanceOn: { selector: '.btn-new-submit', event: 'click' },
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
      }
    ];

    shepherd.addSteps(steps);

    // This should add steps after the ones added with `addSteps`
    shepherd.addStep({
      title: 'Centered Shepherd Element',
      text: 'But attachment is totally optional!\n       Without a target, a tour step will create an element that\'s centered within the view.       Check out the <a href="https://shepherdjs.dev/docs/">documentation</a> to learn more.',
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
      id: 'centered-example'
    });

    shepherd.addStep({
      title: 'Learn more',
      text: 'Star Shepherd on Github so you remember it for your next project',
      attachTo: {
        element: '.hero-followup',
        on: 'top'
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
          text: 'Done'
        }
      ],
      id: 'followup',
      modalOverlayOpeningPadding: '10'
    });
    return shepherd;
  }

  function ready() {
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
      init();
    } else {
      document.addEventListener('DOMContentLoaded', init);
    }
  }

  $(function() {
    if ( document.location.href.indexOf('dashboard') > -1 ) { 
         ready();
    }
});


}).call(void 0);
