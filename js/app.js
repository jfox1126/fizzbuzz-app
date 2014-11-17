$(document).ready(function () {
	var countTo = +prompt("Pick a number");
	console.log(countTo);
	var fizzBuzz = function (countTo) {
		for (i = 1; i<=countTo; i++) {
			var printItem
			if (i % 15 == 0) {
				console.log("fizzbuzz");
				printItem = '<div>fizzbuzz</div>';
				$('.printout').append(printItem);
			} else if (i % 3 == 0) {
				console.log("fizz");
				printItem = '<div>fizz</div>';
				$('.printout').append(printItem);
			} else if (i % 5 == 0) {
				console.log ("buzz");
				printItem = '<div>buzz</div>';
				$('.printout').append(printItem);
			} else {
				console.log(i)
				printItem = '<div>' + i +'</div>';
				$('.printout').append(printItem);
			}
		};
	};
	while (countTo % 1 !== 0) {
		alert("This is not an integer!");
		var countTo = +prompt("Pick a number");
	};
	fizzBuzz(countTo);
	/*if (countTo % 1 === 0) {
		fizzBuzz(countTo);
	} else {
		alert("This is not an integer!");
		var countTo = +prompt("Pick a number");
		fizzBuzz(countTo);
	};*/
})

