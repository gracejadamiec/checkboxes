$(document).ready(function() {
  $("form#fortune_survey").submit(function(event) {
    event.preventDefault();
    var badResponses = 0;
    var goodResponses = 0;

    $("input:checkbox[name=bad-luck]:checked").each(function(){
      // var badLuckVal = $(this).val();
      // badResponses.push(badLuckVal);
      badResponses ++;
    });

    $("input:checkbox[name=good-luck]:checked").each(function(){
      // var goodLuckVal = $(this).val();
      goodResponses ++;
    });

    if (badResponses > goodResponses) {
        $("#bad-result").show();

    } else if (goodResponses > badResponses) {
        $("#good-result").show();

    }  else if (goodResponses === badResponses) {
        $("#neutral-result").show();
    }

    $('#fortune_survey').hide();
  });
});
