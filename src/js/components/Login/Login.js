import './login.scss';
import pizzaGuy from '../../../images/pizza-guy.svg';

import Component from '../../framework/Component';

class Login extends Component {
  constructor() {
    super();
    
    this.host = document.createElement('div');
    this.host.className = 'login-wrapper';
  }

  render() {
    const img = document.createElement('img');
    img.src = pizzaGuy;

    const form = document.createElement('form');
    form.innerHTML = `
      <div class="input-container">
        <input type="text" id="username" name="username" minlength="2" maxlength="24" placeholder=" " required>
        <label for="username">Username</label>
      </div>

      <div class="input-container">
        <input type="password" name="password" id="password" minlength="8" placeholder=" " required>
        <label for="password">Password</label>
      </div>

      <button type="submit">Log in</button> 
      <p class="help-form-message">New to Pizza Fantasy? <a href="#/signup">Sign&nbsp;up</a></p>`;

    return [img, form];
  }

}

export default Login;