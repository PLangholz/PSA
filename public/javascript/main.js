$(document).ready( function () {
  $('#interest').hide();
  $('#projects').hide();
  $('#people_nav').click(function() {
    $(".selected").each(function() {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $('#people').show();
    $('#interest').hide();
    $('#projects').hide();
  });
  $('#projects_nav').click(function() {
    $(".selected").each(function() {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $('#people').hide();
    $('#interest').hide();
    $('#projects').show();
  });
  $('#interests_nav').click(function() {
    $(".selected").each(function() {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $('#people').hide();
    $('#interest').show();
    $('#projects').hide();
  });

})