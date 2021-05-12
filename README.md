# alks.js

[![Build Status](https://travis-ci.org/Cox-Automotive/alks.js.svg?branch=master)](https://travis-ci.org/Cox-Automotive/alks.js)
[![Coverage Status](https://coveralls.io/repos/github/Cox-Automotive/alks.js/badge.svg?branch=master)](https://coveralls.io/github/Cox-Automotive/alks.js?branch=master)
[![Requirements Status](https://requires.io/github/Cox-Automotive/alks.js/requirements.svg?branch=master)](https://requires.io/github/Cox-Automotive/alks.js/requirements/?branch=master)
![File Size](http://img.badgesize.io/cox-automotive/alks.js/master/dist/alks.min.js?compression=gzip)
[![npm version](https://badge.fury.io/js/alks.js.svg)](https://www.npmjs.com/package/alks.js)

JavaScript client for the ALKS API, usable in both modern browsers and node.js

It provides a lightweight wrapper around the ALKS REST API, with the following features:
* No dependencies in browser, only one dependency in node.js
* Implemented with [promises](https://promisesaplus.com/), leveraging [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of XMLHttpRequest
* Promises reject with ALKS-provided status messages when available
* Each method returns only the appropriate data from the API response
* Fully documented with [JSDoc](http://usejsdoc.org/)
* Works with no polyfills in latest Chrome, Firefox and Safari

For browser usage, it expects `fetch` (and Promises) [to be available](http://caniuse.com/#search=Fetch).  If they're not, you'll need to [polyfill](https://github.com/github/fetch) them.

## Installation

Install with [NPM](https://www.npmjs.com/package/alks.js) like this
```
npm install alks.js
```

or Yarn
```
yarn install alks.js
```

## Example

```javascript
// Using ES2015 module syntax
import * as ALKS from 'alks.js';

// Using node's require syntax
const ALKS = require('alks.js');

const myAlks = ALKS.create({
  baseUrl: 'https://your.alks-host.com',
  accessToken: 'abc123',
});

myAlks.getKeys({
  account: '012345678910/ALKSPowerUser',
  role: 'PowerUser',
  sessionTime: 1
}).then((creds) => {
  console.log(`here are your temporary access keys:
    Access Key: ${creds.accessKey}
    Secret Key: ${creds.secretKey}
    Session Token: ${creds.sessionToken}`);
});
```

## Documentation
View the [API documentation](docs/index.html)

To update the API documentation from the source, run `npm run docs`

## Tests
Run both node.js and browser tests with `npm test` (must have Chrome installed)
