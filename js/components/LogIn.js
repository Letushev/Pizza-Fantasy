import Component from '../framework/Component';
import AUTH_SERVICE from '../services/AuthService';
import router from '../index';
import { handleErrors } from '../utils/helpers';

class Login extends Component {

  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('log-in-container');

    this.host.addEventListener('submit', event => this.handleSubmit(event));
  }

  render() {
    return `
      <form class="log-in-form">

        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>

        <ul class="error-list"></ul>

        <button type="submit">Log in</button>

        <p>New to Pizza Fantasy? <a href="#/signup">Sign Up</a></p>

      <form>
    `;
  }

  handleSubmit(event) {
    event.preventDefault();

    const target = event.target;

    const userData = {
      username: target.username.value.trim(),
      password: target.password.value.trim()
    };

    AUTH_SERVICE.login(userData)
      .then(() => router.navigate('/'))
      .catch(data => handleErrors([data.answer.error]));
  }
}

export default Login;
