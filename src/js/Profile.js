import Component from './framework/Component';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import UserInfo from './components/UserInfo/UserInfo';
import API_SERVICE from './api/api-service';

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      userInfo: null
    }

    this.host = document.createElement('div');
    this.host.className = 'profile-container';

    this._header = new Header();
    this._userInfo = new UserInfo();
    this._footer = new Footer();

    this.getUserInfo();
  }

  getUserInfo() {
    API_SERVICE.getUserInfo()
      .then(userInfo => this.updateState({ userInfo }));
  }
  
  render() { 
    const { userInfo } = this.state;

    return [
      this._header.update({ activeLink: 'profile' }),
      this._userInfo.update({ userInfo }),
      this._footer.update()
    ]
  }
}

export default Profile;