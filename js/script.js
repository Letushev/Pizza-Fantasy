function startTime() {
  var today = new Date();
  var h = today.getHours().toString().padStart(2, '0');
  var m = today.getMinutes().toString().padStart(2, '0');
  var s = today.getSeconds().toString().padStart(2, '0');
  document.getElementById('time').innerHTML = `${h}:${m}:${s}`;
  window.setTimeout(() => startTime(), 500);
}

startTime();