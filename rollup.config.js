import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'
import json from 'rollup-plugin-json'
import pkg from './package.json'

export default [
  {
    input: 'src/alks.js',
    output: {
      file: pkg.browser,
      format: 'umd',
      name: 'alks'
    },
    plugins: [
      json(),
      buble({
        objectAssign: 'Object.assign'
      }),
      replace({'process.browser': true})
    ]
  },
  {
    input: 'src/alks.js',
    output: {
      file: pkg.main,
      format: 'cjs'
    },
    plugins: [
      json(),
      replace({'process.browser': false})
    ]
  },
  {
    input: 'src/alks.js',
    output: {
      file: pkg.module,
      format: 'es'
    },
    plugins: [
      json(),
      replace({'process.browser': true})
    ]
  }
]
