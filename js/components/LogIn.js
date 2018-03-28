import Component from '../framework/Component';
import AUTH_SERVICE from '../services/AuthService';
import ROUTER from '../index';
import ErrorsMsg from './ErrorsMsg';

class Login extends Component {

  constructor() {
    super();

    this.state = {
      errorAnswer: null
    };

    this.host = document.createElement('div');
    this.host.classList.add('log-in-container');
    this.host.addEventListener('submit', event => this.handleSubmit(event));

    this.errorsMsg = new ErrorsMsg();
  }

  render() {
    const { errorAnswer } = this.state;
    const formContainer = document.createElement('form');
    formContainer.classList.add('log-in-form');

    formContainer.innerHTML = `
      <input type="text" name="username" placeholder="Username" required>
      <input type="password" name="password" placeholder="Password" required>

      <button type="submit">Log in</button>

      <p>New to Pizza Fantasy? <a href="#/signup">Sign Up</a></p>
    `;

    if (errorAnswer) {
      formContainer.append(this.errorsMsg.update({ answer: errorAnswer }));
    }

    return formContainer;
  }

  handleSubmit(event) {
    event.preventDefault();

    const target = event.target;

    const userData = {
      username: target.username.value.trim(),
      password: target.password.value.trim()
    };

    AUTH_SERVICE.login(userData)
      .then(() => ROUTER.navigate('/'))
      .catch(data => {
        this.updateState({ errorAnswer: data.answer });
      });
  }
}

export default Login;
