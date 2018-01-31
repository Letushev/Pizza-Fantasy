(function() {
  var time = document.getElementById('time');
  function startTime() {
    var today = new Date();
    var h = today.getHours().toString().padStart(2, '0');
    var m = today.getMinutes().toString().padStart(2, '0');
    var s = today.getSeconds().toString().padStart(2, '0');
    time.innerHTML = `${h}:${m}:${s}`;  
  }
  startTime();
  window.setInterval(() => startTime(), 500);
})()