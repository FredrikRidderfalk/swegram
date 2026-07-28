# swegram

A Swedish grammar learning app for beginners. Grammar lessons are re-skinned
across five themes (Stardew Valley, Animal Crossing, Bunnies, Japan, Traveling)
so the vocabulary is something the learner actually cares about.

## Architecture

**The entire app is one file: `index.html`.** HTML, CSS and JS all live inside
it. There is no build step, no bundler, no `package.json`, and no dependencies
beyond a Google Fonts `<link>`. Open the file in a browser and it runs.

Keep it that way unless explicitly asked to split it up. If you find yourself
wanting a module system, ask first.

- **Routing** is hash-based (`#/nouns`), handled by `route()`.
- **State** is `localStorage`, wrapped in `store` with an in-memory fallback so
  private mode and embedded previews don't break. Keys are namespaced
  `swedish-grammar:*`.
- **Rendering** is template strings assigned to `app.innerHTML`, then event
  listeners wired up. There is no framework and no virtual DOM — a state change
  means calling the relevant `render*()` function again.
- Everything is wrapped in an IIFE with a `try/catch` that paints a visible
  boot error, so a syntax slip shows up in the page instead of a blank screen.

## Lesson data model

Lessons live in the `lessons` array. Two kinds:

**Grammar lessons** have a `themes` object keyed by theme name, plus a
`build(themeData, themeName)` function returning an array of blocks. The
grammar explanation is written once in `build`; only the vocabulary, example
sentences and exercises vary per theme. Block types are rendered by
`renderBlock()`: `heading`, `prose`, `note`, `rules`, `table`, `examples`,
`exercise`.

**Vocabulary lessons** have `kind: "vocab"` and `linkedTo: "<grammar lesson
id>"`. They pull their word pairs from the linked lesson's theme data via
`words(themeData)`, so they inherit all five themes for free. They also inherit
the parent's unlock conditions (`prereqs()`) and must never be listed as a
prerequisite for anything.

**Match like with like on vocabulary cards.** The two sides must be the same
form: `fisk` ↔ `fish`, never `en fisk` ↔ `fish`. Strip the article with
`bare()`. Gender is taught in the grammar lesson; on a matching card it's noise
that makes the Swedish side longer than the English.

Nouns are stored via the `n(sv, en, def, pl, defPl)` helper and verbs via
`v(inf, pres, en, en3)` — **not** as pre-rendered table rows. That's what lets
one entry feed both a grammar table and a vocabulary deck. Keep it that way
when adding vocabulary.

### Adding a lesson

1. Append to `lessons` with a unique `id`, a `number`, a `section`, a `short`
   name (used in lock messages), and `requires: [...]` lesson ids.
2. Provide all five themes. A lesson with a missing theme will throw.
3. Write every exercise item as `{ q, hint, answer }` — see the gloss rule below.

## Content rules

- **Serif carries Swedish, sans carries English.** This is the core type
  contract. Swedish is set in Newsreader; English glosses are small, sans, and
  in `--ink-3`. Don't mix them up.
- **Never make the learner hunt for a word.** Every exercise item needs a
  `hint` listing the vocabulary it depends on, formatted
  `"en stad = city · stor = big"`. Don't inline hints into the question text as
  `"The city is big. (big = stor)"` — that pattern was deliberately removed.
- **Tables show both languages.** If a table cell holds Swedish that isn't
  glossed by an adjacent column, put the English underneath in
  `<span class=gloss>`. Assume the reader is a beginner who hasn't memorised
  anything yet.
- Verify Swedish grammar carefully — definite/plural forms, adjective
  agreement, and the V2 rule. Irregulars (`morot → morötter`, `öra → öron`,
  `liten → litet/små/lilla`) are easy to get wrong.
- Prose should stay concise and explain *why*, not just list forms.

## Progress, locking and the "what's new" callout

- Completion is tracked **per (lesson, theme)** pair. A lesson counts as done
  if it's complete in *any* theme; the card shows "N of 5 themes".
- Locking is driven by `requires` / `prereqs()` / `isLocked()`. A locked card
  renders as a `<div>` rather than an `<a>`, and `route()` refuses to open it.
  Lock state is communicated on the card itself — not in prose elsewhere.
- Unseen lessons get a "New" badge, cleared by `markSeen()` on first open.
- The callout is gated on `UPDATE_ID`. **When shipping something worth
  announcing, bump `UPDATE_ID` and rewrite `UPDATE_ITEMS`** — that re-shows the
  callout to everyone, including people who dismissed the previous one.

## Style

- Match the existing CSS: custom properties for all colours, both light and
  dark schemes, `prefers-reduced-motion` respected.
- Comments explain intent, not mechanics. Prefer self-documenting code.
- Modern and minimalist. Motion should be subtle.

## Verifying changes

There are no tests. Verify in a browser before claiming something works —
render the overview, open a lesson in more than one theme, and exercise
whatever you changed.

Note when driving the preview programmatically: **timers are throttled**, so
fixed `setTimeout` waits read stale state. Poll for the condition you expect
instead of sleeping a fixed amount.

## Git

- Conventional commit messages (`feat:`, `fix:`, `chore:`).
- **Don't commit or push unless explicitly asked.**
- **When asked, commit and push straight to `main`.** No feature branches, no
  PRs, no review — this repo is small and personal. The branch/PR/Jira workflow
  from the work repos does not apply here.
