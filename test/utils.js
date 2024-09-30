// const assert = require("assert");
// const axios = require("axios");
// const MockAdapter = require("axios-mock-adapter");
// const { objectToQueryString, fetchSvg } = require("../src/utils.js");

// describe("Utility Functions", () => {
//   describe("objectToQueryString", () => {
//     it("should convert an object to a query string", () => {
//       const obj = { name: "John Doe", age: 30 };
//       const queryString = objectToQueryString(obj);
//       assert.strictEqual(queryString, "?name=John%20Doe&age=30");
//     });

//     it("should return an empty string for an empty object", () => {
//       const obj = {};
//       const queryString = objectToQueryString(obj);
//       assert.strictEqual(queryString, "");
//     });
//   });

//   describe("fetchSvg", () => {
//     const mock = new MockAdapter(axios);
//     const svgUrl = "https://example.com/path/to/svg";
//     const svgContent = "<svg>...</svg>";

//     afterEach(() => {
//       mock.reset();
//     });

//     it("should fetch SVG content from a URL", async () => {
//       mock.onGet(svgUrl).reply(200, svgContent, { "Content-Type": "image/svg+xml" });

//       const svgString = await fetchSvg(svgUrl);
//       assert.strictEqual(svgString, svgContent);
//     });

//     it("should throw an error if the response status is not 200", async () => {
//       mock.onGet(svgUrl).reply(404);

//       try {
//         await fetchSvg(svgUrl);
//         assert.fail("Expected error was not thrown");
//       } catch (error) {
//         assert.strictEqual(error.message, "Request failed with status code 404");
//       }
//     });

//     it("should throw an error if the request fails", async () => {
//       mock.onGet(svgUrl).networkError();

//       try {
//         await fetchSvg(svgUrl);
//         assert.fail("Expected error was not thrown");
//       } catch (error) {
//         assert.strictEqual(error.message, "Network Error");
//       }
//     });
//   });
// });
