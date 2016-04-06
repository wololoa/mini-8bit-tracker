

/*
var trackerTest = new MiniTracker(TrackerBass);

trackerTest.play('C#3', 0.0);
trackerTest.play('D#4', 0.2);
trackerTest.play('F#5', 0.4);
trackerTest.play('G#3', 0.8);
trackerTest.play('C#2', 1.2);
trackerTest.play('F#4', 1.6);
*/

var tioDiego = {

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

var multiTrackerTest = new MultiTracker();
multiTrackerTest.load(tioDiego);
multiTrackerTest.play(0, true);
