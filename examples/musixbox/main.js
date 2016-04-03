

var APP_WIDTH   = 2600;
var APP_HEIGHT  = 1200;



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

