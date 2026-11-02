+++
title = "So... I'm writing my own programming language - Part 2"
description = "Part 2 of a series of articles about writing my own programming language"
publishdate = "02 Nov 2026"
tags = ['Programming', 'Programming Languages']
+++

# Time has passed

It's been 4 years since my last article and a lot happened in my personal life which made the progress on this project slow, but I was able to reach a minimal prototype that I am happy with.

In part 1 I set out to design a keyword-free programming language on the basis that the majority of programming languages use English words as keywords and that could be an issue for
non English speaking people. The idea was to see how we could design a language without keywords while staying readable and familiar to C-like languages. I know, it kind of is a contradiction on the stated goals, but that's life.
 
The language, called `ijo`, now has a small interpreter which handles the basics of a programming language with constructs such as `if`, `for/while`, and `functions` definition and calling.
I did not reach the milestone of implementing structs or classes even though I should technically have everything needed to do so.

# A feel for the language

As stated in the previous part, the language I went on to design focused on a keyword free syntax that is hopefully readable. Here's a look at the language and see if you can follow what will be the results of that small snippet.

```txt
#canDrink(currentAge) {
  #legalAge = 18

  ?(currentAge >= legalAge) {
    println("You can drink")
  } ?() {
    println("Too young to drink")
  }
}

$age = 16

canDrink(age)

~(age < 18; age = age + 1) {
  print("age: ")
  println(age)
}

canDrink(age)
```

Hopefully the syntax that I came up with is readable and not too heavy in terms of symbols usage so that people familiar with C-like languages can guess and follow what this small program does.

Here's the solution

```txt
Too young to drink
age: 16
age: 17
You can drink
```

And here's the breakdown of what is happening. More details on the specifics of the language is written below.

First I define a function called `canDrink` which takes one parameter that is the `currentAge` and checks it against the constant `legalAge`. Depending
on whether it is greater than or equal to `legalAge` prints the message `"You can drink"` or `"Too young to drink"`.

Then I define a variable named `age` set to the integer value `16` and calls the `canDrink` function. At that point, the program prints the message `"Too young to drink"`.

After that, I loop on the age until it reaches 18, adding one to the age at each iteration. For each iteration, I print the following message: `age: <value of the var age>`.

Finally I call the `canDrink` function again with `age` set to `18` which now prints the message `You can drink`.

As you can see, the language only implements the bare minimum for writing simple programs, but the goal never really was to have a full-fledged programming language, but rather to experiment with keyword-less syntax.

# Consequences of having no keywords

Having the constraint of not having keywords and trying to design a readable syntax for a C-like language led me to take some choices that could be described as odd.
In the above snippet the most striking is possibly the `conditional` expressions and `loop` expression.

## Conditionals

Since I cannot have keywords such as `if`, `else`, or `else if/elif` and derivative of that, I decided to use the same combination of symbols for expressing all of the above:

`?(someCondition)` expresses both `if` and `else if` in ijo and to express `else`, the lexer simply checks for this exact combination of symbols: `?()`

## Loops

The loops follow a similar philosophy, since I did not want to use multiple symbols for expressing both a `for` loop and `while` loop, I decided to "combine" the two together.

The actual syntax is the following: `~(init; condition; action) { body }` and all but the loop's body are optional which means all the following are valid expressions:

```txt
// full for loop form
~($i = 0; i < 5; i = i + 1) { println(i) }

// partial for loop form
$i = 0
~(i < 5; i = i + 1) { println(i) }

// while loop
$i = 0
~(i < 5) {
  i = i + 1
  println(i)
}

// Infinite loop. Equivalent to a `while (true)` in C.
~() {
  println("Infinite loop")
}
```

## Variables and Constants

To distinguish variables from constants, I decided to simply reuse common keywords that have adjacent meaning in different programming languages: `#constant` and `$variables`.
The inspiration comes from both C and PHP where in C `#define` are often used to define constant values and in PHP `$variable` is how we declare and use variables. The difference with PHP in this instance, is that
in ijo, those symbols are only used to declare them and are not necessary to retrieve their values, which I think makes it nicer than in PHP.

## Functions, structs and other concepts

While designing the language came the question on how to define functions and structs (even though the latter are not implemented) and the syntax went through several iterations.
One principle I wanted to follow in this language was to use similar patterns to have great deal of coherence for writing and reading the language.
Since I had decided that declaring constant and variable would be of the form `#name = value`, I first thought of having function definition follow a similar pattern

`#functionName = (param1, param2) { body }`

Instead I decided to go with a more traditional approach with `#functionName(param1, param2) { body }`, while still keeping the `#` symbol to make it consistent with constant definition as I see this specific symbol as meaning: I am defining something that is constant.

Structs would have followed the same pattern:

```txt
#Person {
  age
  name
}
```

The syntax for `enums`, `lists` and `hashmap` is yet to be really defined in this iteration as they introduce quite a lot of challenge between not introducing too complex and unreadable symbol combination and ease of reading.

In a previous iteration on the language, the pattern for declaring everything was different and you can read about it here: [early doc about ijo variables](https://github.com/Jonathan-Racaud/ijo/blob/archive/beefBase/book/01.Variables.md).
The idea was to write code looking like this:

```txt
// Variable and Constant
$name = "Jonathan"
#const = 42

// Lists
SomeList = [1, "two", 3]

// HashMap/Dictionaries
SomeDict = %["Key" = value]

// Enum
SomeEnum = | North, South, East, West |
```

Actually, now that I read again that "book" for specifying the ideas behind ijo, I do not really recall why I deviated from those ideas. Maybe to be closer to a C-like syntax?

Anyway, I digress.

# Expressions everywhere

Another thing to know about ijo's concept is that I went with the route of "everything is an expression", so both conditionals and loops return values.
For conditionals it is easy, simply return the value of the last expression in the body that is executed. Loops also return the last value of their body's expression, but the one from the last iteration instead.

Functions and normal blocks also returns their last expression's value.

# The change of implementation

The project's implementation went through different phases when I started working on it. I wanted to use the Beef programming language which was (and still is) quite niche, but very nice to work with.
It is like if C# and C had a child together. The syntax is C# like, but with the semantics close to C with manual memory management. The language also has a lot of niceties like discriminated enums (ala Rust), nice syntactic sugar around
class and struct definition.

The issue I had was that it is a Windows first language with Linux having limited support and at one point I decided I wanted my language to be available on both Windows and Linux.

So I started to work on a C implementation, but in the end I decided to use Nim for the implementation as it was another language that interested me and had most of the features I needed for my use case.

# Future of ijo

I do not yet know what direction I want to take for this project. Today, Beef has a better support for Linux with its IDE now working on that platform and so I am tempted by using Beef again.
Also, during all those years thinking and learning about programming language implementation, I came into contact with FORTH and the concatenative family of programming language.

I like the idea behind those languages. The fact that they do not have any keywords, but let developers use whatever they want to define `words` (kind of the equivalent of functions). This tickles my brain as it is a concept that could match with the intended goal behind ijo.
However, just like LISP languages are hard for long-time developer used to the C syntax, stack-based languages can be hard to read and and follow when not used to this paradigm, but I am inclined in trying to mix both worlds.

Who knows, where this will lead me. Maybe I'll have an update soon in 4 years!
