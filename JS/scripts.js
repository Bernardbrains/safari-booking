$(document).ready(function(){
    var header = $('body');
    
    var backgrounds = new Array(
        'url(../images/safari.jpeg)',
        'url(../images/safari2.jpeg)',
        'url(../images/safari3.jpeg)',
        'url(../images/safari4.jpeg)'

    );
    
    var current = 0;
    
    function nextBackground() {
        current++;
        current = current % backgrounds.length;
        header.css('background-image', backgrounds[current]);
    }
    setInterval(nextBackground, 1000);
    
    header.css('background-image', backgrounds[0]);
    
    });