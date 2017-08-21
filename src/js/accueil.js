var titleInitialCenterX = 0;
var titleInitialCenterY = 0;

$(document).ready(function () {
    $(window).scrollTop(0);
    var number = 1 + Math.floor(Math.random() * 19);
    titleInitialCenterX = $('.accueil-title').position().left;
    titleInitialCenterY = $('.accueil-title').position().top;
    $('.accueil-background').css('background-image', 'url("assets/images/bg/'+ number + '.jpg")');

    $('.tlt').textillate();
    $.getJSON( "assets/quotes.json", function( data ) {
        var quote = data[Math.floor(Math.random() * 9)];
        $('#quote-author').html(quote.author);
        $('#quote-quote').html(quote.quote);
    });
});

$(window).load(function(){
    $('.wrap').delay(3500).fadeOut(150, function() {
        $('.start-button').fadeIn();
        $('.accueil-top-bar').fadeTo(1,250);
        $('body').css({'overflow-y' : 'scroll'});
    });
});

$('#accueil').mousemove(function(e){
    var yCenter = Math.floor( (($('#accueil').height()/2) - e.pageY ) / 20);
    var xCenter = Math.floor( (($('#accueil').width()/2) - e.pageX ) / 20);

    $('.accueil-background').stop().velocity({
        'background-position-x' : Math.floor( ( xCenter - $('#accueil').height()/20 ) )+ 'px',
        'background-position-y' : Math.floor( ( yCenter - $('#accueil').width()/20 ) )+ 'px'
    },25,'easeOutCirc');

    $('.accueil-title').stop().velocity({
        'left' : 0 - Math.floor((xCenter / 4)),
        'top' : titleInitialCenterY - Math.floor((yCenter / 4))
    },0,'easeOutCirc');
});

$('.toggle-menu , .text-menu').click(function(e){
    e.preventDefault();
    $('.text-menu').toggle("slide", { direction: "left" }, 250);
    $('.list-menu').toggle("slide", { direction: "left" }, 250);
    $('.toggle-menu').toggleClass( "rotate");
});
