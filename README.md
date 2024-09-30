# The Noun Project's v2 API

The Noun Project's V2 API node.js Tools

## Installation

Simply add to your project with

```bash
npm i the-noun-project-api
```

In your project file:

```javascript
const { NounProject } = require("the-noun-project-api");

const KEY = "KEY";
const SECRET = "SECRET";

const nounProject = new NounProject({
  key: KEY,
  secret: SECRET,
});

nounProject.getIconsByTerm(
    { query: "engine", limit_to_public_domain: 1, limit: 10 },
    (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    }
);
```

You can get your keys from [The Noun Project's API page](https://thenounproject.com/api/).

## Usage

### 初始化 NounProject

```js
const { NounProject } = require("the-noun-project-api");

const nounProject = new NounProject({
  key: "key",
  secret: "secret",
});
```

### 1.Add term to os blacklist

```js
nounProject.addBlacklistTerms(
  {
    blacklist: ["harry potter", "ünîcōdę is šüppørtëd, along with phråses"],
    overwrite: false,
  },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
```

### 2. Add id to os blacklist

```js
nounProject.addBlacklistId(
  {
    blacklist: [42, 1337],
    overwrite: false,
  },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
```

### 3. View os blacklist

```js
nounProject.getBlacklist((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

### 4. Report icon usage

```js
nounProject.getIconUsage(
  {
    icons: [42, 143, 1337],
    test: true,
  },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
```

### 5. Get client usage

```js
nounProject.getUsage((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

### 6. Public os icon autocomplete

```js
nounProject.getListTerms(
  { query: "engine", blacklist: 1, limit: 10 },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
```

### 7. Public os collection search

```js
nounProject.getListCollection(
  { query: "engine", blacklist: 1, limit: 10 },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
```

### 8. Public os icon search

```js
nounProject.getIconsByTerm(
    { query: "engine", limit_to_public_domain: 1, limit: 10 },
    (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log(data);
      }
    }
);
```

### 9. Public download edited icon

```js
nounProject.downloadIconById(
  4869,
  { color: "A3A3A3", filetype: "png", size: 100 },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
```

### 10. Public os get collection by id

```js
nounProject.getListCollectionById(
  10,
  { limit: 10, include_svg: 1 },
  (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  }
);
```

### 11. Public os get icon by id
```js
nounProject.getIconById(13088, { thumbnail_size: 200 }, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

### 12. Public os get icon svg by id
```js
nounProject.getIconSvgById(13088, {}, (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

See [The Noun Project API Explorer](http://api.thenounproject.com/explorer) for more `options` information on the endpoints available.