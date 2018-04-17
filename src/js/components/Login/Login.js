import './login.scss';
import pizzaGuy from '../../../images/pizza-guy.svg';
import Component from '../../framework/Component';
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

}

export default Login;