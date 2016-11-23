// $("a#color-button").on("click", function() {
//   var userInputRed = $("input#red").val();
//   var userInputGreen = $("input#green").val();
//   var userInputBlue = $("input#blue").val();
//   var rgb = "rgb(" + userInputRed + "," + userInputGreen + "," + userInputBlue + ")";
//   $("#wrapper").css("background-color", rgb); 
//   $("p#colorful-text").text(rgb);
// });

// When you click the button
// grab the value in the input
// convert the value from the input from F to Celcius 
// Display the f number is the paragraph 

$("button").on("click", function() {
	var userInput = $("input#temperature").val();
	var fahrenheit = (userInput - 32) / 1.8000;
	$("span#converted").text(fahrenheit);
});