import './userInfo.scss';
import Component from '../../framework/Component';

class UserInfo extends Component {
  constructor() {
    super();

    this.host = document.createElement('main');
    this.host.className = 'user-info-container';
  }

  render() {
    const { userInfo } = this.props;
    const table = document.createElement('table');

    if (!!userInfo) {
      console.log(userInfo);  
    }

    return table;
  }
}

export default UserInfo;