# CodeWarbler

[CodeWarbler](https://codewarbler.github.io) is a collection of browser-based applications for sound and music composition.

## Applications

### Warbler

[Warbler](https://codewarbler.github.io/warbler/0.1/) is a sketchpad for [Tone.js](https://tonejs.github.io/) code. Warbler's goal is to seamlessly visualize Tone.js constructs and provide simple user interface conventions to aid in the creation and development of Tone.js-based compositions.

- [Examples](https://codewarbler.github.io/warbler/#examples)
- [Getting started](https://codewarbler.github.io/warbler/tutorial/)

### Swoops

[Swoops](https://codewarbler.github.io/swoops/0.1/) is a live-editing, multi-track sound composing environment.

In Swoops, documents are composed in JavaScript in the form of callback functions (Tracks) that are performed at a defined interval. Unlike Warbler documents, Swoops can edit files while they are being played. When an updated file is saved in the Swoops editor, only the modifed tracks are altered at the next defined interval.

- [Examples](https://codewarbler.github.io/swoops/#examples)
- [Getting started](https://codewarbler.github.io/swoops/tutorial/)

## Frequently Asked Questions

**If I make a composition, where is the composition stored?**

By default, these applications save one active file in your browser's local storage (IndexedDB to be precise). You can however generate a permanent document in the form of a URL. The URL can then be bookmarked, or shared with anyone and played in a modern browser (as of 2022). A common way to save and share compositions is via [Twitter](https://twitter.com/codewarbler). Most compositions will fit in a single tweet since URLs are automatically shortened on Twitter.

**Where is the source code for these projects?**

The repos are [here](https://github.com/CodeWarbler/), though the code is not currently published for all projects. The plan is to publish each of these applications under a permissive open source license. If you'd like to help, reach out. The projects are based on Vue 2.

**I think I've found a bug. Where can I file a bug report?**

For bug reports and **feature requests**, please see each applications's issues tracker. Your issue may have already been addressed. If not, please open a new issue.

**How do I host my own version of the applications?**

The applications are not tied to any particular domain. You can download the entire _codewarbler.github.io_ repository and host it on your own static server.

**What's with all the bird names?**

I like birds, and names are hard. At the moment, I'm listening to a gray catbird mewing from the azalea outside my office.

## About

CodeWarbler is currently tended by Joe Weiss.

These projects would not exist without the open source contributors to Tone.js, P5.js, Monaco, Tonal.js and many more. Thank you for your contributions to past and future creative endeavours.
