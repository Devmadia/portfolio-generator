const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username'
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide some information about yourself:'
      }
    ]);
  };
    
//   promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
    // projects array for portfolioData
    portfolioData.projects = [];

    // If there's no 'projects' array property, create one

    //data collection system
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);

        // a condition that will call the promptProject(portfolioData) function when confirmAddProject evaluates to true
        if (projectData.confirmAddProject) { //evaluating the user response to whether they wish to add more projects
            return promptProject(portfolioData);
        
        // If the user decides not to add more projects, then the condition will evaluate to false and trigger the following statement   
        } else {  
        return portfolioData; 
        }

        });
};
  
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
});