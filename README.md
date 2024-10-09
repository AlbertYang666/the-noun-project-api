# The Noun Project's v2 API

The Noun Project's V2 API node.js Tools

[![npm version](https://badge.fury.io/js/the-noun-project-api.svg)](http://badge.fury.io/js/the-noun-project-api)
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

const options = {
  query: "engine",
  limit_to_public_domain: 1,
  limit: 10,
};
nounProject.getIconsByTerm(options).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

You can get your keys from [The Noun Project's API page](https://thenounproject.com/api/).

## Usage

### Init NounProject

```js
const { NounProject } = require("the-noun-project-api");

const nounProject = new NounProject({
  key: "key",
  secret: "secret",
});
```

### 1.Add term to os blacklist

```js
const options = {
  blacklist: ["harry potter", "ünîcōdę is šüppørtëd, along with phråses"],
  overwrite: false,
};
nounProject.addBlacklistTerms(options).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

### 2. Add id to os blacklist

```js
const options =  {
  blacklist: [42, 1337, 56],
  overwrite: false,
};
nounProject.addBlacklistId(options).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

### 3. View os blacklist

```js
nounProject.getBlacklist().then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

### 4. Report icon usage

```js
const options =  {
  icons: [42, 143, 1337],
  test: true,
};
nounProject.getIconUsage(options).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

### 5. Get client usage

```js
nounProject.getUsage().then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

### 6. Public os icon autocomplete

```js
const options = { query: "engine", blacklist: 1, limit: 10 };
nounProject
  .getListTerms(options)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

### 7. Public os collection search

```js
const options = { query: "engine", blacklist: 1, limit: 10 };
nounProject
  .getListCollection(options)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

### 8. Public os icon search

```js
const options = { query: "engine", limit_to_public_domain: 1, limit: 10 };
nounProject
  .getIconsByTerm(options)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

### 9. Public download edited icon

```js
const options = { color: "A3A3A3", filetype: "png", size: 100 };
nounProject
  .downloadIconById(4869, options)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

### 10. Public os get collection by id

```js
const options = { limit: 10, include_svg: 1 };
nounProject
  .getListCollectionById(10, options)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

### 11. Public os get icon by id
```js
const options = { thumbnail_size: 200 };
nounProject
  .getIconById(13088, options)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

### 12. Public os get icon svg by id
```js
const options = {};
nounProject
  .getIconSvgById(13088, options)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
```

See [The Noun Project API Explorer](http://api.thenounproject.com/explorer) for more `options` information on the endpoints available.