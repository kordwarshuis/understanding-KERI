/**
 * GitHub Pages returns 404.html for unknown paths. That keeps the SPA working
 * in browsers, but social crawlers often refuse to unfurl a 404.
 * Write a real index.html under each shareable route so those URLs return 200.
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const site = 'https://kordwarshuis.github.io/understanding-KERI'

const routes = [
  {
    path: '/',
    title: 'The KERI Hearth',
    description:
      'A warm, plain-language guide to KERI for parents, lawyers, policymakers, developers, and anyone else who wants to understand it.',
    ogTitle: 'The KERI Hearth — a warm way into KERI',
    ogDescription:
      'KERI is easier to trust once someone explains it kindly. Sit down as a parent, lawyer, policymaker, developer, manager, or clinician — and hear it in that language.',
  },
  {
    path: '/digest/',
    title: 'How a digest is made — The KERI Hearth',
    description:
      'SHA-256, in pictures: any length in, one short fingerprint out, and why that fingerprint can be published before the bytes.',
    ogTitle: 'How a digest is made — The KERI Hearth',
    ogDescription:
      'In pictures. SHA-256 turns any sentence into a 256-bit digest. Same bytes, same digest. Change one character, and it will not match.',
  },
  {
    path: '/pre-rotation/',
    title: 'How a spare key stays ahead — The KERI Hearth',
    description:
      'About a minute, in pictures: how KERI keeps a spare key ahead of theft with pre-rotation — explained kindly.',
    ogTitle: 'How a spare key stays ahead — The KERI Hearth',
    ogDescription:
      'About a minute, in pictures. Today’s key signs; the next key stays sealed as a hash until you need it. That is pre-rotation.',
  },
  {
    path: '/keys/',
    title: 'How a public key locks a message — The KERI Hearth',
    description:
      'Public-key encryption, in pictures: one key you share, one key you keep, and why a copy of the public key cannot open what it locked.',
    ogTitle: 'How a public key locks a message — The KERI Hearth',
    ogDescription:
      'In pictures. The public key locks; only the private key opens. Turn the pair around and it signs. Share one, keep the other.',
  },
  {
    path: '/what/',
    title: 'What KERI does — The KERI Hearth',
    description:
      'About ninety seconds, no jargon: what KERI changes for you and for everyone you deal with online.',
    ogTitle: 'What KERI does — The KERI Hearth',
    ogDescription:
      'Not how it works. Just what changes for you — about ninety seconds, no jargon.',
  },
  {
    path: '/story/',
    title: 'A name that can change its locks — The KERI Hearth',
    description:
      'The shared story of a lasting name and keys that can rotate when something goes wrong.',
    ogTitle: 'A name that can change its locks — The KERI Hearth',
    ogDescription:
      'Walk the shared story: today’s key, a sealed spare, and a name that stays yours when the locks change.',
  },
  {
    path: '/words/',
    title: 'Words, said plainly — The KERI Hearth',
    description: 'A small dictionary of KERI words, said plainly.',
    ogTitle: 'Words, said plainly — The KERI Hearth',
    ogDescription: 'The jargon is real. It does not have to arrive all at once.',
  },
  {
    path: '/sources/',
    title: 'Sources — The KERI Hearth',
    description: 'Where the explanations in The KERI Hearth are drawn from.',
    ogTitle: 'Sources — The KERI Hearth',
    ogDescription: 'English source texts this hearth reads from — not the specification itself.',
  },
]

function replaceMeta(html, route) {
  const url = `${site}${route.path === '/' ? '/' : route.path}`
  const twitterDescription =
    route.ogDescription.length > 200
      ? `${route.ogDescription.slice(0, 197)}…`
      : route.ogDescription

  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
    .replace(
      /(<meta\s+name="description"\s+content=")[^"]*(")/,
      `$1${escapeAttr(route.description)}$2`,
    )
    .replace(
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/,
      `$1${escapeAttr(route.ogTitle)}$2`,
    )
    .replace(
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/,
      `$1${escapeAttr(route.ogDescription)}$2`,
    )
    .replace(
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/,
      `$1${escapeAttr(url)}$2`,
    )
    .replace(
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/,
      `$1${escapeAttr(url)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/,
      `$1${escapeAttr(route.ogTitle)}$2`,
    )
    .replace(
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/,
      `$1${escapeAttr(twitterDescription)}$2`,
    )
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll('"', '&quot;')
}

const shell = readFileSync(join(dist, 'index.html'), 'utf8')

for (const route of routes) {
  const html = replaceMeta(shell, route)
  if (route.path === '/') {
    writeFileSync(join(dist, 'index.html'), html)
    continue
  }
  const out = join(dist, route.path, 'index.html')
  mkdirSync(dirname(out), { recursive: true })
  writeFileSync(out, html)
  console.log('wrote', route.path)
}

// Keep SPA fallback for dynamic paths (/path/…, /words/…)
copyFileSync(join(dist, 'index.html'), join(dist, '404.html'))
console.log('wrote 404.html')
