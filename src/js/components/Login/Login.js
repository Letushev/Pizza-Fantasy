import './login.scss';
import pizzaGuy from '../../../images/pizza-guy.svg';
import Component from '../../framework/Component';
import AUTH_SERVICE from '../../api/auth-service';
import Message from '../Message/Message';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      message: null
    };
    
    this.host = document.createElement('div');
    this.host.className = 'login-wrapper';
    
    this._message = new Message('Login');
    this.host.addEventListener('submit', this.handleSubmit.bind(this));
  }

  render() {
    const { message } = this.state;
    const img = document.createElement('img');
    img.src = pizzaGuy;

    const form = document.createElement('form');
    form.innerHTML = `
      <div class="input-container">
        <input type="text" id="username" name="username" minlength="2" maxlength="24" placeholder=" " required>
        <label for="username" data-error="Must contain at least 2 characters">Username</label>
      </div>

      <div class="input-container">
        <input type="password" name="password" id="password" minlength="8" placeholder=" " required>
        <label for="password" data-error="Must contain at least 8 characters">Password</label>
      </div>

      <button type="submit">Log in</button> 
      <p class="help-form-message">New to Pizza Fantasy? <a href="#/signup">Sign&nbsp;up</a></p>`;

    if (message) {
      form.insertAdjacentElement('afterbegin', this._message.update(message));
    }

    return [img, form];
  }

  handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const credentials = {
      username: target.username.value,
      password: target.password.value
    };
     
    AUTH_SERVICE.login(credentials)
      .then(response => {
        if (response.success) {
          this.handleSuccess(response);
        } else {
          this.handleFailure(response);
        }
      });
  }

  handleSuccess(response) {
    this.updateState({ message: response });
    setTimeout(() => {
      window.location.hash = '/signup';
    }, 2000);
  }

  handleFailure(response) {
    this.updateState({ message: response });
  }
}

export default Login;