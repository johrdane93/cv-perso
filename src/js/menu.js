$(window).scroll(function(e){
    e.preventDefault();
    var scroll = $(this).scrollTop();
    var height = $(this).height();
    if(scroll >= height){
        $('#menu').css({
            'position' : 'fixed',
            'top' : '0px',
            'left' : 'Opx'
        });
    } else {
     $('#menu').css({
        'position' : 'absolute',
        'top' : '100%',
        'left' : 'Opx'
    });
 }
});

$('a.scroll').click(function(e) {
    e.preventDefault();
    $(window).scrollTo('' + $(this).attr('href') + '', 500);
});