$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var pho_id = $(this).children(".pho_id").val();
    console.log(pho_id);
    $.ajax({
      method: "PUT",
      url: "/pho/" + pho_id
    }).then(function(data) {
      location.reload();
    });

  });
});
