import Component from '../framework/Component';

class SignUp extends Component {

  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('sign-up-container');
  }

  render() {
    return `
      <form class="sign-up-form">

        <input type="text" placeholder="Username" required>
        <input type="email" placeholder="Email">
        <input type="password" placeholder="Password" required>
        <input type="password" placeholder="Confirm password" required>

        <p class="select-wrapper">
          <select>
            <option>Pizza Fantasy</option>
          </select>
        </p>
        <input type="password" placeholder="Store password" required>

        <button type="submit">Sign Up</button>

        <p>Already have an account? <a href="#/login">Log in</a></p>

      <form>
    `;
  }
}

export default SignUp;
