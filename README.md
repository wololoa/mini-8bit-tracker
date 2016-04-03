# Mini 8bit Tracker

a.k.a "Incredible simple way to make NES/8bit/retro sounds in HTML5".

# What

A very small (just two classes, an object and a couple functions) library that helps you making 8bit alike sounds and/or music.

It uses [basejs](https://github.com/ertrzyiks/basejs) to write code "the way it is meant to be", WebAudio to make sounds, and the magic of [micronjs](http://micronjs.github.io/) for the advanced example - musixbox, a "complete" tracker with 6 channels and whatnot.

This thing is good for:

* playing sine/sawtooth/square/noisy-based sounds, using the [Equal Temperament Tuning](http://www.phy.mtu.edu/~suits/notefreqs.html) (which means you just play notes like in real instruments).
* easy to overload/change the generation functions to make any sound you want.
* friendly C-D-E-F-G-A-B/DO-RE-MI-FA-SOL-LA-SI interface for all notes.
* a bunch of generation functions already in place (the ones above plus a couple extra ones for extra funkyness).
* possibility to just make a "channel" and start playing sounds or use a complete multi-channel tracker (to load and play your .json songs).
* awesome 6 channel support! (did I mention this is alpha version? :smile: )

The base code for the audio generator is based on [this](https://github.com/razh/neptune-blue-js13k-2014). The code doesn't use oscillators or any other WebAudio fancy-shit because...

# Why

Well, I wanted to explore and experiment with 8bit sounds in the browser for my games, and while [sfxrjs](https://github.com/grumdrig/jsfxr) is the best thing to create 8bit SFX (because the original sfxr is just awesome) and [bandjs](https://github. com/meenie/band.js/) is... kinda... actually, this is an overkill: not "tweakable" enough, it has too many classes/interfaces and didn't work for my purposes (make a simple tracker). Other tools (like [chirp](http://chirp.rezoner.net/)) are cool but a bit "too much for my needds". Also I was looking for a pure-code approach too, and not only something to make .wav files. So there you go!

# How to use

Include minitracker.js in your project and then:

```javascript
var test = new MiniTracker(TrackerBass, 1.0);
test.play('C3', 0.0);
test.play('E3', 1.0);
test.play('G3', 2.0);
test.play('C4', 3.0);
```

Or you can just instance an entire multitracker like this:

```javascript
var yourSong = {
    tracks : [
        {
            waveFn: TrackerSine,
            soundDuration: 0.2,
            volume: 4.0,
            notes : "DO3 RE3 MI3 DO3 DO3 RE3 MI3 DO3 MI3 FA3 SOL4"
        },
        {
            waveFn: TrackerBass,
            soundDuration: 0.1,
            volume: 1.0,
            notes : "DO2 DO3 DO2 DO3 MI2 MI3 MI2 MI3 SOL2 SOL3 SOL2 SOL3 DO2 DO3 DO2 DO3 MI2 MI3 MI2 MI3 SOL2 SOL3 SOL2 SOL3"
        }
    ]
};

var multi = new MultiTracker();
multi.load(yourSong);
multi.play(0, true);
```

If you want to see a somehow advanced usage, check the musixbox sample.

Also, check the [docs](./doc/documentation.md) to see a quite simple and shitty API documentation.

# How to build

Coming soon!

# FAQ

* Q. Is this actually useful?
Depends on your needs. I'd like to keep using this for experiments.

* Q. Can this create sounds like sfxr?
Depends on how well you write your generation functions, but if you just want to create SFX... keep using sfxr.

* Q. Will you develop this further or the musixbox editor?
Likely not. I want to go back making games now :)

* Q. Why is the tracker/editor so shitty?
Well, making an app takes time. Everything you see there is kinda proof-of-concept code (including the icons and so on). The main idea is use it to create small loops (5-10 seconds) with a limited set of channels. Also this system is kinda not ready for full games, so you are better off playing .wav files or .mp3. Or maybe not!

# Who

(c) Almar. 2016. Check the license.
