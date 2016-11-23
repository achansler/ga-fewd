// var response = prompt("What would you like the title to be?");
// $("h1").text(response);

// $("a css selector goes in here").text(response);


$("button").on("click", function() {
  var title = $("input").val();
  $("h1").text(title);
});

// "when someone clicks on this button, run everything inside of this function"

$("p").css("color", "red");

$("p.awesome").css("background-color", "purple");