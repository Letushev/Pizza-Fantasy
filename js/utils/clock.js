export default startClock = () => {
  const currentTimeElement = document.getElementById('current-time');

  const updateTime = () => {
    const now = new Date();

    currentTimeElement.innerHTML = [now.getHours(), now.getMinutes(), now.getSeconds()]
      .map(n => `${n}`.padStart(2, '0')) // add 0 if number is single-digit
      .join(':');
  }

  updateTime();
  window.setInterval(updateTime, 500);
};
