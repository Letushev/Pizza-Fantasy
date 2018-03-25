
class AuthService {

  constructor() {

  }

  login(userData) {
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
