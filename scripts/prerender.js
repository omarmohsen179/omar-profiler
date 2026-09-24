// Injects the server-rendered app into dist/index.html so crawlers, link
// previews and no-JS visitors get real content (stats, experience, etc.).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const dist = resolve('dist')
const ssr = resolve('dist-ssr/entry-server.js')
const { render } = await import(pathToFileURL(ssr).href)

const file = resolve(dist, 'index.html')
const html = readFileSync(file, 'utf8')
if (!html.includes('<div id="root"></div>')) throw new Error('root placeholder not found')
writeFileSync(file, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))
rmSync(resolve('dist-ssr'), { recursive: true, force: true })
console.log('prerendered dist/index.html')
