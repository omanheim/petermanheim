var activeTab = 'none';

$('#tabs span').click(function() {
    var tab = $(this).attr('id');
    if (activeTab == tab) $('#slider').slideToggle();
    else {
        $('#slider .tab').each(function() {
            $(this).hide();
        });
        if (tab == 'about') $('#slider').css('width', '1200px');
        else $('#slider').css('width', '500px');
        $('#' + tab + 'Tab').show();
        if (!$('#slider').is(':visible')) $('#slider').slideToggle();
        activeTab = tab;
    }
});
