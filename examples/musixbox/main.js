

var APP_WIDTH   = 2600;
var APP_HEIGHT  = 1200;


/**
 * Equal Temperament Tuning
 * Source: http://www.phy.mtu.edu/~suits/notefreqs.html
 */
var TrackerFrequencies = {
    'C0': 16.35,
    'C#0': 17.32,
    'Db0': 17.32,
    'D0': 18.35,
    'D#0': 19.45,
    'Eb0': 19.45,
    'E0': 20.60,
    'F0': 21.83,
    'F#0': 23.12,
    'Gb0': 23.12,
    'G0': 24.50,
    'G#0': 25.96,
    'Ab0': 25.96,
    'A0': 27.50,
    'A#0': 29.14,
    'Bb0': 29.14,
    'B0': 30.87,
    'C1': 32.70,
    'C#1': 34.65,
    'Db1': 34.65,
    'D1': 36.71,
    'D#1': 38.89,
    'Eb1': 38.89,
    'E1': 41.20,
    'F1': 43.65,
    'F#1': 46.25,
    'Gb1': 46.25,
    'G1': 49.00,
    'G#1': 51.91,
    'Ab1': 51.91,
    'A1': 55.00,
    'A#1': 58.27,
    'Bb1': 58.27,
    'B1': 61.74,
    'C2': 65.41,
    'C#2': 69.30,
    'Db2': 69.30,
    'D2': 73.42,
    'D#2': 77.78,
    'Eb2': 77.78,
    'E2': 82.41,
    'F2': 87.31,
    'F#2': 92.50,
    'Gb2': 92.50,
    'G2': 98.00,
    'G#2': 103.83,
    'Ab2': 103.83,
    'A2': 110.00,
    'A#2': 116.54,
    'Bb2': 116.54,
    'B2': 123.47,
    'C3': 130.81,
    'C#3': 138.59,
    'Db3': 138.59,
    'D3': 146.83,
    'D#3': 155.56,
    'Eb3': 155.56,
    'E3': 164.81,
    'F3': 174.61,
    'F#3': 185.00,
    'Gb3': 185.00,
    'G3': 196.00,
    'G#3': 207.65,
    'Ab3': 207.65,
    'A3': 220.00,
    'A#3': 233.08,
    'Bb3': 233.08,
    'B3': 246.94,
    'C4': 261.63,
    'C#4': 277.18,
    'Db4': 277.18,
    'D4': 293.66,
    'D#4': 311.13,
    'Eb4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'F#4': 369.99,
    'Gb4': 369.99,
    'G4': 392.00,
    'G#4': 415.30,
    'Ab4': 415.30,
    'A4': 440.00,
    'A#4': 466.16,
    'Bb4': 466.16,
    'B4': 493.88,
    'C5': 523.25,
    'C#5': 554.37,
    'Db5': 554.37,
    'D5': 587.33,
    'D#5': 622.25,
    'Eb5': 622.25,
    'E5': 659.26,
    'F5': 698.46,
    'F#5': 739.99,
    'Gb5': 739.99,
    'G5': 783.99,
    'G#5': 830.61,
    'Ab5': 830.61,
    'A5': 880.00,
    'A#5': 932.33,
    'Bb5': 932.33,
    'B5': 987.77,
    'C6': 1046.50,
    'C#6': 1108.73,
    'Db6': 1108.73,
    'D6': 1174.66,
    'D#6': 1244.51,
    'Eb6': 1244.51,
    'E6': 1318.51,
    'F6': 1396.91,
    'F#6': 1479.98,
    'Gb6': 1479.98,
    'G6': 1567.98,
    'G#6': 1661.22,
    'Ab6': 1661.22,
    'A6': 1760.00,
    'A#6': 1864.66,
    'Bb6': 1864.66,
    'B6': 1975.53,
    'C7': 2093.00,
    'C#7': 2217.46,
    'Db7': 2217.46,
    'D7': 2349.32,
    'D#7': 2489.02,
    'Eb7': 2489.02,
    'E7': 2637.02,
    'F7': 2793.83,
    'F#7': 2959.96,
    'Gb7': 2959.96,
    'G7': 3135.96,
    'G#7': 3322.44,
    'Ab7': 3322.44,
    'A7': 3520.00,
    'A#7': 3729.31,
    'Bb7': 3729.31,
    'B7': 3951.07,
    'C8': 4186.01,

    // solphashit
    'DO0': 16.35,
    'DO#0': 17.32,
    'REb0': 17.32,
    'RE0': 18.35,
    'RE#0': 19.45,
    'MIb0': 19.45,
    'MI0': 20.60,
    'FA0': 21.83,
    'FA#0': 23.12,
    'SOLb0': 23.12,
    'SOL0': 24.50,
    'SOL#0': 25.96,
    'LAb0': 25.96,
    'LA0': 27.50,
    'LA#0': 29.14,
    'SIb0': 29.14,
    'SI0': 30.87,
    'DO1': 32.70,
    'DO#1': 34.65,
    'REb1': 34.65,
    'RE1': 36.71,
    'RE#1': 38.89,
    'MIb1': 38.89,
    'MI1': 41.20,
    'FA1': 43.65,
    'FA#1': 46.25,
    'SOLb1': 46.25,
    'SOL1': 49.00,
    'SOL#1': 51.91,
    'LAb1': 51.91,
    'LA1': 55.00,
    'LA#1': 58.27,
    'SIb1': 58.27,
    'SI1': 61.74,
    'DO2': 65.41,
    'DO#2': 69.30,
    'REb2': 69.30,
    'RE2': 73.42,
    'RE#2': 77.78,
    'MIb2': 77.78,
    'MI2': 82.41,
    'FA2': 87.31,
    'FA#2': 92.50,
    'SOLb2': 92.50,
    'SOL2': 98.00,
    'SOL#2': 103.83,
    'LAb2': 103.83,
    'LA2': 110.00,
    'LA#2': 116.54,
    'SIb2': 116.54,
    'SI2': 123.47,
    'DO3': 130.81,
    'DO#3': 138.59,
    'REb3': 138.59,
    'RE3': 146.83,
    'RE#3': 155.56,
    'MIb3': 155.56,
    'MI3': 164.81,
    'FA3': 174.61,
    'FA#3': 185.00,
    'SOLb3': 185.00,
    'SOL3': 196.00,
    'SOL#3': 207.65,
    'LAb3': 207.65,
    'LA3': 220.00,
    'LA#3': 233.08,
    'SIb3': 233.08,
    'SI3': 246.94,
    'DO4': 261.63,
    'DO#4': 277.18,
    'REb4': 277.18,
    'RE4': 293.66,
    'RE#4': 311.13,
    'MIb4': 311.13,
    'MI4': 329.63,
    'FA4': 349.23,
    'FA#4': 369.99,
    'SOLb4': 369.99,
    'SOL4': 392.00,
    'SOL#4': 415.30,
    'LAb4': 415.30,
    'LA4': 440.00,
    'LA#4': 466.16,
    'SIb4': 466.16,
    'SI4': 493.88,
    'DO5': 523.25,
    'DO#5': 554.37,
    'REb5': 554.37,
    'RE5': 587.33,
    'RE#5': 622.25,
    'MIb5': 622.25,
    'MI5': 659.26,
    'FA5': 698.46,
    'FA#5': 739.99,
    'SOLb5': 739.99,
    'SOL5': 783.99,
    'SOL#5': 830.61,
    'LAb5': 830.61,
    'LA5': 880.00,
    'LA#5': 932.33,
    'SIb5': 932.33,
    'SI5': 987.77,
    'DO6': 1046.50,
    'DO#6': 1108.73,
    'REb6': 1108.73,
    'RE6': 1174.66,
    'RE#6': 1244.51,
    'MIb6': 1244.51,
    'MI6': 1318.51,
    'FA6': 1396.91,
    'FA#6': 1479.98,
    'SOLb6': 1479.98,
    'SOL6': 1567.98,
    'SOL#6': 1661.22,
    'LAb6': 1661.22,
    'LA6': 1760.00,
    'LA#6': 1864.66,
    'SIb6': 1864.66,
    'SI6': 1975.53,
    'DO7': 2093.00,
    'DO#7': 2217.46,
    'REb7': 2217.46,
    'RE7': 2349.32,
    'RE#7': 2489.02,
    'MIb7': 2489.02,
    'MI7': 2637.02,
    'FA7': 2793.83,
    'FA#7': 2959.96,
    'SOLb7': 2959.96,
    'SOL7': 3135.96,
    'SOL#7': 3322.44,
    'LAb7': 3322.44,
    'LA7': 3520.00,
    'LA#7': 3729.31,
    'SIb7': 3729.31,
    'SI7': 3951.07,
    'DO8': 4186.01

};


function lerp( a, b, t ) {
  return a + t * ( b - a );
};

function inverseLerp( a, b, x ) {
  return ( x - a ) / ( b - a );
};

function clamp( x, min, max ) {
  return ( x < min ) ? min : ( ( x > max ) ? max : x );
};

function smoothstep( x, min, max ) {
  if ( x <= min ) return 0;
  if ( x >= min ) return 1;

  x = ( x - min ) / ( max - min );

  return x * x * ( 3 - 2 * x );
};

function smootherstep( x, min, max ) {
  if ( x <= min ) return 0;
  if ( x >= min ) return 1;

  x = ( x - min ) / ( max - min );

  return x * x * x * ( x * ( x * 6 - 15 ) + 10 );
};

function randInt( low, high ) {
  return low + Math.floor( Math.random() * ( high - low + 1 ) );
};

function randFloat( low, high ) {
  return low + Math.random() * ( high - low );
};

function randFloatSpread( range ) {
  return range * ( 0.5 - Math.random() );
};

function randSign() {
  return Math.random() < 0.5 ? -1 : 1;
};

//---------------------------------------------------------------------------------------------


var MiniTracker = Base.extend({

    ctx           : null,
    rate          : 0,
    noteBuffers   : null,             // these buffers hold all the notes possible created with the given generation function. They are used to play sounds.
    sourceBuffers : null,             // these are playback buffers used to play the notes
    waveFnCb      : Utils.emptyFn,    // your generation function. You can write your own - just need to take 2 arguments: sample and time.
    soundDuration : 0.2,              // in seconds - how long each note sounds.
    volume        : 1.0,

    constructor : function(waveFn, soundDuration, volume)
    {
        this.callParent();
        this.ctx = new(window.AudioContext || window.webkitAudioContext);
        this.rate = this.ctx.sampleRate;
        this.waveFnCb = waveFn;
        this.soundDuration = soundDuration || 0.2;
        this.volume = volume || 1.0;

        // create all the buffers for this "instrument"
        this.initNoteBuffers();
    },

    // example note: 'C#3' > 138.59 - returns the frequency of a given note in standard alphabetic or solphaziaslda notation
    getFrequency : function(note)
    {
        var out = 'C4';

        if(note in TrackerFrequencies)
        {
            out = TrackerFrequencies[note];
        }
        return out;
    },

    // create all notes for this "instrument"
    initNoteBuffers : function()
    {
        this.noteBuffers = {};
        this.sourceBuffers = [];

        for(var key in TrackerFrequencies)
        {
            var freq = this.getFrequency(key);
            var buffer = this.generateAudioBuffer(freq, this.waveFnCb.bind(this), this.soundDuration, this.volume);
            this.noteBuffers[key] = buffer;
        }
    },

    // internal method, used by initNoteBuffers
    generateAudioBuffer : function( freq, fn, duration, volume )
    {
        // duration is in seconds.
        var length = duration * this.rate;
        var buffer = this.ctx.createBuffer( 1, length, this.rate );
        var channel = buffer.getChannelData(0);

        for ( var i = 0; i < length; i++ )
        {
            channel[i] = fn( freq * i / this.rate, i / length ) * volume;
        }

        return buffer;
    },

    // note: playing 2 sounds at the same time will end in shit. also, overlapping sounds can end up pretty badly.
    // it is better to create several mini trackers instead
    play : function( note, delay )
    {
        if(note in this.noteBuffers)
        {
            var source = this.ctx.createBufferSource();
            source.buffer = this.noteBuffers[note];
            source.connect( this.ctx.destination );
            source.start( delay ? this.ctx.currentTime + delay : 0 );
            this.sourceBuffers.push(source);
        }
    },

    // stop all associated playing buffers
    stop : function()
    {
        for(var i = 0; i < this.sourceBuffers.length; i++)
        {
            this.sourceBuffers[i].stop();
        }
    }
});


// This is the most basic one: the notes and silences come straight from a line, without specifying the time of each note
var MultiTracker = Base.extend({

    // a channel is a minitracker + notes.
    tracks : null,
    isPlaying : false,
    isLooping : false,

    constructor : function()
    {
        this.callParent();
        this.tracks = [];
    },

    // an object from json (not stringy json)
    // NOTE: loading a new file overwrites the previous one
    load : function(jsonObject)
    {
        for(var i = 0; i < jsonObject.tracks.length; i++)
        {
            var track = jsonObject.tracks[i];
            //this.newChannel(tracks, tracks.notes)

            var newTrackInfo = {
                miniTracker: this.newMiniTracker(track),
                notes: this.getNotesArray(track)
            }

            this.tracks.push(newTrackInfo);
        }
    },

    getNotesArray : function(config)
    {
        var notes = config.notes.split(" ");
        return notes;
    },

    newMiniTracker : function(config)
    {
        return new MiniTracker(config.waveFn, config.soundDuration, config.volume);
    },

    // from time: TODO!!!
    play : function(fromTime, loop) //, onEndedCb)
    {
        this.isPlaying = true;

        var looping = loop;
        if(Utils.isEmpty(loop))
        {
            looping = false;
        }
        this.isLooping = looping;

        var totalPlaytime = 0.0;

        for(var i = 0; i < this.tracks.length; i++)
        {
            var soundStep = this.tracks[i].miniTracker.soundDuration;
            var time = 0.0;

            for(var j = 0; j < this.tracks[i].notes.length; j++)
            {
                var note = this.tracks[i].notes[j];

                this.tracks[i].miniTracker.play(note, time);

                time += soundStep;
            }

            if(time > totalPlaytime)
            {
                totalPlaytime = time;
            }
        }

        Utils.invoke(this.onEnded.bind(this), totalPlaytime);
    },

    stop : function()
    {
        this.isPlaying = false;

        for(var i = 0; i < this.tracks.length; i++)
        {
            this.tracks[i].miniTracker.stop();
        }
    },

    onEnded : function()
    {
        console.log("the song ended!");

        this.stop();
        if(this.isLooping)
        {
            this.play(0.0, true);
        }
    }

});


//--------------------------------------------------
// some functions

function TrackerSine( sample )
{
    return Math.sin( sample * 2 * Math.PI );
}

function TrackerSineTime( sample, time )
{
    return TrackerSine(sample) / time;
}

function TrackerSquare( sample )
{
    var sign = 1;
    if(sample > Math.PI) sign = -1;
    return (sign * sample) * TrackerSine(sample);
}

function TrackerSawtooth( sample )
{
    var sine = TrackerSine(sample);
    return sample - (sample * sine);
}

function TrackerSawtoothTime( sample, time )
{
    return TrackerSawtooth(sample) / time;
}

/*
function TrackerTriangle( sample )
{
    var sine = TrackerSine(sample);
    var output = sine;

    if(sample < Math.PI)
        output = -sample + (0.2 * sample) / sine;
    else
        output = 3 * sample - (0.2 * sample) / sine;

    return output;
}
*/

function TrackerBass( sample, time )
{
    var wave = 2.5 * ( TrackerSine( sample ) + TrackerSine( 0.5 * sample ) );
    var env = Math.exp( -time * 2 );
    return wave * env;
}

function TrackerWhiteNoise( sample, time )
{
    return randFloatSpread(sample);
}

function TrackerNoise( sample, time )
{
    return Math.random() / Math.floor(sample) * 2.0;
}

function TrackerLaser( sample, time )
{
    return TrackerSine(sample * sample * 0.5) / time;
}

function TrackerBubble( sample, time )
{
    return TrackerSine( sample * time );
}

//-----------

function test( sample, time )
{
    //var wave = TrackerWhiteNoise(sample) * 0.015 + TrackerBubble(sample, time); //TrackerBass(sample );
    //var env = Math.exp( -time );
    //return wave; // * env;

    var s = TrackerSine(sample);
    return smoothstep(s, time, sample);
};

//-----------

/*
var trackerTest = new MiniTracker(TrackerBass   );

trackerTest.play('C#3', 0.0);
trackerTest.play('D#4', 0.2);
trackerTest.play('F#5', 0.4);
trackerTest.play('G#3', 0.8);
trackerTest.play('C#2', 1.2);
trackerTest.play('F#4', 1.6);
*/


var tioDiego = {

    tracks : [
/*
        {
            name: "melody",
            waveFn: TrackerSine,
            soundDuration: 0.2,
            volume: 4.0,
            notes : "DO3 RE3 MI3 DO3 DO3 RE3 MI3 DO3 MI3 FA3 SOL4" //"SI4 SI4 SI4 SI4 LA4 SOL4 SOL4 FA#4 MI4 MI4 MI4 SOL4 SI4 MI5 MI5 MI5 MI5 RE5 DO5 DO5 SI4 LA4 LA4"
        },


        {
            name: "melody",
            waveFn: TrackerBass,
            soundDuration: 0.1,
            volume: 1.0,
            notes : "DO2 DO3 DO2 DO3 MI2 MI3 MI2 MI3 SOL2 SOL3 SOL2 SOL3 DO2 DO3 DO2 DO3 MI2 MI3 MI2 MI3 SOL2 SOL3 SOL2 SOL3"
        }
*/

        {
            name: "bass",
            waveFn: TrackerBass,
            soundDuration: 0.1,
            volume: 2.0,
            notes: "MI2 SOL2 SI2 MI3 MI2 SOL2 SI2 MI3 MI2 SOL2 SI2 MI3 MI2 SOL2 SI2 MI3 MI2 SOL2 SI2 MI3 MI2 SOL2 SI2 MI3 MI2 SOL2 SI2 MI3"
        }
    ]
};

//-------------------------------------------------------------

// uncomment me! - this will crash due to too many audio contexts
//var multiTrackerTest = new MultiTracker();
//multiTrackerTest.load(tioDiego);
//multiTrackerTest.play(0); //, true);

/*
// testing stop
Utils.invoke(stopDelayed, 2.8);
function stopDelayed()
{
    multiTrackerTest.stop();
    console.log("stopping!");
    multiTrackerTest.play(0);
}
*/

// END OF THE LOVELY AND MIGHTY MINI TRACKER

//-------------------------------------------------------------

// SHITTY EDITOR EXAMPLE BEGINS NOW



var Keyboard = Entity.extend({

    x : 0,
    y : 0,
    octaves : 4,
    keys : null,
    keysMap : null,
    touchedKey : -1,
    touchedTime : 0.0,
    onKeyCb : Utils.emptyFn,
    silenceKey : null,

    constructor : function(x, y, octaves, onKey)
    {
        this.callParent("Keyboard");

        //this.keysMap = ['DO', 'DO#', 'RE', 'RE#', 'MI', 'FA', 'FA#', 'SOL', 'SOL#', 'LA', 'LA#', 'SI'];
        this.keysMap = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ];

        this.octaves = octaves;
        this.x = x;
        this.y = y;
        this.onKeyCb = onKey.bind(this);
        this.setup();

        Input.addInputReceiver(this);
    },

    isPointInKey: function(x, y, key)
    {
        return (x >= key.x && x <= key.x + key.width && y >= key.y && y <= key.y + key.height);
    },

    onClickInput : function(x, y)
    {
        var keyTouched = -1;

        // check black keys first
        for(var i = 0; i < this.keys.length; i++)
        {
            if(this.isPointInKey(x, y, this.keys[i]) && !this.keys[i].natural)
            {
                //console.log("click on black key: ", i, this.keys[i].natural);
                keyTouched = i;
                continue;
            }
        }

        // this means we haven't touched a key yet
        if(keyTouched === -1)
        {
            for(var i = 0; i < this.keys.length; i++)
            {
                if(this.isPointInKey(x, y, this.keys[i]) && this.keys[i].natural)
                {
                    keyTouched = i;
                    continue;
                }
            }
        }

        if(keyTouched > -1)
        {
            var key = this.keysMap[keyTouched % 12];
            var octave = Math.floor(keyTouched / 12);
            this.onKeyCb(key, octave);
        }
        else if(this.isPointInKey(x, y, this.silenceKey))
        {
            this.onKeyCb("ST", 0);
        }

        this.touchedKey = keyTouched;
    },

    setup : function()
    {
        this.keys = [];

        var baseX = this.x,
            baseY = this.y;

        for(var o = 0; o < this.octaves; o++)
        {
            for(var i = 0; i < 7; i++)
            {
                // black key
                if(i === 1 || i === 2 || i === 4 || i === 5 || i === 6)
                {
                    var newKey = {
                        x: baseX + (i * 74) - 25,
                        y: baseY,
                        width: 50,
                        height: 190,
                        color: [0.1, 0.1, 0.1],
                        natural: false
                    };

                    this.keys.push(newKey);
                }

                // white key
                var newKey = {
                    x: baseX + (i * 74),
                    y: baseY,
                    width: 70,
                    height: 300,
                    color: [0.9, 0.9, 0.9],
                    natural: true
                };

                this.keys.push(newKey);
            }

            baseX += (7 * 74);
        }

        this.silenceKey = {
            x: this.x,
            y: this.y + 310,
            width: baseX + (this.octaves * 70),
            height: 50,
            color: [0.9, 0.79, 0.09],
            natural: false
        }
    },

    draw : function()
    {
        // draw white first, black later. this is done like shit :D
        for(var i = 0; i < this.keys.length; i++)
        {
            var key = this.keys[i];
            if(key.natural)
            {
                Graphics.drawRect(key.x, key.y, key.width, key.height, key.color[0], key.color[1], key.color[2], 1.0);
            }

            if(i === this.touchedKey)
            {
                Graphics.drawRect(key.x, key.y, key.width, key.height, 0.3, 0.9, 0.75, 0.5);
            }
        }

        for(var i = 0; i < this.keys.length; i++)
        {
            var key = this.keys[i];
            if(!key.natural)
            {
                Graphics.drawRect(key.x, key.y, key.width, key.height, key.color[0], key.color[1], key.color[2], 1.0);
            }

            if(i === this.touchedKey && !key.natural)
            {
                Graphics.drawRect(key.x, key.y, key.width, key.height, 0.3, 0.9, 0.75, 0.5);
            }
        }

        Graphics.drawRect(this.silenceKey.x, this.silenceKey.y, this.silenceKey.width, this.silenceKey.height, 0.9, 0.6, 0.1, 1.0);
    },

    update : function(delta)
    {
        this.callParent(delta);

        if(this.touchedKey !== -1)
        {
            this.touchedTime += delta;
            if(this.touchedTime > 0.15)
            {
                this.touchedTime = 0.0;
                this.touchedKey = -1;
            }
        }
    }

});


var TOP_BAR_HEIGHT      = 64;
var CHANNEL_LINE_HEIGHT = 128;
var CHANNEL_NOTE_WIDTH  = 64;

var ChannelLine = Entity.extend({

    miniTracker : null,
    notes : null,
    height : 0,
    line : 0,
    isSelected : false,
    onSelectionCb : Utils.emptyFn,
    waveSprite : null,

    constructor : function(line, fn, soundDuration, volume, waveImg, onSelection)
    {
        this.callParent("tracker-" + line);

        this.notes = [];
        this.miniTracker = new MiniTracker(fn, soundDuration, volume);
        this.height = TOP_BAR_HEIGHT + (line * CHANNEL_LINE_HEIGHT);

        this.waveSprite = new Sprite(waveImg);
        this.waveSprite.y = this.height;
        this.add(this.waveSprite);

        this.line = line;
        this.onSelectionCb = onSelection;
        Input.addInputReceiver(this);
    },

    select : function(flag)
    {
        this.isSelected = flag;

        if(flag)
        {
            this.onSelectionCb(this.line);
        }
    },

    onClickInput : function(x, y)
    {
        if(y > this.height && y <= this.height + CHANNEL_LINE_HEIGHT)
        {
            this.select(true);
        }
    },

    resetTracker : function(fn, soundDuration, volume)
    {
        this.miniTracker.stop();

        delete this.miniTracker;

        this.miniTracker = new MiniTracker(fn, soundDuration, volume);
    },

    play : function(note)
    {
        this.miniTracker.play(note);
    },

    playAll : function()
    {
        var time = 0.0;
        for(var i = 0; i < this.notes.length; i++)
        {
            this.miniTracker.play(this.notes[i], time);
            time += this.miniTracker.soundDuration;
        }
    },

    stop : function()
    {
        this.miniTracker.stop();
    },

    addNote : function(note)
    {
        this.notes.push(note);
    },

    // removes the last note
    deleteNote : function()
    {
        this.notes.pop();
    },

    update : function(delta)
    {
        this.callParent(delta);
    },

    // TODO: USE ACTUAL FUCKING CONSTANTS!!!
    draw : function()
    {
        if(this.isSelected)
        {
            Graphics.drawRect(0.0, this.height, APP_WIDTH, CHANNEL_LINE_HEIGHT, 0.97, 0.26, 0.01, 1.0);
        }

        Graphics.drawRect(0.0, this.height + 2, APP_WIDTH, CHANNEL_LINE_HEIGHT - 4, 0.3, 0.3, 0.3, 0.6);
        Graphics.drawRect(0.0, this.height, CHANNEL_NOTE_WIDTH, CHANNEL_LINE_HEIGHT, 0.3, 0.5, 0.9, 0.9);
        Graphics.drawText("" + this.line, 4, this.height + 8, 1.0, 1.0, 1.0, 1.0, 20, "Arial");

        var noteWidth = CHANNEL_NOTE_WIDTH * (this.miniTracker.soundDuration * 10) / 2.0;

        // draw the separator lines
        for(var i = 0; i < Math.floor(APP_WIDTH / noteWidth); i++)
        {
            Graphics.drawRect(CHANNEL_NOTE_WIDTH + (i * noteWidth), this.height, 2, CHANNEL_LINE_HEIGHT, 0.0, 0.0, 0.0, 1.0);
        }

        // draw the actual notes
        for(var i = 0; i < this.notes.length; i++)
        {
            if(this.notes[i].indexOf("ST") > -1)
            {
                Graphics.drawRect(CHANNEL_NOTE_WIDTH + (i * noteWidth), this.height, noteWidth - 2, CHANNEL_LINE_HEIGHT - 2, 0.16, 0.86, 0.86, 0.35);
            }
            else
            {
                Graphics.drawRect(CHANNEL_NOTE_WIDTH + (i * noteWidth), this.height, noteWidth - 2, CHANNEL_LINE_HEIGHT - 2, 0.86, 0.86, 0.86, 0.85);
                Graphics.drawText(this.notes[i], CHANNEL_NOTE_WIDTH + (i* noteWidth) + 1, this.height + 20, .0, .0, .0, 1.0, 22, "Arial");
            }
        }

        this.callParent();
    }

});



var ButtonToggle = Sprite.extend({

    imgOn : "",
    imgOff : "",
    isOn : false,
    cb : Utils.emptyFn,

    constructor : function(imgOn, imgOff, cb)
    {
        this.callParent(imgOff);
        this.imgOn = imgOn;
        this.imgOff = imgOff;
        this.cb = cb;
        Input.addInputReceiver(this);
    },

    onClickInput : function(x, y)
    {
        if(this.isPointInRect(x, y))
        {
            this.toggle(!this.isOn);
            this.cb(this.isOn);
        }
    },

    toggle : function(flag)
    {
        this.isOn = flag;

        if(this.isOn)
        {
            this.setSource(this.imgOn);
        }
        else
        {
            this.setSource(this.imgOff);
        }
    }
});

// changed from the default micron button - that one is shitty
var Button = Sprite.extend({

    cb: null,
    text: null,

    constructor: function(img, onClick)
    {
        this.callParent(img);
        this.cb = onClick || Utils.emptyFn;
        Input.addInputReceiver(this);
    },

    onClickInput: function(x, y)
    {
        if(this.isPointInRect(x, y))
        {
            this.cb(this);
        }
    }
});

//----------------------------------------------------------------------------------------


// taken shamelessly from http://stackoverflow.com/questions/2897619/using-html5-javascript-to-generate-and-save-a-file
function DownloadFile(filename, text)
{
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);

    if (document.createEvent)
    {
        var event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        pom.dispatchEvent(event);
    }
    else
    {
        pom.click();
    }
};


function CreateDragNDropReader(onResult)
{
    // shamelessly taken from http://www.html5rocks.com/es/tutorials/file/dndfiles/
    // if the shit works, why rewrite it?
    function handleFileSelect(evt)
    {
        evt.stopPropagation();
        evt.preventDefault();

        var files = evt.dataTransfer.files; // FileList object.

        // files is a FileList of File objects. List some properties.
        var output = [];
        for (var i = 0, f; f = files[i]; i++)
        {
            var reader = new FileReader();
            reader.onload = (function(theFile)
            {
                return function(e)
                {
                    //console.log("on load: ", theFile.name, files[i]);

                    if(!Utils.isEmpty(onResult))
                    {
                        //console.log("The File! : ", e.target.result);
                        var file = { name: theFile.name, text: e.target.result };
                        onResult(file); //e.target.result); // return the contents of the loaded file
                    }
                };
            })(f);

            reader.readAsText(f);
        }
    }

    function handleDragOver(evt)
    {
        evt.stopPropagation();
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
    }

    // Setup the dnd listeners.
    var dropZone = document.body;
    dropZone.addEventListener('dragover', handleDragOver, true);
    dropZone.addEventListener('drop', handleFileSelect, true);
};

//-----------------------------------------------------------------------------------------

// todo: save this shit
var MusixBox = State.extend({

    keyboard : null,
    miniTracker : null,
    baseOctave : 2,
    channels : null,
    currentChannel : null,
    isRecording : false,

    btnPlay : null,
    btnStop : null,
    btnRecord : null,
    //btnPlus : null,
    btnSpeed : null,
    btnDel : null,
    btnBack : null,

    constructor : function()
    {
        this.callParent();

        CreateDragNDropReader(this.onDnDLoad.bind(this));
    },

    init : function()
    {
        this.callParent();

        this.keyboard = new Keyboard(10, APP_HEIGHT - 340, 5, this.onKeyCb.bind(this));
        this.add(this.keyboard);

        this.setupButtons();
        this.setupChannels();
    },

    setupButtons : function()
    {
        this.btnPlay = new ButtonToggle("btn_play_on", "btn_play_off", this.onBtnPlay.bind(this));
        //this.btnPlay.width = 62;
        this.add(this.btnPlay);

        this.btnStop = new Button("btn_stop", this.onBtnStop.bind(this));
        this.btnStop.x = 64;
        this.add(this.btnStop);


        this.btnRecord = new ButtonToggle("btn_record_on", "btn_record_off", this.onBtnRecord.bind(this));
        this.btnRecord.x = 128;
        this.add(this.btnRecord);

        this.isRecording = true;
        this.btnRecord.toggle(true);

        /*
        this.btnPlus = new Button("btn_plus", this.onBtnPlus.bind(this));
        this.btnPlus.x = 192;
        this.add(this.btnPlus);
        */

        this.btnDel = new Button("btn_del", this.onBtnDelete.bind(this));
        this.btnDel.x = 192;
        this.add(this.btnDel);

        this.btnBack = new Button("btn_back", this.onBtnBack.bind(this));
        this.btnBack.x = 256;
        this.add(this.btnBack);

        this.btnSpeed = new Button("btn_speed", this.onBtnSpeed.bind(this));
        this.btnSpeed.x = 512;
        this.add(this.btnSpeed);
    },

    setupChannels : function()
    {
        var firstChannel = new ChannelLine(0, TrackerSineTime, 0.1, 1.0, "wave_sine", this.onChannelSelected.bind(this));
        firstChannel.isSelected = true;
        this.currentChannel = firstChannel;

        this.channels = [];

        this.channels.push(firstChannel);
        this.channels.push(new ChannelLine(1, TrackerBass,     0.1, 1.0, "wave_bass",     this.onChannelSelected.bind(this)));
        this.channels.push(new ChannelLine(2, TrackerSawtooth, 0.1, 1.0, "wave_sawtooth", this.onChannelSelected.bind(this)));
        this.channels.push(new ChannelLine(3, TrackerSquare,   0.1, 1.0, "wave_square",   this.onChannelSelected.bind(this)));
        this.channels.push(new ChannelLine(4, TrackerNoise,    0.1, 1.0, "wave_noise",    this.onChannelSelected.bind(this)));
        this.channels.push(new ChannelLine(5, TrackerBubble,   0.1, 1.0, "wave_bubble",   this.onChannelSelected.bind(this)));

        for(var i = 0; i < this.channels.length; i++)
        {
            this.add(this.channels[i]);
        }
    },

    onDnDLoad : function(result)
    {
        console.log("dnd: ", result);
    },

    onKeyCb : function(note, octave)
    {
        var noteString = "" + note + (octave + this.baseOctave);

        if(!Utils.isEmpty(this.currentChannel))
        {
            this.currentChannel.play(noteString);

            if(this.isRecording)
            {
                this.currentChannel.addNote(noteString);
            }
        }
    },

    onBtnPlay : function(toggled)
    {
        for(var i = 0; i < this.channels.length; i++)
        {
            this.channels[i].stop();
            this.channels[i].playAll();
        }
    },

    onBtnStop : function()
    {
        this.btnPlay.toggle(false);
        for(var i = 0; i < this.channels.length; i++)
        {
            this.channels[i].stop();
        }

        /*
        //------------------
        var fileSelector = document.createElement('input');
        fileSelector.setAttribute('type', 'file');
        fileSelector.on("change", function(lol)
            {
                console.log("changed: ", lol);
            });
        console.log(fileSelector);

         var selectDialogueLink = document.createElement('a');
         selectDialogueLink.setAttribute('href', '');
         selectDialogueLink.innerText = "Select File";

         selectDialogueLink.onclick = function (evt) {
              console.log("click event ", evt);
              fileSelector.click();
              return false;
         }
         selectDialogueLink.onclick();
         //document.body.appendChild(selectDialogueLink);
        //------------------
        */
    },

    onBtnRecord : function(btnOn)
    {
        this.isRecording = btnOn;
    },

    /*
    onBtnPlus : function()
    {
        var newChannel = new ChannelLine(this.channels.length + 1, TrackerSine, 0.1, 1.0, this.onChannelSelected.bind(this));
        newChannel.isSelected = true;
        this.currentChannel = newChannel;
        this.add(newChannel);

        this.channels.push(newChannel);
    },
    */

    onBtnDelete : function()
    {
        this.currentChannel.notes = [];
    },

    onBtnBack : function()
    {
        this.currentChannel.notes.pop();
    },

    onBtnSpeed : function()
    {
        var currentSpeed = this.currentChannel.miniTracker.soundDuration;

        newSpeed = (currentSpeed + 0.1);
        if(newSpeed > 1.0)
        {
            newSpeed = 0.1;
        }

        this.currentChannel.miniTracker.soundDuration = newSpeed;
        this.currentChannel.miniTracker.initNoteBuffers();
    },

    onChannelSelected : function(channel)
    {
        this.currentChannel = this.channels[channel];

        for(var i = 0; i < this.channels.length; i++)
        {
            if(i !== channel)
            {
                this.channels[i].select(false);
            }
        }
    },

    update : function(delta)
    {
        this.callParent(delta);

        if(Input.isMousePressed())
        {
            mousePressed = true;
        }
        else
        {
            mousePressed = false;
        }
    },

    draw : function()
    {
        Graphics.drawFullScreenRect(0.0, 0.0, 0.0, 1.0);

        // this will draw the keyboard for us
        this.callParent();
    }

});

Core.init(APP_WIDTH, APP_HEIGHT);
Core.setState(new MusixBox());
Core.addAsset([
    'btn_play_on',    'gfx/btn_play_on.png',
    'btn_play_off',   'gfx/btn_play_off.png',
    'btn_stop',       'gfx/btn_stop_off.png',
    'btn_record_off', 'gfx/btn_record_off.png',
    'btn_record_on',  'gfx/btn_record_on.png',
    'btn_plus',       'gfx/btn_plus.png',
    'btn_speed',      'gfx/btn_speed.png',
    'btn_del',        'gfx/btn_del.png',
    'btn_back',       'gfx/btn_back.png',

    'wave_bass',      'gfx/wave_bass.png',
    'wave_bubble',    'gfx/wave_bubble.png',
    'wave_noise',     'gfx/wave_noise.png',
    'wave_sawtooth',  'gfx/wave_sawtooth.png',
    'wave_sine',      'gfx/wave_sine.png',
    'wave_square',    'gfx/wave_square.png',
]);
Core.loadAndRun();

