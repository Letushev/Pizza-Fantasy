class ApiService {
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

  signupUser(userData) {
    return this.post(this.urlPaths.userCreate, userData);
  }

  loginUser(userData) {
    return this.post(this.urlPaths.userLogin, userData);
  }

  get(path) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');

    return fetch(this.baseUrl + path, { 
      method: 'GET',
      headers 
    }).then(response => response.json());
  }

  post(path, userData) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');

    const body = {};
    for (const [key, value] of userData) {
      body[key] = value;
    }
    
    // store_id value must be integer
    if (body.hasOwnProperty('store_id')) {
      body.store_id = parseInt(body.store_id);
    }

    return fetch(this.baseUrl + path, {
      method: 'POST',
      body: JSON.stringify(body),
      headers
    }).then(response => response.json());
    
  }
}

const API_SERVICE = new ApiService();
export default API_SERVICE;