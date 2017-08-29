# alks.js

[![Build Status](https://travis-ci.org/Cox-Automotive/alks.js.svg?branch=master)](https://travis-ci.org/Cox-Automotive/alks.js)
[![Coverage Status](https://coveralls.io/repos/github/Cox-Automotive/alks.js/badge.svg?branch=master)](https://coveralls.io/github/Cox-Automotive/alks.js?branch=master)
[![Requirements Status](https://requires.io/github/Cox-Automotive/alks.js/requirements.svg?branch=master)](https://requires.io/github/Cox-Automotive/alks.js/requirements/?branch=master)
![File Size](https://img.shields.io/badge/gzip%20size-778%20B-brightgreen.svg)

JavaScript client for the ALKS API, usable in both modern browsers and node.js

It provides a lightweight wrapper around the ALKS REST API, with the following features:
* No dependencies in browser, only one dependency in node.js
* Implemented with [promises](https://promisesaplus.com/), leveraging [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of XMLHttpRequest
* Promises reject with ALKS-provided status messages when available
* Each method returns only the appropriate data from the API response
* Fully documented with [JSDoc](http://usejsdoc.org/)
* Works with no polyfills in latest Chrome, Firefox and Safari

For browser usage, it expects `fetch` (and Promises) [to be available](http://caniuse.com/#search=Fetch).  If they're not, you'll need to [polyfill](https://github.com/github/fetch) them.

## Documentation
View the [API documentation](API.md)

To update the API documentation from the source, run `npm run docs`

## Tests
Run both node.js and browser tests with `npm test` (must have Chrome installed)