// JavaScript single line comment

/*
JavaScript multi-line comment
*/

// 'alert()' pops up a little window with an OK button.
alert('This is an alert.');

// 'prompt()' is for user input, has a text field for the user to enter some text.
var name;

while (!name) {		//'!name' means 'not name', i.e., no name has been entered
	name = prompt('What is your name?');
}

// 'console.log()' writes out the content of a variable for debugging
//identical to Actionscript's 'trace()'
console.log(name);

document.write('Hello, ' + name);


for (var i = 0; i < 5; i++) {
//	document.write('<br>' + i);
	document.write('<h1>' + i + '</h1>');
}




function isNameCool () {
	var name = prompt('What is your name?');
	
	if (name == 'Deanna') {
		document.write("That's an awesome name!");
	} else {
		document.write("I don't like your name.");
	}
}

isNameCool();		//calling the function

var writeNameMultipleTimes = function () {
	for (var i = 0; i < 5; i++ ) {
	document.write('<br><strong>Thomas</strong>');
	}
};		//add a semicolon at the end because this is a definition of a variable.

writeNameMultipleTimes();		//calling the variable, which includes a function.





















