import './signup.scss';
import Component from '../../framework/Component';
import API_SERVICE from '../../api/api-service';
import Message from '../Message/Message';

class Signup extends Component {
  constructor() {
    super();

    this.state = {
      stores: [],
      message: null
    };

    this.host = document.createElement('div');
    this.host.className = 'signup-wrapper';

    this._message = new Message('Registration');

    this.getStoreList();
    this.host.addEventListener('submit', this.handleSubmit.bind(this));
  }

  getStoreList() {
    API_SERVICE.getStoreList()
      .then(stores => this.updateState({ stores }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const userData = {
      username: target.username.value,
      password: target.password.value,
      password_repeat: target.password_repeat.value,
      email: target.email.value,
      store_id: parseInt(target.store_id.value),
      store_password: target.store_password.value
    };

    API_SERVICE.signupUser(userData)
      .then(response => {
        if (response.success) {
          this.handleSuccess(response);
        } else {
          this.handleFailure(response);
        }
      })
  }

  render() {
    const form = document.createElement('form');
    const options = this.getSelectOptions(this.state.stores);
    const { message } = this.state;

    form.className = 'signup-form';
    form.innerHTML = `
      <div class="input-container">
        <input type="text" name="username" id="username" minlength="2" maxlength="24" placeholder=" " required>
        <label for="username" data-error="Must contain at least 2 characters">Username</label>
      </div>
     
      <div class="input-container">
        <input type="password" name="password" id="password" minlength="8" placeholder=" " required>
        <label for="password" data-error="Must contain at least 8 characters">Password</label>
      </div>
     
      <div class="input-container">
        <input type="password" name="password_repeat" id="password_repeat" placeholder=" " required>
        <label for="confirm_password" data-error="Passwords must be equal">Confirm password</label>
      </div>
     
      <div class="input-container">
        <input type="email" name="email" id="email" placeholder=" " required>
        <label for="email" data-error="Must contain @ symbol">Email</label>
      </div>
     
      <p class="select-wrapper">
        <select name="store_id" id="store_id" required>
          <option selected disabled value="">Select the store</option>
          ${ options }
        </select>
      </p>
     
      <div class="input-container">
        <input type="password" name="store_password" id="store_password" minlength="8" placeholder=" " required>
        <label for="store_password" data-error="Must contain at least 8 characters">Store password</label>
      </div>
     
      <button type="submit">Sign Up</button>
      <p class="help-form-message">Already have an account? <a href="#/login">Log&nbsp;in</a></p> `;

    if (message) {
      form.insertAdjacentElement('afterbegin', this._message.update(message));
    }
    
    const password = form.querySelector('#password');
    const passwordRepeat = form.querySelector('#password_repeat');
    passwordRepeat.addEventListener('keyup', () => {
      this.checkPasswords(password, password_repeat);
    });
    
    return form;
  }

  checkPasswords(password, password_repeat) {
    if (password.value !== password_repeat.value) {
      password_repeat.setCustomValidity('Passwords must be equal');
    } else {
      password_repeat.setCustomValidity('');
    }
  }

  handleSuccess(response) {
    this.updateState({ message: response });
    setTimeout(() => {
      window.location.hash = '/login';
    }, 2000);
  }

  handleFailure(response) {
    this.updateState({ message: response });
  }

  getSelectOptions(stores) {
    return stores.reduce((options, store) => options += `<option value="${ store.id }">${ store.name }</option>`, '');
  }

}

export default Signup;