import API_SERVICE from './api-service';

class AuthService {
  constructor() {
    this._token = localStorage.getItem('token');
    this._claims = JSON.parse(localStorage.getItem('claims'));
    this.isAuthorized = this.isAuthorized.bind(this);
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
      this.logout();
      return false;
    }
    return true;
  }

  logout() {
    this._token = null;
    this._claims = null;
    localStorage.removeItem('token');
    localStorage.removeItem('claims');
  }

  tokenIsNotExpired() {
    return !!this._token ? this.claims.exp * 1000 > Date.now() : false;
  }

  login(userData) {
    return API_SERVICE.loginUser(userData)
      .then(response => {
        if (response.success) {
          this.token = response.token;
          this.claims = this.parseJwtClaims(response.token);
        }

        return response;
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