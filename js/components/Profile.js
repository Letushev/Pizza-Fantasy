import Component from '../framework/Component';
import AUTH_SERVICE from '../services/AuthService';
import { editProfileDate } from '../utils/helpers';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      info: null
    };

    this.host = document.createElement('div');
    this.host.classList.add('profile-container');

    this.getInfo();
  }

  getInfo() {
    AUTH_SERVICE.getProfileInfo()
      .then(response => this.computeNextState(response));
  }

  computeNextState(state) {
    state.created_at = editProfileDate(state.created_at);
    state.last_login = editProfileDate(state.last_login);

    this.updateState({ info: state });
  }

  render() {
    const { info } = this.state;
    return info
      ?  `<table class="profile-table">
            <tr>
              <th>Username</th>
              <td>${ info.username }</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>${ info.email }</td>
            <tr>
            <tr>
              <th>Created at</th>
              <td>${ info.created_at }</td>
            </tr>
            <tr>
              <th>Last login</th>
              <td>${ info.last_login }</td>
            </tr>
          </table>
          <a href="#/">Back to pizzas queue</a>`
      : '';
  }

}

export default Profile;
