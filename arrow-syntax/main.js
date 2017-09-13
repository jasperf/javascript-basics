class TaskCollection {
	constructor(tasks = []) {
		// Task defaults to an empty array
		this.tasks = tasks;
	}

	// log() { // log function using old es5 syntax
	// 	this.tasks.forEach(function(task) {
	// 		console.log(task);
	// 	})
	// }

	log() { 
		// function replaced by ES6 function =>
		// parentesis can be omitted as well as we only have one argument
		this.tasks.forEach(task => {
			console.log(task);
		})
		}
}
class Task{
	// defined so we do not get Task undefined error
	}

new TaskCollection([
	// New Object based on contructor
	new Task, new Task, new Task
	]).log();