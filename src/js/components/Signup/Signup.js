import './signup.scss';

import Component from '../../framework/Component';

class Signup extends Component {
  constructor() {
    super();
    
    this.host = document.createElement('div');
    this.host.className = 'signup-wrapper';
  }

  render() {
    const form = document.createElement('form');
    form.innerHTML = `
      <div class="input-container">
        <input type="text" name="username" id="username" minlength="2" maxlength="24" placeholder=" " required>
        <label for="username">Username</label>
      </div>
     
      <div class="input-container">
        <input type="password" name="password" id="password" minlength="8" placeholder=" " required>
        <label for="password">Password</label>
      </div>
     
      <div class="input-container">
        <input type="password" name="password_repeat" id="confirm_password" placeholder=" " required>
        <label for="confirm_password">Confirm password</label>
      </div>
     
      <div class="input-container">
        <input type="email" name="email" id="email" placeholder=" " required>
        <label for="email">Email</label>
      </div>
     
      <p class="select-wrapper">
        <select name="store_id" id="store_id" required>
          <option selected disabled value="">Select the store</option>
        </select>
      </p>
     
      <div class="input-container">
        <input type="password" name="store_password" id="store_password" minlength="8" placeholder=" " required>
        <label for="store_password">Store password</label>
      </div>
     
      <button type="submit">Sign Up</button>
      <p>Already have an account? <a href="#/login">Log&nbsp;in</a></p> `;
     
    return form;
  }

}

export default Signup;