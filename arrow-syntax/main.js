class TaskCollection {
	constructor(tasks = []) {
		// Tasks defaults to an empty array
		this.tasks = tasks;
	}

	// log() { // log function using old ES5 syntax
	// 	this.tasks.forEach(function(task) {
	// 		console.log(task);
	// 	})
	// }

	log() { 
		// function replaced by ES6 function =>
		// parentesis can be omitted as well as we only have one argument
		// and as we only have one line of logic we can move curly braces
		// and move all to one line
		this.tasks.forEach(task => console.log(task))
		}
}
class Task{
	// defined so we do not get Task undefined error
	}

new TaskCollection([
	// New Object based on contructor
	new Task, new Task, new Task
	]).log();