import Component from '../framework/Component';
import AUTH_SERVICE from '../services/authService';
import router from '../index';

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
        <input type="password" password="password" placeholder="Password" required>

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
      .then(() => router.navigate('/'));
  }
}

export default Login;
