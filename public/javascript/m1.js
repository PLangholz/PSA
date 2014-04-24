$(document).ready( function () {
  
  $('#projects').hide();
  $('#interest').show();
  $('#projects_nav').click(function() {
    $(".selected").each(function() {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $('#interest').hide();
    $('#projects').show();
  });
  $('#brainstorm_nav').click(function() {
    $(".selected").each(function() {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $('#interest').show();
    $('#projects').hide();
  });

})