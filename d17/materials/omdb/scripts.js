$("button").on("click", function() {
	var movie = $("input").val();
	$.getJSON("http://www.omdbapi.com/?t=" + movie, function(data) {
		$(".title").text(data["Title"] + " (" + data["Rated"] + ")");
		$(".year").text(data["Year"]);
		$(".poster").attr("src", data["Poster"]);
		$(".plot").text(data["Plot"]);
		var searchHistory = $("<li>" + data["Title"] + "</li>");
		$("ul").append(searchHistory);
	});
});

$("ul").on("click", function(event) {
	$(event.target).text();
	// console.log($(event.target));
});



// $("ul").on("click", function(event) {
  // $(event.target) is the li that was clicked
  // Whereas $(this) is the ul
// });