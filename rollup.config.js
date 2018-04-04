import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'
import cleanup from 'rollup-plugin-cleanup'

export default [
  {
    input: 'src/alks.js',
    output: {
      file: 'dist/alks.js',
      format: 'iife',
      name: 'alks',
      globals: {
        alks: 'alks'
      }
    },
    plugins: [
      buble(),
      replace({'process.browser': true}),
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
      replace({'process.browser': false})
    ]
  }
]