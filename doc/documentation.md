# Mini 8bit Tracker docs

The lib is composed of 4 parts:

* **TrackerFrequencies**: an object used as map of frequencies. For example: `TrackerFrequencies['C3']` will give you back "130.81". This contains both C-D-E-F-G-A-B and DO-RE-MI-FA-SOL-LA-SI notes (plus all # and b).

* **MiniTracker**: our base "instrument/generator" class. You must pass a generation function and then you will just play notes with this one.

* **MultiTracker**: a collection of **MiniTracker**s. Basically you use this to load your .json files and play songs.

* A bunch of generation functions. You can see them all below.

# MiniTracker

---
`constructor (waveFn, soundDuration, volume) `

* **waveFn**: a function of signature `fn(sample, length)` which must return a floating value used to create an audiobuffer for each given note in TrackerFrequencies.
* **soundDuration**: the duration in seconds that each note will play for this instrument. All notes of a given instrument have the same length. OOPS. Also: there are no "note duration" or BPM shenanigans here. You define the time as you want.
* **volume**: kinda obvious I guess?
---
`initNoteBuffers ()`
* Starts all the note buffers for this instrument (it is called automatically by the constructor). Call this manually if you want to change something in the instrument (volume, generation function, sound duration, etc).
---
`generateAudioBuffer (freq, fn, duration, volume)`
* Use this one to generate a concrete note. Useful if you want to create notes of different duration/volume/function. So yes, you can actually have everything in one instrument - but you need to write a bit of code! (no need to call this manually).
---
`play (note, delay)`
* **note**: any string. If the string you pass exists in **TrackerFrequencies**, it will use that frequency to play the note. If it doesn't (try to play "lol"), then you will get silence. Useful for rest and silence in general.
* **delay**: a number. The amount (in seconds) that this will he played AFTER the current audiocontext time of this tracker.

Example:
`tracker.play('C#3', 10.0);` will play C#3 10 seconds after you call this method.
---
`stop ()`
* Stops all sounds (currently playing or future) for this tracker.
---

# MultiTracker

---
`constructor ()`
* *Kinda obvious right?*
---
`load (json)`
* Loads a json-formatted object with the following content:

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
Loading a new song will remove the previously loaded from memory.

---
`play (fromTime, loop)`
* **fromTime**: start playing from the given time. TODO
* **loop**: if true, the song will loop until **stop()** is called.
---
`stop ()`
* Stops everything.
---
`onEnded ()`
* Internal method executed when the normal song playing stops. In the future, you will be able to exec a callback here too.
---

# Available generation functions

* *TrackerSine*: your typical sinusoidal function.
* *TrackerSawtooth*: sawtooth shaped function.
* *TrackerSquare*: square!
* *TrackerWhiteNoise*: just noise.
* *TrackerNoise*: sinusoidal modulated noise (good for drums).
* *TrackerBass*: a nice low-toned sinusoidal modulated thing.
* *TrackerLaser*: kinda laser thingy.
* *TrackerBubble*: wopwopwop.

If you want to add a custom function, just use the following signature;

`CustomFunction(sample, length) > return number`, where:

*sample*: `frequency * i / rate` (and i is the current point in the buffer, from 0 to length).

*time*: `i / length` (so basically the current percent, from 0.0 to 1.0).

Note: you can skip both values and just create whatever the hell you want, however it is good to use at least sample to have a base frequency to work with.
