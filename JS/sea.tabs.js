// sea.tabs
// version 1.0.0
// © Oleg Morev, 2015
// https://github.com/DpOLEGapx/
//
// =====================================================================================================================
$(function(){
    $('.seaTabs_tab').each(function(item){
        $(this).click(function(){
            $(this).addClass('seaTabs_switch_active').siblings().removeClass('seaTabs_switch_active');
            $($('.seaTabs_item')[item]).addClass('seaTabs_content_active').siblings().removeClass('seaTabs_content_active');
        });
    });
});
