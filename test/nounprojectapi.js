const assert = require("assert");
const NounProject = require("../src/nounprojectapi");

describe("NounProject API", () => {
  const KEY = "4c6ee365e7aa4ab387bc4235ae4539be";
  const SECRET = "df1083da805743d19f811c2d8bf0a464";
  const nounProject = new NounProject({
    key: KEY,
    secret: SECRET,
  });

  it("should add terms to blacklist", async () => {
    const data = { blacklist: ["term1", "term2"], overwrite: false };
    const res = await nounProject.addBlacklistTerms(data);
    assert(res);
  });

  it("should add ids to blacklist", async () => {
    const data = { blacklist: [1, 2], overwrite: false };
    const res = await nounProject.addBlacklistId(data);
    assert(res);
  });

  it("should get blacklist", async () => {
    const res = await nounProject.getBlacklist();
    assert(res);
  });

  it("should report icon usage", async () => {
    const data = { icons: [1, 2], test: true };
    const res = await nounProject.getIconUsage(data);
    assert(res);
  });

  it("should get client usage", async () => {
    const res = await nounProject.getUsage();
    assert(res);
  });

  it("should get list terms", async () => {
    const options = { query: "engine", limit: 10 };
    const res = await nounProject.getListTerms(options);
    assert(res);
  });

  it("should get list collection", async () => {
    const options = { query: "engine", limit: 10 };
    const res = await nounProject.getListCollection(options);
    assert(res);
  });

  it("should get list collection by id", async () => {
    const collectionId = 10;
    const options = { limit: 10 };
    const res = await nounProject.getListCollectionById(collectionId, options);
    assert(res);
  });

  it("should get icons by term", async () => {
    const options = { query: "engine", limit: 10 };
    const res = await nounProject.getIconsByTerm(options);
    assert(res);
  });

  it("should download icon by id", async () => {
    const iconId = 4869;
    const options = { color: "A3A3A3", filetype: "png", size: 100 };
    const res = await nounProject.downloadIconById(iconId, options);
    assert(res);
  });

  it("should get icon by id", async () => {
    const iconId = 13088;
    const options = { thumbnail_size: 200 };
    const res = await nounProject.getIconById(iconId, options);
    assert(res);
  });

  it("should get icon svg by id", async function () {
    this.timeout(5000);
    const iconId = 13088;
    const options = {};
    const svgString = await nounProject.getIconSvgById(iconId, options);
    assert(svgString);
  });
});
