// JavaScript
var motto = 'Eat. Code. Sleep. Repeat.'
var mottoLength = 0

$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);
    mottoPrint = $('#motto');
    setInterval ('typeNerase()', 175);
});

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

function typeNerase() {
    mottoPrint.html(motto.substr(0, mottoLength++));
    if(mottoLength >= motto.length+1) {
        erase();
    }
}

function erase() {
    mottoPrint.html(motto.substr(0, mottoLength--));
    if(mottoLength >= 0) {
        setTimeout('erase()', 20);
    } else {
        mottoLength = 0;
    }
}
