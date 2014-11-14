$(document).ready(function () {
	for (i = 1; i<=100; i++) {
		var printItem
		if (i % 15 == 0) {
			console.log("fizzbuzz");
			printItem = '<div>Fizzbuzz</div>';
			$('.printout').append(printItem);
		} else if (i % 3 == 0) {
			console.log("fizz");
			printItem = '<div>Fizz</div>';
			$('.printout').append(printItem);
		} else if (i % 5 == 0) {
			console.log ("buzz");
			printItem = '<div>Buzz</div>';
			$('.printout').append(printItem);
		} else {
			console.log(i)
			printItem = '<div>' + i +'</div>';
			$('.printout').append(printItem);
		}
	};
})

