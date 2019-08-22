(function () {
  let eventStartTime = new Date('September 26, 2019 09:00:00').getTime();
  let eventEndTime = new Date('September 27, 2019 23:59:59').getTime();
  let counterIntervelRef;

  let updateTimerSectionPerSec = function () {
    let currentTime = new Date().getTime();
    let timeDiff = eventStartTime - currentTime;
    const numberOfDots = 4;

    if (timeDiff >= 0) {
      let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((timeDiff % (1000 * 60)) / 1000);

      document.getElementById("dayCount").innerHTML = days;

      document.getElementById("hourCount").innerHTML = ("0" + hours).slice(-2);

      document.getElementById("minuteCount").innerHTML = ("0" + mins).slice(-2);

      document.getElementById("secondCount").innerHTML = ("0" + secs).slice(-2);

      let selectHiddenDot = (secs) % numberOfDots;
      for (let i = 1; i <= numberOfDots; i++) {
        $('#dot' + i).removeClass('visibility-hidden');
      }
      $('#dot' + (selectHiddenDot + 1)).addClass('visibility-hidden');
    } else if ((eventEndTime - currentTime) >= 0) {
      $('.yellow-ball').addClass('display-none');
      $('.timer-container').addClass('display-none');
      $('.event-start-container').removeClass('display-none');
    } else {
      clearInterval(counterIntervelRef);
      $('.yellow-ball').addClass('display-none');
      $('.timer-container').addClass('display-none');
      $('.event-start-container').addClass('display-none');
      $('.event-end-container').removeClass('display-none');
    }
  };



  /**
   * Document on ready
   */
  $(function () {
    counterIntervelRef = setInterval(updateTimerSectionPerSec, 1000);
    updateTimerSectionPerSec();
  });
})();