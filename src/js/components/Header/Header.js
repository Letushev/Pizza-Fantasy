import './header.scss';
import Component from '../../framework/Component';
import AUTH_SERVICE from '../../api/auth-service';

class Header extends Component {
  constructor() {
    super();

    this.host = document.createElement('header');
  }

  render() {
    const logo = document.createElement('a');
    const profile = document.createElement('a');
    const logout = document.createElement('a');

    logo.textContent = 'Pizza Fantasy';
    profile.textContent = 'Profile';
    logout.textContent = 'Log out';

    logo.href = '#/queue';
    profile.href = '#/profile';
    logout.href = '#/login';

    logout.addEventListener('click', () => {
      AUTH_SERVICE.logout();
    });

    return [logo, profile, logout];
  }
}

export default Header;