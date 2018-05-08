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
      userInfo.created_at = this.renderDate(userInfo.created_at);
      userInfo.last_login = this.renderDate(userInfo.last_login);

      for (const key in userInfo) {
        table.innerHTML += `
          <tr>
            <th>${ key.replace('_', ' ') }</th>
            <td>${ userInfo[key] }</td>
          </tr>`;
      } 
    }

    return table;
  }

  renderDate(date) {
    const dateObj = new Date(date);
    return [
      dateObj.getDate(), 
      dateObj.getMonth() + 1, 
      dateObj.getFullYear()
    ].map(n => `${ n }`.padStart(2, '0')).join('.');
  }
}

export default UserInfo;