"use strict";

const { OAuth } = require("oauth");
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

  async addBlacklistTerms(dataJson) {
    const path = "/client/blacklist/term";
    return this.post(path, dataJson);
  }

  async addBlacklistId(dataJson, type = "icon") {
    const path = `/client/blacklist/id?type=${type}`;
    return this.post(path, dataJson);
  }

  async getBlacklist() {
    const path = `/client/blacklist`;
    return this.get(path, {});
  }

  async getIconUsage(dataJson) {
    const path = `/client/report`;
    return this.post(path, dataJson);
  }

  async getUsage() {
    return this.get("/client/usage", {});
  }

  async getListTerms(options) {
    return this.get("/icon/autocomplete", options);
  }

  async getListCollection(options) {
    return this.get("/collection", options);
  }

  async getListCollectionById(collectionId, options) {
    return this.get(`/collection/${collectionId}`, options);
  }

  async getIconsByTerm(options) {
    const path = "/icon/";
    return this.get(path, options);
  }

  async downloadIconById(iconId, options) {
    const path = `/icon/${iconId}/download`;
    return this.get(path, options);
  }

  async getIconById(id, options) {
    const path = `/icon/${id}`;
    return this.get(path, options);
  }

  async getIconSvgById(id, options) {
    try {
      const data = await this.getIconById(id, options);
      const url = data.icon.icon_url;
      if (url) {
        return await Util.fetchSvg(url);
      } else {
        throw new Error("No icon URL found in response");
      }
    } catch (err) {
      throw err;
    }
  }

  async get(path, options) {
    const url = baseUrl + path + Util.objectToQueryString(options);

    return new Promise((resolve, reject) => {
      this.oauth.get(encodeURI(url), null, null, (err, data, res) => {
        if (err) {
          reject(new Error(`Calling Noun Project API: ${url} ${JSON.stringify(err)}`));
        } else if (res.statusCode !== 200) {
          reject(new Error(`${res.statusCode} HTTP response code`));
        } else {
          try {
            resolve(JSON.parse(data));
          } catch (parseError) {
            reject(new Error(`Error parsing JSON response: ${parseError.message}`));
          }
        }
      });
    });
  }

  async post(path, data) {
    const url = baseUrl + path;
    const jsonData = JSON.stringify(data);

    return new Promise((resolve, reject) => {
      this.oauth.post(
        encodeURI(url),
        null,
        null,
        jsonData,
        "application/json",
        (err, data, res) => {
          if (err) {
            reject(new Error(`Calling Noun Project API: ${url} ${JSON.stringify(err)}`));
          } else if (res.statusCode !== 200) {
            reject(new Error(`${res.statusCode} HTTP response code`));
          } else {
            try {
              resolve(JSON.parse(data));
            } catch (parseError) {
              reject(new Error(`Error parsing JSON response: ${parseError.message}`));
            }
          }
        }
      );
    });
  }
}

module.exports = NounProject;