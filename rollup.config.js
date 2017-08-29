import buble from 'rollup-plugin-buble'
import replace from 'rollup-plugin-replace'
import cleanup from 'rollup-plugin-cleanup'

export default [ 
  {
    entry: 'src/alks.js',
    format: 'iife',
    moduleName: 'alks',
    dest: 'dist/alks.js',
    plugins: [
      buble(),
      replace({'process.browser': true}),
      cleanup()
    ],
    globals: {
      alks: 'alks'
    }
  }, 
  {
    entry: 'src/alks.js',
    format: 'cjs',
    moduleName: 'alks',
    dest: 'lib/alks.node.js',
    plugins: [ 
      replace({'process.browser': false})
    ]
  }
]
