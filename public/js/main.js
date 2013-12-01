var activeTab = 'none',
    images = ['blur.jpg, noblur.jpg'],
    image = 0,
    font = 3,
    fonts = ["'Ribeye', cursive", "'Quicksand', sans-serif", "'Trocchio', serif", "'Poiret One', cursive"],
    inImages = false;

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

$('#images').click(function() {
    other = image == 0 ? 'blur.jpg' : 'noblur.jpg';
    if (false) {
        if ($('#slider').is(':visible')) $('#slider').slideToggle();
        $('html').css('background','black');
        $('#pics').show();
        inImages = true;
    } else {
        $('#pics').hide();
        $('html').css('background', 'url(' + other + ') no-repeat center center fixed');
        $('html').css('-webkit-background-size', 'cover');
        $('html').css('-moz-background-size', 'cover');
        $('html').css('-o-background-size', 'cover');
        inImages = false;
        other = (other + 1) % 1;
    }
});

$(document).keyup(function(e) {
    if (e.which == 70) {
        font = (font + 1) % fonts.length;
        $('html').css('font-family',fonts[font]);
    }
    if (e.which == 61) {
        $('#head, #sub').each(function() {
            var size = $(this).css('font-size').replace('px',''),
                newSize = parseInt(size) + 3;
            $(this).css('font-size', newSize + 'px');
        });
    }
    if (e.which == 173) {
        $('#head, #sub').each(function() {
            var size = $(this).css('font-size').replace('px',''),
                newSize = parseInt(size) - 3;
            $(this).css('font-size', newSize + 'px');
        });
    }
});
