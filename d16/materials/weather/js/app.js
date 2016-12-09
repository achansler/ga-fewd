$("button").on("click", function() {
	var location = $("input").val();
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&apikey=ba68b5c95d1b4adf0c228a0b5084f55a", function(data) {
  console.log(data);
  $(".temperature").text(data["main"]["temp"]);
  $("img.icon").attr("src", "http://openweathermap.org/img/w/" + data["weather"][0]["icon"] + ".png");
});
});
