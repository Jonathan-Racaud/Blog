---
title: Discovering Hugo
short: I discover the project Hugo and how I modified one of the available themes.
publishdate: 30 Jan 2022
---
So I decided to go with the static website generator called Hugo for building my blog.
My first impression is that it is a good static site generator so far.

It is written in Go, and for what I used of it, it is quite fast. Being accustomed to PHP static site generators, having the hot-reload code generation being fast was quite surprising in a good way.

Alas, there's one issue: it runs code inside of comments.

So I was trying to change my theme so that I can have annotated code + syntax highlight:
{{< code numbered="true" language="swift" >}}
func [[[myFunc()]]] {
    let name = [[["Jonathan"]]]
}
{{< /code >}}

By default, the theme looks like this:
{{< code numbered="true" colored="false" >}}
func [[[myFunc()]]] {
    let name = [[["Jonathan"]]]
}
{{< /code >}}

For this, Hugo allows the definition of short codes that can be used to generate HTML the way we want it.

The snippet above is written with the following code:
```javascript
{{</* code $numbered="true" language="swift" */>}}
func [[[myFunc()]]] {
	let name = [[["Jonathan"]]]
}
{{</* code */>}}
```

When you insert this into your markdown file, it will use the code.html file to generate the correct html. The code for this shortcode is this:

```html
{{ $numbered := .Get "numbered" }}
{{ $language := .Get "language" }}
{{ $code := .Inner }}
{{ $highlighted := transform.Highlight $code $language }}
{{ $highlighted := replace $highlighted "[[[" "<span class='highlighted-code'>" }}
{{ $highlighted := replace $highlighted "]]]" "</span>" }}
<div class='code-annotated {{ if and ($numbered) (ne $numbered "false") }}numbered-annotation{{ end }}'>
    {{ $highlighted | safeHTML }}
</div>
```

I had a strange formatting issue because I messed-up the CSS. So I went full on debug mode, commenting code everywhere. Looking at every changes on the final page. At one point I commented code in the shortcode file and it looked like this:

```html
{{ $numbered := .Get "numbered" }}
{{ $language := .Get "language" }}
{{ $code := .Inner }}
{{ $highlighted := transform.Highlight $code $language }}

<!-- {{ $highlighted := replace $highlighted "[[[" "<span class='highlighted-code'>" }}
{{ $highlighted := replace $highlighted "]]]" "</span>" }}
<div class='{{ if and ($numbered) (ne $numbered "false") }}numbered-annotation{{ end }}'>
    {{ $highlighted | safeHTML }}
</div> -->

{{ $highlighted | safeHTML }}
```
Which should have shown me the code being displayed with the ``[[[]]]`` pattern, but it kept showing me the annotated code. 

Turns out, Hugo will see template syntax inside of the html comments and still execute the code!

The end result was that the ``$highlighted`` variable was still transformed correctly and the [[[]]] were replaced with the correct html.

When I found out this behavior, I was so shocked by it that I had to pause my debugging session to archive that experience. Which is the article your are currently reading.

Now that I fixed my CSS mistakes, the code displays with both color syntax and annotations.

Except the quirks due to not knowing Hugo, it is quite easy to pick up and to customize.
On this note, I'm going back to fiddling with the theme and making it my own. Bye!