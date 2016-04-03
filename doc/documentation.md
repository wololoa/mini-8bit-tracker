# Mini 8bit Tracker docs

The lib is composed of 4 parts:

* **TrackerFrequencies**: an object used as map of frequencies. For example: `TrackerFrequencies['C3']` will give you back "130.81". This contains both C-D-E-F-G-A-B and DO-RE-MI-FA-SOL-LA-SI notes (plus all # and b).

* **MiniTracker**: our base "instrument/generator" class. You must pass a generation function and then you will just play notes with this one.

* **MultiTracker**: a collection of **MiniTracker**s. Basically you use this to load your .json files and play songs.

* A bunch of generation functions. You can see them all below.

# MiniTracker

`constructor (waveFn, soundDuration, volume) `
*waveFn*: a function of signature `fn(sample, length)` which must return a floating value used to create an audiobuffer for each given note in TrackerFrequencies.
*soundDuration*: the duration in seconds that each note will play for this instrument. All notes of a given instrument have the same length. OOPS. Also: there are no "note duration" or BPM shenanigans here. You define the time as you want.
*volume*: kinda obvious I guess?
---
`initNoteBuffers ()`
*Starts all the note buffers for this instrument. Call this manually if you want to change something in the instrument (volume, generation function, sound duration, etc).*
---
`generateAudioBuffer (freq, fn, duration, volume)`
*Use this one to generate a concrete note. Useful if you want to create notes of different duration/volume/function. So yes, you can actually have everything in one instrument - but you need to write a bit of code*
---
`play (note, delay)`
*note*: any string. If the string you pass exists in **TrackerFrequencies**, it will use that frequency to play the note. If it doesn't (try to play "lol"), then you will get silence. Useful for rest and silence in general.
*delay*: the amount (in seconds) that this will he played AFTER the current audiocontext time of this tracker.

Example:
`tracker.play('C#3', 10.0);` will play C#3 10 seconds after you call this method.
---
`stop ()`
*Stops all sounds (currently playing or future) for this tracker.*


# MultiTracker


`constructor ()`
---
`load (json)`
*Loads a json-formatted object with the following content:*

```javascript
var some_song = {
    tracks : [                      // Up to six tracks
        {
            waveFn: TrackerSine,    // The generation function used for this "channel"
            soundDuration: 0.2,     // The duration of the sound, in seconds.
            volume: 4.0,            // The volume of this channel. 1.0 is default.

            // a big-old string with notes. Put whatever you want to create a "silence"
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
```

---
``
---
``
---
``
---
``
---
``
---
``
---
``
---
``
---
``


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

Also, check the [docs](../doc/documentation.md) to see a quite simple and shitty API documentation.

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
