/* Shift key broken */

/* ----- HTML Element Variables ----- */

var noteCmd = document.getElementById('note-command');
var noteNum = document.getElementById('note-number');
var noteVel = document.getElementById('note-velocity');
var statBanner = document.getElementById('status-banner');

var midiName = document.getElementById('midi-name');
var midiManufacturer = document.getElementById('midi-manufacturer');
var midiState = document.getElementById('midi-state');
var midiType = document.getElementById('midi-type');

/* ----- MIDI Connection Handler ----- */

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
    midi = midiAccess;

    midiAccess.onstatechange = updateDevices;

    const inputs = midiAccess.inputs;

    inputs.forEach((input) => {
        input.onmidimessage = (msg) => handleMIDI(msg);
    });
}

function updateDevices(event) {
    console.log(`Name: ${event.port.name}, Brand: ${event.port.manufacturer}, State: ${event.port.state}, Type: ${event.port.type}`);
    midiName.innerHTML = event.port.name;
    midiManufacturer.innerHTML = event.port.manufacturer;
    midiState.innerHTML = event.port.state;
    midiType.innerHTML = event.port.type;

    if (midiState.innerHTML == 'connected') {
        statBanner.style.backgroundColor = '#00ff00';
        statBanner.innerHTML = 'Connected to MIDI';
    } else if (midiState.innerHTML == 'disconnected') {
        statBanner.style.backgroundColor = '#ff0000';
        statBanner.innerHTML = 'Unable to connect to MIDI';
    } else {
        console.log('Unable to retrieve MIDI state')
    }
}

function onMIDIFailure(msg) {
    console.log(`Unable to connect to MIDI: ${msg}`);
    statBanner.style.backgroundColor = '#ff0000';
    statBanner.innerHTML = `Error connecting to MIDI: ${msg}`;
}

/* ----- MIDI Handler ----- */

function handleMIDI(input) {
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];
    
    noteCmd.innerHTML = command;
    noteNum.innerHTML = note;
    noteVel.innerHTML = velocity;

    console.log(`Command: ${command}, Note: ${note}, Velocity: ${velocity}`);

    /* Key Down/Up */
    if (command == 144) {
        switch (note) {
            case 21:
                keydown('f5', note, velocity);
                break;
            case 23:
                keydown('f6', note, velocity)
                break;
            case 24:
                keydown('escape', note, velocity)
                break;
        // --------------------
            case 43:
                keydown('b', note, velocity)
                break;
            case 45:
                keydown('4', note, velocity)
                break;
            case 46:
                keydown('q', note, velocity)
                break;
            case 47:
                keydown('a', note, velocity)
                break;
            case 48:
                keydown('s', note, velocity)
                break;
            case 49:
                keydown('w', note, velocity)
                break;
            case 50:
                keydown('d', note, velocity)
                break;
            case 51:
                keydown('e', note, velocity)
                break;
            case 52:
                keydown('r', note, velocity)
                break;
            case 53:
                keydown('f', note, velocity)
                break;
            case 54:
                keydown('2', note, velocity)
                break;
            }
    } else if (command == 176) {
        switch(note) {
            case 67:
                keydown('shiftleft', note, velocity)
                break;
            case 66:
                keydown('ctrl', note, velocity)
                break;
            case 64:
                keydown('space', note, velocity)
                break;
            }
        } else {
            console.log('Unregistered input.')
        }
    }

function keydown(key, note, velocity) {
    var pressedKey = document.getElementById(`${key}`);

    if (velocity > 0) {
        pressedKey.classList.add('active');
        var down = true;
        sendToServer(key, down);
    } else {
        pressedKey.classList.remove('active');
        var down = false;
        sendToServer(key, down);
    }
}

function sendToServer(key, down) {
    const dict_values = {key, down};
    const x = JSON.stringify(dict_values);
    console.log(x);
    $.ajax({
        url: '/presskey',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(x)
    });
}
