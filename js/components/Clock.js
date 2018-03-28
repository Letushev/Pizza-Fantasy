import Component from '../framework/Component';

class Clock extends Component {
  constructor() {
    super();

    this.state = {
      currentTime: this.getCurrentTime()
    };

    this.host = document.createElement('div');
    this.host.classList.add('clock');

    window.setInterval(function timer() {
      const currentTime = this.getCurrentTime();
      this.updateState({ currentTime });
    }.bind(this), 500);
  }

  render() {
    const { currentTime } = this.state;

    return `
      <i class="fas fa-hourglass-half"></i>
      <time id="current-time">
        ${currentTime}
      </time>
    `;
  }

  getCurrentTime() {
    const now = new Date();

    return [now.getHours(), now.getMinutes(), now.getSeconds()]
      .map(n => `${n}`.padStart(2, '0')) // add 0 if number is single-digit
      .join(':');
  }
}

export default Clock;
