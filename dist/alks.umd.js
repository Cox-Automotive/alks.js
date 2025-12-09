(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.alks = {}));
})(this, (function (exports) { 'use strict';

	var global = global || window || this;

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

	/******************************************************************************
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
	/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

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

	function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
	  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
	  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
	  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
	  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
	  var _, done = false;
	  for (var i = decorators.length - 1; i >= 0; i--) {
	      var context = {};
	      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
	      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
	      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
	      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
	      if (kind === "accessor") {
	          if (result === void 0) continue;
	          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
	          if (_ = accept(result.get)) descriptor.get = _;
	          if (_ = accept(result.set)) descriptor.set = _;
	          if (_ = accept(result.init)) initializers.unshift(_);
	      }
	      else if (_ = accept(result)) {
	          if (kind === "field") initializers.unshift(_);
	          else descriptor[key] = _;
	      }
	  }
	  if (target) Object.defineProperty(target, contextIn.name, descriptor);
	  done = true;
	}
	function __runInitializers(thisArg, initializers, value) {
	  var useValue = arguments.length > 2;
	  for (var i = 0; i < initializers.length; i++) {
	      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
	  }
	  return useValue ? value : void 0;
	}
	function __propKey(x) {
	  return typeof x === "symbol" ? x : "".concat(x);
	}
	function __setFunctionName(f, name, prefix) {
	  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
	  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
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
	  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
	  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	  function verb(n) { return function (v) { return step([n, v]); }; }
	  function step(op) {
	      if (f) throw new TypeError("Generator is already executing.");
	      while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
	  var desc = Object.getOwnPropertyDescriptor(m, k);
	  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	  }
	  Object.defineProperty(o, k2, desc);
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
	  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
	  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
	  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
	  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
	  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
	  function fulfill(value) { resume("next", value); }
	  function reject(value) { resume("throw", value); }
	  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
	}

	function __asyncDelegator(o) {
	  var i, p;
	  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
	  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
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

	var ownKeys = function(o) {
	  ownKeys = Object.getOwnPropertyNames || function (o) {
	    var ar = [];
	    for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
	    return ar;
	  };
	  return ownKeys(o);
	};

	function __importStar(mod) {
	  if (mod && mod.__esModule) return mod;
	  var result = {};
	  if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
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

	function __classPrivateFieldIn(state, receiver) {
	  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
	  return typeof state === "function" ? receiver === state : state.has(receiver);
	}

	function __addDisposableResource(env, value, async) {
	  if (value !== null && value !== void 0) {
	    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
	    var dispose, inner;
	    if (async) {
	      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
	      dispose = value[Symbol.asyncDispose];
	    }
	    if (dispose === void 0) {
	      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
	      dispose = value[Symbol.dispose];
	      if (async) inner = dispose;
	    }
	    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
	    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
	    env.stack.push({ value: value, dispose: dispose, async: async });
	  }
	  else if (async) {
	    env.stack.push({ async: true });
	  }
	  return value;
	}

	var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
	  var e = new Error(message);
	  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	};

	function __disposeResources(env) {
	  function fail(e) {
	    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
	    env.hasError = true;
	  }
	  var r, s = 0;
	  function next() {
	    while (r = env.stack.pop()) {
	      try {
	        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
	        if (r.dispose) {
	          var result = r.dispose.call(r.value);
	          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
	        }
	        else s |= 1;
	      }
	      catch (e) {
	        fail(e);
	      }
	    }
	    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
	    if (env.hasError) throw env.error;
	  }
	  return next();
	}

	function __rewriteRelativeImportExtension(path, preserveJsx) {
	  if (typeof path === "string" && /^\.\.?\//.test(path)) {
	      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
	          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
	      });
	  }
	  return path;
	}

	var tslib_es6 = {
	  __extends,
	  __assign,
	  __rest,
	  __decorate,
	  __param,
	  __esDecorate,
	  __runInitializers,
	  __propKey,
	  __setFunctionName,
	  __metadata,
	  __awaiter,
	  __generator,
	  __createBinding,
	  __exportStar,
	  __values,
	  __read,
	  __spread,
	  __spreadArrays,
	  __spreadArray,
	  __await,
	  __asyncGenerator,
	  __asyncDelegator,
	  __asyncValues,
	  __makeTemplateObject,
	  __importStar,
	  __importDefault,
	  __classPrivateFieldGet,
	  __classPrivateFieldSet,
	  __classPrivateFieldIn,
	  __addDisposableResource,
	  __disposeResources,
	  __rewriteRelativeImportExtension,
	};

	var tslib_es6$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		__extends: __extends,
		get __assign () { return __assign; },
		__rest: __rest,
		__decorate: __decorate,
		__param: __param,
		__esDecorate: __esDecorate,
		__runInitializers: __runInitializers,
		__propKey: __propKey,
		__setFunctionName: __setFunctionName,
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
		__classPrivateFieldSet: __classPrivateFieldSet,
		__classPrivateFieldIn: __classPrivateFieldIn,
		__addDisposableResource: __addDisposableResource,
		__disposeResources: __disposeResources,
		__rewriteRelativeImportExtension: __rewriteRelativeImportExtension,
		'default': tslib_es6
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(tslib_es6$1);

	var name = "alks.js";
	var version = "2.14.0";
	var description = "JavaScript client for the ALKS API, usable in both modern browsers and node.js";
	var main = "dist/alks.cjs.js";
	var types = "dist/src/alks.d.ts";
	var unpkg = "dist/alks.min.js";
	var browser = "dist/alks.umd.js";
	var module = "dist/alks.esm.js";
	var scripts = {
		rmdirs: "rimraf dist lib",
		mkdirs: "mkdirp dist lib",
		clean: "npm run rmdirs && npm run mkdirs",
		rollup: "rollup -c rollup.config.js",
		minify: "uglifyjs -m reserved=[\"global\"] -c < dist/alks.umd.js > dist/alks.min.js",
		build: "npm config get registry && npm run clean && npm run compile && npm run rollup && npm run minify",
		lint: "prettier --write --no-error-on-unmatched-pattern {src,test}/**/*.{ts,js,json,md}",
		test: "npm run build && npm run lint && npm run mocha",
		mocha: "nyc mocha test/test.js",
		coverage: "nyc report --reporter=lcov --reporter=text",
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
		tslib: "^2.3.1"
	};
	var devDependencies = {
		"@rollup/plugin-commonjs": "^19.0.0",
		"@rollup/plugin-node-resolve": "^13.0.0",
		"@rollup/plugin-typescript": "^8.2.1",
		"@types/node": "^15.14.9",
		"@types/node-fetch": "^2.5.10",
		browserify: "^17.0.0",
		chai: "^4.3.4",
		"chai-as-promised": "^7.1.1",
		eslint: "^7.25.0",
		"eslint-plugin-jsdoc": "^4.1.1",
		"fetch-mock": "^12.2.0",
		husky: "^6.0.0",
		"lint-staged": "^11.0.0",
		mkdirp: "^1.0.4",
		mocha: "^10.0.0",
		nyc: "^15.1.0",
		prettier: "^2.3.0",
		rimraf: "^3.0.2",
		rollup: "^2.47.0",
		"rollup-plugin-json": "^3.1.0",
		"rollup-plugin-node-polyfills": "^0.2.1",
		"rollup-plugin-replace": "^2.2.0",
		sinon: "^10.0.0",
		tslint: "^6.1.3",
		typedoc: "^0.22.15",
		typescript: "^4.2.4",
		"uglify-js": "^3.13.6"
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
		version: version,
		description: description,
		main: main,
		types: types,
		unpkg: unpkg,
		browser: browser,
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

	var tslib_1 = require$$0;
	var packageJson = tslib_1.__importStar(require$$1);
	var buffer_1 = require$$2;
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
	         * @returns {Promise<Account[]>}
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
	                                    securityLevel: results.accountListRole[key][0].securityLevel,
	                                    accountType: results.accountListRole[key][0].accountType,
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
	         * @param {string} props.sessionTime - The session length for the credentials, in hours
	         * @returns {Promise<Key>}
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
	                                    'sessionTime',
	                                    'changeRequestNumber',
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
	         * @param {number} props.sessionTime - The session length for the credentials, in hours
	         * @returns {Promise<Key>}
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
	                                    'sessionTime',
	                                    'changeRequestNumber',
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
	         * @returns {Promise<Role>}
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
	         * @returns {Promise<Role>}
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
	         * @returns {Promise<AwsAccountRole[]>}
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
	                        case 0: return [4 /*yield*/, this.internalFetch("awsAccountRoles?account=".concat(props.account), props, 'GET')];
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
	         *    // role.roleArn, role.isMachineIdentity, role.instanceProfileArn, role.tags, role.maxSessionDurationInSeconds
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
	                                throw new Error("Role ".concat(props.roleName, " does not exist in this account"));
	                            }
	                            return [2 /*return*/, tslib_1.__assign(tslib_1.__assign({}, pick(results, [
	                                    'roleArn',
	                                    'isMachineIdentity',
	                                    'tags',
	                                    'maxSessionDurationInSeconds',
	                                ])), { instanceProfileArn: results.instanceProfileARN })];
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
	         * @param {Array.<Object>} [props.tags] - A list of tag objects, where each object is in the form {key: "tagKey", value: "tagValue"}
	         * @param {Object} [props.trustPolicy] - A trust policy object
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
	                                throw new Error("Role ".concat(props.roleName, " does not exist in this account"));
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
	         * @returns {Promise<User[]>}
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
	                            return [4 /*yield*/, this.internalFetch("userAccess/".concat(accountId), props, 'GET')];
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
	                            return [4 /*yield*/, this.internalFetch("reports/users-by-role?accountId=".concat(accountId), props, 'GET')];
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
	                            return [4 /*yield*/, this.internalFetch("userAccess/roles/".concat(accountId), props)];
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
	                            return [4 /*yield*/, this.internalFetch("userAccess/owners/".concat(accountId), props, 'GET')];
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
	         * @example
	         * alks.createAccessKeys({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   role: 'IAMAdmin',
	         *   iamUserName: 'iamUserName'
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
	                                    'tags',
	                                ])];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for an IamUser
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The user's account associated with the custom role
	         * @param {string} props.iamUserName - The name of the custom AWS IAM user
	         * @returns {Promise<User>}
	         * @example
	         * alks.getIamUser({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   iamUserName: 'iamUserName'
	         * }).then((role) => {
	         *   user.iamUserArn, user.AccountId, user.userName, user.accessKey, user.tags
	         * })
	         */
	        Alks.prototype.getIamUser = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0: return [4 /*yield*/, this.internalFetch("iam-users/id/".concat(props.account, "/").concat(props.iamUserName), props, 'GET')];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, pick(results.item, [
	                                    'arn',
	                                    'accountId',
	                                    'userName',
	                                    'accessKey',
	                                    'tags',
	                                ])];
	                    }
	                });
	            });
	        };
	        /**
	         * Returns a Promise for the results of updating an IAM user
	         *
	         * @param {Object} props - An object containing the following properties
	         * @param {string} props.baseUrl - The base URL of the ALKS service
	         * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
	         * @param {string} props.account - The user's account associated with the custom role
	         * @param {string} props.iamUserName - The name of the IAM user to update
	         * @param {Array.<Object>} props.tags - A list of tag objects, where each object is in the form {key: "tagKey" value: "tagValue"}
	         * @returns {Promise<IamUser>}
	         * @example
	         * alks.updateIamUser({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   iamUserName: 'iamUserName',
	         * }).then((user) => {
	         *   // user.iamUserArn, user.AccountId, user.userName, user.accessKey, user.tags
	         * })
	         * @example
	         * alks.updateIamUser({
	         *   baseUrl: 'https://your.alks-host.com',
	         *   accessToken: 'abc123',
	         *   account: 'anAccount',
	         *   iamUserName: 'iamUserName'
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
	         * }).then((user) => {
	         *   // user.iamUserArn, user.AccountId, user.userName, user.accessKey, user.tags
	         * })
	         */
	        Alks.prototype.updateIamUser = function (props) {
	            return tslib_1.__awaiter(this, void 0, void 0, function () {
	                var internalFetchProps, results;
	                return tslib_1.__generator(this, function (_a) {
	                    switch (_a.label) {
	                        case 0:
	                            internalFetchProps = tslib_1.__assign(tslib_1.__assign({}, props), { user: {
	                                    tags: props.tags,
	                                } });
	                            delete internalFetchProps.tags;
	                            return [4 /*yield*/, this.internalFetch("iam-users/id/".concat(props.account, "/").concat(props.iamUserName), internalFetchProps, 'PATCH')];
	                        case 1:
	                            results = _a.sent();
	                            return [2 /*return*/, pick(results.item, [
	                                    'arn',
	                                    'accountId',
	                                    'userName',
	                                    'accessKey',
	                                    'tags',
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
	                            return [4 /*yield*/, this.internalFetch("loginRoles/id/".concat(accountId, "/").concat(role), props, 'GET')];
	                        case 1:
	                            results = (_a.sent());
	                            // TODO we should probably update this function to include skypieaAccount in the result since it's already being fetched - Ben W 5/10/21
	                            return [2 /*return*/, pick(results.loginRole, [
	                                    'account',
	                                    'role',
	                                    'iamKeyActive',
	                                    'maxKeyDuration',
	                                    'securityLevel',
	                                    'accountType',
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
	                        case 0: return [4 /*yield*/, this.internalFetch("costTotals/".concat(props.accountId), props, 'GET')];
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
	                var opts, payload, headers, credentials, _i, _a, _b, key, value, response, json, err_1;
	                return tslib_1.__generator(this, function (_c) {
	                    switch (_c.label) {
	                        case 0:
	                            opts = tslib_1.__assign(tslib_1.__assign({}, this.config), args);
	                            payload = tslib_1.__assign({}, opts);
	                            headers = {
	                                'Content-Type': 'application/json',
	                                'User-Agent': "AlksJS/".concat(packageJson.version),
	                            };
	                            if (isTokenAuth(opts)) {
	                                headers['Authorization'] = "Bearer ".concat(opts.accessToken);
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
	                                credentials = base64Encode("".concat(opts.userid, ":").concat(opts.password));
	                                headers['Authorization'] = "Basic ".concat(credentials);
	                                delete payload.userid;
	                                delete payload.password;
	                            }
	                            else ;
	                            if (opts.userAgent) {
	                                headers['User-Agent'] += " ".concat(opts.userAgent);
	                                delete payload.userAgent;
	                            }
	                            if (opts.headers) {
	                                for (_i = 0, _a = Object.entries(opts.headers); _i < _a.length; _i++) {
	                                    _b = _a[_i], key = _b[0], value = _b[1];
	                                    headers[key] = value;
	                                }
	                                delete payload.headers;
	                            }
	                            return [4 /*yield*/, opts._fetch("".concat(opts.baseUrl, "/").concat(path), {
	                                    method: method,
	                                    headers: headers,
	                                    credentials: 'omit',
	                                    body: method == 'GET' ? undefined : JSON.stringify(payload),
	                                })];
	                        case 1:
	                            response = _c.sent();
	                            _c.label = 2;
	                        case 2:
	                            _c.trys.push([2, 4, , 5]);
	                            return [4 /*yield*/, response.json()];
	                        case 3:
	                            json = _c.sent();
	                            return [3 /*break*/, 5];
	                        case 4:
	                            err_1 = _c.sent();
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
	    ALKS.getIamUser = Alks.prototype.getIamUser.bind(defaultAlks);
	    ALKS.updateIamUser = Alks.prototype.updateIamUser.bind(defaultAlks);
	    ALKS.deleteIAMUser = Alks.prototype.deleteIAMUser.bind(defaultAlks);
	    ALKS.version = Alks.prototype.version.bind(defaultAlks);
	    ALKS.getLoginRole = Alks.prototype.getLoginRole.bind(defaultAlks);
	    ALKS.getAccessToken = Alks.prototype.getAccessToken.bind(defaultAlks);
	    ALKS.getRefreshTokens = Alks.prototype.getRefreshTokens.bind(defaultAlks);
	    ALKS.revoke = Alks.prototype.revoke.bind(defaultAlks);
	    ALKS.getCostTotals = Alks.prototype.getCostTotals.bind(defaultAlks);
	})(ALKS || (ALKS = {}));
	var alks = ALKS;

	exports["default"] = alks;

	Object.defineProperty(exports, '__esModule', { value: true });

	Object.assign(exports, alks);

}));
