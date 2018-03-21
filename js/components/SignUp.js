import Component from '../framework/Component';

class SignUp extends Component {

  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('sign-up-container');
  }

  render() {
    return 'Sign up';
  }
}

export default SignUp;
