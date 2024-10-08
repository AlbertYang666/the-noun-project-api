"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _require = require("oauth"),
  OAuth = _require.OAuth;
var Util = require("./utils");
var baseUrl = "https://api.thenounproject.com/v2";
var NounProject = /*#__PURE__*/function () {
  function NounProject(config) {
    _classCallCheck(this, NounProject);
    this.oauth = new OAuth(baseUrl, baseUrl, config.key || "", config.secret || "", "1.0", null, "HMAC-SHA1");
  }
  return _createClass(NounProject, [{
    key: "addBlacklistTerms",
    value: function () {
      var _addBlacklistTerms = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(dataJson) {
        var path;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              path = "/client/blacklist/term";
              return _context.abrupt("return", this.post(path, dataJson));
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function addBlacklistTerms(_x) {
        return _addBlacklistTerms.apply(this, arguments);
      }
      return addBlacklistTerms;
    }()
  }, {
    key: "addBlacklistId",
    value: function () {
      var _addBlacklistId = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(dataJson) {
        var type,
          path,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              type = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : "icon";
              path = "/client/blacklist/id?type=".concat(type);
              return _context2.abrupt("return", this.post(path, dataJson));
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function addBlacklistId(_x2) {
        return _addBlacklistId.apply(this, arguments);
      }
      return addBlacklistId;
    }()
  }, {
    key: "getBlacklist",
    value: function () {
      var _getBlacklist = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var path;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              path = "/client/blacklist";
              return _context3.abrupt("return", this.get(path, {}));
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getBlacklist() {
        return _getBlacklist.apply(this, arguments);
      }
      return getBlacklist;
    }()
  }, {
    key: "getIconUsage",
    value: function () {
      var _getIconUsage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(dataJson) {
        var path;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              path = "/client/report";
              return _context4.abrupt("return", this.post(path, dataJson));
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getIconUsage(_x3) {
        return _getIconUsage.apply(this, arguments);
      }
      return getIconUsage;
    }()
  }, {
    key: "getUsage",
    value: function () {
      var _getUsage = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.get("/client/usage", {}));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getUsage() {
        return _getUsage.apply(this, arguments);
      }
      return getUsage;
    }()
  }, {
    key: "getListTerms",
    value: function () {
      var _getListTerms = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(options) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", this.get("/icon/autocomplete", options));
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function getListTerms(_x4) {
        return _getListTerms.apply(this, arguments);
      }
      return getListTerms;
    }()
  }, {
    key: "getListCollection",
    value: function () {
      var _getListCollection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(options) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", this.get("/collection", options));
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function getListCollection(_x5) {
        return _getListCollection.apply(this, arguments);
      }
      return getListCollection;
    }()
  }, {
    key: "getListCollectionById",
    value: function () {
      var _getListCollectionById = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(collectionId, options) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", this.get("/collection/".concat(collectionId), options));
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function getListCollectionById(_x6, _x7) {
        return _getListCollectionById.apply(this, arguments);
      }
      return getListCollectionById;
    }()
  }, {
    key: "getIconsByTerm",
    value: function () {
      var _getIconsByTerm = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(options) {
        var path;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              path = "/icon/";
              return _context9.abrupt("return", this.get(path, options));
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function getIconsByTerm(_x8) {
        return _getIconsByTerm.apply(this, arguments);
      }
      return getIconsByTerm;
    }()
  }, {
    key: "downloadIconById",
    value: function () {
      var _downloadIconById = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(iconId, options) {
        var path;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              path = "/icon/".concat(iconId, "/download");
              return _context10.abrupt("return", this.get(path, options));
            case 2:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function downloadIconById(_x9, _x10) {
        return _downloadIconById.apply(this, arguments);
      }
      return downloadIconById;
    }()
  }, {
    key: "getIconById",
    value: function () {
      var _getIconById = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(id, options) {
        var path;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              path = "/icon/".concat(id);
              return _context11.abrupt("return", this.get(path, options));
            case 2:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function getIconById(_x11, _x12) {
        return _getIconById.apply(this, arguments);
      }
      return getIconById;
    }()
  }, {
    key: "getIconSvgById",
    value: function () {
      var _getIconSvgById = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(id, options) {
        var data, url;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              _context12.next = 3;
              return this.getIconById(id, options);
            case 3:
              data = _context12.sent;
              url = data.icon.icon_url;
              if (!url) {
                _context12.next = 11;
                break;
              }
              _context12.next = 8;
              return Util.fetchSvg(url);
            case 8:
              return _context12.abrupt("return", _context12.sent);
            case 11:
              throw new Error("No icon URL found in response");
            case 12:
              _context12.next = 17;
              break;
            case 14:
              _context12.prev = 14;
              _context12.t0 = _context12["catch"](0);
              throw _context12.t0;
            case 17:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[0, 14]]);
      }));
      function getIconSvgById(_x13, _x14) {
        return _getIconSvgById.apply(this, arguments);
      }
      return getIconSvgById;
    }()
  }, {
    key: "get",
    value: function () {
      var _get = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(path, options) {
        var _this = this;
        var url;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              url = baseUrl + path + Util.objectToQueryString(options);
              return _context13.abrupt("return", new Promise(function (resolve, reject) {
                _this.oauth.get(encodeURI(url), null, null, function (err, data, res) {
                  if (err) {
                    reject(new Error("Calling Noun Project API: ".concat(url, " ").concat(JSON.stringify(err))));
                  } else if (res.statusCode !== 200) {
                    reject(new Error("".concat(res.statusCode, " HTTP response code")));
                  } else {
                    try {
                      resolve(JSON.parse(data));
                    } catch (parseError) {
                      reject(new Error("Error parsing JSON response: ".concat(parseError.message)));
                    }
                  }
                });
              }));
            case 2:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      function get(_x15, _x16) {
        return _get.apply(this, arguments);
      }
      return get;
    }()
  }, {
    key: "post",
    value: function () {
      var _post = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(path, data) {
        var _this2 = this;
        var url, jsonData;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              url = baseUrl + path;
              jsonData = JSON.stringify(data);
              return _context14.abrupt("return", new Promise(function (resolve, reject) {
                _this2.oauth.post(encodeURI(url), null, null, jsonData, "application/json", function (err, data, res) {
                  if (err) {
                    reject(new Error("Calling Noun Project API: ".concat(url, " ").concat(JSON.stringify(err))));
                  } else if (res.statusCode !== 200) {
                    reject(new Error("".concat(res.statusCode, " HTTP response code")));
                  } else {
                    try {
                      resolve(JSON.parse(data));
                    } catch (parseError) {
                      reject(new Error("Error parsing JSON response: ".concat(parseError.message)));
                    }
                  }
                });
              }));
            case 3:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
      function post(_x17, _x18) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }]);
}();
module.exports = NounProject;