/* 메뉴 */  
$( ".category_main > ul > li.shop" ).click(function() {
    $( ".sub_shop" ).slideToggle();
    $( ".sub_shop" ).siblings("div").hide();
});  

$( ".category_main > ul > li.community" ).click(function() {
    $( ".sub_community" ).slideToggle();
    $( ".sub_community" ).siblings("div").hide();
});  


$( ".category_main > ul > li.myshop" ).click(function() {
    $( ".sub_myshop" ).slideToggle();
    $( ".sub_myshop" ).siblings("div").hide();
});   


$( "#slideCateList > ul > li > a" ).find( "span" ).parent().css( "display", "none" );
$( "#slideCosmList > ul > li > a" ).find( "span" ).parent().parent().css( "display", "block" );
