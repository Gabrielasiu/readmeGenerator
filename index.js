// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const generateMarkdown = require ('./needed/readmeGenerator.js');
const fs = require ('fs');
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: "What's the title of your project?" ,
    name: 'title',
},
{
    type: 'input',
    message: "Write an introduction for your project:" ,
    name: 'intro',
},
{
    type: 'input',
    message: "Describe your project:" ,
    name: 'description',
},
{
    type: 'input',
    message: "What's your gitHub username?" ,
    name: 'userName',
},
{
    type: 'input',
    message: "What's your gitHub repository name?" ,
    name: 'repoName',
},
{
    type: 'input',
    message: "Describe the usage of your project" ,
    name: 'usage',
},
{
    type: 'input',
    message: "Write the credits for your project" ,
    name: 'credits',
},
{
    type: 'confirm',
    message: "Does your repo have a license?" ,
    name: 'license',
},
];

function inquireFunc (){
    inquirer
        .prompt(questions)
        .then(function(answers){
            writeToFile("./newREADME/README.md", answers)
        })
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
const readmeContent = generateMarkdown(data);

fs.writeFile(fileName, readmeContent, err => {
   if (err) console.error(err);
   else console.log(`Thanks for using the readmeGenerator\n Find your README inside 
   the ${fileName} directory`); 
});
}

// TODO: Create a function to initialize app
function init() {
    inquireFunc();
}

// Function call to initialize app
init();
