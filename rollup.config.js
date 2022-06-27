import json from 'rollup-plugin-json';
import pkg from './package.json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';

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
      outro: 'Object.assign(exports, alks);',
      inlineDynamicImports: true,
    },
    plugins: [
      json(),
      replace({'process.browser': true}),
      commonjs(),
      nodePolyfills(),
      nodeResolve(),
    ]
  },
  {
    input: 'lib/src/alks.js',
    output: {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    plugins: [
      replace({'process.browser': false}),
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
      replace({'process.browser': true}),
      nodePolyfills(),
      nodeResolve(),
      json(),
    ]
  }
]
