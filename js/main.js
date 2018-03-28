/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const bindAll = (context, ...names) => {
  names.forEach(name => {
    context[name] = context[name].bind(context);
  });
};
/* harmony export (immutable) */ __webpack_exports__["b"] = bindAll;


const parseHTML = htmlString => {
  const template = document.createElement('template');
  template.innerHTML = htmlString.trim();

  return template.content;
};
/* harmony export (immutable) */ __webpack_exports__["f"] = parseHTML;


const clearChildren = node => {
  node.innerHTML = '';
  return node;
};
/* harmony export (immutable) */ __webpack_exports__["c"] = clearChildren;


const append = (node, child) => {
  if (Array.isArray(child)) {
    node.append(...child);
  } else {
    node.append(child);
  }

  return node;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = append;


const URL_PARAM_REGEXP = /:\w+/g; // matches all(beacuse of g) combinations with 'A-Za-z0-9_' after ':'

const isUrlParam = path => URL_PARAM_REGEXP.test(path);

const pathToRegExp = path => RegExp(`^${path.replace(URL_PARAM_REGEXP, '(.*)')}$`); // ^ - beginning, $ - finish

const isEqualPaths = (template, path) => pathToRegExp(template).test(path);
/* harmony export (immutable) */ __webpack_exports__["e"] = isEqualPaths;


const handleErrors = answer => {
  const list = document.querySelector('.error-list');

  const addErrorMsg = msg => {
    const error = document.createElement('li');
    error.textContent = msg;
    list.appendChild(error);
  };

  list.innerHTML = '';

  if (!!answer.validations) {
    answer.validations.forEach(msg => addErrorMsg(msg));
  } else {
    addErrorMsg(answer.error);
  }
};
/* harmony export (immutable) */ __webpack_exports__["d"] = handleErrors;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helpers__ = __webpack_require__(0);


class Component {

  constructor(props) {
    this.state = {};
    this.props = props || {};
    this.host = null;

    Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["b" /* bindAll */])(this, 'updateState', 'update');
  }

  updateHost() {
    const html = this.render();

    if (!html && this.host) {
      return this.host;
    }

    if (typeof html === 'string') {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["a" /* append */])(Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* clearChildren */])(this.host), Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["f" /* parseHTML */])(html));
    } else {
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["a" /* append */])(Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* clearChildren */])(this.host), html);
    }
  }

  update(nextProps) {
    this.props = nextProps;
    return this.updateHost();
  }

  updateState(state) {
    const nextState = Object.assign({}, this.state, state);
    this.state = nextState;

    this.updateHost();

    return nextState;
  }

  render() {}
}

/* harmony default export */ __webpack_exports__["a"] = (Component);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_Router__ = __webpack_require__(10);



const router = new __WEBPACK_IMPORTED_MODULE_1__framework_Router__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__routes__["a" /* default */]);

/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helpers__ = __webpack_require__(0);


class AuthService {

  constructor() {
    this._token = localStorage.getItem('token');
    this._claims = JSON.parse(localStorage.getItem('claims'));

    Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["b" /* bindAll */])(this, 'isAuthorized');
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

/* harmony default export */ __webpack_exports__["a"] = (AUTH_SERVICE);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(11);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Queue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Login__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Signup__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AuthService__ = __webpack_require__(3);






const routes = [

  {
    href: '',
    redirectTo: '/'
  },

  {
    href: '/',
    component: __WEBPACK_IMPORTED_MODULE_0__components_Queue__["a" /* default */],
    isAuthorized: __WEBPACK_IMPORTED_MODULE_3__services_AuthService__["a" /* default */].isAuthorized
  },

  {
    href: '/login',
    component: __WEBPACK_IMPORTED_MODULE_1__components_Login__["a" /* default */]
  },

  {
    href: '/signup',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Signup__["a" /* default */]
  }

];

/* harmony default export */ __webpack_exports__["a"] = (routes);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Clock__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_helpers__ = __webpack_require__(0);




class Queue extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {

  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('pizzas-queue-container');

    this.clock = new __WEBPACK_IMPORTED_MODULE_1__Clock__["a" /* default */]();
  }

  render() {
    const html = `
      <header class="queue-header">
        <button type="button" class="log-out-button">
          <i class="fas fa-sign-out-alt"></i>
          Log out
        </button>

        <div class="logo-wrapper">
          <img src="images/logo.svg" alt="">
          <h1>Pizza Fantasy</h1>
        </div>
      </header>

      <main>
        <button type="button" class="new-pizza-button">
          <i class="fas fa-plus"></i>
          New pizza
        </button>

        <div class="queue">

          <div class="pizza">
            <div class="order-info">
              <span class="price">$42</span>
              <span class="order-number">1</span>
            </div>

            <img src="images/pizza_1.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">12:32:43</time>
              <span class="ready-in">Ready in: <time>2 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$137.07</span>
              <span class="order-number">2</span>
            </div>

            <img src="images/pizza_2.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">12:34:43</time>
              <span class="ready-in">Ready in: <time>3 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$49</span>
              <span class="order-number">3</span>
            </div>

            <img src="images/pizza_3.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">12:55:43</time>
              <span class="ready-in">Ready in: <time>4 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$56</span>
              <span class="order-number">7</span>
            </div>

            <img src="images/pizza_4.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">13:32:33</time>
              <span class="ready-in">Ready in: <time>5 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$24</span>
              <span class="order-number">4</span>
            </div>

            <img src="images/pizza_5.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">13:42:13</time>
              <span class="ready-in">Ready in: <time>6 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$41</span>
              <span class="order-number">5</span>
            </div>

            <img src="images/pizza_6.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">14:00:43</time>
              <span class="ready-in">Ready in: <time>7 min</time></span>
            </div>
          </div>

          <div class="pizza">
            <div class="order-info">
              <span class="price">$86</span>
              <span class="order-number">6</span>
            </div>

            <img src="images/pizza_7.jpg" alt="">

            <div class="time-info">
              <time class="time-of-order">14:12:00</time>
              <span class="ready-in">Ready in: <time>8 min</time></span>
            </div>
          </div>

        </div>
      </main>

      <footer>
        <address>1&nbsp;Kottans&nbsp;Str., tel.&nbsp;<a href="tel:57778887">577-788-87</a></address>
        <small>Pizza Fantasy &copy; 2018</small>
      </footer>
    `;

    const parsedHTML = Object(__WEBPACK_IMPORTED_MODULE_2__utils_helpers__["f" /* parseHTML */])(html);
    const headerElement = parsedHTML.querySelector('.queue-header');

    headerElement.insertAdjacentElement('afterbegin', this.clock.update());

    return parsedHTML;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Queue);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(1);


class Clock extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {
  constructor() {
    super();

    this.state = {
      currentTime: this.getCurrentTime()
    };

    this.host = document.createElement('div');
    this.host.classList.add('clock');

    window.setInterval(function timer() {
      const currentTime = this.getCurrentTime();
      this.updateState({ currentTime });
    }.bind(this), 500);
  }

  render() {
    const { currentTime } = this.state;

    return `
      <i class="fas fa-hourglass-half"></i>
      <time id="current-time">
        ${currentTime}
      </time>
    `;
  }

  getCurrentTime() {
    const now = new Date();

    return [now.getHours(), now.getMinutes(), now.getSeconds()]
      .map(n => `${n}`.padStart(2, '0')) // add 0 if number is single-digit
      .join(':');
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Clock);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_AuthService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_helpers__ = __webpack_require__(0);





class Login extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {

  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('log-in-container');

    this.host.addEventListener('submit', event => this.handleSubmit(event));
  }

  render() {
    return `
      <form class="log-in-form">

        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>

        <ul class="error-list"></ul>

        <button type="submit">Log in</button>

        <p>New to Pizza Fantasy? <a href="#/signup">Sign Up</a></p>

      <form>
    `;
  }

  handleSubmit(event) {
    event.preventDefault();

    const target = event.target;

    const userData = {
      username: target.username.value.trim(),
      password: target.password.value.trim()
    };

    __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* default */].login(userData)
      .then(() => __WEBPACK_IMPORTED_MODULE_2__index__["default"].navigate('/'))
      .catch(data => Object(__WEBPACK_IMPORTED_MODULE_3__utils_helpers__["d" /* handleErrors */])(data.answer));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Login);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_AuthService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_helpers__ = __webpack_require__(0);





class Signup extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {

  constructor() {
    super();

    this.state = {
      stores: []
    };

    this.host = document.createElement('div');
    this.host.classList.add('sign-up-container');

    this.host.addEventListener('submit', event => this.handleSubmit(event));

    this.getStores();
  }

  getStores() {
    __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* default */].getStores()
      .then(stores => this.updateState({ stores }));
  }

  render() {
    const options = this.getSelectOptions(this.state.stores);

    return `
      <form class="sign-up-form">

        <input type="text" name="username" minlength="2" maxlength="24" placeholder="Username" required>
        <input type="password" name="password" minlength="8" placeholder="Password" required>
        <input type="password" name="password_repeat" minlength="8" placeholder="Confirm password" required>
        <input type="email" name="email" placeholder="Email" required>

        <p class="select-wrapper">
          <select name="store_id" required>
            ${options}
          </select>
        </p>
        <input type="password" name="store_password" minlength="8" placeholder="Store password" required>

        <ul class="error-list"></ul>

        <button type="submit" id="sign-up-button">Sign Up</button>

        <p>Already have an account? <a href="#/login">Log in</a></p>

      <form>
    `;
  }

  getSelectOptions(stores) {
    return stores.reduce((stores, store) => stores += `<option value="${ store.id }">${ store.name }</option>`, '');
  }

  handleSubmit(event) {
    event.preventDefault();

    const target = event.target;

    const userData = {
      username: target.username.value.trim(),
      password: target.password.value.trim(),
      password_repeat: target.password_repeat.value.trim(),
      email: target.email.value.trim(),
      store_id: parseInt(target.store_id.value),
      store_password: target.store_password.value.trim()
    };

    __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* default */].signup(userData)
      .then(() => __WEBPACK_IMPORTED_MODULE_2__index__["default"].navigate('/login'))
      .catch(data => Object(__WEBPACK_IMPORTED_MODULE_3__utils_helpers__["d" /* handleErrors */])(data.answer));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Signup);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_helpers__ = __webpack_require__(0);



class Router extends __WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */] {

  constructor(routes) {
    super();

    this.state = {
      routes,
      activeRoute: null,
      activeComponent: null
    };

    this.host = document.getElementById('root');

    window.addEventListener('hashchange', () => {
      this.handleUrlChange(this.path);
    });

    this.handleUrlChange(this.path);
  }

  get path() {
    return window.location.hash.slice(1);
  }

  handleUrlChange(path) {
    const { routes, activeRoute } = this.state;

    let nextRoute = routes.find(({ href }) => Object(__WEBPACK_IMPORTED_MODULE_1__utils_helpers__["e" /* isEqualPaths */])(href, path));

    if (!nextRoute) {
      this.navigate('');
    }

    if (nextRoute !== activeRoute) {
      if (!!nextRoute.isAuthorized) {
        this.checkAuthorization(nextRoute.isAuthorized());
      }
      if (!!nextRoute.redirectTo) {
        return this.navigate(nextRoute.redirectTo);
      }

      if (!!nextRoute.onEnter) {
        return this.handleOnEnter(nextRoute, path);
      }

      this.applyRoute(nextRoute, path)
    }
  }

  checkAuthorization(auth) {
    if (!auth) {
      this.navigate('/login');
    }
  }

  navigate(path) {
    window.location.hash = path;
  }

  applyRoute(route, path) {
    const { href, component } = route;
    const componentInstance = new component();

    this.updateState({
      activeRoute: route,
      activeComponent: componentInstance,
    });
  }

  render() {
    return this.state.activeComponent.update();
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Router);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/styles.css";

/***/ })
/******/ ]);