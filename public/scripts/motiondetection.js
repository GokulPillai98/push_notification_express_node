function main() {
  var flag = 1;
  if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", handleOrientation, false);
  } else {
    $("body").append("<p>DeviceOrientation is not supported</p>");
  }
  function handleOrientation(event) {
    if (
      Math.abs(event.gamma) > 75 &&
      Math.abs(event.gamma) < 90 &&
      flag &&
      $("#fold").is(":checked")
    ) {
      if (window.DeviceMotionEvent) {
        $("body").append("<p>Added deivce motion listener</p>");
        window.addEventListener("devicemotion", handleMotion, false);
        flag = 0;
      } else {
        $("body").append("<p>DeviceMotion is not supported</p>");
      }
    }
  }
  let moveCounter = 0;
  function handleMotion(e) {
    let acc = e.acceleration;
    if (!acc.x) return;
    if (Math.abs(acc.x) >= 5 && Math.abs(acc.y) >= 5) {
      moveCounter++;
      $("body").append("<p>" + moveCounter + "</p>");
      if (moveCounter > 4) {
        window.removeEventListener("devicemotion", handleMotion, false);
        setTimeout(function() {
          $(".plane").animate(
            {
              left: "-=1000px"
            },
            "100"
          );
        }, 3000);

        moveCounter = 0;
        $.ajax({
          url: "https://morning-thicket-10437.herokuapp.com/sendBrochure"
        }).then(function(data) {
          $("body").append("<p>brochure is ready</p>");
        });
      }
    }
  }
}
$(document).ready(main);
function togglePaperRocket() {
  if (!$("#fold").is(":checked")) {
    $("#fold").prop("checked", true);
  } else {
    $("#fold").prop("checked", false);
  }
}
