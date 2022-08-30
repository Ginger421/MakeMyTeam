
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Employee = require("./lib/employee");

let team = []; //empty array to push objects into then loop through
//team = [{}, {},]

function menuOptions() {
	inquirer
		.prompt(
			{
				type: "list",
				name: "menu",
				message: "Please choose an action",
				choices: [
					"Add a manager",
					"Add an engineer",
					"Add an intern",
					"I'm finished for now.",
				]
			}
		)
		.then((input) => {
			console.log(input.menu);
			switch (input.menu) {
				case "Add a manager":
					buildManagerCard();
					break;
				case "Add an engineer":
					buildEngineerCard();
					break;
				case "Add an intern":
					buildInternCard();
					break;
				default:
					console.log(team);
					finishTeam();
					break;
			} //ends switch
		}); //ends .then(input=>directly after menuOptions
		
} //ends menuOptions function

menuOptions();

function buildManagerCard() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "What is the team manager's name?",
				name: "managerName",
			},
			{
				type: "input",
				message: "Manager id?",
				name: "managerId",
			},
			{
				type: "input",
				message: "Manager email address?",
				name: "managerEmail",
			},
			{
				type: "input",
				message: "Office number?",
				name: "officeNumber",
			},
		]) //ends inquirer .prompt for buildManagerCard
		.then((input) => {
			console.log(input);
			const newManager = new Manager(
				input.managerName,
				input.managerId,
				input.managerEmail,
				input.officeNumber
			);
			team.push(newManager); //team is empty array created at top of this file. it is used to put the team in. push adds to end of the array
			menuOptions();
		}); //ends .then(input=> for buildManagerCard
} //ends buildManagerCard function

function buildEngineerCard() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "What is the engineer's name?",
				name: "engineerName",
			},
			{
				type: "input",
				message: "What is the engineer's id?",
				name: "engineerId",
			},
			{
				type: "input",
				message: "Please add a link to the engineer's GitHub.",
				name: "git",
			},
			{
				type: "input",
				message: "What is the engineer's email",
				name: "engineerEmail",
			},
		]) //ends inquirer .prompt fpr buildEngineerCard
		.then((input) => {
			console.log(input);
			const newEngineer = new Engineer(
				input.engineerName,
				input.engineerId,
				input.git,
				input.engineerEmail
			);
			team.push(newEngineer); //push to array team
			menuOptions();
		}); //end .then for buildEngineerCard function
} //end buildEngineerCard function

function buildInternCard() {
	inquirer
		.prompt([
			{
				type: "input",
				message: "What  is the intern's name?",
				name: "internName",
			},
			{
				type: "input",
				message: "What is the intern's id?",
				name: "internId",
			},
			{
				type: "input",
				message: "What is the intern's email?",
				name: "internEmail",
			},
			{
				type: "input",
				message: "What school does the intern attend?",
				name: "school",
			},
		]) //ends .prompt for buildInternCard

		.then((input) => {
			console.log(input);
			const newIntern = new Intern(
				input.internName,
				input.internId,
				input.internEmail,
				input.school
			);
			team.push(newIntern);
			menuOptions();
		}); //ends .then for buildInternCard
} //ends buildInternCard function

function finishTeam() {

console.log(team);
const [Manager, Engineer, Intern ]= team;
console.log(Manager, Engineer, Intern)

console.log("Your team is fnished!");

let template=``

template +=

	  `<div style=" border: 2px solid blue;">
	  <h2>Role: ${Manager.getRole()}</Role:1></h2>
  <ul>
	  <li>Name: ${Manager.getName()}</li>
	  <li>ID: ${Manager.getId()}</li>
	  <li>Email: ${Manager.getEmail()}</li>
	  <li>Office Number: ${Manager.getOfficeNumber()}</li>
  </ul>
  </div>
	  
	
	  <div style=" border: 2px solid blue;">
	  <h2>Role: ${Engineer.getRole()}</Role:1></h2>
  <ul>
	  <li>Name: ${Engineer.getName()}</li>
	  <li>ID: ${Engineer.getId()}</li>
	  <li>Email: ${Engineer.getEmail()}</li>
	  <li>Office Number: ${Engineer.getGitHub()}</li>
  </ul>
  </div>
	  
	  <div style=" border: 2px solid blue;">
	  <h2>Role: ${Intern.getRole()}</Role:1></h2>
  <ul>
	  <li>Name: ${Intern.getName()}</li>
	  <li>ID: ${Intern.getId()}</li>
	  <li>Email: ${Intern.getEmail()}</li>
	  <li>Office Number: ${Intern.getSchool()}</li>
  </ul>
  </div>`
	  
let htmlTemplate =

`
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
      ${template}  
      </body>
</html>
        `;

generatePage(htmlTemplate);
}

function generatePage(data) {
fs.writeFile("index.html", data, (err) =>
	err ? console.error(err) : console.log("Success!")
);
}
// menuOptions();
