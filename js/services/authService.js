import { bindAll } from '../utils/helpers';

class AuthService {

  constructor() {
    this._token = localStorage.getItem('token');
    this._claims = JSON.parse(localStorage.getItem('claims'));

    bindAll(this, 'isAuthorized');
  }

  set token(token) {
    this._token = token;
    localStorage.setItem('token', token);
  }

  get token() {
    return this._token;
  }

  set claims(claims) {
    this._claims = claims;
    localStorage.setItem('claims', JSON.stringify(claims));
  }

  get claims() {
    return this._claims;
  }

  isAuthorized() {
    if (!this.tokenIsNotExpired()) {
      this.clearStorage();
      return false;
    }
    return true;
  }

  clearStorage() {
    this._token = null;
    this._claims = null;
    localStorage.removeItem('token');
    localStorage.removeItem('claims');
  }

  tokenIsNotExpired() {
    return !!this._token ? this.claims.exp * 1000 > Date.now() : false;
  }

  login(userData) {
    return fetch('https://pizza-tele.ga/api/v1/user/login', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: new Headers().append('content-type', 'application/json')
    })
      .then(response => {
        if (response.ok) {
          response.json().then(answer => {
            this.token = answer.token;
            this.claims = this.parseJwtClaims(answer.token);
          });
        } else {
          return response.json().then(answer => Promise.reject({answer}));
        }
      });
  }

  signup(userData) {
    return fetch('https://pizza-tele.ga/api/v1/user/create', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: new Headers().append('content-type', 'application/json')
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(answer => Promise.reject({answer}));
        }
      });
  }

  getStores() {
    return fetch('https://pizza-tele.ga/api/v1/store/list')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      });
  }

  parseJwtClaims(jwtToken) {
    if (jwtToken) {
      let base64Url = jwtToken.split('.')[1];
      let base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    }
    return {};
  }

}

const AUTH_SERVICE = new AuthService();

export default AUTH_SERVICE;
