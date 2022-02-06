$(document).ready(function(){
        
    $(".sso_top2").hide();
    $(function () {
                 
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) { // scroll
                $('.sso_top2').fadeIn();
            } else {
                $('.sso_top2').fadeOut();
            }
        });
                
                       
        $('.toptop').click(function () {            
            $('body,html').animate({
                scrollTop: 0
            }, 300);  // move speed
            return false;
        });
 
        
        $('.bottombottom').click(function(){
            $('body,html').animate({
                scrollTop: $(document).height()}, 300);
            return false;
        });
   
 
    });
 
});


