$(document).ready(function(){

        $(".detail_info_togg a").click(function() {
            $(this).toggleClass("selected");
			$(".detail_info_ti a").not(this).removeClass("selected"); 
            $(this).next().slideToggle("normal").parent().siblings().children(".info_con_togg").hide();
            return false;
        });

 });




