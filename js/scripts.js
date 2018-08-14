$(document).ready(function() {
  $("form#fortune_survey").submit(function(event) {
    event.preventDefault();
    var badResponses = [];
    var goodResponses = [];

    $("input:checkbox[name=bad-luck]:checked").each(function(){
      var badLuckVal = $(this).val();
      badResponses.push(badLuckVal);
    });

    $("input:checkbox[name=good-luck]:checked").each(function(){
      var goodLuckVal = $(this).val();
      goodResponses.push(goodLuckVal);
    });

    if (badResponses > goodResponses) {
        $("#bad-result").show();
    } else if (goodResponses > badResponses) {
        $("#good-result").show();
    }
    
    $('#fortune_survey').hide();
  });
});
