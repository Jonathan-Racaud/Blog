---
title: "Theme Lab"
description: "Theme Lab hub — a living test page for the new JRacaud theme: recessed panel, cassette cream, safety orange and teal."
date: 2025-09-23
layout: theme-lab
tags: ["design", "theme"]
---

<section class="page-head">
  <p class="eyebrow">THEME LAB // HUB</p>
  <h1>One panel,<br>many tests.</h1>
  <p class="lede">This is the theme-lab hub. The article below exercises typography, rhythm and general components; the cards link to focused feature tests. Every page in this section uses only the theme-lab layout and stylesheet — nothing from the current theme.</p>
  <div class="meta">
    <span>2026-09-24</span>
    <span>DESIGN</span>
    <span>THEME</span>
    <span>HUB</span>
  </div>
</section>

<h2 class="section-title">Feature tests</h2>
<div class="card-grid">
  <article class="card">
    <p class="card-index">01</p>
    <h3>TOC — inline</h3>
    <p>The index sits at the top of the article, inside the reading measure.</p>
    <a class="card-link" href="/theme-lab/toc-inline/">Open page →</a>
  </article>
  <article class="card">
    <p class="card-index">02</p>
    <h3>TOC — side rail</h3>
    <p>Sticky index beside the text on wide screens, stacked on mobile.</p>
    <a class="card-link" href="/theme-lab/toc-rail/">Open page →</a>
  </article>
  <article class="card">
    <p class="card-index">03</p>
    <h3>TOC — collapsible</h3>
    <p>A single labeled row that expands on demand.</p>
    <a class="card-link" href="/theme-lab/toc-collapsible/">Open page →</a>
  </article>
</div>

<div class="prose">

## Article body

The shell of the site is meant to feel tangible — like a device you could pick up. The content sits in a **recessed panel**, which gives the page depth without decoration. Long-form text is set on a warm, low-glare background so reading stays comfortable for entire articles.

> A theme should feel like a room, not a poster. The device metaphor is the room; the type is the furniture. — working principle

Reading is the primary job, so the measure is limited to roughly 70 characters per line, the line-height is relaxed, and headings use a tight, modern rhythm. Inline `code` is set in monospace with a faint orange wash so it reads as a component label, not a terminal.

- Mobile-first: the panel nearly fills the viewport and only grows bezels on larger screens.
- Accent colors are used sparingly: orange marks action, teal marks status.
- The metaphor lives in type, spacing and borders — not decoration.

### Technical notes

Body copy uses the system font stack so there are no webfont requests yet. Micro-labels use a monospace stack. When we add real fonts later, the layout should not change because all spacing is set in relative units.

```swift
struct ThemePanel {
    let name: String
    let mode: Mode = .light
    let chrome: Chrome = .barelyThere

    func describe() -> String {
        "\(name) — recessed, warm, readable"
    }
}
```

</div>

<h2 class="section-title">Project cards</h2>
<div class="card-grid">
  <article class="card">
    <p class="card-index">01</p>
    <h3>Programming language</h3>
    <p>A compiler experiment written in Swift, documented as a long-form series.</p>
    <a class="card-link" href="#">Read the series →</a>
  </article>
  <article class="card">
    <p class="card-index">02</p>
    <h3>Snippets</h3>
    <p>Short, copy-pasteable code notes with a quiet, readable code well.</p>
    <a class="card-link" href="#">Browse snippets →</a>
  </article>
  <article class="card">
    <p class="card-index">03</p>
    <h3>Open source</h3>
    <p>Projects with a case-study layout: problem, process, result.</p>
    <a class="card-link" href="#">View project →</a>
  </article>
</div>

<h2 class="section-title">Controls</h2>
<div class="controls">
  <a class="btn btn-primary" href="#">Primary action</a>
  <a class="btn btn-ghost" href="#">Secondary action</a>
</div>

<p class="end-mark">— END OF PANEL —</p>
