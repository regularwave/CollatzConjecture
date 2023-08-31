var sequenceOutput = document.getElementById('sequence');

function calcsequence() {
    var startSeed = document.getElementById('startseed').value;
    sequenceOutput.innerHTML = '';

    do {
        sequenceOutput.innerHTML += startSeed + ", ";
        if (startSeed % 2 == 0) {
            startSeed = startSeed / 2;
        } else {
            startSeed = startSeed * 3 + 1;
        }
    } while (startSeed > 1)

    sequenceOutput.innerHTML += startSeed;
}