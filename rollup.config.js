import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default [
  {
    input: 'src/alks.ts',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'alks'
    },
    plugins: [
      builtins(),
      globals(),
      typescript(),
      json(),
      buble({
        objectAssign: 'Object.assign'
      }),
      replace({'process.browser': true})
    ]
  },
  {
    input: 'src/alks.ts',
    output: {
      file: pkg.main,
      format: 'cjs'
    },
    plugins: [
      builtins(),
      globals(),
      typescript(),
      json(),
      replace({'process.browser': false})
    ]
  },
  {
    input: 'src/alks.ts',
    output: {
      file: pkg.module,
      format: 'es'
    },
    plugins: [
      builtins(),
      globals(),
      typescript(),
      json(),
      replace({'process.browser': true})
    ]
  }
]
