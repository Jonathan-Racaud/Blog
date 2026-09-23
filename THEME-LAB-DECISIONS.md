# Theme Lab — Decision Log

> Scope: the blank-slate theme exploration for this Hugo site, exercised through the `theme-lab` test page.
> Status: **iteration 01 implemented**. Iteration 02 focus not yet chosen (question asked, answer not recorded).
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
