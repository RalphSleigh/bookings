webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactRedux = __webpack_require__(183);
	
	var _util = __webpack_require__(231);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _routes = __webpack_require__(233);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _store = __webpack_require__(490);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var provider = _react2.default.createElement(
	  _reactRedux.Provider,
	  { store: _store2.default },
	  _routes2.default
	);
	
	(0, _reactDom.render)(provider, document.getElementById('root'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.guestUUID = undefined;
	
	var _jsCookie = __webpack_require__(232);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//set up a UUID as a bookings key in local storage so guest users can edit previous bookings done in their browser.
	var guestUUID = ''; //utility functions
	
	
	if (localStorage.guestUUID) exports.guestUUID = guestUUID = localStorage.guestUUID;else localStorage.guestUUID = exports.guestUUID = guestUUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	    var r = Math.random() * 16 | 0,
	        v = c == 'x' ? r : r & 0x3 | 0x8;
	    return v.toString(16);
	});
	
	_jsCookie2.default.set("guestUUID", guestUUID);
	
	exports.guestUUID = guestUUID;

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	 * JavaScript Cookie v2.1.3
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */
	;(function (factory) {
		var registeredInModuleLoader = false;
		if (true) {
			!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
			registeredInModuleLoader = true;
		}
		if (( false ? 'undefined' : _typeof(exports)) === 'object') {
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	})(function () {
		function extend() {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[i];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}
	
		function init(converter) {
			function api(key, value, attributes) {
				var result;
				if (typeof document === 'undefined') {
					return;
				}
	
				// Write
	
				if (arguments.length > 1) {
					attributes = extend({
						path: '/'
					}, api.defaults, attributes);
	
					if (typeof attributes.expires === 'number') {
						var expires = new Date();
						expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
						attributes.expires = expires;
					}
	
					try {
						result = JSON.stringify(value);
						if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}
	
					if (!converter.write) {
						value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}
	
					key = encodeURIComponent(String(key));
					key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
					key = key.replace(/[\(\)]/g, escape);
	
					return document.cookie = [key, '=', value, attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
					attributes.path ? '; path=' + attributes.path : '', attributes.domain ? '; domain=' + attributes.domain : '', attributes.secure ? '; secure' : ''].join('');
				}
	
				// Read
	
				if (!key) {
					result = {};
				}
	
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all. Also prevents odd result when
				// calling "get()"
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var rdecode = /(%[0-9A-Z]{2})+/g;
				var i = 0;
	
				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');
	
					if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}
	
					try {
						var name = parts[0].replace(rdecode, decodeURIComponent);
						cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);
	
						if (this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}
	
						if (key === name) {
							result = cookie;
							break;
						}
	
						if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}
	
				return result;
			}
	
			api.set = api;
			api.get = function (key) {
				return api.call(api, key);
			};
			api.getJSON = function () {
				return api.apply({
					json: true
				}, [].slice.call(arguments));
			};
			api.defaults = {};
	
			api.remove = function (key, attributes) {
				api(key, '', extend(attributes, {
					expires: -1
				}));
			};
	
			api.withConverter = init;
	
			return api;
		}
	
		return init(function () {});
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(234);
	
	var _app = __webpack_require__(290);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _user = __webpack_require__(296);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _events = __webpack_require__(302);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _bookings = __webpack_require__(439);
	
	var _bookings2 = _interopRequireDefault(_bookings);
	
	var _manage = __webpack_require__(484);
	
	var _manage2 = _interopRequireDefault(_manage);
	
	var _store = __webpack_require__(490);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.browserHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/', component: _app2.default /*Loads User, Events and User's own Bookings*/ },
			_react2.default.createElement(_reactRouter.IndexRoute, { component: _events2.default.listPage }),
			_react2.default.createElement(_reactRouter.Route, { path: 'user', component: _user2.default.userPage }),
			_react2.default.createElement(_reactRouter.Route, { path: 'event/create', component: _events2.default.createPage }),
			_react2.default.createElement(
				_reactRouter.Route,
				{ path: 'event/:eventId/' },
				_react2.default.createElement(_reactRouter.Route, { path: 'book', component: _bookings2.default.myBookingPage }),
				_react2.default.createElement(_reactRouter.Route, { path: 'book/thanks', component: _bookings2.default.thanksPage }),
				_react2.default.createElement(_reactRouter.Route, { path: 'edit', component: _events2.default.editPage }),
				_react2.default.createElement(
					_reactRouter.Route,
					{ path: 'manage', component: _manage2.default.containerPage /* Loads all Bookings for an event */ },
					_react2.default.createElement(_reactRouter.IndexRoute, { component: _manage2.default.participants }),
					_react2.default.createElement(_reactRouter.Route, { path: 'participants', component: _manage2.default.participants }),
					_react2.default.createElement(_reactRouter.Route, { path: 'bookings', component: _manage2.default.bookings }),
					_react2.default.createElement(_reactRouter.Route, { path: 'kp', component: _manage2.default.kp })
				)
			),
			_react2.default.createElement(
				_reactRouter.Route,
				{ path: 'booking/:bookingId/' },
				_react2.default.createElement(_reactRouter.Route, { path: 'edit', component: _bookings2.default.editPage })
			)
		)
	);

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.RouterContext = exports.createRoutes = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;
	
	var _RouteUtils = __webpack_require__(235);
	
	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});
	
	var _PropTypes = __webpack_require__(236);
	
	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes.routerShape;
	  }
	});
	
	var _PatternUtils = __webpack_require__(237);
	
	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});
	
	var _Router2 = __webpack_require__(239);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _Link2 = __webpack_require__(255);
	
	var _Link3 = _interopRequireDefault(_Link2);
	
	var _IndexLink2 = __webpack_require__(256);
	
	var _IndexLink3 = _interopRequireDefault(_IndexLink2);
	
	var _withRouter2 = __webpack_require__(257);
	
	var _withRouter3 = _interopRequireDefault(_withRouter2);
	
	var _IndexRedirect2 = __webpack_require__(259);
	
	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);
	
	var _IndexRoute2 = __webpack_require__(261);
	
	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);
	
	var _Redirect2 = __webpack_require__(260);
	
	var _Redirect3 = _interopRequireDefault(_Redirect2);
	
	var _Route2 = __webpack_require__(262);
	
	var _Route3 = _interopRequireDefault(_Route2);
	
	var _RouterContext2 = __webpack_require__(251);
	
	var _RouterContext3 = _interopRequireDefault(_RouterContext2);
	
	var _match2 = __webpack_require__(263);
	
	var _match3 = _interopRequireDefault(_match2);
	
	var _useRouterHistory2 = __webpack_require__(277);
	
	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);
	
	var _applyRouterMiddleware2 = __webpack_require__(278);
	
	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);
	
	var _browserHistory2 = __webpack_require__(279);
	
	var _browserHistory3 = _interopRequireDefault(_browserHistory2);
	
	var _hashHistory2 = __webpack_require__(287);
	
	var _hashHistory3 = _interopRequireDefault(_hashHistory2);
	
	var _createMemoryHistory2 = __webpack_require__(265);
	
	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.Router = _Router3.default; /* components */
	
	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;
	
	/* components (configuration) */
	
	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;
	
	/* utils */
	
	exports.RouterContext = _RouterContext3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;
	
	/* histories */
	
	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}
	
	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}
	
	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}
	
	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);
	
	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);
	
	    if (childRoutes.length) route.childRoutes = childRoutes;
	
	    delete route.children;
	  }
	
	  return route;
	}
	
	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];
	
	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);
	
	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });
	
	  return routes;
	}
	
	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }
	
	  return routes;
	}

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.locationShape = exports.routerShape = undefined;
	
	var _react = __webpack_require__(1);
	
	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});
	
	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}
	
	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];
	
	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }
	
	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }
	
	    tokens.push(match[0]);
	
	    lastIndex = matcher.lastIndex;
	  }
	
	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }
	
	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}
	
	var CompiledPatternsCache = Object.create(null);
	
	function compilePattern(pattern) {
	  if (!CompiledPatternsCache[pattern]) CompiledPatternsCache[pattern] = _compilePattern(pattern);
	
	  return CompiledPatternsCache[pattern];
	}
	
	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }
	
	  var _compilePattern2 = compilePattern(pattern),
	      regexpSource = _compilePattern2.regexpSource,
	      paramNames = _compilePattern2.paramNames,
	      tokens = _compilePattern2.tokens;
	
	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }
	
	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }
	
	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }
	
	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);
	
	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }
	
	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }
	
	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}
	
	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}
	
	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }
	
	  var paramNames = match.paramNames,
	      paramValues = match.paramValues;
	
	  var params = {};
	
	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });
	
	  return params;
	}
	
	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};
	
	  var _compilePattern3 = compilePattern(pattern),
	      tokens = _compilePattern3.tokens;
	
	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0,
	      parenHistory = [];
	
	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];
	
	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;
	
	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;
	
	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenHistory[parenCount] = '';
	      parenCount += 1;
	    } else if (token === ')') {
	      var parenText = parenHistory.pop();
	      parenCount -= 1;
	
	      if (parenCount) parenHistory[parenCount - 1] += parenText;else pathname += parenText;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];
	
	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;
	
	      if (paramValue == null) {
	        if (parenCount) {
	          parenHistory[parenCount - 1] = '';
	
	          var curTokenIdx = tokens.indexOf(token);
	          var tokensSubset = tokens.slice(curTokenIdx, tokens.length);
	          var nextParenIdx = -1;
	
	          for (var _i = 0; _i < tokensSubset.length; _i++) {
	            if (tokensSubset[_i] == ')') {
	              nextParenIdx = _i;
	              break;
	            }
	          }
	
	          !(nextParenIdx > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren at segment "%s"', pattern, tokensSubset.join('')) : (0, _invariant2.default)(false) : void 0;
	
	          // jump to ending paren
	          i = curTokenIdx + nextParenIdx - 1;
	        }
	      } else if (parenCount) parenHistory[parenCount - 1] += encodeURIComponent(paramValue);else pathname += encodeURIComponent(paramValue);
	    } else {
	      if (parenCount) parenHistory[parenCount - 1] += token;else pathname += token;
	    }
	  }
	
	  !(parenCount <= 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Path "%s" is missing end paren', pattern) : (0, _invariant2.default)(false) : void 0;
	
	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createTransitionManager2 = __webpack_require__(240);
	
	var _createTransitionManager3 = _interopRequireDefault(_createTransitionManager2);
	
	var _InternalPropTypes = __webpack_require__(250);
	
	var _RouterContext = __webpack_require__(251);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _RouteUtils = __webpack_require__(235);
	
	var _RouterUtils = __webpack_require__(254);
	
	var _routerWarning = __webpack_require__(241);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	var _React$PropTypes = _react2.default.PropTypes,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;
	
	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */
	
	var Router = _react2.default.createClass({
	  displayName: 'Router',
	
	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,
	
	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  createRouterObject: function createRouterObject(state) {
	    var matchContext = this.props.matchContext;
	
	    if (matchContext) {
	      return matchContext.router;
	    }
	
	    var history = this.props.history;
	
	    return (0, _RouterUtils.createRouterObject)(history, this.transitionManager, state);
	  },
	  createTransitionManager: function createTransitionManager() {
	    var matchContext = this.props.matchContext;
	
	    if (matchContext) {
	      return matchContext.transitionManager;
	    }
	
	    var history = this.props.history;
	    var _props = this.props,
	        routes = _props.routes,
	        children = _props.children;
	
	    !history.getCurrentLocation ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v2.x or ' + 'earlier. This version of React Router is only compatible with v3 ' + 'history objects. Please upgrade to history v3.x.') : (0, _invariant2.default)(false) : void 0;
	
	    return (0, _createTransitionManager3.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;
	
	    this.transitionManager = this.createTransitionManager();
	    this.router = this.createRouterObject(this.state);
	
	    this._unlisten = this.transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        // Keep the identity of this.router because of a caveat in ContextUtils:
	        // they only work if the object identity is preserved.
	        (0, _RouterUtils.assignRouterState)(_this.router, state);
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });
	  },
	
	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;
	
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state,
	        location = _state.location,
	        routes = _state.routes,
	        params = _state.params,
	        components = _state.components;
	
	    var _props2 = this.props,
	        createElement = _props2.createElement,
	        render = _props2.render,
	        props = _objectWithoutProperties(_props2, ['createElement', 'render']);
	
	    if (location == null) return null; // Async match
	
	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });
	
	    return render(_extends({}, props, {
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});
	
	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	exports.default = createTransitionManager;
	
	var _routerWarning = __webpack_require__(241);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _computeChangedRoutes2 = __webpack_require__(243);
	
	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);
	
	var _TransitionUtils = __webpack_require__(244);
	
	var _isActive2 = __webpack_require__(246);
	
	var _isActive3 = _interopRequireDefault(_isActive2);
	
	var _getComponents = __webpack_require__(247);
	
	var _getComponents2 = _interopRequireDefault(_getComponents);
	
	var _matchRoutes = __webpack_require__(249);
	
	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}
	
	function createTransitionManager(history, routes) {
	  var state = {};
	
	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location, indexOnly) {
	    location = history.createLocation(location);
	
	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }
	
	  var partialNextState = void 0;
	
	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }
	
	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState),
	        leaveRoutes = _computeChangedRoutes.leaveRoutes,
	        changeRoutes = _computeChangedRoutes.changeRoutes,
	        enterRoutes = _computeChangedRoutes.enterRoutes;
	
	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes, state);
	
	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);
	
	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);
	
	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });
	
	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);
	
	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }
	
	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, redirectInfo);
	    }
	  }
	
	  var RouteGuid = 1;
	
	  function getRouteID(route) {
	    var create = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }
	
	  var RouteHooks = Object.create(null);
	
	  function getRouteHooksForRoutes(routes) {
	    return routes.map(function (route) {
	      return RouteHooks[getRouteID(route)];
	    }).filter(function (hook) {
	      return hook;
	    });
	  }
	
	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }
	
	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });
	
	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);
	
	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }
	
	      callback(result);
	    });
	  }
	
	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);
	
	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }
	
	      return message;
	    }
	  }
	
	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;
	
	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route);
	    if (!routeID) {
	      return;
	    }
	
	    delete RouteHooks[routeID];
	
	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }
	
	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }
	
	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);
	    var routeID = getRouteID(route, true);
	
	    RouteHooks[routeID] = hook;
	
	    if (thereWereNoRouteHooks) {
	      // setup transition & beforeunload hooks
	      unlistenBefore = history.listenBefore(transitionHook);
	
	      if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	    }
	
	    return function () {
	      removeListenBeforeHooksForRoute(route);
	    };
	  }
	
	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    function historyListener(location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.replace(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    }
	
	    // TODO: Only use a single history listener. Otherwise we'll end up with
	    // multiple concurrent calls to match.
	
	    // Set up the history listener first in case the initial match redirects.
	    var unsubscribe = history.listen(historyListener);
	
	    if (state.location) {
	      // Picking up on a matchContext.
	      listener(null, state);
	    } else {
	      historyListener(history.getCurrentLocation());
	    }
	
	    return unsubscribe;
	  }
	
	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;
	
	var _warning = __webpack_require__(242);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var warned = {};
	
	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }
	
	    warned[message] = true;
	  }
	
	  message = '[react-router] ' + message;
	
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}
	
	function _resetWarned() {
	  warned = {};
	}

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function warning() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function warning(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.length < 10 || /^[s\W]*$/.test(format)) {
	      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(237);
	
	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;
	
	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);
	
	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}
	
	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;
	
	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });
	
	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();
	
	      enterRoutes = [];
	      changeRoutes = [];
	
	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;
	
	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }
	
	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}
	
	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;
	
	var _AsyncUtils = __webpack_require__(245);
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var PendingHooks = function PendingHooks() {
	  var _this = this;
	
	  _classCallCheck(this, PendingHooks);
	
	  this.hooks = [];
	
	  this.add = function (hook) {
	    return _this.hooks.push(hook);
	  };
	
	  this.remove = function (hook) {
	    return _this.hooks = _this.hooks.filter(function (h) {
	      return h !== hook;
	    });
	  };
	
	  this.has = function (hook) {
	    return _this.hooks.indexOf(hook) !== -1;
	  };
	
	  this.clear = function () {
	    return _this.hooks = [];
	  };
	};
	
	var enterHooks = new PendingHooks();
	var changeHooks = new PendingHooks();
	
	function createTransitionHook(hook, route, asyncArity, pendingHooks) {
	  var isSync = hook.length < asyncArity;
	
	  var transitionHook = function transitionHook() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    hook.apply(route, args);
	
	    if (isSync) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	
	  pendingHooks.add(transitionHook);
	
	  return transitionHook;
	}
	
	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3, enterHooks));
	    return hooks;
	  }, []);
	}
	
	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4, changeHooks));
	    return hooks;
	  }, []);
	}
	
	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }
	
	  var redirectInfo = void 0;
	  function replace(location) {
	    redirectInfo = location;
	  }
	
	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	
	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  enterHooks.clear();
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (enterHooks.has(hooks[index])) {
	        next();
	        enterHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](nextState, replace, wrappedNext);
	  }, callback);
	}
	
	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  changeHooks.clear();
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    var wrappedNext = function wrappedNext() {
	      if (changeHooks.has(hooks[index])) {
	        next();
	        changeHooks.remove(hooks[index]);
	      }
	    };
	    hooks[index](state, nextState, replace, wrappedNext);
	  }, callback);
	}
	
	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes, prevState) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i], prevState);
	  }
	}

/***/ },
/* 245 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;
	
	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }
	
	    callback.apply(this, arguments);
	  }
	
	  function next() {
	    if (isDone) {
	      return;
	    }
	
	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }
	
	    sync = true;
	
	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }
	
	    sync = false;
	
	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }
	
	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }
	
	  next();
	}
	
	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];
	
	  if (length === 0) return callback(null, values);
	
	  var isDone = false,
	      doneCount = 0;
	
	  function done(index, error, value) {
	    if (isDone) return;
	
	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;
	
	      isDone = ++doneCount === length;
	
	      if (isDone) callback(null, values);
	    }
	  }
	
	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	exports.default = isActive;
	
	var _PatternUtils = __webpack_require__(237);
	
	function deepEqual(a, b) {
	  if (a == b) return true;
	
	  if (a == null || b == null) return false;
	
	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }
	
	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }
	
	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }
	
	    return true;
	  }
	
	  return String(a) === String(b);
	}
	
	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }
	
	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }
	
	  return currentPathname === pathname;
	}
	
	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];
	
	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';
	
	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }
	
	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	
	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }
	
	  return false;
	}
	
	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;
	
	  if (query == null) return true;
	
	  return deepEqual(query, activeQuery);
	}
	
	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname,
	      query = _ref.query;
	
	  if (currentLocation == null) return false;
	
	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }
	
	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }
	
	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _AsyncUtils = __webpack_require__(245);
	
	var _PromiseUtils = __webpack_require__(248);
	
	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }
	
	  var getComponent = route.getComponent || route.getComponents;
	  if (getComponent) {
	    var componentReturn = getComponent.call(route, nextState, callback);
	    if ((0, _PromiseUtils.isPromise)(componentReturn)) componentReturn.then(function (component) {
	      return callback(null, component);
	    }, callback);
	  } else {
	    callback();
	  }
	}
	
	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}
	
	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },
/* 248 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.isPromise = isPromise;
	function isPromise(obj) {
	  return obj && typeof obj.then === 'function';
	}

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	exports.default = matchRoutes;
	
	var _AsyncUtils = __webpack_require__(245);
	
	var _PromiseUtils = __webpack_require__(248);
	
	var _PatternUtils = __webpack_require__(237);
	
	var _routerWarning = __webpack_require__(241);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _RouteUtils = __webpack_require__(235);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }
	
	  var sync = true,
	      result = void 0;
	
	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };
	
	  var childRoutesReturn = route.getChildRoutes(partialNextState, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }
	
	    callback(error, childRoutes);
	  });
	
	  if ((0, _PromiseUtils.isPromise)(childRoutesReturn)) childRoutesReturn.then(function (childRoutes) {
	    return callback(null, (0, _RouteUtils.createRoutes)(childRoutes));
	  }, callback);
	
	  sync = false;
	  return result; // Might be undefined.
	}
	
	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };
	
	    var indexRoutesReturn = route.getIndexRoute(partialNextState, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	
	    if ((0, _PromiseUtils.isPromise)(indexRoutesReturn)) indexRoutesReturn.then(function (indexRoute) {
	      return callback(null, (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    }, callback);
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });
	
	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}
	
	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];
	
	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }
	
	    return params;
	  }, params);
	}
	
	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}
	
	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';
	
	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }
	
	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }
	
	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };
	
	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;
	
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }
	
	            callback(null, match);
	          }
	        });
	
	        return {
	          v: void 0
	        };
	      }();
	
	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }
	
	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };
	
	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}
	
	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
	  var paramValues = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
	
	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }
	
	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;
	
	var _react = __webpack_require__(1);
	
	var func = _react.PropTypes.func,
	    object = _react.PropTypes.object,
	    arrayOf = _react.PropTypes.arrayOf,
	    oneOfType = _react.PropTypes.oneOfType,
	    element = _react.PropTypes.element,
	    shape = _react.PropTypes.shape,
	    string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}
	
	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});
	
	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _getRouteParams = __webpack_require__(252);
	
	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);
	
	var _ContextUtils = __webpack_require__(253);
	
	var _RouteUtils = __webpack_require__(235);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _React$PropTypes = _react2.default.PropTypes,
	    array = _React$PropTypes.array,
	    func = _React$PropTypes.func,
	    object = _React$PropTypes.object;
	
	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */
	
	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',
	
	  mixins: [(0, _ContextUtils.ContextProvider)('router')],
	
	  propTypes: {
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },
	
	  childContextTypes: {
	    router: object.isRequired
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      router: this.props.router
	    };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;
	
	    var _props = this.props,
	        location = _props.location,
	        routes = _props.routes,
	        params = _props.params,
	        components = _props.components,
	        router = _props.router;
	
	    var element = null;
	
	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.
	
	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          location: location,
	          params: params,
	          route: route,
	          router: router,
	          routeParams: routeParams,
	          routes: routes
	        };
	
	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }
	
	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};
	
	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }
	
	          return elements;
	        }
	
	        return _this.createElement(components, props);
	      }, element);
	    }
	
	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;
	
	    return element;
	  }
	});
	
	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _PatternUtils = __webpack_require__(237);
	
	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};
	
	  if (!route.path) return routeParams;
	
	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });
	
	  return routeParams;
	}
	
	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.ContextProvider = ContextProvider;
	exports.ContextSubscriber = ContextSubscriber;
	
	var _react = __webpack_require__(1);
	
	// Works around issues with context updates failing to propagate.
	// Caveat: the context value is expected to never change its identity.
	// https://github.com/facebook/react/issues/2517
	// https://github.com/reactjs/react-router/issues/470
	
	var contextProviderShape = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  eventIndex: _react.PropTypes.number.isRequired
	});
	
	function makeContextName(name) {
	  return '@@contextSubscriber/' + name;
	}
	
	function ContextProvider(name) {
	  var _childContextTypes, _ref2;
	
	  var contextName = makeContextName(name);
	  var listenersKey = contextName + '/listeners';
	  var eventIndexKey = contextName + '/eventIndex';
	  var subscribeKey = contextName + '/subscribe';
	
	  return _ref2 = {
	    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),
	
	    getChildContext: function getChildContext() {
	      var _ref;
	
	      return _ref = {}, _ref[contextName] = {
	        eventIndex: this[eventIndexKey],
	        subscribe: this[subscribeKey]
	      }, _ref;
	    },
	    componentWillMount: function componentWillMount() {
	      this[listenersKey] = [];
	      this[eventIndexKey] = 0;
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      this[eventIndexKey]++;
	    },
	    componentDidUpdate: function componentDidUpdate() {
	      var _this = this;
	
	      this[listenersKey].forEach(function (listener) {
	        return listener(_this[eventIndexKey]);
	      });
	    }
	  }, _ref2[subscribeKey] = function (listener) {
	    var _this2 = this;
	
	    // No need to immediately call listener here.
	    this[listenersKey].push(listener);
	
	    return function () {
	      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }, _ref2;
	}
	
	function ContextSubscriber(name) {
	  var _contextTypes, _ref4;
	
	  var contextName = makeContextName(name);
	  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
	  var handleContextUpdateKey = contextName + '/handleContextUpdate';
	  var unsubscribeKey = contextName + '/unsubscribe';
	
	  return _ref4 = {
	    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),
	
	    getInitialState: function getInitialState() {
	      var _ref3;
	
	      if (!this.context[contextName]) {
	        return {};
	      }
	
	      return _ref3 = {}, _ref3[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref3;
	    },
	    componentDidMount: function componentDidMount() {
	      if (!this.context[contextName]) {
	        return;
	      }
	
	      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
	    },
	    componentWillReceiveProps: function componentWillReceiveProps() {
	      var _setState;
	
	      if (!this.context[contextName]) {
	        return;
	      }
	
	      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      if (!this[unsubscribeKey]) {
	        return;
	      }
	
	      this[unsubscribeKey]();
	      this[unsubscribeKey] = null;
	    }
	  }, _ref4[handleContextUpdateKey] = function (eventIndex) {
	    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
	      var _setState2;
	
	      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
	    }
	  }, _ref4;
	}

/***/ },
/* 254 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	exports.createRouterObject = createRouterObject;
	exports.assignRouterState = assignRouterState;
	function createRouterObject(history, transitionManager, state) {
	  var router = _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	
	  return assignRouterState(router, state);
	}
	
	function assignRouterState(router, _ref) {
	  var location = _ref.location,
	      params = _ref.params,
	      routes = _ref.routes;
	
	  router.location = location;
	  router.params = params;
	  router.routes = routes;
	
	  return router;
	}

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _PropTypes = __webpack_require__(236);
	
	var _ContextUtils = __webpack_require__(253);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	var _React$PropTypes = _react2.default.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func,
	    oneOfType = _React$PropTypes.oneOfType;
	
	function isLeftClickEvent(event) {
	  return event.button === 0;
	}
	
	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}
	
	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}
	
	function resolveToLocation(to, router) {
	  return typeof to === 'function' ? to(router.location) : to;
	}
	
	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',
	
	  mixins: [(0, _ContextUtils.ContextSubscriber)('router')],
	
	  contextTypes: {
	    router: _PropTypes.routerShape
	  },
	
	  propTypes: {
	    to: oneOfType([string, object, func]),
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    if (this.props.onClick) this.props.onClick(event);
	
	    if (event.defaultPrevented) return;
	
	    var router = this.context.router;
	
	    !router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;
	
	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;
	
	    // If target prop is set (e.g. to "_blank"), let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) return;
	
	    event.preventDefault();
	
	    router.push(resolveToLocation(this.props.to, router));
	  },
	  render: function render() {
	    var _props = this.props,
	        to = _props.to,
	        activeClassName = _props.activeClassName,
	        activeStyle = _props.activeStyle,
	        onlyActiveOnIndex = _props.onlyActiveOnIndex,
	        props = _objectWithoutProperties(_props, ['to', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);
	
	    // Ignore if rendered outside the context of router to simplify unit testing.
	
	
	    var router = this.context.router;
	
	    if (router) {
	      // If user does not specify a `to` prop, return an empty anchor tag.
	      if (to == null) {
	        return _react2.default.createElement('a', props);
	      }
	
	      var toLocation = resolveToLocation(to, router);
	      props.href = router.createHref(toLocation);
	
	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(toLocation, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }
	
	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }
	
	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});
	
	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Link = __webpack_require__(255);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});
	
	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	exports.default = withRouter;
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _hoistNonReactStatics = __webpack_require__(258);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _ContextUtils = __webpack_require__(253);
	
	var _PropTypes = __webpack_require__(236);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	function withRouter(WrappedComponent, options) {
	  var withRef = options && options.withRef;
	
	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',
	
	    mixins: [(0, _ContextUtils.ContextSubscriber)('router')],
	
	    contextTypes: { router: _PropTypes.routerShape },
	    propTypes: { router: _PropTypes.routerShape },
	
	    getWrappedInstance: function getWrappedInstance() {
	      !withRef ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'To access the wrapped instance, you need to specify ' + '`{ withRef: true }` as the second argument of the withRouter() call.') : (0, _invariant2.default)(false) : void 0;
	
	      return this.wrappedInstance;
	    },
	    render: function render() {
	      var _this = this;
	
	      var router = this.props.router || this.context.router;
	      var params = router.params,
	          location = router.location,
	          routes = router.routes;
	
	      var props = _extends({}, this.props, { router: router, params: params, location: location, routes: routes });
	
	      if (withRef) {
	        props.ref = function (c) {
	          _this.wrappedInstance = c;
	        };
	      }
	
	      return _react2.default.createElement(WrappedComponent, props);
	    }
	  });
	
	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;
	
	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 258 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
	    if (typeof sourceComponent !== 'string') {
	        // don't hoist over string (html) components
	        var keys = Object.getOwnPropertyNames(sourceComponent);
	
	        /* istanbul ignore else */
	        if (isGetOwnPropertySymbolsAvailable) {
	            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
	        }
	
	        for (var i = 0; i < keys.length; ++i) {
	            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
	                try {
	                    targetComponent[keys[i]] = sourceComponent[keys[i]];
	                } catch (error) {}
	            }
	        }
	    }
	
	    return targetComponent;
	};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(241);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _Redirect = __webpack_require__(260);
	
	var _Redirect2 = _interopRequireDefault(_Redirect);
	
	var _InternalPropTypes = __webpack_require__(250);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;
	
	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */
	/* eslint-disable react/require-render-return */
	
	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },
	
	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(235);
	
	var _PatternUtils = __webpack_require__(237);
	
	var _InternalPropTypes = __webpack_require__(250);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;
	
	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */
	/* eslint-disable react/require-render-return */
	
	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);
	
	      if (route.from) route.path = route.from;
	
	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location,
	            params = nextState.params;
	
	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }
	
	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };
	
	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';
	
	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';
	
	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;
	
	        if (pattern.indexOf('/') === 0) break;
	      }
	
	      return '/' + parentPattern;
	    }
	  },
	
	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _routerWarning = __webpack_require__(241);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(235);
	
	var _InternalPropTypes = __webpack_require__(250);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var func = _react2.default.PropTypes.func;
	
	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */
	/* eslint-disable react/require-render-return */
	
	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',
	
	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },
	
	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _RouteUtils = __webpack_require__(235);
	
	var _InternalPropTypes = __webpack_require__(250);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _React$PropTypes = _react2.default.PropTypes,
	    string = _React$PropTypes.string,
	    func = _React$PropTypes.func;
	
	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */
	/* eslint-disable react/require-render-return */
	
	var Route = _react2.default.createClass({
	  displayName: 'Route',
	
	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },
	
	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },
	
	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});
	
	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _Actions = __webpack_require__(264);
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _createMemoryHistory = __webpack_require__(265);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	var _createTransitionManager = __webpack_require__(240);
	
	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);
	
	var _RouteUtils = __webpack_require__(235);
	
	var _RouterUtils = __webpack_require__(254);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history,
	      routes = _ref.routes,
	      location = _ref.location,
	      options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);
	
	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;
	
	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));
	
	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    location = history.getCurrentLocation();
	  }
	
	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    var renderProps = void 0;
	
	    if (nextState) {
	      var router = (0, _RouterUtils.createRouterObject)(history, transitionManager, nextState);
	      renderProps = _extends({}, nextState, {
	        router: router,
	        matchContext: { transitionManager: transitionManager, router: router }
	      });
	    }
	
	    callback(error, redirectLocation && history.createLocation(redirectLocation, _Actions.REPLACE), renderProps);
	  });
	}
	
	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 264 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	var PUSH = exports.PUSH = 'PUSH';
	
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = exports.REPLACE = 'REPLACE';
	
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = exports.POP = 'POP';

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = createMemoryHistory;
	
	var _useQueries = __webpack_require__(266);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _useBasename = __webpack_require__(273);
	
	var _useBasename2 = _interopRequireDefault(_useBasename);
	
	var _createMemoryHistory = __webpack_require__(274);
	
	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useQueries` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  return history;
	}
	module.exports = exports['default'];

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _queryString = __webpack_require__(267);
	
	var _runTransitionHook = __webpack_require__(270);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _LocationUtils = __webpack_require__(271);
	
	var _PathUtils = __webpack_require__(272);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var defaultStringifyQuery = function defaultStringifyQuery(query) {
	  return (0, _queryString.stringify)(query).replace(/%20/g, '+');
	};
	
	var defaultParseQueryString = _queryString.parse;
	
	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	var useQueries = function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var history = createHistory(options);
	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;
	
	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;
	
	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;
	
	    var decodeQuery = function decodeQuery(location) {
	      if (!location) return location;
	
	      if (location.query == null) location.query = parseQueryString(location.search.substring(1));
	
	      return location;
	    };
	
	    var encodeQuery = function encodeQuery(location, query) {
	      if (query == null) return location;
	
	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var queryString = stringifyQuery(query);
	      var search = queryString ? '?' + queryString : '';
	
	      return _extends({}, object, {
	        search: search
	      });
	    };
	
	    // Override all read methods with query-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return decodeQuery(history.getCurrentLocation());
	    };
	
	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, decodeQuery(location), callback);
	      });
	    };
	
	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(decodeQuery(location));
	      });
	    };
	
	    // Override all write methods with query-aware versions.
	    var push = function push(location) {
	      return history.push(encodeQuery(location, location.query));
	    };
	
	    var replace = function replace(location) {
	      return history.replace(encodeQuery(location, location.query));
	    };
	
	    var createPath = function createPath(location) {
	      return history.createPath(encodeQuery(location, location.query));
	    };
	
	    var createHref = function createHref(location) {
	      return history.createHref(encodeQuery(location, location.query));
	    };
	
	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var newLocation = history.createLocation.apply(history, [encodeQuery(location, location.query)].concat(args));
	
	      if (location.query) newLocation.query = (0, _LocationUtils.createQuery)(location.query);
	
	      return decodeQuery(newLocation);
	    };
	
	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};
	
	exports.default = useQueries;

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var strictUriEncode = __webpack_require__(268);
	var objectAssign = __webpack_require__(269);
	
	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}
	
		return value;
	}
	
	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};
	
	exports.parse = function (str) {
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);
	
		if (typeof str !== 'string') {
			return ret;
		}
	
		str = str.trim().replace(/^(\?|#|&)/, '');
	
		if (!str) {
			return ret;
		}
	
		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;
	
			key = decodeURIComponent(key);
	
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);
	
			if (ret[key] === undefined) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
		});
	
		return ret;
	};
	
	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true
		};
	
		opts = objectAssign(defaults, opts);
	
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];
	
			if (val === undefined) {
				return '';
			}
	
			if (val === null) {
				return encode(key, opts);
			}
	
			if (Array.isArray(val)) {
				var result = [];
	
				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}
	
					if (val2 === null) {
						result.push(encode(key, opts));
					} else {
						result.push(encode(key, opts) + '=' + encode(val2, opts));
					}
				});
	
				return result.join('&');
			}
	
			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};

/***/ },
/* 268 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};

/***/ },
/* 269 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc'); // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _warning = __webpack_require__(242);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var runTransitionHook = function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);
	
	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(result === undefined, 'You should not "return" in a transition hook with a callback argument; ' + 'call the callback instead') : void 0;
	  }
	};
	
	exports.default = runTransitionHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.__esModule = true;
	exports.locationsAreEqual = exports.statesAreEqual = exports.createLocation = exports.createQuery = undefined;
	
	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _warning = __webpack_require__(242);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _PathUtils = __webpack_require__(272);
	
	var _Actions = __webpack_require__(264);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var createQuery = exports.createQuery = function createQuery(props) {
	  return _extends(Object.create(null), props);
	};
	
	var createLocation = exports.createLocation = function createLocation() {
	  var input = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	  var object = typeof input === 'string' ? (0, _PathUtils.parsePath)(input) : input;
	
	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(!object.path, 'Location descriptor objects should have a `pathname`, not a `path`.') : void 0;
	
	  var pathname = object.pathname || '/';
	  var search = object.search || '';
	  var hash = object.hash || '';
	  var state = object.state;
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	};
	
	var isDate = function isDate(object) {
	  return Object.prototype.toString.call(object) === '[object Date]';
	};
	
	var statesAreEqual = exports.statesAreEqual = function statesAreEqual(a, b) {
	  if (a === b) return true;
	
	  var typeofA = typeof a === 'undefined' ? 'undefined' : _typeof(a);
	  var typeofB = typeof b === 'undefined' ? 'undefined' : _typeof(b);
	
	  if (typeofA !== typeofB) return false;
	
	  !(typeofA !== 'function') ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store functions in location state') : (0, _invariant2.default)(false) : void 0;
	
	  // Not the same object, but same type.
	  if (typeofA === 'object') {
	    !!(isDate(a) && isDate(b)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You must not store Date objects in location state') : (0, _invariant2.default)(false) : void 0;
	
	    if (!Array.isArray(a)) {
	      var keysofA = Object.keys(a);
	      var keysofB = Object.keys(b);
	      return keysofA.length === keysofB.length && keysofA.every(function (key) {
	        return statesAreEqual(a[key], b[key]);
	      });
	    }
	
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return statesAreEqual(item, b[index]);
	    });
	  }
	
	  // All other serializable types (string, number, boolean)
	  // should be strict equal.
	  return false;
	};
	
	var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
	  return a.key === b.key &&
	  // a.action === b.action && // Different action !== location change.
	  a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && statesAreEqual(a.state, b.state);
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.createPath = exports.parsePath = exports.getQueryStringValueFromPath = exports.stripQueryStringValueFromPath = exports.addQueryStringValueToPath = undefined;
	
	var _warning = __webpack_require__(242);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var addQueryStringValueToPath = exports.addQueryStringValueToPath = function addQueryStringValueToPath(path, key, value) {
	  var _parsePath = parsePath(path);
	
	  var pathname = _parsePath.pathname;
	  var search = _parsePath.search;
	  var hash = _parsePath.hash;
	
	  return createPath({
	    pathname: pathname,
	    search: search + (search.indexOf('?') === -1 ? '?' : '&') + key + '=' + value,
	    hash: hash
	  });
	};
	
	var stripQueryStringValueFromPath = exports.stripQueryStringValueFromPath = function stripQueryStringValueFromPath(path, key) {
	  var _parsePath2 = parsePath(path);
	
	  var pathname = _parsePath2.pathname;
	  var search = _parsePath2.search;
	  var hash = _parsePath2.hash;
	
	  return createPath({
	    pathname: pathname,
	    search: search.replace(new RegExp('([?&])' + key + '=[a-zA-Z0-9]+(&?)'), function (match, prefix, suffix) {
	      return prefix === '?' ? prefix : suffix;
	    }),
	    hash: hash
	  });
	};
	
	var getQueryStringValueFromPath = exports.getQueryStringValueFromPath = function getQueryStringValueFromPath(path, key) {
	  var _parsePath3 = parsePath(path);
	
	  var search = _parsePath3.search;
	
	  var match = search.match(new RegExp('[?&]' + key + '=([a-zA-Z0-9]+)'));
	  return match && match[1];
	};
	
	var extractPath = function extractPath(string) {
	  var match = string.match(/^(https?:)?\/\/[^\/]*/);
	  return match == null ? string : string.substring(match[0].length);
	};
	
	var parsePath = exports.parsePath = function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';
	
	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(path === pathname, 'A path must be pathname + search + hash only, not a full URL like "%s"', path) : void 0;
	
	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }
	
	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }
	
	  if (pathname === '') pathname = '/';
	
	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	};
	
	var createPath = exports.createPath = function createPath(location) {
	  if (location == null || typeof location === 'string') return location;
	
	  var basename = location.basename;
	  var pathname = location.pathname;
	  var search = location.search;
	  var hash = location.hash;
	
	  var path = (basename || '') + pathname;
	
	  if (search && search !== '?') path += search;
	
	  if (hash) path += hash;
	
	  return path;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _runTransitionHook = __webpack_require__(270);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _PathUtils = __webpack_require__(272);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var useBasename = function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    var history = createHistory(options);
	    var basename = options.basename;
	
	    var addBasename = function addBasename(location) {
	      if (!location) return location;
	
	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;
	
	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }
	
	      return location;
	    };
	
	    var prependBasename = function prependBasename(location) {
	      if (!basename) return location;
	
	      var object = typeof location === 'string' ? (0, _PathUtils.parsePath)(location) : location;
	      var pname = object.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;
	
	      return _extends({}, object, {
	        pathname: pathname
	      });
	    };
	
	    // Override all read methods with basename-aware versions.
	    var getCurrentLocation = function getCurrentLocation() {
	      return addBasename(history.getCurrentLocation());
	    };
	
	    var listenBefore = function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        return (0, _runTransitionHook2.default)(hook, addBasename(location), callback);
	      });
	    };
	
	    var listen = function listen(listener) {
	      return history.listen(function (location) {
	        return listener(addBasename(location));
	      });
	    };
	
	    // Override all write methods with basename-aware versions.
	    var push = function push(location) {
	      return history.push(prependBasename(location));
	    };
	
	    var replace = function replace(location) {
	      return history.replace(prependBasename(location));
	    };
	
	    var createPath = function createPath(location) {
	      return history.createPath(prependBasename(location));
	    };
	
	    var createHref = function createHref(location) {
	      return history.createHref(prependBasename(location));
	    };
	
	    var createLocation = function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    };
	
	    return _extends({}, history, {
	      getCurrentLocation: getCurrentLocation,
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation
	    });
	  };
	};
	
	exports.default = useBasename;

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _warning = __webpack_require__(242);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _LocationUtils = __webpack_require__(271);
	
	var _PathUtils = __webpack_require__(272);
	
	var _createHistory = __webpack_require__(275);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	var _Actions = __webpack_require__(264);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var createStateStorage = function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	};
	
	var createMemoryHistory = function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }
	
	  var getCurrentLocation = function getCurrentLocation() {
	    var entry = entries[current];
	    var path = (0, _PathUtils.createPath)(entry);
	
	    var key = void 0,
	        state = void 0;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    }
	
	    var init = (0, _PathUtils.parsePath)(path);
	
	    return (0, _LocationUtils.createLocation)(_extends({}, init, { state: state }), undefined, key);
	  };
	
	  var canGo = function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  };
	
	  var go = function go(n) {
	    if (!n) return;
	
	    if (!canGo(n)) {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Cannot go(%s) there is not enough history', n) : void 0;
	
	      return;
	    }
	
	    current += n;
	    var currentLocation = getCurrentLocation();
	
	    // Change action to POP
	    history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	  };
	
	  var pushLocation = function pushLocation(location) {
	    current += 1;
	
	    if (current < entries.length) entries.splice(current);
	
	    entries.push(location);
	
	    saveState(location.key, location.state);
	  };
	
	  var replaceLocation = function replaceLocation(location) {
	    entries[current] = location;
	    saveState(location.key, location.state);
	  };
	
	  var history = (0, _createHistory2.default)(_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));
	
	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;
	
	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }
	
	  entries = entries.map(function (entry) {
	    return (0, _LocationUtils.createLocation)(entry);
	  });
	
	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : (0, _invariant2.default)(false) : void 0;
	  }
	
	  var storage = createStateStorage(entries);
	
	  var saveState = function saveState(key, state) {
	    return storage[key] = state;
	  };
	
	  var readState = function readState(key) {
	    return storage[key];
	  };
	
	  return _extends({}, history, {
	    canGo: canGo
	  });
	};
	
	exports.default = createMemoryHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _AsyncUtils = __webpack_require__(276);
	
	var _PathUtils = __webpack_require__(272);
	
	var _runTransitionHook = __webpack_require__(270);
	
	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);
	
	var _Actions = __webpack_require__(264);
	
	var _LocationUtils = __webpack_require__(271);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var createHistory = function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var getUserConfirmation = options.getUserConfirmation;
	  var pushLocation = options.pushLocation;
	  var replaceLocation = options.replaceLocation;
	  var go = options.go;
	  var keyLength = options.keyLength;
	
	  var currentLocation = void 0;
	  var pendingLocation = void 0;
	  var beforeListeners = [];
	  var listeners = [];
	  var allKeys = [];
	
	  var getCurrentIndex = function getCurrentIndex() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) return allKeys.indexOf(pendingLocation.key);
	
	    if (currentLocation) return allKeys.indexOf(currentLocation.key);
	
	    return -1;
	  };
	
	  var updateLocation = function updateLocation(nextLocation) {
	    var currentIndex = getCurrentIndex();
	
	    currentLocation = nextLocation;
	
	    if (currentLocation.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, currentIndex + 1), [currentLocation.key]);
	    } else if (currentLocation.action === _Actions.REPLACE) {
	      allKeys[currentIndex] = currentLocation.key;
	    }
	
	    listeners.forEach(function (listener) {
	      return listener(currentLocation);
	    });
	  };
	
	  var listenBefore = function listenBefore(listener) {
	    beforeListeners.push(listener);
	
	    return function () {
	      return beforeListeners = beforeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };
	
	  var listen = function listen(listener) {
	    listeners.push(listener);
	
	    return function () {
	      return listeners = listeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  };
	
	  var confirmTransitionTo = function confirmTransitionTo(location, callback) {
	    (0, _AsyncUtils.loopAsync)(beforeListeners.length, function (index, next, done) {
	      (0, _runTransitionHook2.default)(beforeListeners[index], location, function (result) {
	        return result != null ? done(result) : next();
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          return callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  };
	
	  var transitionTo = function transitionTo(nextLocation) {
	    if (currentLocation && (0, _LocationUtils.locationsAreEqual)(currentLocation, nextLocation) || pendingLocation && (0, _LocationUtils.locationsAreEqual)(pendingLocation, nextLocation)) return; // Nothing to do
	
	    pendingLocation = nextLocation;
	
	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted during confirmation
	
	      pendingLocation = null;
	
	      if (ok) {
	        // Treat PUSH to same path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = (0, _PathUtils.createPath)(currentLocation);
	          var nextPath = (0, _PathUtils.createPath)(nextLocation);
	
	          if (nextPath === prevPath && (0, _LocationUtils.statesAreEqual)(currentLocation.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }
	
	        if (nextLocation.action === _Actions.POP) {
	          updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.PUSH) {
	          if (pushLocation(nextLocation) !== false) updateLocation(nextLocation);
	        } else if (nextLocation.action === _Actions.REPLACE) {
	          if (replaceLocation(nextLocation) !== false) updateLocation(nextLocation);
	        }
	      } else if (currentLocation && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(currentLocation.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);
	
	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL
	      }
	    });
	  };
	
	  var push = function push(input) {
	    return transitionTo(createLocation(input, _Actions.PUSH));
	  };
	
	  var replace = function replace(input) {
	    return transitionTo(createLocation(input, _Actions.REPLACE));
	  };
	
	  var goBack = function goBack() {
	    return go(-1);
	  };
	
	  var goForward = function goForward() {
	    return go(1);
	  };
	
	  var createKey = function createKey() {
	    return Math.random().toString(36).substr(2, keyLength || 6);
	  };
	
	  var createHref = function createHref(location) {
	    return (0, _PathUtils.createPath)(location);
	  };
	
	  var createLocation = function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];
	    return (0, _LocationUtils.createLocation)(location, action, key);
	  };
	
	  return {
	    getCurrentLocation: getCurrentLocation,
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: _PathUtils.createPath,
	    createHref: createHref,
	    createLocation: createLocation
	  };
	};
	
	exports.default = createHistory;

/***/ },
/* 276 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var loopAsync = exports.loopAsync = function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var isSync = false,
	      hasNext = false,
	      doneArgs = void 0;
	
	  var done = function done() {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    isDone = true;
	
	    if (isSync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = args;
	      return;
	    }
	
	    callback.apply(undefined, args);
	  };
	
	  var next = function next() {
	    if (isDone) return;
	
	    hasNext = true;
	
	    if (isSync) return; // Iterate instead of recursing if possible.
	
	    isSync = true;
	
	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work(currentTurn++, next, done);
	    }
	
	    isSync = false;
	
	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(undefined, doneArgs);
	      return;
	    }
	
	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  };
	
	  next();
	};

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = useRouterHistory;
	
	var _useQueries = __webpack_require__(266);
	
	var _useQueries2 = _interopRequireDefault(_useQueries);
	
	var _useBasename = __webpack_require__(273);
	
	var _useBasename2 = _interopRequireDefault(_useBasename);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _RouterContext = __webpack_require__(251);
	
	var _RouterContext2 = _interopRequireDefault(_RouterContext);
	
	var _routerWarning = __webpack_require__(241);
	
	var _routerWarning2 = _interopRequireDefault(_routerWarning);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  if (process.env.NODE_ENV !== 'production') {
	    middlewares.forEach(function (middleware, index) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(middleware.renderRouterContext || middleware.renderRouteComponent, 'The middleware specified at index ' + index + ' does not appear to be ' + 'a valid React Router middleware.') : void 0;
	    });
	  }
	
	  var withContext = middlewares.map(function (middleware) {
	    return middleware.renderRouterContext;
	  }).filter(Boolean);
	  var withComponent = middlewares.map(function (middleware) {
	    return middleware.renderRouteComponent;
	  }).filter(Boolean);
	
	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _react.createElement;
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };
	
	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createBrowserHistory = __webpack_require__(280);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _createRouterHistory = __webpack_require__(286);
	
	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ExecutionEnvironment = __webpack_require__(281);
	
	var _BrowserProtocol = __webpack_require__(282);
	
	var BrowserProtocol = _interopRequireWildcard(_BrowserProtocol);
	
	var _RefreshProtocol = __webpack_require__(285);
	
	var RefreshProtocol = _interopRequireWildcard(_RefreshProtocol);
	
	var _DOMUtils = __webpack_require__(283);
	
	var _createHistory = __webpack_require__(275);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve clean URLs. You can force this
	 * behavior using { forceRefresh: true } in options.
	 */
	var createBrowserHistory = function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Browser history needs a DOM') : (0, _invariant2.default)(false) : void 0;
	
	  var useRefresh = options.forceRefresh || !(0, _DOMUtils.supportsHistory)();
	  var Protocol = useRefresh ? RefreshProtocol : BrowserProtocol;
	
	  var getUserConfirmation = Protocol.getUserConfirmation;
	  var getCurrentLocation = Protocol.getCurrentLocation;
	  var pushLocation = Protocol.pushLocation;
	  var replaceLocation = Protocol.replaceLocation;
	  var go = Protocol.go;
	
	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: go
	  }));
	
	  var listenerCount = 0,
	      stopListener = void 0;
	
	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = BrowserProtocol.startListener(history.transitionTo);
	
	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopListener();
	    };
	  };
	
	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };
	
	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen
	  });
	};
	
	exports.default = createBrowserHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 281 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.go = exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getUserConfirmation = exports.getCurrentLocation = undefined;
	
	var _LocationUtils = __webpack_require__(271);
	
	var _DOMUtils = __webpack_require__(283);
	
	var _DOMStateStorage = __webpack_require__(284);
	
	var _PathUtils = __webpack_require__(272);
	
	var _ExecutionEnvironment = __webpack_require__(281);
	
	var PopStateEvent = 'popstate';
	var HashChangeEvent = 'hashchange';
	
	var needsHashchangeListener = _ExecutionEnvironment.canUseDOM && !(0, _DOMUtils.supportsPopstateOnHashchange)();
	
	var _createLocation = function _createLocation(historyState) {
	  var key = historyState && historyState.key;
	
	  return (0, _LocationUtils.createLocation)({
	    pathname: window.location.pathname,
	    search: window.location.search,
	    hash: window.location.hash,
	    state: key ? (0, _DOMStateStorage.readState)(key) : undefined
	  }, undefined, key);
	};
	
	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  var historyState = void 0;
	  try {
	    historyState = window.history.state || {};
	  } catch (error) {
	    // IE 11 sometimes throws when accessing window.history.state
	    // See https://github.com/ReactTraining/history/pull/289
	    historyState = {};
	  }
	
	  return _createLocation(historyState);
	};
	
	var getUserConfirmation = exports.getUserConfirmation = function getUserConfirmation(message, callback) {
	  return callback(window.confirm(message));
	}; // eslint-disable-line no-alert
	
	var startListener = exports.startListener = function startListener(listener) {
	  var handlePopState = function handlePopState(event) {
	    if (event.state !== undefined) // Ignore extraneous popstate events in WebKit
	      listener(_createLocation(event.state));
	  };
	
	  (0, _DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);
	
	  var handleUnpoppedHashChange = function handleUnpoppedHashChange() {
	    return listener(getCurrentLocation());
	  };
	
	  if (needsHashchangeListener) {
	    (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	  }
	
	  return function () {
	    (0, _DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);
	
	    if (needsHashchangeListener) {
	      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleUnpoppedHashChange);
	    }
	  };
	};
	
	var updateLocation = function updateLocation(location, updateState) {
	  var state = location.state;
	  var key = location.key;
	
	  if (state !== undefined) (0, _DOMStateStorage.saveState)(key, state);
	
	  updateState({ key: key }, (0, _PathUtils.createPath)(location));
	};
	
	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.pushState(state, null, path);
	  });
	};
	
	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  return updateLocation(location, function (state, path) {
	    return window.history.replaceState(state, null, path);
	  });
	};
	
	var go = exports.go = function go(n) {
	  if (n) window.history.go(n);
	};

/***/ },
/* 283 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
	  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
	};
	
	var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
	  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
	};
	
	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
	 */
	var supportsHistory = exports.supportsHistory = function supportsHistory() {
	  var ua = window.navigator.userAgent;
	
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
	
	  return window.history && 'pushState' in window.history;
	};
	
	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */
	var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
	  return window.navigator.userAgent.indexOf('Firefox') === -1;
	};
	
	/**
	 * Returns true if browser fires popstate on hash change.
	 * IE10 and IE11 do not.
	 */
	var supportsPopstateOnHashchange = exports.supportsPopstateOnHashchange = function supportsPopstateOnHashchange() {
	  return window.navigator.userAgent.indexOf('Trident') === -1;
	};

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.readState = exports.saveState = undefined;
	
	var _warning = __webpack_require__(242);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var QuotaExceededErrors = {
	  QuotaExceededError: true,
	  QUOTA_EXCEEDED_ERR: true
	};
	
	var SecurityErrors = {
	  SecurityError: true
	};
	
	var KeyPrefix = '@@History/';
	
	var createKey = function createKey(key) {
	  return KeyPrefix + key;
	};
	
	var saveState = exports.saveState = function saveState(key, state) {
	  if (!window.sessionStorage) {
	    // Session storage is not available or hidden.
	    // sessionStorage is undefined in Internet Explorer when served via file protocol.
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available') : void 0;
	
	    return;
	  }
	
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available due to security settings') : void 0;
	
	      return;
	    }
	
	    if (QuotaExceededErrors[error.name] && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : void 0;
	
	      return;
	    }
	
	    throw error;
	  }
	};
	
	var readState = exports.readState = function readState(key) {
	  var json = void 0;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (SecurityErrors[error.name]) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, '[history] Unable to read state; sessionStorage is not available due to security settings') : void 0;
	
	      return undefined;
	    }
	  }
	
	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }
	
	  return undefined;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;
	
	var _BrowserProtocol = __webpack_require__(282);
	
	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});
	
	var _LocationUtils = __webpack_require__(271);
	
	var _PathUtils = __webpack_require__(272);
	
	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation() {
	  return (0, _LocationUtils.createLocation)(window.location);
	};
	
	var pushLocation = exports.pushLocation = function pushLocation(location) {
	  window.location.href = (0, _PathUtils.createPath)(location);
	  return false; // Don't update location
	};
	
	var replaceLocation = exports.replaceLocation = function replaceLocation(location) {
	  window.location.replace((0, _PathUtils.createPath)(location));
	  return false; // Don't update location
	};

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};
	
	var _useRouterHistory = __webpack_require__(277);
	
	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	module.exports = exports['default'];

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createHashHistory = __webpack_require__(288);
	
	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);
	
	var _createRouterHistory = __webpack_require__(286);
	
	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _warning = __webpack_require__(242);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _invariant = __webpack_require__(238);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _ExecutionEnvironment = __webpack_require__(281);
	
	var _DOMUtils = __webpack_require__(283);
	
	var _HashProtocol = __webpack_require__(289);
	
	var HashProtocol = _interopRequireWildcard(_HashProtocol);
	
	var _createHistory = __webpack_require__(275);
	
	var _createHistory2 = _interopRequireDefault(_createHistory);
	
	function _interopRequireWildcard(obj) {
	  if (obj && obj.__esModule) {
	    return obj;
	  } else {
	    var newObj = {};if (obj != null) {
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	      }
	    }newObj.default = obj;return newObj;
	  }
	}
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var DefaultQueryKey = '_k';
	
	var addLeadingSlash = function addLeadingSlash(path) {
	  return path.charAt(0) === '/' ? path : '/' + path;
	};
	
	var HashPathCoders = {
	  hashbang: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '!' ? path : '!' + path;
	    },
	    decodePath: function decodePath(path) {
	      return path.charAt(0) === '!' ? path.substring(1) : path;
	    }
	  },
	  noslash: {
	    encodePath: function encodePath(path) {
	      return path.charAt(0) === '/' ? path.substring(1) : path;
	    },
	    decodePath: addLeadingSlash
	  },
	  slash: {
	    encodePath: addLeadingSlash,
	    decodePath: addLeadingSlash
	  }
	};
	
	var createHashHistory = function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Hash history needs a DOM') : (0, _invariant2.default)(false) : void 0;
	
	  var queryKey = options.queryKey;
	  var hashType = options.hashType;
	
	  process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(queryKey !== false, 'Using { queryKey: false } no longer works. Instead, just don\'t ' + 'use location state if you don\'t want a key in your URL query string') : void 0;
	
	  if (typeof queryKey !== 'string') queryKey = DefaultQueryKey;
	
	  if (hashType == null) hashType = 'slash';
	
	  if (!(hashType in HashPathCoders)) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'Invalid hash type: %s', hashType) : void 0;
	
	    hashType = 'slash';
	  }
	
	  var pathCoder = HashPathCoders[hashType];
	
	  var getUserConfirmation = HashProtocol.getUserConfirmation;
	
	  var getCurrentLocation = function getCurrentLocation() {
	    return HashProtocol.getCurrentLocation(pathCoder, queryKey);
	  };
	
	  var pushLocation = function pushLocation(location) {
	    return HashProtocol.pushLocation(location, pathCoder, queryKey);
	  };
	
	  var replaceLocation = function replaceLocation(location) {
	    return HashProtocol.replaceLocation(location, pathCoder, queryKey);
	  };
	
	  var history = (0, _createHistory2.default)(_extends({
	    getUserConfirmation: getUserConfirmation }, options, {
	    getCurrentLocation: getCurrentLocation,
	    pushLocation: pushLocation,
	    replaceLocation: replaceLocation,
	    go: HashProtocol.go
	  }));
	
	  var listenerCount = 0,
	      stopListener = void 0;
	
	  var startListener = function startListener(listener, before) {
	    if (++listenerCount === 1) stopListener = HashProtocol.startListener(history.transitionTo, pathCoder, queryKey);
	
	    var unlisten = before ? history.listenBefore(listener) : history.listen(listener);
	
	    return function () {
	      unlisten();
	
	      if (--listenerCount === 0) stopListener();
	    };
	  };
	
	  var listenBefore = function listenBefore(listener) {
	    return startListener(listener, true);
	  };
	
	  var listen = function listen(listener) {
	    return startListener(listener, false);
	  };
	
	  var goIsSupportedWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();
	
	  var go = function go(n) {
	    process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : void 0;
	
	    history.go(n);
	  };
	
	  var createHref = function createHref(path) {
	    return '#' + pathCoder.encodePath(history.createHref(path));
	  };
	
	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    go: go,
	    createHref: createHref
	  });
	};
	
	exports.default = createHashHistory;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	exports.replaceLocation = exports.pushLocation = exports.startListener = exports.getCurrentLocation = exports.go = exports.getUserConfirmation = undefined;
	
	var _BrowserProtocol = __webpack_require__(282);
	
	Object.defineProperty(exports, 'getUserConfirmation', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.getUserConfirmation;
	  }
	});
	Object.defineProperty(exports, 'go', {
	  enumerable: true,
	  get: function get() {
	    return _BrowserProtocol.go;
	  }
	});
	
	var _warning = __webpack_require__(242);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _LocationUtils = __webpack_require__(271);
	
	var _DOMUtils = __webpack_require__(283);
	
	var _DOMStateStorage = __webpack_require__(284);
	
	var _PathUtils = __webpack_require__(272);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var HashChangeEvent = 'hashchange';
	
	var getHashPath = function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  var href = window.location.href;
	  var hashIndex = href.indexOf('#');
	  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
	};
	
	var pushHashPath = function pushHashPath(path) {
	  return window.location.hash = path;
	};
	
	var replaceHashPath = function replaceHashPath(path) {
	  var hashIndex = window.location.href.indexOf('#');
	
	  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
	};
	
	var getCurrentLocation = exports.getCurrentLocation = function getCurrentLocation(pathCoder, queryKey) {
	  var path = pathCoder.decodePath(getHashPath());
	  var key = (0, _PathUtils.getQueryStringValueFromPath)(path, queryKey);
	
	  var state = void 0;
	  if (key) {
	    path = (0, _PathUtils.stripQueryStringValueFromPath)(path, queryKey);
	    state = (0, _DOMStateStorage.readState)(key);
	  }
	
	  var init = (0, _PathUtils.parsePath)(path);
	  init.state = state;
	
	  return (0, _LocationUtils.createLocation)(init, undefined, key);
	};
	
	var prevLocation = void 0;
	
	var startListener = exports.startListener = function startListener(listener, pathCoder, queryKey) {
	  var handleHashChange = function handleHashChange() {
	    var path = getHashPath();
	    var encodedPath = pathCoder.encodePath(path);
	
	    if (path !== encodedPath) {
	      // Always be sure we have a properly-encoded hash.
	      replaceHashPath(encodedPath);
	    } else {
	      var currentLocation = getCurrentLocation(pathCoder, queryKey);
	
	      if (prevLocation && currentLocation.key && prevLocation.key === currentLocation.key) return; // Ignore extraneous hashchange events
	
	      prevLocation = currentLocation;
	
	      listener(currentLocation);
	    }
	  };
	
	  // Ensure the hash is encoded properly.
	  var path = getHashPath();
	  var encodedPath = pathCoder.encodePath(path);
	
	  if (path !== encodedPath) replaceHashPath(encodedPath);
	
	  (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
	
	  return function () {
	    return (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
	  };
	};
	
	var updateLocation = function updateLocation(location, pathCoder, queryKey, updateHash) {
	  var state = location.state;
	  var key = location.key;
	
	  var path = pathCoder.encodePath((0, _PathUtils.createPath)(location));
	
	  if (state !== undefined) {
	    path = (0, _PathUtils.addQueryStringValueToPath)(path, queryKey, key);
	    (0, _DOMStateStorage.saveState)(key, state);
	  }
	
	  prevLocation = location;
	
	  updateHash(path);
	};
	
	var pushLocation = exports.pushLocation = function pushLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) {
	      pushHashPath(path);
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2.default)(false, 'You cannot PUSH the same path using hash history') : void 0;
	    }
	  });
	};
	
	var replaceLocation = exports.replaceLocation = function replaceLocation(location, pathCoder, queryKey) {
	  return updateLocation(location, pathCoder, queryKey, function (path) {
	    if (getHashPath() !== path) replaceHashPath(path);
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(234);
	
	var _reactRedux = __webpack_require__(183);
	
	var _messages = __webpack_require__(291);
	
	var _messages2 = _interopRequireDefault(_messages);
	
	var _user = __webpack_require__(296);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _events = __webpack_require__(302);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _bookings = __webpack_require__(439);
	
	var _bookings2 = _interopRequireDefault(_bookings);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	  }
	
	  _createClass(App, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.getUser();
	      this.props.getEvents();
	      this.props.getUserBookings();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      //refresh bookings if wwe log in/out
	      if (this.props.User !== null && this.props.User !== nextProps.User) this.props.getUserBookings();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      //prevent render until we have the basic data available, this makes child components much simpler.
	      if (this.props.User === null || this.props.Events === null || this.props.Bookings === null) return _react2.default.createElement(
	        'div',
	        null,
	        'Loading Data'
	      );
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'container' },
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(
	            'div',
	            { className: 'col-md-9' },
	            _react2.default.createElement(
	              _reactRouter.Link,
	              { to: '/' },
	              'Home'
	            )
	          ),
	          _react2.default.createElement(_user2.default.loginStatus, null)
	        ),
	        _react2.default.createElement(_messages2.default.messages, null),
	        this.props.children
	      );
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);
	
	//store.dispatch(user.actions.getUser());
	
	var mapStateToProps = function mapStateToProps(state) {
	  var User = state.get("User");
	  var Events = state.get("Events");
	  var Bookings = state.getIn(["Bookings", "bookings"]);
	  return { User: User, Events: Events, Bookings: Bookings };
	};
	
	var mapDispatchToProps = {
	  getUser: _user2.default.actions.getUser,
	  getEvents: _events2.default.actions.getEvents,
	  getUserBookings: _bookings2.default.actions.getUserBookings
	};
	
	var VisibleApp = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	
	exports.default = VisibleApp;

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(292);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _reducer = __webpack_require__(293);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _messages = __webpack_require__(295);
	
	var _messages2 = _interopRequireDefault(_messages);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = { actions: actions, reducer: _reducer2.default, messages: _messages2.default };

/***/ },
/* 292 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SET_SUCCESS_MESSAGE = exports.SET_SUCCESS_MESSAGE = 'MESSAGE_SET_SUCCESS_MESSAGE';
	
	var setSuccess = exports.setSuccess = function setSuccess(message) {
	  return {
	    type: SET_SUCCESS_MESSAGE,
	    message: message
	  };
	};
	
	var SET_WARNING_MESSAGE = exports.SET_WARNING_MESSAGE = 'MESSAGE_SET_WARNING_MESSAGE';
	
	var setWarning = exports.setWarning = function setWarning(message) {
	  return {
	    type: SET_WARNING_MESSAGE,
	    message: message
	  };
	};

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Messages;
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _actions = __webpack_require__(292);
	
	var a = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initalMessageState = _immutable2.default.Map();
	
	function Messages() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalMessageState;
	  var action = arguments[1];
	
	  switch (action.type) {
	    case a.SET_WARNING_MESSAGE:
	      return state.set("warning", action.message).set("success", null);
	    case a.SET_SUCCESS_MESSAGE:
	      return state.set("success", action.message).set("warning", null);
	  }
	  return state;
	}

/***/ },
/* 294 */,
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Messages = function (_React$Component) {
			_inherits(Messages, _React$Component);
	
			function Messages(props) {
					_classCallCheck(this, Messages);
	
					return _possibleConstructorReturn(this, (Messages.__proto__ || Object.getPrototypeOf(Messages)).call(this, props));
			}
	
			_createClass(Messages, [{
					key: 'render',
					value: function render() {
							var data = this.props.Messages.toObject();
	
							if (data.success) var success = _react2.default.createElement(
									'div',
									{ className: 'alert alert-success' },
									data.success
							);
							if (data.warning) var warning = _react2.default.createElement(
									'div',
									{ className: 'alert alert-warning' },
									data.warning
							);
	
							if (!success && !warning) return null;
	
							return _react2.default.createElement(
									'div',
									{ className: 'row' },
									_react2.default.createElement(
											'div',
											{ className: 'col-md-12' },
											success,
											warning
									)
							);
					}
			}]);
	
			return Messages;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
			var Messages = state.get("Messages");
			return { Messages: Messages };
	};
	/*
	const mapDispatchToProps = (dispatch) => {
	  return {
	    doLogin:(credentials) => dispatch(doLogin(credentials))
	  }
	}
	*/
	
	var mapDispatchToProps = {};
	
	var VisibleMessages = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Messages);
	
	exports.default = VisibleMessages;

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(297);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _reducer = __webpack_require__(299);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _userPage = __webpack_require__(300);
	
	var _userPage2 = _interopRequireDefault(_userPage);
	
	var _loginStatus = __webpack_require__(301);
	
	var _loginStatus2 = _interopRequireDefault(_loginStatus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = { actions: actions, reducer: _reducer2.default, userPage: _userPage2.default, loginStatus: _loginStatus2.default };

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.doLogout = exports.doLogin = exports.getUser = exports.UPDATE_USER = undefined;
	
	var _fetch = __webpack_require__(298);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	var _reactRouter = __webpack_require__(234);
	
	var _messages = __webpack_require__(291);
	
	var _messages2 = _interopRequireDefault(_messages);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UPDATE_USER = exports.UPDATE_USER = 'USER_UPDATE_USER';
	
	var getUser = exports.getUser = function getUser() {
	    return function (dispatch) {
	        (0, _fetch2.default)('/api/user', "GET").then(function (j) {
	            return dispatch(updateUser(j));
	        });
	    };
	};
	
	var doLogin = exports.doLogin = function doLogin(credentials) {
	    return function (dispatch) {
	        (0, _fetch2.default)('/api/user/login', "POST", credentials).then(function (j) {
	            dispatch(updateUser(j));
	            dispatch(_messages2.default.actions.setSuccess("Logged in"));
	            _reactRouter.browserHistory.push('/');
	        }, function (e) {
	            if (e.status === 401) dispatch(_messages2.default.actions.setWarning("Invalid e-mail or password"));
	        });
	    };
	};
	
	var doLogout = exports.doLogout = function doLogout() {
	    return function (dispatch) {
	        (0, _fetch2.default)('/api/user/logout', "POST").then(function (j) {
	            dispatch(updateUser(j));
	            dispatch(_messages2.default.actions.setSuccess("Logged out"));
	            _reactRouter.browserHistory.push('/');
	        });
	    };
	};
	
	var updateUser = function updateUser(user) {
	    return { type: UPDATE_USER,
	        user: user };
	};

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = rfetch;
	
	var _jsCookie = __webpack_require__(232);
	
	var _jsCookie2 = _interopRequireDefault(_jsCookie);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function rfetch(url, method, data) {
		var options = { method: method,
			headers: {
				"Content-type": "application/json; charset=UTF-8" },
			credentials: "same-origin"
		};
	
		if (method === "POST") {
			options.headers["X-XSRF-TOKEN"] = _jsCookie2.default.get("XSRF-TOKEN");
		}
		if (typeof data !== "undefined") options.body = JSON.stringify(data);
	
		return fetch(url, options).then(handleErrors).then(function (r) {
			return r.json();
		});
	} //Long Story, could use some fixing,,  we should actually do XSFR sometimes
	
	function handleErrors(response) {
		if (!response.ok) {
			return Promise.reject(response);
		}
		return response;
	}

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = User;
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _actions = __webpack_require__(297);
	
	var a = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//const initalUserState = Immutable.fromJS({id:0, name:"Guest", roles:[]});
	var initalUserState = null;
	
	function User() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalUserState;
	  var action = arguments[1];
	
	
	  switch (action.type) {
	    case a.UPDATE_USER:
	      return _immutable2.default.fromJS(action.user);
	  }
	
	  return state;
	}

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _actions = __webpack_require__(297);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserPage = function (_React$Component) {
		_inherits(UserPage, _React$Component);
	
		function UserPage() {
			_classCallCheck(this, UserPage);
	
			return _possibleConstructorReturn(this, (UserPage.__proto__ || Object.getPrototypeOf(UserPage)).apply(this, arguments));
		}
	
		_createClass(UserPage, [{
			key: 'render',
			value: function render() {
				var data = this.props.User.toObject();
	
				var page = data.id === 1 ? _react2.default.createElement(LoginForm, { doLogin: this.props.doLogin }) : _react2.default.createElement(UserProfile, { user: data });
	
				return _react2.default.createElement(
					'div',
					{ className: 'row' },
					page
				);
			}
		}]);
	
		return UserPage;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
		var _state$toObject = state.toObject(),
		    User = _state$toObject.User;
	
		return { User: User };
	};
	/*
	const mapDispatchToProps = (dispatch) => {
	  return {
	    doLogin:(credentials) => dispatch(doLogin(credentials))
	  }
	}
	*/
	
	var mapDispatchToProps = { doLogin: _actions.doLogin };
	
	var VisibleUserPage = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserPage);
	
	exports.default = VisibleUserPage;
	
	var LoginForm = function (_React$Component2) {
		_inherits(LoginForm, _React$Component2);
	
		function LoginForm(props) {
			_classCallCheck(this, LoginForm);
	
			var _this2 = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));
	
			_this2.state = { email: "", password: "" };
			_this2.updateEmail = _this2.updateEmail.bind(_this2);
			_this2.updatePassword = _this2.updatePassword.bind(_this2);
			_this2.submit = _this2.submit.bind(_this2);
			return _this2;
		}
	
		_createClass(LoginForm, [{
			key: 'updateEmail',
			value: function updateEmail(e) {
				this.setState({ email: e.target.value });
			}
		}, {
			key: 'updatePassword',
			value: function updatePassword(e) {
				this.setState({ password: e.target.value });
			}
		}, {
			key: 'submit',
			value: function submit(e) {
				e.preventDefault();
				this.props.doLogin(this.state);
				this.setState({ password: "" });
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'col-sm-12' },
					_react2.default.createElement(
						'h3',
						null,
						'Log in'
					),
					_react2.default.createElement(
						'form',
						null,
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ htmlFor: 'LoginFormEmail' },
								'Email address'
							),
							_react2.default.createElement('input', { type: 'email', value: this.state.email, className: 'form-control', id: 'LoginFormEmail', placeholder: 'Email', onChange: this.updateEmail })
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ htmlFor: 'LoginFormPassword' },
								'Password'
							),
							_react2.default.createElement('input', { type: 'password', value: this.state.password, className: 'form-control', id: 'LoginFormPassword', placeholder: 'Password', onChange: this.updatePassword })
						),
						_react2.default.createElement(
							'button',
							{ type: 'submit', onClick: this.submit, className: 'btn btn-default' },
							'Submit'
						)
					)
				);
			}
		}]);
	
		return LoginForm;
	}(_react2.default.Component);
	
	var UserProfile = function (_React$Component3) {
		_inherits(UserProfile, _React$Component3);
	
		function UserProfile() {
			_classCallCheck(this, UserProfile);
	
			return _possibleConstructorReturn(this, (UserProfile.__proto__ || Object.getPrototypeOf(UserProfile)).apply(this, arguments));
		}
	
		_createClass(UserProfile, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'col-sm-12' },
					_react2.default.createElement(
						'p',
						null,
						'Logged in as ',
						this.props.user.userName,
						', email: ',
						this.props.user.email,
						' '
					)
				);
			}
		}]);
	
		return UserProfile;
	}(_react2.default.Component);

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reactRouter = __webpack_require__(234);
	
	var _actions = __webpack_require__(297);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoginStatus = function (_React$Component) {
		_inherits(LoginStatus, _React$Component);
	
		function LoginStatus(props) {
			_classCallCheck(this, LoginStatus);
	
			var _this = _possibleConstructorReturn(this, (LoginStatus.__proto__ || Object.getPrototypeOf(LoginStatus)).call(this, props));
	
			_this.logout = _this.logout.bind(_this);
			return _this;
		}
	
		_createClass(LoginStatus, [{
			key: 'logout',
			value: function logout(e) {
				e.preventDefault();
				this.props.doLogout();
			}
		}, {
			key: 'render',
			value: function render() {
				var data = this.props.User.toObject();
	
				if (data.id == 1) var link = _react2.default.createElement(
					_reactRouter.Link,
					{ to: '/user' },
					'Login'
				);else var link = _react2.default.createElement(
					'a',
					{ onClick: this.logout, href: '#' },
					'Logout'
				);
	
				return _react2.default.createElement(
					'div',
					{ className: 'col-md-3' },
					_react2.default.createElement(
						'p',
						{ className: 'pull-right' },
						'Logged in as: ',
						_react2.default.createElement(
							'b',
							null,
							data.userName
						),
						' (',
						link,
						')'
					)
				);
			}
		}]);
	
		return LoginStatus;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
		var _state$toObject = state.toObject(),
		    User = _state$toObject.User;
	
		return { User: User };
	};
	/*
	const mapDispatchToProps = (dispatch) => {
	  return {
	    doLogin:(credentials) => dispatch(doLogin(credentials))
	  }
	}
	*/
	
	var mapDispatchToProps = { doLogout: _actions.doLogout };
	
	var VisibleLoginStatus = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginStatus);
	
	exports.default = VisibleLoginStatus;

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(303);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _reducer = __webpack_require__(304);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _listPage = __webpack_require__(305);
	
	var _listPage2 = _interopRequireDefault(_listPage);
	
	var _createPage = __webpack_require__(312);
	
	var _createPage2 = _interopRequireDefault(_createPage);
	
	var _editPage = __webpack_require__(438);
	
	var _editPage2 = _interopRequireDefault(_editPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = { actions: actions, reducer: _reducer2.default, listPage: _listPage2.default, createPage: _createPage2.default, editPage: _editPage2.default };

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.deleteEvent = exports.createEvent = exports.saveEvent = exports.getEvent = exports.getEvents = exports.updateEvent = exports.GET_EVENTS = exports.UPDATE_EVENT = undefined;
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _fetch = __webpack_require__(298);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	var _reactRouter = __webpack_require__(234);
	
	var _messages = __webpack_require__(291);
	
	var _messages2 = _interopRequireDefault(_messages);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//Actions
	
	
	var UPDATE_EVENT = exports.UPDATE_EVENT = 'EVENT_UPDATE_EVENT';
	var GET_EVENTS = exports.GET_EVENTS = 'EVENT_GET_EVENTS';
	
	var updateEvent = exports.updateEvent = function updateEvent(e) {
		return { type: UPDATE_EVENT,
			key: e.id.toString(),
			data: e };
	};
	
	var getEvents = exports.getEvents = function getEvents() {
		return function (dispatch) {
			(0, _fetch2.default)('/api/events', "GET").then(function (j) {
				return dispatch({
					type: GET_EVENTS,
					data: j
				});
			}).catch(function (r) {
				console.log(r);
			});
		};
	};
	
	var getEvent = exports.getEvent = function getEvent(id) {
		return function (dispatch) {
			(0, _fetch2.default)('/api/event/' + id, "GET").then(function (j) {
				dispatch(updateEvent(j));
			}).catch(function (r) {
				return console.log(r);
			});
		};
	};
	
	var saveEvent = exports.saveEvent = function saveEvent(event) {
		return function (dispatch) {
			(0, _fetch2.default)('/api/event/edit', "POST", event).then(function (j) {
				dispatch(updateEvent(j));
				dispatch(_messages2.default.actions.setSuccess("Event Updated"));
				_reactRouter.browserHistory.push('/');
			}).catch(function (r) {
				return console.log(r);
			});
		};
	};
	
	var createEvent = exports.createEvent = function createEvent(event) {
		return function (dispatch) {
			(0, _fetch2.default)('/api/event/create', "POST", event).then(function (j) {
				dispatch({
					type: GET_EVENTS,
					data: j
				});
				dispatch(_messages2.default.actions.setSuccess("Event Created"));
				_reactRouter.browserHistory.push('/');
			}).catch(function (r) {
				console.log(r);
			});
		};
	};
	
	var deleteEvent = exports.deleteEvent = function deleteEvent(event) {
		return function (dispatch) {
			(0, _fetch2.default)('/api/event/delete', "POST", event).then(function () {
				dispatch(_messages2.default.actions.setSuccess("Event Deleted"));
				_reactRouter.browserHistory.push('/');
			});
		};
	};

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Events;
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _actions = __webpack_require__(303);
	
	var a = _interopRequireWildcard(_actions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//should Events be a map or list? both suck sometimes..
	var initalEventState = null;
	
	function Events() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalEventState;
	  var action = arguments[1];
	
	
	  switch (action.type) {
	    case a.GET_EVENTS:
	      return _immutable2.default.fromJS(action.data);
	    case a.UPDATE_EVENT:
	      return state.set(action.key.toString(), _immutable2.default.fromJS(action.data));
	  }
	  return state;
	}

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reactRouter = __webpack_require__(234);
	
	var _reactMarkdown = __webpack_require__(448);
	
	var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);
	
	var _moment = __webpack_require__(313);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _actions = __webpack_require__(303);
	
	var _permission = __webpack_require__(306);
	
	var _actions2 = __webpack_require__(311);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//deep import, bad cause circular..
	
	//Event listing
	
	var EventList = function (_React$Component) {
		_inherits(EventList, _React$Component);
	
		function EventList(props) {
			_classCallCheck(this, EventList);
	
			var _this = _possibleConstructorReturn(this, (EventList.__proto__ || Object.getPrototypeOf(EventList)).call(this, props));
	
			_this.clickCreate = _this.clickCreate.bind(_this);
			return _this;
		}
	
		_createClass(EventList, [{
			key: 'clickCreate',
			value: function clickCreate(e) {
				e.preventDefault();
				_reactRouter.browserHistory.push('/event/create');
			}
		}, {
			key: 'render',
			value: function render() {
	
				var events = this.props.Events.toSeq().sort(function (a, b) {
					return a.get("StartDate") - b.get("StartDate");
				}).map(function (e) {
					return _react2.default.createElement(Event, _extends({}, e.toJS(), { key: e.get("id") }));
				}).toArray();
				return _react2.default.createElement(
					'div',
					{ className: 'row' },
					_react2.default.createElement(
						'div',
						{ className: 'col-md-12' },
						events
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-md-12' },
						_react2.default.createElement(CreateButton, { clickCreate: this.clickCreate })
					)
				);
			}
		}]);
	
		return EventList;
	}(_react2.default.Component);
	
	var CreateButton = (0, _permission.showCreateLink)(function (props) {
		return _react2.default.createElement(
			'button',
			{ className: 'btn btn-success', onClick: props.clickCreate },
			'New Event'
		);
	});
	
	var EditLink = (0, _permission.showEditLink)(_reactRouter.Link);
	var ManageLink = (0, _permission.showManageLink)(_reactRouter.Link);
	
	var Event = function Event(props) {
	
		var bookLink = function bookLink(props) {
			return props.booking !== undefined ? _react2.default.createElement(
				_reactRouter.Link,
				{ to: "/event/" + props.id + "/book", className: 'btn btn-primary pull-right' },
				'Edit My Booking'
			) : _react2.default.createElement(
				_reactRouter.Link,
				{ to: "/event/" + props.id + "/book", className: 'btn btn-primary pull-right' },
				'Book'
			);
		};
	
		var PermBookLink = (0, _permission.showBookLink)(bookLink);
	
		return _react2.default.createElement(
			'div',
			{ className: 'panel panel-default' },
			_react2.default.createElement(
				'div',
				{ className: 'panel-heading' },
				_react2.default.createElement(
					'h3',
					{ className: 'panel-title' },
					props.name
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'panel-body' },
				_react2.default.createElement(PermBookLink, _extends({ event: props }, props)),
				_react2.default.createElement(
					'h4',
					null,
					(0, _moment2.default)(props.startDate).format('Do'),
					' - ',
					(0, _moment2.default)(props.endDate).format('Do MMMM YYYY')
				),
				_react2.default.createElement(_reactMarkdown2.default, { escapeHtml: true, source: props.description }),
				_react2.default.createElement(
					'div',
					{ className: 'pull-right' },
					_react2.default.createElement(
						EditLink,
						{ event: props, to: "/event/" + props.id + "/edit" },
						'Edit'
					),
					" ",
					_react2.default.createElement(
						ManageLink,
						{ event: props, to: "/event/" + props.id + "/manage" },
						'Manage'
					)
				)
			)
		);
	};
	
	//Connect to redux
	
	var mapStateToProps = function mapStateToProps(state) {
	
		var user = state.get("User");
		var userId = user.get("id");
		var Events = state.get("Events");
		var Bookings = state.getIn(["Bookings", "bookings"]);
		Events = Events.map(function (e) {
			return e.set("booking", Bookings.find(function (b) {
				return b.get("eventId") === e.get('id') && b.get("userId") === userId;
			}));
		});
		return { Events: Events };
	};
	
	var mapDispatchToProps = {
		getEvents: _actions.getEvents,
		getUserBookings: _actions2.getUserBookings };
	
	var VisibleEventList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EventList);
	
	exports.default = VisibleEventList;

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.showManageLink = exports.showBookLink = exports.showCreateLink = exports.showEditLink = exports.createEventCheck = exports.editEventCheck = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _reduxAuthWrapper = __webpack_require__(307);
	
	var _permissions = __webpack_require__(310);
	
	var P = _interopRequireWildcard(_permissions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	var editEventCheck = exports.editEventCheck = (0, _reduxAuthWrapper.UserAuthWrapper)({
		authSelector: function authSelector(state, props) {
	
			return { user: state.get("User"), event: state.getIn(["Events", props.params.eventId]) };
		},
		predicate: function predicate(data) {
			if (data.event === undefined) return true;
			return P.editEvent(data.user.toJS(), data.event.toJS());
		},
		failureRedirectPath: "/user",
		wrapperDisplayName: "Edit Event Check"
	});
	
	var createEventCheck = exports.createEventCheck = (0, _reduxAuthWrapper.UserAuthWrapper)({
		authSelector: function authSelector(state, props) {
	
			return state.get("User");
		},
		predicate: function predicate(data) {
	
			return P.createEvent(data.toJS());
		},
		failureRedirectPath: "/user",
		wrapperDisplayName: "Create Event Check"
	});
	
	var showEditLink = (0, _reduxAuthWrapper.UserAuthWrapper)({
		authSelector: function authSelector(state, props) {
	
			return { user: state.get("User"), event: props.event };
		},
		predicate: function predicate(data) {
			return P.editEvent(data.user.toJS(), data.event);
		},
		FailureComponent: null,
		propMapper: function propMapper(_ref) {
			var redirect = _ref.redirect,
			    authData = _ref.authData,
			    isAuthenticating = _ref.isAuthenticating,
			    failureRedirectPath = _ref.failureRedirectPath,
			    event = _ref.event,
			    otherProps = _objectWithoutProperties(_ref, ['redirect', 'authData', 'isAuthenticating', 'failureRedirectPath', 'event']);
	
			return _extends({}, otherProps);
		},
		wrapperDisplayName: "showEventEditLink"
	});
	
	exports.showEditLink = showEditLink;
	var showCreateLink = (0, _reduxAuthWrapper.UserAuthWrapper)({
		authSelector: function authSelector(state) {
			return state.get("User");
		},
		predicate: function predicate(data) {
			return P.createEvent(data.toJS());
		},
		FailureComponent: null,
		propMapper: function propMapper(_ref2) {
			var redirect = _ref2.redirect,
			    authData = _ref2.authData,
			    isAuthenticating = _ref2.isAuthenticating,
			    failureRedirectPath = _ref2.failureRedirectPath,
			    event = _ref2.event,
			    otherProps = _objectWithoutProperties(_ref2, ['redirect', 'authData', 'isAuthenticating', 'failureRedirectPath', 'event']);
	
			return _extends({}, otherProps);
		},
		wrapperDisplayName: "showEventCreateLink"
	});
	
	exports.showCreateLink = showCreateLink;
	var showBookLink = (0, _reduxAuthWrapper.UserAuthWrapper)({
		authSelector: function authSelector(state, props) {
			return { user: state.get("User"), event: props.event };
		},
		predicate: function predicate(data) {
			return P.bookEvent(data.user.toJS(), data.event);
		},
		FailureComponent: null,
		propMapper: function propMapper(_ref3) {
			var redirect = _ref3.redirect,
			    authData = _ref3.authData,
			    isAuthenticating = _ref3.isAuthenticating,
			    failureRedirectPath = _ref3.failureRedirectPath,
			    event = _ref3.event,
			    otherProps = _objectWithoutProperties(_ref3, ['redirect', 'authData', 'isAuthenticating', 'failureRedirectPath', 'event']);
	
			return _extends({}, otherProps);
		},
		wrapperDisplayName: "showBookLink"
	});
	
	exports.showBookLink = showBookLink;
	var showManageLink = (0, _reduxAuthWrapper.UserAuthWrapper)({
		authSelector: function authSelector(state, props) {
	
			return { user: state.get("User"), event: props.event };
		},
		predicate: function predicate(data) {
			if (data.event === undefined) return true;
			return P.manageEvent(data.user.toJS(), data.event);
		},
		FailureComponent: null,
		propMapper: function propMapper(_ref4) {
			var redirect = _ref4.redirect,
			    authData = _ref4.authData,
			    isAuthenticating = _ref4.isAuthenticating,
			    failureRedirectPath = _ref4.failureRedirectPath,
			    event = _ref4.event,
			    otherProps = _objectWithoutProperties(_ref4, ['redirect', 'authData', 'isAuthenticating', 'failureRedirectPath', 'event']);
	
			return _extends({}, otherProps);
		},
		wrapperDisplayName: "showManageLink"
	});
	exports.showManageLink = showManageLink;

/***/ },
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */
/***/ function(module, exports) {

	"use strict";
	
	//shared permission checks
	//These may get narly as need to work with both the plain JS user objects and sequalise instance?
	var permissions = {};
	
	permissions.editEvent = function (user, event) {
			if (user.roles.find(function (role) {
					return role.name === "admin";
			})) return true; //admin can always
			return user.id === event.userId;
	};
	
	permissions.createEvent = function (user) {
			if (user.roles.find(function (role) {
					return role.name === "admin";
			})) return true; //admin can always
			return false;
	};
	
	permissions.bookEvent = function (user, event) {
			if (user.roles.find(function (role) {
					return role.name === "admin";
			})) return true; //admin can always
			if (user.id !== 1) return true; //non guest can
			if (event.allowGuestBookings === true) return true; //anyone can book 
			return false;
	};
	
	permissions.manageEvent = function (user) {
			if (user.roles.find(function (role) {
					return role.name === "admin";
			})) return true; //admin can always
			return false;
	};
	
	module.exports = permissions;

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.redirectFromThanks = exports.UPDATE_BOOKING = exports.getEventBookings = exports.getUserBookings = exports.UPDATE_BOOKINGS = exports.getBooking = exports.saveBooking = exports.createBooking = exports.CREATE_BOOKING = exports.updateQuickList = exports.UPDATE_QUICK_LIST = undefined;
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _fetch = __webpack_require__(298);
	
	var _fetch2 = _interopRequireDefault(_fetch);
	
	var _reactRouter = __webpack_require__(234);
	
	var _events = __webpack_require__(302);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _messages = __webpack_require__(291);
	
	var _messages2 = _interopRequireDefault(_messages);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	export const saveEvent = event => {
		return (dispatch) => {
			fetch('/api/event/edit',"POST",event)
			.then(j => {
				dispatch(updateEvent(j));
				dispatch(m.actions.setSuccess("Event Updated"));
				browserHistory.push('/');
			}).catch(r => console.log(r));
		}
	
	}
	*/
	
	var UPDATE_QUICK_LIST = exports.UPDATE_QUICK_LIST = 'BOOKING_UPDATE_QUICK_LIST';
	
	var updateQuickList = exports.updateQuickList = function updateQuickList(participants) {
		return { type: UPDATE_QUICK_LIST,
			participants: participants };
	};
	
	var CREATE_BOOKING = exports.CREATE_BOOKING = 'BOOKING_CREATE_BOOKING';
	
	var createBooking = exports.createBooking = function createBooking(booking) {
		return function (dispatch) {
			(0, _fetch2.default)('/api/booking/' + booking.eventId + '/create', "POST", booking).then(function (j) {
				dispatch(updateBooking(j));
				_reactRouter.browserHistory.push('/event/' + booking.eventId + '/book/thanks');
			});
		};
	};
	
	var saveBooking = exports.saveBooking = function saveBooking(booking) {
		return function (dispatch) {
			(0, _fetch2.default)('/api/booking/edit', "POST", booking).then(function (j) {
				dispatch(updateBooking(j));
				_reactRouter.browserHistory.push('/event/' + booking.eventId + '/book/thanks');
			});
		};
	};
	
	//export const UPDATE_BOOKING = 'BOOKING_UPDATE_BOOKING';
	
	var getBooking = exports.getBooking = function getBooking(id) {
		return function (dispatch) {
			(0, _fetch2.default)('/api/booking/' + id, "GET").then(function (j) {
				dispatch(_events2.default.actions.updateEvent(j[id].event));
				dispatch(updateBookings(j));
			});
		};
	};
	
	var UPDATE_BOOKINGS = exports.UPDATE_BOOKINGS = 'BOOKING_UPDATE_BOOKINGS';
	
	var getUserBookings = exports.getUserBookings = function getUserBookings() {
		return function (dispatch) {
			(0, _fetch2.default)('/api/booking/user', "GET").then(function (j) {
				dispatch(updateBookings(j));
			});
		};
	};
	
	var getEventBookings = exports.getEventBookings = function getEventBookings(eventId) {
		return function (dispatch) {
			(0, _fetch2.default)('/api/booking/event/' + eventId, "GET").then(function (j) {
				dispatch(updateBookings(j));
			});
		};
	};
	
	var updateBookings = function updateBookings(bookings) {
		return { type: UPDATE_BOOKINGS,
			bookings: bookings };
	};
	
	var UPDATE_BOOKING = exports.UPDATE_BOOKING = 'BOOKING_UPDATE_BOOKING';
	
	var updateBooking = function updateBooking(booking) {
		return { type: UPDATE_BOOKING,
			booking: booking };
	};
	
	var redirectFromThanks = exports.redirectFromThanks = function redirectFromThanks(eventId) {
		return function (dispatch) {
			_reactRouter.browserHistory.push('/event/' + eventId + '/book');
		};
	};

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reactRouter = __webpack_require__(234);
	
	var _moment = __webpack_require__(313);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _eventForm = __webpack_require__(423);
	
	var _eventForm2 = _interopRequireDefault(_eventForm);
	
	var _permission = __webpack_require__(306);
	
	var _actions = __webpack_require__(303);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CreatePage = function (_React$Component) {
		_inherits(CreatePage, _React$Component);
	
		function CreatePage(props) {
			_classCallCheck(this, CreatePage);
	
			var _this = _possibleConstructorReturn(this, (CreatePage.__proto__ || Object.getPrototypeOf(CreatePage)).call(this, props));
	
			_this.saveEvent = _this.saveEvent.bind(_this);
			return _this;
		}
	
		_createClass(CreatePage, [{
			key: 'saveEvent',
			value: function saveEvent(e) {
				this.props.createEvent(e);
			}
		}, {
			key: 'render',
			value: function render() {
				//const data = this.props.user.toObject();
	
				var event = {
					id: null,
					name: '',
					description: '',
					startDate: (0, _moment2.default)().format("YYYY-MM-DD"),
					endDate: (0, _moment2.default)().format("YYYY-MM-DD"),
					bookingDeadline: (0, _moment2.default)().format("YYYY-MM-DD"),
					allowGuestBookings: false,
					feeModel: "free",
					feeData: {},
					paymentTypes: ["Cash", "Cheque", "Bank Transfer"],
					paymentInfo: ""
				};
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-12' },
							_react2.default.createElement(
								'h3',
								null,
								'New Event'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(_eventForm2.default, { event: event, 'new': true, saveEvent: this.saveEvent })
					)
				);
			}
		}]);
	
		return CreatePage;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
		//var Events = state.getIn(["Data","Events"]);
		// return {Events};
		return {};
	};
	
	var mapDispatchToProps = { createEvent: _actions.createEvent };
	
	var VisibleCreatePage = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _permission.createEventCheck)(CreatePage));
	
	exports.default = VisibleCreatePage;

/***/ },
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _moment = __webpack_require__(313);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _reactToggle = __webpack_require__(424);
	
	var _reactToggle2 = _interopRequireDefault(_reactToggle);
	
	var _lodash = __webpack_require__(433);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _fee = __webpack_require__(434);
	
	var _fee2 = _interopRequireDefault(_fee);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EditForm = function (_React$Component) {
		_inherits(EditForm, _React$Component);
	
		function EditForm(props) {
			_classCallCheck(this, EditForm);
	
			var _this = _possibleConstructorReturn(this, (EditForm.__proto__ || Object.getPrototypeOf(EditForm)).call(this, props));
	
			_this.state = _this.props.event;
			_this.state.delete = false;
	
			_this.update = _this.update.bind(_this);
			_this.updatePaymentOptions = _this.updatePaymentOptions.bind(_this);
			_this.updateFeeData = _this.updateFeeData.bind(_this);
	
			_this.clickRevert = _this.clickRevert.bind(_this);
			_this.clickDeleteLock = _this.clickDeleteLock.bind(_this);
			_this.clickDelete = _this.clickDelete.bind(_this);
			_this.clickSave = _this.clickSave.bind(_this);
			return _this;
		}
	
		_createClass(EditForm, [{
			key: 'update',
			value: function update(item) {
				var _this2 = this;
	
				return function (e) {
					var newState = {};
					newState[item] = e.target.value;
					_this2.setState(newState);
				};
			}
		}, {
			key: 'updateFeeData',
			value: function updateFeeData(data) {
				this.setState({ feeData: data });
			}
		}, {
			key: 'updatePaymentOptions',
			value: function updatePaymentOptions(e) {
				this.setState({ paymentTypes: e.target.value.split("\n") });
			}
		}, {
			key: 'clickRevert',
			value: function clickRevert(e) {
				this.setState(this.props.event);
				e.preventDefault();
			}
		}, {
			key: 'clickDeleteLock',
			value: function clickDeleteLock(e) {
				this.setState({ delete: !this.state.delete });
				e.preventDefault();
			}
		}, {
			key: 'clickDelete',
			value: function clickDelete(e) {
				this.props.deleteEvent({ id: this.props.event.id });
				e.preventDefault();
			}
		}, {
			key: 'clickSave',
			value: function clickSave(e) {
				var event = {
					id: this.state.id,
					name: this.state.name,
					description: this.state.description,
					startDate: this.state.startDate,
					endDate: this.state.endDate,
					bookingDeadline: this.state.bookingDeadline,
					allowGuestBookings: this.state.allowGuestBookings,
					feeModel: this.state.feeModel,
					feeData: this.state.feeData,
					paymentTypes: this.state.paymentTypes.filter(function (v) {
						return v !== "";
					}),
					paymentInfo: this.state.paymentInfo
				};
	
				this.props.saveEvent(event);
				e.preventDefault();
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;
	
				var feeOptions = _lodash2.default.map(_fee2.default, function (f) {
					return _react2.default.createElement(
						'option',
						{ value: f.name, key: f.name + "key" },
						f.selection
					);
				});
	
				var FeeConfig = _fee2.default[this.state.feeModel].Config;
	
				var paymentFields = null;
				var feeOptionFields = null;
	
				if (this.state.feeModel !== "free") {
	
					feeOptionFields = _react2.default.createElement(
						'div',
						{ className: 'form-group' },
						_react2.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'Fee Options:'
						),
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-10' },
							_react2.default.createElement(FeeConfig, { fee: this.state.feeData, onChange: this.updateFeeData })
						)
					);
	
					var options = this.state.paymentTypes.join("\n");
					paymentFields = _react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'col-sm-2 control-label' },
								'Payment Options:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-sm-10' },
								_react2.default.createElement('textarea', { className: 'form-control', rows: '5', value: options, onChange: this.updatePaymentOptions })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'col-sm-2 control-label' },
								'Payment Instructions:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-sm-10' },
								_react2.default.createElement('textarea', { className: 'form-control', rows: '5', value: this.state.paymentInfo, onChange: this.update("paymentInfo") })
							)
						)
					);
				}
	
				var deleteButtons = this.props.new ? null : [_react2.default.createElement(
					'button',
					{ key: 'deletelock', type: 'submit', disabled: !this.state.delete, onClick: this.clickDelete, className: 'btn btn-danger pull-right' },
					'Delete'
				), _react2.default.createElement(
					'button',
					{ key: 'delete', type: 'submit', className: 'btn btn-danger pull-right', onClick: this.clickDeleteLock },
					_react2.default.createElement('span', { className: 'glyphicon glyphicon-lock', 'aria-hidden': 'true' })
				)];
	
				return _react2.default.createElement(
					'div',
					{ className: 'col-sm-12' },
					_react2.default.createElement(
						'form',
						{ className: 'form-horizontal' },
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'col-sm-2 control-label' },
								'Name:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-sm-10' },
								_react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'Name', value: this.state.name, onChange: this.update("name") })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'col-sm-2 control-label' },
								'Description:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-sm-10' },
								_react2.default.createElement('textarea', { className: 'form-control', rows: '5', value: this.state.description, onChange: this.update("description") })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'col-sm-2 control-label' },
								'Start date:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-sm-10' },
								_react2.default.createElement('input', { type: 'date', className: 'form-control', value: (0, _moment2.default)(this.state.startDate).format("YYYY-MM-DD"), onChange: this.update("startDate") })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'col-sm-2 control-label' },
								'End date:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-sm-10' },
								_react2.default.createElement('input', { type: 'date', className: 'form-control', value: (0, _moment2.default)(this.state.endDate).format("YYYY-MM-DD"), onChange: this.update("endDate") })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'col-sm-2 control-label' },
								'Booking Deadline:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-sm-10' },
								_react2.default.createElement('input', { type: 'date', className: 'form-control', value: (0, _moment2.default)(this.state.bookingDeadline).format("YYYY-MM-DD"), onChange: this.update("bookingDeadline") })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'col-sm-2 control-label' },
								'Allow Guest Bookings:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-sm-10' },
								_react2.default.createElement(_reactToggle2.default, { checked: this.state.allowGuestBookings, onChange: function onChange() {
										return _this3.setState({ allowGuestBookings: !_this3.state.allowGuestBookings });
									}, value: 'yes' })
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'label',
								{ className: 'col-sm-2 control-label' },
								'Fee Structure:'
							),
							_react2.default.createElement(
								'div',
								{ className: 'col-sm-10' },
								_react2.default.createElement(
									'select',
									{ value: this.state.feeModel, onChange: this.update('feeModel'), className: 'form-control' },
									feeOptions
								)
							)
						),
						feeOptionFields,
						paymentFields,
						_react2.default.createElement(
							'div',
							{ className: 'form-group' },
							_react2.default.createElement(
								'div',
								{ className: 'col-sm-offset-2 col-sm-10' },
								_react2.default.createElement(
									'div',
									{ className: 'btn-toolbar' },
									_react2.default.createElement(
										'button',
										{ type: 'submit', className: 'btn btn-success', onClick: this.clickSave },
										'Save'
									),
									_react2.default.createElement(
										'button',
										{ type: 'submit', className: 'btn btn-warning', onClick: this.clickRevert },
										'Revert'
									),
									deleteButtons
								)
							)
						)
					)
				);
			}
		}]);
	
		return EditForm;
	}(_react2.default.Component);
	
	exports.default = EditForm;

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(425);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _check = __webpack_require__(427);
	
	var _check2 = _interopRequireDefault(_check);
	
	var _x = __webpack_require__(428);
	
	var _x2 = _interopRequireDefault(_x);
	
	var _util = __webpack_require__(429);
	
	var _reactAddonsShallowCompare = __webpack_require__(430);
	
	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Toggle = function (_Component) {
	  _inherits(Toggle, _Component);
	
	  function Toggle(props) {
	    _classCallCheck(this, Toggle);
	
	    var _this = _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).call(this, props));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    _this.handleTouchStart = _this.handleTouchStart.bind(_this);
	    _this.handleTouchMove = _this.handleTouchMove.bind(_this);
	    _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
	    _this.handleFocus = _this.setState.bind(_this, { hasFocus: true }, function () {});
	    _this.handleBlur = _this.setState.bind(_this, { hasFocus: false }, function () {});
	    _this.previouslyChecked = !!(props.checked || props.defaultChecked);
	    _this.state = {
	      checked: !!(props.checked || props.defaultChecked),
	      hasFocus: false
	    };
	    return _this;
	  }
	
	  _createClass(Toggle, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ('checked' in nextProps) {
	        this.setState({ checked: !!nextProps.checked });
	      }
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick(event) {
	      var checkbox = this.input;
	      if (event.target !== checkbox && !this.moved) {
	        this.previouslyChecked = checkbox.checked;
	        event.preventDefault();
	        checkbox.focus();
	        checkbox.click();
	        return;
	      }
	
	      this.setState({ checked: checkbox.checked });
	    }
	  }, {
	    key: 'handleTouchStart',
	    value: function handleTouchStart(event) {
	      this.startX = (0, _util.pointerCoord)(event).x;
	      this.activated = true;
	    }
	  }, {
	    key: 'handleTouchMove',
	    value: function handleTouchMove(event) {
	      if (!this.activated) return;
	      this.moved = true;
	
	      if (this.startX) {
	        var currentX = (0, _util.pointerCoord)(event).x;
	        if (this.state.checked && currentX + 15 < this.startX) {
	          this.setState({ checked: false });
	          this.startX = currentX;
	          this.activated = true;
	        } else if (currentX - 15 > this.startX) {
	          this.setState({ checked: true });
	          this.startX = currentX;
	          this.activated = currentX < this.startX + 5;
	        }
	      }
	    }
	  }, {
	    key: 'handleTouchEnd',
	    value: function handleTouchEnd(event) {
	      if (!this.moved) return;
	      var checkbox = this.input;
	      event.preventDefault();
	
	      if (this.startX) {
	        var endX = (0, _util.pointerCoord)(event).x;
	        if (this.previouslyChecked === true && this.startX + 4 > endX) {
	          if (this.previouslyChecked !== this.state.checked) {
	            this.setState({ checked: false });
	            this.previouslyChecked = this.state.checked;
	            checkbox.click();
	          }
	        } else if (this.startX - 4 < endX) {
	          if (this.previouslyChecked !== this.state.checked) {
	            this.setState({ checked: true });
	            this.previouslyChecked = this.state.checked;
	            checkbox.click();
	          }
	        }
	
	        this.activated = false;
	        this.startX = null;
	        this.moved = false;
	      }
	    }
	  }, {
	    key: 'getIcon',
	    value: function getIcon(type) {
	      var icons = this.props.icons;
	
	      if (!icons) {
	        return null;
	      }
	      return icons[type] === undefined ? Toggle.defaultProps.icons[type] : icons[type];
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          className = _props.className,
	          _icons = _props.icons,
	          inputProps = _objectWithoutProperties(_props, ['className', 'icons']);
	
	      var classes = (0, _classnames2.default)('react-toggle', {
	        'react-toggle--checked': this.state.checked,
	        'react-toggle--focus': this.state.hasFocus,
	        'react-toggle--disabled': this.props.disabled
	      }, className);
	
	      return _react2.default.createElement('div', { className: classes,
	        onClick: this.handleClick,
	        onTouchStart: this.handleTouchStart,
	        onTouchMove: this.handleTouchMove,
	        onTouchEnd: this.handleTouchEnd }, _react2.default.createElement('div', { className: 'react-toggle-track' }, _react2.default.createElement('div', { className: 'react-toggle-track-check' }, this.getIcon('checked')), _react2.default.createElement('div', { className: 'react-toggle-track-x' }, this.getIcon('unchecked'))), _react2.default.createElement('div', { className: 'react-toggle-thumb' }), _react2.default.createElement('input', _extends({}, inputProps, {
	        ref: function ref(_ref) {
	          _this2.input = _ref;
	        },
	        onFocus: this.handleFocus,
	        onBlur: this.handleBlur,
	        className: 'react-toggle-screenreader-only',
	        type: 'checkbox' })));
	    }
	  }]);
	
	  return Toggle;
	}(_react.Component);
	
	exports.default = Toggle;
	
	Toggle.displayName = 'Toggle';
	
	Toggle.defaultProps = {
	  icons: {
	    checked: _react2.default.createElement(_check2.default, null),
	    unchecked: _react2.default.createElement(_x2.default, null)
	  }
	};
	
	Toggle.propTypes = {
	  checked: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool,
	  defaultChecked: _react.PropTypes.bool,
	  onChange: _react.PropTypes.func,
	  className: _react.PropTypes.string,
	  name: _react.PropTypes.string,
	  value: _react.PropTypes.string,
	  id: _react.PropTypes.string,
	  'aria-labelledby': _react.PropTypes.string,
	  'aria-label': _react.PropTypes.string,
	  icons: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.shape({
	    checked: _react.PropTypes.node,
	    unchecked: _react.PropTypes.node
	  })])
	};

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames() {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(426)) === 'object' && __webpack_require__(426)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 426 */,
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = function () {
	  return _react2.default.createElement('svg', { width: '14', height: '11', viewBox: '0 0 14 11' }, _react2.default.createElement('title', null, 'switch-check'), _react2.default.createElement('path', { d: 'M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0', fill: '#fff', fillRule: 'evenodd' }));
	};

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = function () {
	  return _react2.default.createElement('svg', { width: '10', height: '10', viewBox: '0 0 10 10' }, _react2.default.createElement('title', null, 'switch-x'), _react2.default.createElement('path', { d: 'M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12', fill: '#fff', fillRule: 'evenodd' }));
	};

/***/ },
/* 429 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pointerCoord = pointerCoord;
	// Copyright 2015-present Drifty Co.
	// http://drifty.com/
	// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts
	
	function pointerCoord(event) {
	  // get coordinates for either a mouse click
	  // or a touch depending on the given event
	  if (event) {
	    var changedTouches = event.changedTouches;
	    if (changedTouches && changedTouches.length > 0) {
	      var touch = changedTouches[0];
	      return { x: touch.clientX, y: touch.clientY };
	    }
	    var pageX = event.pageX;
	    if (pageX !== undefined) {
	      return { x: pageX, y: event.pageY };
	    }
	  }
	  return { x: 0, y: 0 };
	}

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(431);

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */
	
	'use strict';
	
	var shallowEqual = __webpack_require__(432);
	
	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}
	
	module.exports = shallowCompare;

/***/ },
/* 432 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */
	
	/*eslint-disable no-self-compare */
	
	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    // Added the nonzero y check to make Flow happy, but it is redundant
	    return x !== 0 || y !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }
	
	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 433 */,
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _free = __webpack_require__(435);
	
	var free = _interopRequireWildcard(_free);
	
	var _flat = __webpack_require__(436);
	
	var flat = _interopRequireWildcard(_flat);
	
	var _ealing = __webpack_require__(437);
	
	var ealing = _interopRequireWildcard(_ealing);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	exports.default = { free: free, flat: flat, ealing: ealing }; //holds components for sorting out the fees, various models are allowed

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BookingForm = exports.Config = exports.selection = exports.name = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//this represents a free event whereby no fees are expected/managed by the system.
	
	var name = exports.name = "free";
	var selection = exports.selection = "Free Event (don't manage fees)";
	
	var Config = exports.Config = function Config() {
	  return _react2.default.createElement(
	    "p",
	    null,
	    "Nothing to decide3"
	  );
	};
	
	var BookingForm = exports.BookingForm = function BookingForm(props) {
	  return _react2.default.createElement(
	    "p",
	    null,
	    "This is free event, no money involved"
	  );
	};

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.BookingForm = exports.Config = exports.selection = exports.name = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//This event has a flat per participant cost.
	
	var name = exports.name = "flat";
	var selection = exports.selection = "Flat fee per participant";
	
	var Config = exports.Config = function (_React$Component) {
		_inherits(Config, _React$Component);
	
		function Config(props) {
			_classCallCheck(this, Config);
	
			var _this = _possibleConstructorReturn(this, (Config.__proto__ || Object.getPrototypeOf(Config)).call(this, props));
	
			_this.update = _this.update.bind(_this);
			return _this;
		}
	
		_createClass(Config, [{
			key: "update",
			value: function update(e) {
				var fee = { amount: e.target.value };
				this.props.onChange(fee);
			}
		}, {
			key: "render",
			value: function render() {
	
				var amount = this.props.fee.amount || "";
	
				return _react2.default.createElement(
					"div",
					{ className: "row" },
					_react2.default.createElement(
						"div",
						{ className: "form-group" },
						_react2.default.createElement(
							"label",
							{ className: "col-sm-2 control-label" },
							"Fee per participant:"
						),
						_react2.default.createElement(
							"div",
							{ className: "col-sm-10" },
							_react2.default.createElement(
								"div",
								{ className: "input-group" },
								_react2.default.createElement(
									"span",
									{ className: "input-group-addon" },
									"\xA3"
								),
								_react2.default.createElement("input", { type: "number", className: "form-control", placeholder: "35", value: amount, onChange: this.update })
							)
						)
					)
				);
			}
		}]);
	
		return Config;
	}(_react2.default.Component);
	
	var BookingForm = exports.BookingForm = function (_React$Component2) {
		_inherits(BookingForm, _React$Component2);
	
		function BookingForm() {
			_classCallCheck(this, BookingForm);
	
			return _possibleConstructorReturn(this, (BookingForm.__proto__ || Object.getPrototypeOf(BookingForm)).apply(this, arguments));
		}
	
		_createClass(BookingForm, [{
			key: "render",
			value: function render() {
	
				var total = this.props.feeData.amount * this.props.participants.length;
	
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						"p",
						null,
						"This event costs \xA3",
						this.props.feeData.amount,
						" per person."
					),
					_react2.default.createElement(
						"p",
						null,
						"You have booked ",
						_react2.default.createElement(
							"b",
							null,
							this.props.participants.length
						),
						" people for a total of ",
						_react2.default.createElement(
							"b",
							null,
							"\xA3",
							total
						)
					)
				);
			}
		}]);
	
		return BookingForm;
	}(_react2.default.Component);

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.BookingForm = exports.Config = exports.selection = exports.name = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//this implements Ealing's camp pricing policy.
	
	var name = exports.name = "ealing";
	var selection = exports.selection = "Ealing Pricing Policy";
	
	var Config = exports.Config = function (_React$Component) {
		_inherits(Config, _React$Component);
	
		function Config(props) {
			_classCallCheck(this, Config);
	
			var _this = _possibleConstructorReturn(this, (Config.__proto__ || Object.getPrototypeOf(Config)).call(this, props));
	
			_this.update = _this.update.bind(_this);
			return _this;
		}
	
		_createClass(Config, [{
			key: "update",
			value: function update(e) {
				var fee = { amount: parseFloat(e.target.value) };
				this.props.onChange(fee);
			}
		}, {
			key: "render",
			value: function render() {
				//Thou shalt not ever use JS numbers for currency...
				var amount = this.props.fee.amount || 35;
	
				return _react2.default.createElement(
					"div",
					{ className: "row" },
					_react2.default.createElement(
						"div",
						{ className: "col-sm-12" },
						_react2.default.createElement(
							"table",
							{ className: "table" },
							_react2.default.createElement(
								"thead",
								null,
								_react2.default.createElement(
									"tr",
									null,
									_react2.default.createElement("th", null),
									_react2.default.createElement(
										"th",
										null,
										"Standard Rates"
									),
									_react2.default.createElement(
										"th",
										null,
										"Discounted Rates"
									)
								)
							),
							_react2.default.createElement(
								"tbody",
								null,
								_react2.default.createElement(
									"tr",
									null,
									_react2.default.createElement(
										"td",
										null,
										"Unaccompanied Elfins, Pioneers & Venturers"
									),
									_react2.default.createElement(
										"td",
										null,
										"\xA3",
										Math.round(amount * 1.5)
									),
									_react2.default.createElement(
										"td",
										null,
										"\xA3",
										Math.round(amount * 0.75)
									)
								),
								_react2.default.createElement(
									"tr",
									null,
									_react2.default.createElement(
										"td",
										null,
										"Elfins, Pioneers & Venturers accompanied by a responsible adult, DFs and Adults"
									),
									_react2.default.createElement(
										"td",
										null,
										_react2.default.createElement(
											"div",
											{ className: "input-group" },
											_react2.default.createElement(
												"span",
												{ className: "input-group-addon" },
												"\xA3"
											),
											_react2.default.createElement("input", { type: "number", className: "form-control", placeholder: "35", value: amount, onChange: this.update })
										)
									),
									_react2.default.createElement(
										"td",
										null,
										"\xA3",
										Math.round(amount * 0.5)
									)
								)
							)
						)
					)
				);
			}
		}]);
	
		return Config;
	}(_react2.default.Component);
	
	var BookingForm = exports.BookingForm = function (_React$Component2) {
		_inherits(BookingForm, _React$Component2);
	
		function BookingForm() {
			_classCallCheck(this, BookingForm);
	
			return _possibleConstructorReturn(this, (BookingForm.__proto__ || Object.getPrototypeOf(BookingForm)).apply(this, arguments));
		}
	
		_createClass(BookingForm, [{
			key: "render",
			value: function render() {
	
				var accompanied = this.props.participants.find(function (p) {
					return parseInt(p.age) > 15;
				}) === undefined ? false : true;
	
				var amount = this.props.feeData.amount;
	
				var total = this.props.participants.length * Math.round(this.props.feeData.amount * (accompanied ? 1 : 1.5));
				var totalDiscounted = this.props.participants.length * Math.round(this.props.feeData.amount * (accompanied ? 0.5 : 0.75));
	
				return _react2.default.createElement(
					"div",
					{ className: "col-sm-12" },
					_react2.default.createElement(
						"table",
						{ className: "table" },
						_react2.default.createElement(
							"thead",
							null,
							_react2.default.createElement(
								"tr",
								null,
								_react2.default.createElement("th", null),
								_react2.default.createElement(
									"th",
									null,
									"Suggested Donation"
								),
								_react2.default.createElement(
									"th",
									null,
									"Discounted Donation"
								)
							)
						),
						_react2.default.createElement(
							"tbody",
							null,
							_react2.default.createElement(
								"tr",
								null,
								_react2.default.createElement(
									"td",
									null,
									"Unaccompanied Elfins, Pioneers & Venturers"
								),
								_react2.default.createElement(
									"td",
									null,
									"\xA3",
									Math.round(amount * 1.5)
								),
								_react2.default.createElement(
									"td",
									null,
									"\xA3",
									Math.round(amount * 0.75)
								)
							),
							_react2.default.createElement(
								"tr",
								null,
								_react2.default.createElement(
									"td",
									null,
									"Elfins, Pioneers & Venturers accompanied by a responsible adult, DFs and Adults"
								),
								_react2.default.createElement(
									"td",
									null,
									"\xA3",
									Math.round(amount)
								),
								_react2.default.createElement(
									"td",
									null,
									"\xA3",
									Math.round(amount * 0.5)
								)
							),
							_react2.default.createElement(
								"tr",
								null,
								_react2.default.createElement(
									"td",
									null,
									_react2.default.createElement(
										"b",
										null,
										"My Booking"
									),
									" (",
									this.props.participants.length,
									" people, ",
									accompanied ? "Accompanined" : "Unaccompanied",
									")"
								),
								_react2.default.createElement(
									"td",
									null,
									_react2.default.createElement(
										"b",
										null,
										"\xA3",
										total
									)
								),
								_react2.default.createElement(
									"td",
									null,
									_react2.default.createElement(
										"b",
										null,
										"\xA3",
										totalDiscounted
									)
								)
							)
						)
					),
					_react2.default.createElement(
						"p",
						null,
						"In order for us to utilise Gift Aid the camp price has been changed to a suggested donation. If you have the means to donate more than the donations listed above then please do so as this will allow us to further subsidise poorer individuals and families. The ",
						_react2.default.createElement(
							"b",
							null,
							"discounted donation"
						),
						" is offered to all families/individuals where there is no wage earner and/or the family/individual is on a low wage. This would include DFs and students as well as adults and families. Cost should never be a reason for people being unable to attend camp so please contact us if you need further discount. Please make cheques payable to Ealing District Woodcraft Folk."
					)
				);
			}
		}]);
	
		return BookingForm;
	}(_react2.default.Component);

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reactRouter = __webpack_require__(234);
	
	var _eventForm = __webpack_require__(423);
	
	var _eventForm2 = _interopRequireDefault(_eventForm);
	
	var _actions = __webpack_require__(303);
	
	var _permission = __webpack_require__(306);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EditPage = function (_React$Component) {
		_inherits(EditPage, _React$Component);
	
		function EditPage() {
			_classCallCheck(this, EditPage);
	
			return _possibleConstructorReturn(this, (EditPage.__proto__ || Object.getPrototypeOf(EditPage)).apply(this, arguments));
		}
	
		_createClass(EditPage, [{
			key: 'render',
			value: function render() {
				if (this.props.Event === undefined) return null;
	
				var event = this.props.Event.toJS();
				//const data = this.props.user.toObject();
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-12' },
							_react2.default.createElement(
								'h3',
								null,
								'Edit Event - ',
								event.name
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(_eventForm2.default, { event: event, saveEvent: this.props.saveEvent, deleteEvent: this.props.deleteEvent })
					)
				);
			}
		}]);
	
		return EditPage;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state, props) {
		var Event = state.getIn(["Events", props.params.eventId]);
		return { Event: Event };
	};
	
	var mapDispatchToProps = { getEvent: _actions.getEvent, saveEvent: _actions.saveEvent, deleteEvent: _actions.deleteEvent };
	
	var VisibleEditPage = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _permission.editEventCheck)(EditPage));
	
	exports.default = VisibleEditPage;

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _actions = __webpack_require__(311);
	
	var actions = _interopRequireWildcard(_actions);
	
	var _reducer = __webpack_require__(440);
	
	var _reducer2 = _interopRequireDefault(_reducer);
	
	var _myBookingPage = __webpack_require__(441);
	
	var _myBookingPage2 = _interopRequireDefault(_myBookingPage);
	
	var _editPage = __webpack_require__(480);
	
	var _editPage2 = _interopRequireDefault(_editPage);
	
	var _thanksPage = __webpack_require__(481);
	
	var _thanksPage2 = _interopRequireDefault(_thanksPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	//import createPage from './components/createPage.js'
	exports.default = { actions: actions, reducer: _reducer2.default, myBookingPage: _myBookingPage2.default, editPage: _editPage2.default, thanksPage: _thanksPage2.default };

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Bookings;
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _actions = __webpack_require__(311);
	
	var a = _interopRequireWildcard(_actions);
	
	var _user = __webpack_require__(296);
	
	var _user2 = _interopRequireDefault(_user);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var initalBookingsState = _immutable2.default.fromJS({ quickList: [], bookings: null });
	
	function Bookings() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initalBookingsState;
		var action = arguments[1];
	
	
		switch (action.type) {
			case a.UPDATE_QUICK_LIST:
				return state.set("quickList", _immutable2.default.fromJS(action.participants));
			//case a.GET_EVENTS: return Immutable.fromJS(action.data);
			case a.UPDATE_BOOKINGS:
				if (state.get("bookings") === null) return state.set("bookings", _immutable2.default.Map()).mergeIn(["bookings"], _immutable2.default.fromJS(action.bookings));
				return state.mergeIn(["bookings"], _immutable2.default.fromJS(action.bookings));
			case a.UPDATE_BOOKING:
				return state.mergeIn(["bookings"], _immutable2.default.fromJS(action.booking));
			case _user2.default.actions.UPDATE_USER:
				return state.set("bookings", null); //invalidates app render if the user changes until we can fetch more user bookings.
		}
		return state;
	}

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reactRouter = __webpack_require__(234);
	
	var _events = __webpack_require__(302);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _bookingForm = __webpack_require__(442);
	
	var _bookingForm2 = _interopRequireDefault(_bookingForm);
	
	var _participantQuickList = __webpack_require__(474);
	
	var _participantQuickList2 = _interopRequireDefault(_participantQuickList);
	
	var _actions = __webpack_require__(311);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//this is the special case where we are doing the sessions own booking for the event. If we have previously booked then edit that instead of letting them create a new one.  
	
	var MyBookingPage = function (_React$Component) {
		_inherits(MyBookingPage, _React$Component);
	
		function MyBookingPage(props) {
			_classCallCheck(this, MyBookingPage);
	
			return _possibleConstructorReturn(this, (MyBookingPage.__proto__ || Object.getPrototypeOf(MyBookingPage)).call(this, props));
		}
	
		_createClass(MyBookingPage, [{
			key: 'render',
			value: function render() {
	
				var event = this.props.Event.toJS();
				var user = this.props.User.toJS();
				var quickList = this.props.QuickList.toJS();
	
				var form = this.props.Booking === undefined ? _react2.default.createElement(_bookingForm2.default, { user: user, event: event, submit: this.props.createBooking, updateQuickList: this.props.updateQuickList }) : _react2.default.createElement(_bookingForm2.default, { user: user, event: event, booking: this.props.Booking.toJS(), submit: this.props.saveBooking, updateQuickList: this.props.updateQuickList });
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'row', style: { display: "flex" } },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-12 col-md-10' },
							_react2.default.createElement(
								'h3',
								null,
								'Booking for ',
								event.name
							),
							_react2.default.createElement(
								'div',
								{ className: 'row' },
								form
							)
						),
						_react2.default.createElement(_participantQuickList2.default, { quickList: quickList })
					)
				);
			}
		}]);
	
		return MyBookingPage;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state, props) {
		var User = state.get("User");
		var Event = state.getIn(["Events", props.params.eventId.toString()]);
		var Booking = state.getIn(["Bookings", "bookings"]).find(function (b) {
			return b.get("userId") === User.get("id") && b.get("eventId") === Event.get("id");
		});
		var QuickList = state.getIn(["Bookings", "quickList"]);
		return { User: User, Event: Event, Booking: Booking, QuickList: QuickList };
	};
	
	var getEvent = _events2.default.actions.getEvent;
	var mapDispatchToProps = { getEvent: getEvent, updateQuickList: _actions.updateQuickList, createBooking: _actions.createBooking, getUserBookings: _actions.getUserBookings, saveBooking: _actions.saveBooking };
	
	var VisibleMyBookingPage = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MyBookingPage);
	
	exports.default = VisibleMyBookingPage;

/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _BookingUserDetails = __webpack_require__(443);
	
	var _BookingUserDetails2 = _interopRequireDefault(_BookingUserDetails);
	
	var _participantsForm = __webpack_require__(444);
	
	var _participantsForm2 = _interopRequireDefault(_participantsForm);
	
	var _permissionForm = __webpack_require__(445);
	
	var _permissionForm2 = _interopRequireDefault(_permissionForm);
	
	var _feeForm = __webpack_require__(446);
	
	var _feeForm2 = _interopRequireDefault(_feeForm);
	
	var _paymentForm = __webpack_require__(447);
	
	var _paymentForm2 = _interopRequireDefault(_paymentForm);
	
	var _lodash = __webpack_require__(433);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//this is a massive component that handles the state of the booking form.
	var BookingForm = function (_React$Component) {
		_inherits(BookingForm, _React$Component);
	
		function BookingForm(props) {
			_classCallCheck(this, BookingForm);
	
			var _this = _possibleConstructorReturn(this, (BookingForm.__proto__ || Object.getPrototypeOf(BookingForm)).call(this, props));
	
			_this.guest = props.user.id === 1;
	
			if (_this.props.booking === undefined) {
				//new booking, create blank data
	
				_this.state = {
					user: { name: _this.guest ? '' : props.user.userName,
						email: _this.guest ? '' : props.user.email,
						phone: '' },
					participants: [blankParticipant(), blankParticipant()],
					paymentType: "",
					permission: false,
					eventId: _this.props.event.id,
					delete: false,
					validation: { user: false,
						participant: false,
						payment: false,
						permission: false }
				};
			} else {
				//set state from the booking infomation passed.
				_this.state = {
					user: { name: _this.props.booking.userName,
						email: _this.props.booking.userEmail,
						phone: _this.props.booking.userContact },
					participants: _this.props.booking.participants,
					permission: true,
					paymentType: _this.props.booking.paymentType,
					eventId: _this.props.booking.eventId,
					id: _this.props.booking.id,
					delete: false,
					validation: { user: true,
						participant: true,
						payment: true,
						permission: true }
				};
			}
	
			_this.props.updateQuickList(_this.state.participants.map(function (p) {
				return { name: p.name, age: p.age };
			}));
	
			_this.updateUserDetails = _this.updateUserDetails.bind(_this);
			_this.updateParticipantDetails = _this.updateParticipantDetails.bind(_this);
			_this.addParticipant = _this.addParticipant.bind(_this);
			_this.deleteParticipant = _this.deleteParticipant.bind(_this);
			_this.updatePaymentType = _this.updatePaymentType.bind(_this);
			_this.updatePermission = _this.updatePermission.bind(_this);
			_this.clickDeleteLock = _this.clickDeleteLock.bind(_this);
			_this.submit = _this.submit.bind(_this);
			return _this;
		}
	
		_createClass(BookingForm, [{
			key: 'updateUserDetails',
			value: function updateUserDetails(item, value) {
				var user = this.state.user;
				user[item] = value;
				this.setState({ user: user });
			}
		}, {
			key: 'updateParticipantDetails',
			value: function updateParticipantDetails(id, item, value) {
				var participants = this.state.participants;
				var validation = this.state.validation;
				validation.user = true; //start validating user section
	
				var participant = participants.find(function (p) {
					return p.id === id;
				});
				participant[item] = value;
				this.setState({ participants: participants, validation: validation });
				this.props.updateQuickList(participants.map(function (p) {
					return { name: p.name, age: p.age };
				}));
			}
		}, {
			key: 'addParticipant',
			value: function addParticipant() {
	
				var participants = this.state.participants;
				participants.push(blankParticipant());
				this.setState({ participants: participants });
			}
		}, {
			key: 'deleteParticipant',
			value: function deleteParticipant(id) {
				var participants = this.state.participants;
				participants = participants.filter(function (p) {
					return p.id != id;
				});
				this.setState({ participants: participants });
				this.props.updateQuickList(participants.map(function (p) {
					return { name: p.name, age: p.age };
				}));
			}
		}, {
			key: 'updatePaymentType',
			value: function updatePaymentType(type) {
	
				var validation = this.state.validation;
				validation.user = true;
				validation.participants = true; //start validating user and participants section
				this.setState({ paymentType: type, validation: validation });
			}
		}, {
			key: 'updatePermission',
			value: function updatePermission() {
	
				var validation = this.state.validation;
				validation.user = true;
				validation.participants = true;
				validation.payment = true;
				validation.permission = true; //start validating everything section
	
				this.setState({ permission: !this.state.permission, validation: validation });
			}
		}, {
			key: 'submit',
			value: function submit(e) {
				var state = _lodash2.default.cloneDeep(this.state);
				state.participants = state.participants.map(function (p) {
					if (typeof p.id === "string") delete p.id;
					return p;
				});
	
				this.props.submit(state);
				e.preventDefault();
			}
		}, {
			key: 'clickDeleteLock',
			value: function clickDeleteLock(e) {
				this.setState({ delete: !this.state.delete });
				e.preventDefault();
			}
		}, {
			key: 'clickDelete',
			value: function clickDelete(e) {
				this.props.deleteEvent();
				e.preventDefault();
			}
		}, {
			key: 'render',
			value: function render() {
	
				var deleteButtons = this.props.new ? null : [_react2.default.createElement(
					'button',
					{ key: 'deletelock', type: 'submit', disabled: !this.state.delete, onClick: this.clickDelete, className: 'btn btn-danger pull-right' },
					'Cancel Booking'
				), _react2.default.createElement(
					'button',
					{ key: 'delete', type: 'submit', className: 'btn btn-danger pull-right', onClick: this.clickDeleteLock },
					_react2.default.createElement('span', { className: 'glyphicon glyphicon-lock', 'aria-hidden': 'true' })
				)];
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12' },
						_react2.default.createElement(
							'h3',
							null,
							'Your Details'
						),
						_react2.default.createElement(
							'p',
							null,
							'Please include a contact number we can use during the event'
						)
					),
					_react2.default.createElement(_BookingUserDetails2.default, { user: this.state.user, update: this.updateUserDetails, guest: this.guest, validating: this.state.validation.user }),
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12' },
						_react2.default.createElement(
							'h3',
							null,
							'Participants'
						),
						_react2.default.createElement(
							'p',
							null,
							'Please fill out for every person attending (including yourself if applicable)'
						)
					),
					_react2.default.createElement(_participantsForm2.default, { participants: this.state.participants, update: this.updateParticipantDetails, add: this.addParticipant, 'delete': this.deleteParticipant, validating: this.state.validation.participants }),
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12' },
						_react2.default.createElement(
							'h3',
							null,
							'Money'
						)
					),
					_react2.default.createElement(_feeForm2.default, { event: this.props.event, participants: this.state.participants }),
					_react2.default.createElement(_paymentForm2.default, { update: this.updatePaymentType, event: this.props.event, chosen: this.state.paymentType, validating: this.state.validation.user }),
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12' },
						_react2.default.createElement(
							'h3',
							null,
							'Permission'
						)
					),
					_react2.default.createElement(_permissionForm2.default, { event: this.props.event, check: this.state.permission, update: this.updatePermission }),
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12' },
						_react2.default.createElement(
							'h3',
							null,
							'Submit'
						),
						_react2.default.createElement(
							'p',
							null,
							'When you have finished click here to sumbit your booking. You can always come back and edit it before the deadline'
						),
						_react2.default.createElement(
							'div',
							{ className: 'btn-toolbar' },
							_react2.default.createElement(
								'button',
								{ className: 'btn btn-success', onClick: this.submit },
								'Submit Booking'
							),
							deleteButtons
						)
					)
				);
			}
		}]);
	
		return BookingForm;
	}(_react2.default.Component);
	
	//bad bad bad should be based on model.
	
	exports.default = BookingForm;
	var tempkey = 0;
	
	var blankParticipant = function blankParticipant() {
		return {
			id: 'Temp' + tempkey++, //need a key for react to render the participant array
			name: '',
			age: '',
			diet: '',
			dietExtra: '',
			medical: ''
		};
	};

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var BookingUserDetails = function (_React$Component) {
		_inherits(BookingUserDetails, _React$Component);
	
		function BookingUserDetails(props) {
			_classCallCheck(this, BookingUserDetails);
	
			var _this = _possibleConstructorReturn(this, (BookingUserDetails.__proto__ || Object.getPrototypeOf(BookingUserDetails)).call(this, props));
	
			_this.update = _this.update.bind(_this);
			return _this;
		}
	
		_createClass(BookingUserDetails, [{
			key: "update",
			value: function update(item) {
				var _this2 = this;
	
				return function (e) {
					_this2.props.update(item, e.target.value);
					e.preventDefault();
				};
			}
		}, {
			key: "render",
			value: function render() {
	
				var valid = "form-group";
				var invalid = "form-group has-error";
	
				return _react2.default.createElement(
					"div",
					{ className: "col-sm-12" },
					_react2.default.createElement(
						"form",
						{ className: "form-horizontal" },
						_react2.default.createElement(
							"div",
							{ className: this.props.validating ? this.props.user.name === "" ? invalid : valid : valid },
							_react2.default.createElement(
								"label",
								{ className: "col-sm-2 control-label" },
								"Your Name:"
							),
							_react2.default.createElement(
								"div",
								{ className: "col-sm-10" },
								_react2.default.createElement("input", { type: "text", className: "form-control", placeholder: "Name", disabled: !this.props.guest, value: this.props.user.name, onChange: this.update("name") })
							)
						),
						_react2.default.createElement(
							"div",
							{ className: this.props.validating ? this.props.user.email === "" ? invalid : valid : valid },
							_react2.default.createElement(
								"label",
								{ className: "col-sm-2 control-label" },
								"Your e-mail:"
							),
							_react2.default.createElement(
								"div",
								{ className: "col-sm-10" },
								_react2.default.createElement("input", { type: "e-mail", className: "form-control", placeholder: "e-mail", disabled: !this.props.guest, value: this.props.user.email, onChange: this.update("email") })
							)
						),
						_react2.default.createElement(
							"div",
							{ className: this.props.validating ? this.props.user.phone === "" ? invalid : valid : valid },
							_react2.default.createElement(
								"label",
								{ className: "col-sm-2 control-label" },
								"Contact Phone Number:"
							),
							_react2.default.createElement(
								"div",
								{ className: "col-sm-10" },
								_react2.default.createElement("input", { type: "tel", className: "form-control", placeholder: "Phone", value: this.props.user.phone, onChange: this.update("phone") })
							)
						)
					)
				);
			}
		}]);
	
		return BookingUserDetails;
	}(_react2.default.Component);
	
	exports.default = BookingUserDetails;

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ParticipantsForm = function (_React$Component) {
		_inherits(ParticipantsForm, _React$Component);
	
		function ParticipantsForm(props) {
			_classCallCheck(this, ParticipantsForm);
	
			var _this = _possibleConstructorReturn(this, (ParticipantsForm.__proto__ || Object.getPrototypeOf(ParticipantsForm)).call(this, props));
	
			_this.add = _this.add.bind(_this);
			return _this;
		}
	
		_createClass(ParticipantsForm, [{
			key: "add",
			value: function add(e) {
				this.props.add();
				e.preventDefault();
			}
	
			//I hope you like curry
	
		}, {
			key: "update",
			value: function update(k) {
				var _this2 = this;
	
				return function (item) {
					return function (e) {
						_this2.props.update(k, item, e.target.value);
						e.preventDefault();
					};
				};
			}
		}, {
			key: "delete",
			value: function _delete(k) {
				var _this3 = this;
	
				return function (e) {
					_this3.props.delete(k);
					e.preventDefault();
				};
			}
		}, {
			key: "render",
			value: function render() {
				var _this4 = this;
	
				var rows = this.props.participants.map(function (p, k) {
					return _react2.default.createElement(ParticipantRow, _extends({ key: p.id }, p, { update: _this4.update(p.id), "delete": _this4.delete(p.id), validating: _this4.props.validating }));
				});
	
				return _react2.default.createElement(
					"div",
					null,
					_react2.default.createElement(
						"div",
						{ className: "col-sm-12" },
						_react2.default.createElement(
							"div",
							{ className: "row participants" },
							rows
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "col-sm-12 top15" },
						_react2.default.createElement(
							"button",
							{ className: "btn btn-default", onClick: this.add },
							"More People!"
						)
					)
				);
			}
		}]);
	
		return ParticipantsForm;
	}(_react2.default.Component);
	
	exports.default = ParticipantsForm;
	
	
	var ParticipantRow = function ParticipantRow(props) {
	
		var valid = "";
		var invalid = "has-error";
	
		//{props.validating ? props.name === "" || props.age === "" || props.diet === "" ? invalid : valid : valid}
	
		return _react2.default.createElement(
			"div",
			{ className: "col-sm-12 participantrow" },
			_react2.default.createElement(
				"form",
				{ className: "form-horizontal" },
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement(
						"div",
						{ className: props.validating ? props.name === "" ? invalid : valid : valid },
						_react2.default.createElement(
							"label",
							{ className: "col-sm-3 control-label" },
							"Name:"
						),
						_react2.default.createElement(
							"div",
							{ className: "col-sm-3" },
							_react2.default.createElement("input", { type: "text", value: props.name, onChange: props.update("name"), className: "form-control", placeholder: "Name" })
						)
					),
					_react2.default.createElement(
						"div",
						{ className: props.validating ? props.age === "" ? invalid : valid : valid },
						_react2.default.createElement(
							"label",
							{ className: "col-sm-1 control-label" },
							"Age:"
						),
						_react2.default.createElement(
							"div",
							{ className: "col-sm-1" },
							_react2.default.createElement("input", { type: "text", value: props.age, onChange: props.update("age"), className: "form-control", placeholder: "Age" })
						)
					),
					_react2.default.createElement(
						"div",
						{ className: props.validating ? props.diet === "" ? invalid : valid : valid },
						_react2.default.createElement(
							"label",
							{ className: "col-sm-1 control-label" },
							"Diet:"
						),
						_react2.default.createElement(
							"div",
							{ className: "col-sm-2" },
							_react2.default.createElement(
								"select",
								{ value: props.diet, onChange: props.update("diet"), className: "form-control" },
								_react2.default.createElement(
									"option",
									null,
									"Please Select"
								),
								_react2.default.createElement(
									"option",
									{ value: "omnivore" },
									"Omnivore"
								),
								_react2.default.createElement(
									"option",
									{ value: "vegetarian" },
									"Vegetarian"
								),
								_react2.default.createElement(
									"option",
									{ value: "vegan" },
									"Vegan"
								)
							)
						)
					),
					_react2.default.createElement(
						"div",
						{ className: "col-sm-1" },
						_react2.default.createElement(
							"button",
							{ type: "submit", onClick: props.delete, className: "btn btn-warning" },
							_react2.default.createElement("span", { className: "glyphicon glyphicon-remove", "aria-hidden": "true" })
						)
					)
				)
			),
			_react2.default.createElement(
				"form",
				{ className: "form-horizontal" },
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement(
						"label",
						{ className: "col-sm-3 control-label" },
						"Additional dietry infomation or allergies:"
					),
					_react2.default.createElement(
						"div",
						{ className: "col-sm-9" },
						_react2.default.createElement("textarea", { value: props.dietExtra, onChange: props.update("dietExtra"), className: "form-control", rows: "2" })
					)
				),
				_react2.default.createElement(
					"div",
					{ className: "form-group" },
					_react2.default.createElement(
						"label",
						{ className: "col-sm-3 control-label" },
						"Additional medical infomation & medication taken:"
					),
					_react2.default.createElement(
						"div",
						{ className: "col-sm-9" },
						_react2.default.createElement("textarea", { className: "form-control", value: props.medical, onChange: props.update("medical"), rows: "2" })
					)
				)
			)
		);
	};

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PermissionForm = function (_React$Component) {
		_inherits(PermissionForm, _React$Component);
	
		function PermissionForm(props) {
			_classCallCheck(this, PermissionForm);
	
			var _this = _possibleConstructorReturn(this, (PermissionForm.__proto__ || Object.getPrototypeOf(PermissionForm)).call(this, props));
	
			_this.updatePermission = _this.updatePermission.bind(_this);
			return _this;
		}
	
		_createClass(PermissionForm, [{
			key: "updatePermission",
			value: function updatePermission(e) {
				this.props.update();
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"div",
					{ className: "col-sm-12" },
					_react2.default.createElement(
						"form",
						{ className: "form-horizontal" },
						_react2.default.createElement(
							"div",
							{ className: "form-group" },
							_react2.default.createElement(
								"div",
								{ className: "checkbox col-sm-11 col-sm-offset-1" },
								_react2.default.createElement(
									"label",
									null,
									_react2.default.createElement("input", { type: "checkbox", checked: this.props.check, onChange: this.updatePermission }),
									"I give permission for the people named above to attend ",
									this.props.event.Name
								)
							)
						)
					)
				);
			}
		}]);
	
		return PermissionForm;
	}(_react2.default.Component);
	
	exports.default = PermissionForm;

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(433);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _fee = __webpack_require__(434);
	
	var _fee2 = _interopRequireDefault(_fee);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FeeForm = function (_React$Component) {
		_inherits(FeeForm, _React$Component);
	
		function FeeForm(props) {
			_classCallCheck(this, FeeForm);
	
			var _this = _possibleConstructorReturn(this, (FeeForm.__proto__ || Object.getPrototypeOf(FeeForm)).call(this, props));
	
			_this.updatePermission = _this.updatePermission.bind(_this);
			return _this;
		}
	
		_createClass(FeeForm, [{
			key: 'updatePermission',
			value: function updatePermission(e) {
				this.props.update();
			}
		}, {
			key: 'render',
			value: function render() {
	
				var BookingFeeForm = _fee2.default[this.props.event.feeModel].BookingForm;
	
				return _react2.default.createElement(
					'div',
					{ className: 'col-sm-12' },
					_react2.default.createElement(BookingFeeForm, { feeData: this.props.event.feeData, participants: this.props.participants })
				);
			}
		}]);
	
		return FeeForm;
	}(_react2.default.Component);
	
	exports.default = FeeForm;

/***/ },
/* 447 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactMarkdown = __webpack_require__(448);
	
	var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PaymentForm = function (_React$Component) {
		_inherits(PaymentForm, _React$Component);
	
		function PaymentForm(props) {
			_classCallCheck(this, PaymentForm);
	
			var _this = _possibleConstructorReturn(this, (PaymentForm.__proto__ || Object.getPrototypeOf(PaymentForm)).call(this, props));
	
			_this.selectPaymentType = _this.selectPaymentType.bind(_this);
			return _this;
		}
	
		_createClass(PaymentForm, [{
			key: 'selectPaymentType',
			value: function selectPaymentType(e) {
	
				this.props.update(e.target.value);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;
	
				var valid = "form-group";
				var invalid = "form-group has-error";
	
				var radios = this.props.event.paymentTypes.map(function (p) {
					return _react2.default.createElement(
						'label',
						{ key: p, className: 'radio-inline' },
						_react2.default.createElement('input', { type: 'radio', value: p, onChange: _this2.selectPaymentType, checked: _this2.props.chosen === p }),
						' ',
						p
					);
				});
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12' },
						_react2.default.createElement(
							'form',
							{ className: 'form-horizontal' },
							_react2.default.createElement(
								'div',
								{ className: this.props.validating ? this.props.chosen !== "" ? valid : invalid : valid },
								_react2.default.createElement(
									'label',
									{ className: 'col-sm-2 control-label' },
									'Payment Method:'
								),
								_react2.default.createElement(
									'div',
									{ className: 'col-sm-10' },
									radios
								)
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'col-sm-12' },
						_react2.default.createElement(_reactMarkdown2.default, { escapeHtml: true, source: this.props.event.paymentInfo })
					)
				);
			}
		}]);
	
		return PaymentForm;
	}(_react2.default.Component);
	
	exports.default = PaymentForm;

/***/ },
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSticky = __webpack_require__(475);
	
	var _woodcraft = __webpack_require__(479);
	
	var _woodcraft2 = _interopRequireDefault(_woodcraft);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	_woodcraft2.default.reverse();
	
	var CreatePage = function (_React$Component) {
		_inherits(CreatePage, _React$Component);
	
		function CreatePage() {
			_classCallCheck(this, CreatePage);
	
			return _possibleConstructorReturn(this, (CreatePage.__proto__ || Object.getPrototypeOf(CreatePage)).apply(this, arguments));
		}
	
		_createClass(CreatePage, [{
			key: 'render',
			value: function render() {
	
				var list = this.props.quickList;
				var groups = _woodcraft2.default.map(function (w) {
					var people = list.filter(function (p) {
						return p.age === '' ? false : w.filter(p.age);
					}).map(function (p, k) {
						return _react2.default.createElement(
							'p',
							{ key: k },
							p.name
						);
					});
					if (people.length === 0) return null;
					return _react2.default.createElement(
						'div',
						{ key: w.name },
						_react2.default.createElement(
							'h4',
							null,
							w.name,
							': ',
							people.length
						),
						people
					);
				});
	
				return _react2.default.createElement(
					_reactSticky.StickyContainer,
					{ className: 'hidden-sm-down col-md-2', style: { alignItems: "stretch" } },
					_react2.default.createElement(
						_reactSticky.Sticky,
						null,
						_react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
								'div',
								{ style: { height: "100px" } },
								_react2.default.createElement(
									'h3',
									null,
									'Participants Added: ',
									list.length
								),
								groups
							)
						)
					)
				);
			}
		}]);
	
		return CreatePage;
	}(_react2.default.Component);
	
	exports.default = CreatePage;

/***/ },
/* 475 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Channel = exports.StickyContainer = exports.Sticky = undefined;
	
	var _sticky = __webpack_require__(476);
	
	var _sticky2 = _interopRequireDefault(_sticky);
	
	var _container = __webpack_require__(477);
	
	var _container2 = _interopRequireDefault(_container);
	
	var _channel = __webpack_require__(478);
	
	var _channel2 = _interopRequireDefault(_channel);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.Sticky = _sticky2.default;
	exports.StickyContainer = _container2.default;
	exports.Channel = _channel2.default;
	exports.default = _sticky2.default;

/***/ },
/* 476 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Sticky = function (_React$Component) {
	  _inherits(Sticky, _React$Component);
	
	  function Sticky(props) {
	    _classCallCheck(this, Sticky);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Sticky).call(this, props));
	
	    _this.updateContext = function (_ref) {
	      var inherited = _ref.inherited;
	      var node = _ref.node;
	
	      _this.containerNode = node;
	      _this.setState({
	        containerOffset: inherited,
	        distanceFromBottom: _this.getDistanceFromBottom()
	      });
	    };
	
	    _this.recomputeState = function () {
	      var isSticky = _this.isSticky();
	      var height = _this.getHeight();
	      var width = _this.getWidth();
	      var xOffset = _this.getXOffset();
	      var distanceFromBottom = _this.getDistanceFromBottom();
	      var hasChanged = _this.state.isSticky !== isSticky;
	
	      _this.setState({ isSticky: isSticky, height: height, width: width, xOffset: xOffset, distanceFromBottom: distanceFromBottom });
	
	      if (hasChanged) {
	        if (_this.channel) {
	          _this.channel.update(function (data) {
	            data.offset = isSticky ? _this.state.height : 0;
	          });
	        }
	
	        _this.props.onStickyStateChange(isSticky);
	      }
	    };
	
	    _this.state = {};
	    return _this;
	  }
	
	  _createClass(Sticky, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.channel = this.context['sticky-channel'];
	      this.channel.subscribe(this.updateContext);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.on(['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'], this.recomputeState);
	      this.recomputeState();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps() {
	      this.recomputeState();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.off(['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'], this.recomputeState);
	      this.channel.unsubscribe(this.updateContext);
	    }
	  }, {
	    key: 'getXOffset',
	    value: function getXOffset() {
	      return this.refs.placeholder.getBoundingClientRect().left;
	    }
	  }, {
	    key: 'getWidth',
	    value: function getWidth() {
	      return this.refs.placeholder.getBoundingClientRect().width;
	    }
	  }, {
	    key: 'getHeight',
	    value: function getHeight() {
	      return _reactDom2.default.findDOMNode(this.refs.children).getBoundingClientRect().height;
	    }
	  }, {
	    key: 'getDistanceFromTop',
	    value: function getDistanceFromTop() {
	      return this.refs.placeholder.getBoundingClientRect().top;
	    }
	  }, {
	    key: 'getDistanceFromBottom',
	    value: function getDistanceFromBottom() {
	      if (!this.containerNode) return 0;
	      return this.containerNode.getBoundingClientRect().bottom;
	    }
	  }, {
	    key: 'isSticky',
	    value: function isSticky() {
	      if (!this.props.isActive) return false;
	
	      var fromTop = this.getDistanceFromTop();
	      var fromBottom = this.getDistanceFromBottom();
	
	      var topBreakpoint = this.state.containerOffset - this.props.topOffset;
	      var bottomBreakpoint = this.state.containerOffset + this.props.bottomOffset;
	
	      return fromTop <= topBreakpoint && fromBottom >= bottomBreakpoint;
	    }
	  }, {
	    key: 'on',
	    value: function on(events, callback) {
	      events.forEach(function (evt) {
	        window.addEventListener(evt, callback);
	      });
	    }
	  }, {
	    key: 'off',
	    value: function off(events, callback) {
	      events.forEach(function (evt) {
	        window.removeEventListener(evt, callback);
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(newProps, newState) {
	      var _this2 = this;
	
	      // Have we changed the number of props?
	      var propNames = Object.keys(this.props);
	      if (Object.keys(newProps).length != propNames.length) return true;
	
	      // Have we changed any prop values?
	      var valuesMatch = propNames.every(function (key) {
	        return newProps.hasOwnProperty(key) && newProps[key] === _this2.props[key];
	      });
	      if (!valuesMatch) return true;
	
	      // Have we changed any state that will always impact rendering?
	      var state = this.state;
	      if (newState.isSticky !== state.isSticky) return true;
	
	      // If we are sticky, have we changed any state that will impact rendering?
	      if (state.isSticky) {
	        if (newState.height !== state.height) return true;
	        if (newState.width !== state.width) return true;
	        if (newState.xOffset !== state.xOffset) return true;
	        if (newState.containerOffset !== state.containerOffset) return true;
	        if (newState.distanceFromBottom !== state.distanceFromBottom) return true;
	      }
	
	      return false;
	    }
	
	    /*
	     * The special sauce.
	     */
	
	  }, {
	    key: 'render',
	    value: function render() {
	      var placeholderStyle = { paddingBottom: 0 };
	      var className = this.props.className;
	
	      // To ensure that this component becomes sticky immediately on mobile devices instead
	      // of disappearing until the scroll event completes, we add `transform: translateZ(0)`
	      // to 'kick' rendering of this element to the GPU
	      // @see http://stackoverflow.com/questions/32875046
	      var style = _extends({}, { transform: 'translateZ(0)' }, this.props.style);
	
	      if (this.state.isSticky) {
	        var _stickyStyle = {
	          position: 'fixed',
	          top: this.state.containerOffset,
	          left: this.state.xOffset,
	          width: this.state.width
	        };
	
	        var bottomLimit = this.state.distanceFromBottom - this.state.height - this.props.bottomOffset;
	        if (this.state.containerOffset > bottomLimit) {
	          _stickyStyle.top = bottomLimit;
	        }
	
	        placeholderStyle.paddingBottom = this.state.height;
	
	        className += ' ' + this.props.stickyClassName;
	        style = _extends({}, style, _stickyStyle, this.props.stickyStyle);
	      }
	
	      var _props = this.props;
	      var topOffset = _props.topOffset;
	      var isActive = _props.isActive;
	      var stickyClassName = _props.stickyClassName;
	      var stickyStyle = _props.stickyStyle;
	      var bottomOffset = _props.bottomOffset;
	      var onStickyStateChange = _props.onStickyStateChange;
	
	      var props = _objectWithoutProperties(_props, ['topOffset', 'isActive', 'stickyClassName', 'stickyStyle', 'bottomOffset', 'onStickyStateChange']);
	
	      return _react2.default.createElement('div', null, _react2.default.createElement('div', { ref: 'placeholder', style: placeholderStyle }), _react2.default.createElement('div', _extends({}, props, { ref: 'children', className: className, style: style }), this.props.children));
	    }
	  }]);
	
	  return Sticky;
	}(_react2.default.Component);
	
	Sticky.propTypes = {
	  isActive: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string,
	  style: _react2.default.PropTypes.object,
	  stickyClassName: _react2.default.PropTypes.string,
	  stickyStyle: _react2.default.PropTypes.object,
	  topOffset: _react2.default.PropTypes.number,
	  bottomOffset: _react2.default.PropTypes.number,
	  onStickyStateChange: _react2.default.PropTypes.func
	};
	Sticky.defaultProps = {
	  isActive: true,
	  className: '',
	  style: {},
	  stickyClassName: 'sticky',
	  stickyStyle: {},
	  topOffset: 0,
	  bottomOffset: 0,
	  onStickyStateChange: function onStickyStateChange() {}
	};
	Sticky.contextTypes = {
	  'sticky-channel': _react2.default.PropTypes.any
	};
	exports.default = Sticky;
	module.exports = exports['default'];

/***/ },
/* 477 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _channel = __webpack_require__(478);
	
	var _channel2 = _interopRequireDefault(_channel);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var Container = function (_React$Component) {
	  _inherits(Container, _React$Component);
	
	  function Container(props) {
	    _classCallCheck(this, Container);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Container).call(this, props));
	
	    _this.updateOffset = function (_ref) {
	      var inherited = _ref.inherited;
	      var offset = _ref.offset;
	
	      _this.channel.update(function (data) {
	        data.inherited = inherited + offset;
	      });
	    };
	
	    _this.channel = new _channel2.default({ inherited: 0, offset: 0, node: null });
	    return _this;
	  }
	
	  _createClass(Container, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { 'sticky-channel': this.channel };
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var parentChannel = this.context['sticky-channel'];
	      if (parentChannel) parentChannel.subscribe(this.updateOffset);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var node = _reactDom2.default.findDOMNode(this);
	      this.channel.update(function (data) {
	        data.node = node;
	      });
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.channel.update(function (data) {
	        data.node = null;
	      });
	
	      var parentChannel = this.context['sticky-channel'];
	      if (parentChannel) parentChannel.unsubscribe(this.updateOffset);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', this.props, this.props.children);
	    }
	  }]);
	
	  return Container;
	}(_react2.default.Component);
	
	Container.contextTypes = {
	  'sticky-channel': _react2.default.PropTypes.any
	};
	Container.childContextTypes = {
	  'sticky-channel': _react2.default.PropTypes.any
	};
	exports.default = Container;
	module.exports = exports['default'];

/***/ },
/* 478 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	var Channel = function Channel(data) {
	  _classCallCheck(this, Channel);
	
	  var listeners = [];
	  data = data || {};
	
	  this.subscribe = function (fn) {
	    listeners.push(fn);
	  };
	
	  this.unsubscribe = function (fn) {
	    var idx = listeners.indexOf(fn);
	    if (idx !== -1) listeners.splice(idx, 1);
	  };
	
	  this.update = function (fn) {
	    if (fn) fn(data);
	    listeners.forEach(function (l) {
	      return l(data);
	    });
	  };
	};
	
	exports.default = Channel;
	module.exports = exports['default'];

/***/ },
/* 479 */
/***/ function(module, exports) {

	"use strict";
	
	//this file contains age groups, etc
	
	var woodcraft = [{ name: "Woodchips",
		filter: function filter(age) {
			return age < 6;
		} }, { name: "Elfins",
		filter: function filter(age) {
			return age > 5 && age < 11;
		} }, { name: "Pioneers",
		filter: function filter(age) {
			return age > 9 && age < 13;
		} }, { name: "Venturers",
		filter: function filter(age) {
			return age > 12 && age < 16;
		} }, { name: "DFs/Adults",
		filter: function filter(age) {
			return age > 15;
		} }];
	
	module.exports = woodcraft;

/***/ },
/* 480 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reactRouter = __webpack_require__(234);
	
	var _events = __webpack_require__(302);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _bookingForm = __webpack_require__(442);
	
	var _bookingForm2 = _interopRequireDefault(_bookingForm);
	
	var _participantQuickList = __webpack_require__(474);
	
	var _participantQuickList2 = _interopRequireDefault(_participantQuickList);
	
	var _actions = __webpack_require__(311);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var EditPage = function (_React$Component) {
		_inherits(EditPage, _React$Component);
	
		function EditPage(props) {
			_classCallCheck(this, EditPage);
	
			return _possibleConstructorReturn(this, (EditPage.__proto__ || Object.getPrototypeOf(EditPage)).call(this, props));
		}
	
		_createClass(EditPage, [{
			key: 'render',
			value: function render() {
	
				if (this.props.Event === undefined) return null;
	
				var event = this.props.Event.toJS();
				var booking = this.props.Booking.toJS();
				var user = this.props.User.toJS();
				var quickList = this.props.QuickList.toJS();
				//const data = this.props.user.toObject();
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'row', style: { display: "flex" } },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-12 col-md-10' },
							_react2.default.createElement(
								'h3',
								null,
								'Booking for ',
								event.Name
							),
							_react2.default.createElement(
								'div',
								{ className: 'row' },
								_react2.default.createElement(_bookingForm2.default, { user: user, booking: booking, event: event, submit: this.props.createBooking, updateQuickList: this.props.updateQuickList })
							)
						),
						_react2.default.createElement(_participantQuickList2.default, { quickList: quickList })
					)
				);
			}
		}, {
			key: 'componentWillMount',
			value: function componentWillMount() {
				//messy, really need a proper data preload component
				if (this.props.Booking === undefined) this.props.getBooking(this.props.params.bookingId);
			}
		}]);
	
		return EditPage;
	}(_react2.default.Component);
	
	var mapStateToProps = function mapStateToProps(state, props) {
		var User = state.get("User");
		var Booking = state.getIn(["Bookings", "bookings", props.params.bookingId]);
		var Event = Booking !== undefined ? state.getIn(["Events", Booking.get("eventId").toString()]) : undefined;
		var QuickList = state.getIn(["Bookings", "quickList"]);
		return { User: User, Booking: Booking, Event: Event, QuickList: QuickList };
	};
	
	var getEvent = _events2.default.actions.getEvent;
	var mapDispatchToProps = { getEvent: getEvent, updateQuickList: _actions.updateQuickList, getBooking: _actions.getBooking };
	
	var VisibleEditPage = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EditPage);
	
	exports.default = VisibleEditPage;

/***/ },
/* 481 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reactRouter = __webpack_require__(234);
	
	var _events = __webpack_require__(302);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _actions = __webpack_require__(311);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//confirmation page for bookings
	
	
	var ThanksPage = function (_React$Component) {
		_inherits(ThanksPage, _React$Component);
	
		function ThanksPage(props) {
			_classCallCheck(this, ThanksPage);
	
			return _possibleConstructorReturn(this, (ThanksPage.__proto__ || Object.getPrototypeOf(ThanksPage)).call(this, props));
		}
	
		_createClass(ThanksPage, [{
			key: 'render',
			value: function render() {
	
				var event = this.props.Event.toJS();
				var user = this.props.User.toJS();
	
				//this is some unholy hack to get the thanks page to redirect back to the booking form if the user does not have a booking and will never actually come up in the real world.
	
				if (this.props.Booking === undefined) {
					setImmediate(this.props.redirectFromThanks, event.id);
					return null;
				}
	
				var booking = this.props.Booking.toJS();
	
				var participants = booking.participants.map(function (p) {
					return _react2.default.createElement(ParticipantRow, _extends({ key: p.id }, p));
				});
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'div',
						{ className: 'row' },
						_react2.default.createElement(
							'div',
							{ className: 'col-sm-12' },
							_react2.default.createElement(
								'h3',
								null,
								'Thanks for booking for ',
								event.name
							),
							_react2.default.createElement(
								'p',
								null,
								'You can come back and ',
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: "/event/" + event.id + "/book" },
									'edit'
								),
								' your booking at any time before the deadline'
							),
							_react2.default.createElement(
								'h4',
								null,
								'Participants booked'
							),
							_react2.default.createElement(
								'table',
								{ className: 'table' },
								_react2.default.createElement(
									'thead',
									null,
									_react2.default.createElement(
										'tr',
										null,
										_react2.default.createElement(
											'th',
											null,
											'Name'
										),
										_react2.default.createElement(
											'th',
											null,
											'Age'
										),
										_react2.default.createElement(
											'th',
											null,
											'Diet'
										)
									)
								),
								_react2.default.createElement(
									'tbody',
									null,
									participants
								)
							)
						)
					)
				);
			}
		}]);
	
		return ThanksPage;
	}(_react2.default.Component);
	
	var ParticipantRow = function ParticipantRow(props) {
		return _react2.default.createElement(
			'tr',
			null,
			_react2.default.createElement(
				'td',
				null,
				props.name
			),
			_react2.default.createElement(
				'td',
				null,
				props.age
			),
			_react2.default.createElement(
				'td',
				null,
				props.diet
			)
		);
	};
	
	var mapStateToProps = function mapStateToProps(state, props) {
		var User = state.get("User");
		var Event = state.getIn(["Events", props.params.eventId.toString()]);
		var Booking = state.getIn(["Bookings", "bookings"]).find(function (b) {
			return b.get("userId") === User.get("id") && b.get("eventId") === Event.get("id");
		});
		return { User: User, Event: Event, Booking: Booking };
	};
	
	var getEvent = _events2.default.actions.getEvent;
	var mapDispatchToProps = { redirectFromThanks: _actions.redirectFromThanks };
	
	var VisibleThanksPage = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ThanksPage);
	
	exports.default = VisibleThanksPage;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(482).setImmediate))

/***/ },
/* 482 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(483);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;

/***/ },
/* 483 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";
	
	(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	        // Callback can either be a function or a string
	        if (typeof callback !== "function") {
	            callback = new Function("" + callback);
	        }
	        // Copy function arguments
	        var args = new Array(arguments.length - 1);
	        for (var i = 0; i < args.length; i++) {
	            args[i] = arguments[i + 1];
	        }
	        // Store and register the task
	        var task = { callback: callback, args: args };
	        tasksByHandle[nextHandle] = task;
	        registerImmediate(nextHandle);
	        return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	            case 0:
	                callback();
	                break;
	            case 1:
	                callback(args[0]);
	                break;
	            case 2:
	                callback(args[0], args[1]);
	                break;
	            case 3:
	                callback(args[0], args[1], args[2]);
	                break;
	            default:
	                callback.apply(undefined, args);
	                break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function registerImmediate(handle) {
	            process.nextTick(function () {
	                runIfPresent(handle);
	            });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function () {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function onGlobalMessage(event) {
	            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function registerImmediate(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function registerImmediate(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function registerImmediate(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function registerImmediate(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(3)))

/***/ },
/* 484 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _containerPage = __webpack_require__(485);
	
	var _containerPage2 = _interopRequireDefault(_containerPage);
	
	var _participants = __webpack_require__(487);
	
	var _participants2 = _interopRequireDefault(_participants);
	
	var _bookings = __webpack_require__(488);
	
	var _bookings2 = _interopRequireDefault(_bookings);
	
	var _kp = __webpack_require__(489);
	
	var _kp2 = _interopRequireDefault(_kp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = { containerPage: _containerPage2.default, participants: _participants2.default, bookings: _bookings2.default, kp: _kp2.default };

/***/ },
/* 485 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _reactRouter = __webpack_require__(234);
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _bookings = __webpack_require__(439);
	
	var _bookings2 = _interopRequireDefault(_bookings);
	
	var _permission = __webpack_require__(486);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//this component sits at the root of our management pages and ensures all the booking infomation for the event is loaded. This will include other peoples bookings so  we need to check we have permission to view them.
	
	
	var ManageContainerPage = function (_React$Component) {
	  _inherits(ManageContainerPage, _React$Component);
	
	  function ManageContainerPage(props) {
	    _classCallCheck(this, ManageContainerPage);
	
	    return _possibleConstructorReturn(this, (ManageContainerPage.__proto__ || Object.getPrototypeOf(ManageContainerPage)).call(this, props));
	  }
	
	  _createClass(ManageContainerPage, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.getEventBookings(this.props.params.eventId);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	
	      //prevent render until we have the data available.
	      if (this.props.Events === null || this.props.Bookings === null) return _react2.default.createElement(
	        'div',
	        null,
	        'Loading Data'
	      );
	
	      var event = this.props.Event.toJS();
	      //React.cloneElement(this.props.children, {myprop: this.route.myprop})
	
	      return _react2.default.createElement(
	        'div',
	        { className: 'row' },
	        _react2.default.createElement(
	          'div',
	          { className: 'col-sm-12' },
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Report for ',
	            event.name
	          ),
	          _react2.default.createElement(
	            'ul',
	            { className: 'nav nav-tabs' },
	            _react2.default.createElement(
	              NavTab,
	              { to: "/event/" + this.props.params.eventId + "/manage" },
	              'Participants'
	            ),
	            _react2.default.createElement(
	              NavTab,
	              { to: "/event/" + this.props.params.eventId + "/manage/bookings" },
	              'Bookings'
	            ),
	            _react2.default.createElement(
	              NavTab,
	              { to: "/event/" + this.props.params.eventId + "/manage/kp" },
	              'KP'
	            )
	          ),
	          _react2.default.cloneElement(this.props.children, {
	            Event: this.props.Event,
	            Bookings: this.props.Bookings,
	            Participants: this.props.Participants })
	        )
	      );
	    }
	  }]);
	
	  return ManageContainerPage;
	}(_react2.default.Component);
	
	//we could still have no bookings..
	
	
	var mapStateToProps = function mapStateToProps(state, props) {
	
	  var Event = state.getIn(["Events", props.params.eventId]);
	  var Bookings = state.getIn(["Bookings", "bookings"]).filter(function (b) {
	    return b.get("eventId") === Event.get("id");
	  }).toList();
	  var Participants = Bookings.reduce(function (r, b) {
	    return r.concat(b.get("participants"));
	  }, _immutable2.default.List()); //just easier to do this here than find a plain javascript object map function
	  return { Event: Event, Bookings: Bookings, Participants: Participants };
	};
	
	var mapDispatchToProps = {
	  getEventBookings: _bookings2.default.actions.getEventBookings
	};
	
	var VisibleManageContainerPage = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _permission.manageEventCheck)(ManageContainerPage));
	
	exports.default = VisibleManageContainerPage;
	
	var NavTab = function (_React$Component2) {
	  _inherits(NavTab, _React$Component2);
	
	  function NavTab(props) {
	    _classCallCheck(this, NavTab);
	
	    return _possibleConstructorReturn(this, (NavTab.__proto__ || Object.getPrototypeOf(NavTab)).call(this, props));
	  }
	
	  _createClass(NavTab, [{
	    key: 'render',
	    value: function render() {
	      var isActive = this.context.router.isActive(this.props.to, true);
	      var className = isActive ? 'active' : '';
	      var link = _react2.default.createElement(_reactRouter.Link, _extends({ onlyActiveOnIndex: true }, this.props));
	      return _react2.default.createElement(
	        'li',
	        { className: className },
	        link
	      );
	    }
	  }]);
	
	  return NavTab;
	}(_react2.default.Component);
	
	;
	
	NavTab.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

/***/ },
/* 486 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.manageEventCheck = undefined;
	
	var _reduxAuthWrapper = __webpack_require__(307);
	
	var _permissions = __webpack_require__(310);
	
	var P = _interopRequireWildcard(_permissions);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var manageEventCheck = exports.manageEventCheck = (0, _reduxAuthWrapper.UserAuthWrapper)({
		authSelector: function authSelector(state, props) {
	
			return { user: state.get("User"), event: state.getIn(["Events", props.params.eventId]) };
		},
		predicate: function predicate(data) {
			if (data.event === undefined) return true;
			return P.manageEvent(data.user.toJS(), data.event.toJS());
		},
		failureRedirectPath: "/user",
		wrapperDisplayName: "Manage Event Check"
	});

/***/ },
/* 487 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _woodcraft = __webpack_require__(479);
	
	var _woodcraft2 = _interopRequireDefault(_woodcraft);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import bookings from '../bookings'
	//import { manageEventCheck } from '../permission.js'
	
	var Participants = function (_React$Component) {
		_inherits(Participants, _React$Component);
	
		function Participants(props) {
			_classCallCheck(this, Participants);
	
			return _possibleConstructorReturn(this, (Participants.__proto__ || Object.getPrototypeOf(Participants)).call(this, props));
		}
	
		_createClass(Participants, [{
			key: 'render',
			value: function render() {
	
				var event = this.props.Event.toJS();
				var bookings = this.props.Bookings.toJS();
				var participants = this.props.Participants.toJS();
	
				var groups = _woodcraft2.default.map(function (w) {
					var people = participants.filter(function (p) {
						return p.age === '' ? false : w.filter(p.age);
					});
					if (people.length === 0) return null;
					return _react2.default.createElement(
						'h5',
						{ key: w.name },
						w.name,
						': ',
						people.length
					);
				});
	
				var prows = participants.sort(nameSort).map(function (p) {
					return _react2.default.createElement(
						'tr',
						{ key: p.id },
						_react2.default.createElement(
							'td',
							null,
							p.name
						),
						_react2.default.createElement(
							'td',
							null,
							p.age
						),
						_react2.default.createElement(
							'td',
							null,
							bookings.find(function (b) {
								return b.id === p.bookingId;
							}).userName
						)
					);
				});
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h4',
						null,
						'Total Participants: ',
						participants.length
					),
					groups,
					_react2.default.createElement(
						'table',
						{ className: 'table' },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'th',
									null,
									'Name'
								),
								_react2.default.createElement(
									'th',
									null,
									'Age'
								),
								_react2.default.createElement(
									'th',
									null,
									'Booked By:'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							prows
						)
					)
				);
			}
		}]);
	
		return Participants;
	}(_react2.default.Component);
	
	exports.default = Participants;
	
	
	var nameSort = function nameSort(a, b) {
		var splitA = a.name.split(" ");
		var splitB = b.name.split(" ");
		var lastA = splitA[splitA.length - 1];
		var lastB = splitB[splitB.length - 1];
	
		if (lastA < lastB) return -1;
		if (lastA > lastB) return 1;
		return 0;
	};

/***/ },
/* 488 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _woodcraft = __webpack_require__(479);
	
	var _woodcraft2 = _interopRequireDefault(_woodcraft);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import bookings from '../bookings'
	//import { manageEventCheck } from '../permission.js'
	
	var Bookings = function (_React$Component) {
		_inherits(Bookings, _React$Component);
	
		function Bookings(props) {
			_classCallCheck(this, Bookings);
	
			return _possibleConstructorReturn(this, (Bookings.__proto__ || Object.getPrototypeOf(Bookings)).call(this, props));
		}
	
		_createClass(Bookings, [{
			key: 'render',
			value: function render() {
	
				var event = this.props.Event.toJS();
				var bookings = this.props.Bookings.toJS();
				var participants = this.props.Participants.toJS();
	
				var brows = bookings.map(function (b) {
					return _react2.default.createElement(
						'tr',
						{ key: b.id },
						_react2.default.createElement(
							'td',
							null,
							b.userName
						),
						_react2.default.createElement(
							'td',
							null,
							b.userEmail
						),
						_react2.default.createElement(
							'td',
							null,
							b.userContact
						),
						_react2.default.createElement(
							'td',
							null,
							b.participants.length
						),
						_react2.default.createElement(
							'td',
							null,
							b.paymentType
						),
						_react2.default.createElement(
							'td',
							null,
							b.updatedAt
						)
					);
				});
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h4',
						null,
						'Total Bookings: ',
						bookings.length
					),
					_react2.default.createElement(
						'table',
						{ className: 'table' },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'th',
									null,
									'Name'
								),
								_react2.default.createElement(
									'th',
									null,
									'e-mail'
								),
								_react2.default.createElement(
									'th',
									null,
									'Contact'
								),
								_react2.default.createElement(
									'th',
									null,
									'Participants booked'
								),
								_react2.default.createElement(
									'th',
									null,
									'Payment Method'
								),
								_react2.default.createElement(
									'th',
									null,
									'Updated'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							brows
						)
					)
				);
			}
		}]);
	
		return Bookings;
	}(_react2.default.Component);
	
	exports.default = Bookings;
	
	
	var nameSort = function nameSort(a, b) {
		var splitA = a.name.split(" ");
		var splitB = b.name.split(" ");
		var lastA = splitA[splitA.length - 1];
		var lastB = splitB[splitB.length - 1];
	
		if (lastA < lastB) return -1;
		if (lastA > lastB) return 1;
		return 0;
	};

/***/ },
/* 489 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(183);
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _woodcraft = __webpack_require__(479);
	
	var _woodcraft2 = _interopRequireDefault(_woodcraft);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import bookings from '../bookings'
	//import { manageEventCheck } from '../permission.js'
	
	var KP = function (_React$Component) {
		_inherits(KP, _React$Component);
	
		function KP(props) {
			_classCallCheck(this, KP);
	
			return _possibleConstructorReturn(this, (KP.__proto__ || Object.getPrototypeOf(KP)).call(this, props));
		}
	
		_createClass(KP, [{
			key: 'render',
			value: function render() {
	
				var event = this.props.Event.toJS();
				var bookings = this.props.Bookings.toJS();
				var participants = this.props.Participants.toJS();
	
				var groups = _woodcraft2.default.map(function (w) {
					var people = participants.filter(function (p) {
						return p.age === '' ? false : w.filter(p.age);
					});
					if (people.length === 0) return null;
					return _react2.default.createElement(
						'tr',
						{ key: w.name },
						_react2.default.createElement(
							'td',
							null,
							w.name
						),
						_react2.default.createElement(
							'td',
							null,
							people.filter(function (p) {
								return p.diet === "omnivore";
							}).length
						),
						_react2.default.createElement(
							'td',
							null,
							people.filter(function (p) {
								return p.diet === "vegetarian";
							}).length
						),
						_react2.default.createElement(
							'td',
							null,
							people.filter(function (p) {
								return p.diet === "vegan";
							}).length
						),
						_react2.default.createElement(
							'td',
							null,
							people.length
						)
					);
				});
	
				groups.push(_react2.default.createElement(
					'tr',
					{ key: 'total' },
					_react2.default.createElement(
						'td',
						null,
						'Total:'
					),
					_react2.default.createElement(
						'td',
						null,
						participants.filter(function (p) {
							return p.diet === "omnivore";
						}).length
					),
					_react2.default.createElement(
						'td',
						null,
						participants.filter(function (p) {
							return p.diet === "vegetarian";
						}).length
					),
					_react2.default.createElement(
						'td',
						null,
						participants.filter(function (p) {
							return p.diet === "vegan";
						}).length
					),
					_react2.default.createElement(
						'td',
						null,
						participants.length
					)
				));
	
				var requirments = participants.filter(function (p) {
					return p.dietExtra !== null && p.dietExtra !== '';
				}).map(function (p) {
					return _react2.default.createElement(
						'tr',
						{ key: p.id },
						_react2.default.createElement(
							'td',
							null,
							p.name
						),
						_react2.default.createElement(
							'td',
							null,
							p.dietExtra
						)
					);
				});
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'h4',
						null,
						'Totals'
					),
					_react2.default.createElement(
						'table',
						{ className: 'table' },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'th',
									null,
									'Age Group'
								),
								_react2.default.createElement(
									'th',
									null,
									'Omnivore'
								),
								_react2.default.createElement(
									'th',
									null,
									'Vegetarian'
								),
								_react2.default.createElement(
									'th',
									null,
									'Vegan'
								),
								_react2.default.createElement(
									'th',
									null,
									'Total'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							groups
						)
					),
					_react2.default.createElement(
						'h4',
						null,
						'Requirments & Allergies'
					),
					_react2.default.createElement(
						'table',
						{ className: 'table' },
						_react2.default.createElement(
							'thead',
							null,
							_react2.default.createElement(
								'tr',
								null,
								_react2.default.createElement(
									'th',
									null,
									'Name'
								),
								_react2.default.createElement(
									'th',
									null,
									'Requirement'
								)
							)
						),
						_react2.default.createElement(
							'tbody',
							null,
							requirments
						)
					)
				);
			}
		}]);
	
		return KP;
	}(_react2.default.Component);
	
	exports.default = KP;
	
	
	var nameSort = function nameSort(a, b) {
		var splitA = a.name.split(" ");
		var splitB = b.name.split(" ");
		var lastA = splitA[splitA.length - 1];
		var lastB = splitB[splitB.length - 1];
	
		if (lastA < lastB) return -1;
		if (lastA > lastB) return 1;
		return 0;
	};

/***/ },
/* 490 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(194);
	
	var _reduxThunk = __webpack_require__(491);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _reduxImmutable = __webpack_require__(492);
	
	var _user = __webpack_require__(296);
	
	var _user2 = _interopRequireDefault(_user);
	
	var _messages = __webpack_require__(291);
	
	var _messages2 = _interopRequireDefault(_messages);
	
	var _events = __webpack_require__(302);
	
	var _events2 = _interopRequireDefault(_events);
	
	var _bookings = __webpack_require__(439);
	
	var _bookings2 = _interopRequireDefault(_bookings);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	function bookingsApp(state, action) {
	  if (typeof state === 'undefined') {
	    return initialState
	  }
	
	  // For now, don’t handle any actions
	  // and just return the state given to us.
	  return state
	}
	*/
	
	//const initalState = Immutable.fromJS({User:initalUserState, UI:initalUIState});
	
	var rootReducer = (0, _reduxImmutable.combineReducers)({
	  User: _user2.default.reducer,
	  Messages: _messages2.default.reducer,
	  Events: _events2.default.reducer,
	  Bookings: _bookings2.default.reducer });
	
	exports.default = (0, _redux.createStore)(rootReducer, _immutable2.default.Map(), (0, _redux.applyMiddleware)(_reduxThunk2.default));

/***/ },
/* 491 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	function createThunkMiddleware(extraArgument) {
	  return function (_ref) {
	    var dispatch = _ref.dispatch;
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        if (typeof action === 'function') {
	          return action(dispatch, getState, extraArgument);
	        }
	
	        return next(action);
	      };
	    };
	  };
	}
	
	var thunk = createThunkMiddleware();
	thunk.withExtraArgument = createThunkMiddleware;
	
	exports['default'] = thunk;

/***/ },
/* 492 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combineReducers = undefined;
	
	var _combineReducers2 = __webpack_require__(493);
	
	var _combineReducers3 = _interopRequireDefault(_combineReducers2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.combineReducers = _combineReducers3.default;

/***/ },
/* 493 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _utilities = __webpack_require__(494);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.default = function (reducers) {
	  var reducerKeys = Object.keys(reducers);
	
	  // eslint-disable-next-line space-infix-ops
	  return function () {
	    var inputState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _immutable2.default.Map();
	    var action = arguments[1];
	
	    // eslint-disable-next-line no-process-env
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = (0, _utilities.getUnexpectedInvocationParameterMessage)(inputState, reducers, action);
	
	      if (warningMessage) {
	        // eslint-disable-next-line no-console
	        console.error(warningMessage);
	      }
	    }
	
	    return inputState.withMutations(function (temporaryState) {
	      reducerKeys.forEach(function (reducerName) {
	        var reducer = reducers[reducerName];
	        var currentDomainState = temporaryState.get(reducerName);
	        var nextDomainState = reducer(currentDomainState, action);
	
	        (0, _utilities.validateNextState)(nextDomainState, reducerName, action);
	
	        temporaryState.set(reducerName, nextDomainState);
	      });
	    });
	  };
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 494 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	'create index';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.validateNextState = exports.getUnexpectedInvocationParameterMessage = exports.getStateName = undefined;
	
	var _getStateName2 = __webpack_require__(495);
	
	var _getStateName3 = _interopRequireDefault(_getStateName2);
	
	var _getUnexpectedInvocationParameterMessage2 = __webpack_require__(496);
	
	var _getUnexpectedInvocationParameterMessage3 = _interopRequireDefault(_getUnexpectedInvocationParameterMessage2);
	
	var _validateNextState2 = __webpack_require__(497);
	
	var _validateNextState3 = _interopRequireDefault(_validateNextState2);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	exports.getStateName = _getStateName3.default;
	exports.getUnexpectedInvocationParameterMessage = _getUnexpectedInvocationParameterMessage3.default;
	exports.validateNextState = _validateNextState3.default;

/***/ },
/* 495 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (action) {
	  return action && action.type === '@@redux/INIT' ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	};
	
	module.exports = exports['default'];

/***/ },
/* 496 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _immutable = __webpack_require__(294);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _getStateName = __webpack_require__(495);
	
	var _getStateName2 = _interopRequireDefault(_getStateName);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	/* eslint-disable lodash3/prefer-lodash-method */
	
	exports.default = function (state, reducers, action) {
	  var reducerNames = Object.keys(reducers);
	
	  if (!reducerNames.length) {
	    return 'Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.';
	  }
	
	  var stateName = (0, _getStateName2.default)(action);
	
	  if (!_immutable2.default.Iterable.isIterable(state)) {
	    return 'The ' + stateName + ' is of unexpected type. Expected argument to be an instance of Immutable.Iterable with the following properties: "' + reducerNames.join('", "') + '".';
	  }
	
	  var unexpectedStatePropertyNames = state.keySeq().toArray().filter(function (name) {
	    return !reducers.hasOwnProperty(name);
	  });
	
	  if (unexpectedStatePropertyNames.length > 0) {
	    return 'Unexpected ' + (unexpectedStatePropertyNames.length === 1 ? 'property' : 'properties') + ' "' + unexpectedStatePropertyNames.join('", "') + '" found in ' + stateName + '. Expected to find one of the known reducer property names instead: "' + reducerNames.join('", "') + '". Unexpected properties will be ignored.';
	  }
	
	  return null;
	};
	
	module.exports = exports['default'];

/***/ },
/* 497 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports.default = function (nextState, reducerName, action) {
	  // eslint-disable-next-line no-undefined
	  if (nextState === undefined) {
	    throw new Error('Reducer "' + reducerName + '" returned undefined when handling "' + action.type + '" action. To ignore an action, you must explicitly return the previous state.');
	  }
	
	  return null;
	};
	
	module.exports = exports['default'];

/***/ }
]);
//# sourceMappingURL=bundle.js.map