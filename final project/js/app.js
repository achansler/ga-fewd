
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

$("#one").on("click", function() {
  $("img#big").attr("src", "img/sandwich ingredients-01.png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
});

$("#two").on("click", function() {
  $("img#big").attr("src", "img/sandwich ingredients-02.png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
});

$("#three").on("click", function() {
  $("img#big").attr("src", "img/sandwich ingredients-04.png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
});

$("#four").on("click", function() {
  $("img#big").attr("src", "img/sandwich ingredients-05.png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
});

$("#five").on("click", function() {
  $("img#big").attr("src", "img/sandwich ingredients-06.png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
});

$("#six").on("click", function() {
  $("img#big").attr("src", "img/sandwich ingredients-03.png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
});

$("#seven").on("click", function() {
  $("img#big").attr("src", "img/sandwich ingredients-07.png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
});

$("#eight").on("click", function() {
  $("img#big").attr("src", "img/sandwich ingredients-08.png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
});

$("#nine").on("click", function() {
  $("img#big").attr("src", "img/sandwich ingredients-09.png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
});

$("#ten").on("click", function() {
  $("img#big").attr("src", "img/sandwich ingredients-10.png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
});

$("#eleven").on("click", function() {
  $("img#big").attr("src", "img/sandwich ingredients-11.png");
  $("button#next").removeClass("hide");
  $("h2#empty").addClass("hide");
});
