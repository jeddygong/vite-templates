/* eslint-disable @typescript-eslint/no-var-requires */

import Koa from 'koa'
import sendFile from 'koa-send'

import path from 'path'
import fs from 'fs'

import { fileURLToPath } from 'url'

const HOST_NAME = '127.0.0.1'
const APP_PORT = 7777

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const resolve = (pathName: string) => path.resolve(__dirname, pathName)

const clientRoot = resolve('dist/client')
const template = fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
// @ts-ignore
import { render } from './dist/server/entry-server.js'
// @ts-ignore
import manifest from './dist/client/ssr-manifest.json' assert { type: 'json' }
;(async () => {
  const app = new Koa()

  app.use(async (ctx) => {
    if (ctx.path.startsWith('/assets')) {
      await sendFile(ctx, ctx.path, { root: clientRoot })
      return
    }

    const [renderedHtml, state, preloadLinks] = await render(ctx, manifest)

    const html = template
      .replace('<!--preload-links-->', preloadLinks)
      .replace('<!--app-html-->', renderedHtml)
      .replace('<!--pinia-state-->', state)

    ctx.type = 'text/html'
    ctx.body = html
  })

  app.listen(APP_PORT, () => {
    console.log(`Server is listening on http://${HOST_NAME}:${APP_PORT}`)
  })
})()
