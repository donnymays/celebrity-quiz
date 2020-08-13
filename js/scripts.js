(document).ready(function() {
  $("form#answer").submit(funtion(event) {
      const age = parseInt($("input#age").val());
      const gender = $("select#gender").val();
  
        if (gender === "male" && age > 39) {
          $("#answer").show();
        }
      }
  
      $("#celebrity").text(answer);
      $("#answer").show();
  
      event.preventDefault();
  });
}):