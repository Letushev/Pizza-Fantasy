import Component from '../framework/Component';

class LogIn extends Component {

  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('log-in-container');
  }

  render() {
    return 'Log in';
  }
}

export default LogIn;
