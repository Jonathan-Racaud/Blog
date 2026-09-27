---
title: "Theme Lab"
description: "Theme Lab — the single living test page for the new JRacaud theme: every available element exercised in one panel."
date: 2025-09-23
layout: theme-lab
tags: ["design", "theme"]
---

<section class="page-head">
  <p class="eyebrow">THEME LAB // ITERATION 02 · FULL SWEEP</p>
  <h1>Every element,<br>one panel.</h1>
  <p class="lede">A single pass through everything the theme currently has: prose, lists, the plain code well, the snippet component, cards and controls. Use this page as the decision board — pick the element to tune next.</p>
  <div class="meta">
    <span>2026-09-27</span>
    <span>DESIGN</span>
    <span>THEME</span>
    <span>SIDE RAIL</span>
    <span>SNIPPET</span>
  </div>
</section>

<div class="prose">

## Prose

Long-form text is the theme's primary job. The measure is limited to roughly 70 characters per line, the line-height is relaxed, and headings use a tight, modern rhythm. A [text link](/theme-lab/) is orange and underlined, **bold text** carries weight without shouting, and `inline code` wears a faint orange wash so it reads as a component label, not a terminal.

> A theme should feel like a room, not a poster. The device metaphor is the room; the type is the furniture. — working principle

### Lists & rhythm

Body copy uses Chillax and headings use ClashDisplay — two variable fonts loaded locally from the design system. All spacing is set in relative units, so swapping fonts later will not break the layout.

- Mobile-first: the panel nearly fills the viewport and only grows bezels on larger screens.
- Accent colors are used sparingly: orange marks action, teal marks status.
- The metaphor lives in type, spacing and borders — not decoration.

</div>

## Plain code well

<div class="prose">

The raw `highlight` block stays a dark, headerless well so Hugo's monokai highlighting stays legible. This is the baseline a snippet is built on.

</div>

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

## Snippet component

<div class="prose">

Short, copy-pasteable code notes get a **snippet component**: a cassette-label header strip on the dark well with one copy action. The label names the file, the teal pill names the language, and the button confirms the copy.

</div>

<figure class="snippet">
  <div class="snippet-head">
    <span class="snippet-name">Theme+Palette.swift</span>
    <span class="snippet-lang">SWIFT</span>
    <button class="snippet-copy" type="button" aria-live="polite">COPY</button>
  </div>
  <div class="snippet-code">
{{< highlight swift >}}
extension Theme {
    static func palette(for mode: Mode) -> Palette {
        Palette(
            body: mode == .light ? .cream : .ink,
            accent: .orange,
            status: .teal
        )
    }
}
{{< /highlight >}}
  </div>
</figure>

<figure class="snippet">
  <div class="snippet-head">
    <span class="snippet-name">deploy-site-to-production.sh</span>
    <span class="snippet-lang">SHELL</span>
    <button class="snippet-copy" type="button" aria-live="polite">COPY</button>
  </div>
  <div class="snippet-code">
{{< highlight bash >}}
#!/usr/bin/env bash
set -euo pipefail

hugo --minify
rsync -avz public/ deploy@host:/srv/www/
{{< /highlight >}}
  </div>
</figure>

## Project cards

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

## Controls

<div class="controls">
  <a class="btn btn-primary" href="#">Primary action</a>
  <a class="btn btn-ghost" href="#">Secondary action</a>
</div>

<p class="end-mark">— END OF PANEL —</p>
