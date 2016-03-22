
$(document).ready(function() {
  $(".clickToWhite").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

  $(".clickToBlack").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
});
