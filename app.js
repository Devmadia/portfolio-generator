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

const promptProject = () => {
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
    ]);
  };
  
promptUser()
    .then(answers => console.log(answers))
    .then(promptProject)
    .then(projectAnswers => console.log(projectAnswers));

// receiving module.exports from page-template.js
// const generatePage = require('./src/page-template.js');

// in order to use File System, the below constant is necessary
// const fs = require('fs');

// profileDataArgs array
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// array index
// const [name, github] = profileDataArgs;

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//         console.log('================');

//         profileDataArr.forEach(profileItem => console.log(profileItem));

//     }
// };

// const generatePage = () => 'Name: Jane, Github: janehub';

// template literals to insert the variables inside the function block
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// create multi-line input: added carriage returns manually within the template literal
// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
//   };



// wrap the string in backticks and interpolate the variables with the ${<variable>} syntax
// console.log(generatePage('Jane', 'janehub'));

// console.log(name, github);
// console.log(generatePage(name, github));

// writefile arguments to create and output file; HTML string; callback function to handle any errors and announce success in a message



//  callback function block with conditional statement to check for err
// fs.writeFile('./index.html', generatePage(name, github), err => {

//     // if an error exists, it'll throw an error message out
//     if (err) throw new Error(err);
  
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });