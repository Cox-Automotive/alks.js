'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var buffer = require('buffer');
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));

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

var version = "1.12.5";

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
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

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
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
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
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
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

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
})(exports.TrustType || (exports.TrustType = {}));
(function (PseudoBoolean) {
    PseudoBoolean[PseudoBoolean["True"] = 1] = "True";
    PseudoBoolean[PseudoBoolean["False"] = 0] = "False";
})(exports.PseudoBoolean || (exports.PseudoBoolean = {}));
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
function getAccounts(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('getAccounts', props)];
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
}
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
function getKeys(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('getKeys', props)];
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
}
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
function getIAMKeys(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('getIAMKeys', props)];
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
}
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
function getAllAWSRoleTypes(props) {
    return __awaiter(this, void 0, void 0, function () {
        var url, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = props.getDynamicValues
                        ? 'allAwsRoleTypes?getDynamicValues=true'
                        : 'allAwsRoleTypes';
                    return [4 /*yield*/, internalFetch(url, props, 'GET')];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results.roleTypes];
            }
        });
    });
}
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
function getAWSRoleTypes(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('getAWSRoleTypes', props)];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, JSON.parse(results.roleTypes)];
            }
        });
    });
}
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
function getNonServiceAWSRoleTypes(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('getNonServiceAWSRoleTypes', props)];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, JSON.parse(results.roleTypes)];
            }
        });
    });
}
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
 * @param {number} props.includeDefaultPolicy - Whether to include the default policy in the new role (1 = yes, 0 = no)
 * @param {boolean} props.enableAlksAccess - Whether the role has a machine identity
 * @param {Object} props.templateFields - An object whose keys are template variable names and values are the value to substitute for those template variables
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
 *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
 * })
 *
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
 * }).then((role) => {
 *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
 * })
 */
function createRole(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('createRole', props)];
                case 1:
                    results = _a.sent();
                    results.denyArns = results.denyArns.split(',');
                    return [2 /*return*/, pick(results, [
                            'roleArn',
                            'denyArns',
                            'instanceProfileArn',
                            'addedRoleToInstanceProfile',
                        ])];
            }
        });
    });
}
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
 *   // role.roleArn, role.denyArns, role.instanceProfileArn, role.addedRoleToInstanceProfile
 * })
 */
function createNonServiceRole(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('createNonServiceRole', props)];
                case 1:
                    results = _a.sent();
                    results.denyArns = results.denyArns.split(',');
                    return [2 /*return*/, pick(results, [
                            'roleArn',
                            'denyArns',
                            'instanceProfileArn',
                            'addedRoleToInstanceProfile',
                        ])];
            }
        });
    });
}
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
function awsAccountRoles(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch("awsAccountRoles?account=" + props.account, props, 'GET')];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results.awsRoleList];
            }
        });
    });
}
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
function listAWSAccountRoles(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('listAWSAccountRoles', props)];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, JSON.parse(results.jsonAWSRoleList).map(function (r) { return r.split('/').slice(-1)[0]; })];
            }
        });
    });
}
/**
 * Returns a Promise for the Amazon Resource Name (ARN) of a custom AWS IAM account role
 *
 * @param {Object} props - An object containing the following properties
 * @param {string} props.baseUrl - The base URL of the ALKS service
 * @param {string} props.accessToken - The OAuth2 access token used to authorize the request
 * @param {string} props.account - The user's account associated with the custom role
 * @param {string} props.role - The user's role associated with the account
 * @param {string} props.roleName - The name of the custom AWS IAM role
 * @returns {Promise<string>}
 * @example
 * alks.getAccountRole({
 *   baseUrl: 'https://your.alks-host.com',
 *   accessToken: 'abc123',
 *   account: 'anAccount',
 *   role: 'IAMAdmin',
 *   roleName: 'awsRoleName'
 * }).then((roleARN) => {
 *   // arn:aws:iam::123:role/acct-managed/awsRoleName
 * })
 */
function getAccountRole(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('getAccountRole', props)];
                case 1:
                    results = _a.sent();
                    if (!results.roleExists) {
                        throw new Error("Role " + props.roleName + " does not exist in this account");
                    }
                    return [2 /*return*/, results.roleARN];
            }
        });
    });
}
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
function deleteRole(props) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('deleteRole', props)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
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
function addRoleMachineIdentity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('roleMachineIdentity', props)];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, pick(results, ['machineIdentityArn'])];
            }
        });
    });
}
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
function deleteRoleMachineIdentity(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('roleMachineIdentity', props, 'DELETE')];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, pick(results, ['machineIdentityArn'])];
            }
        });
    });
}
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
function getUserAccess(props) {
    return __awaiter(this, void 0, void 0, function () {
        var accountId, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    accountId = props.accountId;
                    return [4 /*yield*/, internalFetch("userAccess/" + accountId, props, 'GET')];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results.users];
            }
        });
    });
}
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
function getUserAccessByRole(props) {
    return __awaiter(this, void 0, void 0, function () {
        var accountId, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    accountId = props.accountId;
                    return [4 /*yield*/, internalFetch("reports/users-by-role?accountId=" + accountId, props, 'GET')];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results.users];
            }
        });
    });
}
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
function getUserRoleAccess(props) {
    return __awaiter(this, void 0, void 0, function () {
        var accountId, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    accountId = props.accountId;
                    return [4 /*yield*/, internalFetch("userAccess/roles/" + accountId, props)];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results.roles];
            }
        });
    });
}
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
function getAccountOwners(props) {
    return __awaiter(this, void 0, void 0, function () {
        var accountId, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    accountId = props.accountId;
                    return [4 /*yield*/, internalFetch("userAccess/owners/" + accountId, props, 'GET')];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results.accountOwners];
            }
        });
    });
}
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
function createAccessKeys(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('accessKeys', props)];
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
}
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
function deleteIAMUser(props) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('IAMUser', props, 'DELETE')];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
}
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
function version$1(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('version', props, 'GET')];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, pick(results, ['version'])];
            }
        });
    });
}
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
function getLoginRole(props) {
    return __awaiter(this, void 0, void 0, function () {
        var accountId, role, results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    accountId = props.accountId, role = props.role;
                    return [4 /*yield*/, internalFetch("loginRoles/id/" + accountId + "/" + role, props, 'GET')];
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
}
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
function getAccessToken(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('accessToken', props)];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, pick(results, ['accessToken', 'expiresIn'])];
            }
        });
    });
}
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
function getRefreshTokens(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('refreshTokens', props, 'GET')];
                case 1:
                    results = (_a.sent());
                    return [2 /*return*/, results.refreshTokens.map(function (token) {
                            return pick(token, ['clientId', 'id', 'userId', 'value']);
                        })];
            }
        });
    });
}
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
function revoke(props) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, internalFetch('revoke', props)];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results.statusMessage == 'Success'];
            }
        });
    });
}
function internalFetch(path, args, method) {
    if (args === void 0) { args = {}; }
    if (method === void 0) { method = 'POST'; }
    return __awaiter(this, void 0, void 0, function () {
        var self, config, opts, payload, headers, credentials, response, json;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    self = this;
                    config = (self === null || self === void 0 ? void 0 : self.config) || {};
                    opts = __assign(__assign({ fetch: fetch }, config), args);
                    payload = __assign({}, opts);
                    headers = {
                        'Content-Type': 'application/json',
                        'User-Agent': "AlksJS/" + version,
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
                    if (opts.userAgent) {
                        headers['User-Agent'] += " " + opts.userAgent;
                        delete payload.userAgent;
                    }
                    return [4 /*yield*/, opts.fetch(opts.baseUrl + "/" + path, {
                            method: method,
                            headers: headers,
                            body: method == 'GET' ? undefined : JSON.stringify(payload),
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json().catch(function () { })];
                case 2:
                    json = _a.sent();
                    if (!response.ok) {
                        throw new AlksError(response, json);
                    }
                    return [2 /*return*/, json];
            }
        });
    });
}
var AlksError = /** @class */ (function (_super) {
    __extends(AlksError, _super);
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
/**
 * ALKS JavaScript API
 */
var Alks = /** @class */ (function () {
    function Alks() {
        this.config = {};
        this.create = create;
        this.getAccounts = getAccounts;
        this.getKeys = getKeys;
        this.getIAMKeys = getIAMKeys;
        this.getAllAWSRoleTypes = getAllAWSRoleTypes;
        this.getAWSRoleTypes = getAWSRoleTypes;
        this.getNonServiceAWSRoleTypes = getNonServiceAWSRoleTypes;
        this.createRole = createRole;
        this.createNonServiceRole = createNonServiceRole;
        this.awsAccountRoles = awsAccountRoles;
        this.listAWSAccountRoles = listAWSAccountRoles;
        this.getAccountRole = getAccountRole;
        this.deleteRole = deleteRole;
        this.addRoleMachineIdentity = addRoleMachineIdentity;
        this.deleteRoleMachineIdentity = deleteRoleMachineIdentity;
        this.getUserAccess = getUserAccess;
        this.getUserAccessByRole = getUserAccessByRole;
        this.getUserRoleAccess = getUserRoleAccess;
        this.getAccountOwners = getAccountOwners;
        this.createAccessKeys = createAccessKeys;
        this.deleteIAMUser = deleteIAMUser;
        this.version = version$1;
        this.getLoginRole = getLoginRole;
        this.getAccessToken = getAccessToken;
        this.getRefreshTokens = getRefreshTokens;
        this.revoke = revoke;
        this.internalFetch = internalFetch;
    }
    return Alks;
}());
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
function create(props) {
    var alks = new Alks();
    alks.config = props;
    return alks;
}
var alks = new Alks();
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
    return buffer.Buffer.from(str).toString('base64');
}
function pick(obj, props) {
    return props.reduce(function (acc, prop) { return ((acc[prop] = obj[prop]), acc); }, {});
}

exports.Alks = Alks;
exports.AlksError = AlksError;
exports.addRoleMachineIdentity = addRoleMachineIdentity;
exports.awsAccountRoles = awsAccountRoles;
exports.create = create;
exports.createAccessKeys = createAccessKeys;
exports.createNonServiceRole = createNonServiceRole;
exports.createRole = createRole;
exports.default = alks;
exports.deleteIAMUser = deleteIAMUser;
exports.deleteRole = deleteRole;
exports.deleteRoleMachineIdentity = deleteRoleMachineIdentity;
exports.getAWSRoleTypes = getAWSRoleTypes;
exports.getAccessToken = getAccessToken;
exports.getAccountOwners = getAccountOwners;
exports.getAccountRole = getAccountRole;
exports.getAccounts = getAccounts;
exports.getAllAWSRoleTypes = getAllAWSRoleTypes;
exports.getIAMKeys = getIAMKeys;
exports.getKeys = getKeys;
exports.getLoginRole = getLoginRole;
exports.getNonServiceAWSRoleTypes = getNonServiceAWSRoleTypes;
exports.getRefreshTokens = getRefreshTokens;
exports.getUserAccess = getUserAccess;
exports.getUserAccessByRole = getUserAccessByRole;
exports.getUserRoleAccess = getUserRoleAccess;
exports.internalFetch = internalFetch;
exports.listAWSAccountRoles = listAWSAccountRoles;
exports.revoke = revoke;
exports.version = version$1;
