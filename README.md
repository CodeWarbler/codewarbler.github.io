# CodeWarbler

CodeWarbler is a collection of browser-based applications for sound and music composition.

## Software

### Warbler

[Warbler](https://codewarbler.github.io/warbler/0.1/) is a sketchpad for Tone.js code. Its goal is to seamlessly visualize Tone.js constructs and provide simple user interface conventions to aid in the creation and development of Tone.js-based compositions.

- [Examples](https://codewarbler.github.io/warbler/examples/)
- [Getting started](https://codewarbler.github.io/warbler/tutorial/)

### Flight

[Flight](https://codewarbler.github.io/flight/0.1/) is a live-reloading, browser-based, multi-track sound composing environment. Flight documents are composed in JavaScript. The application is built on Tone.js, Tonal.js, P5.js and the Monaco editor.

Unlike Warbler documents, Flight documents can be edited while playing. The Flight editor determines the differences between the code playing and the updated code, then modifies the playback accordingly.

- [Examples](https://codewarbler.github.io/flight/examples/)
- [Getting started](https://codewarbler.github.io/flight/tutorial/)

## Frequently Asked Questions

**Where is the source code for these projects?**

The repos are here, though the code is not currently published for all projects. The plan is to open source each of these applications at the 0.2 release under a permissive license. If you'd like to help, reach out. The projects are based on Vue 2.

**If I make a composition, where is the composition stored?**

By default, these applications save one active file in your browser's local storage (IndexedDB to be precise). You can however generate a permanent document in the form of a URL. The URL can then be bookmarked, or shared with anyone and played in a modern browser (as of 2022). My favorite way to save and share compositions is via [Twitter](https://twitter.com/codewarbler). Most compositions will fit in a single tweet since URLs are automatically shortened on Twitter.

**I think I've found a bug. Where can I file a bug report?**

For bug reports and **feature requests**, please see each applications's issues tracker. Your issue may have already been addressed. If not, please open a new issue.

**How do I host my own version of the applications?**

The applications are not tied to any particular domain. You can download the entire _codewarbler.github.io_ repository and host it on your own static server.

**What's with all the bird names?**

I like birds, and names are hard. At the moment, I'm fond of the Gray Catbird and the New Zealand Bellbird (korimako).

## About

CodeWarbler is currently tended by Joe Weiss.

These projects would not exist without the open source contributors to Tone.js, P5.js, Monaco, Tonal.js and many more. Thank you for your contributions to past and future creative endeavours.
