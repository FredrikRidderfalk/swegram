# Swedish grammar for beginners

Three beginner Swedish grammar lessons — nouns, verbs, adjectives — themed around
Stardew Valley, Pokémon and bunnies. Static site, no build step, no dependencies.

Progress is stored in `localStorage`, so it's per-browser and never leaves the device.

## Run locally

ES modules need to be served over HTTP — opening `index.html` straight from the
filesystem will fail on CORS.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this folder to a repository.
2. **Settings → Pages → Build and deployment**
3. Source: **Deploy from a branch** · Branch: `main` · Folder: `/ (root)`

The site is live at `https://<user>.github.io/<repo>/` within a minute or so. No
Actions workflow needed. All asset paths are relative, so it works fine from a
subpath.

If you'd rather serve from a subfolder, move the files into `docs/` and pick
`/docs` as the folder instead.

## Structure

```
index.html          shell: fonts, meta, mount point
css/styles.css      design tokens, light + dark
js/lessons.js       all lesson content — edit this to add lessons
js/app.js           hash router, rendering, progress, answer checking
.nojekyll           skip Jekyll processing
```

## Adding a lesson

Append an object to the `lessons` array in `js/lessons.js`:

```js
{
  id: "pronouns",          // unique, becomes the URL hash: #/pronouns
  number: 4,
  theme: "Wingspan",
  title: "Pronouns and possessives",
  focus: "min/mitt/mina · subject vs object",
  summary: "One-line description shown under the lesson title.",
  requires: "nouns",       // optional — shows a "best after lesson N" hint
  blocks: [ /* ... */ ]
}
```

Block types `app.js` can render:

| Type | Shape |
| --- | --- |
| `heading` | `{ text }` |
| `prose` | `{ text }` — inline HTML allowed |
| `note` | `{ text }` — accented callout |
| `rules` | `{ title?, items: [] }` |
| `table` | `{ caption?, headers: [], rows: [[]] }` |
| `examples` | `{ items: [[swedish, english]] }` |
| `exercise` | `{ instruction, items: [{ q, answer }] }` |

Inside table cells, `<b>` highlights an ending in the accent colour and
`<span class="gloss">` adds a small English gloss.

## Notes on the design

Swedish is set in a serif (Newsreader), English in a sans (Inter) — so the
typeface tells you which language you're reading before you parse a word.

Answer checking ignores case, punctuation and diacritics, so `kon ar stor` is
accepted for `Kon är stor.` — useful on a keyboard without å ä ö.
