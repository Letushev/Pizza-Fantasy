import Component from '../framework/Component';

class LogIn extends Component {

  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('log-in-container');
  }

  render() {
    return `
      <form class="log-in-form">

        <input type="text" placeholder="Username" required>
        <input type="password" placeholder="Password" required>

        <button type="submit">Log in</button>

        <p>New to Pizza Fantasy? <a href="#/signup">Sign Up</a></p>

      <form>
    `;
  }
}

export default LogIn;
