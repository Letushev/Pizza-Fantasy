import Component from '../framework/Component';
import AUTH_SERVICE from '../services/AuthService';
import ROUTER from '../index';
import { handleErrors } from '../utils/helpers';


class Signup extends Component {

  constructor() {
    super();

    this.state = {
      stores: []
    };

    this.host = document.createElement('div');
    this.host.classList.add('sign-up-container');
    this.host.addEventListener('submit', event => this.handleSubmit(event));

    this.getStores();
  }

  getStores() {
    AUTH_SERVICE.getStores()
      .then(stores => this.updateState({ stores }));
  }

  render() {
    const options = this.getSelectOptions(this.state.stores);

    return `
      <form class="sign-up-form">

        <div class="errors-container"></div>

        <div class="input-container">
          <input type="text" name="username" id="username" required>
          <label for="username">Username</label>
        </div>

        <div class="input-container">
          <input type="password" name="password" id="password" required>
          <label for="password">Password</label>
        </div>

        <div class="input-container">
          <input type="password" name="password_repeat" id="confirm_password" required>
          <label for="confirm_password">Confirm password</label>
        </div>

        <div class="input-container">
          <input type="email" name="email" id="email" required>
          <label for="email">Email</label>
        </div>

        <p class="select-wrapper">
          <select name="store_id" id="store_id" required>
            <option selected disabled value="">Select the store</option>
            ${options}
          </select>
        </p>

        <div class="input-container">
          <input type="password" name="store_password" id="store_password" required>
          <label for="store_password">Store password</label>
        </div>

        <button type="submit" id="sign-up-button">Sign Up</button>

        <p>Already have an account? <a href="#/login">Log in</a></p>
      </form>
    `;
  }

  getSelectOptions(stores) {
    return stores.reduce((stores, store) => stores += `<option value="${ store.id }">${ store.name }</option>`, '');
  }

  handleSubmit(event) {
    event.preventDefault();

    const target = event.target;

    const userData = {
      username: target.username.value.trim(),
      password: target.password.value.trim(),
      password_repeat: target.password_repeat.value.trim(),
      email: target.email.value.trim(),
      store_id: parseInt(target.store_id.value),
      store_password: target.store_password.value.trim()
    };

    AUTH_SERVICE.signup(userData)
      .then(() => ROUTER.navigate('/login'))
      .catch(response => handleErrors(response.answer));
  }
}

export default Signup;
