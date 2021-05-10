import json from 'rollup-plugin-json';
import pkg from './package.json';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default [
  {
    input: 'src/alks.ts',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'alks',
      exports: 'named',
    },
    plugins: [
      builtins(),
      globals(),
      nodeResolve(),
      typescript(),
      json(),
    ]
  },
  {
    input: 'src/alks.ts',
    output: {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    plugins: [
      builtins(),
      globals(),
      nodeResolve(),
      typescript(),
      json(),
    ]
  },
  {
    input: 'src/alks.ts',
    output: {
      file: pkg.module,
      format: 'es',
      exports: 'named',
    },
    plugins: [
      builtins(),
      globals(),
      nodeResolve(),
      typescript(),
      json(),
    ]
  }
]
