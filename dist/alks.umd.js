(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('node:http'), require('node:https'), require('node:zlib'), require('node:stream'), require('node:buffer'), require('node:util'), require('node:url'), require('node:net'), require('node:fs'), require('node:path'), require('worker_threads'), require('node:process'), require('node:stream/web')) :
	typeof define === 'function' && define.amd ? define(['exports', 'node:http', 'node:https', 'node:zlib', 'node:stream', 'node:buffer', 'node:util', 'node:url', 'node:net', 'node:fs', 'node:path', 'worker_threads', 'node:process', 'node:stream/web'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.alks = {}, global.http, global.https, global.zlib, global.Stream, global.node_buffer, global.node_util, global.node_url, global.node_net, global.node_fs, global.node_path, global.require$$0$2, global.require$$0$1, global.require$$1$1));
})(this, (function (exports, http, https, zlib, Stream, node_buffer, node_util, node_url, node_net, node_fs, node_path, require$$0$2, require$$0$1, require$$1$1) { 'use strict';

	var global = global || window || this;

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
	var https__default = /*#__PURE__*/_interopDefaultLegacy(https);
	var zlib__default = /*#__PURE__*/_interopDefaultLegacy(zlib);
	var Stream__default = /*#__PURE__*/_interopDefaultLegacy(Stream);
	var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$2);
	var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
	var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1$1);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation.

	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.

	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	/* global Reflect, Promise */

	var extendStatics = function(d, b) {
	    extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
	    return extendStatics(d, b);
	};

	function __extends(d, b) {
	    if (typeof b !== "function" && b !== null)
	        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	    extendStatics(d, b);
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	}

	var __assign = function() {
	    __assign = Object.assign || function __assign(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};

	function __rest(s, e) {
	    var t = {};
	    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
	        t[p] = s[p];
	    if (s != null && typeof Object.getOwnPropertySymbols === "function")
	        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
	                t[p[i]] = s[p[i]];
	        }
	    return t;
	}

	function __decorate(decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	}

	function __param(paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	}

	function __metadata(metadataKey, metadataValue) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
	}

	function __awaiter(thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}

	var __createBinding = Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	});

	function __exportStar(m, o) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
	}

	function __values(o) {
	    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	    if (m) return m.call(o);
	    if (o && typeof o.length === "number") return {
	        next: function () {
	            if (o && i >= o.length) o = void 0;
	            return { value: o && o[i++], done: !o };
	        }
	    };
	    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	}

	function __read(o, n) {
	    var m = typeof Symbol === "function" && o[Symbol.iterator];
	    if (!m) return o;
	    var i = m.call(o), r, ar = [], e;
	    try {
	        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	    }
	    catch (error) { e = { error: error }; }
	    finally {
	        try {
	            if (r && !r.done && (m = i["return"])) m.call(i);
	        }
	        finally { if (e) throw e.error; }
	    }
	    return ar;
	}

	/** @deprecated */
	function __spread() {
	    for (var ar = [], i = 0; i < arguments.length; i++)
	        ar = ar.concat(__read(arguments[i]));
	    return ar;
	}

	/** @deprecated */
	function __spreadArrays() {
	    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	    for (var r = Array(s), k = 0, i = 0; i < il; i++)
	        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
	            r[k] = a[j];
	    return r;
	}

	function __spreadArray(to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	}

	function __await(v) {
	    return this instanceof __await ? (this.v = v, this) : new __await(v);
	}

	function __asyncGenerator(thisArg, _arguments, generator) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var g = generator.apply(thisArg, _arguments || []), i, q = [];
	    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
	    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
	    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	    function fulfill(value) { resume("next", value); }
	    function reject(value) { resume("throw", value); }
	    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	}

	function __asyncDelegator(o) {
	    var i, p;
	    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
	}

	function __asyncValues(o) {
	    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	    var m = o[Symbol.asyncIterator], i;
	    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
	    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
	    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
	}

	function __makeTemplateObject(cooked, raw) {
	    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
	    return cooked;
	}
	var __setModuleDefault = Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	};

	function __importStar(mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	}

	function __importDefault(mod) {
	    return (mod && mod.__esModule) ? mod : { default: mod };
	}

	function __classPrivateFieldGet(receiver, state, kind, f) {
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
	}

	function __classPrivateFieldSet(receiver, state, value, kind, f) {
	    if (kind === "m") throw new TypeError("Private method is not writable");
	    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
	}

	var tslib_es6 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__extends: __extends,
		get __assign () { return __assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__metadata: __metadata,
		__awaiter: __awaiter,
		__generator: __generator,
		__createBinding: __createBinding,
		__exportStar: __exportStar,
		__values: __values,
		__read: __read,
		__spread: __spread,
		__spreadArrays: __spreadArrays,
		__spreadArray: __spreadArray,
		__await: __await,
		__asyncGenerator: __asyncGenerator,
		__asyncDelegator: __asyncDelegator,
		__asyncValues: __asyncValues,
		__makeTemplateObject: __makeTemplateObject,
		__importStar: __importStar,
		__importDefault: __importDefault,
		__classPrivateFieldGet: __classPrivateFieldGet,
		__classPrivateFieldSet: __classPrivateFieldSet
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

	var name = "alks.js";
	var version$1 = "2.2.0";
	var description = "JavaScript client for the ALKS API, usable in both modern browsers and node.js";
	var main = "dist/alks.cjs.js";
	var types = "dist/src/alks.d.ts";
	var unpkg = "dist/alks.min.js";
	var browser$2 = "dist/alks.umd.js";
	var module = "dist/alks.esm.js";
	var scripts = {
		rmdirs: "rimraf dist lib",
		mkdirs: "mkdirp dist lib",
		clean: "npm run rmdirs && npm run mkdirs",
		rollup: "rollup -c rollup.config.js",
		minify: "uglifyjs -m reserved=[\"global\"] -c < dist/alks.umd.js > dist/alks.min.js",
		build: "npm run clean && npm run compile && npm run rollup && npm run minify",
		lint: "prettier --write --no-error-on-unmatched-pattern {src,test}/**/*.{ts,js,json,md}",
		test: "npm run build && npm run lint && npm run mocha && npm run karma",
		mocha: "nyc mocha test/test.js",
		coverage: "nyc report --reporter=text-lcov | coveralls",
		karma: "karma start",
		docs: "typedoc src/alks.ts",
		prepare: "husky install",
		compile: "tsc"
	};
	var files = [
		"dist/"
	];
	var repository = {
		type: "git",
		url: "https://github.com/Cox-Automotive/alks.js.git"
	};
	var author = {
		name: "Cox Automotive",
		email: "paul.ofallon@coxautoinc.com",
		url: "https://github.com/Cox-Automotive/"
	};
	var bugs = {
		url: "https://github.com/Cox-Automotive/alks.js/issues"
	};
	var license = "MIT";
	var engines = {
		node: ">=14.0.0"
	};
	var dependencies = {
		encoding: "^0.1.13",
		"node-fetch": "^3.2.6",
		tslib: "^2.3.1",
		typedoc: "^0.22.15"
	};
	var devDependencies = {
		"@rollup/plugin-commonjs": "^19.0.0",
		"@rollup/plugin-node-resolve": "^13.0.0",
		"@rollup/plugin-typescript": "^8.2.1",
		"@types/node": "^15.0.2",
		"@types/node-fetch": "^2.5.10",
		browserify: "^17.0.0",
		chai: "^4.3.4",
		"chai-as-promised": "^7.1.1",
		coveralls: "^3.1.1",
		eslint: "^7.25.0",
		"eslint-plugin-jsdoc": "^39.3.3",
		"fetch-mock": "^9.11.0",
		husky: "^6.0.0",
		karma: "^6.3.2",
		"karma-browserify": "^8.0.0",
		"karma-chrome-launcher": "^3.1.0",
		"karma-mocha": "^2.0.1",
		"karma-mocha-reporter": "^2.2.5",
		"lint-staged": "^11.0.0",
		mkdirp: "^1.0.4",
		mocha: "^10.0.0",
		nyc: "^15.1.0",
		prettier: "^2.3.0",
		rimraf: "^3.0.2",
		rollup: "^2.75.7",
		"rollup-plugin-json": "^3.1.0",
		"rollup-plugin-node-polyfills": "^0.2.1",
		"rollup-plugin-replace": "^2.2.0",
		sinon: "^10.0.0",
		tslint: "^6.1.3",
		typescript: "^4.2.4",
		"uglify-js": "^3.16.1"
	};
	var prettier = {
		singleQuote: true,
		semi: true,
		arrowParens: "always",
		endOfLine: "lf",
		trailingComma: "es5"
	};
	var require$$1 = {
		name: name,
		version: version$1,
		description: description,
		main: main,
		types: types,
		unpkg: unpkg,
		browser: browser$2,
		module: module,
		scripts: scripts,
		files: files,
		repository: repository,
		author: author,
		bugs: bugs,
		license: license,
		engines: engines,
		dependencies: dependencies,
		devDependencies: devDependencies,
		prettier: prettier,
		"lint-staged": {
		"{src,test}/**/*.{js,ts,json,md}": [
			"prettier --write"
		]
	}
	};

	var global$1 = (typeof global !== "undefined" ? global :
	  typeof self !== "undefined" ? self :
	  typeof window !== "undefined" ? window : {});

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
	var inited = false;
	function init () {
	  inited = true;
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i];
	    revLookup[code.charCodeAt(i)] = i;
	  }

	  revLookup['-'.charCodeAt(0)] = 62;
	  revLookup['_'.charCodeAt(0)] = 63;
	}

	function toByteArray (b64) {
	  if (!inited) {
	    init();
	  }
	  var i, j, l, tmp, placeHolders, arr;
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders);

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len;

	  var L = 0;

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
	    arr[L++] = (tmp >> 16) & 0xFF;
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[L++] = tmp & 0xFF;
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[L++] = (tmp >> 8) & 0xFF;
	    arr[L++] = tmp & 0xFF;
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  if (!inited) {
	    init();
	  }
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var output = '';
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    output += lookup[tmp >> 2];
	    output += lookup[(tmp << 4) & 0x3F];
	    output += '==';
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
	    output += lookup[tmp >> 10];
	    output += lookup[(tmp >> 4) & 0x3F];
	    output += lookup[(tmp << 2) & 0x3F];
	    output += '=';
	  }

	  parts.push(output);

	  return parts.join('')
	}

	function read (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	function write (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = nBytes * 8 - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	}

	var toString = {}.toString;

	var isArray = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};

	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */

	var INSPECT_MAX_BYTES = 50;

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
	  ? global$1.TYPED_ARRAY_SUPPORT
	  : true;

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	var _kMaxLength = kMaxLength();

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length);
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length);
	    }
	    that.length = length;
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192; // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype;
	  return arr
	};

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	};

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype;
	  Buffer.__proto__ = Uint8Array;
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size);
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	};

	function allocUnsafe (that, size) {
	  assertSize(size);
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0;
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	};
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	};

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8';
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0;
	  that = createBuffer(that, length);

	  var actual = that.write(string, encoding);

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual);
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0;
	  that = createBuffer(that, length);
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255;
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array);
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset);
	  } else {
	    array = new Uint8Array(array, byteOffset, length);
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array;
	    that.__proto__ = Buffer.prototype;
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array);
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (internalIsBuffer(obj)) {
	    var len = checked(obj.length) | 0;
	    that = createBuffer(that, len);

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len);
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0;
	  }
	  return Buffer.alloc(+length)
	}
	Buffer.isBuffer = isBuffer;
	function internalIsBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length;
	  var y = b.length;

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	};

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i;
	  if (length === undefined) {
	    length = 0;
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length;
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length);
	  var pos = 0;
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i];
	    if (!internalIsBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos);
	    pos += buf.length;
	  }
	  return buffer
	};

	function byteLength (string, encoding) {
	  if (internalIsBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string;
	  }

	  var len = string.length;
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	}
	Buffer.byteLength = byteLength;

	function slowToString (encoding, start, end) {
	  var loweredCase = false;

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0;
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length;
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0;
	  start >>>= 0;

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8';

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase();
	        loweredCase = true;
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true;

	function swap (b, n, m) {
	  var i = b[n];
	  b[n] = b[m];
	  b[m] = i;
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length;
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1);
	  }
	  return this
	};

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length;
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3);
	    swap(this, i + 1, i + 2);
	  }
	  return this
	};

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length;
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7);
	    swap(this, i + 1, i + 6);
	    swap(this, i + 2, i + 5);
	    swap(this, i + 3, i + 4);
	  }
	  return this
	};

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0;
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	};

	Buffer.prototype.equals = function equals (b) {
	  if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	};

	Buffer.prototype.inspect = function inspect () {
	  var str = '';
	  var max = INSPECT_MAX_BYTES;
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
	    if (this.length > max) str += ' ... ';
	  }
	  return '<Buffer ' + str + '>'
	};

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!internalIsBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0;
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0;
	  }
	  if (thisStart === undefined) {
	    thisStart = 0;
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length;
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0;
	  end >>>= 0;
	  thisStart >>>= 0;
	  thisEnd >>>= 0;

	  if (this === target) return 0

	  var x = thisEnd - thisStart;
	  var y = end - start;
	  var len = Math.min(x, y);

	  var thisCopy = this.slice(thisStart, thisEnd);
	  var targetCopy = target.slice(start, end);

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i];
	      y = targetCopy[i];
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	};

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset;
	    byteOffset = 0;
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff;
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000;
	  }
	  byteOffset = +byteOffset;  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1);
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1;
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0;
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding);
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (internalIsBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF; // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1;
	  var arrLength = arr.length;
	  var valLength = val.length;

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase();
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2;
	      arrLength /= 2;
	      valLength /= 2;
	      byteOffset /= 2;
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i;
	  if (dir) {
	    var foundIndex = -1;
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i;
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex;
	        foundIndex = -1;
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true;
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false;
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	};

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	};

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	};

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0;
	  var remaining = buf.length - offset;
	  if (!length) {
	    length = remaining;
	  } else {
	    length = Number(length);
	    if (length > remaining) {
	      length = remaining;
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length;
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2;
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16);
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed;
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8';
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset;
	    length = this.length;
	    offset = 0;
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0;
	    if (isFinite(length)) {
	      length = length | 0;
	      if (encoding === undefined) encoding = 'utf8';
	    } else {
	      encoding = length;
	      length = undefined;
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset;
	  if (length === undefined || length > remaining) length = remaining;

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8';

	  var loweredCase = false;
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase();
	        loweredCase = true;
	    }
	  }
	};

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	};

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return fromByteArray(buf)
	  } else {
	    return fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end);
	  var res = [];

	  var i = start;
	  while (i < end) {
	    var firstByte = buf[i];
	    var codePoint = null;
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1;

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint;

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte;
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1];
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint;
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1];
	          thirdByte = buf[i + 2];
	          fourthByte = buf[i + 3];
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint;
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD;
	      bytesPerSequence = 1;
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000;
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
	      codePoint = 0xDC00 | codePoint & 0x3FF;
	    }

	    res.push(codePoint);
	    i += bytesPerSequence;
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000;

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length;
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = '';
	  var i = 0;
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    );
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F);
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = '';
	  end = Math.min(buf.length, end);

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i]);
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length;

	  if (!start || start < 0) start = 0;
	  if (!end || end < 0 || end > len) end = len;

	  var out = '';
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i]);
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end);
	  var res = '';
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length;
	  start = ~~start;
	  end = end === undefined ? len : ~~end;

	  if (start < 0) {
	    start += len;
	    if (start < 0) start = 0;
	  } else if (start > len) {
	    start = len;
	  }

	  if (end < 0) {
	    end += len;
	    if (end < 0) end = 0;
	  } else if (end > len) {
	    end = len;
	  }

	  if (end < start) end = start;

	  var newBuf;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end);
	    newBuf.__proto__ = Buffer.prototype;
	  } else {
	    var sliceLen = end - start;
	    newBuf = new Buffer(sliceLen, undefined);
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start];
	    }
	  }

	  return newBuf
	};

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length);
	  }

	  var val = this[offset + --byteLength];
	  var mul = 1;
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul;
	  }

	  return val
	};

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  return this[offset]
	};

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return this[offset] | (this[offset + 1] << 8)
	};

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  return (this[offset] << 8) | this[offset + 1]
	};

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	};

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	};

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var val = this[offset];
	  var mul = 1;
	  var i = 0;
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) checkOffset(offset, byteLength, this.length);

	  var i = byteLength;
	  var mul = 1;
	  var val = this[offset + --i];
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul;
	  }
	  mul *= 0x80;

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

	  return val
	};

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length);
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	};

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset] | (this[offset + 1] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length);
	  var val = this[offset + 1] | (this[offset] << 8);
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	};

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	};

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	};

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, true, 23, 4)
	};

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length);
	  return read(this, offset, false, 23, 4)
	};

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, true, 52, 8)
	};

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length);
	  return read(this, offset, false, 52, 8)
	};

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var mul = 1;
	  var i = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  byteLength = byteLength | 0;
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
	    checkInt(this, value, offset, byteLength, maxBytes, 0);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8;
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1;
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 1] = (value >>> 8);
	    this[offset] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = 0;
	  var mul = 1;
	  var sub = 0;
	  this[offset] = value & 0xFF;
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1);

	    checkInt(this, value, offset, byteLength, limit - 1, -limit);
	  }

	  var i = byteLength - 1;
	  var mul = 1;
	  var sub = 0;
	  this[offset + i] = value & 0xFF;
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1;
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
	  }

	  return offset + byteLength
	};

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
	  if (value < 0) value = 0xff + value + 1;
	  this[offset] = (value & 0xff);
	  return offset + 1
	};

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	  } else {
	    objectWriteUInt16(this, value, offset, true);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8);
	    this[offset + 1] = (value & 0xff);
	  } else {
	    objectWriteUInt16(this, value, offset, false);
	  }
	  return offset + 2
	};

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff);
	    this[offset + 1] = (value >>> 8);
	    this[offset + 2] = (value >>> 16);
	    this[offset + 3] = (value >>> 24);
	  } else {
	    objectWriteUInt32(this, value, offset, true);
	  }
	  return offset + 4
	};

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value;
	  offset = offset | 0;
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
	  if (value < 0) value = 0xffffffff + value + 1;
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24);
	    this[offset + 1] = (value >>> 16);
	    this[offset + 2] = (value >>> 8);
	    this[offset + 3] = (value & 0xff);
	  } else {
	    objectWriteUInt32(this, value, offset, false);
	  }
	  return offset + 4
	};

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4);
	  }
	  write(buf, value, offset, littleEndian, 23, 4);
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	};

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8);
	  }
	  write(buf, value, offset, littleEndian, 52, 8);
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	};

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	};

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0;
	  if (!end && end !== 0) end = this.length;
	  if (targetStart >= target.length) targetStart = target.length;
	  if (!targetStart) targetStart = 0;
	  if (end > 0 && end < start) end = start;

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length;
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start;
	  }

	  var len = end - start;
	  var i;

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start];
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    );
	  }

	  return len
	};

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start;
	      start = 0;
	      end = this.length;
	    } else if (typeof end === 'string') {
	      encoding = end;
	      end = this.length;
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0);
	      if (code < 256) {
	        val = code;
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255;
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0;
	  end = end === undefined ? this.length : end >>> 0;

	  if (!val) val = 0;

	  var i;
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val;
	    }
	  } else {
	    var bytes = internalIsBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString());
	    var len = bytes.length;
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len];
	    }
	  }

	  return this
	};

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '=';
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity;
	  var codePoint;
	  var length = string.length;
	  var leadSurrogate = null;
	  var bytes = [];

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i);

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint;

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	        leadSurrogate = codePoint;
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
	    }

	    leadSurrogate = null;

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint);
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      );
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF);
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo;
	  var byteArray = [];
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i);
	    hi = c >> 8;
	    lo = c % 256;
	    byteArray.push(lo);
	    byteArray.push(hi);
	  }

	  return byteArray
	}


	function base64ToBytes (str) {
	  return toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i];
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}


	// the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	function isBuffer(obj) {
	  return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
	}

	function isFastBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}

	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
	}

	var bufferEs6 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		Buffer: Buffer,
		INSPECT_MAX_BYTES: INSPECT_MAX_BYTES,
		SlowBuffer: SlowBuffer,
		isBuffer: isBuffer,
		kMaxLength: _kMaxLength
	});

	var require$$2 = /*@__PURE__*/getAugmentedNamespace(bufferEs6);

	// shim for using process in browser
	// based off https://github.com/defunctzombie/node-process/blob/master/browser.js

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	var cachedSetTimeout = defaultSetTimout;
	var cachedClearTimeout = defaultClearTimeout;
	if (typeof global$1.setTimeout === 'function') {
	    cachedSetTimeout = setTimeout;
	}
	if (typeof global$1.clearTimeout === 'function') {
	    cachedClearTimeout = clearTimeout;
	}

	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	function nextTick(fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	}
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	var title = 'browser';
	var platform = 'browser';
	var browser = true;
	var env = {};
	var argv = [];
	var version = ''; // empty string to avoid regexp issues
	var versions = {};
	var release = {};
	var config = {};

	function noop$1() {}

	var on = noop$1;
	var addListener = noop$1;
	var once = noop$1;
	var off = noop$1;
	var removeListener = noop$1;
	var removeAllListeners = noop$1;
	var emit = noop$1;

	function binding(name) {
	    throw new Error('process.binding is not supported');
	}

	function cwd () { return '/' }
	function chdir (dir) {
	    throw new Error('process.chdir is not supported');
	}function umask() { return 0; }

	// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
	var performance = global$1.performance || {};
	var performanceNow =
	  performance.now        ||
	  performance.mozNow     ||
	  performance.msNow      ||
	  performance.oNow       ||
	  performance.webkitNow  ||
	  function(){ return (new Date()).getTime() };

	// generate timestamp or delta
	// see http://nodejs.org/api/process.html#process_process_hrtime
	function hrtime(previousTimestamp){
	  var clocktime = performanceNow.call(performance)*1e-3;
	  var seconds = Math.floor(clocktime);
	  var nanoseconds = Math.floor((clocktime%1)*1e9);
	  if (previousTimestamp) {
	    seconds = seconds - previousTimestamp[0];
	    nanoseconds = nanoseconds - previousTimestamp[1];
	    if (nanoseconds<0) {
	      seconds--;
	      nanoseconds += 1e9;
	    }
	  }
	  return [seconds,nanoseconds]
	}

	var startTime = new Date();
	function uptime() {
	  var currentTime = new Date();
	  var dif = currentTime - startTime;
	  return dif / 1000;
	}

	var browser$1 = {
	  nextTick: nextTick,
	  title: title,
	  browser: browser,
	  env: env,
	  argv: argv,
	  version: version,
	  versions: versions,
	  on: on,
	  addListener: addListener,
	  once: once,
	  off: off,
	  removeListener: removeListener,
	  removeAllListeners: removeAllListeners,
	  emit: emit,
	  binding: binding,
	  cwd: cwd,
	  chdir: chdir,
	  umask: umask,
	  hrtime: hrtime,
	  platform: platform,
	  release: release,
	  config: config,
	  uptime: uptime
	};

	var process = browser$1;

	/**
	 * Returns a `Buffer` instance from the given data URI `uri`.
	 *
	 * @param {String} uri Data URI to turn into a Buffer instance
	 * @returns {Buffer} Buffer instance from Data URI
	 * @api public
	 */
	function dataUriToBuffer(uri) {
	    if (!/^data:/i.test(uri)) {
	        throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
	    }
	    // strip newlines
	    uri = uri.replace(/\r?\n/g, '');
	    // split the URI up into the "metadata" and the "data" portions
	    const firstComma = uri.indexOf(',');
	    if (firstComma === -1 || firstComma <= 4) {
	        throw new TypeError('malformed data: URI');
	    }
	    // remove the "data:" scheme and parse the metadata
	    const meta = uri.substring(5, firstComma).split(';');
	    let charset = '';
	    let base64 = false;
	    const type = meta[0] || 'text/plain';
	    let typeFull = type;
	    for (let i = 1; i < meta.length; i++) {
	        if (meta[i] === 'base64') {
	            base64 = true;
	        }
	        else {
	            typeFull += `;${meta[i]}`;
	            if (meta[i].indexOf('charset=') === 0) {
	                charset = meta[i].substring(8);
	            }
	        }
	    }
	    // defaults to US-ASCII only if type is not provided
	    if (!meta[0] && !charset.length) {
	        typeFull += ';charset=US-ASCII';
	        charset = 'US-ASCII';
	    }
	    // get the encoded data portion and decode URI-encoded chars
	    const encoding = base64 ? 'base64' : 'ascii';
	    const data = unescape(uri.substring(firstComma + 1));
	    const buffer = Buffer.from(data, encoding);
	    // set `.type` and `.typeFull` properties to MIME type
	    buffer.type = type;
	    buffer.typeFull = typeFull;
	    // set the `.charset` property
	    buffer.charset = charset;
	    return buffer;
	}

	var ponyfill_es2018 = {exports: {}};

	/**
	 * web-streams-polyfill v3.2.1
	 */

	(function (module, exports) {
	(function (global, factory) {
	    factory(exports) ;
	}(commonjsGlobal, (function (exports) {
	    /// <reference lib="es2015.symbol" />
	    const SymbolPolyfill = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ?
	        Symbol :
	        description => `Symbol(${description})`;

	    /// <reference lib="dom" />
	    function noop() {
	        return undefined;
	    }
	    function getGlobals() {
	        if (typeof self !== 'undefined') {
	            return self;
	        }
	        else if (typeof window !== 'undefined') {
	            return window;
	        }
	        else if (typeof commonjsGlobal !== 'undefined') {
	            return commonjsGlobal;
	        }
	        return undefined;
	    }
	    const globals = getGlobals();

	    function typeIsObject(x) {
	        return (typeof x === 'object' && x !== null) || typeof x === 'function';
	    }
	    const rethrowAssertionErrorRejection = noop;

	    const originalPromise = Promise;
	    const originalPromiseThen = Promise.prototype.then;
	    const originalPromiseResolve = Promise.resolve.bind(originalPromise);
	    const originalPromiseReject = Promise.reject.bind(originalPromise);
	    function newPromise(executor) {
	        return new originalPromise(executor);
	    }
	    function promiseResolvedWith(value) {
	        return originalPromiseResolve(value);
	    }
	    function promiseRejectedWith(reason) {
	        return originalPromiseReject(reason);
	    }
	    function PerformPromiseThen(promise, onFulfilled, onRejected) {
	        // There doesn't appear to be any way to correctly emulate the behaviour from JavaScript, so this is just an
	        // approximation.
	        return originalPromiseThen.call(promise, onFulfilled, onRejected);
	    }
	    function uponPromise(promise, onFulfilled, onRejected) {
	        PerformPromiseThen(PerformPromiseThen(promise, onFulfilled, onRejected), undefined, rethrowAssertionErrorRejection);
	    }
	    function uponFulfillment(promise, onFulfilled) {
	        uponPromise(promise, onFulfilled);
	    }
	    function uponRejection(promise, onRejected) {
	        uponPromise(promise, undefined, onRejected);
	    }
	    function transformPromiseWith(promise, fulfillmentHandler, rejectionHandler) {
	        return PerformPromiseThen(promise, fulfillmentHandler, rejectionHandler);
	    }
	    function setPromiseIsHandledToTrue(promise) {
	        PerformPromiseThen(promise, undefined, rethrowAssertionErrorRejection);
	    }
	    const queueMicrotask = (() => {
	        const globalQueueMicrotask = globals && globals.queueMicrotask;
	        if (typeof globalQueueMicrotask === 'function') {
	            return globalQueueMicrotask;
	        }
	        const resolvedPromise = promiseResolvedWith(undefined);
	        return (fn) => PerformPromiseThen(resolvedPromise, fn);
	    })();
	    function reflectCall(F, V, args) {
	        if (typeof F !== 'function') {
	            throw new TypeError('Argument is not a function');
	        }
	        return Function.prototype.apply.call(F, V, args);
	    }
	    function promiseCall(F, V, args) {
	        try {
	            return promiseResolvedWith(reflectCall(F, V, args));
	        }
	        catch (value) {
	            return promiseRejectedWith(value);
	        }
	    }

	    // Original from Chromium
	    // https://chromium.googlesource.com/chromium/src/+/0aee4434a4dba42a42abaea9bfbc0cd196a63bc1/third_party/blink/renderer/core/streams/SimpleQueue.js
	    const QUEUE_MAX_ARRAY_SIZE = 16384;
	    /**
	     * Simple queue structure.
	     *
	     * Avoids scalability issues with using a packed array directly by using
	     * multiple arrays in a linked list and keeping the array size bounded.
	     */
	    class SimpleQueue {
	        constructor() {
	            this._cursor = 0;
	            this._size = 0;
	            // _front and _back are always defined.
	            this._front = {
	                _elements: [],
	                _next: undefined
	            };
	            this._back = this._front;
	            // The cursor is used to avoid calling Array.shift().
	            // It contains the index of the front element of the array inside the
	            // front-most node. It is always in the range [0, QUEUE_MAX_ARRAY_SIZE).
	            this._cursor = 0;
	            // When there is only one node, size === elements.length - cursor.
	            this._size = 0;
	        }
	        get length() {
	            return this._size;
	        }
	        // For exception safety, this method is structured in order:
	        // 1. Read state
	        // 2. Calculate required state mutations
	        // 3. Perform state mutations
	        push(element) {
	            const oldBack = this._back;
	            let newBack = oldBack;
	            if (oldBack._elements.length === QUEUE_MAX_ARRAY_SIZE - 1) {
	                newBack = {
	                    _elements: [],
	                    _next: undefined
	                };
	            }
	            // push() is the mutation most likely to throw an exception, so it
	            // goes first.
	            oldBack._elements.push(element);
	            if (newBack !== oldBack) {
	                this._back = newBack;
	                oldBack._next = newBack;
	            }
	            ++this._size;
	        }
	        // Like push(), shift() follows the read -> calculate -> mutate pattern for
	        // exception safety.
	        shift() { // must not be called on an empty queue
	            const oldFront = this._front;
	            let newFront = oldFront;
	            const oldCursor = this._cursor;
	            let newCursor = oldCursor + 1;
	            const elements = oldFront._elements;
	            const element = elements[oldCursor];
	            if (newCursor === QUEUE_MAX_ARRAY_SIZE) {
	                newFront = oldFront._next;
	                newCursor = 0;
	            }
	            // No mutations before this point.
	            --this._size;
	            this._cursor = newCursor;
	            if (oldFront !== newFront) {
	                this._front = newFront;
	            }
	            // Permit shifted element to be garbage collected.
	            elements[oldCursor] = undefined;
	            return element;
	        }
	        // The tricky thing about forEach() is that it can be called
	        // re-entrantly. The queue may be mutated inside the callback. It is easy to
	        // see that push() within the callback has no negative effects since the end
	        // of the queue is checked for on every iteration. If shift() is called
	        // repeatedly within the callback then the next iteration may return an
	        // element that has been removed. In this case the callback will be called
	        // with undefined values until we either "catch up" with elements that still
	        // exist or reach the back of the queue.
	        forEach(callback) {
	            let i = this._cursor;
	            let node = this._front;
	            let elements = node._elements;
	            while (i !== elements.length || node._next !== undefined) {
	                if (i === elements.length) {
	                    node = node._next;
	                    elements = node._elements;
	                    i = 0;
	                    if (elements.length === 0) {
	                        break;
	                    }
	                }
	                callback(elements[i]);
	                ++i;
	            }
	        }
	        // Return the element that would be returned if shift() was called now,
	        // without modifying the queue.
	        peek() { // must not be called on an empty queue
	            const front = this._front;
	            const cursor = this._cursor;
	            return front._elements[cursor];
	        }
	    }

	    function ReadableStreamReaderGenericInitialize(reader, stream) {
	        reader._ownerReadableStream = stream;
	        stream._reader = reader;
	        if (stream._state === 'readable') {
	            defaultReaderClosedPromiseInitialize(reader);
	        }
	        else if (stream._state === 'closed') {
	            defaultReaderClosedPromiseInitializeAsResolved(reader);
	        }
	        else {
	            defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
	        }
	    }
	    // A client of ReadableStreamDefaultReader and ReadableStreamBYOBReader may use these functions directly to bypass state
	    // check.
	    function ReadableStreamReaderGenericCancel(reader, reason) {
	        const stream = reader._ownerReadableStream;
	        return ReadableStreamCancel(stream, reason);
	    }
	    function ReadableStreamReaderGenericRelease(reader) {
	        if (reader._ownerReadableStream._state === 'readable') {
	            defaultReaderClosedPromiseReject(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
	        }
	        else {
	            defaultReaderClosedPromiseResetToRejected(reader, new TypeError(`Reader was released and can no longer be used to monitor the stream's closedness`));
	        }
	        reader._ownerReadableStream._reader = undefined;
	        reader._ownerReadableStream = undefined;
	    }
	    // Helper functions for the readers.
	    function readerLockException(name) {
	        return new TypeError('Cannot ' + name + ' a stream using a released reader');
	    }
	    // Helper functions for the ReadableStreamDefaultReader.
	    function defaultReaderClosedPromiseInitialize(reader) {
	        reader._closedPromise = newPromise((resolve, reject) => {
	            reader._closedPromise_resolve = resolve;
	            reader._closedPromise_reject = reject;
	        });
	    }
	    function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
	        defaultReaderClosedPromiseInitialize(reader);
	        defaultReaderClosedPromiseReject(reader, reason);
	    }
	    function defaultReaderClosedPromiseInitializeAsResolved(reader) {
	        defaultReaderClosedPromiseInitialize(reader);
	        defaultReaderClosedPromiseResolve(reader);
	    }
	    function defaultReaderClosedPromiseReject(reader, reason) {
	        if (reader._closedPromise_reject === undefined) {
	            return;
	        }
	        setPromiseIsHandledToTrue(reader._closedPromise);
	        reader._closedPromise_reject(reason);
	        reader._closedPromise_resolve = undefined;
	        reader._closedPromise_reject = undefined;
	    }
	    function defaultReaderClosedPromiseResetToRejected(reader, reason) {
	        defaultReaderClosedPromiseInitializeAsRejected(reader, reason);
	    }
	    function defaultReaderClosedPromiseResolve(reader) {
	        if (reader._closedPromise_resolve === undefined) {
	            return;
	        }
	        reader._closedPromise_resolve(undefined);
	        reader._closedPromise_resolve = undefined;
	        reader._closedPromise_reject = undefined;
	    }

	    const AbortSteps = SymbolPolyfill('[[AbortSteps]]');
	    const ErrorSteps = SymbolPolyfill('[[ErrorSteps]]');
	    const CancelSteps = SymbolPolyfill('[[CancelSteps]]');
	    const PullSteps = SymbolPolyfill('[[PullSteps]]');

	    /// <reference lib="es2015.core" />
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite#Polyfill
	    const NumberIsFinite = Number.isFinite || function (x) {
	        return typeof x === 'number' && isFinite(x);
	    };

	    /// <reference lib="es2015.core" />
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
	    const MathTrunc = Math.trunc || function (v) {
	        return v < 0 ? Math.ceil(v) : Math.floor(v);
	    };

	    // https://heycam.github.io/webidl/#idl-dictionaries
	    function isDictionary(x) {
	        return typeof x === 'object' || typeof x === 'function';
	    }
	    function assertDictionary(obj, context) {
	        if (obj !== undefined && !isDictionary(obj)) {
	            throw new TypeError(`${context} is not an object.`);
	        }
	    }
	    // https://heycam.github.io/webidl/#idl-callback-functions
	    function assertFunction(x, context) {
	        if (typeof x !== 'function') {
	            throw new TypeError(`${context} is not a function.`);
	        }
	    }
	    // https://heycam.github.io/webidl/#idl-object
	    function isObject(x) {
	        return (typeof x === 'object' && x !== null) || typeof x === 'function';
	    }
	    function assertObject(x, context) {
	        if (!isObject(x)) {
	            throw new TypeError(`${context} is not an object.`);
	        }
	    }
	    function assertRequiredArgument(x, position, context) {
	        if (x === undefined) {
	            throw new TypeError(`Parameter ${position} is required in '${context}'.`);
	        }
	    }
	    function assertRequiredField(x, field, context) {
	        if (x === undefined) {
	            throw new TypeError(`${field} is required in '${context}'.`);
	        }
	    }
	    // https://heycam.github.io/webidl/#idl-unrestricted-double
	    function convertUnrestrictedDouble(value) {
	        return Number(value);
	    }
	    function censorNegativeZero(x) {
	        return x === 0 ? 0 : x;
	    }
	    function integerPart(x) {
	        return censorNegativeZero(MathTrunc(x));
	    }
	    // https://heycam.github.io/webidl/#idl-unsigned-long-long
	    function convertUnsignedLongLongWithEnforceRange(value, context) {
	        const lowerBound = 0;
	        const upperBound = Number.MAX_SAFE_INTEGER;
	        let x = Number(value);
	        x = censorNegativeZero(x);
	        if (!NumberIsFinite(x)) {
	            throw new TypeError(`${context} is not a finite number`);
	        }
	        x = integerPart(x);
	        if (x < lowerBound || x > upperBound) {
	            throw new TypeError(`${context} is outside the accepted range of ${lowerBound} to ${upperBound}, inclusive`);
	        }
	        if (!NumberIsFinite(x) || x === 0) {
	            return 0;
	        }
	        // TODO Use BigInt if supported?
	        // let xBigInt = BigInt(integerPart(x));
	        // xBigInt = BigInt.asUintN(64, xBigInt);
	        // return Number(xBigInt);
	        return x;
	    }

	    function assertReadableStream(x, context) {
	        if (!IsReadableStream(x)) {
	            throw new TypeError(`${context} is not a ReadableStream.`);
	        }
	    }

	    // Abstract operations for the ReadableStream.
	    function AcquireReadableStreamDefaultReader(stream) {
	        return new ReadableStreamDefaultReader(stream);
	    }
	    // ReadableStream API exposed for controllers.
	    function ReadableStreamAddReadRequest(stream, readRequest) {
	        stream._reader._readRequests.push(readRequest);
	    }
	    function ReadableStreamFulfillReadRequest(stream, chunk, done) {
	        const reader = stream._reader;
	        const readRequest = reader._readRequests.shift();
	        if (done) {
	            readRequest._closeSteps();
	        }
	        else {
	            readRequest._chunkSteps(chunk);
	        }
	    }
	    function ReadableStreamGetNumReadRequests(stream) {
	        return stream._reader._readRequests.length;
	    }
	    function ReadableStreamHasDefaultReader(stream) {
	        const reader = stream._reader;
	        if (reader === undefined) {
	            return false;
	        }
	        if (!IsReadableStreamDefaultReader(reader)) {
	            return false;
	        }
	        return true;
	    }
	    /**
	     * A default reader vended by a {@link ReadableStream}.
	     *
	     * @public
	     */
	    class ReadableStreamDefaultReader {
	        constructor(stream) {
	            assertRequiredArgument(stream, 1, 'ReadableStreamDefaultReader');
	            assertReadableStream(stream, 'First parameter');
	            if (IsReadableStreamLocked(stream)) {
	                throw new TypeError('This stream has already been locked for exclusive reading by another reader');
	            }
	            ReadableStreamReaderGenericInitialize(this, stream);
	            this._readRequests = new SimpleQueue();
	        }
	        /**
	         * Returns a promise that will be fulfilled when the stream becomes closed,
	         * or rejected if the stream ever errors or the reader's lock is released before the stream finishes closing.
	         */
	        get closed() {
	            if (!IsReadableStreamDefaultReader(this)) {
	                return promiseRejectedWith(defaultReaderBrandCheckException('closed'));
	            }
	            return this._closedPromise;
	        }
	        /**
	         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
	         */
	        cancel(reason = undefined) {
	            if (!IsReadableStreamDefaultReader(this)) {
	                return promiseRejectedWith(defaultReaderBrandCheckException('cancel'));
	            }
	            if (this._ownerReadableStream === undefined) {
	                return promiseRejectedWith(readerLockException('cancel'));
	            }
	            return ReadableStreamReaderGenericCancel(this, reason);
	        }
	        /**
	         * Returns a promise that allows access to the next chunk from the stream's internal queue, if available.
	         *
	         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
	         */
	        read() {
	            if (!IsReadableStreamDefaultReader(this)) {
	                return promiseRejectedWith(defaultReaderBrandCheckException('read'));
	            }
	            if (this._ownerReadableStream === undefined) {
	                return promiseRejectedWith(readerLockException('read from'));
	            }
	            let resolvePromise;
	            let rejectPromise;
	            const promise = newPromise((resolve, reject) => {
	                resolvePromise = resolve;
	                rejectPromise = reject;
	            });
	            const readRequest = {
	                _chunkSteps: chunk => resolvePromise({ value: chunk, done: false }),
	                _closeSteps: () => resolvePromise({ value: undefined, done: true }),
	                _errorSteps: e => rejectPromise(e)
	            };
	            ReadableStreamDefaultReaderRead(this, readRequest);
	            return promise;
	        }
	        /**
	         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
	         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
	         * from now on; otherwise, the reader will appear closed.
	         *
	         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
	         * the reader's {@link ReadableStreamDefaultReader.read | read()} method has not yet been settled. Attempting to
	         * do so will throw a `TypeError` and leave the reader locked to the stream.
	         */
	        releaseLock() {
	            if (!IsReadableStreamDefaultReader(this)) {
	                throw defaultReaderBrandCheckException('releaseLock');
	            }
	            if (this._ownerReadableStream === undefined) {
	                return;
	            }
	            if (this._readRequests.length > 0) {
	                throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
	            }
	            ReadableStreamReaderGenericRelease(this);
	        }
	    }
	    Object.defineProperties(ReadableStreamDefaultReader.prototype, {
	        cancel: { enumerable: true },
	        read: { enumerable: true },
	        releaseLock: { enumerable: true },
	        closed: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(ReadableStreamDefaultReader.prototype, SymbolPolyfill.toStringTag, {
	            value: 'ReadableStreamDefaultReader',
	            configurable: true
	        });
	    }
	    // Abstract operations for the readers.
	    function IsReadableStreamDefaultReader(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
	            return false;
	        }
	        return x instanceof ReadableStreamDefaultReader;
	    }
	    function ReadableStreamDefaultReaderRead(reader, readRequest) {
	        const stream = reader._ownerReadableStream;
	        stream._disturbed = true;
	        if (stream._state === 'closed') {
	            readRequest._closeSteps();
	        }
	        else if (stream._state === 'errored') {
	            readRequest._errorSteps(stream._storedError);
	        }
	        else {
	            stream._readableStreamController[PullSteps](readRequest);
	        }
	    }
	    // Helper functions for the ReadableStreamDefaultReader.
	    function defaultReaderBrandCheckException(name) {
	        return new TypeError(`ReadableStreamDefaultReader.prototype.${name} can only be used on a ReadableStreamDefaultReader`);
	    }

	    /// <reference lib="es2018.asynciterable" />
	    /* eslint-disable @typescript-eslint/no-empty-function */
	    const AsyncIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf(async function* () { }).prototype);

	    /// <reference lib="es2018.asynciterable" />
	    class ReadableStreamAsyncIteratorImpl {
	        constructor(reader, preventCancel) {
	            this._ongoingPromise = undefined;
	            this._isFinished = false;
	            this._reader = reader;
	            this._preventCancel = preventCancel;
	        }
	        next() {
	            const nextSteps = () => this._nextSteps();
	            this._ongoingPromise = this._ongoingPromise ?
	                transformPromiseWith(this._ongoingPromise, nextSteps, nextSteps) :
	                nextSteps();
	            return this._ongoingPromise;
	        }
	        return(value) {
	            const returnSteps = () => this._returnSteps(value);
	            return this._ongoingPromise ?
	                transformPromiseWith(this._ongoingPromise, returnSteps, returnSteps) :
	                returnSteps();
	        }
	        _nextSteps() {
	            if (this._isFinished) {
	                return Promise.resolve({ value: undefined, done: true });
	            }
	            const reader = this._reader;
	            if (reader._ownerReadableStream === undefined) {
	                return promiseRejectedWith(readerLockException('iterate'));
	            }
	            let resolvePromise;
	            let rejectPromise;
	            const promise = newPromise((resolve, reject) => {
	                resolvePromise = resolve;
	                rejectPromise = reject;
	            });
	            const readRequest = {
	                _chunkSteps: chunk => {
	                    this._ongoingPromise = undefined;
	                    // This needs to be delayed by one microtask, otherwise we stop pulling too early which breaks a test.
	                    // FIXME Is this a bug in the specification, or in the test?
	                    queueMicrotask(() => resolvePromise({ value: chunk, done: false }));
	                },
	                _closeSteps: () => {
	                    this._ongoingPromise = undefined;
	                    this._isFinished = true;
	                    ReadableStreamReaderGenericRelease(reader);
	                    resolvePromise({ value: undefined, done: true });
	                },
	                _errorSteps: reason => {
	                    this._ongoingPromise = undefined;
	                    this._isFinished = true;
	                    ReadableStreamReaderGenericRelease(reader);
	                    rejectPromise(reason);
	                }
	            };
	            ReadableStreamDefaultReaderRead(reader, readRequest);
	            return promise;
	        }
	        _returnSteps(value) {
	            if (this._isFinished) {
	                return Promise.resolve({ value, done: true });
	            }
	            this._isFinished = true;
	            const reader = this._reader;
	            if (reader._ownerReadableStream === undefined) {
	                return promiseRejectedWith(readerLockException('finish iterating'));
	            }
	            if (!this._preventCancel) {
	                const result = ReadableStreamReaderGenericCancel(reader, value);
	                ReadableStreamReaderGenericRelease(reader);
	                return transformPromiseWith(result, () => ({ value, done: true }));
	            }
	            ReadableStreamReaderGenericRelease(reader);
	            return promiseResolvedWith({ value, done: true });
	        }
	    }
	    const ReadableStreamAsyncIteratorPrototype = {
	        next() {
	            if (!IsReadableStreamAsyncIterator(this)) {
	                return promiseRejectedWith(streamAsyncIteratorBrandCheckException('next'));
	            }
	            return this._asyncIteratorImpl.next();
	        },
	        return(value) {
	            if (!IsReadableStreamAsyncIterator(this)) {
	                return promiseRejectedWith(streamAsyncIteratorBrandCheckException('return'));
	            }
	            return this._asyncIteratorImpl.return(value);
	        }
	    };
	    if (AsyncIteratorPrototype !== undefined) {
	        Object.setPrototypeOf(ReadableStreamAsyncIteratorPrototype, AsyncIteratorPrototype);
	    }
	    // Abstract operations for the ReadableStream.
	    function AcquireReadableStreamAsyncIterator(stream, preventCancel) {
	        const reader = AcquireReadableStreamDefaultReader(stream);
	        const impl = new ReadableStreamAsyncIteratorImpl(reader, preventCancel);
	        const iterator = Object.create(ReadableStreamAsyncIteratorPrototype);
	        iterator._asyncIteratorImpl = impl;
	        return iterator;
	    }
	    function IsReadableStreamAsyncIterator(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_asyncIteratorImpl')) {
	            return false;
	        }
	        try {
	            // noinspection SuspiciousTypeOfGuard
	            return x._asyncIteratorImpl instanceof
	                ReadableStreamAsyncIteratorImpl;
	        }
	        catch (_a) {
	            return false;
	        }
	    }
	    // Helper functions for the ReadableStream.
	    function streamAsyncIteratorBrandCheckException(name) {
	        return new TypeError(`ReadableStreamAsyncIterator.${name} can only be used on a ReadableSteamAsyncIterator`);
	    }

	    /// <reference lib="es2015.core" />
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN#Polyfill
	    const NumberIsNaN = Number.isNaN || function (x) {
	        // eslint-disable-next-line no-self-compare
	        return x !== x;
	    };

	    function CreateArrayFromList(elements) {
	        // We use arrays to represent lists, so this is basically a no-op.
	        // Do a slice though just in case we happen to depend on the unique-ness.
	        return elements.slice();
	    }
	    function CopyDataBlockBytes(dest, destOffset, src, srcOffset, n) {
	        new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
	    }
	    // Not implemented correctly
	    function TransferArrayBuffer(O) {
	        return O;
	    }
	    // Not implemented correctly
	    // eslint-disable-next-line @typescript-eslint/no-unused-vars
	    function IsDetachedBuffer(O) {
	        return false;
	    }
	    function ArrayBufferSlice(buffer, begin, end) {
	        // ArrayBuffer.prototype.slice is not available on IE10
	        // https://www.caniuse.com/mdn-javascript_builtins_arraybuffer_slice
	        if (buffer.slice) {
	            return buffer.slice(begin, end);
	        }
	        const length = end - begin;
	        const slice = new ArrayBuffer(length);
	        CopyDataBlockBytes(slice, 0, buffer, begin, length);
	        return slice;
	    }

	    function IsNonNegativeNumber(v) {
	        if (typeof v !== 'number') {
	            return false;
	        }
	        if (NumberIsNaN(v)) {
	            return false;
	        }
	        if (v < 0) {
	            return false;
	        }
	        return true;
	    }
	    function CloneAsUint8Array(O) {
	        const buffer = ArrayBufferSlice(O.buffer, O.byteOffset, O.byteOffset + O.byteLength);
	        return new Uint8Array(buffer);
	    }

	    function DequeueValue(container) {
	        const pair = container._queue.shift();
	        container._queueTotalSize -= pair.size;
	        if (container._queueTotalSize < 0) {
	            container._queueTotalSize = 0;
	        }
	        return pair.value;
	    }
	    function EnqueueValueWithSize(container, value, size) {
	        if (!IsNonNegativeNumber(size) || size === Infinity) {
	            throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
	        }
	        container._queue.push({ value, size });
	        container._queueTotalSize += size;
	    }
	    function PeekQueueValue(container) {
	        const pair = container._queue.peek();
	        return pair.value;
	    }
	    function ResetQueue(container) {
	        container._queue = new SimpleQueue();
	        container._queueTotalSize = 0;
	    }

	    /**
	     * A pull-into request in a {@link ReadableByteStreamController}.
	     *
	     * @public
	     */
	    class ReadableStreamBYOBRequest {
	        constructor() {
	            throw new TypeError('Illegal constructor');
	        }
	        /**
	         * Returns the view for writing in to, or `null` if the BYOB request has already been responded to.
	         */
	        get view() {
	            if (!IsReadableStreamBYOBRequest(this)) {
	                throw byobRequestBrandCheckException('view');
	            }
	            return this._view;
	        }
	        respond(bytesWritten) {
	            if (!IsReadableStreamBYOBRequest(this)) {
	                throw byobRequestBrandCheckException('respond');
	            }
	            assertRequiredArgument(bytesWritten, 1, 'respond');
	            bytesWritten = convertUnsignedLongLongWithEnforceRange(bytesWritten, 'First parameter');
	            if (this._associatedReadableByteStreamController === undefined) {
	                throw new TypeError('This BYOB request has been invalidated');
	            }
	            if (IsDetachedBuffer(this._view.buffer)) ;
	            ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
	        }
	        respondWithNewView(view) {
	            if (!IsReadableStreamBYOBRequest(this)) {
	                throw byobRequestBrandCheckException('respondWithNewView');
	            }
	            assertRequiredArgument(view, 1, 'respondWithNewView');
	            if (!ArrayBuffer.isView(view)) {
	                throw new TypeError('You can only respond with array buffer views');
	            }
	            if (this._associatedReadableByteStreamController === undefined) {
	                throw new TypeError('This BYOB request has been invalidated');
	            }
	            if (IsDetachedBuffer(view.buffer)) ;
	            ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
	        }
	    }
	    Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
	        respond: { enumerable: true },
	        respondWithNewView: { enumerable: true },
	        view: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(ReadableStreamBYOBRequest.prototype, SymbolPolyfill.toStringTag, {
	            value: 'ReadableStreamBYOBRequest',
	            configurable: true
	        });
	    }
	    /**
	     * Allows control of a {@link ReadableStream | readable byte stream}'s state and internal queue.
	     *
	     * @public
	     */
	    class ReadableByteStreamController {
	        constructor() {
	            throw new TypeError('Illegal constructor');
	        }
	        /**
	         * Returns the current BYOB pull request, or `null` if there isn't one.
	         */
	        get byobRequest() {
	            if (!IsReadableByteStreamController(this)) {
	                throw byteStreamControllerBrandCheckException('byobRequest');
	            }
	            return ReadableByteStreamControllerGetBYOBRequest(this);
	        }
	        /**
	         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
	         * over-full. An underlying byte source ought to use this information to determine when and how to apply backpressure.
	         */
	        get desiredSize() {
	            if (!IsReadableByteStreamController(this)) {
	                throw byteStreamControllerBrandCheckException('desiredSize');
	            }
	            return ReadableByteStreamControllerGetDesiredSize(this);
	        }
	        /**
	         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
	         * the stream, but once those are read, the stream will become closed.
	         */
	        close() {
	            if (!IsReadableByteStreamController(this)) {
	                throw byteStreamControllerBrandCheckException('close');
	            }
	            if (this._closeRequested) {
	                throw new TypeError('The stream has already been closed; do not close it again!');
	            }
	            const state = this._controlledReadableByteStream._state;
	            if (state !== 'readable') {
	                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be closed`);
	            }
	            ReadableByteStreamControllerClose(this);
	        }
	        enqueue(chunk) {
	            if (!IsReadableByteStreamController(this)) {
	                throw byteStreamControllerBrandCheckException('enqueue');
	            }
	            assertRequiredArgument(chunk, 1, 'enqueue');
	            if (!ArrayBuffer.isView(chunk)) {
	                throw new TypeError('chunk must be an array buffer view');
	            }
	            if (chunk.byteLength === 0) {
	                throw new TypeError('chunk must have non-zero byteLength');
	            }
	            if (chunk.buffer.byteLength === 0) {
	                throw new TypeError(`chunk's buffer must have non-zero byteLength`);
	            }
	            if (this._closeRequested) {
	                throw new TypeError('stream is closed or draining');
	            }
	            const state = this._controlledReadableByteStream._state;
	            if (state !== 'readable') {
	                throw new TypeError(`The stream (in ${state} state) is not in the readable state and cannot be enqueued to`);
	            }
	            ReadableByteStreamControllerEnqueue(this, chunk);
	        }
	        /**
	         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
	         */
	        error(e = undefined) {
	            if (!IsReadableByteStreamController(this)) {
	                throw byteStreamControllerBrandCheckException('error');
	            }
	            ReadableByteStreamControllerError(this, e);
	        }
	        /** @internal */
	        [CancelSteps](reason) {
	            ReadableByteStreamControllerClearPendingPullIntos(this);
	            ResetQueue(this);
	            const result = this._cancelAlgorithm(reason);
	            ReadableByteStreamControllerClearAlgorithms(this);
	            return result;
	        }
	        /** @internal */
	        [PullSteps](readRequest) {
	            const stream = this._controlledReadableByteStream;
	            if (this._queueTotalSize > 0) {
	                const entry = this._queue.shift();
	                this._queueTotalSize -= entry.byteLength;
	                ReadableByteStreamControllerHandleQueueDrain(this);
	                const view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
	                readRequest._chunkSteps(view);
	                return;
	            }
	            const autoAllocateChunkSize = this._autoAllocateChunkSize;
	            if (autoAllocateChunkSize !== undefined) {
	                let buffer;
	                try {
	                    buffer = new ArrayBuffer(autoAllocateChunkSize);
	                }
	                catch (bufferE) {
	                    readRequest._errorSteps(bufferE);
	                    return;
	                }
	                const pullIntoDescriptor = {
	                    buffer,
	                    bufferByteLength: autoAllocateChunkSize,
	                    byteOffset: 0,
	                    byteLength: autoAllocateChunkSize,
	                    bytesFilled: 0,
	                    elementSize: 1,
	                    viewConstructor: Uint8Array,
	                    readerType: 'default'
	                };
	                this._pendingPullIntos.push(pullIntoDescriptor);
	            }
	            ReadableStreamAddReadRequest(stream, readRequest);
	            ReadableByteStreamControllerCallPullIfNeeded(this);
	        }
	    }
	    Object.defineProperties(ReadableByteStreamController.prototype, {
	        close: { enumerable: true },
	        enqueue: { enumerable: true },
	        error: { enumerable: true },
	        byobRequest: { enumerable: true },
	        desiredSize: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(ReadableByteStreamController.prototype, SymbolPolyfill.toStringTag, {
	            value: 'ReadableByteStreamController',
	            configurable: true
	        });
	    }
	    // Abstract operations for the ReadableByteStreamController.
	    function IsReadableByteStreamController(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableByteStream')) {
	            return false;
	        }
	        return x instanceof ReadableByteStreamController;
	    }
	    function IsReadableStreamBYOBRequest(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
	            return false;
	        }
	        return x instanceof ReadableStreamBYOBRequest;
	    }
	    function ReadableByteStreamControllerCallPullIfNeeded(controller) {
	        const shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
	        if (!shouldPull) {
	            return;
	        }
	        if (controller._pulling) {
	            controller._pullAgain = true;
	            return;
	        }
	        controller._pulling = true;
	        // TODO: Test controller argument
	        const pullPromise = controller._pullAlgorithm();
	        uponPromise(pullPromise, () => {
	            controller._pulling = false;
	            if (controller._pullAgain) {
	                controller._pullAgain = false;
	                ReadableByteStreamControllerCallPullIfNeeded(controller);
	            }
	        }, e => {
	            ReadableByteStreamControllerError(controller, e);
	        });
	    }
	    function ReadableByteStreamControllerClearPendingPullIntos(controller) {
	        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
	        controller._pendingPullIntos = new SimpleQueue();
	    }
	    function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
	        let done = false;
	        if (stream._state === 'closed') {
	            done = true;
	        }
	        const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
	        if (pullIntoDescriptor.readerType === 'default') {
	            ReadableStreamFulfillReadRequest(stream, filledView, done);
	        }
	        else {
	            ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
	        }
	    }
	    function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
	        const bytesFilled = pullIntoDescriptor.bytesFilled;
	        const elementSize = pullIntoDescriptor.elementSize;
	        return new pullIntoDescriptor.viewConstructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
	    }
	    function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
	        controller._queue.push({ buffer, byteOffset, byteLength });
	        controller._queueTotalSize += byteLength;
	    }
	    function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
	        const elementSize = pullIntoDescriptor.elementSize;
	        const currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
	        const maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
	        const maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
	        const maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
	        let totalBytesToCopyRemaining = maxBytesToCopy;
	        let ready = false;
	        if (maxAlignedBytes > currentAlignedBytes) {
	            totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
	            ready = true;
	        }
	        const queue = controller._queue;
	        while (totalBytesToCopyRemaining > 0) {
	            const headOfQueue = queue.peek();
	            const bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
	            const destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
	            CopyDataBlockBytes(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
	            if (headOfQueue.byteLength === bytesToCopy) {
	                queue.shift();
	            }
	            else {
	                headOfQueue.byteOffset += bytesToCopy;
	                headOfQueue.byteLength -= bytesToCopy;
	            }
	            controller._queueTotalSize -= bytesToCopy;
	            ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
	            totalBytesToCopyRemaining -= bytesToCopy;
	        }
	        return ready;
	    }
	    function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
	        pullIntoDescriptor.bytesFilled += size;
	    }
	    function ReadableByteStreamControllerHandleQueueDrain(controller) {
	        if (controller._queueTotalSize === 0 && controller._closeRequested) {
	            ReadableByteStreamControllerClearAlgorithms(controller);
	            ReadableStreamClose(controller._controlledReadableByteStream);
	        }
	        else {
	            ReadableByteStreamControllerCallPullIfNeeded(controller);
	        }
	    }
	    function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
	        if (controller._byobRequest === null) {
	            return;
	        }
	        controller._byobRequest._associatedReadableByteStreamController = undefined;
	        controller._byobRequest._view = null;
	        controller._byobRequest = null;
	    }
	    function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
	        while (controller._pendingPullIntos.length > 0) {
	            if (controller._queueTotalSize === 0) {
	                return;
	            }
	            const pullIntoDescriptor = controller._pendingPullIntos.peek();
	            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
	                ReadableByteStreamControllerShiftPendingPullInto(controller);
	                ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
	            }
	        }
	    }
	    function ReadableByteStreamControllerPullInto(controller, view, readIntoRequest) {
	        const stream = controller._controlledReadableByteStream;
	        let elementSize = 1;
	        if (view.constructor !== DataView) {
	            elementSize = view.constructor.BYTES_PER_ELEMENT;
	        }
	        const ctor = view.constructor;
	        // try {
	        const buffer = TransferArrayBuffer(view.buffer);
	        // } catch (e) {
	        //   readIntoRequest._errorSteps(e);
	        //   return;
	        // }
	        const pullIntoDescriptor = {
	            buffer,
	            bufferByteLength: buffer.byteLength,
	            byteOffset: view.byteOffset,
	            byteLength: view.byteLength,
	            bytesFilled: 0,
	            elementSize,
	            viewConstructor: ctor,
	            readerType: 'byob'
	        };
	        if (controller._pendingPullIntos.length > 0) {
	            controller._pendingPullIntos.push(pullIntoDescriptor);
	            // No ReadableByteStreamControllerCallPullIfNeeded() call since:
	            // - No change happens on desiredSize
	            // - The source has already been notified of that there's at least 1 pending read(view)
	            ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
	            return;
	        }
	        if (stream._state === 'closed') {
	            const emptyView = new ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
	            readIntoRequest._closeSteps(emptyView);
	            return;
	        }
	        if (controller._queueTotalSize > 0) {
	            if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor)) {
	                const filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
	                ReadableByteStreamControllerHandleQueueDrain(controller);
	                readIntoRequest._chunkSteps(filledView);
	                return;
	            }
	            if (controller._closeRequested) {
	                const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
	                ReadableByteStreamControllerError(controller, e);
	                readIntoRequest._errorSteps(e);
	                return;
	            }
	        }
	        controller._pendingPullIntos.push(pullIntoDescriptor);
	        ReadableStreamAddReadIntoRequest(stream, readIntoRequest);
	        ReadableByteStreamControllerCallPullIfNeeded(controller);
	    }
	    function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
	        const stream = controller._controlledReadableByteStream;
	        if (ReadableStreamHasBYOBReader(stream)) {
	            while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
	                const pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
	                ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
	            }
	        }
	    }
	    function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
	        ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
	        if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
	            return;
	        }
	        ReadableByteStreamControllerShiftPendingPullInto(controller);
	        const remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
	        if (remainderSize > 0) {
	            const end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
	            const remainder = ArrayBufferSlice(pullIntoDescriptor.buffer, end - remainderSize, end);
	            ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
	        }
	        pullIntoDescriptor.bytesFilled -= remainderSize;
	        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableByteStream, pullIntoDescriptor);
	        ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
	    }
	    function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
	        const firstDescriptor = controller._pendingPullIntos.peek();
	        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
	        const state = controller._controlledReadableByteStream._state;
	        if (state === 'closed') {
	            ReadableByteStreamControllerRespondInClosedState(controller);
	        }
	        else {
	            ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
	        }
	        ReadableByteStreamControllerCallPullIfNeeded(controller);
	    }
	    function ReadableByteStreamControllerShiftPendingPullInto(controller) {
	        const descriptor = controller._pendingPullIntos.shift();
	        return descriptor;
	    }
	    function ReadableByteStreamControllerShouldCallPull(controller) {
	        const stream = controller._controlledReadableByteStream;
	        if (stream._state !== 'readable') {
	            return false;
	        }
	        if (controller._closeRequested) {
	            return false;
	        }
	        if (!controller._started) {
	            return false;
	        }
	        if (ReadableStreamHasDefaultReader(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
	            return true;
	        }
	        if (ReadableStreamHasBYOBReader(stream) && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
	            return true;
	        }
	        const desiredSize = ReadableByteStreamControllerGetDesiredSize(controller);
	        if (desiredSize > 0) {
	            return true;
	        }
	        return false;
	    }
	    function ReadableByteStreamControllerClearAlgorithms(controller) {
	        controller._pullAlgorithm = undefined;
	        controller._cancelAlgorithm = undefined;
	    }
	    // A client of ReadableByteStreamController may use these functions directly to bypass state check.
	    function ReadableByteStreamControllerClose(controller) {
	        const stream = controller._controlledReadableByteStream;
	        if (controller._closeRequested || stream._state !== 'readable') {
	            return;
	        }
	        if (controller._queueTotalSize > 0) {
	            controller._closeRequested = true;
	            return;
	        }
	        if (controller._pendingPullIntos.length > 0) {
	            const firstPendingPullInto = controller._pendingPullIntos.peek();
	            if (firstPendingPullInto.bytesFilled > 0) {
	                const e = new TypeError('Insufficient bytes to fill elements in the given buffer');
	                ReadableByteStreamControllerError(controller, e);
	                throw e;
	            }
	        }
	        ReadableByteStreamControllerClearAlgorithms(controller);
	        ReadableStreamClose(stream);
	    }
	    function ReadableByteStreamControllerEnqueue(controller, chunk) {
	        const stream = controller._controlledReadableByteStream;
	        if (controller._closeRequested || stream._state !== 'readable') {
	            return;
	        }
	        const buffer = chunk.buffer;
	        const byteOffset = chunk.byteOffset;
	        const byteLength = chunk.byteLength;
	        const transferredBuffer = TransferArrayBuffer(buffer);
	        if (controller._pendingPullIntos.length > 0) {
	            const firstPendingPullInto = controller._pendingPullIntos.peek();
	            if (IsDetachedBuffer(firstPendingPullInto.buffer)) ;
	            firstPendingPullInto.buffer = TransferArrayBuffer(firstPendingPullInto.buffer);
	        }
	        ReadableByteStreamControllerInvalidateBYOBRequest(controller);
	        if (ReadableStreamHasDefaultReader(stream)) {
	            if (ReadableStreamGetNumReadRequests(stream) === 0) {
	                ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
	            }
	            else {
	                if (controller._pendingPullIntos.length > 0) {
	                    ReadableByteStreamControllerShiftPendingPullInto(controller);
	                }
	                const transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
	                ReadableStreamFulfillReadRequest(stream, transferredView, false);
	            }
	        }
	        else if (ReadableStreamHasBYOBReader(stream)) {
	            // TODO: Ideally in this branch detaching should happen only if the buffer is not consumed fully.
	            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
	            ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
	        }
	        else {
	            ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
	        }
	        ReadableByteStreamControllerCallPullIfNeeded(controller);
	    }
	    function ReadableByteStreamControllerError(controller, e) {
	        const stream = controller._controlledReadableByteStream;
	        if (stream._state !== 'readable') {
	            return;
	        }
	        ReadableByteStreamControllerClearPendingPullIntos(controller);
	        ResetQueue(controller);
	        ReadableByteStreamControllerClearAlgorithms(controller);
	        ReadableStreamError(stream, e);
	    }
	    function ReadableByteStreamControllerGetBYOBRequest(controller) {
	        if (controller._byobRequest === null && controller._pendingPullIntos.length > 0) {
	            const firstDescriptor = controller._pendingPullIntos.peek();
	            const view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
	            const byobRequest = Object.create(ReadableStreamBYOBRequest.prototype);
	            SetUpReadableStreamBYOBRequest(byobRequest, controller, view);
	            controller._byobRequest = byobRequest;
	        }
	        return controller._byobRequest;
	    }
	    function ReadableByteStreamControllerGetDesiredSize(controller) {
	        const state = controller._controlledReadableByteStream._state;
	        if (state === 'errored') {
	            return null;
	        }
	        if (state === 'closed') {
	            return 0;
	        }
	        return controller._strategyHWM - controller._queueTotalSize;
	    }
	    function ReadableByteStreamControllerRespond(controller, bytesWritten) {
	        const firstDescriptor = controller._pendingPullIntos.peek();
	        const state = controller._controlledReadableByteStream._state;
	        if (state === 'closed') {
	            if (bytesWritten !== 0) {
	                throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
	            }
	        }
	        else {
	            if (bytesWritten === 0) {
	                throw new TypeError('bytesWritten must be greater than 0 when calling respond() on a readable stream');
	            }
	            if (firstDescriptor.bytesFilled + bytesWritten > firstDescriptor.byteLength) {
	                throw new RangeError('bytesWritten out of range');
	            }
	        }
	        firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
	        ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
	    }
	    function ReadableByteStreamControllerRespondWithNewView(controller, view) {
	        const firstDescriptor = controller._pendingPullIntos.peek();
	        const state = controller._controlledReadableByteStream._state;
	        if (state === 'closed') {
	            if (view.byteLength !== 0) {
	                throw new TypeError('The view\'s length must be 0 when calling respondWithNewView() on a closed stream');
	            }
	        }
	        else {
	            if (view.byteLength === 0) {
	                throw new TypeError('The view\'s length must be greater than 0 when calling respondWithNewView() on a readable stream');
	            }
	        }
	        if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
	            throw new RangeError('The region specified by view does not match byobRequest');
	        }
	        if (firstDescriptor.bufferByteLength !== view.buffer.byteLength) {
	            throw new RangeError('The buffer of view has different capacity than byobRequest');
	        }
	        if (firstDescriptor.bytesFilled + view.byteLength > firstDescriptor.byteLength) {
	            throw new RangeError('The region specified by view is larger than byobRequest');
	        }
	        const viewByteLength = view.byteLength;
	        firstDescriptor.buffer = TransferArrayBuffer(view.buffer);
	        ReadableByteStreamControllerRespondInternal(controller, viewByteLength);
	    }
	    function SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize) {
	        controller._controlledReadableByteStream = stream;
	        controller._pullAgain = false;
	        controller._pulling = false;
	        controller._byobRequest = null;
	        // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
	        controller._queue = controller._queueTotalSize = undefined;
	        ResetQueue(controller);
	        controller._closeRequested = false;
	        controller._started = false;
	        controller._strategyHWM = highWaterMark;
	        controller._pullAlgorithm = pullAlgorithm;
	        controller._cancelAlgorithm = cancelAlgorithm;
	        controller._autoAllocateChunkSize = autoAllocateChunkSize;
	        controller._pendingPullIntos = new SimpleQueue();
	        stream._readableStreamController = controller;
	        const startResult = startAlgorithm();
	        uponPromise(promiseResolvedWith(startResult), () => {
	            controller._started = true;
	            ReadableByteStreamControllerCallPullIfNeeded(controller);
	        }, r => {
	            ReadableByteStreamControllerError(controller, r);
	        });
	    }
	    function SetUpReadableByteStreamControllerFromUnderlyingSource(stream, underlyingByteSource, highWaterMark) {
	        const controller = Object.create(ReadableByteStreamController.prototype);
	        let startAlgorithm = () => undefined;
	        let pullAlgorithm = () => promiseResolvedWith(undefined);
	        let cancelAlgorithm = () => promiseResolvedWith(undefined);
	        if (underlyingByteSource.start !== undefined) {
	            startAlgorithm = () => underlyingByteSource.start(controller);
	        }
	        if (underlyingByteSource.pull !== undefined) {
	            pullAlgorithm = () => underlyingByteSource.pull(controller);
	        }
	        if (underlyingByteSource.cancel !== undefined) {
	            cancelAlgorithm = reason => underlyingByteSource.cancel(reason);
	        }
	        const autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
	        if (autoAllocateChunkSize === 0) {
	            throw new TypeError('autoAllocateChunkSize must be greater than 0');
	        }
	        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, autoAllocateChunkSize);
	    }
	    function SetUpReadableStreamBYOBRequest(request, controller, view) {
	        request._associatedReadableByteStreamController = controller;
	        request._view = view;
	    }
	    // Helper functions for the ReadableStreamBYOBRequest.
	    function byobRequestBrandCheckException(name) {
	        return new TypeError(`ReadableStreamBYOBRequest.prototype.${name} can only be used on a ReadableStreamBYOBRequest`);
	    }
	    // Helper functions for the ReadableByteStreamController.
	    function byteStreamControllerBrandCheckException(name) {
	        return new TypeError(`ReadableByteStreamController.prototype.${name} can only be used on a ReadableByteStreamController`);
	    }

	    // Abstract operations for the ReadableStream.
	    function AcquireReadableStreamBYOBReader(stream) {
	        return new ReadableStreamBYOBReader(stream);
	    }
	    // ReadableStream API exposed for controllers.
	    function ReadableStreamAddReadIntoRequest(stream, readIntoRequest) {
	        stream._reader._readIntoRequests.push(readIntoRequest);
	    }
	    function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
	        const reader = stream._reader;
	        const readIntoRequest = reader._readIntoRequests.shift();
	        if (done) {
	            readIntoRequest._closeSteps(chunk);
	        }
	        else {
	            readIntoRequest._chunkSteps(chunk);
	        }
	    }
	    function ReadableStreamGetNumReadIntoRequests(stream) {
	        return stream._reader._readIntoRequests.length;
	    }
	    function ReadableStreamHasBYOBReader(stream) {
	        const reader = stream._reader;
	        if (reader === undefined) {
	            return false;
	        }
	        if (!IsReadableStreamBYOBReader(reader)) {
	            return false;
	        }
	        return true;
	    }
	    /**
	     * A BYOB reader vended by a {@link ReadableStream}.
	     *
	     * @public
	     */
	    class ReadableStreamBYOBReader {
	        constructor(stream) {
	            assertRequiredArgument(stream, 1, 'ReadableStreamBYOBReader');
	            assertReadableStream(stream, 'First parameter');
	            if (IsReadableStreamLocked(stream)) {
	                throw new TypeError('This stream has already been locked for exclusive reading by another reader');
	            }
	            if (!IsReadableByteStreamController(stream._readableStreamController)) {
	                throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' +
	                    'source');
	            }
	            ReadableStreamReaderGenericInitialize(this, stream);
	            this._readIntoRequests = new SimpleQueue();
	        }
	        /**
	         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
	         * the reader's lock is released before the stream finishes closing.
	         */
	        get closed() {
	            if (!IsReadableStreamBYOBReader(this)) {
	                return promiseRejectedWith(byobReaderBrandCheckException('closed'));
	            }
	            return this._closedPromise;
	        }
	        /**
	         * If the reader is active, behaves the same as {@link ReadableStream.cancel | stream.cancel(reason)}.
	         */
	        cancel(reason = undefined) {
	            if (!IsReadableStreamBYOBReader(this)) {
	                return promiseRejectedWith(byobReaderBrandCheckException('cancel'));
	            }
	            if (this._ownerReadableStream === undefined) {
	                return promiseRejectedWith(readerLockException('cancel'));
	            }
	            return ReadableStreamReaderGenericCancel(this, reason);
	        }
	        /**
	         * Attempts to reads bytes into view, and returns a promise resolved with the result.
	         *
	         * If reading a chunk causes the queue to become empty, more data will be pulled from the underlying source.
	         */
	        read(view) {
	            if (!IsReadableStreamBYOBReader(this)) {
	                return promiseRejectedWith(byobReaderBrandCheckException('read'));
	            }
	            if (!ArrayBuffer.isView(view)) {
	                return promiseRejectedWith(new TypeError('view must be an array buffer view'));
	            }
	            if (view.byteLength === 0) {
	                return promiseRejectedWith(new TypeError('view must have non-zero byteLength'));
	            }
	            if (view.buffer.byteLength === 0) {
	                return promiseRejectedWith(new TypeError(`view's buffer must have non-zero byteLength`));
	            }
	            if (IsDetachedBuffer(view.buffer)) ;
	            if (this._ownerReadableStream === undefined) {
	                return promiseRejectedWith(readerLockException('read from'));
	            }
	            let resolvePromise;
	            let rejectPromise;
	            const promise = newPromise((resolve, reject) => {
	                resolvePromise = resolve;
	                rejectPromise = reject;
	            });
	            const readIntoRequest = {
	                _chunkSteps: chunk => resolvePromise({ value: chunk, done: false }),
	                _closeSteps: chunk => resolvePromise({ value: chunk, done: true }),
	                _errorSteps: e => rejectPromise(e)
	            };
	            ReadableStreamBYOBReaderRead(this, view, readIntoRequest);
	            return promise;
	        }
	        /**
	         * Releases the reader's lock on the corresponding stream. After the lock is released, the reader is no longer active.
	         * If the associated stream is errored when the lock is released, the reader will appear errored in the same way
	         * from now on; otherwise, the reader will appear closed.
	         *
	         * A reader's lock cannot be released while it still has a pending read request, i.e., if a promise returned by
	         * the reader's {@link ReadableStreamBYOBReader.read | read()} method has not yet been settled. Attempting to
	         * do so will throw a `TypeError` and leave the reader locked to the stream.
	         */
	        releaseLock() {
	            if (!IsReadableStreamBYOBReader(this)) {
	                throw byobReaderBrandCheckException('releaseLock');
	            }
	            if (this._ownerReadableStream === undefined) {
	                return;
	            }
	            if (this._readIntoRequests.length > 0) {
	                throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
	            }
	            ReadableStreamReaderGenericRelease(this);
	        }
	    }
	    Object.defineProperties(ReadableStreamBYOBReader.prototype, {
	        cancel: { enumerable: true },
	        read: { enumerable: true },
	        releaseLock: { enumerable: true },
	        closed: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(ReadableStreamBYOBReader.prototype, SymbolPolyfill.toStringTag, {
	            value: 'ReadableStreamBYOBReader',
	            configurable: true
	        });
	    }
	    // Abstract operations for the readers.
	    function IsReadableStreamBYOBReader(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
	            return false;
	        }
	        return x instanceof ReadableStreamBYOBReader;
	    }
	    function ReadableStreamBYOBReaderRead(reader, view, readIntoRequest) {
	        const stream = reader._ownerReadableStream;
	        stream._disturbed = true;
	        if (stream._state === 'errored') {
	            readIntoRequest._errorSteps(stream._storedError);
	        }
	        else {
	            ReadableByteStreamControllerPullInto(stream._readableStreamController, view, readIntoRequest);
	        }
	    }
	    // Helper functions for the ReadableStreamBYOBReader.
	    function byobReaderBrandCheckException(name) {
	        return new TypeError(`ReadableStreamBYOBReader.prototype.${name} can only be used on a ReadableStreamBYOBReader`);
	    }

	    function ExtractHighWaterMark(strategy, defaultHWM) {
	        const { highWaterMark } = strategy;
	        if (highWaterMark === undefined) {
	            return defaultHWM;
	        }
	        if (NumberIsNaN(highWaterMark) || highWaterMark < 0) {
	            throw new RangeError('Invalid highWaterMark');
	        }
	        return highWaterMark;
	    }
	    function ExtractSizeAlgorithm(strategy) {
	        const { size } = strategy;
	        if (!size) {
	            return () => 1;
	        }
	        return size;
	    }

	    function convertQueuingStrategy(init, context) {
	        assertDictionary(init, context);
	        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
	        const size = init === null || init === void 0 ? void 0 : init.size;
	        return {
	            highWaterMark: highWaterMark === undefined ? undefined : convertUnrestrictedDouble(highWaterMark),
	            size: size === undefined ? undefined : convertQueuingStrategySize(size, `${context} has member 'size' that`)
	        };
	    }
	    function convertQueuingStrategySize(fn, context) {
	        assertFunction(fn, context);
	        return chunk => convertUnrestrictedDouble(fn(chunk));
	    }

	    function convertUnderlyingSink(original, context) {
	        assertDictionary(original, context);
	        const abort = original === null || original === void 0 ? void 0 : original.abort;
	        const close = original === null || original === void 0 ? void 0 : original.close;
	        const start = original === null || original === void 0 ? void 0 : original.start;
	        const type = original === null || original === void 0 ? void 0 : original.type;
	        const write = original === null || original === void 0 ? void 0 : original.write;
	        return {
	            abort: abort === undefined ?
	                undefined :
	                convertUnderlyingSinkAbortCallback(abort, original, `${context} has member 'abort' that`),
	            close: close === undefined ?
	                undefined :
	                convertUnderlyingSinkCloseCallback(close, original, `${context} has member 'close' that`),
	            start: start === undefined ?
	                undefined :
	                convertUnderlyingSinkStartCallback(start, original, `${context} has member 'start' that`),
	            write: write === undefined ?
	                undefined :
	                convertUnderlyingSinkWriteCallback(write, original, `${context} has member 'write' that`),
	            type
	        };
	    }
	    function convertUnderlyingSinkAbortCallback(fn, original, context) {
	        assertFunction(fn, context);
	        return (reason) => promiseCall(fn, original, [reason]);
	    }
	    function convertUnderlyingSinkCloseCallback(fn, original, context) {
	        assertFunction(fn, context);
	        return () => promiseCall(fn, original, []);
	    }
	    function convertUnderlyingSinkStartCallback(fn, original, context) {
	        assertFunction(fn, context);
	        return (controller) => reflectCall(fn, original, [controller]);
	    }
	    function convertUnderlyingSinkWriteCallback(fn, original, context) {
	        assertFunction(fn, context);
	        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
	    }

	    function assertWritableStream(x, context) {
	        if (!IsWritableStream(x)) {
	            throw new TypeError(`${context} is not a WritableStream.`);
	        }
	    }

	    function isAbortSignal(value) {
	        if (typeof value !== 'object' || value === null) {
	            return false;
	        }
	        try {
	            return typeof value.aborted === 'boolean';
	        }
	        catch (_a) {
	            // AbortSignal.prototype.aborted throws if its brand check fails
	            return false;
	        }
	    }
	    const supportsAbortController = typeof AbortController === 'function';
	    /**
	     * Construct a new AbortController, if supported by the platform.
	     *
	     * @internal
	     */
	    function createAbortController() {
	        if (supportsAbortController) {
	            return new AbortController();
	        }
	        return undefined;
	    }

	    /**
	     * A writable stream represents a destination for data, into which you can write.
	     *
	     * @public
	     */
	    class WritableStream {
	        constructor(rawUnderlyingSink = {}, rawStrategy = {}) {
	            if (rawUnderlyingSink === undefined) {
	                rawUnderlyingSink = null;
	            }
	            else {
	                assertObject(rawUnderlyingSink, 'First parameter');
	            }
	            const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
	            const underlyingSink = convertUnderlyingSink(rawUnderlyingSink, 'First parameter');
	            InitializeWritableStream(this);
	            const type = underlyingSink.type;
	            if (type !== undefined) {
	                throw new RangeError('Invalid type is specified');
	            }
	            const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
	            const highWaterMark = ExtractHighWaterMark(strategy, 1);
	            SetUpWritableStreamDefaultControllerFromUnderlyingSink(this, underlyingSink, highWaterMark, sizeAlgorithm);
	        }
	        /**
	         * Returns whether or not the writable stream is locked to a writer.
	         */
	        get locked() {
	            if (!IsWritableStream(this)) {
	                throw streamBrandCheckException$2('locked');
	            }
	            return IsWritableStreamLocked(this);
	        }
	        /**
	         * Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be
	         * immediately moved to an errored state, with any queued-up writes discarded. This will also execute any abort
	         * mechanism of the underlying sink.
	         *
	         * The returned promise will fulfill if the stream shuts down successfully, or reject if the underlying sink signaled
	         * that there was an error doing so. Additionally, it will reject with a `TypeError` (without attempting to cancel
	         * the stream) if the stream is currently locked.
	         */
	        abort(reason = undefined) {
	            if (!IsWritableStream(this)) {
	                return promiseRejectedWith(streamBrandCheckException$2('abort'));
	            }
	            if (IsWritableStreamLocked(this)) {
	                return promiseRejectedWith(new TypeError('Cannot abort a stream that already has a writer'));
	            }
	            return WritableStreamAbort(this, reason);
	        }
	        /**
	         * Closes the stream. The underlying sink will finish processing any previously-written chunks, before invoking its
	         * close behavior. During this time any further attempts to write will fail (without erroring the stream).
	         *
	         * The method returns a promise that will fulfill if all remaining chunks are successfully written and the stream
	         * successfully closes, or rejects if an error is encountered during this process. Additionally, it will reject with
	         * a `TypeError` (without attempting to cancel the stream) if the stream is currently locked.
	         */
	        close() {
	            if (!IsWritableStream(this)) {
	                return promiseRejectedWith(streamBrandCheckException$2('close'));
	            }
	            if (IsWritableStreamLocked(this)) {
	                return promiseRejectedWith(new TypeError('Cannot close a stream that already has a writer'));
	            }
	            if (WritableStreamCloseQueuedOrInFlight(this)) {
	                return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
	            }
	            return WritableStreamClose(this);
	        }
	        /**
	         * Creates a {@link WritableStreamDefaultWriter | writer} and locks the stream to the new writer. While the stream
	         * is locked, no other writer can be acquired until this one is released.
	         *
	         * This functionality is especially useful for creating abstractions that desire the ability to write to a stream
	         * without interruption or interleaving. By getting a writer for the stream, you can ensure nobody else can write at
	         * the same time, which would cause the resulting written data to be unpredictable and probably useless.
	         */
	        getWriter() {
	            if (!IsWritableStream(this)) {
	                throw streamBrandCheckException$2('getWriter');
	            }
	            return AcquireWritableStreamDefaultWriter(this);
	        }
	    }
	    Object.defineProperties(WritableStream.prototype, {
	        abort: { enumerable: true },
	        close: { enumerable: true },
	        getWriter: { enumerable: true },
	        locked: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(WritableStream.prototype, SymbolPolyfill.toStringTag, {
	            value: 'WritableStream',
	            configurable: true
	        });
	    }
	    // Abstract operations for the WritableStream.
	    function AcquireWritableStreamDefaultWriter(stream) {
	        return new WritableStreamDefaultWriter(stream);
	    }
	    // Throws if and only if startAlgorithm throws.
	    function CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
	        const stream = Object.create(WritableStream.prototype);
	        InitializeWritableStream(stream);
	        const controller = Object.create(WritableStreamDefaultController.prototype);
	        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
	        return stream;
	    }
	    function InitializeWritableStream(stream) {
	        stream._state = 'writable';
	        // The error that will be reported by new method calls once the state becomes errored. Only set when [[state]] is
	        // 'erroring' or 'errored'. May be set to an undefined value.
	        stream._storedError = undefined;
	        stream._writer = undefined;
	        // Initialize to undefined first because the constructor of the controller checks this
	        // variable to validate the caller.
	        stream._writableStreamController = undefined;
	        // This queue is placed here instead of the writer class in order to allow for passing a writer to the next data
	        // producer without waiting for the queued writes to finish.
	        stream._writeRequests = new SimpleQueue();
	        // Write requests are removed from _writeRequests when write() is called on the underlying sink. This prevents
	        // them from being erroneously rejected on error. If a write() call is in-flight, the request is stored here.
	        stream._inFlightWriteRequest = undefined;
	        // The promise that was returned from writer.close(). Stored here because it may be fulfilled after the writer
	        // has been detached.
	        stream._closeRequest = undefined;
	        // Close request is removed from _closeRequest when close() is called on the underlying sink. This prevents it
	        // from being erroneously rejected on error. If a close() call is in-flight, the request is stored here.
	        stream._inFlightCloseRequest = undefined;
	        // The promise that was returned from writer.abort(). This may also be fulfilled after the writer has detached.
	        stream._pendingAbortRequest = undefined;
	        // The backpressure signal set by the controller.
	        stream._backpressure = false;
	    }
	    function IsWritableStream(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
	            return false;
	        }
	        return x instanceof WritableStream;
	    }
	    function IsWritableStreamLocked(stream) {
	        if (stream._writer === undefined) {
	            return false;
	        }
	        return true;
	    }
	    function WritableStreamAbort(stream, reason) {
	        var _a;
	        if (stream._state === 'closed' || stream._state === 'errored') {
	            return promiseResolvedWith(undefined);
	        }
	        stream._writableStreamController._abortReason = reason;
	        (_a = stream._writableStreamController._abortController) === null || _a === void 0 ? void 0 : _a.abort();
	        // TypeScript narrows the type of `stream._state` down to 'writable' | 'erroring',
	        // but it doesn't know that signaling abort runs author code that might have changed the state.
	        // Widen the type again by casting to WritableStreamState.
	        const state = stream._state;
	        if (state === 'closed' || state === 'errored') {
	            return promiseResolvedWith(undefined);
	        }
	        if (stream._pendingAbortRequest !== undefined) {
	            return stream._pendingAbortRequest._promise;
	        }
	        let wasAlreadyErroring = false;
	        if (state === 'erroring') {
	            wasAlreadyErroring = true;
	            // reason will not be used, so don't keep a reference to it.
	            reason = undefined;
	        }
	        const promise = newPromise((resolve, reject) => {
	            stream._pendingAbortRequest = {
	                _promise: undefined,
	                _resolve: resolve,
	                _reject: reject,
	                _reason: reason,
	                _wasAlreadyErroring: wasAlreadyErroring
	            };
	        });
	        stream._pendingAbortRequest._promise = promise;
	        if (!wasAlreadyErroring) {
	            WritableStreamStartErroring(stream, reason);
	        }
	        return promise;
	    }
	    function WritableStreamClose(stream) {
	        const state = stream._state;
	        if (state === 'closed' || state === 'errored') {
	            return promiseRejectedWith(new TypeError(`The stream (in ${state} state) is not in the writable state and cannot be closed`));
	        }
	        const promise = newPromise((resolve, reject) => {
	            const closeRequest = {
	                _resolve: resolve,
	                _reject: reject
	            };
	            stream._closeRequest = closeRequest;
	        });
	        const writer = stream._writer;
	        if (writer !== undefined && stream._backpressure && state === 'writable') {
	            defaultWriterReadyPromiseResolve(writer);
	        }
	        WritableStreamDefaultControllerClose(stream._writableStreamController);
	        return promise;
	    }
	    // WritableStream API exposed for controllers.
	    function WritableStreamAddWriteRequest(stream) {
	        const promise = newPromise((resolve, reject) => {
	            const writeRequest = {
	                _resolve: resolve,
	                _reject: reject
	            };
	            stream._writeRequests.push(writeRequest);
	        });
	        return promise;
	    }
	    function WritableStreamDealWithRejection(stream, error) {
	        const state = stream._state;
	        if (state === 'writable') {
	            WritableStreamStartErroring(stream, error);
	            return;
	        }
	        WritableStreamFinishErroring(stream);
	    }
	    function WritableStreamStartErroring(stream, reason) {
	        const controller = stream._writableStreamController;
	        stream._state = 'erroring';
	        stream._storedError = reason;
	        const writer = stream._writer;
	        if (writer !== undefined) {
	            WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
	        }
	        if (!WritableStreamHasOperationMarkedInFlight(stream) && controller._started) {
	            WritableStreamFinishErroring(stream);
	        }
	    }
	    function WritableStreamFinishErroring(stream) {
	        stream._state = 'errored';
	        stream._writableStreamController[ErrorSteps]();
	        const storedError = stream._storedError;
	        stream._writeRequests.forEach(writeRequest => {
	            writeRequest._reject(storedError);
	        });
	        stream._writeRequests = new SimpleQueue();
	        if (stream._pendingAbortRequest === undefined) {
	            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
	            return;
	        }
	        const abortRequest = stream._pendingAbortRequest;
	        stream._pendingAbortRequest = undefined;
	        if (abortRequest._wasAlreadyErroring) {
	            abortRequest._reject(storedError);
	            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
	            return;
	        }
	        const promise = stream._writableStreamController[AbortSteps](abortRequest._reason);
	        uponPromise(promise, () => {
	            abortRequest._resolve();
	            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
	        }, (reason) => {
	            abortRequest._reject(reason);
	            WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
	        });
	    }
	    function WritableStreamFinishInFlightWrite(stream) {
	        stream._inFlightWriteRequest._resolve(undefined);
	        stream._inFlightWriteRequest = undefined;
	    }
	    function WritableStreamFinishInFlightWriteWithError(stream, error) {
	        stream._inFlightWriteRequest._reject(error);
	        stream._inFlightWriteRequest = undefined;
	        WritableStreamDealWithRejection(stream, error);
	    }
	    function WritableStreamFinishInFlightClose(stream) {
	        stream._inFlightCloseRequest._resolve(undefined);
	        stream._inFlightCloseRequest = undefined;
	        const state = stream._state;
	        if (state === 'erroring') {
	            // The error was too late to do anything, so it is ignored.
	            stream._storedError = undefined;
	            if (stream._pendingAbortRequest !== undefined) {
	                stream._pendingAbortRequest._resolve();
	                stream._pendingAbortRequest = undefined;
	            }
	        }
	        stream._state = 'closed';
	        const writer = stream._writer;
	        if (writer !== undefined) {
	            defaultWriterClosedPromiseResolve(writer);
	        }
	    }
	    function WritableStreamFinishInFlightCloseWithError(stream, error) {
	        stream._inFlightCloseRequest._reject(error);
	        stream._inFlightCloseRequest = undefined;
	        // Never execute sink abort() after sink close().
	        if (stream._pendingAbortRequest !== undefined) {
	            stream._pendingAbortRequest._reject(error);
	            stream._pendingAbortRequest = undefined;
	        }
	        WritableStreamDealWithRejection(stream, error);
	    }
	    // TODO(ricea): Fix alphabetical order.
	    function WritableStreamCloseQueuedOrInFlight(stream) {
	        if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
	            return false;
	        }
	        return true;
	    }
	    function WritableStreamHasOperationMarkedInFlight(stream) {
	        if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
	            return false;
	        }
	        return true;
	    }
	    function WritableStreamMarkCloseRequestInFlight(stream) {
	        stream._inFlightCloseRequest = stream._closeRequest;
	        stream._closeRequest = undefined;
	    }
	    function WritableStreamMarkFirstWriteRequestInFlight(stream) {
	        stream._inFlightWriteRequest = stream._writeRequests.shift();
	    }
	    function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
	        if (stream._closeRequest !== undefined) {
	            stream._closeRequest._reject(stream._storedError);
	            stream._closeRequest = undefined;
	        }
	        const writer = stream._writer;
	        if (writer !== undefined) {
	            defaultWriterClosedPromiseReject(writer, stream._storedError);
	        }
	    }
	    function WritableStreamUpdateBackpressure(stream, backpressure) {
	        const writer = stream._writer;
	        if (writer !== undefined && backpressure !== stream._backpressure) {
	            if (backpressure) {
	                defaultWriterReadyPromiseReset(writer);
	            }
	            else {
	                defaultWriterReadyPromiseResolve(writer);
	            }
	        }
	        stream._backpressure = backpressure;
	    }
	    /**
	     * A default writer vended by a {@link WritableStream}.
	     *
	     * @public
	     */
	    class WritableStreamDefaultWriter {
	        constructor(stream) {
	            assertRequiredArgument(stream, 1, 'WritableStreamDefaultWriter');
	            assertWritableStream(stream, 'First parameter');
	            if (IsWritableStreamLocked(stream)) {
	                throw new TypeError('This stream has already been locked for exclusive writing by another writer');
	            }
	            this._ownerWritableStream = stream;
	            stream._writer = this;
	            const state = stream._state;
	            if (state === 'writable') {
	                if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._backpressure) {
	                    defaultWriterReadyPromiseInitialize(this);
	                }
	                else {
	                    defaultWriterReadyPromiseInitializeAsResolved(this);
	                }
	                defaultWriterClosedPromiseInitialize(this);
	            }
	            else if (state === 'erroring') {
	                defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
	                defaultWriterClosedPromiseInitialize(this);
	            }
	            else if (state === 'closed') {
	                defaultWriterReadyPromiseInitializeAsResolved(this);
	                defaultWriterClosedPromiseInitializeAsResolved(this);
	            }
	            else {
	                const storedError = stream._storedError;
	                defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
	                defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
	            }
	        }
	        /**
	         * Returns a promise that will be fulfilled when the stream becomes closed, or rejected if the stream ever errors or
	         * the writer’s lock is released before the stream finishes closing.
	         */
	        get closed() {
	            if (!IsWritableStreamDefaultWriter(this)) {
	                return promiseRejectedWith(defaultWriterBrandCheckException('closed'));
	            }
	            return this._closedPromise;
	        }
	        /**
	         * Returns the desired size to fill the stream’s internal queue. It can be negative, if the queue is over-full.
	         * A producer can use this information to determine the right amount of data to write.
	         *
	         * It will be `null` if the stream cannot be successfully written to (due to either being errored, or having an abort
	         * queued up). It will return zero if the stream is closed. And the getter will throw an exception if invoked when
	         * the writer’s lock is released.
	         */
	        get desiredSize() {
	            if (!IsWritableStreamDefaultWriter(this)) {
	                throw defaultWriterBrandCheckException('desiredSize');
	            }
	            if (this._ownerWritableStream === undefined) {
	                throw defaultWriterLockException('desiredSize');
	            }
	            return WritableStreamDefaultWriterGetDesiredSize(this);
	        }
	        /**
	         * Returns a promise that will be fulfilled when the desired size to fill the stream’s internal queue transitions
	         * from non-positive to positive, signaling that it is no longer applying backpressure. Once the desired size dips
	         * back to zero or below, the getter will return a new promise that stays pending until the next transition.
	         *
	         * If the stream becomes errored or aborted, or the writer’s lock is released, the returned promise will become
	         * rejected.
	         */
	        get ready() {
	            if (!IsWritableStreamDefaultWriter(this)) {
	                return promiseRejectedWith(defaultWriterBrandCheckException('ready'));
	            }
	            return this._readyPromise;
	        }
	        /**
	         * If the reader is active, behaves the same as {@link WritableStream.abort | stream.abort(reason)}.
	         */
	        abort(reason = undefined) {
	            if (!IsWritableStreamDefaultWriter(this)) {
	                return promiseRejectedWith(defaultWriterBrandCheckException('abort'));
	            }
	            if (this._ownerWritableStream === undefined) {
	                return promiseRejectedWith(defaultWriterLockException('abort'));
	            }
	            return WritableStreamDefaultWriterAbort(this, reason);
	        }
	        /**
	         * If the reader is active, behaves the same as {@link WritableStream.close | stream.close()}.
	         */
	        close() {
	            if (!IsWritableStreamDefaultWriter(this)) {
	                return promiseRejectedWith(defaultWriterBrandCheckException('close'));
	            }
	            const stream = this._ownerWritableStream;
	            if (stream === undefined) {
	                return promiseRejectedWith(defaultWriterLockException('close'));
	            }
	            if (WritableStreamCloseQueuedOrInFlight(stream)) {
	                return promiseRejectedWith(new TypeError('Cannot close an already-closing stream'));
	            }
	            return WritableStreamDefaultWriterClose(this);
	        }
	        /**
	         * Releases the writer’s lock on the corresponding stream. After the lock is released, the writer is no longer active.
	         * If the associated stream is errored when the lock is released, the writer will appear errored in the same way from
	         * now on; otherwise, the writer will appear closed.
	         *
	         * Note that the lock can still be released even if some ongoing writes have not yet finished (i.e. even if the
	         * promises returned from previous calls to {@link WritableStreamDefaultWriter.write | write()} have not yet settled).
	         * It’s not necessary to hold the lock on the writer for the duration of the write; the lock instead simply prevents
	         * other producers from writing in an interleaved manner.
	         */
	        releaseLock() {
	            if (!IsWritableStreamDefaultWriter(this)) {
	                throw defaultWriterBrandCheckException('releaseLock');
	            }
	            const stream = this._ownerWritableStream;
	            if (stream === undefined) {
	                return;
	            }
	            WritableStreamDefaultWriterRelease(this);
	        }
	        write(chunk = undefined) {
	            if (!IsWritableStreamDefaultWriter(this)) {
	                return promiseRejectedWith(defaultWriterBrandCheckException('write'));
	            }
	            if (this._ownerWritableStream === undefined) {
	                return promiseRejectedWith(defaultWriterLockException('write to'));
	            }
	            return WritableStreamDefaultWriterWrite(this, chunk);
	        }
	    }
	    Object.defineProperties(WritableStreamDefaultWriter.prototype, {
	        abort: { enumerable: true },
	        close: { enumerable: true },
	        releaseLock: { enumerable: true },
	        write: { enumerable: true },
	        closed: { enumerable: true },
	        desiredSize: { enumerable: true },
	        ready: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(WritableStreamDefaultWriter.prototype, SymbolPolyfill.toStringTag, {
	            value: 'WritableStreamDefaultWriter',
	            configurable: true
	        });
	    }
	    // Abstract operations for the WritableStreamDefaultWriter.
	    function IsWritableStreamDefaultWriter(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
	            return false;
	        }
	        return x instanceof WritableStreamDefaultWriter;
	    }
	    // A client of WritableStreamDefaultWriter may use these functions directly to bypass state check.
	    function WritableStreamDefaultWriterAbort(writer, reason) {
	        const stream = writer._ownerWritableStream;
	        return WritableStreamAbort(stream, reason);
	    }
	    function WritableStreamDefaultWriterClose(writer) {
	        const stream = writer._ownerWritableStream;
	        return WritableStreamClose(stream);
	    }
	    function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
	        const stream = writer._ownerWritableStream;
	        const state = stream._state;
	        if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
	            return promiseResolvedWith(undefined);
	        }
	        if (state === 'errored') {
	            return promiseRejectedWith(stream._storedError);
	        }
	        return WritableStreamDefaultWriterClose(writer);
	    }
	    function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
	        if (writer._closedPromiseState === 'pending') {
	            defaultWriterClosedPromiseReject(writer, error);
	        }
	        else {
	            defaultWriterClosedPromiseResetToRejected(writer, error);
	        }
	    }
	    function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
	        if (writer._readyPromiseState === 'pending') {
	            defaultWriterReadyPromiseReject(writer, error);
	        }
	        else {
	            defaultWriterReadyPromiseResetToRejected(writer, error);
	        }
	    }
	    function WritableStreamDefaultWriterGetDesiredSize(writer) {
	        const stream = writer._ownerWritableStream;
	        const state = stream._state;
	        if (state === 'errored' || state === 'erroring') {
	            return null;
	        }
	        if (state === 'closed') {
	            return 0;
	        }
	        return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
	    }
	    function WritableStreamDefaultWriterRelease(writer) {
	        const stream = writer._ownerWritableStream;
	        const releasedError = new TypeError(`Writer was released and can no longer be used to monitor the stream's closedness`);
	        WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
	        // The state transitions to "errored" before the sink abort() method runs, but the writer.closed promise is not
	        // rejected until afterwards. This means that simply testing state will not work.
	        WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
	        stream._writer = undefined;
	        writer._ownerWritableStream = undefined;
	    }
	    function WritableStreamDefaultWriterWrite(writer, chunk) {
	        const stream = writer._ownerWritableStream;
	        const controller = stream._writableStreamController;
	        const chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
	        if (stream !== writer._ownerWritableStream) {
	            return promiseRejectedWith(defaultWriterLockException('write to'));
	        }
	        const state = stream._state;
	        if (state === 'errored') {
	            return promiseRejectedWith(stream._storedError);
	        }
	        if (WritableStreamCloseQueuedOrInFlight(stream) || state === 'closed') {
	            return promiseRejectedWith(new TypeError('The stream is closing or closed and cannot be written to'));
	        }
	        if (state === 'erroring') {
	            return promiseRejectedWith(stream._storedError);
	        }
	        const promise = WritableStreamAddWriteRequest(stream);
	        WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
	        return promise;
	    }
	    const closeSentinel = {};
	    /**
	     * Allows control of a {@link WritableStream | writable stream}'s state and internal queue.
	     *
	     * @public
	     */
	    class WritableStreamDefaultController {
	        constructor() {
	            throw new TypeError('Illegal constructor');
	        }
	        /**
	         * The reason which was passed to `WritableStream.abort(reason)` when the stream was aborted.
	         *
	         * @deprecated
	         *  This property has been removed from the specification, see https://github.com/whatwg/streams/pull/1177.
	         *  Use {@link WritableStreamDefaultController.signal}'s `reason` instead.
	         */
	        get abortReason() {
	            if (!IsWritableStreamDefaultController(this)) {
	                throw defaultControllerBrandCheckException$2('abortReason');
	            }
	            return this._abortReason;
	        }
	        /**
	         * An `AbortSignal` that can be used to abort the pending write or close operation when the stream is aborted.
	         */
	        get signal() {
	            if (!IsWritableStreamDefaultController(this)) {
	                throw defaultControllerBrandCheckException$2('signal');
	            }
	            if (this._abortController === undefined) {
	                // Older browsers or older Node versions may not support `AbortController` or `AbortSignal`.
	                // We don't want to bundle and ship an `AbortController` polyfill together with our polyfill,
	                // so instead we only implement support for `signal` if we find a global `AbortController` constructor.
	                throw new TypeError('WritableStreamDefaultController.prototype.signal is not supported');
	            }
	            return this._abortController.signal;
	        }
	        /**
	         * Closes the controlled writable stream, making all future interactions with it fail with the given error `e`.
	         *
	         * This method is rarely used, since usually it suffices to return a rejected promise from one of the underlying
	         * sink's methods. However, it can be useful for suddenly shutting down a stream in response to an event outside the
	         * normal lifecycle of interactions with the underlying sink.
	         */
	        error(e = undefined) {
	            if (!IsWritableStreamDefaultController(this)) {
	                throw defaultControllerBrandCheckException$2('error');
	            }
	            const state = this._controlledWritableStream._state;
	            if (state !== 'writable') {
	                // The stream is closed, errored or will be soon. The sink can't do anything useful if it gets an error here, so
	                // just treat it as a no-op.
	                return;
	            }
	            WritableStreamDefaultControllerError(this, e);
	        }
	        /** @internal */
	        [AbortSteps](reason) {
	            const result = this._abortAlgorithm(reason);
	            WritableStreamDefaultControllerClearAlgorithms(this);
	            return result;
	        }
	        /** @internal */
	        [ErrorSteps]() {
	            ResetQueue(this);
	        }
	    }
	    Object.defineProperties(WritableStreamDefaultController.prototype, {
	        abortReason: { enumerable: true },
	        signal: { enumerable: true },
	        error: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(WritableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
	            value: 'WritableStreamDefaultController',
	            configurable: true
	        });
	    }
	    // Abstract operations implementing interface required by the WritableStream.
	    function IsWritableStreamDefaultController(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_controlledWritableStream')) {
	            return false;
	        }
	        return x instanceof WritableStreamDefaultController;
	    }
	    function SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm) {
	        controller._controlledWritableStream = stream;
	        stream._writableStreamController = controller;
	        // Need to set the slots so that the assert doesn't fire. In the spec the slots already exist implicitly.
	        controller._queue = undefined;
	        controller._queueTotalSize = undefined;
	        ResetQueue(controller);
	        controller._abortReason = undefined;
	        controller._abortController = createAbortController();
	        controller._started = false;
	        controller._strategySizeAlgorithm = sizeAlgorithm;
	        controller._strategyHWM = highWaterMark;
	        controller._writeAlgorithm = writeAlgorithm;
	        controller._closeAlgorithm = closeAlgorithm;
	        controller._abortAlgorithm = abortAlgorithm;
	        const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
	        WritableStreamUpdateBackpressure(stream, backpressure);
	        const startResult = startAlgorithm();
	        const startPromise = promiseResolvedWith(startResult);
	        uponPromise(startPromise, () => {
	            controller._started = true;
	            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
	        }, r => {
	            controller._started = true;
	            WritableStreamDealWithRejection(stream, r);
	        });
	    }
	    function SetUpWritableStreamDefaultControllerFromUnderlyingSink(stream, underlyingSink, highWaterMark, sizeAlgorithm) {
	        const controller = Object.create(WritableStreamDefaultController.prototype);
	        let startAlgorithm = () => undefined;
	        let writeAlgorithm = () => promiseResolvedWith(undefined);
	        let closeAlgorithm = () => promiseResolvedWith(undefined);
	        let abortAlgorithm = () => promiseResolvedWith(undefined);
	        if (underlyingSink.start !== undefined) {
	            startAlgorithm = () => underlyingSink.start(controller);
	        }
	        if (underlyingSink.write !== undefined) {
	            writeAlgorithm = chunk => underlyingSink.write(chunk, controller);
	        }
	        if (underlyingSink.close !== undefined) {
	            closeAlgorithm = () => underlyingSink.close();
	        }
	        if (underlyingSink.abort !== undefined) {
	            abortAlgorithm = reason => underlyingSink.abort(reason);
	        }
	        SetUpWritableStreamDefaultController(stream, controller, startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, highWaterMark, sizeAlgorithm);
	    }
	    // ClearAlgorithms may be called twice. Erroring the same stream in multiple ways will often result in redundant calls.
	    function WritableStreamDefaultControllerClearAlgorithms(controller) {
	        controller._writeAlgorithm = undefined;
	        controller._closeAlgorithm = undefined;
	        controller._abortAlgorithm = undefined;
	        controller._strategySizeAlgorithm = undefined;
	    }
	    function WritableStreamDefaultControllerClose(controller) {
	        EnqueueValueWithSize(controller, closeSentinel, 0);
	        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
	    }
	    function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
	        try {
	            return controller._strategySizeAlgorithm(chunk);
	        }
	        catch (chunkSizeE) {
	            WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
	            return 1;
	        }
	    }
	    function WritableStreamDefaultControllerGetDesiredSize(controller) {
	        return controller._strategyHWM - controller._queueTotalSize;
	    }
	    function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
	        try {
	            EnqueueValueWithSize(controller, chunk, chunkSize);
	        }
	        catch (enqueueE) {
	            WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
	            return;
	        }
	        const stream = controller._controlledWritableStream;
	        if (!WritableStreamCloseQueuedOrInFlight(stream) && stream._state === 'writable') {
	            const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
	            WritableStreamUpdateBackpressure(stream, backpressure);
	        }
	        WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
	    }
	    // Abstract operations for the WritableStreamDefaultController.
	    function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
	        const stream = controller._controlledWritableStream;
	        if (!controller._started) {
	            return;
	        }
	        if (stream._inFlightWriteRequest !== undefined) {
	            return;
	        }
	        const state = stream._state;
	        if (state === 'erroring') {
	            WritableStreamFinishErroring(stream);
	            return;
	        }
	        if (controller._queue.length === 0) {
	            return;
	        }
	        const value = PeekQueueValue(controller);
	        if (value === closeSentinel) {
	            WritableStreamDefaultControllerProcessClose(controller);
	        }
	        else {
	            WritableStreamDefaultControllerProcessWrite(controller, value);
	        }
	    }
	    function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
	        if (controller._controlledWritableStream._state === 'writable') {
	            WritableStreamDefaultControllerError(controller, error);
	        }
	    }
	    function WritableStreamDefaultControllerProcessClose(controller) {
	        const stream = controller._controlledWritableStream;
	        WritableStreamMarkCloseRequestInFlight(stream);
	        DequeueValue(controller);
	        const sinkClosePromise = controller._closeAlgorithm();
	        WritableStreamDefaultControllerClearAlgorithms(controller);
	        uponPromise(sinkClosePromise, () => {
	            WritableStreamFinishInFlightClose(stream);
	        }, reason => {
	            WritableStreamFinishInFlightCloseWithError(stream, reason);
	        });
	    }
	    function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
	        const stream = controller._controlledWritableStream;
	        WritableStreamMarkFirstWriteRequestInFlight(stream);
	        const sinkWritePromise = controller._writeAlgorithm(chunk);
	        uponPromise(sinkWritePromise, () => {
	            WritableStreamFinishInFlightWrite(stream);
	            const state = stream._state;
	            DequeueValue(controller);
	            if (!WritableStreamCloseQueuedOrInFlight(stream) && state === 'writable') {
	                const backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
	                WritableStreamUpdateBackpressure(stream, backpressure);
	            }
	            WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
	        }, reason => {
	            if (stream._state === 'writable') {
	                WritableStreamDefaultControllerClearAlgorithms(controller);
	            }
	            WritableStreamFinishInFlightWriteWithError(stream, reason);
	        });
	    }
	    function WritableStreamDefaultControllerGetBackpressure(controller) {
	        const desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
	        return desiredSize <= 0;
	    }
	    // A client of WritableStreamDefaultController may use these functions directly to bypass state check.
	    function WritableStreamDefaultControllerError(controller, error) {
	        const stream = controller._controlledWritableStream;
	        WritableStreamDefaultControllerClearAlgorithms(controller);
	        WritableStreamStartErroring(stream, error);
	    }
	    // Helper functions for the WritableStream.
	    function streamBrandCheckException$2(name) {
	        return new TypeError(`WritableStream.prototype.${name} can only be used on a WritableStream`);
	    }
	    // Helper functions for the WritableStreamDefaultController.
	    function defaultControllerBrandCheckException$2(name) {
	        return new TypeError(`WritableStreamDefaultController.prototype.${name} can only be used on a WritableStreamDefaultController`);
	    }
	    // Helper functions for the WritableStreamDefaultWriter.
	    function defaultWriterBrandCheckException(name) {
	        return new TypeError(`WritableStreamDefaultWriter.prototype.${name} can only be used on a WritableStreamDefaultWriter`);
	    }
	    function defaultWriterLockException(name) {
	        return new TypeError('Cannot ' + name + ' a stream using a released writer');
	    }
	    function defaultWriterClosedPromiseInitialize(writer) {
	        writer._closedPromise = newPromise((resolve, reject) => {
	            writer._closedPromise_resolve = resolve;
	            writer._closedPromise_reject = reject;
	            writer._closedPromiseState = 'pending';
	        });
	    }
	    function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
	        defaultWriterClosedPromiseInitialize(writer);
	        defaultWriterClosedPromiseReject(writer, reason);
	    }
	    function defaultWriterClosedPromiseInitializeAsResolved(writer) {
	        defaultWriterClosedPromiseInitialize(writer);
	        defaultWriterClosedPromiseResolve(writer);
	    }
	    function defaultWriterClosedPromiseReject(writer, reason) {
	        if (writer._closedPromise_reject === undefined) {
	            return;
	        }
	        setPromiseIsHandledToTrue(writer._closedPromise);
	        writer._closedPromise_reject(reason);
	        writer._closedPromise_resolve = undefined;
	        writer._closedPromise_reject = undefined;
	        writer._closedPromiseState = 'rejected';
	    }
	    function defaultWriterClosedPromiseResetToRejected(writer, reason) {
	        defaultWriterClosedPromiseInitializeAsRejected(writer, reason);
	    }
	    function defaultWriterClosedPromiseResolve(writer) {
	        if (writer._closedPromise_resolve === undefined) {
	            return;
	        }
	        writer._closedPromise_resolve(undefined);
	        writer._closedPromise_resolve = undefined;
	        writer._closedPromise_reject = undefined;
	        writer._closedPromiseState = 'resolved';
	    }
	    function defaultWriterReadyPromiseInitialize(writer) {
	        writer._readyPromise = newPromise((resolve, reject) => {
	            writer._readyPromise_resolve = resolve;
	            writer._readyPromise_reject = reject;
	        });
	        writer._readyPromiseState = 'pending';
	    }
	    function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
	        defaultWriterReadyPromiseInitialize(writer);
	        defaultWriterReadyPromiseReject(writer, reason);
	    }
	    function defaultWriterReadyPromiseInitializeAsResolved(writer) {
	        defaultWriterReadyPromiseInitialize(writer);
	        defaultWriterReadyPromiseResolve(writer);
	    }
	    function defaultWriterReadyPromiseReject(writer, reason) {
	        if (writer._readyPromise_reject === undefined) {
	            return;
	        }
	        setPromiseIsHandledToTrue(writer._readyPromise);
	        writer._readyPromise_reject(reason);
	        writer._readyPromise_resolve = undefined;
	        writer._readyPromise_reject = undefined;
	        writer._readyPromiseState = 'rejected';
	    }
	    function defaultWriterReadyPromiseReset(writer) {
	        defaultWriterReadyPromiseInitialize(writer);
	    }
	    function defaultWriterReadyPromiseResetToRejected(writer, reason) {
	        defaultWriterReadyPromiseInitializeAsRejected(writer, reason);
	    }
	    function defaultWriterReadyPromiseResolve(writer) {
	        if (writer._readyPromise_resolve === undefined) {
	            return;
	        }
	        writer._readyPromise_resolve(undefined);
	        writer._readyPromise_resolve = undefined;
	        writer._readyPromise_reject = undefined;
	        writer._readyPromiseState = 'fulfilled';
	    }

	    /// <reference lib="dom" />
	    const NativeDOMException = typeof DOMException !== 'undefined' ? DOMException : undefined;

	    /// <reference types="node" />
	    function isDOMExceptionConstructor(ctor) {
	        if (!(typeof ctor === 'function' || typeof ctor === 'object')) {
	            return false;
	        }
	        try {
	            new ctor();
	            return true;
	        }
	        catch (_a) {
	            return false;
	        }
	    }
	    function createDOMExceptionPolyfill() {
	        // eslint-disable-next-line no-shadow
	        const ctor = function DOMException(message, name) {
	            this.message = message || '';
	            this.name = name || 'Error';
	            if (Error.captureStackTrace) {
	                Error.captureStackTrace(this, this.constructor);
	            }
	        };
	        ctor.prototype = Object.create(Error.prototype);
	        Object.defineProperty(ctor.prototype, 'constructor', { value: ctor, writable: true, configurable: true });
	        return ctor;
	    }
	    // eslint-disable-next-line no-redeclare
	    const DOMException$1 = isDOMExceptionConstructor(NativeDOMException) ? NativeDOMException : createDOMExceptionPolyfill();

	    function ReadableStreamPipeTo(source, dest, preventClose, preventAbort, preventCancel, signal) {
	        const reader = AcquireReadableStreamDefaultReader(source);
	        const writer = AcquireWritableStreamDefaultWriter(dest);
	        source._disturbed = true;
	        let shuttingDown = false;
	        // This is used to keep track of the spec's requirement that we wait for ongoing writes during shutdown.
	        let currentWrite = promiseResolvedWith(undefined);
	        return newPromise((resolve, reject) => {
	            let abortAlgorithm;
	            if (signal !== undefined) {
	                abortAlgorithm = () => {
	                    const error = new DOMException$1('Aborted', 'AbortError');
	                    const actions = [];
	                    if (!preventAbort) {
	                        actions.push(() => {
	                            if (dest._state === 'writable') {
	                                return WritableStreamAbort(dest, error);
	                            }
	                            return promiseResolvedWith(undefined);
	                        });
	                    }
	                    if (!preventCancel) {
	                        actions.push(() => {
	                            if (source._state === 'readable') {
	                                return ReadableStreamCancel(source, error);
	                            }
	                            return promiseResolvedWith(undefined);
	                        });
	                    }
	                    shutdownWithAction(() => Promise.all(actions.map(action => action())), true, error);
	                };
	                if (signal.aborted) {
	                    abortAlgorithm();
	                    return;
	                }
	                signal.addEventListener('abort', abortAlgorithm);
	            }
	            // Using reader and writer, read all chunks from this and write them to dest
	            // - Backpressure must be enforced
	            // - Shutdown must stop all activity
	            function pipeLoop() {
	                return newPromise((resolveLoop, rejectLoop) => {
	                    function next(done) {
	                        if (done) {
	                            resolveLoop();
	                        }
	                        else {
	                            // Use `PerformPromiseThen` instead of `uponPromise` to avoid
	                            // adding unnecessary `.catch(rethrowAssertionErrorRejection)` handlers
	                            PerformPromiseThen(pipeStep(), next, rejectLoop);
	                        }
	                    }
	                    next(false);
	                });
	            }
	            function pipeStep() {
	                if (shuttingDown) {
	                    return promiseResolvedWith(true);
	                }
	                return PerformPromiseThen(writer._readyPromise, () => {
	                    return newPromise((resolveRead, rejectRead) => {
	                        ReadableStreamDefaultReaderRead(reader, {
	                            _chunkSteps: chunk => {
	                                currentWrite = PerformPromiseThen(WritableStreamDefaultWriterWrite(writer, chunk), undefined, noop);
	                                resolveRead(false);
	                            },
	                            _closeSteps: () => resolveRead(true),
	                            _errorSteps: rejectRead
	                        });
	                    });
	                });
	            }
	            // Errors must be propagated forward
	            isOrBecomesErrored(source, reader._closedPromise, storedError => {
	                if (!preventAbort) {
	                    shutdownWithAction(() => WritableStreamAbort(dest, storedError), true, storedError);
	                }
	                else {
	                    shutdown(true, storedError);
	                }
	            });
	            // Errors must be propagated backward
	            isOrBecomesErrored(dest, writer._closedPromise, storedError => {
	                if (!preventCancel) {
	                    shutdownWithAction(() => ReadableStreamCancel(source, storedError), true, storedError);
	                }
	                else {
	                    shutdown(true, storedError);
	                }
	            });
	            // Closing must be propagated forward
	            isOrBecomesClosed(source, reader._closedPromise, () => {
	                if (!preventClose) {
	                    shutdownWithAction(() => WritableStreamDefaultWriterCloseWithErrorPropagation(writer));
	                }
	                else {
	                    shutdown();
	                }
	            });
	            // Closing must be propagated backward
	            if (WritableStreamCloseQueuedOrInFlight(dest) || dest._state === 'closed') {
	                const destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');
	                if (!preventCancel) {
	                    shutdownWithAction(() => ReadableStreamCancel(source, destClosed), true, destClosed);
	                }
	                else {
	                    shutdown(true, destClosed);
	                }
	            }
	            setPromiseIsHandledToTrue(pipeLoop());
	            function waitForWritesToFinish() {
	                // Another write may have started while we were waiting on this currentWrite, so we have to be sure to wait
	                // for that too.
	                const oldCurrentWrite = currentWrite;
	                return PerformPromiseThen(currentWrite, () => oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined);
	            }
	            function isOrBecomesErrored(stream, promise, action) {
	                if (stream._state === 'errored') {
	                    action(stream._storedError);
	                }
	                else {
	                    uponRejection(promise, action);
	                }
	            }
	            function isOrBecomesClosed(stream, promise, action) {
	                if (stream._state === 'closed') {
	                    action();
	                }
	                else {
	                    uponFulfillment(promise, action);
	                }
	            }
	            function shutdownWithAction(action, originalIsError, originalError) {
	                if (shuttingDown) {
	                    return;
	                }
	                shuttingDown = true;
	                if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
	                    uponFulfillment(waitForWritesToFinish(), doTheRest);
	                }
	                else {
	                    doTheRest();
	                }
	                function doTheRest() {
	                    uponPromise(action(), () => finalize(originalIsError, originalError), newError => finalize(true, newError));
	                }
	            }
	            function shutdown(isError, error) {
	                if (shuttingDown) {
	                    return;
	                }
	                shuttingDown = true;
	                if (dest._state === 'writable' && !WritableStreamCloseQueuedOrInFlight(dest)) {
	                    uponFulfillment(waitForWritesToFinish(), () => finalize(isError, error));
	                }
	                else {
	                    finalize(isError, error);
	                }
	            }
	            function finalize(isError, error) {
	                WritableStreamDefaultWriterRelease(writer);
	                ReadableStreamReaderGenericRelease(reader);
	                if (signal !== undefined) {
	                    signal.removeEventListener('abort', abortAlgorithm);
	                }
	                if (isError) {
	                    reject(error);
	                }
	                else {
	                    resolve(undefined);
	                }
	            }
	        });
	    }

	    /**
	     * Allows control of a {@link ReadableStream | readable stream}'s state and internal queue.
	     *
	     * @public
	     */
	    class ReadableStreamDefaultController {
	        constructor() {
	            throw new TypeError('Illegal constructor');
	        }
	        /**
	         * Returns the desired size to fill the controlled stream's internal queue. It can be negative, if the queue is
	         * over-full. An underlying source ought to use this information to determine when and how to apply backpressure.
	         */
	        get desiredSize() {
	            if (!IsReadableStreamDefaultController(this)) {
	                throw defaultControllerBrandCheckException$1('desiredSize');
	            }
	            return ReadableStreamDefaultControllerGetDesiredSize(this);
	        }
	        /**
	         * Closes the controlled readable stream. Consumers will still be able to read any previously-enqueued chunks from
	         * the stream, but once those are read, the stream will become closed.
	         */
	        close() {
	            if (!IsReadableStreamDefaultController(this)) {
	                throw defaultControllerBrandCheckException$1('close');
	            }
	            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
	                throw new TypeError('The stream is not in a state that permits close');
	            }
	            ReadableStreamDefaultControllerClose(this);
	        }
	        enqueue(chunk = undefined) {
	            if (!IsReadableStreamDefaultController(this)) {
	                throw defaultControllerBrandCheckException$1('enqueue');
	            }
	            if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(this)) {
	                throw new TypeError('The stream is not in a state that permits enqueue');
	            }
	            return ReadableStreamDefaultControllerEnqueue(this, chunk);
	        }
	        /**
	         * Errors the controlled readable stream, making all future interactions with it fail with the given error `e`.
	         */
	        error(e = undefined) {
	            if (!IsReadableStreamDefaultController(this)) {
	                throw defaultControllerBrandCheckException$1('error');
	            }
	            ReadableStreamDefaultControllerError(this, e);
	        }
	        /** @internal */
	        [CancelSteps](reason) {
	            ResetQueue(this);
	            const result = this._cancelAlgorithm(reason);
	            ReadableStreamDefaultControllerClearAlgorithms(this);
	            return result;
	        }
	        /** @internal */
	        [PullSteps](readRequest) {
	            const stream = this._controlledReadableStream;
	            if (this._queue.length > 0) {
	                const chunk = DequeueValue(this);
	                if (this._closeRequested && this._queue.length === 0) {
	                    ReadableStreamDefaultControllerClearAlgorithms(this);
	                    ReadableStreamClose(stream);
	                }
	                else {
	                    ReadableStreamDefaultControllerCallPullIfNeeded(this);
	                }
	                readRequest._chunkSteps(chunk);
	            }
	            else {
	                ReadableStreamAddReadRequest(stream, readRequest);
	                ReadableStreamDefaultControllerCallPullIfNeeded(this);
	            }
	        }
	    }
	    Object.defineProperties(ReadableStreamDefaultController.prototype, {
	        close: { enumerable: true },
	        enqueue: { enumerable: true },
	        error: { enumerable: true },
	        desiredSize: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(ReadableStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
	            value: 'ReadableStreamDefaultController',
	            configurable: true
	        });
	    }
	    // Abstract operations for the ReadableStreamDefaultController.
	    function IsReadableStreamDefaultController(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_controlledReadableStream')) {
	            return false;
	        }
	        return x instanceof ReadableStreamDefaultController;
	    }
	    function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
	        const shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
	        if (!shouldPull) {
	            return;
	        }
	        if (controller._pulling) {
	            controller._pullAgain = true;
	            return;
	        }
	        controller._pulling = true;
	        const pullPromise = controller._pullAlgorithm();
	        uponPromise(pullPromise, () => {
	            controller._pulling = false;
	            if (controller._pullAgain) {
	                controller._pullAgain = false;
	                ReadableStreamDefaultControllerCallPullIfNeeded(controller);
	            }
	        }, e => {
	            ReadableStreamDefaultControllerError(controller, e);
	        });
	    }
	    function ReadableStreamDefaultControllerShouldCallPull(controller) {
	        const stream = controller._controlledReadableStream;
	        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
	            return false;
	        }
	        if (!controller._started) {
	            return false;
	        }
	        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
	            return true;
	        }
	        const desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
	        if (desiredSize > 0) {
	            return true;
	        }
	        return false;
	    }
	    function ReadableStreamDefaultControllerClearAlgorithms(controller) {
	        controller._pullAlgorithm = undefined;
	        controller._cancelAlgorithm = undefined;
	        controller._strategySizeAlgorithm = undefined;
	    }
	    // A client of ReadableStreamDefaultController may use these functions directly to bypass state check.
	    function ReadableStreamDefaultControllerClose(controller) {
	        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
	            return;
	        }
	        const stream = controller._controlledReadableStream;
	        controller._closeRequested = true;
	        if (controller._queue.length === 0) {
	            ReadableStreamDefaultControllerClearAlgorithms(controller);
	            ReadableStreamClose(stream);
	        }
	    }
	    function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
	        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(controller)) {
	            return;
	        }
	        const stream = controller._controlledReadableStream;
	        if (IsReadableStreamLocked(stream) && ReadableStreamGetNumReadRequests(stream) > 0) {
	            ReadableStreamFulfillReadRequest(stream, chunk, false);
	        }
	        else {
	            let chunkSize;
	            try {
	                chunkSize = controller._strategySizeAlgorithm(chunk);
	            }
	            catch (chunkSizeE) {
	                ReadableStreamDefaultControllerError(controller, chunkSizeE);
	                throw chunkSizeE;
	            }
	            try {
	                EnqueueValueWithSize(controller, chunk, chunkSize);
	            }
	            catch (enqueueE) {
	                ReadableStreamDefaultControllerError(controller, enqueueE);
	                throw enqueueE;
	            }
	        }
	        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
	    }
	    function ReadableStreamDefaultControllerError(controller, e) {
	        const stream = controller._controlledReadableStream;
	        if (stream._state !== 'readable') {
	            return;
	        }
	        ResetQueue(controller);
	        ReadableStreamDefaultControllerClearAlgorithms(controller);
	        ReadableStreamError(stream, e);
	    }
	    function ReadableStreamDefaultControllerGetDesiredSize(controller) {
	        const state = controller._controlledReadableStream._state;
	        if (state === 'errored') {
	            return null;
	        }
	        if (state === 'closed') {
	            return 0;
	        }
	        return controller._strategyHWM - controller._queueTotalSize;
	    }
	    // This is used in the implementation of TransformStream.
	    function ReadableStreamDefaultControllerHasBackpressure(controller) {
	        if (ReadableStreamDefaultControllerShouldCallPull(controller)) {
	            return false;
	        }
	        return true;
	    }
	    function ReadableStreamDefaultControllerCanCloseOrEnqueue(controller) {
	        const state = controller._controlledReadableStream._state;
	        if (!controller._closeRequested && state === 'readable') {
	            return true;
	        }
	        return false;
	    }
	    function SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm) {
	        controller._controlledReadableStream = stream;
	        controller._queue = undefined;
	        controller._queueTotalSize = undefined;
	        ResetQueue(controller);
	        controller._started = false;
	        controller._closeRequested = false;
	        controller._pullAgain = false;
	        controller._pulling = false;
	        controller._strategySizeAlgorithm = sizeAlgorithm;
	        controller._strategyHWM = highWaterMark;
	        controller._pullAlgorithm = pullAlgorithm;
	        controller._cancelAlgorithm = cancelAlgorithm;
	        stream._readableStreamController = controller;
	        const startResult = startAlgorithm();
	        uponPromise(promiseResolvedWith(startResult), () => {
	            controller._started = true;
	            ReadableStreamDefaultControllerCallPullIfNeeded(controller);
	        }, r => {
	            ReadableStreamDefaultControllerError(controller, r);
	        });
	    }
	    function SetUpReadableStreamDefaultControllerFromUnderlyingSource(stream, underlyingSource, highWaterMark, sizeAlgorithm) {
	        const controller = Object.create(ReadableStreamDefaultController.prototype);
	        let startAlgorithm = () => undefined;
	        let pullAlgorithm = () => promiseResolvedWith(undefined);
	        let cancelAlgorithm = () => promiseResolvedWith(undefined);
	        if (underlyingSource.start !== undefined) {
	            startAlgorithm = () => underlyingSource.start(controller);
	        }
	        if (underlyingSource.pull !== undefined) {
	            pullAlgorithm = () => underlyingSource.pull(controller);
	        }
	        if (underlyingSource.cancel !== undefined) {
	            cancelAlgorithm = reason => underlyingSource.cancel(reason);
	        }
	        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
	    }
	    // Helper functions for the ReadableStreamDefaultController.
	    function defaultControllerBrandCheckException$1(name) {
	        return new TypeError(`ReadableStreamDefaultController.prototype.${name} can only be used on a ReadableStreamDefaultController`);
	    }

	    function ReadableStreamTee(stream, cloneForBranch2) {
	        if (IsReadableByteStreamController(stream._readableStreamController)) {
	            return ReadableByteStreamTee(stream);
	        }
	        return ReadableStreamDefaultTee(stream);
	    }
	    function ReadableStreamDefaultTee(stream, cloneForBranch2) {
	        const reader = AcquireReadableStreamDefaultReader(stream);
	        let reading = false;
	        let readAgain = false;
	        let canceled1 = false;
	        let canceled2 = false;
	        let reason1;
	        let reason2;
	        let branch1;
	        let branch2;
	        let resolveCancelPromise;
	        const cancelPromise = newPromise(resolve => {
	            resolveCancelPromise = resolve;
	        });
	        function pullAlgorithm() {
	            if (reading) {
	                readAgain = true;
	                return promiseResolvedWith(undefined);
	            }
	            reading = true;
	            const readRequest = {
	                _chunkSteps: chunk => {
	                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
	                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
	                    // successful synchronously-available reads get ahead of asynchronously-available errors.
	                    queueMicrotask(() => {
	                        readAgain = false;
	                        const chunk1 = chunk;
	                        const chunk2 = chunk;
	                        // There is no way to access the cloning code right now in the reference implementation.
	                        // If we add one then we'll need an implementation for serializable objects.
	                        // if (!canceled2 && cloneForBranch2) {
	                        //   chunk2 = StructuredDeserialize(StructuredSerialize(chunk2));
	                        // }
	                        if (!canceled1) {
	                            ReadableStreamDefaultControllerEnqueue(branch1._readableStreamController, chunk1);
	                        }
	                        if (!canceled2) {
	                            ReadableStreamDefaultControllerEnqueue(branch2._readableStreamController, chunk2);
	                        }
	                        reading = false;
	                        if (readAgain) {
	                            pullAlgorithm();
	                        }
	                    });
	                },
	                _closeSteps: () => {
	                    reading = false;
	                    if (!canceled1) {
	                        ReadableStreamDefaultControllerClose(branch1._readableStreamController);
	                    }
	                    if (!canceled2) {
	                        ReadableStreamDefaultControllerClose(branch2._readableStreamController);
	                    }
	                    if (!canceled1 || !canceled2) {
	                        resolveCancelPromise(undefined);
	                    }
	                },
	                _errorSteps: () => {
	                    reading = false;
	                }
	            };
	            ReadableStreamDefaultReaderRead(reader, readRequest);
	            return promiseResolvedWith(undefined);
	        }
	        function cancel1Algorithm(reason) {
	            canceled1 = true;
	            reason1 = reason;
	            if (canceled2) {
	                const compositeReason = CreateArrayFromList([reason1, reason2]);
	                const cancelResult = ReadableStreamCancel(stream, compositeReason);
	                resolveCancelPromise(cancelResult);
	            }
	            return cancelPromise;
	        }
	        function cancel2Algorithm(reason) {
	            canceled2 = true;
	            reason2 = reason;
	            if (canceled1) {
	                const compositeReason = CreateArrayFromList([reason1, reason2]);
	                const cancelResult = ReadableStreamCancel(stream, compositeReason);
	                resolveCancelPromise(cancelResult);
	            }
	            return cancelPromise;
	        }
	        function startAlgorithm() {
	            // do nothing
	        }
	        branch1 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel1Algorithm);
	        branch2 = CreateReadableStream(startAlgorithm, pullAlgorithm, cancel2Algorithm);
	        uponRejection(reader._closedPromise, (r) => {
	            ReadableStreamDefaultControllerError(branch1._readableStreamController, r);
	            ReadableStreamDefaultControllerError(branch2._readableStreamController, r);
	            if (!canceled1 || !canceled2) {
	                resolveCancelPromise(undefined);
	            }
	        });
	        return [branch1, branch2];
	    }
	    function ReadableByteStreamTee(stream) {
	        let reader = AcquireReadableStreamDefaultReader(stream);
	        let reading = false;
	        let readAgainForBranch1 = false;
	        let readAgainForBranch2 = false;
	        let canceled1 = false;
	        let canceled2 = false;
	        let reason1;
	        let reason2;
	        let branch1;
	        let branch2;
	        let resolveCancelPromise;
	        const cancelPromise = newPromise(resolve => {
	            resolveCancelPromise = resolve;
	        });
	        function forwardReaderError(thisReader) {
	            uponRejection(thisReader._closedPromise, r => {
	                if (thisReader !== reader) {
	                    return;
	                }
	                ReadableByteStreamControllerError(branch1._readableStreamController, r);
	                ReadableByteStreamControllerError(branch2._readableStreamController, r);
	                if (!canceled1 || !canceled2) {
	                    resolveCancelPromise(undefined);
	                }
	            });
	        }
	        function pullWithDefaultReader() {
	            if (IsReadableStreamBYOBReader(reader)) {
	                ReadableStreamReaderGenericRelease(reader);
	                reader = AcquireReadableStreamDefaultReader(stream);
	                forwardReaderError(reader);
	            }
	            const readRequest = {
	                _chunkSteps: chunk => {
	                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
	                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
	                    // successful synchronously-available reads get ahead of asynchronously-available errors.
	                    queueMicrotask(() => {
	                        readAgainForBranch1 = false;
	                        readAgainForBranch2 = false;
	                        const chunk1 = chunk;
	                        let chunk2 = chunk;
	                        if (!canceled1 && !canceled2) {
	                            try {
	                                chunk2 = CloneAsUint8Array(chunk);
	                            }
	                            catch (cloneE) {
	                                ReadableByteStreamControllerError(branch1._readableStreamController, cloneE);
	                                ReadableByteStreamControllerError(branch2._readableStreamController, cloneE);
	                                resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
	                                return;
	                            }
	                        }
	                        if (!canceled1) {
	                            ReadableByteStreamControllerEnqueue(branch1._readableStreamController, chunk1);
	                        }
	                        if (!canceled2) {
	                            ReadableByteStreamControllerEnqueue(branch2._readableStreamController, chunk2);
	                        }
	                        reading = false;
	                        if (readAgainForBranch1) {
	                            pull1Algorithm();
	                        }
	                        else if (readAgainForBranch2) {
	                            pull2Algorithm();
	                        }
	                    });
	                },
	                _closeSteps: () => {
	                    reading = false;
	                    if (!canceled1) {
	                        ReadableByteStreamControllerClose(branch1._readableStreamController);
	                    }
	                    if (!canceled2) {
	                        ReadableByteStreamControllerClose(branch2._readableStreamController);
	                    }
	                    if (branch1._readableStreamController._pendingPullIntos.length > 0) {
	                        ReadableByteStreamControllerRespond(branch1._readableStreamController, 0);
	                    }
	                    if (branch2._readableStreamController._pendingPullIntos.length > 0) {
	                        ReadableByteStreamControllerRespond(branch2._readableStreamController, 0);
	                    }
	                    if (!canceled1 || !canceled2) {
	                        resolveCancelPromise(undefined);
	                    }
	                },
	                _errorSteps: () => {
	                    reading = false;
	                }
	            };
	            ReadableStreamDefaultReaderRead(reader, readRequest);
	        }
	        function pullWithBYOBReader(view, forBranch2) {
	            if (IsReadableStreamDefaultReader(reader)) {
	                ReadableStreamReaderGenericRelease(reader);
	                reader = AcquireReadableStreamBYOBReader(stream);
	                forwardReaderError(reader);
	            }
	            const byobBranch = forBranch2 ? branch2 : branch1;
	            const otherBranch = forBranch2 ? branch1 : branch2;
	            const readIntoRequest = {
	                _chunkSteps: chunk => {
	                    // This needs to be delayed a microtask because it takes at least a microtask to detect errors (using
	                    // reader._closedPromise below), and we want errors in stream to error both branches immediately. We cannot let
	                    // successful synchronously-available reads get ahead of asynchronously-available errors.
	                    queueMicrotask(() => {
	                        readAgainForBranch1 = false;
	                        readAgainForBranch2 = false;
	                        const byobCanceled = forBranch2 ? canceled2 : canceled1;
	                        const otherCanceled = forBranch2 ? canceled1 : canceled2;
	                        if (!otherCanceled) {
	                            let clonedChunk;
	                            try {
	                                clonedChunk = CloneAsUint8Array(chunk);
	                            }
	                            catch (cloneE) {
	                                ReadableByteStreamControllerError(byobBranch._readableStreamController, cloneE);
	                                ReadableByteStreamControllerError(otherBranch._readableStreamController, cloneE);
	                                resolveCancelPromise(ReadableStreamCancel(stream, cloneE));
	                                return;
	                            }
	                            if (!byobCanceled) {
	                                ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
	                            }
	                            ReadableByteStreamControllerEnqueue(otherBranch._readableStreamController, clonedChunk);
	                        }
	                        else if (!byobCanceled) {
	                            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
	                        }
	                        reading = false;
	                        if (readAgainForBranch1) {
	                            pull1Algorithm();
	                        }
	                        else if (readAgainForBranch2) {
	                            pull2Algorithm();
	                        }
	                    });
	                },
	                _closeSteps: chunk => {
	                    reading = false;
	                    const byobCanceled = forBranch2 ? canceled2 : canceled1;
	                    const otherCanceled = forBranch2 ? canceled1 : canceled2;
	                    if (!byobCanceled) {
	                        ReadableByteStreamControllerClose(byobBranch._readableStreamController);
	                    }
	                    if (!otherCanceled) {
	                        ReadableByteStreamControllerClose(otherBranch._readableStreamController);
	                    }
	                    if (chunk !== undefined) {
	                        if (!byobCanceled) {
	                            ReadableByteStreamControllerRespondWithNewView(byobBranch._readableStreamController, chunk);
	                        }
	                        if (!otherCanceled && otherBranch._readableStreamController._pendingPullIntos.length > 0) {
	                            ReadableByteStreamControllerRespond(otherBranch._readableStreamController, 0);
	                        }
	                    }
	                    if (!byobCanceled || !otherCanceled) {
	                        resolveCancelPromise(undefined);
	                    }
	                },
	                _errorSteps: () => {
	                    reading = false;
	                }
	            };
	            ReadableStreamBYOBReaderRead(reader, view, readIntoRequest);
	        }
	        function pull1Algorithm() {
	            if (reading) {
	                readAgainForBranch1 = true;
	                return promiseResolvedWith(undefined);
	            }
	            reading = true;
	            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch1._readableStreamController);
	            if (byobRequest === null) {
	                pullWithDefaultReader();
	            }
	            else {
	                pullWithBYOBReader(byobRequest._view, false);
	            }
	            return promiseResolvedWith(undefined);
	        }
	        function pull2Algorithm() {
	            if (reading) {
	                readAgainForBranch2 = true;
	                return promiseResolvedWith(undefined);
	            }
	            reading = true;
	            const byobRequest = ReadableByteStreamControllerGetBYOBRequest(branch2._readableStreamController);
	            if (byobRequest === null) {
	                pullWithDefaultReader();
	            }
	            else {
	                pullWithBYOBReader(byobRequest._view, true);
	            }
	            return promiseResolvedWith(undefined);
	        }
	        function cancel1Algorithm(reason) {
	            canceled1 = true;
	            reason1 = reason;
	            if (canceled2) {
	                const compositeReason = CreateArrayFromList([reason1, reason2]);
	                const cancelResult = ReadableStreamCancel(stream, compositeReason);
	                resolveCancelPromise(cancelResult);
	            }
	            return cancelPromise;
	        }
	        function cancel2Algorithm(reason) {
	            canceled2 = true;
	            reason2 = reason;
	            if (canceled1) {
	                const compositeReason = CreateArrayFromList([reason1, reason2]);
	                const cancelResult = ReadableStreamCancel(stream, compositeReason);
	                resolveCancelPromise(cancelResult);
	            }
	            return cancelPromise;
	        }
	        function startAlgorithm() {
	            return;
	        }
	        branch1 = CreateReadableByteStream(startAlgorithm, pull1Algorithm, cancel1Algorithm);
	        branch2 = CreateReadableByteStream(startAlgorithm, pull2Algorithm, cancel2Algorithm);
	        forwardReaderError(reader);
	        return [branch1, branch2];
	    }

	    function convertUnderlyingDefaultOrByteSource(source, context) {
	        assertDictionary(source, context);
	        const original = source;
	        const autoAllocateChunkSize = original === null || original === void 0 ? void 0 : original.autoAllocateChunkSize;
	        const cancel = original === null || original === void 0 ? void 0 : original.cancel;
	        const pull = original === null || original === void 0 ? void 0 : original.pull;
	        const start = original === null || original === void 0 ? void 0 : original.start;
	        const type = original === null || original === void 0 ? void 0 : original.type;
	        return {
	            autoAllocateChunkSize: autoAllocateChunkSize === undefined ?
	                undefined :
	                convertUnsignedLongLongWithEnforceRange(autoAllocateChunkSize, `${context} has member 'autoAllocateChunkSize' that`),
	            cancel: cancel === undefined ?
	                undefined :
	                convertUnderlyingSourceCancelCallback(cancel, original, `${context} has member 'cancel' that`),
	            pull: pull === undefined ?
	                undefined :
	                convertUnderlyingSourcePullCallback(pull, original, `${context} has member 'pull' that`),
	            start: start === undefined ?
	                undefined :
	                convertUnderlyingSourceStartCallback(start, original, `${context} has member 'start' that`),
	            type: type === undefined ? undefined : convertReadableStreamType(type, `${context} has member 'type' that`)
	        };
	    }
	    function convertUnderlyingSourceCancelCallback(fn, original, context) {
	        assertFunction(fn, context);
	        return (reason) => promiseCall(fn, original, [reason]);
	    }
	    function convertUnderlyingSourcePullCallback(fn, original, context) {
	        assertFunction(fn, context);
	        return (controller) => promiseCall(fn, original, [controller]);
	    }
	    function convertUnderlyingSourceStartCallback(fn, original, context) {
	        assertFunction(fn, context);
	        return (controller) => reflectCall(fn, original, [controller]);
	    }
	    function convertReadableStreamType(type, context) {
	        type = `${type}`;
	        if (type !== 'bytes') {
	            throw new TypeError(`${context} '${type}' is not a valid enumeration value for ReadableStreamType`);
	        }
	        return type;
	    }

	    function convertReaderOptions(options, context) {
	        assertDictionary(options, context);
	        const mode = options === null || options === void 0 ? void 0 : options.mode;
	        return {
	            mode: mode === undefined ? undefined : convertReadableStreamReaderMode(mode, `${context} has member 'mode' that`)
	        };
	    }
	    function convertReadableStreamReaderMode(mode, context) {
	        mode = `${mode}`;
	        if (mode !== 'byob') {
	            throw new TypeError(`${context} '${mode}' is not a valid enumeration value for ReadableStreamReaderMode`);
	        }
	        return mode;
	    }

	    function convertIteratorOptions(options, context) {
	        assertDictionary(options, context);
	        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
	        return { preventCancel: Boolean(preventCancel) };
	    }

	    function convertPipeOptions(options, context) {
	        assertDictionary(options, context);
	        const preventAbort = options === null || options === void 0 ? void 0 : options.preventAbort;
	        const preventCancel = options === null || options === void 0 ? void 0 : options.preventCancel;
	        const preventClose = options === null || options === void 0 ? void 0 : options.preventClose;
	        const signal = options === null || options === void 0 ? void 0 : options.signal;
	        if (signal !== undefined) {
	            assertAbortSignal(signal, `${context} has member 'signal' that`);
	        }
	        return {
	            preventAbort: Boolean(preventAbort),
	            preventCancel: Boolean(preventCancel),
	            preventClose: Boolean(preventClose),
	            signal
	        };
	    }
	    function assertAbortSignal(signal, context) {
	        if (!isAbortSignal(signal)) {
	            throw new TypeError(`${context} is not an AbortSignal.`);
	        }
	    }

	    function convertReadableWritablePair(pair, context) {
	        assertDictionary(pair, context);
	        const readable = pair === null || pair === void 0 ? void 0 : pair.readable;
	        assertRequiredField(readable, 'readable', 'ReadableWritablePair');
	        assertReadableStream(readable, `${context} has member 'readable' that`);
	        const writable = pair === null || pair === void 0 ? void 0 : pair.writable;
	        assertRequiredField(writable, 'writable', 'ReadableWritablePair');
	        assertWritableStream(writable, `${context} has member 'writable' that`);
	        return { readable, writable };
	    }

	    /**
	     * A readable stream represents a source of data, from which you can read.
	     *
	     * @public
	     */
	    class ReadableStream {
	        constructor(rawUnderlyingSource = {}, rawStrategy = {}) {
	            if (rawUnderlyingSource === undefined) {
	                rawUnderlyingSource = null;
	            }
	            else {
	                assertObject(rawUnderlyingSource, 'First parameter');
	            }
	            const strategy = convertQueuingStrategy(rawStrategy, 'Second parameter');
	            const underlyingSource = convertUnderlyingDefaultOrByteSource(rawUnderlyingSource, 'First parameter');
	            InitializeReadableStream(this);
	            if (underlyingSource.type === 'bytes') {
	                if (strategy.size !== undefined) {
	                    throw new RangeError('The strategy for a byte stream cannot have a size function');
	                }
	                const highWaterMark = ExtractHighWaterMark(strategy, 0);
	                SetUpReadableByteStreamControllerFromUnderlyingSource(this, underlyingSource, highWaterMark);
	            }
	            else {
	                const sizeAlgorithm = ExtractSizeAlgorithm(strategy);
	                const highWaterMark = ExtractHighWaterMark(strategy, 1);
	                SetUpReadableStreamDefaultControllerFromUnderlyingSource(this, underlyingSource, highWaterMark, sizeAlgorithm);
	            }
	        }
	        /**
	         * Whether or not the readable stream is locked to a {@link ReadableStreamDefaultReader | reader}.
	         */
	        get locked() {
	            if (!IsReadableStream(this)) {
	                throw streamBrandCheckException$1('locked');
	            }
	            return IsReadableStreamLocked(this);
	        }
	        /**
	         * Cancels the stream, signaling a loss of interest in the stream by a consumer.
	         *
	         * The supplied `reason` argument will be given to the underlying source's {@link UnderlyingSource.cancel | cancel()}
	         * method, which might or might not use it.
	         */
	        cancel(reason = undefined) {
	            if (!IsReadableStream(this)) {
	                return promiseRejectedWith(streamBrandCheckException$1('cancel'));
	            }
	            if (IsReadableStreamLocked(this)) {
	                return promiseRejectedWith(new TypeError('Cannot cancel a stream that already has a reader'));
	            }
	            return ReadableStreamCancel(this, reason);
	        }
	        getReader(rawOptions = undefined) {
	            if (!IsReadableStream(this)) {
	                throw streamBrandCheckException$1('getReader');
	            }
	            const options = convertReaderOptions(rawOptions, 'First parameter');
	            if (options.mode === undefined) {
	                return AcquireReadableStreamDefaultReader(this);
	            }
	            return AcquireReadableStreamBYOBReader(this);
	        }
	        pipeThrough(rawTransform, rawOptions = {}) {
	            if (!IsReadableStream(this)) {
	                throw streamBrandCheckException$1('pipeThrough');
	            }
	            assertRequiredArgument(rawTransform, 1, 'pipeThrough');
	            const transform = convertReadableWritablePair(rawTransform, 'First parameter');
	            const options = convertPipeOptions(rawOptions, 'Second parameter');
	            if (IsReadableStreamLocked(this)) {
	                throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream');
	            }
	            if (IsWritableStreamLocked(transform.writable)) {
	                throw new TypeError('ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream');
	            }
	            const promise = ReadableStreamPipeTo(this, transform.writable, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
	            setPromiseIsHandledToTrue(promise);
	            return transform.readable;
	        }
	        pipeTo(destination, rawOptions = {}) {
	            if (!IsReadableStream(this)) {
	                return promiseRejectedWith(streamBrandCheckException$1('pipeTo'));
	            }
	            if (destination === undefined) {
	                return promiseRejectedWith(`Parameter 1 is required in 'pipeTo'.`);
	            }
	            if (!IsWritableStream(destination)) {
	                return promiseRejectedWith(new TypeError(`ReadableStream.prototype.pipeTo's first argument must be a WritableStream`));
	            }
	            let options;
	            try {
	                options = convertPipeOptions(rawOptions, 'Second parameter');
	            }
	            catch (e) {
	                return promiseRejectedWith(e);
	            }
	            if (IsReadableStreamLocked(this)) {
	                return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
	            }
	            if (IsWritableStreamLocked(destination)) {
	                return promiseRejectedWith(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
	            }
	            return ReadableStreamPipeTo(this, destination, options.preventClose, options.preventAbort, options.preventCancel, options.signal);
	        }
	        /**
	         * Tees this readable stream, returning a two-element array containing the two resulting branches as
	         * new {@link ReadableStream} instances.
	         *
	         * Teeing a stream will lock it, preventing any other consumer from acquiring a reader.
	         * To cancel the stream, cancel both of the resulting branches; a composite cancellation reason will then be
	         * propagated to the stream's underlying source.
	         *
	         * Note that the chunks seen in each branch will be the same object. If the chunks are not immutable,
	         * this could allow interference between the two branches.
	         */
	        tee() {
	            if (!IsReadableStream(this)) {
	                throw streamBrandCheckException$1('tee');
	            }
	            const branches = ReadableStreamTee(this);
	            return CreateArrayFromList(branches);
	        }
	        values(rawOptions = undefined) {
	            if (!IsReadableStream(this)) {
	                throw streamBrandCheckException$1('values');
	            }
	            const options = convertIteratorOptions(rawOptions, 'First parameter');
	            return AcquireReadableStreamAsyncIterator(this, options.preventCancel);
	        }
	    }
	    Object.defineProperties(ReadableStream.prototype, {
	        cancel: { enumerable: true },
	        getReader: { enumerable: true },
	        pipeThrough: { enumerable: true },
	        pipeTo: { enumerable: true },
	        tee: { enumerable: true },
	        values: { enumerable: true },
	        locked: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.toStringTag, {
	            value: 'ReadableStream',
	            configurable: true
	        });
	    }
	    if (typeof SymbolPolyfill.asyncIterator === 'symbol') {
	        Object.defineProperty(ReadableStream.prototype, SymbolPolyfill.asyncIterator, {
	            value: ReadableStream.prototype.values,
	            writable: true,
	            configurable: true
	        });
	    }
	    // Abstract operations for the ReadableStream.
	    // Throws if and only if startAlgorithm throws.
	    function CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark = 1, sizeAlgorithm = () => 1) {
	        const stream = Object.create(ReadableStream.prototype);
	        InitializeReadableStream(stream);
	        const controller = Object.create(ReadableStreamDefaultController.prototype);
	        SetUpReadableStreamDefaultController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, highWaterMark, sizeAlgorithm);
	        return stream;
	    }
	    // Throws if and only if startAlgorithm throws.
	    function CreateReadableByteStream(startAlgorithm, pullAlgorithm, cancelAlgorithm) {
	        const stream = Object.create(ReadableStream.prototype);
	        InitializeReadableStream(stream);
	        const controller = Object.create(ReadableByteStreamController.prototype);
	        SetUpReadableByteStreamController(stream, controller, startAlgorithm, pullAlgorithm, cancelAlgorithm, 0, undefined);
	        return stream;
	    }
	    function InitializeReadableStream(stream) {
	        stream._state = 'readable';
	        stream._reader = undefined;
	        stream._storedError = undefined;
	        stream._disturbed = false;
	    }
	    function IsReadableStream(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
	            return false;
	        }
	        return x instanceof ReadableStream;
	    }
	    function IsReadableStreamLocked(stream) {
	        if (stream._reader === undefined) {
	            return false;
	        }
	        return true;
	    }
	    // ReadableStream API exposed for controllers.
	    function ReadableStreamCancel(stream, reason) {
	        stream._disturbed = true;
	        if (stream._state === 'closed') {
	            return promiseResolvedWith(undefined);
	        }
	        if (stream._state === 'errored') {
	            return promiseRejectedWith(stream._storedError);
	        }
	        ReadableStreamClose(stream);
	        const reader = stream._reader;
	        if (reader !== undefined && IsReadableStreamBYOBReader(reader)) {
	            reader._readIntoRequests.forEach(readIntoRequest => {
	                readIntoRequest._closeSteps(undefined);
	            });
	            reader._readIntoRequests = new SimpleQueue();
	        }
	        const sourceCancelPromise = stream._readableStreamController[CancelSteps](reason);
	        return transformPromiseWith(sourceCancelPromise, noop);
	    }
	    function ReadableStreamClose(stream) {
	        stream._state = 'closed';
	        const reader = stream._reader;
	        if (reader === undefined) {
	            return;
	        }
	        defaultReaderClosedPromiseResolve(reader);
	        if (IsReadableStreamDefaultReader(reader)) {
	            reader._readRequests.forEach(readRequest => {
	                readRequest._closeSteps();
	            });
	            reader._readRequests = new SimpleQueue();
	        }
	    }
	    function ReadableStreamError(stream, e) {
	        stream._state = 'errored';
	        stream._storedError = e;
	        const reader = stream._reader;
	        if (reader === undefined) {
	            return;
	        }
	        defaultReaderClosedPromiseReject(reader, e);
	        if (IsReadableStreamDefaultReader(reader)) {
	            reader._readRequests.forEach(readRequest => {
	                readRequest._errorSteps(e);
	            });
	            reader._readRequests = new SimpleQueue();
	        }
	        else {
	            reader._readIntoRequests.forEach(readIntoRequest => {
	                readIntoRequest._errorSteps(e);
	            });
	            reader._readIntoRequests = new SimpleQueue();
	        }
	    }
	    // Helper functions for the ReadableStream.
	    function streamBrandCheckException$1(name) {
	        return new TypeError(`ReadableStream.prototype.${name} can only be used on a ReadableStream`);
	    }

	    function convertQueuingStrategyInit(init, context) {
	        assertDictionary(init, context);
	        const highWaterMark = init === null || init === void 0 ? void 0 : init.highWaterMark;
	        assertRequiredField(highWaterMark, 'highWaterMark', 'QueuingStrategyInit');
	        return {
	            highWaterMark: convertUnrestrictedDouble(highWaterMark)
	        };
	    }

	    // The size function must not have a prototype property nor be a constructor
	    const byteLengthSizeFunction = (chunk) => {
	        return chunk.byteLength;
	    };
	    try {
	        Object.defineProperty(byteLengthSizeFunction, 'name', {
	            value: 'size',
	            configurable: true
	        });
	    }
	    catch (_a) {
	        // This property is non-configurable in older browsers, so ignore if this throws.
	        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
	    }
	    /**
	     * A queuing strategy that counts the number of bytes in each chunk.
	     *
	     * @public
	     */
	    class ByteLengthQueuingStrategy {
	        constructor(options) {
	            assertRequiredArgument(options, 1, 'ByteLengthQueuingStrategy');
	            options = convertQueuingStrategyInit(options, 'First parameter');
	            this._byteLengthQueuingStrategyHighWaterMark = options.highWaterMark;
	        }
	        /**
	         * Returns the high water mark provided to the constructor.
	         */
	        get highWaterMark() {
	            if (!IsByteLengthQueuingStrategy(this)) {
	                throw byteLengthBrandCheckException('highWaterMark');
	            }
	            return this._byteLengthQueuingStrategyHighWaterMark;
	        }
	        /**
	         * Measures the size of `chunk` by returning the value of its `byteLength` property.
	         */
	        get size() {
	            if (!IsByteLengthQueuingStrategy(this)) {
	                throw byteLengthBrandCheckException('size');
	            }
	            return byteLengthSizeFunction;
	        }
	    }
	    Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
	        highWaterMark: { enumerable: true },
	        size: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(ByteLengthQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
	            value: 'ByteLengthQueuingStrategy',
	            configurable: true
	        });
	    }
	    // Helper functions for the ByteLengthQueuingStrategy.
	    function byteLengthBrandCheckException(name) {
	        return new TypeError(`ByteLengthQueuingStrategy.prototype.${name} can only be used on a ByteLengthQueuingStrategy`);
	    }
	    function IsByteLengthQueuingStrategy(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_byteLengthQueuingStrategyHighWaterMark')) {
	            return false;
	        }
	        return x instanceof ByteLengthQueuingStrategy;
	    }

	    // The size function must not have a prototype property nor be a constructor
	    const countSizeFunction = () => {
	        return 1;
	    };
	    try {
	        Object.defineProperty(countSizeFunction, 'name', {
	            value: 'size',
	            configurable: true
	        });
	    }
	    catch (_a) {
	        // This property is non-configurable in older browsers, so ignore if this throws.
	        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#browser_compatibility
	    }
	    /**
	     * A queuing strategy that counts the number of chunks.
	     *
	     * @public
	     */
	    class CountQueuingStrategy {
	        constructor(options) {
	            assertRequiredArgument(options, 1, 'CountQueuingStrategy');
	            options = convertQueuingStrategyInit(options, 'First parameter');
	            this._countQueuingStrategyHighWaterMark = options.highWaterMark;
	        }
	        /**
	         * Returns the high water mark provided to the constructor.
	         */
	        get highWaterMark() {
	            if (!IsCountQueuingStrategy(this)) {
	                throw countBrandCheckException('highWaterMark');
	            }
	            return this._countQueuingStrategyHighWaterMark;
	        }
	        /**
	         * Measures the size of `chunk` by always returning 1.
	         * This ensures that the total queue size is a count of the number of chunks in the queue.
	         */
	        get size() {
	            if (!IsCountQueuingStrategy(this)) {
	                throw countBrandCheckException('size');
	            }
	            return countSizeFunction;
	        }
	    }
	    Object.defineProperties(CountQueuingStrategy.prototype, {
	        highWaterMark: { enumerable: true },
	        size: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(CountQueuingStrategy.prototype, SymbolPolyfill.toStringTag, {
	            value: 'CountQueuingStrategy',
	            configurable: true
	        });
	    }
	    // Helper functions for the CountQueuingStrategy.
	    function countBrandCheckException(name) {
	        return new TypeError(`CountQueuingStrategy.prototype.${name} can only be used on a CountQueuingStrategy`);
	    }
	    function IsCountQueuingStrategy(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_countQueuingStrategyHighWaterMark')) {
	            return false;
	        }
	        return x instanceof CountQueuingStrategy;
	    }

	    function convertTransformer(original, context) {
	        assertDictionary(original, context);
	        const flush = original === null || original === void 0 ? void 0 : original.flush;
	        const readableType = original === null || original === void 0 ? void 0 : original.readableType;
	        const start = original === null || original === void 0 ? void 0 : original.start;
	        const transform = original === null || original === void 0 ? void 0 : original.transform;
	        const writableType = original === null || original === void 0 ? void 0 : original.writableType;
	        return {
	            flush: flush === undefined ?
	                undefined :
	                convertTransformerFlushCallback(flush, original, `${context} has member 'flush' that`),
	            readableType,
	            start: start === undefined ?
	                undefined :
	                convertTransformerStartCallback(start, original, `${context} has member 'start' that`),
	            transform: transform === undefined ?
	                undefined :
	                convertTransformerTransformCallback(transform, original, `${context} has member 'transform' that`),
	            writableType
	        };
	    }
	    function convertTransformerFlushCallback(fn, original, context) {
	        assertFunction(fn, context);
	        return (controller) => promiseCall(fn, original, [controller]);
	    }
	    function convertTransformerStartCallback(fn, original, context) {
	        assertFunction(fn, context);
	        return (controller) => reflectCall(fn, original, [controller]);
	    }
	    function convertTransformerTransformCallback(fn, original, context) {
	        assertFunction(fn, context);
	        return (chunk, controller) => promiseCall(fn, original, [chunk, controller]);
	    }

	    // Class TransformStream
	    /**
	     * A transform stream consists of a pair of streams: a {@link WritableStream | writable stream},
	     * known as its writable side, and a {@link ReadableStream | readable stream}, known as its readable side.
	     * In a manner specific to the transform stream in question, writes to the writable side result in new data being
	     * made available for reading from the readable side.
	     *
	     * @public
	     */
	    class TransformStream {
	        constructor(rawTransformer = {}, rawWritableStrategy = {}, rawReadableStrategy = {}) {
	            if (rawTransformer === undefined) {
	                rawTransformer = null;
	            }
	            const writableStrategy = convertQueuingStrategy(rawWritableStrategy, 'Second parameter');
	            const readableStrategy = convertQueuingStrategy(rawReadableStrategy, 'Third parameter');
	            const transformer = convertTransformer(rawTransformer, 'First parameter');
	            if (transformer.readableType !== undefined) {
	                throw new RangeError('Invalid readableType specified');
	            }
	            if (transformer.writableType !== undefined) {
	                throw new RangeError('Invalid writableType specified');
	            }
	            const readableHighWaterMark = ExtractHighWaterMark(readableStrategy, 0);
	            const readableSizeAlgorithm = ExtractSizeAlgorithm(readableStrategy);
	            const writableHighWaterMark = ExtractHighWaterMark(writableStrategy, 1);
	            const writableSizeAlgorithm = ExtractSizeAlgorithm(writableStrategy);
	            let startPromise_resolve;
	            const startPromise = newPromise(resolve => {
	                startPromise_resolve = resolve;
	            });
	            InitializeTransformStream(this, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
	            SetUpTransformStreamDefaultControllerFromTransformer(this, transformer);
	            if (transformer.start !== undefined) {
	                startPromise_resolve(transformer.start(this._transformStreamController));
	            }
	            else {
	                startPromise_resolve(undefined);
	            }
	        }
	        /**
	         * The readable side of the transform stream.
	         */
	        get readable() {
	            if (!IsTransformStream(this)) {
	                throw streamBrandCheckException('readable');
	            }
	            return this._readable;
	        }
	        /**
	         * The writable side of the transform stream.
	         */
	        get writable() {
	            if (!IsTransformStream(this)) {
	                throw streamBrandCheckException('writable');
	            }
	            return this._writable;
	        }
	    }
	    Object.defineProperties(TransformStream.prototype, {
	        readable: { enumerable: true },
	        writable: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(TransformStream.prototype, SymbolPolyfill.toStringTag, {
	            value: 'TransformStream',
	            configurable: true
	        });
	    }
	    function InitializeTransformStream(stream, startPromise, writableHighWaterMark, writableSizeAlgorithm, readableHighWaterMark, readableSizeAlgorithm) {
	        function startAlgorithm() {
	            return startPromise;
	        }
	        function writeAlgorithm(chunk) {
	            return TransformStreamDefaultSinkWriteAlgorithm(stream, chunk);
	        }
	        function abortAlgorithm(reason) {
	            return TransformStreamDefaultSinkAbortAlgorithm(stream, reason);
	        }
	        function closeAlgorithm() {
	            return TransformStreamDefaultSinkCloseAlgorithm(stream);
	        }
	        stream._writable = CreateWritableStream(startAlgorithm, writeAlgorithm, closeAlgorithm, abortAlgorithm, writableHighWaterMark, writableSizeAlgorithm);
	        function pullAlgorithm() {
	            return TransformStreamDefaultSourcePullAlgorithm(stream);
	        }
	        function cancelAlgorithm(reason) {
	            TransformStreamErrorWritableAndUnblockWrite(stream, reason);
	            return promiseResolvedWith(undefined);
	        }
	        stream._readable = CreateReadableStream(startAlgorithm, pullAlgorithm, cancelAlgorithm, readableHighWaterMark, readableSizeAlgorithm);
	        // The [[backpressure]] slot is set to undefined so that it can be initialised by TransformStreamSetBackpressure.
	        stream._backpressure = undefined;
	        stream._backpressureChangePromise = undefined;
	        stream._backpressureChangePromise_resolve = undefined;
	        TransformStreamSetBackpressure(stream, true);
	        stream._transformStreamController = undefined;
	    }
	    function IsTransformStream(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
	            return false;
	        }
	        return x instanceof TransformStream;
	    }
	    // This is a no-op if both sides are already errored.
	    function TransformStreamError(stream, e) {
	        ReadableStreamDefaultControllerError(stream._readable._readableStreamController, e);
	        TransformStreamErrorWritableAndUnblockWrite(stream, e);
	    }
	    function TransformStreamErrorWritableAndUnblockWrite(stream, e) {
	        TransformStreamDefaultControllerClearAlgorithms(stream._transformStreamController);
	        WritableStreamDefaultControllerErrorIfNeeded(stream._writable._writableStreamController, e);
	        if (stream._backpressure) {
	            // Pretend that pull() was called to permit any pending write() calls to complete. TransformStreamSetBackpressure()
	            // cannot be called from enqueue() or pull() once the ReadableStream is errored, so this will will be the final time
	            // _backpressure is set.
	            TransformStreamSetBackpressure(stream, false);
	        }
	    }
	    function TransformStreamSetBackpressure(stream, backpressure) {
	        // Passes also when called during construction.
	        if (stream._backpressureChangePromise !== undefined) {
	            stream._backpressureChangePromise_resolve();
	        }
	        stream._backpressureChangePromise = newPromise(resolve => {
	            stream._backpressureChangePromise_resolve = resolve;
	        });
	        stream._backpressure = backpressure;
	    }
	    // Class TransformStreamDefaultController
	    /**
	     * Allows control of the {@link ReadableStream} and {@link WritableStream} of the associated {@link TransformStream}.
	     *
	     * @public
	     */
	    class TransformStreamDefaultController {
	        constructor() {
	            throw new TypeError('Illegal constructor');
	        }
	        /**
	         * Returns the desired size to fill the readable side’s internal queue. It can be negative, if the queue is over-full.
	         */
	        get desiredSize() {
	            if (!IsTransformStreamDefaultController(this)) {
	                throw defaultControllerBrandCheckException('desiredSize');
	            }
	            const readableController = this._controlledTransformStream._readable._readableStreamController;
	            return ReadableStreamDefaultControllerGetDesiredSize(readableController);
	        }
	        enqueue(chunk = undefined) {
	            if (!IsTransformStreamDefaultController(this)) {
	                throw defaultControllerBrandCheckException('enqueue');
	            }
	            TransformStreamDefaultControllerEnqueue(this, chunk);
	        }
	        /**
	         * Errors both the readable side and the writable side of the controlled transform stream, making all future
	         * interactions with it fail with the given error `e`. Any chunks queued for transformation will be discarded.
	         */
	        error(reason = undefined) {
	            if (!IsTransformStreamDefaultController(this)) {
	                throw defaultControllerBrandCheckException('error');
	            }
	            TransformStreamDefaultControllerError(this, reason);
	        }
	        /**
	         * Closes the readable side and errors the writable side of the controlled transform stream. This is useful when the
	         * transformer only needs to consume a portion of the chunks written to the writable side.
	         */
	        terminate() {
	            if (!IsTransformStreamDefaultController(this)) {
	                throw defaultControllerBrandCheckException('terminate');
	            }
	            TransformStreamDefaultControllerTerminate(this);
	        }
	    }
	    Object.defineProperties(TransformStreamDefaultController.prototype, {
	        enqueue: { enumerable: true },
	        error: { enumerable: true },
	        terminate: { enumerable: true },
	        desiredSize: { enumerable: true }
	    });
	    if (typeof SymbolPolyfill.toStringTag === 'symbol') {
	        Object.defineProperty(TransformStreamDefaultController.prototype, SymbolPolyfill.toStringTag, {
	            value: 'TransformStreamDefaultController',
	            configurable: true
	        });
	    }
	    // Transform Stream Default Controller Abstract Operations
	    function IsTransformStreamDefaultController(x) {
	        if (!typeIsObject(x)) {
	            return false;
	        }
	        if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
	            return false;
	        }
	        return x instanceof TransformStreamDefaultController;
	    }
	    function SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm) {
	        controller._controlledTransformStream = stream;
	        stream._transformStreamController = controller;
	        controller._transformAlgorithm = transformAlgorithm;
	        controller._flushAlgorithm = flushAlgorithm;
	    }
	    function SetUpTransformStreamDefaultControllerFromTransformer(stream, transformer) {
	        const controller = Object.create(TransformStreamDefaultController.prototype);
	        let transformAlgorithm = (chunk) => {
	            try {
	                TransformStreamDefaultControllerEnqueue(controller, chunk);
	                return promiseResolvedWith(undefined);
	            }
	            catch (transformResultE) {
	                return promiseRejectedWith(transformResultE);
	            }
	        };
	        let flushAlgorithm = () => promiseResolvedWith(undefined);
	        if (transformer.transform !== undefined) {
	            transformAlgorithm = chunk => transformer.transform(chunk, controller);
	        }
	        if (transformer.flush !== undefined) {
	            flushAlgorithm = () => transformer.flush(controller);
	        }
	        SetUpTransformStreamDefaultController(stream, controller, transformAlgorithm, flushAlgorithm);
	    }
	    function TransformStreamDefaultControllerClearAlgorithms(controller) {
	        controller._transformAlgorithm = undefined;
	        controller._flushAlgorithm = undefined;
	    }
	    function TransformStreamDefaultControllerEnqueue(controller, chunk) {
	        const stream = controller._controlledTransformStream;
	        const readableController = stream._readable._readableStreamController;
	        if (!ReadableStreamDefaultControllerCanCloseOrEnqueue(readableController)) {
	            throw new TypeError('Readable side is not in a state that permits enqueue');
	        }
	        // We throttle transform invocations based on the backpressure of the ReadableStream, but we still
	        // accept TransformStreamDefaultControllerEnqueue() calls.
	        try {
	            ReadableStreamDefaultControllerEnqueue(readableController, chunk);
	        }
	        catch (e) {
	            // This happens when readableStrategy.size() throws.
	            TransformStreamErrorWritableAndUnblockWrite(stream, e);
	            throw stream._readable._storedError;
	        }
	        const backpressure = ReadableStreamDefaultControllerHasBackpressure(readableController);
	        if (backpressure !== stream._backpressure) {
	            TransformStreamSetBackpressure(stream, true);
	        }
	    }
	    function TransformStreamDefaultControllerError(controller, e) {
	        TransformStreamError(controller._controlledTransformStream, e);
	    }
	    function TransformStreamDefaultControllerPerformTransform(controller, chunk) {
	        const transformPromise = controller._transformAlgorithm(chunk);
	        return transformPromiseWith(transformPromise, undefined, r => {
	            TransformStreamError(controller._controlledTransformStream, r);
	            throw r;
	        });
	    }
	    function TransformStreamDefaultControllerTerminate(controller) {
	        const stream = controller._controlledTransformStream;
	        const readableController = stream._readable._readableStreamController;
	        ReadableStreamDefaultControllerClose(readableController);
	        const error = new TypeError('TransformStream terminated');
	        TransformStreamErrorWritableAndUnblockWrite(stream, error);
	    }
	    // TransformStreamDefaultSink Algorithms
	    function TransformStreamDefaultSinkWriteAlgorithm(stream, chunk) {
	        const controller = stream._transformStreamController;
	        if (stream._backpressure) {
	            const backpressureChangePromise = stream._backpressureChangePromise;
	            return transformPromiseWith(backpressureChangePromise, () => {
	                const writable = stream._writable;
	                const state = writable._state;
	                if (state === 'erroring') {
	                    throw writable._storedError;
	                }
	                return TransformStreamDefaultControllerPerformTransform(controller, chunk);
	            });
	        }
	        return TransformStreamDefaultControllerPerformTransform(controller, chunk);
	    }
	    function TransformStreamDefaultSinkAbortAlgorithm(stream, reason) {
	        // abort() is not called synchronously, so it is possible for abort() to be called when the stream is already
	        // errored.
	        TransformStreamError(stream, reason);
	        return promiseResolvedWith(undefined);
	    }
	    function TransformStreamDefaultSinkCloseAlgorithm(stream) {
	        // stream._readable cannot change after construction, so caching it across a call to user code is safe.
	        const readable = stream._readable;
	        const controller = stream._transformStreamController;
	        const flushPromise = controller._flushAlgorithm();
	        TransformStreamDefaultControllerClearAlgorithms(controller);
	        // Return a promise that is fulfilled with undefined on success.
	        return transformPromiseWith(flushPromise, () => {
	            if (readable._state === 'errored') {
	                throw readable._storedError;
	            }
	            ReadableStreamDefaultControllerClose(readable._readableStreamController);
	        }, r => {
	            TransformStreamError(stream, r);
	            throw readable._storedError;
	        });
	    }
	    // TransformStreamDefaultSource Algorithms
	    function TransformStreamDefaultSourcePullAlgorithm(stream) {
	        // Invariant. Enforced by the promises returned by start() and pull().
	        TransformStreamSetBackpressure(stream, false);
	        // Prevent the next pull() call until there is backpressure.
	        return stream._backpressureChangePromise;
	    }
	    // Helper functions for the TransformStreamDefaultController.
	    function defaultControllerBrandCheckException(name) {
	        return new TypeError(`TransformStreamDefaultController.prototype.${name} can only be used on a TransformStreamDefaultController`);
	    }
	    // Helper functions for the TransformStream.
	    function streamBrandCheckException(name) {
	        return new TypeError(`TransformStream.prototype.${name} can only be used on a TransformStream`);
	    }

	    exports.ByteLengthQueuingStrategy = ByteLengthQueuingStrategy;
	    exports.CountQueuingStrategy = CountQueuingStrategy;
	    exports.ReadableByteStreamController = ReadableByteStreamController;
	    exports.ReadableStream = ReadableStream;
	    exports.ReadableStreamBYOBReader = ReadableStreamBYOBReader;
	    exports.ReadableStreamBYOBRequest = ReadableStreamBYOBRequest;
	    exports.ReadableStreamDefaultController = ReadableStreamDefaultController;
	    exports.ReadableStreamDefaultReader = ReadableStreamDefaultReader;
	    exports.TransformStream = TransformStream;
	    exports.TransformStreamDefaultController = TransformStreamDefaultController;
	    exports.WritableStream = WritableStream;
	    exports.WritableStreamDefaultController = WritableStreamDefaultController;
	    exports.WritableStreamDefaultWriter = WritableStreamDefaultWriter;

	    Object.defineProperty(exports, '__esModule', { value: true });

	})));

	}(ponyfill_es2018, ponyfill_es2018.exports));

	/* c8 ignore start */

	// 64 KiB (same size chrome slice theirs blob into Uint8array's)
	const POOL_SIZE$1 = 65536;

	if (!globalThis.ReadableStream) {
	  // `node:stream/web` got introduced in v16.5.0 as experimental
	  // and it's preferred over the polyfilled version. So we also
	  // suppress the warning that gets emitted by NodeJS for using it.
	  try {
	    const process = require$$0__default["default"];
	    const { emitWarning } = process;
	    try {
	      process.emitWarning = () => {};
	      Object.assign(globalThis, require$$1__default["default"]);
	      process.emitWarning = emitWarning;
	    } catch (error) {
	      process.emitWarning = emitWarning;
	      throw error
	    }
	  } catch (error) {
	    // fallback to polyfill implementation
	    Object.assign(globalThis, ponyfill_es2018.exports);
	  }
	}

	try {
	  // Don't use node: prefix for this, require+node: is not supported until node v14.14
	  // Only `import()` can use prefix in 12.20 and later
	  const { Blob } = require$$2;
	  if (Blob && !Blob.prototype.stream) {
	    Blob.prototype.stream = function name (params) {
	      let position = 0;
	      const blob = this;

	      return new ReadableStream({
	        type: 'bytes',
	        async pull (ctrl) {
	          const chunk = blob.slice(position, Math.min(blob.size, position + POOL_SIZE$1));
	          const buffer = await chunk.arrayBuffer();
	          position += buffer.byteLength;
	          ctrl.enqueue(new Uint8Array(buffer));

	          if (position === blob.size) {
	            ctrl.close();
	          }
	        }
	      })
	    };
	  }
	} catch (error) {}

	/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

	// 64 KiB (same size chrome slice theirs blob into Uint8array's)
	const POOL_SIZE = 65536;

	/** @param {(Blob | Uint8Array)[]} parts */
	async function * toIterator (parts, clone = true) {
	  for (const part of parts) {
	    if ('stream' in part) {
	      yield * (/** @type {AsyncIterableIterator<Uint8Array>} */ (part.stream()));
	    } else if (ArrayBuffer.isView(part)) {
	      if (clone) {
	        let position = part.byteOffset;
	        const end = part.byteOffset + part.byteLength;
	        while (position !== end) {
	          const size = Math.min(end - position, POOL_SIZE);
	          const chunk = part.buffer.slice(position, position + size);
	          position += chunk.byteLength;
	          yield new Uint8Array(chunk);
	        }
	      } else {
	        yield part;
	      }
	    /* c8 ignore next 10 */
	    } else {
	      // For blobs that have arrayBuffer but no stream method (nodes buffer.Blob)
	      let position = 0, b = (/** @type {Blob} */ (part));
	      while (position !== b.size) {
	        const chunk = b.slice(position, Math.min(b.size, position + POOL_SIZE));
	        const buffer = await chunk.arrayBuffer();
	        position += buffer.byteLength;
	        yield new Uint8Array(buffer);
	      }
	    }
	  }
	}

	const _Blob = class Blob {
	  /** @type {Array.<(Blob|Uint8Array)>} */
	  #parts = []
	  #type = ''
	  #size = 0
	  #endings = 'transparent'

	  /**
	   * The Blob() constructor returns a new Blob object. The content
	   * of the blob consists of the concatenation of the values given
	   * in the parameter array.
	   *
	   * @param {*} blobParts
	   * @param {{ type?: string, endings?: string }} [options]
	   */
	  constructor (blobParts = [], options = {}) {
	    if (typeof blobParts !== 'object' || blobParts === null) {
	      throw new TypeError('Failed to construct \'Blob\': The provided value cannot be converted to a sequence.')
	    }

	    if (typeof blobParts[Symbol.iterator] !== 'function') {
	      throw new TypeError('Failed to construct \'Blob\': The object must have a callable @@iterator property.')
	    }

	    if (typeof options !== 'object' && typeof options !== 'function') {
	      throw new TypeError('Failed to construct \'Blob\': parameter 2 cannot convert to dictionary.')
	    }

	    if (options === null) options = {};

	    const encoder = new TextEncoder();
	    for (const element of blobParts) {
	      let part;
	      if (ArrayBuffer.isView(element)) {
	        part = new Uint8Array(element.buffer.slice(element.byteOffset, element.byteOffset + element.byteLength));
	      } else if (element instanceof ArrayBuffer) {
	        part = new Uint8Array(element.slice(0));
	      } else if (element instanceof Blob) {
	        part = element;
	      } else {
	        part = encoder.encode(`${element}`);
	      }

	      const size = ArrayBuffer.isView(part) ? part.byteLength : part.size;
	      // Avoid pushing empty parts into the array to better GC them
	      if (size) {
	        this.#size += size;
	        this.#parts.push(part);
	      }
	    }

	    this.#endings = `${options.endings === undefined ? 'transparent' : options.endings}`;
	    const type = options.type === undefined ? '' : String(options.type);
	    this.#type = /^[\x20-\x7E]*$/.test(type) ? type : '';
	  }

	  /**
	   * The Blob interface's size property returns the
	   * size of the Blob in bytes.
	   */
	  get size () {
	    return this.#size
	  }

	  /**
	   * The type property of a Blob object returns the MIME type of the file.
	   */
	  get type () {
	    return this.#type
	  }

	  /**
	   * The text() method in the Blob interface returns a Promise
	   * that resolves with a string containing the contents of
	   * the blob, interpreted as UTF-8.
	   *
	   * @return {Promise<string>}
	   */
	  async text () {
	    // More optimized than using this.arrayBuffer()
	    // that requires twice as much ram
	    const decoder = new TextDecoder();
	    let str = '';
	    for await (const part of toIterator(this.#parts, false)) {
	      str += decoder.decode(part, { stream: true });
	    }
	    // Remaining
	    str += decoder.decode();
	    return str
	  }

	  /**
	   * The arrayBuffer() method in the Blob interface returns a
	   * Promise that resolves with the contents of the blob as
	   * binary data contained in an ArrayBuffer.
	   *
	   * @return {Promise<ArrayBuffer>}
	   */
	  async arrayBuffer () {
	    // Easier way... Just a unnecessary overhead
	    // const view = new Uint8Array(this.size);
	    // await this.stream().getReader({mode: 'byob'}).read(view);
	    // return view.buffer;

	    const data = new Uint8Array(this.size);
	    let offset = 0;
	    for await (const chunk of toIterator(this.#parts, false)) {
	      data.set(chunk, offset);
	      offset += chunk.length;
	    }

	    return data.buffer
	  }

	  stream () {
	    const it = toIterator(this.#parts, true);

	    return new globalThis.ReadableStream({
	      // @ts-ignore
	      type: 'bytes',
	      async pull (ctrl) {
	        const chunk = await it.next();
	        chunk.done ? ctrl.close() : ctrl.enqueue(chunk.value);
	      },

	      async cancel () {
	        await it.return();
	      }
	    })
	  }

	  /**
	   * The Blob interface's slice() method creates and returns a
	   * new Blob object which contains data from a subset of the
	   * blob on which it's called.
	   *
	   * @param {number} [start]
	   * @param {number} [end]
	   * @param {string} [type]
	   */
	  slice (start = 0, end = this.size, type = '') {
	    const { size } = this;

	    let relativeStart = start < 0 ? Math.max(size + start, 0) : Math.min(start, size);
	    let relativeEnd = end < 0 ? Math.max(size + end, 0) : Math.min(end, size);

	    const span = Math.max(relativeEnd - relativeStart, 0);
	    const parts = this.#parts;
	    const blobParts = [];
	    let added = 0;

	    for (const part of parts) {
	      // don't add the overflow to new blobParts
	      if (added >= span) {
	        break
	      }

	      const size = ArrayBuffer.isView(part) ? part.byteLength : part.size;
	      if (relativeStart && size <= relativeStart) {
	        // Skip the beginning and change the relative
	        // start & end position as we skip the unwanted parts
	        relativeStart -= size;
	        relativeEnd -= size;
	      } else {
	        let chunk;
	        if (ArrayBuffer.isView(part)) {
	          chunk = part.subarray(relativeStart, Math.min(size, relativeEnd));
	          added += chunk.byteLength;
	        } else {
	          chunk = part.slice(relativeStart, Math.min(size, relativeEnd));
	          added += chunk.size;
	        }
	        relativeEnd -= size;
	        blobParts.push(chunk);
	        relativeStart = 0; // All next sequential parts should start at 0
	      }
	    }

	    const blob = new Blob([], { type: String(type).toLowerCase() });
	    blob.#size = span;
	    blob.#parts = blobParts;

	    return blob
	  }

	  get [Symbol.toStringTag] () {
	    return 'Blob'
	  }

	  static [Symbol.hasInstance] (object) {
	    return (
	      object &&
	      typeof object === 'object' &&
	      typeof object.constructor === 'function' &&
	      (
	        typeof object.stream === 'function' ||
	        typeof object.arrayBuffer === 'function'
	      ) &&
	      /^(Blob|File)$/.test(object[Symbol.toStringTag])
	    )
	  }
	};

	Object.defineProperties(_Blob.prototype, {
	  size: { enumerable: true },
	  type: { enumerable: true },
	  slice: { enumerable: true }
	});

	/** @type {typeof globalThis.Blob} */
	const Blob = _Blob;
	var Blob$1 = Blob;

	const _File = class File extends Blob$1 {
	  #lastModified = 0
	  #name = ''

	  /**
	   * @param {*[]} fileBits
	   * @param {string} fileName
	   * @param {{lastModified?: number, type?: string}} options
	   */// @ts-ignore
	  constructor (fileBits, fileName, options = {}) {
	    if (arguments.length < 2) {
	      throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`)
	    }
	    super(fileBits, options);

	    if (options === null) options = {};

	    // Simulate WebIDL type casting for NaN value in lastModified option.
	    const lastModified = options.lastModified === undefined ? Date.now() : Number(options.lastModified);
	    if (!Number.isNaN(lastModified)) {
	      this.#lastModified = lastModified;
	    }

	    this.#name = String(fileName);
	  }

	  get name () {
	    return this.#name
	  }

	  get lastModified () {
	    return this.#lastModified
	  }

	  get [Symbol.toStringTag] () {
	    return 'File'
	  }

	  static [Symbol.hasInstance] (object) {
	    return !!object && object instanceof Blob$1 &&
	      /^(File)$/.test(object[Symbol.toStringTag])
	  }
	};

	/** @type {typeof globalThis.File} */// @ts-ignore
	const File = _File;
	var File$1 = File;

	/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

	var {toStringTag:t,iterator:i,hasInstance:h}=Symbol,
	r=Math.random,
	m='append,set,get,getAll,delete,keys,values,entries,forEach,constructor'.split(','),
	f$1=(a,b,c)=>(a+='',/^(Blob|File)$/.test(b && b[t])?[(c=c!==void 0?c+'':b[t]=='File'?b.name:'blob',a),b.name!==c||b[t]=='blob'?new File$1([b],c,b):b]:[a,b+'']),
	e=(c,f)=>(f?c:c.replace(/\r?\n|\r/g,'\r\n')).replace(/\n/g,'%0A').replace(/\r/g,'%0D').replace(/"/g,'%22'),
	x=(n, a, e)=>{if(a.length<e){throw new TypeError(`Failed to execute '${n}' on 'FormData': ${e} arguments required, but only ${a.length} present.`)}};

	/** @type {typeof globalThis.FormData} */
	const FormData = class FormData {
	#d=[];
	constructor(...a){if(a.length)throw new TypeError(`Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.`)}
	get [t]() {return 'FormData'}
	[i](){return this.entries()}
	static [h](o) {return o&&typeof o==='object'&&o[t]==='FormData'&&!m.some(m=>typeof o[m]!='function')}
	append(...a){x('append',arguments,2);this.#d.push(f$1(...a));}
	delete(a){x('delete',arguments,1);a+='';this.#d=this.#d.filter(([b])=>b!==a);}
	get(a){x('get',arguments,1);a+='';for(var b=this.#d,l=b.length,c=0;c<l;c++)if(b[c][0]===a)return b[c][1];return null}
	getAll(a,b){x('getAll',arguments,1);b=[];a+='';this.#d.forEach(c=>c[0]===a&&b.push(c[1]));return b}
	has(a){x('has',arguments,1);a+='';return this.#d.some(b=>b[0]===a)}
	forEach(a,b){x('forEach',arguments,1);for(var [c,d]of this)a.call(b,d,c,this);}
	set(...a){x('set',arguments,2);var b=[],c=!0;a=f$1(...a);this.#d.forEach(d=>{d[0]===a[0]?c&&(c=!b.push(a)):b.push(d);});c&&b.push(a);this.#d=b;}
	*entries(){yield*this.#d;}
	*keys(){for(var[a]of this)yield a;}
	*values(){for(var[,a]of this)yield a;}};

	/** @param {FormData} F */
	function formDataToBlob (F,B=Blob$1){
	var b=`${r()}${r()}`.replace(/\./g, '').slice(-28).padStart(32, '-'),c=[],p=`--${b}\r\nContent-Disposition: form-data; name="`;
	F.forEach((v,n)=>typeof v=='string'
	?c.push(p+e(n)+`"\r\n\r\n${v.replace(/\r(?!\n)|(?<!\r)\n/g, '\r\n')}\r\n`)
	:c.push(p+e(n)+`"; filename="${e(v.name, 1)}"\r\nContent-Type: ${v.type||"application/octet-stream"}\r\n\r\n`, v, '\r\n'));
	c.push(`--${b}--`);
	return new B(c,{type:"multipart/form-data; boundary="+b})}

	class FetchBaseError extends Error {
		constructor(message, type) {
			super(message);
			// Hide custom error implementation details from end-users
			Error.captureStackTrace(this, this.constructor);

			this.type = type;
		}

		get name() {
			return this.constructor.name;
		}

		get [Symbol.toStringTag]() {
			return this.constructor.name;
		}
	}

	/**
	 * @typedef {{ address?: string, code: string, dest?: string, errno: number, info?: object, message: string, path?: string, port?: number, syscall: string}} SystemError
	*/

	/**
	 * FetchError interface for operational errors
	 */
	class FetchError extends FetchBaseError {
		/**
		 * @param  {string} message -      Error message for human
		 * @param  {string} [type] -        Error type for machine
		 * @param  {SystemError} [systemError] - For Node.js system error
		 */
		constructor(message, type, systemError) {
			super(message, type);
			// When err.type is `system`, err.erroredSysCall contains system error and err.code contains system error code
			if (systemError) {
				// eslint-disable-next-line no-multi-assign
				this.code = this.errno = systemError.code;
				this.erroredSysCall = systemError.syscall;
			}
		}
	}

	/**
	 * Is.js
	 *
	 * Object type checks.
	 */

	const NAME = Symbol.toStringTag;

	/**
	 * Check if `obj` is a URLSearchParams object
	 * ref: https://github.com/node-fetch/node-fetch/issues/296#issuecomment-307598143
	 * @param {*} object - Object to check for
	 * @return {boolean}
	 */
	const isURLSearchParameters = object => {
		return (
			typeof object === 'object' &&
			typeof object.append === 'function' &&
			typeof object.delete === 'function' &&
			typeof object.get === 'function' &&
			typeof object.getAll === 'function' &&
			typeof object.has === 'function' &&
			typeof object.set === 'function' &&
			typeof object.sort === 'function' &&
			object[NAME] === 'URLSearchParams'
		);
	};

	/**
	 * Check if `object` is a W3C `Blob` object (which `File` inherits from)
	 * @param {*} object - Object to check for
	 * @return {boolean}
	 */
	const isBlob = object => {
		return (
			object &&
			typeof object === 'object' &&
			typeof object.arrayBuffer === 'function' &&
			typeof object.type === 'string' &&
			typeof object.stream === 'function' &&
			typeof object.constructor === 'function' &&
			/^(Blob|File)$/.test(object[NAME])
		);
	};

	/**
	 * Check if `obj` is an instance of AbortSignal.
	 * @param {*} object - Object to check for
	 * @return {boolean}
	 */
	const isAbortSignal = object => {
		return (
			typeof object === 'object' && (
				object[NAME] === 'AbortSignal' ||
				object[NAME] === 'EventTarget'
			)
		);
	};

	/**
	 * isDomainOrSubdomain reports whether sub is a subdomain (or exact match) of
	 * the parent domain.
	 *
	 * Both domains must already be in canonical form.
	 * @param {string|URL} original
	 * @param {string|URL} destination
	 */
	const isDomainOrSubdomain = (destination, original) => {
		const orig = new URL(original).hostname;
		const dest = new URL(destination).hostname;

		return orig === dest || orig.endsWith(`.${dest}`);
	};

	const pipeline = node_util.promisify(Stream__default["default"].pipeline);
	const INTERNALS$2 = Symbol('Body internals');

	/**
	 * Body mixin
	 *
	 * Ref: https://fetch.spec.whatwg.org/#body
	 *
	 * @param   Stream  body  Readable stream
	 * @param   Object  opts  Response options
	 * @return  Void
	 */
	class Body {
		constructor(body, {
			size = 0
		} = {}) {
			let boundary = null;

			if (body === null) {
				// Body is undefined or null
				body = null;
			} else if (isURLSearchParameters(body)) {
				// Body is a URLSearchParams
				body = node_buffer.Buffer.from(body.toString());
			} else if (isBlob(body)) ; else if (node_buffer.Buffer.isBuffer(body)) ; else if (node_util.types.isAnyArrayBuffer(body)) {
				// Body is ArrayBuffer
				body = node_buffer.Buffer.from(body);
			} else if (ArrayBuffer.isView(body)) {
				// Body is ArrayBufferView
				body = node_buffer.Buffer.from(body.buffer, body.byteOffset, body.byteLength);
			} else if (body instanceof Stream__default["default"]) ; else if (body instanceof FormData) {
				// Body is FormData
				body = formDataToBlob(body);
				boundary = body.type.split('=')[1];
			} else {
				// None of the above
				// coerce to string then buffer
				body = node_buffer.Buffer.from(String(body));
			}

			let stream = body;

			if (node_buffer.Buffer.isBuffer(body)) {
				stream = Stream__default["default"].Readable.from(body);
			} else if (isBlob(body)) {
				stream = Stream__default["default"].Readable.from(body.stream());
			}

			this[INTERNALS$2] = {
				body,
				stream,
				boundary,
				disturbed: false,
				error: null
			};
			this.size = size;

			if (body instanceof Stream__default["default"]) {
				body.on('error', error_ => {
					const error = error_ instanceof FetchBaseError ?
						error_ :
						new FetchError(`Invalid response body while trying to fetch ${this.url}: ${error_.message}`, 'system', error_);
					this[INTERNALS$2].error = error;
				});
			}
		}

		get body() {
			return this[INTERNALS$2].stream;
		}

		get bodyUsed() {
			return this[INTERNALS$2].disturbed;
		}

		/**
		 * Decode response as ArrayBuffer
		 *
		 * @return  Promise
		 */
		async arrayBuffer() {
			const {buffer, byteOffset, byteLength} = await consumeBody(this);
			return buffer.slice(byteOffset, byteOffset + byteLength);
		}

		async formData() {
			const ct = this.headers.get('content-type');

			if (ct.startsWith('application/x-www-form-urlencoded')) {
				const formData = new FormData();
				const parameters = new URLSearchParams(await this.text());

				for (const [name, value] of parameters) {
					formData.append(name, value);
				}

				return formData;
			}

			const {toFormData} = await Promise.resolve().then(function () { return multipartParser; });
			return toFormData(this.body, ct);
		}

		/**
		 * Return raw response as Blob
		 *
		 * @return Promise
		 */
		async blob() {
			const ct = (this.headers && this.headers.get('content-type')) || (this[INTERNALS$2].body && this[INTERNALS$2].body.type) || '';
			const buf = await this.arrayBuffer();

			return new Blob$1([buf], {
				type: ct
			});
		}

		/**
		 * Decode response as json
		 *
		 * @return  Promise
		 */
		async json() {
			const text = await this.text();
			return JSON.parse(text);
		}

		/**
		 * Decode response as text
		 *
		 * @return  Promise
		 */
		async text() {
			const buffer = await consumeBody(this);
			return new TextDecoder().decode(buffer);
		}

		/**
		 * Decode response as buffer (non-spec api)
		 *
		 * @return  Promise
		 */
		buffer() {
			return consumeBody(this);
		}
	}

	Body.prototype.buffer = node_util.deprecate(Body.prototype.buffer, 'Please use \'response.arrayBuffer()\' instead of \'response.buffer()\'', 'node-fetch#buffer');

	// In browsers, all properties are enumerable.
	Object.defineProperties(Body.prototype, {
		body: {enumerable: true},
		bodyUsed: {enumerable: true},
		arrayBuffer: {enumerable: true},
		blob: {enumerable: true},
		json: {enumerable: true},
		text: {enumerable: true},
		data: {get: node_util.deprecate(() => {},
			'data doesn\'t exist, use json(), text(), arrayBuffer(), or body instead',
			'https://github.com/node-fetch/node-fetch/issues/1000 (response)')}
	});

	/**
	 * Consume and convert an entire Body to a Buffer.
	 *
	 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
	 *
	 * @return Promise
	 */
	async function consumeBody(data) {
		if (data[INTERNALS$2].disturbed) {
			throw new TypeError(`body used already for: ${data.url}`);
		}

		data[INTERNALS$2].disturbed = true;

		if (data[INTERNALS$2].error) {
			throw data[INTERNALS$2].error;
		}

		const {body} = data;

		// Body is null
		if (body === null) {
			return node_buffer.Buffer.alloc(0);
		}

		/* c8 ignore next 3 */
		if (!(body instanceof Stream__default["default"])) {
			return node_buffer.Buffer.alloc(0);
		}

		// Body is stream
		// get ready to actually consume the body
		const accum = [];
		let accumBytes = 0;

		try {
			for await (const chunk of body) {
				if (data.size > 0 && accumBytes + chunk.length > data.size) {
					const error = new FetchError(`content size at ${data.url} over limit: ${data.size}`, 'max-size');
					body.destroy(error);
					throw error;
				}

				accumBytes += chunk.length;
				accum.push(chunk);
			}
		} catch (error) {
			const error_ = error instanceof FetchBaseError ? error : new FetchError(`Invalid response body while trying to fetch ${data.url}: ${error.message}`, 'system', error);
			throw error_;
		}

		if (body.readableEnded === true || body._readableState.ended === true) {
			try {
				if (accum.every(c => typeof c === 'string')) {
					return node_buffer.Buffer.from(accum.join(''));
				}

				return node_buffer.Buffer.concat(accum, accumBytes);
			} catch (error) {
				throw new FetchError(`Could not create Buffer from response body for ${data.url}: ${error.message}`, 'system', error);
			}
		} else {
			throw new FetchError(`Premature close of server response while trying to fetch ${data.url}`);
		}
	}

	/**
	 * Clone body given Res/Req instance
	 *
	 * @param   Mixed   instance       Response or Request instance
	 * @param   String  highWaterMark  highWaterMark for both PassThrough body streams
	 * @return  Mixed
	 */
	const clone = (instance, highWaterMark) => {
		let p1;
		let p2;
		let {body} = instance[INTERNALS$2];

		// Don't allow cloning a used body
		if (instance.bodyUsed) {
			throw new Error('cannot clone body after it is used');
		}

		// Check that body is a stream and not form-data object
		// note: we can't clone the form-data object without having it as a dependency
		if ((body instanceof Stream__default["default"]) && (typeof body.getBoundary !== 'function')) {
			// Tee instance body
			p1 = new Stream.PassThrough({highWaterMark});
			p2 = new Stream.PassThrough({highWaterMark});
			body.pipe(p1);
			body.pipe(p2);
			// Set instance body to teed body and return the other teed body
			instance[INTERNALS$2].stream = p1;
			body = p2;
		}

		return body;
	};

	const getNonSpecFormDataBoundary = node_util.deprecate(
		body => body.getBoundary(),
		'form-data doesn\'t follow the spec and requires special treatment. Use alternative package',
		'https://github.com/node-fetch/node-fetch/issues/1167'
	);

	/**
	 * Performs the operation "extract a `Content-Type` value from |object|" as
	 * specified in the specification:
	 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
	 *
	 * This function assumes that instance.body is present.
	 *
	 * @param {any} body Any options.body input
	 * @returns {string | null}
	 */
	const extractContentType = (body, request) => {
		// Body is null or undefined
		if (body === null) {
			return null;
		}

		// Body is string
		if (typeof body === 'string') {
			return 'text/plain;charset=UTF-8';
		}

		// Body is a URLSearchParams
		if (isURLSearchParameters(body)) {
			return 'application/x-www-form-urlencoded;charset=UTF-8';
		}

		// Body is blob
		if (isBlob(body)) {
			return body.type || null;
		}

		// Body is a Buffer (Buffer, ArrayBuffer or ArrayBufferView)
		if (node_buffer.Buffer.isBuffer(body) || node_util.types.isAnyArrayBuffer(body) || ArrayBuffer.isView(body)) {
			return null;
		}

		if (body instanceof FormData) {
			return `multipart/form-data; boundary=${request[INTERNALS$2].boundary}`;
		}

		// Detect form data input from form-data module
		if (body && typeof body.getBoundary === 'function') {
			return `multipart/form-data;boundary=${getNonSpecFormDataBoundary(body)}`;
		}

		// Body is stream - can't really do much about this
		if (body instanceof Stream__default["default"]) {
			return null;
		}

		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	};

	/**
	 * The Fetch Standard treats this as if "total bytes" is a property on the body.
	 * For us, we have to explicitly get it with a function.
	 *
	 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
	 *
	 * @param {any} obj.body Body object from the Body instance.
	 * @returns {number | null}
	 */
	const getTotalBytes = request => {
		const {body} = request[INTERNALS$2];

		// Body is null or undefined
		if (body === null) {
			return 0;
		}

		// Body is Blob
		if (isBlob(body)) {
			return body.size;
		}

		// Body is Buffer
		if (node_buffer.Buffer.isBuffer(body)) {
			return body.length;
		}

		// Detect form data input from form-data module
		if (body && typeof body.getLengthSync === 'function') {
			return body.hasKnownLength && body.hasKnownLength() ? body.getLengthSync() : null;
		}

		// Body is stream
		return null;
	};

	/**
	 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
	 *
	 * @param {Stream.Writable} dest The stream to write to.
	 * @param obj.body Body object from the Body instance.
	 * @returns {Promise<void>}
	 */
	const writeToStream = async (dest, {body}) => {
		if (body === null) {
			// Body is null
			dest.end();
		} else {
			// Body is stream
			await pipeline(body, dest);
		}
	};

	/**
	 * Headers.js
	 *
	 * Headers class offers convenient helpers
	 */

	/* c8 ignore next 9 */
	const validateHeaderName = typeof http__default["default"].validateHeaderName === 'function' ?
		http__default["default"].validateHeaderName :
		name => {
			if (!/^[\^`\-\w!#$%&'*+.|~]+$/.test(name)) {
				const error = new TypeError(`Header name must be a valid HTTP token [${name}]`);
				Object.defineProperty(error, 'code', {value: 'ERR_INVALID_HTTP_TOKEN'});
				throw error;
			}
		};

	/* c8 ignore next 9 */
	const validateHeaderValue = typeof http__default["default"].validateHeaderValue === 'function' ?
		http__default["default"].validateHeaderValue :
		(name, value) => {
			if (/[^\t\u0020-\u007E\u0080-\u00FF]/.test(value)) {
				const error = new TypeError(`Invalid character in header content ["${name}"]`);
				Object.defineProperty(error, 'code', {value: 'ERR_INVALID_CHAR'});
				throw error;
			}
		};

	/**
	 * @typedef {Headers | Record<string, string> | Iterable<readonly [string, string]> | Iterable<Iterable<string>>} HeadersInit
	 */

	/**
	 * This Fetch API interface allows you to perform various actions on HTTP request and response headers.
	 * These actions include retrieving, setting, adding to, and removing.
	 * A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.
	 * You can add to this using methods like append() (see Examples.)
	 * In all methods of this interface, header names are matched by case-insensitive byte sequence.
	 *
	 */
	class Headers extends URLSearchParams {
		/**
		 * Headers class
		 *
		 * @constructor
		 * @param {HeadersInit} [init] - Response headers
		 */
		constructor(init) {
			// Validate and normalize init object in [name, value(s)][]
			/** @type {string[][]} */
			let result = [];
			if (init instanceof Headers) {
				const raw = init.raw();
				for (const [name, values] of Object.entries(raw)) {
					result.push(...values.map(value => [name, value]));
				}
			} else if (init == null) ; else if (typeof init === 'object' && !node_util.types.isBoxedPrimitive(init)) {
				const method = init[Symbol.iterator];
				// eslint-disable-next-line no-eq-null, eqeqeq
				if (method == null) {
					// Record<ByteString, ByteString>
					result.push(...Object.entries(init));
				} else {
					if (typeof method !== 'function') {
						throw new TypeError('Header pairs must be iterable');
					}

					// Sequence<sequence<ByteString>>
					// Note: per spec we have to first exhaust the lists then process them
					result = [...init]
						.map(pair => {
							if (
								typeof pair !== 'object' || node_util.types.isBoxedPrimitive(pair)
							) {
								throw new TypeError('Each header pair must be an iterable object');
							}

							return [...pair];
						}).map(pair => {
							if (pair.length !== 2) {
								throw new TypeError('Each header pair must be a name/value tuple');
							}

							return [...pair];
						});
				}
			} else {
				throw new TypeError('Failed to construct \'Headers\': The provided value is not of type \'(sequence<sequence<ByteString>> or record<ByteString, ByteString>)');
			}

			// Validate and lowercase
			result =
				result.length > 0 ?
					result.map(([name, value]) => {
						validateHeaderName(name);
						validateHeaderValue(name, String(value));
						return [String(name).toLowerCase(), String(value)];
					}) :
					undefined;

			super(result);

			// Returning a Proxy that will lowercase key names, validate parameters and sort keys
			// eslint-disable-next-line no-constructor-return
			return new Proxy(this, {
				get(target, p, receiver) {
					switch (p) {
						case 'append':
						case 'set':
							return (name, value) => {
								validateHeaderName(name);
								validateHeaderValue(name, String(value));
								return URLSearchParams.prototype[p].call(
									target,
									String(name).toLowerCase(),
									String(value)
								);
							};

						case 'delete':
						case 'has':
						case 'getAll':
							return name => {
								validateHeaderName(name);
								return URLSearchParams.prototype[p].call(
									target,
									String(name).toLowerCase()
								);
							};

						case 'keys':
							return () => {
								target.sort();
								return new Set(URLSearchParams.prototype.keys.call(target)).keys();
							};

						default:
							return Reflect.get(target, p, receiver);
					}
				}
			});
			/* c8 ignore next */
		}

		get [Symbol.toStringTag]() {
			return this.constructor.name;
		}

		toString() {
			return Object.prototype.toString.call(this);
		}

		get(name) {
			const values = this.getAll(name);
			if (values.length === 0) {
				return null;
			}

			let value = values.join(', ');
			if (/^content-encoding$/i.test(name)) {
				value = value.toLowerCase();
			}

			return value;
		}

		forEach(callback, thisArg = undefined) {
			for (const name of this.keys()) {
				Reflect.apply(callback, thisArg, [this.get(name), name, this]);
			}
		}

		* values() {
			for (const name of this.keys()) {
				yield this.get(name);
			}
		}

		/**
		 * @type {() => IterableIterator<[string, string]>}
		 */
		* entries() {
			for (const name of this.keys()) {
				yield [name, this.get(name)];
			}
		}

		[Symbol.iterator]() {
			return this.entries();
		}

		/**
		 * Node-fetch non-spec method
		 * returning all headers and their values as array
		 * @returns {Record<string, string[]>}
		 */
		raw() {
			return [...this.keys()].reduce((result, key) => {
				result[key] = this.getAll(key);
				return result;
			}, {});
		}

		/**
		 * For better console.log(headers) and also to convert Headers into Node.js Request compatible format
		 */
		[Symbol.for('nodejs.util.inspect.custom')]() {
			return [...this.keys()].reduce((result, key) => {
				const values = this.getAll(key);
				// Http.request() only supports string as Host header.
				// This hack makes specifying custom Host header possible.
				if (key === 'host') {
					result[key] = values[0];
				} else {
					result[key] = values.length > 1 ? values : values[0];
				}

				return result;
			}, {});
		}
	}

	/**
	 * Re-shaping object for Web IDL tests
	 * Only need to do it for overridden methods
	 */
	Object.defineProperties(
		Headers.prototype,
		['get', 'entries', 'forEach', 'values'].reduce((result, property) => {
			result[property] = {enumerable: true};
			return result;
		}, {})
	);

	/**
	 * Create a Headers object from an http.IncomingMessage.rawHeaders, ignoring those that do
	 * not conform to HTTP grammar productions.
	 * @param {import('http').IncomingMessage['rawHeaders']} headers
	 */
	function fromRawHeaders(headers = []) {
		return new Headers(
			headers
				// Split into pairs
				.reduce((result, value, index, array) => {
					if (index % 2 === 0) {
						result.push(array.slice(index, index + 2));
					}

					return result;
				}, [])
				.filter(([name, value]) => {
					try {
						validateHeaderName(name);
						validateHeaderValue(name, String(value));
						return true;
					} catch {
						return false;
					}
				})

		);
	}

	const redirectStatus = new Set([301, 302, 303, 307, 308]);

	/**
	 * Redirect code matching
	 *
	 * @param {number} code - Status code
	 * @return {boolean}
	 */
	const isRedirect = code => {
		return redirectStatus.has(code);
	};

	/**
	 * Response.js
	 *
	 * Response class provides content decoding
	 */

	const INTERNALS$1 = Symbol('Response internals');

	/**
	 * Response class
	 *
	 * Ref: https://fetch.spec.whatwg.org/#response-class
	 *
	 * @param   Stream  body  Readable stream
	 * @param   Object  opts  Response options
	 * @return  Void
	 */
	class Response extends Body {
		constructor(body = null, options = {}) {
			super(body, options);

			// eslint-disable-next-line no-eq-null, eqeqeq, no-negated-condition
			const status = options.status != null ? options.status : 200;

			const headers = new Headers(options.headers);

			if (body !== null && !headers.has('Content-Type')) {
				const contentType = extractContentType(body, this);
				if (contentType) {
					headers.append('Content-Type', contentType);
				}
			}

			this[INTERNALS$1] = {
				type: 'default',
				url: options.url,
				status,
				statusText: options.statusText || '',
				headers,
				counter: options.counter,
				highWaterMark: options.highWaterMark
			};
		}

		get type() {
			return this[INTERNALS$1].type;
		}

		get url() {
			return this[INTERNALS$1].url || '';
		}

		get status() {
			return this[INTERNALS$1].status;
		}

		/**
		 * Convenience property representing if the request ended normally
		 */
		get ok() {
			return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
		}

		get redirected() {
			return this[INTERNALS$1].counter > 0;
		}

		get statusText() {
			return this[INTERNALS$1].statusText;
		}

		get headers() {
			return this[INTERNALS$1].headers;
		}

		get highWaterMark() {
			return this[INTERNALS$1].highWaterMark;
		}

		/**
		 * Clone this response
		 *
		 * @return  Response
		 */
		clone() {
			return new Response(clone(this, this.highWaterMark), {
				type: this.type,
				url: this.url,
				status: this.status,
				statusText: this.statusText,
				headers: this.headers,
				ok: this.ok,
				redirected: this.redirected,
				size: this.size,
				highWaterMark: this.highWaterMark
			});
		}

		/**
		 * @param {string} url    The URL that the new response is to originate from.
		 * @param {number} status An optional status code for the response (e.g., 302.)
		 * @returns {Response}    A Response object.
		 */
		static redirect(url, status = 302) {
			if (!isRedirect(status)) {
				throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
			}

			return new Response(null, {
				headers: {
					location: new URL(url).toString()
				},
				status
			});
		}

		static error() {
			const response = new Response(null, {status: 0, statusText: ''});
			response[INTERNALS$1].type = 'error';
			return response;
		}

		get [Symbol.toStringTag]() {
			return 'Response';
		}
	}

	Object.defineProperties(Response.prototype, {
		type: {enumerable: true},
		url: {enumerable: true},
		status: {enumerable: true},
		ok: {enumerable: true},
		redirected: {enumerable: true},
		statusText: {enumerable: true},
		headers: {enumerable: true},
		clone: {enumerable: true}
	});

	const getSearch = parsedURL => {
		if (parsedURL.search) {
			return parsedURL.search;
		}

		const lastOffset = parsedURL.href.length - 1;
		const hash = parsedURL.hash || (parsedURL.href[lastOffset] === '#' ? '#' : '');
		return parsedURL.href[lastOffset - hash.length] === '?' ? '?' : '';
	};

	/**
	 * @external URL
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/URL|URL}
	 */

	/**
	 * @module utils/referrer
	 * @private
	 */

	/**
	 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#strip-url|Referrer Policy §8.4. Strip url for use as a referrer}
	 * @param {string} URL
	 * @param {boolean} [originOnly=false]
	 */
	function stripURLForUseAsAReferrer(url, originOnly = false) {
		// 1. If url is null, return no referrer.
		if (url == null) { // eslint-disable-line no-eq-null, eqeqeq
			return 'no-referrer';
		}

		url = new URL(url);

		// 2. If url's scheme is a local scheme, then return no referrer.
		if (/^(about|blob|data):$/.test(url.protocol)) {
			return 'no-referrer';
		}

		// 3. Set url's username to the empty string.
		url.username = '';

		// 4. Set url's password to null.
		// Note: `null` appears to be a mistake as this actually results in the password being `"null"`.
		url.password = '';

		// 5. Set url's fragment to null.
		// Note: `null` appears to be a mistake as this actually results in the fragment being `"#null"`.
		url.hash = '';

		// 6. If the origin-only flag is true, then:
		if (originOnly) {
			// 6.1. Set url's path to null.
			// Note: `null` appears to be a mistake as this actually results in the path being `"/null"`.
			url.pathname = '';

			// 6.2. Set url's query to null.
			// Note: `null` appears to be a mistake as this actually results in the query being `"?null"`.
			url.search = '';
		}

		// 7. Return url.
		return url;
	}

	/**
	 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#enumdef-referrerpolicy|enum ReferrerPolicy}
	 */
	const ReferrerPolicy = new Set([
		'',
		'no-referrer',
		'no-referrer-when-downgrade',
		'same-origin',
		'origin',
		'strict-origin',
		'origin-when-cross-origin',
		'strict-origin-when-cross-origin',
		'unsafe-url'
	]);

	/**
	 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#default-referrer-policy|default referrer policy}
	 */
	const DEFAULT_REFERRER_POLICY = 'strict-origin-when-cross-origin';

	/**
	 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#referrer-policies|Referrer Policy §3. Referrer Policies}
	 * @param {string} referrerPolicy
	 * @returns {string} referrerPolicy
	 */
	function validateReferrerPolicy(referrerPolicy) {
		if (!ReferrerPolicy.has(referrerPolicy)) {
			throw new TypeError(`Invalid referrerPolicy: ${referrerPolicy}`);
		}

		return referrerPolicy;
	}

	/**
	 * @see {@link https://w3c.github.io/webappsec-secure-contexts/#is-origin-trustworthy|Referrer Policy §3.2. Is origin potentially trustworthy?}
	 * @param {external:URL} url
	 * @returns `true`: "Potentially Trustworthy", `false`: "Not Trustworthy"
	 */
	function isOriginPotentiallyTrustworthy(url) {
		// 1. If origin is an opaque origin, return "Not Trustworthy".
		// Not applicable

		// 2. Assert: origin is a tuple origin.
		// Not for implementations

		// 3. If origin's scheme is either "https" or "wss", return "Potentially Trustworthy".
		if (/^(http|ws)s:$/.test(url.protocol)) {
			return true;
		}

		// 4. If origin's host component matches one of the CIDR notations 127.0.0.0/8 or ::1/128 [RFC4632], return "Potentially Trustworthy".
		const hostIp = url.host.replace(/(^\[)|(]$)/g, '');
		const hostIPVersion = node_net.isIP(hostIp);

		if (hostIPVersion === 4 && /^127\./.test(hostIp)) {
			return true;
		}

		if (hostIPVersion === 6 && /^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(hostIp)) {
			return true;
		}

		// 5. If origin's host component is "localhost" or falls within ".localhost", and the user agent conforms to the name resolution rules in [let-localhost-be-localhost], return "Potentially Trustworthy".
		// We are returning FALSE here because we cannot ensure conformance to
		// let-localhost-be-loalhost (https://tools.ietf.org/html/draft-west-let-localhost-be-localhost)
		if (/^(.+\.)*localhost$/.test(url.host)) {
			return false;
		}

		// 6. If origin's scheme component is file, return "Potentially Trustworthy".
		if (url.protocol === 'file:') {
			return true;
		}

		// 7. If origin's scheme component is one which the user agent considers to be authenticated, return "Potentially Trustworthy".
		// Not supported

		// 8. If origin has been configured as a trustworthy origin, return "Potentially Trustworthy".
		// Not supported

		// 9. Return "Not Trustworthy".
		return false;
	}

	/**
	 * @see {@link https://w3c.github.io/webappsec-secure-contexts/#is-url-trustworthy|Referrer Policy §3.3. Is url potentially trustworthy?}
	 * @param {external:URL} url
	 * @returns `true`: "Potentially Trustworthy", `false`: "Not Trustworthy"
	 */
	function isUrlPotentiallyTrustworthy(url) {
		// 1. If url is "about:blank" or "about:srcdoc", return "Potentially Trustworthy".
		if (/^about:(blank|srcdoc)$/.test(url)) {
			return true;
		}

		// 2. If url's scheme is "data", return "Potentially Trustworthy".
		if (url.protocol === 'data:') {
			return true;
		}

		// Note: The origin of blob: and filesystem: URLs is the origin of the context in which they were
		// created. Therefore, blobs created in a trustworthy origin will themselves be potentially
		// trustworthy.
		if (/^(blob|filesystem):$/.test(url.protocol)) {
			return true;
		}

		// 3. Return the result of executing §3.2 Is origin potentially trustworthy? on url's origin.
		return isOriginPotentiallyTrustworthy(url);
	}

	/**
	 * Modifies the referrerURL to enforce any extra security policy considerations.
	 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}, step 7
	 * @callback module:utils/referrer~referrerURLCallback
	 * @param {external:URL} referrerURL
	 * @returns {external:URL} modified referrerURL
	 */

	/**
	 * Modifies the referrerOrigin to enforce any extra security policy considerations.
	 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}, step 7
	 * @callback module:utils/referrer~referrerOriginCallback
	 * @param {external:URL} referrerOrigin
	 * @returns {external:URL} modified referrerOrigin
	 */

	/**
	 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#determine-requests-referrer|Referrer Policy §8.3. Determine request's Referrer}
	 * @param {Request} request
	 * @param {object} o
	 * @param {module:utils/referrer~referrerURLCallback} o.referrerURLCallback
	 * @param {module:utils/referrer~referrerOriginCallback} o.referrerOriginCallback
	 * @returns {external:URL} Request's referrer
	 */
	function determineRequestsReferrer(request, {referrerURLCallback, referrerOriginCallback} = {}) {
		// There are 2 notes in the specification about invalid pre-conditions.  We return null, here, for
		// these cases:
		// > Note: If request's referrer is "no-referrer", Fetch will not call into this algorithm.
		// > Note: If request's referrer policy is the empty string, Fetch will not call into this
		// > algorithm.
		if (request.referrer === 'no-referrer' || request.referrerPolicy === '') {
			return null;
		}

		// 1. Let policy be request's associated referrer policy.
		const policy = request.referrerPolicy;

		// 2. Let environment be request's client.
		// not applicable to node.js

		// 3. Switch on request's referrer:
		if (request.referrer === 'about:client') {
			return 'no-referrer';
		}

		// "a URL": Let referrerSource be request's referrer.
		const referrerSource = request.referrer;

		// 4. Let request's referrerURL be the result of stripping referrerSource for use as a referrer.
		let referrerURL = stripURLForUseAsAReferrer(referrerSource);

		// 5. Let referrerOrigin be the result of stripping referrerSource for use as a referrer, with the
		//    origin-only flag set to true.
		let referrerOrigin = stripURLForUseAsAReferrer(referrerSource, true);

		// 6. If the result of serializing referrerURL is a string whose length is greater than 4096, set
		//    referrerURL to referrerOrigin.
		if (referrerURL.toString().length > 4096) {
			referrerURL = referrerOrigin;
		}

		// 7. The user agent MAY alter referrerURL or referrerOrigin at this point to enforce arbitrary
		//    policy considerations in the interests of minimizing data leakage. For example, the user
		//    agent could strip the URL down to an origin, modify its host, replace it with an empty
		//    string, etc.
		if (referrerURLCallback) {
			referrerURL = referrerURLCallback(referrerURL);
		}

		if (referrerOriginCallback) {
			referrerOrigin = referrerOriginCallback(referrerOrigin);
		}

		// 8.Execute the statements corresponding to the value of policy:
		const currentURL = new URL(request.url);

		switch (policy) {
			case 'no-referrer':
				return 'no-referrer';

			case 'origin':
				return referrerOrigin;

			case 'unsafe-url':
				return referrerURL;

			case 'strict-origin':
				// 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
				//    potentially trustworthy URL, then return no referrer.
				if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
					return 'no-referrer';
				}

				// 2. Return referrerOrigin.
				return referrerOrigin.toString();

			case 'strict-origin-when-cross-origin':
				// 1. If the origin of referrerURL and the origin of request's current URL are the same, then
				//    return referrerURL.
				if (referrerURL.origin === currentURL.origin) {
					return referrerURL;
				}

				// 2. If referrerURL is a potentially trustworthy URL and request's current URL is not a
				//    potentially trustworthy URL, then return no referrer.
				if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
					return 'no-referrer';
				}

				// 3. Return referrerOrigin.
				return referrerOrigin;

			case 'same-origin':
				// 1. If the origin of referrerURL and the origin of request's current URL are the same, then
				//    return referrerURL.
				if (referrerURL.origin === currentURL.origin) {
					return referrerURL;
				}

				// 2. Return no referrer.
				return 'no-referrer';

			case 'origin-when-cross-origin':
				// 1. If the origin of referrerURL and the origin of request's current URL are the same, then
				//    return referrerURL.
				if (referrerURL.origin === currentURL.origin) {
					return referrerURL;
				}

				// Return referrerOrigin.
				return referrerOrigin;

			case 'no-referrer-when-downgrade':
				// 1. If referrerURL is a potentially trustworthy URL and request's current URL is not a
				//    potentially trustworthy URL, then return no referrer.
				if (isUrlPotentiallyTrustworthy(referrerURL) && !isUrlPotentiallyTrustworthy(currentURL)) {
					return 'no-referrer';
				}

				// 2. Return referrerURL.
				return referrerURL;

			default:
				throw new TypeError(`Invalid referrerPolicy: ${policy}`);
		}
	}

	/**
	 * @see {@link https://w3c.github.io/webappsec-referrer-policy/#parse-referrer-policy-from-header|Referrer Policy §8.1. Parse a referrer policy from a Referrer-Policy header}
	 * @param {Headers} headers Response headers
	 * @returns {string} policy
	 */
	function parseReferrerPolicyFromHeader(headers) {
		// 1. Let policy-tokens be the result of extracting header list values given `Referrer-Policy`
		//    and response’s header list.
		const policyTokens = (headers.get('referrer-policy') || '').split(/[,\s]+/);

		// 2. Let policy be the empty string.
		let policy = '';

		// 3. For each token in policy-tokens, if token is a referrer policy and token is not the empty
		//    string, then set policy to token.
		// Note: This algorithm loops over multiple policy values to allow deployment of new policy
		// values with fallbacks for older user agents, as described in § 11.1 Unknown Policy Values.
		for (const token of policyTokens) {
			if (token && ReferrerPolicy.has(token)) {
				policy = token;
			}
		}

		// 4. Return policy.
		return policy;
	}

	/**
	 * Request.js
	 *
	 * Request class contains server only options
	 *
	 * All spec algorithm step numbers are based on https://fetch.spec.whatwg.org/commit-snapshots/ae716822cb3a61843226cd090eefc6589446c1d2/.
	 */

	const INTERNALS = Symbol('Request internals');

	/**
	 * Check if `obj` is an instance of Request.
	 *
	 * @param  {*} object
	 * @return {boolean}
	 */
	const isRequest = object => {
		return (
			typeof object === 'object' &&
			typeof object[INTERNALS] === 'object'
		);
	};

	const doBadDataWarn = node_util.deprecate(() => {},
		'.data is not a valid RequestInit property, use .body instead',
		'https://github.com/node-fetch/node-fetch/issues/1000 (request)');

	/**
	 * Request class
	 *
	 * Ref: https://fetch.spec.whatwg.org/#request-class
	 *
	 * @param   Mixed   input  Url or Request instance
	 * @param   Object  init   Custom options
	 * @return  Void
	 */
	class Request extends Body {
		constructor(input, init = {}) {
			let parsedURL;

			// Normalize input and force URL to be encoded as UTF-8 (https://github.com/node-fetch/node-fetch/issues/245)
			if (isRequest(input)) {
				parsedURL = new URL(input.url);
			} else {
				parsedURL = new URL(input);
				input = {};
			}

			if (parsedURL.username !== '' || parsedURL.password !== '') {
				throw new TypeError(`${parsedURL} is an url with embedded credentials.`);
			}

			let method = init.method || input.method || 'GET';
			if (/^(delete|get|head|options|post|put)$/i.test(method)) {
				method = method.toUpperCase();
			}

			if ('data' in init) {
				doBadDataWarn();
			}

			// eslint-disable-next-line no-eq-null, eqeqeq
			if ((init.body != null || (isRequest(input) && input.body !== null)) &&
				(method === 'GET' || method === 'HEAD')) {
				throw new TypeError('Request with GET/HEAD method cannot have body');
			}

			const inputBody = init.body ?
				init.body :
				(isRequest(input) && input.body !== null ?
					clone(input) :
					null);

			super(inputBody, {
				size: init.size || input.size || 0
			});

			const headers = new Headers(init.headers || input.headers || {});

			if (inputBody !== null && !headers.has('Content-Type')) {
				const contentType = extractContentType(inputBody, this);
				if (contentType) {
					headers.set('Content-Type', contentType);
				}
			}

			let signal = isRequest(input) ?
				input.signal :
				null;
			if ('signal' in init) {
				signal = init.signal;
			}

			// eslint-disable-next-line no-eq-null, eqeqeq
			if (signal != null && !isAbortSignal(signal)) {
				throw new TypeError('Expected signal to be an instanceof AbortSignal or EventTarget');
			}

			// §5.4, Request constructor steps, step 15.1
			// eslint-disable-next-line no-eq-null, eqeqeq
			let referrer = init.referrer == null ? input.referrer : init.referrer;
			if (referrer === '') {
				// §5.4, Request constructor steps, step 15.2
				referrer = 'no-referrer';
			} else if (referrer) {
				// §5.4, Request constructor steps, step 15.3.1, 15.3.2
				const parsedReferrer = new URL(referrer);
				// §5.4, Request constructor steps, step 15.3.3, 15.3.4
				referrer = /^about:(\/\/)?client$/.test(parsedReferrer) ? 'client' : parsedReferrer;
			} else {
				referrer = undefined;
			}

			this[INTERNALS] = {
				method,
				redirect: init.redirect || input.redirect || 'follow',
				headers,
				parsedURL,
				signal,
				referrer
			};

			// Node-fetch-only options
			this.follow = init.follow === undefined ? (input.follow === undefined ? 20 : input.follow) : init.follow;
			this.compress = init.compress === undefined ? (input.compress === undefined ? true : input.compress) : init.compress;
			this.counter = init.counter || input.counter || 0;
			this.agent = init.agent || input.agent;
			this.highWaterMark = init.highWaterMark || input.highWaterMark || 16384;
			this.insecureHTTPParser = init.insecureHTTPParser || input.insecureHTTPParser || false;

			// §5.4, Request constructor steps, step 16.
			// Default is empty string per https://fetch.spec.whatwg.org/#concept-request-referrer-policy
			this.referrerPolicy = init.referrerPolicy || input.referrerPolicy || '';
		}

		/** @returns {string} */
		get method() {
			return this[INTERNALS].method;
		}

		/** @returns {string} */
		get url() {
			return node_url.format(this[INTERNALS].parsedURL);
		}

		/** @returns {Headers} */
		get headers() {
			return this[INTERNALS].headers;
		}

		get redirect() {
			return this[INTERNALS].redirect;
		}

		/** @returns {AbortSignal} */
		get signal() {
			return this[INTERNALS].signal;
		}

		// https://fetch.spec.whatwg.org/#dom-request-referrer
		get referrer() {
			if (this[INTERNALS].referrer === 'no-referrer') {
				return '';
			}

			if (this[INTERNALS].referrer === 'client') {
				return 'about:client';
			}

			if (this[INTERNALS].referrer) {
				return this[INTERNALS].referrer.toString();
			}

			return undefined;
		}

		get referrerPolicy() {
			return this[INTERNALS].referrerPolicy;
		}

		set referrerPolicy(referrerPolicy) {
			this[INTERNALS].referrerPolicy = validateReferrerPolicy(referrerPolicy);
		}

		/**
		 * Clone this request
		 *
		 * @return  Request
		 */
		clone() {
			return new Request(this);
		}

		get [Symbol.toStringTag]() {
			return 'Request';
		}
	}

	Object.defineProperties(Request.prototype, {
		method: {enumerable: true},
		url: {enumerable: true},
		headers: {enumerable: true},
		redirect: {enumerable: true},
		clone: {enumerable: true},
		signal: {enumerable: true},
		referrer: {enumerable: true},
		referrerPolicy: {enumerable: true}
	});

	/**
	 * Convert a Request to Node.js http request options.
	 *
	 * @param {Request} request - A Request instance
	 * @return The options object to be passed to http.request
	 */
	const getNodeRequestOptions = request => {
		const {parsedURL} = request[INTERNALS];
		const headers = new Headers(request[INTERNALS].headers);

		// Fetch step 1.3
		if (!headers.has('Accept')) {
			headers.set('Accept', '*/*');
		}

		// HTTP-network-or-cache fetch steps 2.4-2.7
		let contentLengthValue = null;
		if (request.body === null && /^(post|put)$/i.test(request.method)) {
			contentLengthValue = '0';
		}

		if (request.body !== null) {
			const totalBytes = getTotalBytes(request);
			// Set Content-Length if totalBytes is a number (that is not NaN)
			if (typeof totalBytes === 'number' && !Number.isNaN(totalBytes)) {
				contentLengthValue = String(totalBytes);
			}
		}

		if (contentLengthValue) {
			headers.set('Content-Length', contentLengthValue);
		}

		// 4.1. Main fetch, step 2.6
		// > If request's referrer policy is the empty string, then set request's referrer policy to the
		// > default referrer policy.
		if (request.referrerPolicy === '') {
			request.referrerPolicy = DEFAULT_REFERRER_POLICY;
		}

		// 4.1. Main fetch, step 2.7
		// > If request's referrer is not "no-referrer", set request's referrer to the result of invoking
		// > determine request's referrer.
		if (request.referrer && request.referrer !== 'no-referrer') {
			request[INTERNALS].referrer = determineRequestsReferrer(request);
		} else {
			request[INTERNALS].referrer = 'no-referrer';
		}

		// 4.5. HTTP-network-or-cache fetch, step 6.9
		// > If httpRequest's referrer is a URL, then append `Referer`/httpRequest's referrer, serialized
		// >  and isomorphic encoded, to httpRequest's header list.
		if (request[INTERNALS].referrer instanceof URL) {
			headers.set('Referer', request.referrer);
		}

		// HTTP-network-or-cache fetch step 2.11
		if (!headers.has('User-Agent')) {
			headers.set('User-Agent', 'node-fetch');
		}

		// HTTP-network-or-cache fetch step 2.15
		if (request.compress && !headers.has('Accept-Encoding')) {
			headers.set('Accept-Encoding', 'gzip, deflate, br');
		}

		let {agent} = request;
		if (typeof agent === 'function') {
			agent = agent(parsedURL);
		}

		if (!headers.has('Connection') && !agent) {
			headers.set('Connection', 'close');
		}

		// HTTP-network fetch step 4.2
		// chunked encoding is handled by Node.js

		const search = getSearch(parsedURL);

		// Pass the full URL directly to request(), but overwrite the following
		// options:
		const options = {
			// Overwrite search to retain trailing ? (issue #776)
			path: parsedURL.pathname + search,
			// The following options are not expressed in the URL
			method: request.method,
			headers: headers[Symbol.for('nodejs.util.inspect.custom')](),
			insecureHTTPParser: request.insecureHTTPParser,
			agent
		};

		return {
			/** @type {URL} */
			parsedURL,
			options
		};
	};

	/**
	 * AbortError interface for cancelled requests
	 */
	class AbortError extends FetchBaseError {
		constructor(message, type = 'aborted') {
			super(message, type);
		}
	}

	/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

	if (!globalThis.DOMException) {
	  try {
	    const { MessageChannel } = require$$0__default$1["default"],
	    port = new MessageChannel().port1,
	    ab = new ArrayBuffer();
	    port.postMessage(ab, [ab, ab]);
	  } catch (err) {
	    err.constructor.name === 'DOMException' && (
	      globalThis.DOMException = err.constructor
	    );
	  }
	}

	var nodeDomexception = globalThis.DOMException;

	const { stat } = node_fs.promises;

	/**
	 * @param {string} path filepath on the disk
	 * @param {string} [type] mimetype to use
	 */
	const blobFromSync = (path, type) => fromBlob(node_fs.statSync(path), path, type);

	/**
	 * @param {string} path filepath on the disk
	 * @param {string} [type] mimetype to use
	 * @returns {Promise<Blob>}
	 */
	const blobFrom = (path, type) => stat(path).then(stat => fromBlob(stat, path, type));

	/**
	 * @param {string} path filepath on the disk
	 * @param {string} [type] mimetype to use
	 * @returns {Promise<File>}
	 */
	const fileFrom = (path, type) => stat(path).then(stat => fromFile(stat, path, type));

	/**
	 * @param {string} path filepath on the disk
	 * @param {string} [type] mimetype to use
	 */
	const fileFromSync = (path, type) => fromFile(node_fs.statSync(path), path, type);

	// @ts-ignore
	const fromBlob = (stat, path, type = '') => new Blob$1([new BlobDataItem({
	  path,
	  size: stat.size,
	  lastModified: stat.mtimeMs,
	  start: 0
	})], { type });

	// @ts-ignore
	const fromFile = (stat, path, type = '') => new File$1([new BlobDataItem({
	  path,
	  size: stat.size,
	  lastModified: stat.mtimeMs,
	  start: 0
	})], node_path.basename(path), { type, lastModified: stat.mtimeMs });

	/**
	 * This is a blob backed up by a file on the disk
	 * with minium requirement. Its wrapped around a Blob as a blobPart
	 * so you have no direct access to this.
	 *
	 * @private
	 */
	class BlobDataItem {
	  #path
	  #start

	  constructor (options) {
	    this.#path = options.path;
	    this.#start = options.start;
	    this.size = options.size;
	    this.lastModified = options.lastModified;
	    this.originalSize = options.originalSize === undefined
	      ? options.size
	      : options.originalSize;
	  }

	  /**
	   * Slicing arguments is first validated and formatted
	   * to not be out of range by Blob.prototype.slice
	   */
	  slice (start, end) {
	    return new BlobDataItem({
	      path: this.#path,
	      lastModified: this.lastModified,
	      originalSize: this.originalSize,
	      size: end - start,
	      start: this.#start + start
	    })
	  }

	  async * stream () {
	    const { mtimeMs, size } = await stat(this.#path);

	    if (mtimeMs > this.lastModified || this.originalSize !== size) {
	      throw new nodeDomexception('The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.', 'NotReadableError')
	    }

	    yield * node_fs.createReadStream(this.#path, {
	      start: this.#start,
	      end: this.#start + this.size - 1
	    });
	  }

	  get [Symbol.toStringTag] () {
	    return 'Blob'
	  }
	}

	const supportedSchemas = new Set(['data:', 'http:', 'https:']);

	/**
	 * Fetch function
	 *
	 * @param   {string | URL | import('./request').default} url - Absolute url or Request instance
	 * @param   {*} [options_] - Fetch options
	 * @return  {Promise<import('./response').default>}
	 */
	async function fetch$1(url, options_) {
		return new Promise((resolve, reject) => {
			// Build request object
			const request = new Request(url, options_);
			const {parsedURL, options} = getNodeRequestOptions(request);
			if (!supportedSchemas.has(parsedURL.protocol)) {
				throw new TypeError(`node-fetch cannot load ${url}. URL scheme "${parsedURL.protocol.replace(/:$/, '')}" is not supported.`);
			}

			if (parsedURL.protocol === 'data:') {
				const data = dataUriToBuffer(request.url);
				const response = new Response(data, {headers: {'Content-Type': data.typeFull}});
				resolve(response);
				return;
			}

			// Wrap http.request into fetch
			const send = (parsedURL.protocol === 'https:' ? https__default["default"] : http__default["default"]).request;
			const {signal} = request;
			let response = null;

			const abort = () => {
				const error = new AbortError('The operation was aborted.');
				reject(error);
				if (request.body && request.body instanceof Stream__default["default"].Readable) {
					request.body.destroy(error);
				}

				if (!response || !response.body) {
					return;
				}

				response.body.emit('error', error);
			};

			if (signal && signal.aborted) {
				abort();
				return;
			}

			const abortAndFinalize = () => {
				abort();
				finalize();
			};

			// Send request
			const request_ = send(parsedURL.toString(), options);

			if (signal) {
				signal.addEventListener('abort', abortAndFinalize);
			}

			const finalize = () => {
				request_.abort();
				if (signal) {
					signal.removeEventListener('abort', abortAndFinalize);
				}
			};

			request_.on('error', error => {
				reject(new FetchError(`request to ${request.url} failed, reason: ${error.message}`, 'system', error));
				finalize();
			});

			fixResponseChunkedTransferBadEnding(request_, error => {
				if (response && response.body) {
					response.body.destroy(error);
				}
			});

			/* c8 ignore next 18 */
			if (process.version < 'v14') {
				// Before Node.js 14, pipeline() does not fully support async iterators and does not always
				// properly handle when the socket close/end events are out of order.
				request_.on('socket', s => {
					let endedWithEventsCount;
					s.prependListener('end', () => {
						endedWithEventsCount = s._eventsCount;
					});
					s.prependListener('close', hadError => {
						// if end happened before close but the socket didn't emit an error, do it now
						if (response && endedWithEventsCount < s._eventsCount && !hadError) {
							const error = new Error('Premature close');
							error.code = 'ERR_STREAM_PREMATURE_CLOSE';
							response.body.emit('error', error);
						}
					});
				});
			}

			request_.on('response', response_ => {
				request_.setTimeout(0);
				const headers = fromRawHeaders(response_.rawHeaders);

				// HTTP fetch step 5
				if (isRedirect(response_.statusCode)) {
					// HTTP fetch step 5.2
					const location = headers.get('Location');

					// HTTP fetch step 5.3
					let locationURL = null;
					try {
						locationURL = location === null ? null : new URL(location, request.url);
					} catch {
						// error here can only be invalid URL in Location: header
						// do not throw when options.redirect == manual
						// let the user extract the errorneous redirect URL
						if (request.redirect !== 'manual') {
							reject(new FetchError(`uri requested responds with an invalid redirect URL: ${location}`, 'invalid-redirect'));
							finalize();
							return;
						}
					}

					// HTTP fetch step 5.5
					switch (request.redirect) {
						case 'error':
							reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
							finalize();
							return;
						case 'manual':
							// Nothing to do
							break;
						case 'follow': {
							// HTTP-redirect fetch step 2
							if (locationURL === null) {
								break;
							}

							// HTTP-redirect fetch step 5
							if (request.counter >= request.follow) {
								reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
								finalize();
								return;
							}

							// HTTP-redirect fetch step 6 (counter increment)
							// Create a new Request object.
							const requestOptions = {
								headers: new Headers(request.headers),
								follow: request.follow,
								counter: request.counter + 1,
								agent: request.agent,
								compress: request.compress,
								method: request.method,
								body: clone(request),
								signal: request.signal,
								size: request.size,
								referrer: request.referrer,
								referrerPolicy: request.referrerPolicy
							};

							// when forwarding sensitive headers like "Authorization",
							// "WWW-Authenticate", and "Cookie" to untrusted targets,
							// headers will be ignored when following a redirect to a domain
							// that is not a subdomain match or exact match of the initial domain.
							// For example, a redirect from "foo.com" to either "foo.com" or "sub.foo.com"
							// will forward the sensitive headers, but a redirect to "bar.com" will not.
							if (!isDomainOrSubdomain(request.url, locationURL)) {
								for (const name of ['authorization', 'www-authenticate', 'cookie', 'cookie2']) {
									requestOptions.headers.delete(name);
								}
							}

							// HTTP-redirect fetch step 9
							if (response_.statusCode !== 303 && request.body && options_.body instanceof Stream__default["default"].Readable) {
								reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
								finalize();
								return;
							}

							// HTTP-redirect fetch step 11
							if (response_.statusCode === 303 || ((response_.statusCode === 301 || response_.statusCode === 302) && request.method === 'POST')) {
								requestOptions.method = 'GET';
								requestOptions.body = undefined;
								requestOptions.headers.delete('content-length');
							}

							// HTTP-redirect fetch step 14
							const responseReferrerPolicy = parseReferrerPolicyFromHeader(headers);
							if (responseReferrerPolicy) {
								requestOptions.referrerPolicy = responseReferrerPolicy;
							}

							// HTTP-redirect fetch step 15
							resolve(fetch$1(new Request(locationURL, requestOptions)));
							finalize();
							return;
						}

						default:
							return reject(new TypeError(`Redirect option '${request.redirect}' is not a valid value of RequestRedirect`));
					}
				}

				// Prepare response
				if (signal) {
					response_.once('end', () => {
						signal.removeEventListener('abort', abortAndFinalize);
					});
				}

				let body = Stream.pipeline(response_, new Stream.PassThrough(), error => {
					if (error) {
						reject(error);
					}
				});
				// see https://github.com/nodejs/node/pull/29376
				/* c8 ignore next 3 */
				if (process.version < 'v12.10') {
					response_.on('aborted', abortAndFinalize);
				}

				const responseOptions = {
					url: request.url,
					status: response_.statusCode,
					statusText: response_.statusMessage,
					headers,
					size: request.size,
					counter: request.counter,
					highWaterMark: request.highWaterMark
				};

				// HTTP-network fetch step 12.1.1.3
				const codings = headers.get('Content-Encoding');

				// HTTP-network fetch step 12.1.1.4: handle content codings

				// in following scenarios we ignore compression support
				// 1. compression support is disabled
				// 2. HEAD request
				// 3. no Content-Encoding header
				// 4. no content response (204)
				// 5. content not modified response (304)
				if (!request.compress || request.method === 'HEAD' || codings === null || response_.statusCode === 204 || response_.statusCode === 304) {
					response = new Response(body, responseOptions);
					resolve(response);
					return;
				}

				// For Node v6+
				// Be less strict when decoding compressed responses, since sometimes
				// servers send slightly invalid responses that are still accepted
				// by common browsers.
				// Always using Z_SYNC_FLUSH is what cURL does.
				const zlibOptions = {
					flush: zlib__default["default"].Z_SYNC_FLUSH,
					finishFlush: zlib__default["default"].Z_SYNC_FLUSH
				};

				// For gzip
				if (codings === 'gzip' || codings === 'x-gzip') {
					body = Stream.pipeline(body, zlib__default["default"].createGunzip(zlibOptions), error => {
						if (error) {
							reject(error);
						}
					});
					response = new Response(body, responseOptions);
					resolve(response);
					return;
				}

				// For deflate
				if (codings === 'deflate' || codings === 'x-deflate') {
					// Handle the infamous raw deflate response from old servers
					// a hack for old IIS and Apache servers
					const raw = Stream.pipeline(response_, new Stream.PassThrough(), error => {
						if (error) {
							reject(error);
						}
					});
					raw.once('data', chunk => {
						// See http://stackoverflow.com/questions/37519828
						if ((chunk[0] & 0x0F) === 0x08) {
							body = Stream.pipeline(body, zlib__default["default"].createInflate(), error => {
								if (error) {
									reject(error);
								}
							});
						} else {
							body = Stream.pipeline(body, zlib__default["default"].createInflateRaw(), error => {
								if (error) {
									reject(error);
								}
							});
						}

						response = new Response(body, responseOptions);
						resolve(response);
					});
					raw.once('end', () => {
						// Some old IIS servers return zero-length OK deflate responses, so
						// 'data' is never emitted. See https://github.com/node-fetch/node-fetch/pull/903
						if (!response) {
							response = new Response(body, responseOptions);
							resolve(response);
						}
					});
					return;
				}

				// For br
				if (codings === 'br') {
					body = Stream.pipeline(body, zlib__default["default"].createBrotliDecompress(), error => {
						if (error) {
							reject(error);
						}
					});
					response = new Response(body, responseOptions);
					resolve(response);
					return;
				}

				// Otherwise, use response as-is
				response = new Response(body, responseOptions);
				resolve(response);
			});

			// eslint-disable-next-line promise/prefer-await-to-then
			writeToStream(request_, request).catch(reject);
		});
	}

	function fixResponseChunkedTransferBadEnding(request, errorCallback) {
		const LAST_CHUNK = node_buffer.Buffer.from('0\r\n\r\n');

		let isChunkedTransfer = false;
		let properLastChunkReceived = false;
		let previousChunk;

		request.on('response', response => {
			const {headers} = response;
			isChunkedTransfer = headers['transfer-encoding'] === 'chunked' && !headers['content-length'];
		});

		request.on('socket', socket => {
			const onSocketClose = () => {
				if (isChunkedTransfer && !properLastChunkReceived) {
					const error = new Error('Premature close');
					error.code = 'ERR_STREAM_PREMATURE_CLOSE';
					errorCallback(error);
				}
			};

			const onData = buf => {
				properLastChunkReceived = node_buffer.Buffer.compare(buf.slice(-5), LAST_CHUNK) === 0;

				// Sometimes final 0-length chunk and end of message code are in separate packets
				if (!properLastChunkReceived && previousChunk) {
					properLastChunkReceived = (
						node_buffer.Buffer.compare(previousChunk.slice(-3), LAST_CHUNK.slice(0, 3)) === 0 &&
						node_buffer.Buffer.compare(buf.slice(-2), LAST_CHUNK.slice(3)) === 0
					);
				}

				previousChunk = buf;
			};

			socket.prependListener('close', onSocketClose);
			socket.on('data', onData);

			request.on('close', () => {
				socket.removeListener('close', onSocketClose);
				socket.removeListener('data', onData);
			});
		});
	}

	var src = /*#__PURE__*/Object.freeze({
		__proto__: null,
		FormData: FormData,
		Headers: Headers,
		Request: Request,
		Response: Response,
		FetchError: FetchError,
		AbortError: AbortError,
		isRedirect: isRedirect,
		Blob: Blob$1,
		File: File$1,
		fileFromSync: fileFromSync,
		fileFrom: fileFrom,
		blobFromSync: blobFromSync,
		blobFrom: blobFrom,
		'default': fetch$1
	});

	var require$$3 = /*@__PURE__*/getAugmentedNamespace(src);

	var tslib_1 = require$$0;
	var packageJson = tslib_1.__importStar(require$$1);
	var buffer_1 = require$$2;
	tslib_1.__importDefault(require$$3);
	// Let it be known that it is incredibly stupid that we still have to do this - Ben W 5/12/21
	// @ts-ignore
	var fetch = window.fetch.bind(window)
	    ;
	var ALKS;
	(function (ALKS) {
	    function isStsAuth(a) {
	        return a.accessKey !== undefined;
	    }
	    function isPasswordAuth(a) {
	        return a.userid !== undefined;
	    }
	    function isTokenAuth(a) {
	        return a.accessToken !== undefined;
	    }
	    (function (TrustType) {
	        TrustType["CrossAccount"] = "Cross Account";
	        TrustType["InnerAccount"] = "Inner Account";
	    })(ALKS.TrustType || (ALKS.TrustType = {}));
	    (function (PseudoBoolean) {
	        PseudoBoolean[PseudoBoolean["True"] = 1] = "True";
	        PseudoBoolean[PseudoBoolean["False"] = 0] = "False";
	    })(ALKS.PseudoBoolean || (ALKS.PseudoBoolean = {}));
	    /**
	     * ALKS JavaScript API
	     */
	    var Alks = /** @class */ (function () {
	        function Alks(config) {
	            this.config = config;
	        }
	        /**
	         * Returns a new instance of alks with pre-defined properties (which don't need to be supplied to every method).
	         *
	         * Any of the properties required by other methods can be specified here.
	         *
	         * Properties present on the current object are carried through to the newly created one.
	         *
	         * @param {Object} props - An object containing settings for the new ALKS object
	         * @returns {alks}
	         * @example
	         * var myAlks = alks.create({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         * })
	         *
	         * myAlks.getKeys({
	         *   account: 'anAccount',
	         *   role: 'PowerUser',
	         *   sessionTime: 2
	         * }).then((creds) => {
	         *   // creds.accessKey, creds.secretKey, creds.sessionToken
	         * })
	         */
	        Alks.prototype.create = function (props) {
	            var config = tslib_1.__assign(tslib_1.__assign({}, this.config), props);
	            return new Alks(config);
	        };
	        /**
	         * Returns a Promise for an array of AWS accounts (and roles) accessible by the user
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @returns {Promise<account[]>}
	         * @example
	         * alks.getAccounts({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         * }).then((accounts) => {
	         *   // accounts[0].account, accounts[0].role, accounts[0].iamKeyActive, accounts[0].maxKeyDuration, accounts[0].skypieaAccount
	         * })
	         */
	        Alks.prototype.getAccounts = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('getAccounts', props)];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, Object.keys(results.accountListRole).map(function (key) { return ({
	                                    account: key,
	                                    role: results.accountListRole[key][0].role,
	                                    iamKeyActive: results.accountListRole[key][0].iamKeyActive,
	                                    maxKeyDuration: results.accountListRole[key][0].maxKeyDuration,
	                                    skypieaAccount: results.accountListRole[key][0].skypieaAccount,
	                                }); })];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for AWS STS credentials from ALKS.
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The AWS account to use when provisioning the credentials
	         * @param {string} props.role - The ALKS role to use when provisioning the credentials
	         * @param {string} props.sessionTime - The session length for the credentials
	         * @returns {Promise<credentials>}
	         * @example
	         * alks.getKeys({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'PowerUser',
	         *   sessionTime: 2
	         * }).then((creds) => {
	         *   // creds.accessKey, creds.secretKey, creds.sessionToken, creds.consoleURL
	         * })
	         */
	        Alks.prototype.getKeys = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('getKeys', props)];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, pick(results, [
	                                    'accessKey',
	                                    'secretKey',
	                                    'sessionToken',
	                                    'consoleURL',
	                                ])];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for AWS STS credentials with IAM permissions from ALKS.
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The AWS account to use when provisioning the credentials
	         * @param {string} props.role - The ALKS role to use when provisioning the credentials
	         * @param {number} props.sessionTime - The session length for the credentials
	         * @returns {Promise<credentials>}
	         * @example
	         * alks.getIAMKeys({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   sessionTime: 1
	         * }).then((creds) => {
	         *   // creds.accessKey, creds.secretKey, creds.sessionToken, creds.consoleURL
	         * })
	         */
	        Alks.prototype.getIAMKeys = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('getIAMKeys', props)];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, pick(results, [
	                                    'accessKey',
	                                    'secretKey',
	                                    'sessionToken',
	                                    'consoleURL',
	                                ])];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for an array of all available role types (AWS IAM role types, custom role types) and their details
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {boolean} [props.getDynamicValues] - Whether to include the names of any template variables in the response (defaults to false)
	         * @returns {Promise<Array<awsRoleType>>}
	         * @example
	         * alks.getAllAWSRoleTypes({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         * }).then((roleTypes) {
	         *   // roleTypes[i].roleTypeName, roleTypes[i].defaultArns, roleTypes[i].trustRelationship
	         * })
	         *
	         * @example
	         * alks.getAllAWSRoleTypes({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   getDynamicValues: true,
	         * }).then((roleTypes) {
	         *   // roleTypes[i].roleTypeName, roleTypes[i].defaultArns, roleTypes[i].trustRelationship, roleTypes[i].templateVariables[i]
	         * })
	         */
	        Alks.prototype.getAllAWSRoleTypes = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var url, results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0:
	                            url = props.getDynamicValues
	                                ? 'allAwsRoleTypes?getDynamicValues=true'
	                                : 'allAwsRoleTypes';
	                            return [4 /*yield*/, this.internalFetch(url, props, 'GET')];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, results.roleTypes];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for an array of available AWS IAM role types
	         *
	         * @deprecated Replaced by getAllAWSRoleTypes which includes all AWS role types and their details
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @returns {Promise<Array<string>>}
	         * @example
	         * alks.getAWSRoleTypes({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         * }).then((roleTypes) {
	         *   // ['AWS Lambda', 'Amazon EC2', ... ]
	         * })
	         */
	        Alks.prototype.getAWSRoleTypes = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('getAWSRoleTypes', props)];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, JSON.parse(results.roleTypes)];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for an array of available custom role types
	         *
	         * @deprecated Replaced by getAllAWSRoleTypes which includes all AWS role types and their details
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @returns {Promise<Array<string>>}
	         * @example
	         * alks.getNonServiceAWSRoleTypes({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         * }).then((roleTypes) => {
	         *   // ['AWS Lambda', 'Amazon EC2', ...]
	         * })
	         */
	        Alks.prototype.getNonServiceAWSRoleTypes = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('getNonServiceAWSRoleTypes', props)];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, JSON.parse(results.roleTypes)];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for the results of creating a new custom AWS IAM account role
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The user's account associated with the custom role
	         * @param {string} props.role - The user's role associated with the account
	         * @param {string} props.roleName - The name of the custom AWS IAM role to create
	         * @param {string} props.roleType - The type of AWS role to use when creating the new role
	         * @param {Object} props.trustPolicy
	         * @param {number} props.includeDefaultPolicy - Whether to include the default policy in the new role (1 = yes, 0 = no)
	         * @param {boolean} props.enableAlksAccess - Whether the role has a machine identity
	         * @param {Object} props.templateFields - An object whose keys are template variable names and values are the value to substitute for those template variables
	         * @param {Array.<Object>} props.tags - A list of tag objects, where each object is in the form {key: "tagKey" value: "tagValue"}
	         * @returns {Promise<customRole>}
	         * @example
	         * alks.createRole({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   roleName: 'awsRoleName',
	         *   roleType: 'Amazon EC2',
	         *   includeDefaultPolicy: 1,
	         *   enableAlksAccess: true
	         * }).then((role) => {
	         *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile, role.tags
	         * })
	         * @example
	         * alks.createRole({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   roleName: 'awsRoleName',
	         *   trustPolicy: {
	         *      "Version": "2012-10-17",
	         *       "Statement": [
	         *           {
	         *               "Action": "sts:AssumeRole",
	         *               "Effect": "Allow",
	         *               "Principal": {
	         *                   "Service": "ec2.amazonaws.com"
	         *               }
	         *           }
	         *       ]
	         *   },
	         *   includeDefaultPolicy: 1,
	         *   enableAlksAccess: true
	         * }).then((role) => {
	         *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile, role.tags
	         * })
	         * @example
	         * alks.createRole({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   roleName: 'awsRoleName',
	         *   roleType: 'Amazon EKS IRSA',
	         *   includeDefaultPolicy: 1,
	         *   enableAlksAccess: false,
	         *   templateFields: {
	         *     OIDC_PROVIDER: 'oidc.eks.us-east-1.amazonaws.com/id/88G998884RBAD6687HBE3GETY67FQE04',
	         *     K8S_NAMESPACE: 'myNamespace',
	         *     K8S_SERVICE_ACCOUNT: 'myServiceAccount'
	         *   }
	         *   tags: [
	         *      {
	         *        key: "tagkey1",
	         *        value: "tagValue1"
	         *      },
	         *      {
	         *        key: "tagkey1",
	         *        value: "tagvalue2"
	         *      }
	         *   ],
	         * }).then((role) => {
	         *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile, role.tags
	         * })
	         */
	        Alks.prototype.createRole = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var roleTypeExists, trustPolicyExists, results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0:
	                            roleTypeExists = props.roleType != null;
	                            trustPolicyExists = props.trustPolicy != null;
	                            if (!(roleTypeExists !== trustPolicyExists)) return [3 /*break*/, 2];
	                            return [4 /*yield*/, this.internalFetch('createRole', props)];
	                        case 1:
	                            results = _a.sent();
	                            results.denyArns = results.denyArns.split(',');
	                            return [2 /*return*/, pick(results, [
	                                    'roleArn',
	                                    'denyArns',
	                                    'instanceProfileArn',
	                                    'addedRoleToInstanceProfile',
	                                    'tags',
	                                ])];
	                        case 2: throw new Error("Must include roleType or trustPolicy, but not both.");
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for the results of creating a new custom AWS IAM trust role
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The user's account associated with the custom role
	         * @param {string} props.role - The user's role associated with the account
	         * @param {string} props.roleName - The name of the custom AWS IAM role to create
	         * @param {string} props.roleType - The type of AWS role to use when creating the new role
	         * @param {number} props.includeDefaultPolicy - Whether to include the default policy in the new role (1 = yes, 0 = no)
	         * @param {string} props.trustArn - The Arn of the existing role to trust
	         * @param {string} props.trustType - Whether the trust is 'Cross Account' or 'Inner Account'
	         * @param {boolean} props.enableAlksAccess - Whether the role has a machine identity
	         * @param {Array.<Object>} props.tags - A list of tag objects, where each object is in the form {key: "tagKey" value: "tagValue"}
	         * @returns {Promise<customRole>}
	         * @example
	         * alks.createNonServiceRole({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   roleName: 'awsRoleName',
	         *   roleType: 'Amazon EC2',
	         *   includeDefaultPolicy: 1,
	         *   trustArn: 'anExistingRoleArn',
	         *   trustType: 'Cross Account',
	         *   enableAlksAccess: true
	         * }).then((role) => {
	         *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile, role.tags
	         * })
	         * @@example
	         *      * alks.createNonServiceRole({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   roleName: 'awsRoleName',
	         *   roleType: 'Amazon EC2',
	         *   includeDefaultPolicy: 1,
	         *   trustArn: 'anExistingRoleArn',
	         *   trustType: 'Cross Account',
	         *   enableAlksAccess: true,
	         *   tags: [
	         *      {
	         *        key: "tagkey1",
	         *        value: "tagValue1"
	         *      },
	         *      {
	         *        key: "tagkey1",
	         *        value: "tagvalue2"
	         *      }
	         *   ],
	         * }).then((role) => {
	         *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile, role.tags
	         * })
	         */
	        Alks.prototype.createNonServiceRole = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('createNonServiceRole', props)];
	                        case 1:
	                            results = _a.sent();
	                            results.denyArns = results.denyArns.split(',');
	                            return [2 /*return*/, pick(results, [
	                                    'roleArn',
	                                    'denyArns',
	                                    'instanceProfileArn',
	                                    'addedRoleToInstanceProfile',
	                                    'tags',
	                                ])];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for an array of AWS account roles
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The account number to get AWS roles for
	         * @returns {Promise<awsAccountRole[]>}
	         * @example
	         * alks.awsAccountRoles({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: '1234567890',
	         * }).then((roles) => {
	         *   // roles[i].roleArn, roles[i].isMachineIdentity, roles[i].assumeRolePolicyDocument
	         * })
	         */
	        Alks.prototype.awsAccountRoles = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch("awsAccountRoles?account=" + props.account, props, 'GET')];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, results.awsRoleList];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for an array of AWS custom AWS IAM account roles
	         *
	         * @deprecated Replaced by awsAccountRoles which includes AWS account roles and their details
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The user's account associated with the custom role
	         * @param {string} props.role - The user's role associated with the account
	         * @returns {Promise<string[]>}
	         * @example
	         * alks.listAWSAccountRoles({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         * }).then((roleNames) => {
	         *   // ['customRole1', 'customRole2', ...]
	         * })
	         */
	        Alks.prototype.listAWSAccountRoles = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('listAWSAccountRoles', props)];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, JSON.parse(results.jsonAWSRoleList).map(function (r) { return r.split('/').slice(-1)[0]; })];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for the Amazon Resource Name (ARN) of a custom AWS IAM account role
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The user's account associated with the custom role
	         * @param {string} props.role - The user's role associated with the account
	         * @param {string} props.roleName - The name of the custom AWS IAM role
	         * @param {Array.<Object>} props.tags - A list of tag objects, where each object is in the form {key: "tagKey" value: "tagValue"}
	         * @returns {Promise<Role>}
	         * @example
	         * alks.getAccountRole({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   roleName: 'awsRoleName'
	         * }).then((role) => {
	         *    // role.roleArn, role.isMachineIdentity, role.instanceProfileArn, role.tags
	         * })
	         */
	        Alks.prototype.getAccountRole = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('getAccountRole', props)];
	                        case 1:
	                            results = _a.sent();
	                            if (!results.roleExists) {
	                                throw new Error("Role " + props.roleName + " does not exist in this account");
	                            }
	                            return [2 /*return*/, tslib_1.__assign(tslib_1.__assign({}, pick(results, ['roleArn', 'isMachineIdentity', 'tags'])), { instanceProfileArn: results.instanceProfileARN })];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for the Amazon Resource Name (ARN) of a custom AWS IAM account role
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The user's account associated with the custom role
	         * @param {string} props.role - The user's role associated with the account
	         * @param {string} props.roleName - The name of the custom AWS IAM role
	         * @param {Array.<Object>} props.tags - A list of tag objects, where each object is in the form {key: "tagKey" value: "tagValue"}
	         * @returns {Promise<Role>}
	         * @example
	         * alks.updateRole({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   roleName: 'awsRoleName'
	         * }).then((role) => {
	         *    // role.roleArn, role.isMachineIdentity, role.instanceProfileArn, role.tags
	         * })
	         */
	        Alks.prototype.updateRole = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('role', props, 'PATCH')];
	                        case 1:
	                            results = _a.sent();
	                            if (!results.roleExists) {
	                                throw new Error("Role " + props.roleName + " does not exist in this account");
	                            }
	                            return [2 /*return*/, tslib_1.__assign(tslib_1.__assign({}, pick(results, ['roleArn', 'isMachineIdentity', 'tags'])), { instanceProfileArn: results.instanceProfileARN })];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for a boolean "true" indicating the role was deleted
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The user's account associated with the custom role
	         * @param {string} props.role - The user's role associated with the account
	         * @param {string} props.roleName - The name of the custom AWS IAM role
	         * @returns {Promise<boolean>}
	         * @example
	         * alks.deleteRole({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   roleName: 'awsRoleName'
	         * }).then(() => {
	         *   // success!
	         * })
	         */
	        Alks.prototype.deleteRole = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('deleteRole', props)];
	                        case 1:
	                            _a.sent();
	                            return [2 /*return*/, true];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for a string arn indicating the role was enabled for machine identity
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.roleArn - The Amazon Resource Name (ARN) associated with the role
	         * @returns {Promise<string>}
	         * @example
	         * alks.addRoleMachineIdentity({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   roleARN: 'arn:aws:iam::123:role/acct-managed/awsRoleName'
	         * }).then((roleARN) => {
	         *   // arn:aws:iam::123:role/acct-managed/awsRoleName
	         * })
	         */
	        Alks.prototype.addRoleMachineIdentity = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('roleMachineIdentity', props)];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, pick(results, ['machineIdentityArn'])];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for a string arn indicating the role was disabled for machine identity
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.roleArn - The Amazon Resource Name (ARN) associated with the role
	         * @returns {Promise<string>}
	         * @example
	         * alks.deleteRoleMachineIdentity({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   roleARN: 'arn:aws:iam::123:role/acct-managed/awsRoleName'
	         * }).then((roleARN) => {
	         *   // arn:aws:iam::123:role/acct-managed/awsRoleName
	         * })
	         */
	        Alks.prototype.deleteRoleMachineIdentity = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('roleMachineIdentity', props, 'DELETE')];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, pick(results, ['machineIdentityArn'])];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for a list of users who have access to the given account
	         *
	         * @param {Object} props  - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.accountId - The accountId used to find which users have access to the account
	         * @returns {Promise<alksUser[]>}
	         * @example
	         * alks.getUserAccess({
	         *    baseUrl: 'https://your.alks-host.com',
	         *    accessToken: 'abc123',
	         *    accountId: '012345678910',
	         * }).then((users) => {
	         *    // users[i].sAMAccountName, users[i].displayName, users[i].email, users[i].title, users[i].department
	         * })
	         */
	        Alks.prototype.getUserAccess = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var accountId, results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0:
	                            accountId = props.accountId;
	                            return [4 /*yield*/, this.internalFetch("userAccess/" + accountId, props, 'GET')];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, results.users];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for a map of role names to the list of users with that role for a given account
	         *
	         * @param {Object} props  - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.accountId - The accountId used to find which users have access to the account
	         * @returns {Promise<Object>}
	         * @example
	         * alks.getUserAccess({
	         *    baseUrl: 'https://your.alks-host.com',
	         *    accessToken: 'abc123',
	         *    accountId: '012345678910',
	         * }).then((users) => {
	         *    // users['Admin'].sAMAccountName, users['Admin'].displayName, users['Admin'].email, users['Admin'].title, users['Admin'].department
	         * })
	         */
	        Alks.prototype.getUserAccessByRole = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var accountId, results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0:
	                            accountId = props.accountId;
	                            return [4 /*yield*/, this.internalFetch("reports/users-by-role?accountId=" + accountId, props, 'GET')];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, results.users];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for a list of roles a user has for a given account
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.accountId - The accountId used to find which users have access to the account
	         * @param {string} props.sAMAccountName - The network id of the user to lookup
	         * @returns {Promise<string[]>}
	         * @example
	         * alks.getUserRoleAccess({
	         *    baseUrl: 'https://your.alks-host.com',
	         *    accessToken: 'abc123',
	         *    accountId: '012345678910',
	         *    sAMAccountName: 'bob1',
	         * }).then((roles) => {
	         *    // ['Admin', 'LabAdmin', ...]
	         * })
	         */
	        Alks.prototype.getUserRoleAccess = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var accountId, results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0:
	                            accountId = props.accountId;
	                            return [4 /*yield*/, this.internalFetch("userAccess/roles/" + accountId, props)];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, results.roles];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise containing a list of the account owners for an account
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.accountId - The accountId used to find which users have access to the account
	         * @returns {Promise<Object[]>}
	         * @example
	         * alks.getAccountOwners({
	         *    baseUrl: 'https://your.alks-host.com',
	         *    accessToken: 'abc123',
	         *    accountId: '012345678910',
	         * }).then((owners) => {
	         *    // owners[0].sAMAccountName, owners[0].displayName, owners[0].email, owners[0].title, owners[0].department
	         * })
	         */
	        Alks.prototype.getAccountOwners = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var accountId, results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0:
	                            accountId = props.accountId;
	                            return [4 /*yield*/, this.internalFetch("userAccess/owners/" + accountId, props, 'GET')];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, results.accountOwners];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for the results of creating new IAM user and long-term access keys
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The user's account associated with the custom role
	         * @param {string} props.role - The user's role associated with the account
	         * @param {string} props.iamUserName - The name of the IAM user to create
	         * @returns {Promise<AccessKeys>}
	         * @example
	         * alks.createAccessKeys({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   iamUserName: 'iamUserName'
	         * }).then((user) => {
	         *   // user.iamUserArn, user.accessKey, user.secretKey, user.addedIAMUserToGroup
	         * })
	         */
	        Alks.prototype.createAccessKeys = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('accessKeys', props)];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, pick(results, [
	                                    'iamUserArn',
	                                    'accessKey',
	                                    'secretKey',
	                                    'addedIAMUserToGroup',
	                                ])];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for a boolean "true" indicating the IAM user and long-term access keys were deleted
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The user's account associated with the custom role
	         * @param {string} props.role - The user's role associated with the account
	         * @param {string} props.iamUserName - The name of the IAM user to delete
	         * @returns {Promise<boolean>}
	         * @example
	         * alks.deleteIAMUser({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   iamUserName: 'iamUserName'
	         * }).then(() => {
	         *   // success!
	         * })
	         */
	        Alks.prototype.deleteIAMUser = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('IAMUser', props, 'DELETE')];
	                        case 1:
	                            _a.sent();
	                            return [2 /*return*/, true];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns the version of the ALKS Rest API
	         *
	         * @param {Object} props - An object containing the following properties
	         * @returns {Promise<Object>}
	         * @example
	         * alks.version({
	         *   ...
	         * }).then((data) => {
	         *   // data.version
	         * })
	         */
	        Alks.prototype.version = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('version', props, 'GET')];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, pick(results, ['version'])];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns information about one of the roles used to generate keys
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.accountId - The 12-digit account ID associated with the custom role
	         * @param {string} props.role - The user's role associated with the account
	         * @returns {Promise<Object>}
	         * @example
	         * alks.getLoginRole({
	         *   ...
	         * }).then((loginRole) => {
	         *   // loginRole.account, loginRole.role, loginRole.iamKeyActive, loginRole.maxKeyDuration
	         * })
	         */
	        Alks.prototype.getLoginRole = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var accountId, role, results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0:
	                            accountId = props.accountId, role = props.role;
	                            return [4 /*yield*/, this.internalFetch("loginRoles/id/" + accountId + "/" + role, props, 'GET')];
	                        case 1:
	                            results = (_a.sent());
	                            // TODO we should probably update this function to include skypieaAccount in the result since it's already being fetched - Ben W 5/10/21
	                            return [2 /*return*/, pick(results.loginRole, [
	                                    'account',
	                                    'role',
	                                    'iamKeyActive',
	                                    'maxKeyDuration',
	                                ])];
	                    }
	                });
	            });
	        };
	        /**
	         * Exchanges a refresh token for an access token
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.refreshToken - the refresh token to exchange
	         * @returns {Promise<Object>}
	         * @example
	         * alks.getAccessToken({
	         *   ...
	         * }).then((data) => {
	         *   // data.accessToken, data.expiresIn
	         * })
	         */
	        Alks.prototype.getAccessToken = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('accessToken', props)];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, pick(results, ['accessToken', 'expiresIn'])];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a list of a user's refresh tokens (Does not return the full token)
	         *
	         * @param {Object} props - An object containing the following properties
	         * @returns {Array<Object>}
	         * @example
	         * alks.getRefreshTokens({
	         *   ...
	         * }).then((tokens) => {
	         *   // token[i].clientId, token[i].id, token[i].userId, token[i].value
	         * })
	         */
	        Alks.prototype.getRefreshTokens = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('refreshTokens', props, 'GET')];
	                        case 1:
	                            results = (_a.sent());
	                            return [2 /*return*/, results.refreshTokens.map(function (token) {
	                                    return pick(token, ['clientId', 'id', 'userId', 'value']);
	                                })];
	                    }
	                });
	            });
	        };
	        /**
	         * Revokes a refresh or access token
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} [props.token] - the access or refresh token to revoke (Required if tokenId not specified)
	         * @param {string} [props.tokenId] - the ID of the refresh token to revoke (Required if token not specified)
	         * @returns {boolean}
	         * @example
	         * alks.revoke({
	         *   token: '...',
	         *   ...
	         * }).then((success) => {
	         *   // success == true
	         * })
	         *
	         * // or
	         *
	         * alks.revoke({
	         *   tokenId: '...',
	         *   ...
	         * }).then((success) => {
	         *   // success == true
	         * })
	         */
	        Alks.prototype.revoke = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch('revoke', props)];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, results.statusMessage == 'Success'];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns cost totals for the specified account for the day, week, month, year, and a breakdown of costs by service for the day and month
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {String} props.accountId - the 12-digit AWS account ID to get cost data for
	         * @returns {Object}
	         * @example
	         * alks.getCostTotals({
	         *   accountId: '012345678910',
	         * }).then((costTotals) => {
	         *   // costTotals.awsAccountId, costTotals.daily, costTotals.weekly, etc.
	         * })
	         */
	        Alks.prototype.getCostTotals = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch("costTotals/" + props.accountId, props, 'GET')];
	                        case 1:
	                            results = (_a.sent());
	                            return [2 /*return*/, pick(results.costTotals, [
	                                    'awsAccountId',
	                                    'yyyy',
	                                    'mm',
	                                    'dd',
	                                    'daily',
	                                    'weekly',
	                                    'monthly',
	                                    'yearly',
	                                    'dailyCostsByService',
	                                    'monthlyCostsByService',
	                                ])];
	                    }
	                });
	            });
	        };
	        Alks.prototype.internalFetch = function (path, args, method) {
	            if (args === void 0) { args = {}; }
	            if (method === void 0) { method = 'POST'; }
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var opts, payload, headers, credentials, response, json, err_1;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0:
	                            opts = tslib_1.__assign(tslib_1.__assign({}, this.config), args);
	                            payload = tslib_1.__assign({}, opts);
	                            headers = {
	                                'Content-Type': 'application/json',
	                                'User-Agent': "AlksJS/" + packageJson.version,
	                            };
	                            if (isTokenAuth(opts)) {
	                                headers['Authorization'] = "Bearer " + opts.accessToken;
	                                delete payload.accessToken;
	                            }
	                            else if (isStsAuth(opts)) {
	                                headers['ALKS-STS-Access-Key'] = opts.accessKey;
	                                headers['ALKS-STS-Secret-Key'] = opts.secretKey;
	                                headers['ALKS-STS-Session-Token'] = opts.sessionToken;
	                                delete payload.accessKey;
	                                delete payload.secretKey;
	                                delete payload.sessionToken;
	                            }
	                            else if (isPasswordAuth(opts)) {
	                                console.error('The userid and password properties are deprecated and should be replaced with an access token');
	                                credentials = base64Encode(opts.userid + ":" + opts.password);
	                                headers['Authorization'] = "Basic " + credentials;
	                                delete payload.userid;
	                                delete payload.password;
	                            }
	                            else ;
	                            if (opts.userAgent) {
	                                headers['User-Agent'] += " " + opts.userAgent;
	                                delete payload.userAgent;
	                            }
	                            return [4 /*yield*/, opts._fetch(opts.baseUrl + "/" + path, {
	                                    method: method,
	                                    headers: headers,
	                                    body: method == 'GET' ? undefined : JSON.stringify(payload),
	                                })];
	                        case 1:
	                            response = _a.sent();
	                            _a.label = 2;
	                        case 2:
	                            _a.trys.push([2, 4, , 5]);
	                            return [4 /*yield*/, response.json()];
	                        case 3:
	                            json = _a.sent();
	                            return [3 /*break*/, 5];
	                        case 4:
	                            err_1 = _a.sent();
	                            json = {
	                                errors: [err_1.message],
	                            };
	                            return [3 /*break*/, 5];
	                        case 5:
	                            if (!response.ok) {
	                                throw new AlksError(response, json);
	                            }
	                            return [2 /*return*/, json];
	                    }
	                });
	            });
	        };
	        return Alks;
	    }());
	    ALKS.Alks = Alks;
	    var AlksError = /** @class */ (function (_super) {
	        tslib_1.__extends(AlksError, _super);
	        function AlksError(response, json) {
	            var _this = this;
	            var errors = Array.isArray(json === null || json === void 0 ? void 0 : json.errors) ? json.errors : [];
	            if (response.statusText) {
	                errors.unshift(response.statusText);
	            }
	            var message = errors.join('; ');
	            _this = _super.call(this, message) || this;
	            _this.status = response.status;
	            _this.message = message;
	            Object.assign(_this, json);
	            return _this;
	        }
	        return AlksError;
	    }(Error));
	    ALKS.AlksError = AlksError;
	    /**
	     * Encodes a string to base 64
	     *
	     * @param str - the string to encode
	     * @private
	     * @returns the base64 encoded string
	     * @example
	     * var input = 'password';
	     * base64Encode(input);
	     */
	    function base64Encode(str) {
	        if (str === void 0) { str = ''; }
	        return buffer_1.Buffer.from(str).toString('base64');
	    }
	    function pick(obj, props) {
	        return props.reduce(function (acc, prop) { return ((acc[prop] = obj[prop]), acc); }, {});
	    }
	    var defaultConfig = {
	        _fetch: fetch,
	    };
	    var defaultAlks = Alks.prototype.create.call({}, defaultConfig);
	    ALKS.create = Alks.prototype.create.bind(defaultAlks);
	    ALKS.getAccounts = Alks.prototype.getAccounts.bind(defaultAlks);
	    ALKS.getKeys = Alks.prototype.getKeys.bind(defaultAlks);
	    ALKS.getIAMKeys = Alks.prototype.getIAMKeys.bind(defaultAlks);
	    ALKS.getAllAWSRoleTypes = Alks.prototype.getAllAWSRoleTypes.bind(defaultAlks);
	    ALKS.getAWSRoleTypes = Alks.prototype.getAWSRoleTypes.bind(defaultAlks);
	    ALKS.getNonServiceAWSRoleTypes = Alks.prototype.getNonServiceAWSRoleTypes.bind(defaultAlks);
	    ALKS.createRole = Alks.prototype.createRole.bind(defaultAlks);
	    ALKS.createNonServiceRole = Alks.prototype.createNonServiceRole.bind(defaultAlks);
	    ALKS.awsAccountRoles = Alks.prototype.awsAccountRoles.bind(defaultAlks);
	    ALKS.listAWSAccountRoles = Alks.prototype.listAWSAccountRoles.bind(defaultAlks);
	    ALKS.getAccountRole = Alks.prototype.getAccountRole.bind(defaultAlks);
	    ALKS.updateRole = Alks.prototype.updateRole.bind(defaultAlks);
	    ALKS.deleteRole = Alks.prototype.deleteRole.bind(defaultAlks);
	    ALKS.addRoleMachineIdentity = Alks.prototype.addRoleMachineIdentity.bind(defaultAlks);
	    ALKS.deleteRoleMachineIdentity = Alks.prototype.deleteRoleMachineIdentity.bind(defaultAlks);
	    ALKS.getUserAccess = Alks.prototype.getUserAccess.bind(defaultAlks);
	    ALKS.getUserAccessByRole = Alks.prototype.getUserAccessByRole.bind(defaultAlks);
	    ALKS.getUserRoleAccess = Alks.prototype.getUserRoleAccess.bind(defaultAlks);
	    ALKS.getAccountOwners = Alks.prototype.getAccountOwners.bind(defaultAlks);
	    ALKS.createAccessKeys = Alks.prototype.createAccessKeys.bind(defaultAlks);
	    ALKS.deleteIAMUser = Alks.prototype.deleteIAMUser.bind(defaultAlks);
	    ALKS.version = Alks.prototype.version.bind(defaultAlks);
	    ALKS.getLoginRole = Alks.prototype.getLoginRole.bind(defaultAlks);
	    ALKS.getAccessToken = Alks.prototype.getAccessToken.bind(defaultAlks);
	    ALKS.getRefreshTokens = Alks.prototype.getRefreshTokens.bind(defaultAlks);
	    ALKS.revoke = Alks.prototype.revoke.bind(defaultAlks);
	    ALKS.getCostTotals = Alks.prototype.getCostTotals.bind(defaultAlks);
	})(ALKS || (ALKS = {}));
	var alks = ALKS;

	let s = 0;
	const S = {
		START_BOUNDARY: s++,
		HEADER_FIELD_START: s++,
		HEADER_FIELD: s++,
		HEADER_VALUE_START: s++,
		HEADER_VALUE: s++,
		HEADER_VALUE_ALMOST_DONE: s++,
		HEADERS_ALMOST_DONE: s++,
		PART_DATA_START: s++,
		PART_DATA: s++,
		END: s++
	};

	let f = 1;
	const F = {
		PART_BOUNDARY: f,
		LAST_BOUNDARY: f *= 2
	};

	const LF = 10;
	const CR = 13;
	const SPACE = 32;
	const HYPHEN = 45;
	const COLON = 58;
	const A = 97;
	const Z = 122;

	const lower = c => c | 0x20;

	const noop = () => {};

	class MultipartParser {
		/**
		 * @param {string} boundary
		 */
		constructor(boundary) {
			this.index = 0;
			this.flags = 0;

			this.onHeaderEnd = noop;
			this.onHeaderField = noop;
			this.onHeadersEnd = noop;
			this.onHeaderValue = noop;
			this.onPartBegin = noop;
			this.onPartData = noop;
			this.onPartEnd = noop;

			this.boundaryChars = {};

			boundary = '\r\n--' + boundary;
			const ui8a = new Uint8Array(boundary.length);
			for (let i = 0; i < boundary.length; i++) {
				ui8a[i] = boundary.charCodeAt(i);
				this.boundaryChars[ui8a[i]] = true;
			}

			this.boundary = ui8a;
			this.lookbehind = new Uint8Array(this.boundary.length + 8);
			this.state = S.START_BOUNDARY;
		}

		/**
		 * @param {Uint8Array} data
		 */
		write(data) {
			let i = 0;
			const length_ = data.length;
			let previousIndex = this.index;
			let {lookbehind, boundary, boundaryChars, index, state, flags} = this;
			const boundaryLength = this.boundary.length;
			const boundaryEnd = boundaryLength - 1;
			const bufferLength = data.length;
			let c;
			let cl;

			const mark = name => {
				this[name + 'Mark'] = i;
			};

			const clear = name => {
				delete this[name + 'Mark'];
			};

			const callback = (callbackSymbol, start, end, ui8a) => {
				if (start === undefined || start !== end) {
					this[callbackSymbol](ui8a && ui8a.subarray(start, end));
				}
			};

			const dataCallback = (name, clear) => {
				const markSymbol = name + 'Mark';
				if (!(markSymbol in this)) {
					return;
				}

				if (clear) {
					callback(name, this[markSymbol], i, data);
					delete this[markSymbol];
				} else {
					callback(name, this[markSymbol], data.length, data);
					this[markSymbol] = 0;
				}
			};

			for (i = 0; i < length_; i++) {
				c = data[i];

				switch (state) {
					case S.START_BOUNDARY:
						if (index === boundary.length - 2) {
							if (c === HYPHEN) {
								flags |= F.LAST_BOUNDARY;
							} else if (c !== CR) {
								return;
							}

							index++;
							break;
						} else if (index - 1 === boundary.length - 2) {
							if (flags & F.LAST_BOUNDARY && c === HYPHEN) {
								state = S.END;
								flags = 0;
							} else if (!(flags & F.LAST_BOUNDARY) && c === LF) {
								index = 0;
								callback('onPartBegin');
								state = S.HEADER_FIELD_START;
							} else {
								return;
							}

							break;
						}

						if (c !== boundary[index + 2]) {
							index = -2;
						}

						if (c === boundary[index + 2]) {
							index++;
						}

						break;
					case S.HEADER_FIELD_START:
						state = S.HEADER_FIELD;
						mark('onHeaderField');
						index = 0;
						// falls through
					case S.HEADER_FIELD:
						if (c === CR) {
							clear('onHeaderField');
							state = S.HEADERS_ALMOST_DONE;
							break;
						}

						index++;
						if (c === HYPHEN) {
							break;
						}

						if (c === COLON) {
							if (index === 1) {
								// empty header field
								return;
							}

							dataCallback('onHeaderField', true);
							state = S.HEADER_VALUE_START;
							break;
						}

						cl = lower(c);
						if (cl < A || cl > Z) {
							return;
						}

						break;
					case S.HEADER_VALUE_START:
						if (c === SPACE) {
							break;
						}

						mark('onHeaderValue');
						state = S.HEADER_VALUE;
						// falls through
					case S.HEADER_VALUE:
						if (c === CR) {
							dataCallback('onHeaderValue', true);
							callback('onHeaderEnd');
							state = S.HEADER_VALUE_ALMOST_DONE;
						}

						break;
					case S.HEADER_VALUE_ALMOST_DONE:
						if (c !== LF) {
							return;
						}

						state = S.HEADER_FIELD_START;
						break;
					case S.HEADERS_ALMOST_DONE:
						if (c !== LF) {
							return;
						}

						callback('onHeadersEnd');
						state = S.PART_DATA_START;
						break;
					case S.PART_DATA_START:
						state = S.PART_DATA;
						mark('onPartData');
						// falls through
					case S.PART_DATA:
						previousIndex = index;

						if (index === 0) {
							// boyer-moore derrived algorithm to safely skip non-boundary data
							i += boundaryEnd;
							while (i < bufferLength && !(data[i] in boundaryChars)) {
								i += boundaryLength;
							}

							i -= boundaryEnd;
							c = data[i];
						}

						if (index < boundary.length) {
							if (boundary[index] === c) {
								if (index === 0) {
									dataCallback('onPartData', true);
								}

								index++;
							} else {
								index = 0;
							}
						} else if (index === boundary.length) {
							index++;
							if (c === CR) {
								// CR = part boundary
								flags |= F.PART_BOUNDARY;
							} else if (c === HYPHEN) {
								// HYPHEN = end boundary
								flags |= F.LAST_BOUNDARY;
							} else {
								index = 0;
							}
						} else if (index - 1 === boundary.length) {
							if (flags & F.PART_BOUNDARY) {
								index = 0;
								if (c === LF) {
									// unset the PART_BOUNDARY flag
									flags &= ~F.PART_BOUNDARY;
									callback('onPartEnd');
									callback('onPartBegin');
									state = S.HEADER_FIELD_START;
									break;
								}
							} else if (flags & F.LAST_BOUNDARY) {
								if (c === HYPHEN) {
									callback('onPartEnd');
									state = S.END;
									flags = 0;
								} else {
									index = 0;
								}
							} else {
								index = 0;
							}
						}

						if (index > 0) {
							// when matching a possible boundary, keep a lookbehind reference
							// in case it turns out to be a false lead
							lookbehind[index - 1] = c;
						} else if (previousIndex > 0) {
							// if our boundary turned out to be rubbish, the captured lookbehind
							// belongs to partData
							const _lookbehind = new Uint8Array(lookbehind.buffer, lookbehind.byteOffset, lookbehind.byteLength);
							callback('onPartData', 0, previousIndex, _lookbehind);
							previousIndex = 0;
							mark('onPartData');

							// reconsider the current character even so it interrupted the sequence
							// it could be the beginning of a new sequence
							i--;
						}

						break;
					case S.END:
						break;
					default:
						throw new Error(`Unexpected state entered: ${state}`);
				}
			}

			dataCallback('onHeaderField');
			dataCallback('onHeaderValue');
			dataCallback('onPartData');

			// Update properties for the next call
			this.index = index;
			this.state = state;
			this.flags = flags;
		}

		end() {
			if ((this.state === S.HEADER_FIELD_START && this.index === 0) ||
				(this.state === S.PART_DATA && this.index === this.boundary.length)) {
				this.onPartEnd();
			} else if (this.state !== S.END) {
				throw new Error('MultipartParser.end(): stream ended unexpectedly');
			}
		}
	}

	function _fileName(headerValue) {
		// matches either a quoted-string or a token (RFC 2616 section 19.5.1)
		const m = headerValue.match(/\bfilename=("(.*?)"|([^()<>@,;:\\"/[\]?={}\s\t]+))($|;\s)/i);
		if (!m) {
			return;
		}

		const match = m[2] || m[3] || '';
		let filename = match.slice(match.lastIndexOf('\\') + 1);
		filename = filename.replace(/%22/g, '"');
		filename = filename.replace(/&#(\d{4});/g, (m, code) => {
			return String.fromCharCode(code);
		});
		return filename;
	}

	async function toFormData(Body, ct) {
		if (!/multipart/i.test(ct)) {
			throw new TypeError('Failed to fetch');
		}

		const m = ct.match(/boundary=(?:"([^"]+)"|([^;]+))/i);

		if (!m) {
			throw new TypeError('no or bad content-type header, no multipart boundary');
		}

		const parser = new MultipartParser(m[1] || m[2]);

		let headerField;
		let headerValue;
		let entryValue;
		let entryName;
		let contentType;
		let filename;
		const entryChunks = [];
		const formData = new FormData();

		const onPartData = ui8a => {
			entryValue += decoder.decode(ui8a, {stream: true});
		};

		const appendToFile = ui8a => {
			entryChunks.push(ui8a);
		};

		const appendFileToFormData = () => {
			const file = new File$1(entryChunks, filename, {type: contentType});
			formData.append(entryName, file);
		};

		const appendEntryToFormData = () => {
			formData.append(entryName, entryValue);
		};

		const decoder = new TextDecoder('utf-8');
		decoder.decode();

		parser.onPartBegin = function () {
			parser.onPartData = onPartData;
			parser.onPartEnd = appendEntryToFormData;

			headerField = '';
			headerValue = '';
			entryValue = '';
			entryName = '';
			contentType = '';
			filename = null;
			entryChunks.length = 0;
		};

		parser.onHeaderField = function (ui8a) {
			headerField += decoder.decode(ui8a, {stream: true});
		};

		parser.onHeaderValue = function (ui8a) {
			headerValue += decoder.decode(ui8a, {stream: true});
		};

		parser.onHeaderEnd = function () {
			headerValue += decoder.decode();
			headerField = headerField.toLowerCase();

			if (headerField === 'content-disposition') {
				// matches either a quoted-string or a token (RFC 2616 section 19.5.1)
				const m = headerValue.match(/\bname=("([^"]*)"|([^()<>@,;:\\"/[\]?={}\s\t]+))/i);

				if (m) {
					entryName = m[2] || m[3] || '';
				}

				filename = _fileName(headerValue);

				if (filename) {
					parser.onPartData = appendToFile;
					parser.onPartEnd = appendFileToFormData;
				}
			} else if (headerField === 'content-type') {
				contentType = headerValue;
			}

			headerValue = '';
			headerField = '';
		};

		for await (const chunk of Body) {
			parser.write(chunk);
		}

		parser.end();

		return formData;
	}

	var multipartParser = /*#__PURE__*/Object.freeze({
		__proto__: null,
		toFormData: toFormData
	});

	exports["default"] = alks;

	Object.defineProperty(exports, '__esModule', { value: true });

	Object.assign(exports, alks);

}));
