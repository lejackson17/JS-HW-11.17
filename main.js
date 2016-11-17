function highlight() {
  $("h1").text("Hello");
  $(".jumbotron").addClass("highlighted");
}

function unhighlight() {
  $("h1").text("Hello, world!");
  $(".jumbotron").removeClass("highlighted");
}

function hide() {
  $(".jumbotron").fadeOut();
}

function show() {
  $(".jumbotron").slideDown();
}


$(document).ready(function() {
  $("p").on("click", highlight);
}
