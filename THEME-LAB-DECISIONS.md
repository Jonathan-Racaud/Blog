# Theme Lab — Decision Log

> Scope: the blank-slate theme exploration for this Hugo site, exercised through the `theme-lab` test page.
> Status: **iteration 02 — TOC locked to the side rail**. Single living test page at `/theme-lab/`; all TOC comparison pages are scrapped. Next candidates: snippet component, tags/meta chips, navigation & header treatment.
> Companion: the same decisions are saved in Reasonix project memory under `jracaud-theme-lab-decisions`.

---

## 1. Original prompt / working contract

The user asked for a UI/UX design partner to iterate on a new theme for their Hugo-based site. The contract was:

- Guide the user toward their vision and make sure the implemented design follows the laws of UI.
- The user is not a UI designer and may not know the correct terms — so the assistant must be **proactive and ask questions** to refine needs.
- Work in an **iterative manner** so the user can see the result as it evolves.
- First step: create a **new test page** on the blog with a **CSS stylesheet specific to that page**.
- **Start from a blank state** and do **not** reuse the existing theme for this session.

---

## 2. Decision round 1 — vision (`decision_id: dec-864748fef30bca17`)

Three questions were asked via `ask`.

### 2.1 Content type (multi-select)

Options offered:

- Long-form articles — readability and typography first
- Snippets / code notes — code blocks and copy buttons matter
- Projects / portfolio — cards, images, case-study layouts
- Everything above — a general-purpose personal-site theme

**Answer: "Everything above"** — long-form articles, snippets/code notes, and projects/portfolio all in scope. The theme is a general-purpose personal-site theme.

### 2.2 Visual direction

Options offered:

- Minimal editorial
- Developer / terminal
- Warm & playful
- Brutalist / bold

**Answer: freeform (none of the options).** The user said they have many competing visual styles and want something that **feels tangible, like the old web**. The aesthetics to draw from are:

- **Vector Heart** (the Wipeout games)
- **Cassette futurism**
- **Modern minimalism** like Nothing or Teenage Engineering
- **Technical documents**

Explicitly **excluded**: anything close to the **neo-brutalism** movement.

The proposed concept was: the website's **"shell" in a retro aesthetic with the content in a recessed panel**, or the **opposite — emulating a cathode screen**. Constraints on the "screen": it must **not be hard to read** and must **not emulate an old terminal**. Everything should feel like a **modern twist / modern implementation** of those ideas, **mobile-first and responsive**.

### 2.3 Color mode

Options offered:

- Light, paper-like
- Dark
- Both, with a toggle

**Answer: Light.**

---

## 3. Decision round 2 — concept lock (`decision_id: dec-8cd4bdfa79702e68`)

Three more questions were asked to lock the first draft.

### 3.1 Core metaphor

Options offered:

- **Recessed panel first** — content sits in an inset "screen" set into a light device body (most readable, tangible)
- Cathode screen first — whole page is a softly glowing screen with subtle phosphor tint (bolder, more atmospheric)
- Hybrid — device body + recessed panel on desktop, collapsing to full-bleed screen feel on mobile

**Answer: Recessed panel first.**

### 3.2 Light palette

Options offered:

- **Cassette cream + orange/teal** — warm off-white plastic, greys, orange + teal accents (cassette futurism)
- Cool grey + RGB accents — cyan/magenta/yellow (Wipeout Vector Heart in light mode)
- Technical paper + one accent — paper white, ink black, one strong accent

**Answer: Cassette cream + orange/teal.**

### 3.3 Chrome details

Options offered:

- Rich detail — panel labels, serial numbers, tiny grid marks, status LEDs
- Subtle — a few labels and one accent line, restraint
- **Barely there** — almost no chrome; the metaphor lives in type, spacing and borders

**Answer: Barely there.**

---

## 4. Design thesis for iteration 01

- **Device body**: warm cassette-cream page background — the "shell".
- **Recessed panel**: a slightly darker, softly inset cream panel holding all content.
- **Barely-there chrome**: the metaphor lives in type, spacing and borders — not decoration.
- Accents used sparingly: **orange marks action, teal marks status**.
- Modern twist, mobile-first, readable.

---

## 5. What iteration 01 implemented

Three files were created, fully independent of `cupper-hugo-theme`. The existing theme is left untouched; only pages with `layout: theme-lab` in their front matter use this new stack. Previewed at `http://localhost:1313/theme-lab/` (existing `hugo server` on port 1313).

### 5.1 `content/theme-lab.md`

The test page. Described structurally (not verbatim):

- **Front matter**: `title: "Theme Lab"`, `description`, `date`, `layout: theme-lab`, `tags: ["design", "theme"]`.
- **Page head section**: a mono eyebrow (`THEME LAB // ITERATION 01`), a large two-line heading, a lede paragraph explaining the blank-slate prototype, and a mono meta row (date + tag labels).
- **Prose article body**: an "Article body" h2, paragraphs explaining the design rationale, a teal-bordered blockquote stating a working principle, a bullet list of mobile-first/accent/chrome rules, an "Technical notes" h3, inline code, and a fenced Swift code block used to exercise the code well.
- **Project cards**: a section title plus three cards (Programming language / Snippets / Open source), each with an index number, heading, description and a link.
- **Controls**: primary and ghost button examples.
- **End mark**: a centered mono `— END OF PANEL —` line.

### 5.2 `layouts/_default/theme-lab.html`

A **standalone full-HTML layout** (own `<!DOCTYPE html>`, no `baseof`, nothing from the existing theme). Structure:

- **Head**: charset, viewport, dynamic title (`{{ .Title }} · {{ .Site.Title }}`), meta description from front matter, and a single page-specific stylesheet link to `css/theme-lab.css` (via `relURL`).
- **Shell** (`div.shell`): the outer device-body wrapper, max-width constrained and centered.
- **Chrome header** (`header.chrome`): brand link `J Racaud`, a nav built from the site menu plus an active "Lab" link, and an `aria-hidden` status block with a teal LED dot and a `SYS OK` label.
- **Recessed panel** (`main.panel`): a `panel-head` row with two mono labels (`PANEL · R1` and `LIGHT MODE`), then an `article.content` that renders `{{ .Content }}`.
- **Footer** (`footer.footer`): copyright line and an `↑ TOP` anchor.

### 5.3 `static/css/theme-lab.css`

The page-specific stylesheet, loaded **only** by the layout above. Described by system, not verbatim:

- **Design tokens in `:root`**:
  - Materials: `--cream-0` device body, `--cream-1` recessed panel, `--cream-2` raised cards, `--code-bg` dark code well.
  - Ink: main ink, soft ink, faint ink, code ink.
  - Lines: soft and strong hairline variants.
  - Accents: safety orange (plus a bright variant and a wash), teal (plus a bright variant and a wash).
  - Shape: panel radius 18px, card radius 10px, a recessed inset shadow (dark inset at top, light highlight at bottom edge).
  - Type stacks: a system **sans** stack (Inter → SF Pro Text → Segoe UI → system-ui → Helvetica → Arial) and a **mono** stack (IBM Plex Mono → JetBrains Mono → ui-monospace → SFMono → Cascadia → Menlo → Consolas).
- **Base**: box-sizing reset, smooth scroll, cream body with a faint top-light gradient (plastic, not flat), orange selection, orange focus-visible outlines.
- **Components** (each styled as described in §4):
  - `.shell` — centered, width capped at 1080px, fluid padding via `clamp()`.
  - `.chrome`, `.brand`, `.nav`, `.nav-link` — uppercase mono nav with orange underline on hover/active.
  - `.status` / `.led` — teal LED with a teal-wash halo; text label hidden below 640px.
  - `.panel` — recessed screen: darker cream, hairline border, inset shadow.
  - `.panel-head` / `.panel-label` — tiny uppercase mono labels.
  - `.content` — reading measure capped at ~70ch, centered inside the panel.
  - `.page-head`, `.eyebrow`, `.lede`, `.meta` — the article header block.
  - `.prose` — paragraphs, links (orange underline), h2/h3 rhythm, teal blockquote border, orange list markers, inline code with orange wash.
  - Dark code well (`.content .highlight`) — deliberately dark so Hugo's existing monokai highlighting stays legible; rounded, overflow-hidden, inset ring + drop shadow; reads as a component, not a terminal.
  - `.section-title` — section headers outside `.prose`.
  - `.card-grid` / `.card` — raised cream cards with index numbers, hover lift and orange border; **1 column by default, 3 columns at ≥640px**.
  - `.controls` / `.btn` — pill buttons; primary = ink background with cream text, ghost = hairline border.
  - `.end-mark` — centered faint mono closing line.
  - `.footer` — mono micro-text, space-between.
- **Accessibility & motion**: `:focus-visible` outlines, reduced-motion media query that disables smooth scroll and nearly all transitions/animations, relative spacing so future font swaps don't break layout.

---

## 6. Design decisions explicitly made in this pass

1. **Shell material**: warm cassette-cream body with a faint top-light gradient — tangible plastic, not flat.
2. **Recess depth**: panel slightly darker than the body, inset shadow at the top, soft highlight at the bottom edge.
3. **Chrome level**: barely there — one teal status LED, two tiny mono panel labels, uppercase mono nav. No decorative borders or grid marks.
4. **Accent roles**: safety orange = action/links; teal = status/secondary. Used sparingly.
5. **Code treatment**: intentionally dark code well to keep Hugo's monokai syntax highlighting legible.
6. **Type strategy**: system font stacks only for now (no webfont requests); sans body + mono micro-labels; all spacing in relative units so real fonts can be added later without layout shift.
7. **Responsive strategy**: mobile-first; panel nearly fills the viewport on small screens, bezels grow with space; cards stack on mobile and go 3-up at ≥640px; status text label hidden on small screens.

---

## 7. Open items / pending user feedback

The user was asked to critically evaluate:

1. **Depth of the recess** — inset enough, or too subtle?
2. **Type contrast** between the sans body and the mono micro-labels.
3. **Orange temperature** — right "safety orange", or should it lean more red/amber?
4. **Cards** — raised the right amount?

Then a final question was asked: *"What should the next iteration focus on?"* with options:

- Typography (real webfonts, heading scale, letter-spacing, line-height)
- Panel depth & materials (stronger/weaker recess, bezel width, radius, texture)
- Color tuning (exact hues and usage rules)
- More components (snippet component, table of contents, tags, pagination, search)
- Navigation & layout (nav behavior, header/footer treatment, page transitions)

**The answer to that question was not recorded** — it is the natural entry point for iteration 02.

---

## 8. Notes on the session record

- The original session export contained the full `theme-lab.md` diff and the full CSS, but **not** the layout HTML (only its byte count). The layout was recovered from the repository and is described in §5.2.
- The tail of the "Direction locked" design-thesis message was truncated in the export; §4 reflects the implemented state confirmed by the iteration 01 summary.
- The final "next focus" `ask` was sent, but no tool result with the user's answer is present in the export.

---

## 9. Session journal

Every question, answer, decision and implementation step from here on is appended below by the `theme-lab` skill / `theme-lab-agent`. This journal is the failure-recovery source of truth.

### 2026-09-23 19:24 — tooling, round 1

- **Question** (user request): "Create a skill and agent for the purpose of running this iterative theme creation. The agent/skill should also write down all of the questions, answers and decisions that are taken so as to be able to remember the state of a task in case a failure happens."
- **Options offered**: none — direct request.
- **Answer / Decision locked**: create two project-scope artifacts under `.reasonix/skills/`:
  - `theme-lab` — an inline playbook skill (`runAs: inline`) that runs the iterative design loop and enforces the journaling rules.
  - `theme-lab-agent` — an isolated subagent profile (`runAs: subagent`) that executes one chunk of the workflow and persists the same journal.
- **Implemented**:
  - `.reasonix/skills/theme-lab/SKILL.md` (inline skill)
  - `.reasonix/skills/theme-lab-agent/SKILL.md` (subagent)
  - This `## Session journal` section appended to `THEME-LAB-DECISIONS.md`
  - Project memory `jracaud-theme-lab-decisions` revised to reference the new artifacts and the journal convention
- **Open items**: skills are picked up after the next session refresh — verify both appear in the Skills catalog; continue with the unanswered iteration-02 focus question.

### 2026-09-24 12:36 — state recovery, round 2

- **Discrepancy found** between this log and the committed files. Per skill step 0, the files are the implementation truth:
  - §5.3 / §6.6 claim "system font stacks only (no webfont requests)". The committed `static/css/theme-lab.css` (commit `cfbf836`, "Iteration 01 on the new theme") actually loads **ClashDisplay-Variable** and **Chillax-Variable** from `static/fonts/` (reused from the NC-750 Lab design system).
  - §5.3 describes a system sans stack and an IBM Plex Mono mono stack; the real `:root` defines `--font-display` (ClashDisplay), `--font-sans` (Chillax) and a different mono stack (`ui-monospace`, Cascadia, …).
  - Additional finding: `--font-display` is defined but **never applied** — headings currently render in Chillax (the body sans). This is a concrete target for the typography iteration.
- **State**: `hugo server` already running on :1313; `/theme-lab/` returns 200 and loads only `css/theme-lab.css` (plus the two webfonts).
- **Memory**: project memory fact `jracaud-theme-lab-decisions` was **not found** — created now (the earlier journal entry claimed it was revised).

### 2026-09-24 12:45 — iteration 02, round 1 (typography)

- **Question**: "Where should iteration 02 concentrate? One nuance from the state recovery: the webfonts (ClashDisplay + Chillax) are already loaded, but ClashDisplay is never actually applied to headings and the heading-scale tokens are unused — so 'Typography' here means finishing the type system, not adding fonts."
- **Options offered**:
  - Typography — finish the type system (recommended)
  - Panel depth & materials
  - Color tuning
  - Components & layout
- **Answer**: "Typography — finish the type system"
- **Decision locked**: `decision_id: dec-961f3bc8b07ffcc0`
- **Implemented** (`static/css/theme-lab.css` only):
  - Rebuilt the `--text-*` scale (11/12/14/16/18/20/24/30/40/52 px) with body at 16px (`--text-base: 1rem`).
  - Wired `--font-display` (ClashDisplay) into `.brand`, `.page-head h1`, `.prose h2`, `.prose h3`, `.section-title`, `.card h3` — headings now actually use the display face.
  - Card index converted from a mono micro-label into a teal ClashDisplay numeral (`--text-lg`, tight display tracking) — the "numerals" part of the typography option.
  - Applied the `--track-*` and `--leading-*` tokens across mono labels, lede, headings, cards, buttons, footer; lede bumped to 18–20px with relaxed leading and weight 450.
- **Verified**: `/theme-lab/` returns 200 and loads only `css/theme-lab.css`; `hugo --renderToMemory --quiet` passes.
- **Open items**: user critique of the new type system (heading voice, scale, numerals, micro-label tracking); next iteration focus once typography is signed off.

### 2026-09-24 12:44 — iteration 02, round 2 (typography locked; new focus)

- **Question**: "After looking at the page, where should the next decision go?"
- **Options offered**:
  - Lock typography → move to panel depth & materials
  - Tune heading voice
  - Tune body scale & leading
  - Tune micro-labels & numerals
- **Answer**: "Lock typography → move to panel depth & materials"
- **Decision locked**: `decision_id: dec-4b2e1796332ce7f2`
- **Implemented**: none yet — iteration 02 typography is signed off; next focus is **panel depth & materials**.
- **Open items**: the panel-depth questions (recess strength, geometry, material texture) still need answers.

### 2026-09-24 12:46 — iteration 02, round 3 (panel depth & materials)

- **Question** (3-part ask):
  1. "How deep should the recessed panel feel?" — options: Deeper, controlled / Keep current subtle depth / Flatter
  2. "How should the panel geometry evolve (radius + how much body shows around it)?" — options: Squarer & tighter / Keep current geometry / Rounder & wider
  3. "What material treatment should the panel and body get?" — options: Machined edge highlight / Fine grain / Keep flat
- **Answer**:
  1. "Deeper, controlled"
  2. "Keep current geometry"
  3. "Machined edge highlight"
- **Decision locked**: `decision_id: dec-0e4f5ac4320b5be9`
- **Implemented** (`static/css/theme-lab.css`):
  - `--cream-1` darkened `#ede5d3` → `#e6d9bd` (deeper, still warm cream).
  - `--shadow-recess` strengthened: top inner shadow 2px/8px @14% → 3px/12px @22%, darker top edge line, plus a new 1px white inner ring (`inset 0 0 0 1px rgba(255,255,255,0.5)`) that reads as the machined bezel highlight.
  - Geometry left untouched (radius 18px, bezel/shell padding unchanged) per the answer.
- **Verified**: `/theme-lab/` returns 200 and loads only `css/theme-lab.css`; `hugo --renderToMemory --quiet` passes.
- **Open items**: critique the recess depth and machined rim on the page; faint micro-labels inside the now-darker panel lose a bit of contrast — candidate for the color-tuning round.

### 2026-09-24 12:49 — iteration 02, round 4 (materials locked)

- **Question**: "Now that the deeper recess and machined rim are live on /theme-lab/, what should we refine within panel depth & materials?"
- **Options offered**: Lock materials as done / Tune the machined rim / Tune card elevation / Tune recess depth again
- **Answer**: "Lock materials as done"
- **Decision locked**: `decision_id: dec-8df6b60e33b5462d`
- **Implemented**: none — closes the **panel depth & materials** focus (deeper recess, machined rim, geometry unchanged).
- **Open items**: choose the next focus; color tuning is the leading candidate (faint-label contrast on the darker panel).

### 2026-09-24 12:49 — iteration 02, round 5 (focus: components & layout)

- **Question**: "Panel depth & materials is now locked as done. Which focus should the next round take?"
- **Options offered**: Color tuning / Components & layout / Full review pass
- **Answer**: "Components & layout"
- **Decision locked**: `decision_id: dec-4b2e1796332ce7f2` (reopened with new evidence: materials locked as done via `dec-8df6b60e33b5462d`)
- **Implemented**: none yet — component-scope question follows.
- **Open items**: which component(s) to build this round (snippet, TOC, tags, nav/header, pagination, search).

### 2026-09-24 12:51 — iteration 02, round 6 (component scope: TOC)

- **Question**: "Which components should this round build? (you can pick several)"
- **Options offered** (multi-select): Snippet component / Table of contents / Tags & meta chips / Navigation & header treatment
- **Answer**: "Table of contents"
- **Decision locked**: `decision_id: dec-f262eca796b39365`
- **Implemented**: none yet — TOC placement/style fork follows.
- **Open items**: TOC placement & style; then build it into `layouts/_default/theme-lab.html` + `static/css/theme-lab.css`.

### 2026-09-24 12:57 — iteration 02, round 7 (TOC test pages + hub)

- **Question**: "How should the table of contents be placed and styled?"
- **Options offered**: Inline INDEX block / Sticky side rail / Collapsible block
- **Answer** (freeform): "Let's create three sample pages to test all three options. Add a hub page for testing the theme and the different features. Like this I can navigate between pages without having to write to the URL. Make all those pages under the `/theme-lab` route"
- **Decision locked**: `decision_id: dec-4bd1b259d166fc8a`
- **Implemented**:
  - `content/theme-lab.md` moved to `content/theme-lab/_index.md` (section) — `/theme-lab/` becomes the **hub**: new HUB page-head, a "Feature tests" card grid linking to the three TOC pages, existing typography/cards/controls showcase kept below.
  - New `content/theme-lab/toc-inline.md`, `content/theme-lab/toc-rail.md`, `content/theme-lab/toc-collapsible.md` — identical article bodies with h2/h3 structure so the three treatments can be compared fairly; front matter `tocStyle: inline|rail|collapsible`.
  - `layouts/_default/theme-lab.html` — renders the three TOC variants from `.TableOfContents`, adds a `← THEME LAB HUB` back link on sub-pages, and fixes the nav "Lab" link to always point at `/theme-lab/`.
  - `static/css/theme-lab.css` — new `.toc` component (cream sub-panel, teal `PANEL INDEX` label, hairline indentation for h3 entries), collapsible `details/summary` variant with rotating `+` caret, sticky side-rail grid at ≥1024px, and `.back-link` style.
- **Verified**: all four URLs return 200 and load only `css/theme-lab.css`; markers present (`toc--inline` / `panel--rail` + `toc--rail` / `toc--collapsible`); hub has the three links; `hugo --renderToMemory --quiet` passes.
- **Open items**: user compares the three TOC variants and picks one (or requests changes); other components (snippet, tags, nav) remain unbuilt.

### 2026-09-24 13:15 — iteration 02, round 8 (TOC extrude variant)

- **Question**: "After comparing the three TOC pages, which treatment should become the theme's default?"
- **Options offered**: Inline block / Side rail / Collapsible block / Hybrid — keep several
- **Answer** (freeform): "I want to test another option. Make the recessed panel scrollable inside the frame and have the TOC as some kind of collapsible element that sits on the shell. When it is extended, it extrudes from the shell, hiding the screen below it. When extruded, the shell shadows follows the new shape, but only for the left, bottom and right borders. The top of the extruded element and the shell are flushed together, as if they are made from the same material. The bottom left and bottom right corners have the same radius as the shell's corners, the top left and top right corners are also rounded, but in the opposite direction if possible otherwise do not add any roundness to them. The file /home/vendinois/Pictures/Screenshots/noctalia-shell-extruded-element.png shows the effect I want to achieve."
- **Decision locked**: `decision_id: dec-d997765e0cadf56d`
- **Implemented**:
  - `content/theme-lab/toc-extrude.md` — fourth TOC test page (`tocStyle: extrude`), same comparison article plus a new "Shell extrusion" section.
  - `content/theme-lab/_index.md` — hub "Feature tests" now has a 04 card linking to the extrude page.
  - `layouts/_default/theme-lab.html` — extrude branch: `<details class="extrude">` trigger on the shell before the panel, drawer wraps `.TableOfContents`; body gets `body--extrude`, shell gets `shell--extrude`, panel gets `panel--scroll`.
  - `static/css/theme-lab.css` — `.shell--extrude` (100dvh flex column), `.panel--scroll` (internal scroll), `.extrude-trigger` (mono shell-material row), `.extrude-drawer.toc--extrude` (absolute overlay, cream-0 material, no top border, bottom corners 18px, top corners square, downward-only shadow so it reads on left/bottom/right).
- **Assumptions recorded**: drawer width = panel width; bottom radius = panel radius 18px; concave top corners are not possible in plain CSS so they are square per the fallback in the answer. The reference image was not viewable (no image model configured), so the build follows the written spec.
- **Verified**: `/theme-lab/toc-extrude/` returns 200 with all markers (`body--extrude`, `shell--extrude`, `panel--scroll`, `extrude`, `extrude-drawer toc toc--extrude`); hub has the 04 link; `hugo --renderToMemory --quiet` passes.
- **Open items**: user checks the extrude variant and decides the default TOC treatment; other components (snippet, tags, nav) remain unbuilt.

### 2026-09-24 13:22 — iteration 02, round 9 (extrude correction)

- **Question**: "After checking /theme-lab/toc-extrude/, what's the verdict?"
- **Options offered**: Extrude wins — lock it / Tune the extrude variant / Go back to the first three / Keep comparing
- **Answer** (freeform): "The implementation of the extrude variant is not what I asked for. Here is what I want: The shell is always visible, so it is fixed on the page. The recessed panel slides underneath the shell. The whole page is designed as if we are looking at some kind of monitor. The TOC is an element that sits on the shell and that expand above the shell from the top. So the user always sees the TOC when scrolling the content. The page itself does not scroll, only the recessed panel."
- **Decision locked**: `decision_id: dec-6f3fdd1c13bba45e`
- **Implemented**: none yet — one clarifying geometry question asked before rebuilding.
- **Open items**: rebuild the extrude variant as a fixed monitor shell with an internal-scrolling screen; drawer direction to confirm.

### 2026-09-27 10:47 — state recovery, round 3 (resume)

- **Question** (user request): "Remind me where we left off"
- **Options offered**: none — recovery request.
- **Answer / Decision locked**: state rehydrated. The clarifying geometry question from the prior session was never journaled and its answer is lost, so it is re-asked before the rebuild (see next entry).
- **Implemented**: none — recovery only. Verified `/theme-lab/` returns 200. Confirmed the working tree still holds the round-8 extrude build (`toc-extrude.md` untracked, layout + CSS modified vs `a4afe39`) that round 9 rejected via `dec-6f3fdd1c13bba45e`; `content/theme-lab.md` is gone and `content/theme-lab/_index.md` is the hub truth.
- **Open items**: drawer direction + width answers, then rebuild the extrude variant as the fixed monitor shell.

### 2026-09-27 10:56 — iteration 02, round 10 (TOC locked: side rail; test pages scrapped)

- **Question** (the standing fork from rounds 6–9): which table-of-contents treatment should become the theme's default?
- **Options offered**: Inline block / Side rail / Collapsible block / Hybrid — keep several (round 8), plus the extrude variant explored in rounds 8–9.
- **Answer** (verbatim): "I am taking a decision about the current work that was about the TOC. I want to use the side rail version. So scrap all the test pages, remove all unnecessary css not related to the side rail TOC."
- **Decision locked**: direct user instruction this session (no new `decision_id` — no `ask` was sent). This supersedes `dec-d997765e0cadf56d` and closes the TOC fork: **side rail is the theme default**.
- **Implemented**:
  - Deleted `content/theme-lab/toc-inline.md`, `toc-rail.md`, `toc-collapsible.md`, `toc-extrude.md` (and the temporary `tocprobe.md` used to verify `.TableOfContents` behavior).
  - `content/theme-lab/_index.md` — no longer a hub; it is the single living test page. Removed the "Feature tests" card grid and hub wording; page-head now states the locked side-rail treatment. Converted the raw `<h2 class="section-title">` headings (`Project cards`, `Controls`) to markdown `##` headings so the auto-generated TOC indexes them; fixed the stale "system font stack, no webfonts" note to reflect ClashDisplay + Chillax.
  - `layouts/_default/theme-lab.html` — removed all `tocStyle` branches, the back-link, and the extrude markup; the layout now always renders `<main class="panel panel--rail">` with the `.rail` grid (`.toc toc--rail` + `.content`).
  - `static/css/theme-lab.css` — removed the `.back-link`, `.toc--collapsible` (caret/summary), and the whole extrude system (`.body--extrude`, `.shell--extrude`, `.panel--scroll`, `.extrude*`, `.toc--extrude`); `.section-title` selector replaced by `.content > h2`; `.toc-summary` removed from the shared label selector. Kept the base `.toc` and the `≥1024px` side-rail grid.
  - Cleaned stale `public/theme-lab/toc-*` dirs and restarted `hugo server` on :1313 (the old fast-render process still served the deleted pages).
- **Assumptions recorded**: keeping `_index.md` (rather than moving back to `theme-lab.md`) preserves the `/theme-lab/` URL and section structure with the least churn; `public/` is gitignored so its cleanup does not affect the diff.
- **Verified**: `/theme-lab/` returns 200 with `panel panel--rail` + `toc toc--rail` and a TOC containing Article body → Technical notes, Project cards, Controls; the four deleted pages return 404; only `css/theme-lab.css` is loaded; `hugo --renderToMemory --quiet` passes; no leftover references to the removed variants in CSS/layout/content.
- **Open items**: user critique of the side rail on mobile (stacked) vs desktop (sticky); remaining components — snippet component, tags/meta chips, navigation & header treatment — are still unbuilt.

### 2026-09-27 11:40 — iteration 02, round 11 (snippet component)

- **Question** (3-part ask): "Let's iterate on the snippet component" →
  1. "What should a snippet component include by default?"
  2. "How should the snippet header read, given the cassette-cream / recessed-panel metaphor?"
  3. "A copy button needs a few lines of JavaScript (the theme-lab layout currently loads no scripts). Add it?"
- **Options offered**:
  1. Anatomy: Compact — header + code + copy / Full workstation — header + line numbers + code + meta footer / Bare — code + copy only
  2. Header material: Cassette label strip / Dark strip with hairline divider / No header — caption above the well
  3. Copy button: Yes — tiny inline script / No — CSS-only for now / Yes, but only the button visual
- **Answer**:
  1. "Compact: header + code + copy"
  2. "Cassette label strip"
  3. "Tiny vanilla JS in a file loaded by the page." (refines the offered "inline script" option into an external file)
- **Decision locked**: `decision_id: dec-b910c2995242aa4b`
- **Implemented**:
  - `static/js/theme-lab.js` — new, tiny dependency-free script; clipboard API with `execCommand` fallback; toggles `.is-copied` + "COPIED" for 1600 ms.
  - `layouts/_default/theme-lab.html` — loads `js/theme-lab.js` via `relURL` with `defer` (the page's first and only script).
  - `static/css/theme-lab.css` — new `.snippet` component: cream cassette-label `.snippet-head` (`.snippet-name` file label, teal `.snippet-lang` pill, `.snippet-copy` pill button with orange hover / teal copied state); `.snippet .snippet-code .highlight` overrides the code-well radius/margin so the head and well read as one tape.
  - `content/theme-lab/_index.md` — new `## Snippet component` section (appears in the side-rail TOC) with a short prose intro and a `Theme+Palette.swift` snippet built from the built-in `highlight` shortcode inside a raw-HTML `<figure class="snippet">`; the existing raw code well in "Technical notes" is kept for comparison.
- **Verified**: `/theme-lab/` returns 200; `snippet`/`snippet-head`/`snippet-code`/`snippet-copy` markers all present; exactly one `highlight` for the snippet plus the pre-existing one; page loads only `css/theme-lab.css` and `js/theme-lab.js`; no `{{<` shortcode leak; `hugo --renderToMemory --quiet` passes.
- **Open items**: user critique of the label-strip proportions, copy-button placement/behavior (test the clipboard on `/theme-lab/`), and whether the plain code well in "Technical notes" should be converted to a snippet too; remaining components — tags/meta chips, navigation & header treatment.

### 2026-09-27 11:47 — iteration 02, round 12 (snippet selection fix)

- **Question** (user report): "Selecting the code in the snippet hides it due to the color of the highlight. Is it possible to change the behavior so that the selected text appears white?"
- **Options offered**: none — direct fix request.
- **Answer / Decision locked**: direct user instruction (no `ask` sent, no new `decision_id`). Selected text inside the dark code well must be white.
- **Implemented** (`static/css/theme-lab.css`): added `.content .highlight ::selection { background: var(--orange); color: #ffffff; }` — scoped override of the global `::selection` (which sets dark ink on an orange wash and made selected code invisible on the dark well). Covers both the snippet's code well and the plain code well in "Technical notes".
- **Verified**: `/theme-lab/` returns 200; the scoped selection rule is served by `css/theme-lab.css`; `hugo --renderToMemory --quiet` passes.
- **Open items**: none from this fix — critique of the snippet component continues (label-strip proportions, copy-button placement, `SWIFT` pill position); remaining components — tags/meta chips, navigation & header treatment.
