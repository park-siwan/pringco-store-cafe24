/**
 * 할인기간 레이어
 */
$(document).ready(function(){
    $('.discountPeriod > a').live('click', function() {
        $(this).parent().find('.layerDiscountPeriod').show();
    });

    $('.btnClose, button.submit').live('click', function() {
        $(this).parents('.layerDiscountPeriod').hide();
    });
});






 /* 분류페이지 상품목록 탭 */   

$( document ).ready( function(){
    
    $('#sub_catetab_button .grid1').click(function(e) {
        $('#sub_catetab ul').attr( 'class', 'grid1' );
        
        $("#sub_catetab_button .grid1").attr("src", "/web/upload/m_itsme/view_bt01_on.png");
        $("#sub_catetab_button .grid2").attr("src", "/web/upload/m_itsme/view_bt02.png");
        $("#sub_catetab_button .grid3").attr("src", "/web/upload/m_itsme/view_bt03.png");
    });
    
    $('#sub_catetab_button .grid2').click(function(e) {
        $('#sub_catetab ul').attr( 'class', 'grid2' );
        
        $("#sub_catetab_button .grid1").attr("src", "/web/upload/m_itsme/view_bt01.png");
        $("#sub_catetab_button .grid2").attr("src", "/web/upload/m_itsme/view_bt02_on.png");
        $("#sub_catetab_button .grid3").attr("src", "/web/upload/m_itsme/view_bt03.png");
    });
    
    $('#sub_catetab_button .grid3').click(function(e) {
        $('#sub_catetab ul').attr( 'class', 'grid3' );
        
        $("#sub_catetab_button .grid1").attr("src", "/web/upload/m_itsme/view_bt01.png");
        $("#sub_catetab_button .grid2").attr("src", "/web/upload/m_itsme/view_bt02.png");
        $("#sub_catetab_button .grid3").attr("src", "/web/upload/m_itsme/view_bt03_on.png");
    });
       
   
});


