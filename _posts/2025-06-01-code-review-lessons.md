---
layout: post
title: "What Six Months of Code Review Taught Me About Writing Software"
date: 2025-06-01
categories: [Engineering]
read_time: 6
description: "The difference between code that works and code that communicates — and why that gap matters more than I expected."
---

There's a version of software engineering where you write code that does what it's supposed to do, push it, and move on. 

Then there's the version where you work with other engineers who read your code, question your decisions, and push back on your naming choices. That version is significantly harder. It's also the one that makes you a better engineer faster than anything else.

Six months into a professional engineering environment, I can say the most valuable thing I've experienced isn't a framework, a tool, or a language feature. It's code review.

## What code review actually is

Most people think code review is about catching bugs. Sometimes it is. But the deeper purpose is knowledge transfer — a structured way for a team to share mental models, maintain consistency, and surface assumptions before they calcify into production problems.

When a senior engineer looks at your PR and asks "what's the intent behind this function name?" they're not being pedantic. They're telling you that the code doesn't communicate clearly enough to be maintained by someone who wasn't in your head when you wrote it.

## The naming problem

I had a function called `handleData`. It handled some data. What data? What kind of handling? I couldn't answer those questions quickly — which meant the function name had failed its only job.

The review comment was short: *"What does this do?"*

I rewrote it as `normalizeIncomingFeedbackPayload`. Verbose? Yes. But now any engineer on the team knows what it does without reading the implementation. That's the trade-off, and it's usually worth it.

## Tests as documentation

Before code reviews, I wrote tests to satisfy a coverage threshold. After a few months of review, I understand tests differently — they document the expected behavior of a system for the next person who touches it.

A test called `it('should work')` tells the reader nothing. A test called `it('returns 400 when email field is missing from request body')` is a specification. Future-you, reading that test six months from now, will thank current-you.

## The real lesson

Code review teaches you to write software for two audiences simultaneously: the computer that runs it, and the human who reads it. Most early-career engineers only think about the first one.

The moment you start thinking about the second, your code quality changes permanently.

---

*Working through my own engineering journey at Semicolon Africa. More notes like this at [meethybrid.github.io/blog]({{ '/blog' | relative_url }}).*
