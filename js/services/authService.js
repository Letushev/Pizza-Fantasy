
class AuthService {

  constructor() {
    this._token = null;
    this._claims = null;
  }

  set token() {
    this._token = token;
    localStorage.setItem('token', token);
  }

  get token() {

  }

  set claims() {

  }

  get claims() {

  }

  login(userData) {
    return fetch('https://pizza-tele.ga/api/v1/user/login', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: new Headers().append('content-type', 'application/json')
    })
      .then(response => {
        if (response.ok) {
          return response.json()
            .then(answer => Promise.resolve({answer}));
        } else {
          return response.json()
            .then(answer => Promise.reject({answer}));
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
        if (response.ok) {
          return response.json()
            .then(answer => Promise.resolve({answer}));
        } else {
          return response.json()
            .then(answer => Promise.reject({answer}));
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

}

const AUTH_SERVICE = new AuthService();

export default AUTH_SERVICE;
