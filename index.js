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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this.state = {};
    this.props = props || {};
    this.host = null;
  }

  _createClass(Component, [{
    key: 'beforeUpdate',
    value: function beforeUpdate() {}
  }, {
    key: 'update',
    value: function update(props) {
      this.beforeUpdate(props);
      this.props = Object.assign({}, this.props, props);
      return this._render();
    }
  }, {
    key: 'updateState',
    value: function updateState(state) {
      this.state = Object.assign({}, this.state, state);
      this._render();
    }
  }, {
    key: 'unmount',
    value: function unmount() {}
  }, {
    key: '_render',
    value: function _render() {
      var children = this.render();

      this.host.innerHTML = '';
      if (Array.isArray(children)) {
        var _host;

        (_host = this.host).append.apply(_host, _toConsumableArray(children));
      } else {
        this.host.append(children);
      }

      return this.host;
    }
  }, {
    key: 'render',
    value: function render() {}
  }]);

  return Component;
}();

exports.default = Component;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _authService = __webpack_require__(3);

var _authService2 = _interopRequireDefault(_authService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApiService = function () {
  function ApiService() {
    _classCallCheck(this, ApiService);

    this.domain = 'https://pizza-tele.ga';
    this.baseUrl = this.domain + '/api/v1';

    this.urlPaths = {
      storeList: '/store/list',
      userCreate: '/user/create',
      userLogin: '/user/login',
      userInfo: '/user/my_info',
      ingredientList: '/ingredient/list',
      tagList: '/tag/list',
      pizzaCreate: '/pizza/create',
      wsTicket: '/ws/ticket',
      pizzaList: '/pizza/list'
    };
  }

  _createClass(ApiService, [{
    key: 'getStoreList',
    value: function getStoreList() {
      return this.get(this.urlPaths.storeList);
    }
  }, {
    key: 'getIngredientList',
    value: function getIngredientList() {
      return this.get(this.urlPaths.ingredientList, _authService2.default.token);
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo() {
      return this.get(this.urlPaths.userInfo, _authService2.default.token);
    }
  }, {
    key: 'getTagList',
    value: function getTagList() {
      return this.get(this.urlPaths.tagList, _authService2.default.token);
    }
  }, {
    key: 'getTicket',
    value: function getTicket() {
      return this.get(this.urlPaths.wsTicket, _authService2.default.token);
    }
  }, {
    key: 'getPizzaList',
    value: function getPizzaList() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      return this.get(this.urlPaths.pizzaList + '?offset=' + offset + '&limit=15', _authService2.default.token);
    }
  }, {
    key: 'signupUser',
    value: function signupUser(userData) {
      return this.post(this.urlPaths.userCreate, JSON.stringify(userData));
    }
  }, {
    key: 'loginUser',
    value: function loginUser(userData) {
      return this.post(this.urlPaths.userLogin, JSON.stringify(userData));
    }
  }, {
    key: 'createPizza',
    value: function createPizza(pizzaData) {
      return this.post(this.urlPaths.pizzaCreate, pizzaData, _authService2.default.token);
    }
  }, {
    key: 'get',
    value: function get(path, token) {
      var headers = new Headers();
      headers.append('content-type', 'application/json');

      if (token) {
        headers.append('Authorization', 'Bearer ' + token);
      }

      return fetch(this.baseUrl + path, {
        method: 'GET',
        headers: headers
      }).then(function (response) {
        return response.json();
      });
    }
  }, {
    key: 'post',
    value: function post(path, userData, token) {
      var headers = new Headers();

      if (token) {
        headers.append('Authorization', 'Bearer ' + token);
      }

      return fetch(this.baseUrl + path, {
        method: 'POST',
        body: userData,
        headers: headers
      }).then(function (response) {
        return response.json();
      });
    }
  }]);

  return ApiService;
}();

var API_SERVICE = new ApiService();
exports.default = API_SERVICE;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var getRandomNumber = exports.getRandomNumber = function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var removeArrayElement = exports.removeArrayElement = function removeArrayElement(el, arr) {
  var index = arr.indexOf(el);
  if (index !== -1) {
    arr.splice(index, 1);
  }
};

var formDataToObject = exports.formDataToObject = function formDataToObject(formData) {
  var result = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = formData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var key = _ref2[0];
      var value = _ref2[1];

      result[key] = value;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return result;
};

var canvasToBlob = exports.canvasToBlob = function canvasToBlob(canvas) {
  return new Promise(function (resolve) {
    canvas.toBlob(resolve);
  });
};

var makeAutoResizable = exports.makeAutoResizable = function makeAutoResizable(element) {
  element.addEventListener("input", function () {
    element.style.height = 'auto';
    element.style.height = element.scrollHeight + "px";
  });
};

var diffBetweenDates = exports.diffBetweenDates = function diffBetweenDates(date1, date2) {
  return date2.getTime() - date1.getTime();
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apiService = __webpack_require__(1);

var _apiService2 = _interopRequireDefault(_apiService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthService = function () {
  function AuthService() {
    _classCallCheck(this, AuthService);

    this._token = localStorage.getItem('token');
    this._claims = JSON.parse(localStorage.getItem('claims'));
    this.isAuthorized = this.isAuthorized.bind(this);
  }

  _createClass(AuthService, [{
    key: 'isAuthorized',
    value: function isAuthorized() {
      if (!this.tokenIsNotExpired()) {
        this.logout();
        return false;
      }
      return true;
    }
  }, {
    key: 'logout',
    value: function logout() {
      this._token = null;
      this._claims = null;
      localStorage.removeItem('token');
      localStorage.removeItem('claims');
    }
  }, {
    key: 'tokenIsNotExpired',
    value: function tokenIsNotExpired() {
      return !!this._token ? this.claims.exp * 1000 > Date.now() : false;
    }
  }, {
    key: 'login',
    value: function login(userData) {
      var _this = this;

      return _apiService2.default.loginUser(userData).then(function (response) {
        if (response.success) {
          _this.token = response.token;
          _this.claims = _this.parseJwtClaims(response.token);
        }

        return response;
      });
    }
  }, {
    key: 'parseJwtClaims',
    value: function parseJwtClaims(jwtToken) {
      if (jwtToken) {
        var base64Url = jwtToken.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
      }
      return {};
    }
  }, {
    key: 'token',
    set: function set(token) {
      this._token = token;
      localStorage.setItem('token', token);
    },
    get: function get() {
      return this._token;
    }
  }, {
    key: 'claims',
    set: function set(claims) {
      this._claims = claims;
      localStorage.setItem('claims', JSON.stringify(claims));
    },
    get: function get() {
      return this._claims;
    }
  }]);

  return AuthService;
}();

var AUTH_SERVICE = new AuthService();
exports.default = AUTH_SERVICE;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
  }

  _createClass(EventEmitter, [{
    key: "subscribe",
    value: function subscribe(eventName, fn) {
      var _this = this;

      if (!this.events.hasOwnProperty(eventName)) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(fn);

      return function () {
        _this.events[eventName] = _this.events[eventName].filter(function (eventFn) {
          return fn !== eventFn;
        });
      };
    }
  }, {
    key: "emit",
    value: function emit(eventName, data) {
      var event = this.events[eventName];
      if (event) {
        event.forEach(function (fn) {
          fn.call(null, data);
        });
      }
    }
  }]);

  return EventEmitter;
}();

var EVENT_EMITTER = new EventEmitter();
exports.default = EVENT_EMITTER;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(15);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message(type) {
    _classCallCheck(this, Message);

    var _this = _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).call(this));

    _this.type = type;
    _this.host = document.createElement('div');
    _this.host.className = 'message-container';
    return _this;
  }

  _createClass(Message, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          success = _props.success,
          error = _props.error,
          validations = _props.validations;

      var msg = document.createElement('p');

      if (success) {
        this.host.classList.add('successful');
        msg.className = 'success-message';
        msg.textContent = this.type + ' successful!';
        return msg;
      } else if (validations) {
        var list = document.createElement('ul');
        validations.forEach(function (msg) {
          list.innerHTML += '<li>' + msg + '</li>';
        });
        return list;
      } else {
        msg.className = 'error-message';
        msg.textContent = error;
        return msg;
      }
    }
  }]);

  return Message;
}(_Component3.default);

exports.default = Message;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(19);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _authService = __webpack_require__(3);

var _authService2 = _interopRequireDefault(_authService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.host = document.createElement('header');
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var headerWrapper = document.createElement('div');
      var logoLink = document.createElement('a');
      var navigationEl = document.createElement('nav');
      var logoutButton = document.createElement('a');

      headerWrapper.className = 'header-wrapper';
      logoLink.className = 'logo';
      logoutButton.className = 'logout button';

      logoLink.textContent = 'Pizza Fantasy';
      navigationEl.innerHTML = '\n      <a class="queue-link" href="#/queue">Queue</a>\n      <a class="order-link" href="#/order">Order</a>\n      <a class="profile-link" href="#/profile">Profile</a>';
      logoutButton.textContent = 'Log out';

      logoLink.href = '#/queue';
      logoutButton.href = '#/login';

      logoutButton.addEventListener('click', function () {
        _authService2.default.logout();
      });

      this.setActiveLink(navigationEl, this.props.activeLink);

      navigationEl.appendChild(logoutButton);
      headerWrapper.appendChild(logoLink);
      headerWrapper.innerHTML += '\n      <input type="checkbox" id="hamburger-checkbox">\n      <label for="hamburger-checkbox">\n        <span></span>\n        <span></span>\n        <span></span>\n      </label> ';
      headerWrapper.appendChild(navigationEl);

      return headerWrapper;
    }
  }, {
    key: 'setActiveLink',
    value: function setActiveLink(container, activeLink) {
      switch (activeLink) {
        case 'queue':
          container.querySelector('.queue-link').classList.add('active');
          break;
        case 'order':
          container.querySelector('.order-link').classList.add('active');
          break;
        case 'profile':
          container.querySelector('.profile-link').classList.add('active');
          break;
      }
    }
  }]);

  return Header;
}(_Component3.default);

exports.default = Header;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(20);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

    _this.host = document.createElement('footer');
    return _this;
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var footerWrapper = document.createElement('div');
      footerWrapper.className = 'footer-wrapper';
      footerWrapper.innerHTML = '\n      <address>1&nbsp;Kottans&nbsp;Str., tel.&nbsp;<a href="tel:57778887">577-788-87</a></address>\n      <small>Pizza Fantasy &copy; 2018</small> ';

      return footerWrapper;
    }
  }]);

  return Footer;
}(_Component3.default);

exports.default = Footer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _Router = __webpack_require__(10);

var _Router2 = _interopRequireDefault(_Router);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootEl = document.getElementById('root');
var ROUTER = new _Router2.default(rootEl, _routes2.default);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_Component) {
  _inherits(Router, _Component);

  function Router(container, routes) {
    _classCallCheck(this, Router);

    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this));

    _this.state = {
      routes: routes,
      activeRoute: null,
      activeComponent: null
    };

    _this.host = container;

    window.addEventListener('hashchange', function () {
      _this.handleUrlChange(_this.path);
    });

    _this.handleUrlChange(_this.path);
    return _this;
  }

  _createClass(Router, [{
    key: 'handleUrlChange',
    value: function handleUrlChange(path) {
      var routes = this.state.routes;

      var route = routes.find(function (_ref) {
        var href = _ref.href;
        return href === path;
      });

      if (!!route) {
        if (route !== this.state.activeRoute) {
          if (!!route.redirectTo) {
            return this.navigateTo(route.redirectTo);
          }

          if (!!route.isAuthorized && !route.isAuthorized()) {
            return this.navigateTo('/login');
          }

          this.applyRoute(route);
        }
      } else {
        this.navigateTo('/');
      }
    }
  }, {
    key: 'navigateTo',
    value: function navigateTo(path) {
      window.location.hash = path;
    }
  }, {
    key: 'applyRoute',
    value: function applyRoute(route) {
      var component = new route.component();
      var activeComponent = this.state.activeComponent;


      if (activeComponent) {
        activeComponent.unmount();
      }

      this.updateState({
        activeRoute: route,
        activeComponent: component
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.activeComponent.update();
    }
  }, {
    key: 'path',
    get: function get() {
      return window.location.hash.slice(1);
    }
  }]);

  return Router;
}(_Component3.default);

exports.default = Router;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Login = __webpack_require__(12);

var _Login2 = _interopRequireDefault(_Login);

var _Signup = __webpack_require__(16);

var _Signup2 = _interopRequireDefault(_Signup);

var _Order = __webpack_require__(18);

var _Order2 = _interopRequireDefault(_Order);

var _Queue = __webpack_require__(26);

var _Queue2 = _interopRequireDefault(_Queue);

var _Profile = __webpack_require__(31);

var _Profile2 = _interopRequireDefault(_Profile);

var _authService = __webpack_require__(3);

var _authService2 = _interopRequireDefault(_authService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  href: '',
  redirectTo: '/queue'
}, {
  href: '/',
  redirectTo: '/queue'
}, {
  href: '/login',
  component: _Login2.default
}, {
  href: '/signup',
  component: _Signup2.default
}, {
  href: '/order',
  component: _Order2.default,
  isAuthorized: _authService2.default.isAuthorized
}, {
  href: '/queue',
  component: _Queue2.default,
  isAuthorized: _authService2.default.isAuthorized
}, {
  href: '/profile',
  component: _Profile2.default,
  isAuthorized: _authService2.default.isAuthorized
}];

exports.default = routes;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(13);

var _pizzaGuy = __webpack_require__(14);

var _pizzaGuy2 = _interopRequireDefault(_pizzaGuy);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _authService = __webpack_require__(3);

var _authService2 = _interopRequireDefault(_authService);

var _Message = __webpack_require__(5);

var _Message2 = _interopRequireDefault(_Message);

var _helpers = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.state = {
      message: null
    };

    _this.host = document.createElement('div');
    _this.host.className = 'login-wrapper';

    _this._message = new _Message2.default('Login');
    _this.host.addEventListener('submit', _this.handleSubmit.bind(_this));
    return _this;
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      var message = this.state.message;

      var img = document.createElement('img');
      img.src = _pizzaGuy2.default;

      var form = document.createElement('form');
      form.innerHTML = '\n      <div class="input-container">\n        <input type="text" name="username" id="username" class="text-input" minlength="2" maxlength="24" placeholder=" " required>\n        <label for="username" data-error="Must contain at least 2 characters">Username</label>\n      </div>\n\n      <div class="input-container">\n        <input type="password" name="password" id="password" class="text-input" minlength="8" placeholder=" " required>\n        <label for="password" data-error="Must contain at least 8 characters">Password</label>\n      </div>\n\n      <button type="submit">Log in</button> \n      <p class="help-form-message">New to Pizza Fantasy? <a href="#/signup">Sign&nbsp;up</a></p>';

      if (message) {
        form.insertAdjacentElement('afterbegin', this._message.update(message));
      }

      return [img, form];
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();
      _authService2.default.login((0, _helpers.formDataToObject)(new FormData(event.target))).then(function (response) {
        if (response.success) {
          _this2.handleSuccess(response);
        } else {
          _this2.handleFailure(response);
        }
      });
    }
  }, {
    key: 'handleSuccess',
    value: function handleSuccess(response) {
      this.updateState({ message: response });
      setTimeout(function () {
        window.location.hash = '/queue';
      }, 1000);
    }
  }, {
    key: 'handleFailure',
    value: function handleFailure(response) {
      this.updateState({ message: response });
    }
  }]);

  return Login;
}(_Component3.default);

exports.default = Login;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='256' height='256'%3E%3Cpath d='M147.663 304.46h-7.611c-32.177 0-58.355-26.177-58.355-58.355s26.177-58.355 58.355-58.355h7.611v15.223h-7.611c-23.783 0-43.132 19.348-43.132 43.132s19.348 43.132 43.132 43.132h7.611v15.223z' data-original='%23F63E31' data-old_color='%23f44336' fill='%23f44336'/%3E%3Cpath d='M249.02 497.166l-25.242-8.413V292.818h-15.223v201.419a7.61 7.61 0 0 0 5.204 7.221l30.446 10.149a7.616 7.616 0 0 0 2.408.393 7.616 7.616 0 0 0 7.22-5.206 7.61 7.61 0 0 0-4.813-9.628z' data-original='%233C9997' class='active-path' data-old_color='%23045c68' fill='%23045c68'/%3E%3Cpath d='M147.663 488.752l-25.242 8.413a7.612 7.612 0 0 0 4.814 14.441l30.446-10.149a7.61 7.61 0 0 0 5.204-7.221v-201.42h-15.223v195.936z' data-original='%2351B5B2' data-old_color='%23045C68' fill='%23238795'/%3E%3Cpath d='M362.177 167.761a81.81 81.81 0 0 1-14.694 19.989c-32.006 32.008-84.087 32.008-116.094 0a83.259 83.259 0 0 1-4.404-4.766H208.03a96.922 96.922 0 0 0 12.593 15.532c18.972 18.971 43.892 28.457 68.812 28.457s49.839-9.486 68.812-28.457c8.98-8.98 15.982-19.408 20.802-30.755h-16.872z' data-original='%23EE1F3D' data-old_color='%23FF1744' fill='%23d50000'/%3E%3Cpath d='M185.721 258.791v76.115c25.222 0 45.669-20.447 45.669-45.669l-45.669-30.446z' data-original='%233C9997' class='active-path' data-old_color='%23045c68' fill='%23045c68'/%3E%3Cpath d='M200.944 289.237l-15.223-30.446-45.669 30.446c0 25.222 20.447 45.669 45.669 45.669 8.407 0 15.223-20.447 15.223-45.669z' data-original='%2351B5B2' data-old_color='%23045C68' fill='%23238795'/%3E%3Cpath d='M211.092 167.453h-10.149l-20.297 30.446 20.297 91.338h30.446V187.75c0-11.21-9.087-20.297-20.297-20.297z' data-original='%23EE1F3D' data-old_color='%23FF1744' fill='%23d50000'/%3E%3Cpath d='M193.332 167.453l-7.611 25.372-7.611-25.372h-17.76c-11.21 0-20.297 9.087-20.297 20.297v101.487h60.892V167.453h-7.613z' data-original='%23F63E31' data-old_color='%23f44336' fill='%23f44336'/%3E%3Cpath d='M185.721 55.818v81.189c25.222 0 45.669-20.447 45.669-45.669V76.115l-45.669-20.297z' data-original='%23D69C6E' fill='%23d69c6e'/%3E%3Cpath d='M200.944 91.338v-35.52l-60.892 20.297v15.223c0 25.222 20.447 45.669 45.669 45.669 8.407 0 15.223-20.447 15.223-45.669z' data-original='%23E4B780' fill='%23e4b780'/%3E%3Cpath d='M185.721 30.446c-25.222 0-45.669 20.447-45.669 45.669h91.338c-.001-25.223-20.447-45.669-45.669-45.669z' data-original='%23EE1F3D' data-old_color='%23FF1744' fill='%23d50000'/%3E%3Cpath d='M81.697 68.503c-4.205 0-7.611 3.407-7.611 7.611s3.407 7.611 7.611 7.611H231.39v-7.611l-10.149-7.611H81.697z' data-original='%23EE1F3D' data-old_color='%23FF1744' fill='%23d50000'/%3E%3Cpath d='M178.109 167.453v121.784c0 4.205 3.407 7.611 7.611 7.611s7.611-3.407 7.611-7.611V167.453h-15.222z' data-original='%23CDF2F1' fill='%23cdf2f1'/%3E%3Cpath data-original='%23F2D392' fill='%23f2d392' d='M437.915 30.446l-81.19-15.223 50.744 167.453h30.446V152.23l-15.223-15.223 15.223-15.223V91.338l-15.223-15.223 15.223-15.223z'/%3E%3Cpath data-original='%23FFE368' fill='%23ffe368' d='M278.581 30.446v30.446l63.387 14.973-63.387 15.473v30.446l63.387 14.973-63.387 15.473v30.446h128.888V15.223z'/%3E%3Cpath data-original='%23FFE368' fill='%23ffe368' d='M407.469 121.784l-30.446 15.223 30.446 15.223h30.446v-30.446z'/%3E%3Cpath data-original='%23FFEFAB' fill='%23ffefab' d='M278.581 121.784h128.888v30.446H278.581z'/%3E%3Cpath data-original='%23FFE368' fill='%23ffe368' d='M407.469 60.892l-30.446 15.223 30.446 15.223h30.446V60.892z'/%3E%3Cpath data-original='%23FFEFAB' fill='%23ffefab' d='M278.581 60.892h128.888v30.446H278.581z'/%3E%3Cpath data-original='%23FFE368' fill='%23ffe368' d='M407.469 0l-30.446 15.223 30.446 15.223h30.446V0z'/%3E%3Cpath data-original='%23FFEFAB' fill='%23ffefab' d='M278.581 0h128.888v30.446H278.581z'/%3E%3C/svg%3E"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(17);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _apiService = __webpack_require__(1);

var _apiService2 = _interopRequireDefault(_apiService);

var _Message = __webpack_require__(5);

var _Message2 = _interopRequireDefault(_Message);

var _helpers = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_Component) {
  _inherits(Signup, _Component);

  function Signup() {
    _classCallCheck(this, Signup);

    var _this = _possibleConstructorReturn(this, (Signup.__proto__ || Object.getPrototypeOf(Signup)).call(this));

    _this.state = {
      stores: [],
      message: null
    };

    _this.host = document.createElement('div');
    _this.host.className = 'signup-wrapper';

    _this._message = new _Message2.default('Registration');

    _this.getStoreList();
    _this.host.addEventListener('submit', _this.handleSubmit.bind(_this));
    return _this;
  }

  _createClass(Signup, [{
    key: 'getStoreList',
    value: function getStoreList() {
      var _this2 = this;

      _apiService2.default.getStoreList().then(function (stores) {
        return _this2.updateState({ stores: stores });
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this3 = this;

      event.preventDefault();
      var formData = new FormData(event.target);
      var userData = (0, _helpers.formDataToObject)(formData);
      userData['store_id'] = parseInt(userData['store_id']);
      _apiService2.default.signupUser(userData).then(function (response) {
        if (response.success) {
          _this3.handleSuccess(response);
        } else {
          _this3.handleFailure(response);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var form = document.createElement('form');
      var options = this.getSelectOptions(this.state.stores);
      var message = this.state.message;


      form.className = 'signup-form';
      form.innerHTML = '\n      <div class="input-container">\n        <input type="text" name="username" id="username" class="text-input" minlength="2" maxlength="24" placeholder=" " required>\n        <label for="username" data-error="Must contain at least 2 characters">Username</label>\n      </div>\n     \n      <div class="input-container">\n        <input type="password" name="password" id="password" class="text-input" minlength="8" placeholder=" " required>\n        <label for="password" data-error="Must contain at least 8 characters">Password</label>\n      </div>\n     \n      <div class="input-container">\n        <input type="password" name="password_repeat" id="confirm_password" class="text-input" placeholder=" " required>\n        <label for="confirm_password" data-error="Passwords must be equal">Confirm password</label>\n      </div>\n     \n      <div class="input-container">\n        <input type="email" name="email" id="email" class="text-input" placeholder=" " required>\n        <label for="email" data-error="Must contain @ symbol">Email</label>\n      </div>\n     \n      <p class="select-wrapper">\n        <select name="store_id" required>\n          <option selected disabled value="">Select the store</option>\n          ' + options + '\n        </select>\n      </p>\n     \n      <div class="input-container">\n        <input type="password" name="store_password" id="store_password" class="text-input" minlength="8" placeholder=" " required>\n        <label for="store_password" data-error="Must contain at least 8 characters">Store password</label>\n      </div>\n     \n      <button type="submit">Sign Up</button>\n      <p class="help-form-message">Already have an account? <a href="#/login">Log&nbsp;in</a></p> ';

      if (message) {
        form.insertAdjacentElement('afterbegin', this._message.update(message));
      }

      var password = form.querySelector('[name="password"]');
      var passwordRepeat = form.querySelector('[name="password_repeat"]');
      passwordRepeat.addEventListener('keyup', function () {
        _this4.checkPasswords(password, passwordRepeat);
      });

      return form;
    }
  }, {
    key: 'checkPasswords',
    value: function checkPasswords(password, passwordRepeat) {
      if (password.value !== passwordRepeat.value) {
        passwordRepeat.setCustomValidity('Passwords must be equal');
      } else {
        passwordRepeat.setCustomValidity('');
      }
    }
  }, {
    key: 'handleSuccess',
    value: function handleSuccess(response) {
      this.updateState({ message: response });
      setTimeout(function () {
        window.location.hash = '/login';
      }, 1000);
    }
  }, {
    key: 'handleFailure',
    value: function handleFailure(response) {
      this.updateState({ message: response });
    }
  }, {
    key: 'getSelectOptions',
    value: function getSelectOptions(stores) {
      return stores.reduce(function (options, store) {
        return options += '<option value="' + store.id + '">' + store.name + '</option>';
      }, '');
    }
  }]);

  return Signup;
}(_Component3.default);

exports.default = Signup;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(7);

var _Footer2 = _interopRequireDefault(_Footer);

var _Canvas = __webpack_require__(21);

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Description = __webpack_require__(23);

var _Description2 = _interopRequireDefault(_Description);

var _pizzaService = __webpack_require__(25);

var _pizzaService2 = _interopRequireDefault(_pizzaService);

var _apiService = __webpack_require__(1);

var _apiService2 = _interopRequireDefault(_apiService);

var _helpers = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Order = function (_Component) {
  _inherits(Order, _Component);

  function Order() {
    _classCallCheck(this, Order);

    var _this = _possibleConstructorReturn(this, (Order.__proto__ || Object.getPrototypeOf(Order)).call(this));

    _this.host = document.createElement('div');
    _this.host.className = 'order-container';

    _this._header = new _Header2.default();
    _this._footer = new _Footer2.default();
    _this._canvas = new _Canvas2.default();
    _this._description = new _Description2.default();

    _this.main = document.createElement('main');
    _this.main.className = 'create-container';
    return _this;
  }

  _createClass(Order, [{
    key: 'beforeUpdate',
    value: function beforeUpdate() {
      var _this2 = this;

      _pizzaService2.default.preloadPizzaData().then(function () {
        return setTimeout(function () {
          var ingredients = _pizzaService2.default.ingredients,
              tags = _pizzaService2.default.tags,
              crust_image = _pizzaService2.default.crust_image;

          _this2.main.classList.add('show-slow');
          _this2.main.innerHTML = '<h1 class="create-heading">Create and order your pizza</h1>';
          _this2.main.append(_this2._canvas.update({ crust_image: crust_image }), _this2._description.update({
            ingredients: ingredients,
            tags: tags,
            onFormSubmit: _this2.createPizza.bind(_this2)
          }));
        }, 500);
      });
    }
  }, {
    key: 'createPizza',
    value: function createPizza(formData) {
      var _this3 = this;

      var canvas = document.querySelector('canvas');
      (0, _helpers.canvasToBlob)(canvas).then(function (blob) {
        formData.append('image', blob);
        _apiService2.default.createPizza(formData).then(function (response) {
          _this3._description.update({ message: response });
          if (response.success) {
            setTimeout(function () {
              window.location.hash = '/queue';
            }, 1000);
          }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var loader = document.createElement('div');
      loader.className = 'loader';
      this.main.append(loader);

      return [this._header.update({ activeLink: 'order' }), this.main, this._footer.update()];
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this._canvas.unmount();
    }
  }]);

  return Order;
}(_Component3.default);

exports.default = Order;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(22);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _EventEmitter = __webpack_require__(4);

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _helpers = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Canvas = function (_Component) {
  _inherits(Canvas, _Component);

  function Canvas() {
    _classCallCheck(this, Canvas);

    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this));

    _this.state = {
      size: 60,
      ingredients: [],
      circles: _this.fillCircles()
    };

    _this.host = document.createElement('div');
    _this.host.className = 'canvas-container';

    _this.unsubscribeIngr = _EventEmitter2.default.subscribe('ingredients-change', _this.handleIngredientsChange.bind(_this));
    _this.unsubscribeSize = _EventEmitter2.default.subscribe('size-change', _this.handleSizeChange.bind(_this));
    return _this;
  }

  _createClass(Canvas, [{
    key: 'fillCircles',
    value: function fillCircles() {
      // 5 circles with appropriate number of ingredients
      var circles = [new Array(1), new Array(4), new Array(10), new Array(18), new Array(27)];
      return circles.map(function (arr) {
        return arr.fill(0);
      });
    }
  }, {
    key: 'drawCrust',
    value: function drawCrust(ctx, crust, canvasWidth, canvasHeight) {
      ctx.drawImage(crust, -(canvasWidth / 2), -(canvasHeight / 2), canvasWidth, canvasHeight);
    }
  }, {
    key: 'drawIngredients',
    value: function drawIngredients(ctx, canvasWidth, canvasHeight, ingridientWidth, ingridientHeight) {
      var _state = this.state,
          circles = _state.circles,
          ingredients = _state.ingredients;


      ctx.translate(-(canvasWidth / 2), -(canvasHeight / 2));
      ctx.shadowOffsetX = 3;
      ctx.shadowOffsetY = 3;
      ctx.shadowBlur = 3;
      ctx.shadowColor = '#541200';

      circles.forEach(function (circle, circleIndex) {
        circle.forEach(function (cell, cellIndex) {
          if (cell !== 0) {
            var image = ingredients.find(function (_ref) {
              var id = _ref.id;
              return id === cell;
            }).image;
            var angle = 360 / circle.length * cellIndex;
            var radius = ingridientWidth / 2;
            var offset = (circleIndex * 4 - cell) / 10 * radius; // fake random

            ctx.save();
            // move to the center of canvas
            ctx.translate(canvasWidth / 2, canvasHeight / 2);
            // rotate to the center of needed cell
            ctx.rotate(angle * Math.PI / 180);
            // move to the center of needed cell with offset
            ctx.translate(circleIndex * ingridientWidth + offset, offset);
            ctx.drawImage(image, -radius, -radius, ingridientWidth, ingridientHeight);
            ctx.restore();
          }
        });
      });
    }
  }, {
    key: 'handleIngredientsChange',
    value: function handleIngredientsChange(ingr) {
      var _state2 = this.state,
          ingredients = _state2.ingredients,
          circles = _state2.circles;


      if (ingredients.includes(ingr)) {
        (0, _helpers.removeArrayElement)(ingr, ingredients);
        this.removeIngridient(ingr.id, circles);
      } else {
        ingredients.push(ingr);
        this.spreadIngridient(ingr.id, circles);
      }

      this.updateState({ ingredients: ingredients, circles: circles });
    }
  }, {
    key: 'handleSizeChange',
    value: function handleSizeChange(size) {
      this.updateState({ size: size });
    }
  }, {
    key: 'spreadIngridient',
    value: function spreadIngridient(id, circles) {
      var numberToSpread = 10;
      var counter = 1;

      while (counter <= numberToSpread) {
        var randomCircle = (0, _helpers.getRandomNumber)(0, circles.length - 1);
        var randomCell = (0, _helpers.getRandomNumber)(0, circles[randomCircle].length - 1);
        if (circles[randomCircle][randomCell] === 0) {
          circles[randomCircle][randomCell] = id;
          counter++;
        }
      }
    }
  }, {
    key: 'removeIngridient',
    value: function removeIngridient(id, circles) {
      circles.forEach(function (circle, circleIndex) {
        circle.forEach(function (cell, cellIndex) {
          if (cell === id) {
            circles[circleIndex][cellIndex] = 0;
          }
        });
      });
    }
  }, {
    key: 'startAnimation',
    value: function startAnimation(ctx, crust, ingridientWidth, ingridientHeight) {
      var _this2 = this,
          _arguments = arguments;

      var canvas = ctx.canvas;
      var time = new Date();

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds());

      this.drawCrust(ctx, crust, canvas.width, canvas.height);
      this.drawIngredients(ctx, canvas.width, canvas.height, ingridientWidth, ingridientHeight);

      ctx.restore();

      requestAnimationFrame(function () {
        _this2.startAnimation.apply(_this2, _arguments);
      });
    }
  }, {
    key: 'calculatePrice',
    value: function calculatePrice() {
      var _state3 = this.state,
          ingredients = _state3.ingredients,
          size = _state3.size;

      return ingredients.reduce(function (sum, ingr) {
        return sum + ingr.price;
      }, size / 5).toFixed(2);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var crust_image = this.props.crust_image;
      var size = this.state.size;

      var canvas = document.createElement('canvas');
      var price = document.createElement('span');
      var ctx = canvas.getContext('2d');
      var ingridientWidth = 12 * (size / 30);
      var ingridientHeight = 12 * (size / 30);

      canvas.width = 160 * (size / 30);
      canvas.height = 160 * (size / 30);

      price.className = 'total-price';
      price.textContent = this.calculatePrice() + ' $';

      requestAnimationFrame(function () {
        _this3.startAnimation(ctx, crust_image, ingridientWidth, ingridientHeight);
      });

      return [canvas, price];
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.unsubscribeIngr();
      this.unsubscribeSize();
    }
  }]);

  return Canvas;
}(_Component3.default);

exports.default = Canvas;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(24);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _helpers = __webpack_require__(2);

var _EventEmitter = __webpack_require__(4);

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _Message = __webpack_require__(5);

var _Message2 = _interopRequireDefault(_Message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Description = function (_Component) {
  _inherits(Description, _Component);

  function Description(props) {
    _classCallCheck(this, Description);

    var _this = _possibleConstructorReturn(this, (Description.__proto__ || Object.getPrototypeOf(Description)).call(this, props));

    _this.state = {
      message: null
    };

    _this.host = document.createElement('div');
    _this.host.className = 'description-container';

    _this._message = new _Message2.default('Create');

    _this.MAXIngredientsNumber = 6;
    return _this;
  }

  _createClass(Description, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          ingredients = _props.ingredients,
          tags = _props.tags,
          message = _props.message;


      var form = document.createElement('form');
      var detailsContainer = document.createElement('div');
      var ingredientsContainer = document.createElement('div');

      form.className = 'description-form';
      detailsContainer.className = 'details-container';
      ingredientsContainer.className = 'ingredients-container';

      form.addEventListener('change', this.handleChange.bind(this));
      form.addEventListener('submit', this.handleSubmit.bind(this));

      detailsContainer.innerHTML = '\n      <div class="input-container">\n        <input type="text" name="name" id="pizza-name" class="text-input" minlength="3" maxlength="24" placeholder=" " required>\n        <label for="pizza-name" data-error="Must contain at least 3 characters">Pizza name *</label>\n      </div>\n\n      <div class="input-container">\n        <textarea name="description" id="description" class="text-input" placeholder=" "></textarea>\n        <label for="description">Description (optinal)</label>\n      </div> \n\n      <p class="selection-name">Size</p>\n      <div class="radios-wrapper">\n        <p class="radio-container">\n          <input type="radio" name="size" id="small-size" value="30">\n          <label for="small-size">Small</label>\n        </p>\n        <p class="radio-container">\n          <input type="radio" name="size" id="middle-size" value="45">\n          <label for="middle-size">Middle</label>\n        </p>\n        <p class="radio-container">\n          <input type="radio" name="size" id="big-size" value="60" checked>\n          <label for="big-size">Big</label>\n        </p>\n      </div> \n\n      <p class="selection-name">Tags</p>\n      <div class="checkboxes-wrapper">\n        ' + this.getTagsCheckboxes(tags) + ' \n      </div> \n      \n      <button type="submit">Order</button> ';

      for (var ingr in ingredients) {
        var label = document.createElement('label');
        var image = ingredients[ingr].image;
        var name = document.createTextNode(ingr);

        ingredientsContainer.innerHTML += '\n        <input type="checkbox" name="ingredient" value="' + ingredients[ingr].id + '" id="' + ingr + '"> ';
        label.setAttribute('for', ingr);
        image.setAttribute('alt', ingredients[ingr].description);

        label.append(image, name);
        ingredientsContainer.appendChild(label);
      }

      var textArea = detailsContainer.querySelector('textarea');
      (0, _helpers.makeAutoResizable)(textArea);

      if (message) {
        detailsContainer.insertAdjacentElement('afterbegin', this._message.update(message));
      }

      form.append(ingredientsContainer, detailsContainer);
      return form;
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var ingredients = this.props.ingredients;

      var target = event.target;

      if (target.matches('[name=ingredient]')) {
        this.checkIngredients();
        _EventEmitter2.default.emit('ingredients-change', ingredients[target.id]);
      } else if (target.matches('[name=size]')) {
        _EventEmitter2.default.emit('size-change', target.value);
      }
    }
  }, {
    key: 'checkIngredients',
    value: function checkIngredients() {
      var addedElements = document.querySelectorAll('[name=ingredient]:checked');
      var notAddedElements = document.querySelectorAll('[name=ingredient]:not(:checked)');

      if (addedElements.length === this.MAXIngredientsNumber) {
        notAddedElements.forEach(function (checkbox) {
          checkbox.disabled = true;
        });
      } else {
        notAddedElements.forEach(function (checkbox) {
          checkbox.disabled = false;
        });
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var formData = new FormData(event.target);

      var tags = formData.getAll('tag').map(Number);
      var ingredients = formData.getAll('ingredient').map(Number);

      formData.delete('tag');
      formData.delete('ingredient');

      formData.append('tags', JSON.stringify(tags));
      formData.append('ingredients', JSON.stringify(ingredients));

      this.props.onFormSubmit(formData);
    }
  }, {
    key: 'getTagsCheckboxes',
    value: function getTagsCheckboxes(tags) {
      var html = '';
      for (var tag in tags) {
        html += '\n        <p class="checkbox-container">\n          <input type="checkbox" name="tag" id="' + tag + '" value="' + tags[tag].id + '">\n          <label for="' + tag + '">' + tag + '</label> \n        </p> ';
      }
      return html;
    }
  }]);

  return Description;
}(_Component3.default);

exports.default = Description;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apiService = __webpack_require__(1);

var _apiService2 = _interopRequireDefault(_apiService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PizzaService = function () {
  function PizzaService() {
    _classCallCheck(this, PizzaService);

    this.ingredients = null;
    this.tags = null;
    this.crust_image = null;
  }

  _createClass(PizzaService, [{
    key: 'preloadPizzaData',
    value: function preloadPizzaData() {
      return Promise.all([this.getTags(), this.getIngridients()]);
    }
  }, {
    key: 'getIngridients',
    value: function getIngridients() {
      var _this = this;

      return _apiService2.default.getIngredientList().then(function (data) {
        return _this.ingredients = _this.pullNames(data.results);
      }).then(this.loadResources.bind(this)).then(this.saveImages.bind(this));
    }
  }, {
    key: 'getTags',
    value: function getTags() {
      var _this2 = this;

      return _apiService2.default.getTagList().then(function (data) {
        return _this2.tags = _this2.pullNames(data.results);
      });
    }
  }, {
    key: 'pullNames',
    value: function pullNames(arr) {
      return arr.reduce(function (result, elem) {
        result[elem.name] = elem;
        delete result[elem.name].name;
        return result;
      }, {});
    }
  }, {
    key: 'saveImages',
    value: function saveImages(images) {
      var _this3 = this;

      images.forEach(function (img) {
        if (img.name === 'crust') {
          _this3.crust_image = img.image;
        } else {
          delete _this3.ingredients[img.name].image_url;
          _this3.ingredients[img.name].image = img.image;
        }
      });
    }
  }, {
    key: 'loadResources',
    value: function loadResources(ingredients) {
      var promises = [];
      promises.push(this.loadImage('crust', _apiService2.default.domain + '/static/images/pizza.png'));
      for (var ingr in ingredients) {
        promises.push(this.loadImage(ingr, _apiService2.default.domain + '/' + ingredients[ingr].image_url));
      }
      return Promise.all(promises);
    }
  }, {
    key: 'loadImage',
    value: function loadImage(name, url) {
      return new Promise(function (resolve, reject) {
        var img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = url;
        img.onload = function () {
          return resolve({ name: name, image: img });
        };
      });
    }
  }]);

  return PizzaService;
}();

var PIZZA_SERVICE = new PizzaService();
exports.default = PIZZA_SERVICE;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(7);

var _Footer2 = _interopRequireDefault(_Footer);

var _List = __webpack_require__(27);

var _List2 = _interopRequireDefault(_List);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Queue = function (_Component) {
  _inherits(Queue, _Component);

  function Queue() {
    _classCallCheck(this, Queue);

    var _this = _possibleConstructorReturn(this, (Queue.__proto__ || Object.getPrototypeOf(Queue)).call(this));

    _this.host = document.createElement('div');
    _this.host.className = 'queue-container';

    _this._header = new _Header2.default();
    _this._list = new _List2.default();
    _this._footer = new _Footer2.default();
    return _this;
  }

  _createClass(Queue, [{
    key: 'render',
    value: function render() {
      return [this._header.update({ activeLink: 'queue' }), this._list.update(), this._footer.update()];
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this._list.unmount();
    }
  }]);

  return Queue;
}(_Component3.default);

exports.default = Queue;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(28);

var _hourglass = __webpack_require__(29);

var _hourglass2 = _interopRequireDefault(_hourglass);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _wsService = __webpack_require__(30);

var _wsService2 = _interopRequireDefault(_wsService);

var _EventEmitter = __webpack_require__(4);

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

var _apiService = __webpack_require__(1);

var _apiService2 = _interopRequireDefault(_apiService);

var _helpers = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this));

    _this.state = {
      pizzas: null,
      count: 0
    };

    _this.host = document.createElement('main');
    _this.host.className = 'list-container show-slow';

    _wsService2.default.establish();

    _this.unsubscribeCreate = _EventEmitter2.default.subscribe('CREATE_PIZZA', _this.addPizza.bind(_this));
    _this.unsubscribeAccept = _EventEmitter2.default.subscribe('ACCEPT_PIZZA', _this.acceptPizzas.bind(_this));

    _this.getList();
    return _this;
  }

  _createClass(List, [{
    key: 'getList',
    value: function getList() {
      var _this2 = this;

      _apiService2.default.getPizzaList().then(function (data) {
        _this2.updateState({
          pizzas: data.results,
          count: data.count
        });
      });
    }
  }, {
    key: 'addPizza',
    value: function addPizza(pizza) {
      var _state = this.state,
          pizzas = _state.pizzas,
          count = _state.count;

      pizzas.push(pizza);
      this.updateState({ pizzas: pizzas, count: count + 1 });
    }
  }, {
    key: 'acceptPizzas',
    value: function acceptPizzas(uuids) {
      var _state2 = this.state,
          pizzas = _state2.pizzas,
          count = _state2.count;

      uuids.forEach(function (uuid) {
        var index = pizzas.findIndex(function (pizza) {
          return pizza.uuid === uuid;
        });
        pizzas.splice(index, 1);
      });

      this.updateState({ pizzas: pizzas, count: count - uuids.length });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state3 = this.state,
          pizzas = _state3.pizzas,
          count = _state3.count;

      var list = document.createElement('div');
      list.className = 'pizzas-list';

      if (!pizzas) {
        var loader = document.createElement('div');
        loader.className = 'loader';
        return loader;
      }

      if (!pizzas.length) {
        var waitingContainer = document.createElement('div');
        waitingContainer.className = 'waiting-container';
        waitingContainer.innerHTML = '<img src="' + _hourglass2.default + '" alt="hourglass">\n        <p>Queue is empty<br />Waiting for orders...</p> ';
        return waitingContainer;
      }

      pizzas.forEach(function (pizza, index) {
        var card = document.createElement('article');
        var timeDiff = (0, _helpers.diffBetweenDates)(new Date(), new Date(pizza.time_prepared));
        card.className = 'pizza';
        card.innerHTML = '\n        <article class="pizza">\n          <div class="order-info">\n            <span class="price">' + pizza.price + ' $</span>\n            <span class="order-number">' + (index + 1) + '</span>\n          </div>\n\n          <p class="pizza-name">' + pizza.name + '</p>\n\n          <div class="pizza-img-wrapper">\n            <img src="' + _apiService2.default.domain + '/' + pizza.img_url + '" \n                 alt="' + pizza.description + '"\n                 width="' + pizza.size / 60 * 100 + '%">\n          </div>\n\n          <div class="time-info">\n            <time class="time-of-order">' + _this3.renderDate(pizza.created_date) + '</time>\n            <span class="ready-in">Ready in: <time>' + _this3.getMinutesLeft(timeDiff) + ' min</time></span>\n          </div>\n        </article> ';

        var updateIntervalId = setInterval(function () {
          _this3.updateMinutesLeft(card, pizza.time_prepared);
        }, 1000 * 60);

        setTimeout(function () {
          clearInterval(updateIntervalId);
          _this3.setReady(card);
        }, timeDiff);

        list.appendChild(card);
      });

      if (count > pizzas.length) {
        list.appendChild(this.setShowMoreButton());
      }

      return list;
    }
  }, {
    key: 'setReady',
    value: function setReady(card) {
      var readyIn = card.querySelector('.ready-in');
      readyIn.classList.add('ready');
      readyIn.textContent = 'Ready';
      card.classList.add('twinkle');
    }
  }, {
    key: 'getMinutesLeft',
    value: function getMinutesLeft(timeDiff) {
      return Math.trunc(timeDiff / (1000 * 60) + 1);
    }
  }, {
    key: 'updateMinutesLeft',
    value: function updateMinutesLeft(card, timePrepared) {
      var timeDiff = (0, _helpers.diffBetweenDates)(new Date(), new Date(timePrepared));
      var readyInTime = card.querySelector('.ready-in time');
      readyInTime.textContent = this.getMinutesLeft(timeDiff) + ' min';
    }
  }, {
    key: 'renderDate',
    value: function renderDate(date) {
      var dateObj = new Date(date);
      return [dateObj.getHours(), dateObj.getMinutes(), dateObj.getSeconds()].map(function (n) {
        return ('' + n).padStart(2, '0');
      }).join(':');
    }
  }, {
    key: 'setShowMoreButton',
    value: function setShowMoreButton() {
      var _this4 = this;

      var pizzas = this.state.pizzas;

      var button = document.createElement('button');
      button.className = 'show-more';
      button.textContent = 'Show more';
      button.addEventListener('click', function () {
        _apiService2.default.getPizzaList(pizzas.length).then(function (data) {
          _this4.updateState({
            pizzas: pizzas.concat(data.results)
          });
        });
      });
      return button;
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.unsubscribeCreate();
      this.unsubscribeAccept();
      _wsService2.default.close();
    }
  }]);

  return List;
}(_Component3.default);

exports.default = List;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60' width='128' height='128'%3E%3Cpath d='M41.857 22.096A7.063 7.063 0 0 0 45 16.222V5H15v11.222c0 2.36 1.18 4.564 3.143 5.874l9.319 6.843a1.318 1.318 0 0 1 .001 2.122l-9.319 6.843A7.061 7.061 0 0 0 15 43.778V55h30V43.778c0-2.36-1.18-4.564-3.143-5.874l-9.319-6.843a1.318 1.318 0 0 1-.001-2.122l9.32-6.843z' data-original='%23E6E6E6' data-old_color='%23ffffff' fill='%23fff'/%3E%3Cpath data-original='%239E6C53' data-old_color='%239E6C53' fill='%23444' d='M10 55h40v4H10zm0-54h40v4H10z'/%3E%3Cpath d='M54 58H6a1 1 0 1 0 0 2h48a1 1 0 1 0 0-2zM6 2h48a1 1 0 1 0 0-2H6a1 1 0 1 0 0 2z' data-original='%238A5336' data-old_color='%238A5336' fill='%23333'/%3E%3Cpath d='M40.192 19.6A4.053 4.053 0 0 0 42 16.223a2.847 2.847 0 0 0-2.156-2.762L24.791 9.698C21.342 8.835 18 11.444 18 15v1.223c0 1.359.676 2.622 1.808 3.377L29 26.346v15.877c0 3.63-3.764 6.036-7.058 4.511-1.774-.821-3.922.394-3.941 2.349V55h24V43.736c-.019-1.931-1.889-3.322-3.791-2.991l-2.049.357A4.405 4.405 0 0 1 31 36.763V26.346l9.192-6.746z' data-original='%23EBBA16' class='active-path' data-old_color='%23f49136' fill='%23f49136'/%3E%3C/svg%3E"

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _apiService = __webpack_require__(1);

var _apiService2 = _interopRequireDefault(_apiService);

var _EventEmitter = __webpack_require__(4);

var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WsService = function () {
  function WsService() {
    _classCallCheck(this, WsService);

    this.ws = null;
    this.wsUrl = 'wss://pizza-tele.ga/ws';
  }

  _createClass(WsService, [{
    key: 'establish',
    value: function establish() {
      var _this = this;

      _apiService2.default.getTicket().then(function (response) {
        if (response.success) {
          _this.handshake(response.token);
        }
      });
    }
  }, {
    key: 'onmessage',
    value: function onmessage(message) {
      message = JSON.parse(message);
      _EventEmitter2.default.emit(message.event_name, message.data);
    }
  }, {
    key: 'onclose',
    value: function onclose(event) {
      var _this2 = this;

      if (event.code === 4001) {
        window.location.hash = '/login';
      } else {
        setTimeout(function () {
          return _this2.establish;
        }, 1000);
      }
    }
  }, {
    key: 'handshake',
    value: function handshake(token) {
      var _this3 = this;

      this.ws = new WebSocket(this.wsUrl + '?key=' + token);
      this.ws.onmessage = function (event) {
        return _this3.onmessage(event.data);
      };
      this.ws.onclose = function () {
        return _this3.onclose;
      };
    }
  }, {
    key: 'close',
    value: function close() {
      this.ws.onclose = function () {};
      this.ws.close();
    }
  }]);

  return WsService;
}();

var WS_SERVICE = new WsService();
exports.default = WS_SERVICE;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

var _Header = __webpack_require__(6);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(7);

var _Footer2 = _interopRequireDefault(_Footer);

var _UserInfo = __webpack_require__(32);

var _UserInfo2 = _interopRequireDefault(_UserInfo);

var _apiService = __webpack_require__(1);

var _apiService2 = _interopRequireDefault(_apiService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    _classCallCheck(this, Profile);

    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));

    _this.state = {
      userInfo: null
    };

    _this.host = document.createElement('div');
    _this.host.className = 'profile-container';

    _this._header = new _Header2.default();
    _this._userInfo = new _UserInfo2.default();
    _this._footer = new _Footer2.default();

    _this.getUserInfo();
    return _this;
  }

  _createClass(Profile, [{
    key: 'getUserInfo',
    value: function getUserInfo() {
      var _this2 = this;

      _apiService2.default.getUserInfo().then(function (userInfo) {
        return _this2.updateState({ userInfo: userInfo });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var userInfo = this.state.userInfo;


      return [this._header.update({ activeLink: 'profile' }), this._userInfo.update({ userInfo: userInfo }), this._footer.update()];
    }
  }]);

  return Profile;
}(_Component3.default);

exports.default = Profile;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(33);

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfo = function (_Component) {
  _inherits(UserInfo, _Component);

  function UserInfo() {
    _classCallCheck(this, UserInfo);

    var _this = _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this));

    _this.host = document.createElement('main');
    _this.host.className = 'user-info-container';
    return _this;
  }

  _createClass(UserInfo, [{
    key: 'render',
    value: function render() {
      var userInfo = this.props.userInfo;

      var table = document.createElement('table');

      if (!!userInfo) {
        userInfo.created_at = this.renderDate(userInfo.created_at);
        userInfo.last_login = this.renderDate(userInfo.last_login);

        for (var key in userInfo) {
          table.innerHTML += '\n          <tr>\n            <th>' + key.replace('_', ' ') + '</th>\n            <td>' + userInfo[key] + '</td>\n          </tr>';
        }
      }

      return table;
    }
  }, {
    key: 'renderDate',
    value: function renderDate(date) {
      var dateObj = new Date(date);
      return [dateObj.getDate(), dateObj.getMonth() + 1, dateObj.getFullYear()].map(function (n) {
        return ('' + n).padStart(2, '0');
      }).join('.');
    }
  }]);

  return UserInfo;
}(_Component3.default);

exports.default = UserInfo;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);