import Component from '../../framework/Component';
import '../../../images/pizza-guy.png';

class Login extends Component {
  constructor() {
    super();
    
    this.host = document.createElement('div');
    this.host.className = 'login-wrapper';
  }

  render() {
    const img = document.createElement('img');
    img.setAttribute('src', 'images/pizza-guy.png');

    const form = document.createElement('form');
    form.innerHTML = `
      <div class="input-container">
        <input type="text" id="username" name="username" required>
        <label for="username">Username</label>
      </div>

      <div class="input-container">
        <input type="password" name="password" id="password" required>
        <label for="password">Password</label>
      </div>

      <button type="submit">Log in</button> 
      <p>New to Pizza Fantasy? <a href="#/signup">Sign Up</a></p>`;

    return [img, form];
  }

}

export default Login;