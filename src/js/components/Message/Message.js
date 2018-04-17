import './message.scss';
import Component from '../../framework/Component';

class Message extends Component {
  constructor(type) {
    super();
    
    this.type = type;
    this.host = document.createElement('div');
    this.host.className = 'message-container';
  }

  render() {
    const { success, error, validations } = this.props;
    const msg = document.createElement('p');

    if (success) {
      this.host.classList.add('successful');
      msg.className = 'success-message';
      msg.textContent = `${ this.type } successful!`;
      return msg;
    } else if (validations) {
      const list = document.createElement('ul');
      validations.forEach(msg => {
        list.innerHTML += `<li>${ msg }</li>`;
      });
      return list;
    } else {
      msg.className = 'error-message';
      msg.textContent = error;
      return msg;
    }
  }
}

export default Message;