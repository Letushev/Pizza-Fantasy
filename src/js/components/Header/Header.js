import './header.scss';
import Component from '../../framework/Component';
import AUTH_SERVICE from '../../api/auth-service';

class Header extends Component {
  constructor() {
    super();

    this.host = document.createElement('header');
  }

  render() {
    const wrapper = document.createElement('div');
    const logo = document.createElement('a');
    const navigation = document.createElement('nav');
    const logout = document.createElement('a');

    wrapper.className = 'header-wrapper';
    logo.className = 'logo';
    logout.className = 'logout button';

    logo.textContent = 'Pizza Fantasy';
    navigation.innerHTML = `
      <a class="queue-link" href="#/queue">Queue</a>
      <a class="order-link" href="#/order">Order</a>
      <a class="profile-link" href="#/profile">Profile</a>` ;
    logout.textContent = 'Log out';

    logo.href = '#/queue';
    logout.href = '#/login';

    logout.addEventListener('click', () => {
      AUTH_SERVICE.logout();
    });
    
    this.setActiveLink(navigation, this.props.active);
    navigation.appendChild(logout);
    wrapper.append(logo, navigation);

    return wrapper;
  }

  setActiveLink(container, active) {
    switch(active) {
      case 'queue':
        container.querySelector('.queue-link').classList.add('active');
        break;
      case 'order':
        container.querySelector('.order-link').classList.add('active');
        break;
      case 'profile':
        container.querySelector('.profile-link').classList.add('active');
        break;
    }
  }
}

export default Header;