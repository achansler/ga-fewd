// get current age value 
// get how old do you plan to live value 
// get how many drinks you have in one day 
// get fav drink from dropdown
// calcuate death age from current age 
// when button is clicked put that number into solution



$("button#click-me").on("click", function() {
	var currentAge = parseInt($("#age").val());
	var deathAge = parseInt($("#max-age").val());
	var kindOfDrink = $("select#item").val();
	var favDrink = parseInt($("#num-per-day").val());
	var totalNumber = ((deathAge - currentAge) * 365) * favDrink;
	$("span#solution").text(totalNumber.toLocaleString());
	$("span#drink").text(kindOfDrink);
});

// $("button").on("click", function() {
// 	var userInput = parseFloat($("input#temperature").val());
// 	var fahrenheit = (userInput * 1.8) + 32;
// 	$("span#converted").text(fahrenheit);
// });
