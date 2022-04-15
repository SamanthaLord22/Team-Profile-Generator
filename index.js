//Includes packages needed
 const fs = require('fs')
 const inquirer = require('inquirer')
 //const generator = require('./Develop/generator')

 //write file
 const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your job title?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github username?',
        },
    ]);
 };

const generateHTML = ({ name, title, id, email, github}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">My current job title is ${title}.</p>
    <p class="lead">My employee id is ${id}.</p>
    <h3><span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My email address is ${email}</li>
      <li class="list-group-item">My GitHub username is ${github}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

//write file and callback function
const init = () => {
    promptUser()
      .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();
  
