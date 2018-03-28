import Component from '../framework/Component';
import AUTH_SERVICE from '../services/AuthService';
import ROUTER from '../index';
import ErrorsMsg from './ErrorsMsg';
import { parseHTML } from '../utils/helpers';

class Signup extends Component {

  constructor() {
    super();

    this.state = {
      stores: [],
      errorAnswer: null
    };

    this.host = document.createElement('div');
    this.host.classList.add('sign-up-container');
    this.host.addEventListener('submit', event => this.handleSubmit(event));

    this.errorsMsg = new ErrorsMsg();

    this.getStores();
  }

  getStores() {
    AUTH_SERVICE.getStores()
      .then(stores => this.updateState({ stores }));
  }

  render() {
    const options = this.getSelectOptions(this.state.stores);
    const { errorAnswer } = this.state;

    const formContainer = document.createElement('form');
    formContainer.classList.add('sign-up-form');

    formContainer.innerHTML = `
      <input type="text" name="username" minlength="2" maxlength="24" placeholder="Username" required>
      <input type="password" name="password" minlength="8" placeholder="Password" required>
      <input type="password" name="password_repeat" minlength="8" placeholder="Confirm password" required>
      <input type="email" name="email" placeholder="Email" required>

      <p class="select-wrapper">
        <select name="store_id" required>
          ${options}
        </select>
      </p>
      <input type="password" name="store_password" minlength="8" placeholder="Store password" required>

      <button type="submit" id="sign-up-button">Sign Up</button>

      <p>Already have an account? <a href="#/login">Log in</a></p>
    `;

     if (errorAnswer) {
        formContainer.append(this.errorsMsg.update({answer: errorAnswer}));
     }

     return formContainer;
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
      .catch(data => {
        this.updateState({ errorAnswer: data.answer });
      });
  }
}

export default Signup;
