"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OAuth = require("oauth").OAuth;
var Util = require("./utils");
var baseUrl = "https://api.thenounproject.com/v2";
var NounProject = /*#__PURE__*/function () {
  function NounProject(config) {
    _classCallCheck(this, NounProject);
    this.oauth = new OAuth(baseUrl, baseUrl, config.key || "", config.secret || "", "1.0", null, "HMAC-SHA1");
  }
  return _createClass(NounProject, [{
    key: "addBlacklistTerms",
    value: function addBlacklistTerms(dataJson, callback) {
      var path = "/client/blacklist/term";
      this.post(path, dataJson, callback);
    }
  }, {
    key: "addBlacklistId",
    value: function addBlacklistId(dataJson, callback) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "icon";
      var path = "/client/blacklist/id?type=".concat(type);
      this.post(path, dataJson, callback);
    }
  }, {
    key: "getBlacklist",
    value: function getBlacklist(callback) {
      var path = "/client/blacklist";
      this.get(path, {}, callback);
    }
  }, {
    key: "getIconUsage",
    value: function getIconUsage(dataJson, callback) {
      var path = "/client/report";
      this.post(path, dataJson, callback);
    }
  }, {
    key: "getUsage",
    value: function getUsage(callback) {
      this.get("/client/usage", {}, callback);
    }
  }, {
    key: "getListTerms",
    value: function getListTerms(options, callback) {
      this.get("/icon/autocomplete", options, callback);
    }
  }, {
    key: "getListCollection",
    value: function getListCollection(options, callback) {
      this.get("/collection", options, callback);
    }
  }, {
    key: "getListCollectionById",
    value: function getListCollectionById(collectionId, options, callback) {
      this.get("/collection/".concat(collectionId), options, callback);
    }
  }, {
    key: "getIconsByTerm",
    value: function getIconsByTerm(options, callback) {
      var path = "/icon/";
      this.get(path, options, callback);
    }
  }, {
    key: "downloadIconById",
    value: function downloadIconById(iconId, options, callback) {
      var path = "/icon/".concat(iconId, "/download");
      this.get(path, options, callback);
    }
  }, {
    key: "getIconById",
    value: function getIconById(id, options, callback) {
      var path = "/icon/".concat(id);
      this.get(path, options, callback);
    }
  }, {
    key: "getIconSvgById",
    value: function getIconSvgById(id, options, callback) {
      this.getIconById(id, options, function (err, data) {
        if (err) {
          callback(err);
        } else {
          var url = data.icon.icon_url;
          if (url) {
            Util.fetchSvg(url).then(function (svgString) {
              callback(null, svgString);
            })["catch"](function (err) {
              callback(err);
            });
          } else {
            callback(new Error("No icon URL found in response"));
          }
        }
      });
    }
  }, {
    key: "get",
    value: function get(path, options, callback) {
      var url = baseUrl + path + Util.objectToQueryString(options);
      this.oauth.get(encodeURI(url), null, null, function (err, data, res) {
        if (err) {
          callback(new Error("Calling Noun Project API: ".concat(url, " ").concat(JSON.stringify(err))));
        } else if (res.statusCode !== 200) {
          callback("".concat(res.statusCode, " HTTP response code"));
        } else {
          try {
            callback(null, JSON.parse(data));
          } catch (parseError) {
            callback(new Error("Error parsing JSON response: ".concat(parseError.message)));
          }
        }
      });
    }
  }, {
    key: "post",
    value: function post(path, data, callback) {
      var url = baseUrl + path;
      var jsonData = JSON.stringify(data);
      this.oauth.post(encodeURI(url), null, null, jsonData, "application/json", function (err, data, res) {
        if (err) {
          callback(new Error("Calling Noun Project API: ".concat(url, " ").concat(JSON.stringify(err))));
        } else if (res.statusCode !== 200) {
          callback("".concat(res.statusCode, " HTTP response code"));
        } else {
          try {
            callback(null, JSON.parse(data));
          } catch (parseError) {
            callback(new Error("Error parsing JSON response: ".concat(parseError.message)));
          }
        }
      });
    }
  }]);
}();
module.exports = NounProject;