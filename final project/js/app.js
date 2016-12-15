
$("button#no").on("click", function() {
	$("h1.big").text("WRONG");
	$("button#try-again").removeClass("hide");
	$("button#yes").addClass("hide");
	$("button#no").addClass("hide");
});

$("button#try-again").on("click", function() {
	$("h1.big").text("Are sandwiches your favorite food?");
	$("button#yes").removeClass("hide");
	$("button#no").removeClass("hide");
	$("button#try-again").addClass("hide");
});

$("button#yes").on("click", function() {
	$("h1.big").text("Good Choice!");
	$("button#make").removeClass("hide");
	$("button#yes").addClass("hide");
	$("button#no").addClass("hide");
});

$('.center').slick({
  centerMode: true,
  accessibility: true,
  focusOnSelect: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
        
