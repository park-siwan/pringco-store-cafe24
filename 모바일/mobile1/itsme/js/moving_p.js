$(function() { 
        baloonUp();
        function baloonUp() { $(".movingpoint").animate({'top':-1}, 'slow', null, baloonDown);}
        function baloonDown() { $(".movingpoint").animate({'top':1}, 500, null, baloonUp);}
    });

