
import Bundler from 'parcel-bundler'
import path from 'path'
import rimraf from 'rimraf'
import util from 'util'
import fs from 'fs'

import posthtml from 'posthtml'
import posthtmlInlineAssets from 'posthtml-inline-assets'

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const clearPath = glob => rimraf(glob, () => Promise.resolve())

// Use the production environment to trigger a minified build
process.env.NODE_ENV = 'production';

// Paths
const entryFiles = path.join(__dirname, './app/index.pug')
const outDir = path.join(__dirname, './dist')
const outFile = 'index.html'

const options = {
  outDir: outDir,
  outFile: outFile,
  publicUrl: './',
  // scopeHoist: true,
  sourceMaps: false,
}

const parcel = new Bundler(entryFiles, options)

async function build(bundler) {
  try {
    await clearPath(`${outDir}/*`)
    const bundle = await bundler.bundle()
    const html = await readFile(path.join(outDir, outFile))
    const result = await posthtml([
        posthtmlInlineAssets({
          cwd: outDir,
          transforms: {
            script: false
          }
        })
      ])
      .process(html)

    await writeFile(path.join(outDir, outFile), result.html, 'utf-8')
    await clearPath(`${outDir}/*.css`)
  } catch (error) {
    return console.error(error)
  }
}

build(parcel)
