
$(document).ready(function() {

    var colourInfo = [
        { id: 'yellow', color: ['yellow','#1c1b1b'] },
        { id: 'green', color: ['green','#1c1b1b'] },
        { id: 'blue', color: ['blue','#1c1b1b'] },
        { id: 'white', color: ['white','#1c1b1b'] },
        { id: 'orange', color: ['orange','#1c1b1b'] },
    ];

    var changeIndex = 0, colorIndex = 0;

    var changeNextBoxColor = function() {
        if (!colourInfo[changeIndex]) {
            changeIndex = 0;
            colorIndex += 1;
        }

        var info = colourInfo[changeIndex],
            color = info.color[colorIndex%info.color.length];
            
        
        $('#' + info.id).css('background-color', color);

        changeIndex += 1;
        setTimeout(changeNextBoxColor, 150);
    };
    
    setTimeout(changeNextBoxColor, 150);

});