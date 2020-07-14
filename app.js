// in order to use File System, the below constant is necessary
const fs = require('fs');

// profileDataArgs array
const profileDataArgs = process.argv.slice(2, process.argv.length);

// array index
const name = profileDataArgs[0];
const github = profileDataArgs[1];

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
        console.log('================');

        profileDataArr.forEach(profileItem => console.log(profileItem));

    }
};

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

// change the generatePage() function in app.js to output the following HTML string instead
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

// wrap the string in backticks and interpolate the variables with the ${<variable>} syntax
// console.log(generatePage('Jane', 'janehub'));

// console.log(name, github);
// console.log(generatePage(name, github));

// writefile arguments to create and output file; HTML string; callback function to handle any errors and announce success in a message



//  callback function block with conditional statement to check for err
fs.writeFile('index.html', generatePage(name, github), err => {

    // if an error exists, it'll throw an error message out
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
});