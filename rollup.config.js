import json from 'rollup-plugin-json';
import pkg from './package.json';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'lib/src/alks.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'alks',
      exports: 'named',
      intro: 'var global = global || window || this;',
      outro: 'Object.assign(exports, alks);'
    },
    plugins: [
      json(),
      replace({'process.browser': true}),
      commonjs(),
      builtins(),
      globals(),
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
      builtins(),
      globals(),
      nodeResolve(),
      json(),
    ]
  }
]
