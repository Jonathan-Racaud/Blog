---
title: So... I'm writing my own programming language - Part 1
short: Part 1 of a serie of articles about writing my own programming language, implemented in Beef.
publishdate: 31 May 2022
---
I think I may have gone mad. I started working on my own programming language.

# How it started
I stubbled upon the [Crafting Interpreters](https://craftinginterpreters.com/) book and found it very interesting to read.
As I never really studied compilers and how they worked, the approach of this book, which is writting a full fledge interpreter for a 
simple programming language, was very interesting to me. 

I am more of a hands on kind of guy when it comes to learning, so that approach
was perfect for me. It also does it twice, once in Java and then in C where the author builds a bytecode vm for his language. This is nice to see different ways to accomplish the same task.

Thus I started following the book and implementing the first Java interpreter in the [Beef](https://www.beeflang.org) programming language.

{{<note>}}
I might one day write article on this language as it is a really nice one. Think of C# but with manual memory management.
{{</note>}}

I didn't finish the java interpreter though as I find it difficult to follow with the language that I chose to use. The memory management model and Visitor pattern is quite difficult to implement (as used in the book)
in Beef as that language has manual memory management. Beef being closer to C than Java, I am now following the C interpreter.

I am primarily using this book to get a grasp on what one would need to do to write its own programming language and this is going well in my opinion, but I'm not here to do a book review. Just go read it if that topic is interesting to you.

You might ask yourself one question:

# But why?
![](../meme/ryan-reynolds-but-why.gif)
![](../meme/why_not.gif)

I have different ideas that I want to test and an urge to put them to the test.

# The motivation behind
It is usually said that mathematics is the universal language because everyone that learns it can understand it. You might not learn it
in the same way if you are in France or China or the US, but everyone will understand $$2+2$$ or $$ f(x, y) = 3x * \dfrac{2y}{\pi} $$

Since programming has its root in maths we could argue that it would be similar, and to some extent, it is but recently I read or heard somewhere that it can be difficult for some people to learn programming not because it is a difficult topic to learn, but rather than the language used in programming is primarily English.

Indeed, the vast majority of knowledge around programming is in English. Let it be youtube videos, conferences, books or blog articles such as this one. As a non native English speaker I can relate to that sentiment and so I started wondering:

# What would a programming language look like without keywords?

* Is it possible to design a language where the different constructs could be abstracted away from any keyword?
* Can such a language be relatively easy to learn?
* Also, can it not become an unreadable soupe of characters on your screen?

In the same way that we learn about the different mathematics concepts with our own natural words which can differ from languages to languages. I want to see if we can do the same with programming languages.

I want to explore if it is possible to learn and use what is a `while` loop, an `if` condition or a `return` without having those concept tied to those keywords.

This is the primary force driving me in this endeavour.

Alas a programming language is not only its syntax. It is also the semantic behind and the different concepts and paradigm that one can use. I do have the ambition of taking the features that I like from the other languages that I use on a day to day basis or not, but I also try to not look too much in how they present it as well so that (I hope) I can be as free of their influence as I can.

I'm sure that I'll reinvent a lot of wheels along the way, but that's okay because the primary goal is acquiring knowledge for myself. This must sounds weird to others, not wanting to read too much how other people did it, but that's how I want to work at the moment.

I do intend to have a working product, it is part of my set goals, but I would consider it a bonus if even one person apart from me uses it.

Another goal for me is to share what I learn along the way with you.

# The next steps
This article was only the introduction of what I hope will be a long and interesting serie of articles.

I already have most of the syntax and features that I want scattered around my notes, so the next parts will go more in the details of the language:
- What does it looks like.
- What features I'd like it to have.

Hope to see you in the next one!