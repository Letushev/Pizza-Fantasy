(function() {
  const time = document.getElementById('current-time');
  const updateTime = () => {
    const now = new Date();
    time.innerHTML = [now.getHours(), now.getMinutes(), now.getSeconds()]
      .map(n => `${n}`.padStart(2, '0'))
      .join(':');
  }
  updateTime();
  window.setInterval(updateTime, 500);
})()
