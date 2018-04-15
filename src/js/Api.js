class Api {
  constructor() {
    this.domain = 'https://pizza-tele.ga';
    this.baseUrl = this.domain + '/api/v1';
    this.urlPaths = {
			storeList: '/store/list',
			userCreate: '/user/create',
			userLogin: '/user/login',
			userInfo: '/user/my_info',
		};
  }

  getStoreList() {
    return this.get(this.urlPaths.storeList);
  }

  get(path) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');

    return fetch(this.baseUrl + path, { method: 'GET', headers })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      });
  }
}

const API = new Api();

export default API;