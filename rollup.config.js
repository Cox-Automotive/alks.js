import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'
import cleanup from 'rollup-plugin-cleanup'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

export default [
  {
    input: 'src/alks.js',
    output: {
      file: 'dist/alks.js',
      format: 'iife',
      name: 'alks',
      globals: {
        alks: 'alks',
        buffer: 'buffer',
      }
    },
    plugins: [
      json(),
      buble({
        objectAssign: 'Object.assign'
      }),
      replace({'process.browser': true}),
      resolve(),
      commonjs(),
      cleanup()
    ]
  },
  {
    input: 'src/alks.js',
    output: {
      file: 'lib/alks.node.js',
      format: 'cjs',
      name: 'alks',
    },
    plugins: [
      json(),
      replace({'process.browser': false}),
      resolve(),
      commonjs(),
    ]
  }
]
