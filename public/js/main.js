var activeTab = 'none';

sizeSlider();

$('#tabs span').click(function() {
    var tab = $(this).attr('id');
    if (activeTab == tab) $('#slider').slideToggle();
    else {
        $('#slider .tab').each(function() {
            $(this).hide();
        });
        if (tab == 'about') $('#slider').css('width', '600px');
        else $('#slider').css('width', '500px');
        $('#' + tab + 'Tab').show();
        if (!$('#slider').is(':visible')) $('#slider').slideToggle();
        activeTab = tab;
    }
});

function sizeSlider() {
    if ($(window).height() < 665) $('#slider').css('max-height', 100);
    else $('#slider').css('max-height', 325);
}

$(window).on('resize', function() {
    sizeSlider();
});
