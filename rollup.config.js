import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'
import cleanup from 'rollup-plugin-cleanup'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
// import builtins from 'rollup-plugin-node-builtins'
// import globals from 'rollup-plugin-node-globals'

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
      buble({
        objectAssign: 'Object.assign'
      }),
      replace({'process.browser': true}),
      // builtins(),
      // globals(),
      resolve(),
      commonjs(),
      buble(),
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
      replace({'process.browser': false}),
      resolve(),
      commonjs(),
    ]
  }
]
