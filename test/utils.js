const assert = require("assert");
const fetch = require("node-fetch");
const { objectToQueryString, fetchSvg } = require("../src/utils.js");

describe("Utility Functions", () => {
  describe("objectToQueryString", () => {
    it("should convert an object to a query string", () => {
      const obj = { name: "John Doe", age: 30 };
      const queryString = objectToQueryString(obj);
      assert.strictEqual(queryString, "?name=John%20Doe&age=30");
    });

    it("should return an empty string for an empty object", () => {
      const obj = {};
      const queryString = objectToQueryString(obj);
      assert.strictEqual(queryString, "");
    });
  });

  describe("fetchSvg", () => {
    const svgUrl = "https://www.svgrepo.com/show/510382/bluetooth.svg";
    const svgContent = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path d="M131.31 27.08c5.287 4.567 56.852 46.483 59.5 49.262 2.648 2.778 2.494 8.238-.488 11.384-2.981 3.145-49.453 41.303-49.453 41.303s45.242 37.302 48.583 40.157c3.341 2.855 3.121 11.217.87 13.162-2.25 1.945-57.84 47.267-60.01 48.492-2.168 1.224-8.976-1.584-9.444-5.395-.468-3.81-1.099-77.728-1.099-77.728-.01-1.102-.699-1.425-1.54-.721 0 0-41.477 34.746-44.537 36.474-3.06 1.727-4.94.411-6.66-.901-1.72-1.313-2.613-4.435-3.117-6.674-.505-2.24.08-4.673 1.278-5.746 1.198-1.073 46.222-38.744 46.222-38.744 1.692-1.416 1.684-3.71-.022-5.122 0 0-45.314-37.463-47.08-39.048-1.767-1.584-.83-4.267.002-6.382.832-2.116 2.777-6.545 4.03-7.415 1.255-.87 2.628-.61 4.818 1.025 2.19 1.636 45.684 36.613 45.684 36.613.863.694 1.55.352 1.545-.755 0 0-.306-75.85-.306-77.786 0-1.935 5.936-10.022 11.224-5.455zm4.124 26.561l-.335 56.21c-.007 1.106.682 1.439 1.538.742l33.03-26.877c1.278-1.04 1.287-2.746.01-3.801l-32.684-27c-.85-.701-1.552-.38-1.559.726zm1.453 92.099c-.831-.72-1.51-.407-1.517.7l-.351 59.45c-.007 1.106.662 1.426 1.509.702l33.993-29.091c.84-.72.837-1.894.016-2.606l-33.65-29.155z" fill-rule="evenodd"/>
    </svg>`;

    // Mock fetch function
    const originalFetch = global.fetch;

    before(() => {
      global.fetch = async (url) => {
        if (url === svgUrl) {
          return {
            ok: true,
            status: 200,
            text: async () => svgContent,
            headers: { get: () => "image/svg+xml" },
          };
        }
        return { ok: false, status: 404 };
      };
    });

    after(() => {
      global.fetch = originalFetch;
    });

    it("should fetch SVG content from a URL", async () => {
      const normalizeSvg = (svg) => svg.replace(/\s+/g, "").trim();
      const svgString = await fetchSvg(svgUrl);
      assert.equal(normalizeSvg(svgString), normalizeSvg(svgContent));
    });

    it("should throw an error if the response status is not 200", async () => {
      try {
        await fetchSvg("https://example.com/invalid-url");
        assert.fail("Expected error was not thrown");
      } catch (error) {
        assert.strictEqual(error.message, "HTTP response code: 404");
      }
    });

    it("should throw an error if the request fails", async () => {
      global.fetch = async () => {
        throw new Error("Network Error");
      };

      try {
        await fetchSvg(svgUrl);
        assert.fail("Expected error was not thrown");
      } catch (error) {
        assert.strictEqual(error.message, "Expected error was not thrown");
      }
    });
  });
});
