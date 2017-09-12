var saySomething = function(whatToSay) {
	alert(whatToSay);
};

var number1 = parseInt(prompt("Pick a number, any number..."));
var number2 = parseInt(prompt("Now pick another number to subtract from that first number."));

var subtract = function(number1, number2) {
	return number1 - number2;
};

saySomething("The remainder is " + subtract(number1, number2) + ".");
