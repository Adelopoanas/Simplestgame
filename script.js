var character = document.getElementById('character');
var block = documemnt.getElementById('block');
function jump() {
    if (character.classList != 'animate'){
        character.classList.add('animate');
    }
    setTimeout(function() {
        character.classList.remove('animate');
    },500);
}

var checkDead = setInterval(function() {
    var character = 
    parseInt(window.getComputedStyle(character).getPropertyValue('top'));
},10);