import AUTH_SERVICE from './auth-service';

class ApiService {
  constructor() {
    this.domain = 'https://pizza-tele.ga';
    this.baseUrl = this.domain + '/api/v1';
    this.urlPaths = {
			storeList: '/store/list',
			userCreate: '/user/create',
			userLogin: '/user/login',
      userInfo: '/user/my_info',
      ingredientList: '/ingredient/list',
      tagList: '/tag/list',
      pizzaCreate: '/pizza/create'
		};
  }

  getStoreList() {
    return this.get(this.urlPaths.storeList);
  }

  getIngredientList() {
    return this.get(this.urlPaths.ingredientList, AUTH_SERVICE.token);
  }

  getUserInfo() {
    return this.get(this.urlPaths.userInfo, AUTH_SERVICE.token);
  }

  getTagList() {
    return this.get(this.urlPaths.tagList, AUTH_SERVICE.token);
  }

  signupUser(userData) {
    return this.post(this.urlPaths.userCreate, JSON.stringify(userData));
  }

  loginUser(userData) {
    return this.post(this.urlPaths.userLogin, JSON.stringify(userData));
  }

  createPizza(pizzaData) {
    return this.post(this.urlPaths.pizzaCreate, pizzaData, AUTH_SERVICE.token);
  }

  get(path, token) {
    const headers = new Headers();
    headers.append('content-type', 'application/json');

    if (token) {
			headers.append('Authorization', `Bearer ${ token }`);
    }
    
    return fetch(this.baseUrl + path, { 
      method: 'GET',
      headers 
    }).then(response => response.json());
  }

  post(path, userData, token) {
    const headers = new Headers();

    if (token) {
			headers.append('Authorization', `Bearer ${ token }`);
    }

    return fetch(this.baseUrl + path, {
      method: 'POST',
      body: userData,
      headers
    }).then(response => response.json());
    
  }
}

const API_SERVICE = new ApiService();
export default API_SERVICE;