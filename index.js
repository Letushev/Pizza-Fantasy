!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){a(this,e),this.state={},this.props=t||{},this.host=null}return o(e,[{key:"update",value:function(e){return this.props=e,this._render()}},{key:"updateState",value:function(e){this.state=Object.assign({},this.state,e),this._render()}},{key:"_render",value:function(){var e=this.render();if(this.host.innerHTML="",Array.isArray(e)){var t;(t=this.host).append.apply(t,r(e))}else this.host.append(e);return this.host}},{key:"render",value:function(){}}]),e}();t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(2);var a=n(3),o=r(a),i=n(4),s=r(i),l=document.getElementById("root");new o.default(l,s.default)},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(s),u=function(e){function t(e,n){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.state={routes:n,activeRoute:null,activeComponent:null},o.host=e,window.addEventListener("hashchange",function(){o.handleUrlChange(o.path)}),o.handleUrlChange(o.path),o}return o(t,e),i(t,[{key:"handleUrlChange",value:function(e){var t=this.state.routes,n=t.find(function(t){return t.href===e});n?n!==this.state.activeRoute&&this.applyRoute(n):this.navigateTo("/")}},{key:"navigateTo",value:function(e){window.location.hash=e}},{key:"applyRoute",value:function(e){var t=new e.component;this.updateState({activeRoute:e,activeComponent:t})}},{key:"render",value:function(){return this.state.activeComponent.update()}},{key:"path",get:function(){return window.location.hash.slice(1)}}]),t}(l.default);t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(5),o=r(a),i=n(8),s=r(i),l=[{href:"/login",component:o.default},{href:"/signup",component:s.default}];t.default=l},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(6);var l=n(7),u=r(l),c=n(0),d=r(c),f=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.host=document.createElement("div"),e.host.className="login-wrapper",e}return i(t,e),s(t,[{key:"render",value:function(){var e=document.createElement("img");e.src=u.default;var t=document.createElement("form");return t.innerHTML='\n      <div class="input-container">\n        <input type="text" id="username" name="username" minlength="2" maxlength="24" placeholder=" " required>\n        <label for="username">Username</label>\n      </div>\n\n      <div class="input-container">\n        <input type="password" name="password" id="password" minlength="8" placeholder=" " required>\n        <label for="password">Password</label>\n      </div>\n\n      <button type="submit">Log in</button> \n      <p class="help-form-message">New to Pizza Fantasy? <a href="#/signup">Sign&nbsp;up</a></p>',[e,t]}}]),t}(d.default);t.default=f},function(e,t){},function(e,t){e.exports="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='256' height='256'%3E%3Cpath d='M147.663 304.46h-7.611c-32.177 0-58.355-26.177-58.355-58.355s26.177-58.355 58.355-58.355h7.611v15.223h-7.611c-23.783 0-43.132 19.348-43.132 43.132s19.348 43.132 43.132 43.132h7.611v15.223z' data-original='%23F63E31' data-old_color='%23f44336' fill='%23f44336'/%3E%3Cpath d='M249.02 497.166l-25.242-8.413V292.818h-15.223v201.419a7.61 7.61 0 0 0 5.204 7.221l30.446 10.149a7.616 7.616 0 0 0 2.408.393 7.616 7.616 0 0 0 7.22-5.206 7.61 7.61 0 0 0-4.813-9.628z' data-original='%233C9997' class='active-path' data-old_color='%23045c68' fill='%23045c68'/%3E%3Cpath d='M147.663 488.752l-25.242 8.413a7.612 7.612 0 0 0 4.814 14.441l30.446-10.149a7.61 7.61 0 0 0 5.204-7.221v-201.42h-15.223v195.936z' data-original='%2351B5B2' data-old_color='%23045C68' fill='%23238795'/%3E%3Cpath d='M362.177 167.761a81.81 81.81 0 0 1-14.694 19.989c-32.006 32.008-84.087 32.008-116.094 0a83.259 83.259 0 0 1-4.404-4.766H208.03a96.922 96.922 0 0 0 12.593 15.532c18.972 18.971 43.892 28.457 68.812 28.457s49.839-9.486 68.812-28.457c8.98-8.98 15.982-19.408 20.802-30.755h-16.872z' data-original='%23EE1F3D' data-old_color='%23FF1744' fill='%23d50000'/%3E%3Cpath d='M185.721 258.791v76.115c25.222 0 45.669-20.447 45.669-45.669l-45.669-30.446z' data-original='%233C9997' class='active-path' data-old_color='%23045c68' fill='%23045c68'/%3E%3Cpath d='M200.944 289.237l-15.223-30.446-45.669 30.446c0 25.222 20.447 45.669 45.669 45.669 8.407 0 15.223-20.447 15.223-45.669z' data-original='%2351B5B2' data-old_color='%23045C68' fill='%23238795'/%3E%3Cpath d='M211.092 167.453h-10.149l-20.297 30.446 20.297 91.338h30.446V187.75c0-11.21-9.087-20.297-20.297-20.297z' data-original='%23EE1F3D' data-old_color='%23FF1744' fill='%23d50000'/%3E%3Cpath d='M193.332 167.453l-7.611 25.372-7.611-25.372h-17.76c-11.21 0-20.297 9.087-20.297 20.297v101.487h60.892V167.453h-7.613z' data-original='%23F63E31' data-old_color='%23f44336' fill='%23f44336'/%3E%3Cpath d='M185.721 55.818v81.189c25.222 0 45.669-20.447 45.669-45.669V76.115l-45.669-20.297z' data-original='%23D69C6E' fill='%23d69c6e'/%3E%3Cpath d='M200.944 91.338v-35.52l-60.892 20.297v15.223c0 25.222 20.447 45.669 45.669 45.669 8.407 0 15.223-20.447 15.223-45.669z' data-original='%23E4B780' fill='%23e4b780'/%3E%3Cpath d='M185.721 30.446c-25.222 0-45.669 20.447-45.669 45.669h91.338c-.001-25.223-20.447-45.669-45.669-45.669z' data-original='%23EE1F3D' data-old_color='%23FF1744' fill='%23d50000'/%3E%3Cpath d='M81.697 68.503c-4.205 0-7.611 3.407-7.611 7.611s3.407 7.611 7.611 7.611H231.39v-7.611l-10.149-7.611H81.697z' data-original='%23EE1F3D' data-old_color='%23FF1744' fill='%23d50000'/%3E%3Cpath d='M178.109 167.453v121.784c0 4.205 3.407 7.611 7.611 7.611s7.611-3.407 7.611-7.611V167.453h-15.222z' data-original='%23CDF2F1' fill='%23cdf2f1'/%3E%3Cpath data-original='%23F2D392' fill='%23f2d392' d='M437.915 30.446l-81.19-15.223 50.744 167.453h30.446V152.23l-15.223-15.223 15.223-15.223V91.338l-15.223-15.223 15.223-15.223z'/%3E%3Cpath data-original='%23FFE368' fill='%23ffe368' d='M278.581 30.446v30.446l63.387 14.973-63.387 15.473v30.446l63.387 14.973-63.387 15.473v30.446h128.888V15.223z'/%3E%3Cpath data-original='%23FFE368' fill='%23ffe368' d='M407.469 121.784l-30.446 15.223 30.446 15.223h30.446v-30.446z'/%3E%3Cpath data-original='%23FFEFAB' fill='%23ffefab' d='M278.581 121.784h128.888v30.446H278.581z'/%3E%3Cpath data-original='%23FFE368' fill='%23ffe368' d='M407.469 60.892l-30.446 15.223 30.446 15.223h30.446V60.892z'/%3E%3Cpath data-original='%23FFEFAB' fill='%23ffefab' d='M278.581 60.892h128.888v30.446H278.581z'/%3E%3Cpath data-original='%23FFE368' fill='%23ffe368' d='M407.469 0l-30.446 15.223 30.446 15.223h30.446V0z'/%3E%3Cpath data-original='%23FFEFAB' fill='%23ffefab' d='M278.581 0h128.888v30.446H278.581z'/%3E%3C/svg%3E"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(9);var l=n(0),u=r(l),c=n(10),d=r(c),f=n(11),p=function(e){function t(){a(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={stores:[],errors:{usernameError:"",passwordError:"",storeError:""}},e.host=document.createElement("div"),e.host.className="signup-wrapper",e.getStoreList(),e.host.addEventListener("submit",e.handleSubmit.bind(e)),e}return i(t,e),s(t,[{key:"getStoreList",value:function(){var e=this;d.default.getStoreList().then(function(t){return e.updateState({stores:t})})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=e.target,r={username:n.username.value.trim(),password:n.password.value.trim(),password_repeat:n.password_repeat.value.trim(),email:n.email.value.trim(),store_id:parseInt(n.store_id.value),store_password:n.store_password.value.trim()};d.default.signupUser(r).then(function(e){e.success?t.handleSuccess():t.handleFailure(e.validations)})}},{key:"render",value:function(){var e=document.createElement("form"),t=this.getSelectOptions(this.state.stores),n=this.state.errors,r=n.usernameError,a=n.passwordError,o=n.storeError;return e.innerHTML='\n      <div class="input-container">\n        <input type="text" name="username" id="username" minlength="2" maxlength="24" placeholder=" " required>\n        <label for="username">Username</label>\n        <p class="error-message">'+r+'</p>\n      </div>\n     \n      <div class="input-container">\n        <input type="password" name="password" id="password" minlength="8" placeholder=" " required>\n        <label for="password">Password</label>\n      </div>\n     \n      <div class="input-container">\n        <input type="password" name="password_repeat" id="password_repeat" placeholder=" " required>\n        <label for="confirm_password">Confirm password</label>\n        <p class="error-message">'+a+'</p>\n      </div>\n     \n      <div class="input-container">\n        <input type="email" name="email" id="email" placeholder=" " required>\n        <label for="email">Email</label>\n      </div>\n     \n      <p class="select-wrapper">\n        <select name="store_id" id="store_id" required>\n          <option selected disabled value="">Select the store</option>\n          '+t+'\n        </select>\n      </p>\n     \n      <div class="input-container">\n        <input type="password" name="store_password" id="store_password" minlength="8" placeholder=" " required>\n        <label for="store_password">Store password</label>\n        <p class="error-message">'+o+'</p>\n      </div>\n     \n      <button type="submit">Sign Up</button>\n      <p class="help-form-message">Already have an account? <a href="#/login">Log&nbsp;in</a></p> ',e}},{key:"handleSuccess",value:function(){}},{key:"handleFailure",value:function(e){console.log(e);var t=this.state.errors;t.usernameError=e.includes(f.ERRORS.username)?f.ERRORS.username:"",t.passwordError=e.includes(f.ERRORS.password)?f.ERRORS.password:"",t.storeError=e.includes(f.ERRORS.store)?f.ERRORS.store:"",this.updateState({errors:t})}},{key:"getSelectOptions",value:function(e){return e.reduce(function(e,t){return e+='<option value="'+t.id+'">'+t.name+"</option>"},"")}}]),t}(u.default);t.default=p},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){r(this,e),this.domain="https://pizza-tele.ga",this.baseUrl=this.domain+"/api/v1",this.urlPaths={storeList:"/store/list",userCreate:"/user/create",userLogin:"/user/login",userInfo:"/user/my_info"}}return a(e,[{key:"getStoreList",value:function(){return this.get(this.urlPaths.storeList)}},{key:"signupUser",value:function(e){return this.post(this.urlPaths.userCreate,e)}},{key:"get",value:function(e){var t=new Headers;return t.append("content-type","application/json"),fetch(this.baseUrl+e,{method:"GET",headers:t}).then(function(e){return e.json()})}},{key:"post",value:function(e,t){var n=new Headers;return n.append("content-type","application/json"),fetch(this.baseUrl+e,{method:"POST",body:JSON.stringify(t),headers:n}).then(function(e){return e.json()})}}]),e}(),i=new o;t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ERRORS={username:"User with such username already exists",password:"Passwords do not match",store:"Wrong store credentials"}}]);