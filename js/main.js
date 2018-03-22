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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helpers__ = __webpack_require__(5);


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
      return Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["a" /* append */])(Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* clearChildren */])(this.host), Object(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["d" /* parseHTML */])(html));
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(9);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__framework_Router__ = __webpack_require__(8);



const router = new __WEBPACK_IMPORTED_MODULE_1__framework_Router__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__routes__["a" /* default */]);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PizzasQueue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_LogIn__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SignUp__ = __webpack_require__(7);




const routes = [

  {
    href: '/',
    component: __WEBPACK_IMPORTED_MODULE_0__components_PizzasQueue__["a" /* default */]
  },

  {
    href: '/login',
    component: __WEBPACK_IMPORTED_MODULE_1__components_LogIn__["a" /* default */]
  },

  {
    href: '/signup',
    component: __WEBPACK_IMPORTED_MODULE_2__components_SignUp__["a" /* default */]
  }

];

/* harmony default export */ __webpack_exports__["a"] = (routes);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(0);


class PizzasQueue extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {

  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('pizzas-queue-container');
  }

  render() {
    return `
      <header>
        <div class="clock">
          <i class="fas fa-hourglass-half"></i>
          <time id="current-time"></time>
        </div>

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
  }
}

/* harmony default export */ __webpack_exports__["a"] = (PizzasQueue);


/*  */


/***/ }),
/* 5 */
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
/* harmony export (immutable) */ __webpack_exports__["d"] = parseHTML;


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



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(0);


class LogIn extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {

  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('log-in-container');
  }

  render() {
    return 'Log in';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (LogIn);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__framework_Component__ = __webpack_require__(0);


class SignUp extends __WEBPACK_IMPORTED_MODULE_0__framework_Component__["a" /* default */] {

  constructor() {
    super();

    this.host = document.createElement('div');
    this.host.classList.add('sign-up-container');
  }

  render() {
    return 'Sign up';
  }
}

/* harmony default export */ __webpack_exports__["a"] = (SignUp);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Component__ = __webpack_require__(0);


class Router extends __WEBPACK_IMPORTED_MODULE_0__Component__["a" /* default */] {

  constructor(routes) {
    super();

    this.state = {
      routes,
      activeRoute: null,
      activeComponent: null
    };

    this.host = document.getElementById('root');

    window.onpopstate = () => {
      console.log('here');
      this.handleUrlChange(this.path)
    };

    this.handleUrlChange(this.path);
  }

  get path() {
    return window.location.pathname;
  }

  handleUrlChange(path) {
    const { routes, activeRoute } = this.state;

    let nextRoute = routes.find(({ href }) => href === path);

    if (nextRoute && nextRoute !== activeRoute) {
      this.applyRoute(nextRoute, path)
    }
  }

  applyRoute(route, path) {
    const componentInstance = new route.component();

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/styles.css";

/***/ })
/******/ ]);