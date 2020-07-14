// const generatePage = () => 'Name: Jane, Github: janehub';

// template literals to insert the variables inside the function block
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// create multi-line input: added carriage returns manually within the template literal
const generatePage = (userName, githubName) => {
    return `
      Name: ${userName}
      GitHub: ${githubName}
    `;
  };

// wrap the string in backticks and interpolate the variables with the ${<variable>} syntax
// console.log(generatePage('Jane', 'janehub'));

console.log(generatePage('Jane', 'janehub'));