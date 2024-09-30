const assert = require("assert");
const NounProject = require("../src/nounprojectapi");

describe("NounProject API", () => {
  // Replace these with your own API key and secret
  const KEY = "4c6ee365e7aa4ab387bc4235ae4539be";
  const SECRET = "df1083da805743d19f811c2d8bf0a464";
  const nounProject = new NounProject({
    key: KEY,
    secret: SECRET,
  });

  it("should add terms to blacklist", (done) => {
    const data = { blacklist: ["term1", "term2"], overwrite: false };
    nounProject.addBlacklistTerms(data, (err, res) => {
      assert.strictEqual(err, null);
      assert(res);
      done();
    });
  });

  it("should add ids to blacklist", (done) => {
    const data = { blacklist: [1, 2], overwrite: false };
    nounProject.addBlacklistId(data, (err, res) => {
      assert.strictEqual(err, null);
      assert(res);
      done();
    });
  });

  it("should get blacklist", (done) => {
    nounProject.getBlacklist((err, res) => {
      assert.strictEqual(err, null);
      assert(res);
      done();
    });
  });

  it("should report icon usage", (done) => {
    const data = { icons: [1, 2], test: true };
    nounProject.getIconUsage(data, (err, res) => {
      assert.strictEqual(err, null);
      assert(res);
      done();
    });
  });

  it("should get client usage", (done) => {
    nounProject.getUsage((err, res) => {
      assert.strictEqual(err, null);
      assert(res);
      done();
    });
  });

  it("should get list terms", (done) => {
    const options = { query: "engine", limit: 10 };

    nounProject.getListTerms(options, (err, res) => {
      assert.strictEqual(err, null);
      assert(res);
      done();
    });
  });

  it("should get list collection", (done) => {
    const options = { query: "engine", limit: 10 };

    nounProject.getListCollection(options, (err, res) => {
      assert.strictEqual(err, null);
      assert(res);
      done();
    });
  });

  it("should get list collection by id", (done) => {
    const collectionId = 10;
    const options = { limit: 10 };

    nounProject.getListCollectionById(collectionId, options, (err, res) => {
      assert.strictEqual(err, null);
      assert(res);
      done();
    });
  });

  it("should get icons by term", (done) => {
    const options = { query: "engine", limit: 10 };

    nounProject.getIconsByTerm(options, (err, res) => {
      assert.strictEqual(err, null);
      assert(res);
      done();
    });
  });

  it("should download icon by id", (done) => {
    const iconId = 4869;
    const options = { color: "A3A3A3", filetype: "png", size: 100 };

    nounProject.downloadIconById(iconId, options, (err, res) => {
      assert.strictEqual(err, null);
      assert(res);
      done();
    });
  });

  it("should get icon by id", (done) => {
    const iconId = 13088;
    const options = { thumbnail_size: 200 };

    nounProject.getIconById(iconId, options, (err, res) => {
      assert.strictEqual(err, null);
      assert(res);
      done();
    });
  });

  it("should get icon svg by id", function (done) {
    this.timeout(5000);
    const iconId = 13088;
    const options = {};

    nounProject.getIconSvgById(iconId, options, (err, svgString) => {
      assert.strictEqual(err, null);
      assert(svgString);
      done();
    });
  });
});
