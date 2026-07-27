import { lessons, afterwards } from "./lessons.js";

const app = document.getElementById("app");

/* ------------------------------------------------------------------
   Progress storage
   localStorage is the store; if it's unavailable (private mode, an
   embedded preview) we fall back to memory so nothing breaks.
   ------------------------------------------------------------------ */

const KEY = "swedish-grammar:completed";
let memory = [];

function readCompleted() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return memory;
  }
}

function writeCompleted(ids) {
  memory = ids;
  try {
    localStorage.setItem(KEY, JSON.stringify(ids));
  } catch {
    /* memory fallback already updated */
  }
}

function isDone(id) {
  return readCompleted().includes(id);
}

function toggleDone(id) {
  const ids = readCompleted();
  const next = ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
  writeCompleted(next);
  return next.includes(id);
}

/* ------------------------------------------------------------------
   Helpers
   ------------------------------------------------------------------ */

const CHECK_SVG =
  '<svg viewBox="0 0 16 16" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 8.5l3.5 3.5 7.5-8"/></svg>';

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Forgiving comparison: case, punctuation, spacing and accents are ignored, so
// "kon ar stor" is accepted from a keyboard without å ä ö.
function normalise(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?;:]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ------------------------------------------------------------------
   Overview
   ------------------------------------------------------------------ */

function renderOverview() {
  const completed = readCompleted();
  const pct = Math.round((completed.length / lessons.length) * 100);

  app.innerHTML = `
    <header class="masthead">
      <p class="eyebrow">Grammar for complete beginners</p>
      <h1>Swedish, on <em>your</em> terms</h1>
      <p>Three lessons covering the foundations — nouns, verbs, adjectives — each built
      out of vocabulary you actually care about.</p>
    </header>

    <div class="progress">
      <div class="progress-track" role="progressbar" aria-valuenow="${completed.length}"
           aria-valuemin="0" aria-valuemax="${lessons.length}"
           aria-label="Lessons completed">
        <div class="progress-fill" style="width:${pct}%"></div>
      </div>
      <p class="progress-label">${completed.length} of ${lessons.length} done</p>
      ${completed.length ? '<button type="button" id="reset">Reset</button>' : ""}
    </div>

    <ul class="card-list">
      ${lessons.map(renderCard).join("")}
    </ul>

    <div class="aside">
      <strong>On order:</strong> lessons 1 and 2 work in either order. Save
      <em>Adjectives</em> for after <em>Nouns</em> — every adjective ending depends on
      knowing whether a noun takes <em>en</em> or <em>ett</em>.
    </div>

    <div class="next-up">
      <h3>${afterwards.title}</h3>
      <p>${afterwards.text}</p>
    </div>
  `;

  const reset = document.getElementById("reset");
  if (reset) {
    reset.addEventListener("click", () => {
      writeCompleted([]);
      renderOverview();
    });
  }
}

function renderCard(lesson) {
  const done = isDone(lesson.id);
  const req = lesson.requires ? lessons.find((l) => l.id === lesson.requires) : null;

  return `
    <li>
      <a class="card ${done ? "done" : ""}" href="#/${lesson.id}">
        <span class="card-num">${lesson.number}</span>
        <span>
          <span class="card-theme">${esc(lesson.theme)}</span>
          <h2>${lesson.title}</h2>
          <p class="card-focus">${esc(lesson.focus)}</p>
          ${req ? `<span class="card-req">Best after lesson ${req.number}</span>` : ""}
        </span>
        <span class="check" aria-hidden="true">${CHECK_SVG}</span>
        <span class="sr-only">${done ? "Completed" : "Not started"}</span>
      </a>
    </li>
  `;
}

/* ------------------------------------------------------------------
   Lesson
   ------------------------------------------------------------------ */

function renderLesson(lesson) {
  const idx = lessons.indexOf(lesson);
  const next = lessons[idx + 1];
  const done = isDone(lesson.id);

  app.innerHTML = `
    <a class="back" href="#/">← All lessons</a>

    <header class="lesson-head">
      <p class="eyebrow">Lesson ${lesson.number} · ${esc(lesson.theme)}</p>
      <h1>${lesson.title}</h1>
      <p>${esc(lesson.summary)}</p>
    </header>

    ${lesson.blocks.map(renderBlock).join("")}

    <div class="lesson-foot">
      <button type="button" class="btn btn-primary ${done ? "is-done" : ""}" id="mark">
        ${done ? "Completed ✓" : "Mark as completed"}
      </button>
      ${
        next
          ? `<a class="next" href="#/${next.id}"><span>Next</span>${next.title} →</a>`
          : `<a class="next" href="#/"><span>Done</span>Back to overview →</a>`
      }
    </div>
  `;

  document.getElementById("mark").addEventListener("click", (e) => {
    const nowDone = toggleDone(lesson.id);
    e.target.textContent = nowDone ? "Completed ✓" : "Mark as completed";
    e.target.classList.toggle("is-done", nowDone);
  });

  wireExercises();
  window.scrollTo(0, 0);
}

function renderBlock(block, i) {
  switch (block.type) {
    case "heading":
      return `<h2 class="block-heading">${block.text}</h2>`;

    case "prose":
      return `<p class="prose">${block.text}</p>`;

    case "note":
      return `<div class="note">${block.text}</div>`;

    case "rules":
      return `
        ${block.title ? `<p class="rules-title">${block.title}</p>` : ""}
        <ul class="rules">${block.items.map((x) => `<li>${x}</li>`).join("")}</ul>
      `;

    case "table":
      return `
        ${block.caption ? `<p class="table-caption">${block.caption}</p>` : ""}
        <div class="table-wrap">
          <table>
            <thead><tr>${block.headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
            <tbody>
              ${block.rows
                .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`)
                .join("")}
            </tbody>
          </table>
        </div>
      `;

    case "examples":
      return `
        <ul class="examples">
          ${block.items
            .map(
              ([sv, en]) =>
                `<li><span class="sv" lang="sv">${esc(sv)}</span><span class="en">${esc(
                  en
                )}</span></li>`
            )
            .join("")}
        </ul>
      `;

    case "exercise":
      return `
        <section class="exercise" data-exercise="${i}">
          <p class="exercise-label">Practice</p>
          <p class="exercise-instruction">${esc(block.instruction)}</p>
          ${block.items
            .map(
              (item, j) => `
            <div class="q" data-answer="${esc(item.answer)}">
              <label>
                <span class="q-prompt">${esc(item.q)}</span>
                <span class="q-row">
                  <input type="text" autocomplete="off" autocapitalize="off"
                         spellcheck="false" lang="sv"
                         placeholder="Your answer" aria-label="Answer ${j + 1}">
                  <span class="verdict" aria-live="polite"></span>
                </span>
              </label>
              <p class="solution" hidden><span>Answer</span>${esc(item.answer)}</p>
            </div>`
            )
            .join("")}
          <div class="exercise-actions">
            <button type="button" class="btn" data-action="check">Check answers</button>
            <button type="button" class="btn" data-action="reveal">Show answers</button>
          </div>
        </section>
      `;

    default:
      return "";
  }
}

function wireExercises() {
  app.querySelectorAll(".exercise").forEach((box) => {
    const questions = [...box.querySelectorAll(".q")];

    box.querySelector('[data-action="check"]').addEventListener("click", () => {
      questions.forEach((q) => {
        const input = q.querySelector("input");
        const verdict = q.querySelector(".verdict");
        if (!input.value.trim()) {
          q.classList.remove("right", "wrong");
          verdict.textContent = "";
          return;
        }
        const ok = normalise(input.value) === normalise(q.dataset.answer);
        q.classList.toggle("right", ok);
        q.classList.toggle("wrong", !ok);
        verdict.textContent = ok ? "✓" : "✗";
        if (!ok) q.querySelector(".solution").hidden = false;
      });
    });

    box.querySelector('[data-action="reveal"]').addEventListener("click", () => {
      questions.forEach((q) => {
        q.querySelector(".solution").hidden = false;
      });
    });

    // Enter checks the whole set, so you can drill without reaching for the mouse.
    box.querySelectorAll("input").forEach((input) => {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          box.querySelector('[data-action="check"]').click();
        }
      });
    });
  });
}

/* ------------------------------------------------------------------
   Router
   ------------------------------------------------------------------ */

function route() {
  const id = location.hash.replace(/^#\/?/, "");
  const lesson = lessons.find((l) => l.id === id);
  if (lesson) {
    document.title = `${lesson.title} · Swedish grammar`;
    renderLesson(lesson);
  } else {
    document.title = "Swedish grammar for beginners";
    renderOverview();
  }
}

window.addEventListener("hashchange", route);
route();
