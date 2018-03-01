$(document).ready(function() {
  var nameInput = prompt("What is your first name");
  var nameCaps = nameInput.toUpperCase().charAt(0) + nameInput.substr(1);
  $(".username").text(nameCaps);

  $("#survey questions form").submit(function(event) {
    var weather = parseInt($("#weather").val());
    var vaca = parseInt($("#vaca").val());
    var activities = parseInt($("#activities").val());
    var people = parseInt($("#people").val());
    var culture = parseInt($("#culture").val());
    var total = weather + vacation + activities + people + culture;
    if (total === 0) {
      $("#zero").show();
    } else if (total > 0 && total <= 5) {
      $("#warm").show();
    } else if (total > 5 && total <=10) {
      $("#intensity").show();
    } else if (total > 10 && total <=15) {
      $("#tourism").show();
    } else if (total > 15 && total <=20) {
      $("#population").show();
    } else {
      $("#experiences").show();
    }
    event.preventDefault();
  });
});
