$(document).ready(function() {
  $(".first").click(function() {
    $(".wedo1").toggle(500);
    $(".what1").toggle(500);
  });
  $(".second").click(function() {
    $(".wedo2").toggle(500);
    $(".what2").toggle(500);
  });
  $(".third").click(function() {
    $(".wedo3").toggle(500);
    $(".what3").toggle(500);
  });
  $("form").submit(
      function(event){
        var name=$(".name").val();
          alert(name +" we have received your message");
          event.preventDefault();
      }
  );

  
})

