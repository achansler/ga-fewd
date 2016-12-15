var trip = [
  {
    city: "London",
    country: "UK",
    photo: "http://s3.evcdn.com/images/block/I0-001/024/126/410-9.jpeg_/waset-london-2017-conference-10.jpeg"
  },
  {
    city: "Budapest",
    country: "Hungary",
    photo: "http://s4.evcdn.com/images/block/I0-001/034/301/859-2.jpeg_/waset-budapest-2017-conference-59.jpeg"
  },
  {
    city: "Lisbon",
    country: "Portugal",
    photo: "http://s2.evcdn.com/images/block/I0-001/033/766/357-7.jpeg_/waset-lisbon-2017-conference-57.jpeg"
  }
];



//the old way //


// $("#first").on("click", function() {
//   $("h1").text(trip[0]["city"] + "," + " " + trip[0]["country"]);
//   $("img").attr("src", trip[0]["photo"]);
// });

// $("#second").on("click", function() {
//   $("h1").text(trip[1]["city"] + "," + " " + trip[1]["country"]);
//   $("img").attr("src", trip[1]["photo"]);
// });

// $("#third").on("click", function() {
//   $("h1").text(trip[2]["city"] + "," + " " + trip[2]["country"]);
//   $("img").attr("src", trip[2]["photo"]);
// });

// NOW DO IT WITH FUNCTIONS /////////////////////

var combineWithComma = function(wordOne, wordTwo) {
  return wordTwo + ", " + wordOne;
}

var changeStop = function(number) {
  var city = trip[number]["city"];
  var country = trip[number]["country"];
  var combined = combineWithComma(city, country);
  $("h1").text(combined);
  $("img").attr("src", trip[number]["photo"]);
}

// // above is a function definition - defines the function 

$("button#first").on("click", function() {
  changeStop(0);
});

$("button#second").on("click", function() {
  changeStop(1);
});

$("button#third").on("click", function() {
  changeStop(2);
});



