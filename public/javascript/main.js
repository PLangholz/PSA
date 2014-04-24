$(document).ready( function () {
  $('#milestones').hide();
  $('#glmpse').hide();
  $('#people_nav').click(function() {
    $(".selected").each(function() {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $('#people').show();
    $('#milestones').hide();
    $('#glmpse').hide();
  });
  $('#glmpse_nav').click(function() {
    $(".selected").each(function() {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $('#people').hide();
    $('#milestones').hide();
    $('#glmpse').show();
  });
  $('#milestones_nav').click(function() {
    $(".selected").each(function() {
      $(this).removeClass("selected");
    });
    $(this).addClass("selected");
    $('#people').hide();
    $('#milestones').show();
    $('#glmpse').hide();
  });

})