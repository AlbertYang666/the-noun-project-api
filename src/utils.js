"use strict";
const fetch = require("node-fetch");

const objectToQueryString = (obj) => {
  const parts = Object.keys(obj).map(
    (key) => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
  );
  return parts.length > 0 ? `?${parts.join("&")}` : "";
};

const fetchSvg = async (url) => {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "image/svg+xml",
      },
    });

    if (response.ok) {
      const svgString = await response.text();
      return svgString;
    } else {
      throw new Error(`HTTP response code: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error fetching SVG: ${error.message}`);
    throw error;
  }
};

module.exports = {
  objectToQueryString,
  fetchSvg,
};
