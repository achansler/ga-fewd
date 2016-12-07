$(".button-group").on("mouseover", function() {
  $(this).children("nav").addClass("open");
});

$(".button-group").on("mouseleave", function() {
	$("nav").removeClass("open");
})

