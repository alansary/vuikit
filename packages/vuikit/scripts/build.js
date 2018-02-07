import path from 'path'
import globby from 'globby'
import rollup from './util/rollup'
import { run, remove, write, copy, copyRecursive, task, banner, less, minifyJS, minifyCSS } from '@miljan/build'

import pkg from '../package.json'
import rollupConfig from '../rollup.config'

const bannerText = `/**
 * Vuikit ${pkg.version}
 * (c) 2018 Miljan Aleksic
 * @license ${pkg.license}
 */`

run(async () => {
  await remove('dist')

  await task('Copy Files', () => Promise.all([
    copy('*.{md,json}', 'dist'),
    copyRecursive('src', 'dist/src', [
      '!**/__*__/*',
      '!**/__*__'
    ])
  ]))

  await task('Compile JS', async () => {
    await compileIndividual([
      'src/*/*/index.js',
      '!src/*/datepicker/index.js'
    ], 'dist')

    // compile ES index
    await compile({
      input: 'src/vuikit.esm.js',
      output: {
        format: 'es'
      }
    }, 'dist/dist/vuikit.esm.js')

    // compile CJS index
    await compile({
      input: 'src/vuikit.cjs.js',
      output: {
        format: 'cjs'
      }
    }, 'dist/dist/vuikit.cjs.js')

    // compile dist as UMD
    await compile({
      input: 'src/vuikit.cjs.js',
      output: {
        name: 'Vuikit',
        format: 'umd'
      },
      external: []
    }, 'dist/dist/vuikit.js')

    await minifyJS({
      src: 'dist/dist/vuikit.js',
      dest: 'dist/dist/vuikit.min.js',
      options: {
        sourceMap: true
      }
    })
  })

  await task('Compile CSS', async () => {
    await less({
      src: 'src/theme/index.less',
      dest: 'dist/dist/vuikit.css',
      options: {
        relativeUrls: true,
        paths: [
          path.resolve(__dirname, '../src/theme'),
          path.resolve(__dirname, '../../../node_modules')
        ]
      }
    })

    await minifyCSS({
      src: 'dist/dist/vuikit.css',
      dest: 'dist/dist/vuikit.min.css',
      options: {
        sourceMap: true
      }
    })
  })

  await banner([
    'dist/*.js',
    'dist/dist/*.{js,css}'
  ], bannerText)
})

async function compileIndividual (paths, dest) {
  const resources = await globby(paths)

  await Promise.all(resources.map(_compile))

  async function _compile (input) {
    const dirname = path.dirname(input)
    const basename = dirname.split('/').pop()

    await compile({
      input,
      output: {
        format: 'es'
      },
      external: id => id.match(/@?vuikit\/core/)
    }, `${dest}/${basename}.js`)
  }
}

async function compile (config, dest) {
  config = {
    ...rollupConfig,
    ...config
  }

  const { code } = await rollup(config)
  await write(`${dest}`, code, { log: true })
}
