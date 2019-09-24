//Of course I can code this more programatically, but this seems good to me.
$().ready(function() {
  $(".send").click(function() {
    setTimeout(function() {
      $("#plate").removeClass("front");
      $("#container").removeClass("beginning");
      $(".curvable").addClass("curved");
      setTimeout(function() {
        $("#left-wing").addClass("rotate_left_wing");
        $("#right-wing").addClass("rotate_right_wing");
        $("#container").addClass("hover");
        setTimeout(function() {
          $("#container").addClass("fly_away_first");
          setTimeout(function() {
            $("#container").addClass("fly_away");
            // setTimeout(function() {
            //   $("#plate").addClass("front");
            //   $("#container")
            //     .removeClass("fly_away fly_away_first hover")
            //     .addClass("beginning");
            //   $(".curvable").removeClass("curved");
            // }, 3000);
          }, 600);
        }, 2000);
      }, 2800);
    }, 200);
  });
});
