import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import createRequire from 'create-require';
const legacyRequire = createRequire(import.meta.url);
const pkg = legacyRequire('./package.json');

export default [
  {
    input: 'lib/src/alks.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'alks',
      exports: 'named',
      // without this line, karma tests complain that `global` isn't defined
      intro: 'var global = global || window || this;',
      // without this, you have to add `.default` to your require(...) like `const alks = require('alks').default`
      outro: 'Object.assign(exports, alks);'
    },
    plugins: [
      json(),
      replace({
        'process.browser': 'true',
        preventAssignment: true,
      }),
      commonjs(),
      nodePolyfills(),
      nodeResolve(),
    ]
  },
  {
    input: 'lib/src/alks.js',
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      exports: 'named',
    },
    plugins: [
      replace({
        'process.browser': 'false',
        preventAssignment: true,
      }),
      commonjs(),
      nodeResolve({preferBuiltins: true}),
      json(),
    ]
  },
  {
    input: 'lib/src/alks.js',
    output: {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
    plugins: [
      replace({
        'process.browser': 'true',
        preventAssignment: true,
      }),
      commonjs(),
      nodePolyfills(),
      nodeResolve(),
      json(),
    ]
  }
]
