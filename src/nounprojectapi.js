"use strict";

const OAuth = require("oauth").OAuth;
const Util = require("./utils");
const baseUrl = "https://api.thenounproject.com/v2";

class NounProject {
  constructor(config) {
    this.oauth = new OAuth(
      baseUrl,
      baseUrl,
      config.key || "",
      config.secret || "",
      "1.0",
      null,
      "HMAC-SHA1"
    );
  }

  addBlacklistTerms(dataJson, callback) {
    const path = "/client/blacklist/term";
    this.post(path, dataJson, callback);
  }

  addBlacklistId(dataJson, callback, type = "icon") {
    const path = `/client/blacklist/id?type=${type}`;
    this.post(path, dataJson, callback);
  }

  getBlacklist(callback) {
    const path = `/client/blacklist`;
    this.get(path, {}, callback);
  }

  getIconUsage(dataJson, callback) {
    const path = `/client/report`;
    this.post(path, dataJson, callback);
  }

  getUsage(callback) {
    this.get("/client/usage", {}, callback);
  }

  getListTerms(options, callback) {
    this.get("/icon/autocomplete", options, callback);
  }

  getListCollection(options, callback) {
    this.get("/collection", options, callback);
  }

  getListCollectionById(collectionId, options, callback) {
    this.get(`/collection/${collectionId}`, options, callback);
  }

  getIconsByTerm(options, callback) {
    const path = "/icon/";
    this.get(path, options, callback);
  }

  downloadIconById(iconId, options, callback) {
    const path = `/icon/${iconId}/download`;
    this.get(path, options, callback);
  }

  getIconById(id, options, callback) {
    const path = `/icon/${id}`;
    this.get(path, options, callback);
  }

  getIconSvgById(id, options, callback) {
    this.getIconById(id, options, (err, data) => {
      if (err) {
        callback(err);
      } else {
        const url = data.icon.icon_url;
        if (url) {
          Util.fetchSvg(url)
            .then((svgString) => {
              callback(null, svgString);
            })
            .catch((err) => {
              callback(err);
            });
        } else {
          callback(new Error("No icon URL found in response"));
        }
      }
    });
  }

  get(path, options, callback) {
    const url = baseUrl + path + Util.objectToQueryString(options);

    this.oauth.get(encodeURI(url), null, null, (err, data, res) => {
      if (err) {
        callback(
          new Error(`Calling Noun Project API: ${url} ${JSON.stringify(err)}`)
        );
      } else if (res.statusCode !== 200) {
        callback(`${res.statusCode} HTTP response code`);
      } else {
        try {
          callback(null, JSON.parse(data));
        } catch (parseError) {
          callback(
            new Error(`Error parsing JSON response: ${parseError.message}`)
          );
        }
      }
    });
  }

  post(path, data, callback) {
    const url = baseUrl + path;
    const jsonData = JSON.stringify(data);
    this.oauth.post(
      encodeURI(url),
      null,
      null,
      jsonData,
      "application/json",
      (err, data, res) => {
        if (err) {
          callback(
            new Error(`Calling Noun Project API: ${url} ${JSON.stringify(err)}`)
          );
        } else if (res.statusCode !== 200) {
          callback(`${res.statusCode} HTTP response code`);
        } else {
          try {
            callback(null, JSON.parse(data));
          } catch (parseError) {
            callback(
              new Error(`Error parsing JSON response: ${parseError.message}`)
            );
          }
        }
      }
    );
  }
}

module.exports = NounProject;
