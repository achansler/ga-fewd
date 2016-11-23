// $("#color-button").on("click", function() {
//   var userInputRed = $("#red").val();
//   var userInputGreen = $("#green").val();
//   var userInputBlue = $("#blue").val();
//   $("#colorful-text").text( userInputRed + userInputGreen + userInputBlue);
// });

// $("#color-button").on("click", function() {
//   var userInputRed = $("#red").val();
//   var userInputGreen = $("#green").val();
//   var userInputBlue = $("#blue").val();
//   var backgroundColor = userInputRed + userInputGreen + userInputBlue;
//   $("body").css("background-color", backgroundColor;
// });

$("a#color-button").on("click", function() {
  var userInputRed = $("input#red").val();
  var userInputGreen = $("input#green").val();
  var userInputBlue = $("input#blue").val();
  var rgb = "rgb(" + userInputRed + "," + userInputGreen + "," + userInputBlue + ")";
  $("#wrapper").css("background-color", rgb); 
  $("p#colorful-text").text(rgb);
});

// $("a#color-button").on("click", function() {
//   var userInputRed = Math.randon * 255;
//   var userInputGreen = Math.randon * 255;
//   var userInputBlue = Math.randon * 255;
//   var rgb = "rgb(" + Math.round(userInputRed) + "," + Math.round(userInputGreen) + "," + Math.round(userInputBlue) + ")";
//   $("#wrapper").css("background-color", rgb); 
//   $("p#colorful-text").text(rgb);
// });

