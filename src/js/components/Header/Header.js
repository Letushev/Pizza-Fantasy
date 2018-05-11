import './header.scss';
import Component from '../../framework/Component';
import AUTH_SERVICE from '../../api/auth-service';

class Header extends Component {
  constructor() {
    super();
    this.host = document.createElement('header');
  }

  render() {
    const headerWrapper = document.createElement('div');
    const logoLink = document.createElement('a');
    const navigationEl = document.createElement('nav');
    const logoutButton = document.createElement('a');

    headerWrapper.className = 'header-wrapper';
    logoLink.className = 'logo';
    logoutButton.className = 'logout button';

    logoLink.textContent = 'Pizza Fantasy';
    navigationEl.innerHTML = `
      <a class="queue-link" href="#/queue">Queue</a>
      <a class="order-link" href="#/order">Order</a>
      <a class="profile-link" href="#/profile">Profile</a>` ;
    logoutButton.textContent = 'Log out';

    logoLink.href = '#/queue';
    logoutButton.href = '#/login';

    logoutButton.addEventListener('click', () => {
      AUTH_SERVICE.logout();
    });
    
    this.setActiveLink(navigationEl, this.props.activeLink);
    
    navigationEl.appendChild(logoutButton);
    headerWrapper.appendChild(logoLink);
    headerWrapper.innerHTML += `
      <input type="checkbox" id="hamburger-checkbox">
      <label for="hamburger-checkbox">
        <span></span>
        <span></span>
        <span></span>
      </label> `;
    headerWrapper.appendChild(navigationEl);

    return headerWrapper;
  }

  setActiveLink(container, activeLink) {
    switch(activeLink) {
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