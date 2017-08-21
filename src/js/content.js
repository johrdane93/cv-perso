// $(window).scroll(function(){
//     var minHeight = $(window).height();
//     var scroll = $(window).scrollTop() - minHeight;
//     if(scroll > 0){
//         $('.content-data').each(function(index) {
//             var diff =  10 +( $(this).position().top - scroll );
//             if(diff < 0){
//                 $(this).stop().velocity({
//                     'background-position-y' : -(diff) + 'px'
//                 },2);
//             }
//         });
//     }
// });

var contactHeight;

$(document).ready(function() {
    $('.content-data').each(function(index) {
        if($(this).find('.content-data-text').height() <= $(window).height() ) {
            $(this).height($(window).height());
            //$(this).css({'background-size' : $(window).width() +'px '+ $('.content-data').height() +'px'});
        }
        if($(this).attr('id') == "contact"){
            var text = $(this).find('.content-data-text');
            var contact = text.find('.contact-text');
            contactHeight = text.find('.contact-text').height();
            if(contactHeight < $(window).height()){
                text.height($(window).height());
                contact.height($(window).height());
            } else {
                text.height(contactHeight);
            }
        }

    });
});

$(window).resize(function() {  
    $('.content-data').each(function(index) {
        if($(this).find('.content-data-text').height() <= $(window).height() ) {
            $(this).height($(window).height());
            //$(this).css({'background-size' : $(window).width() +'px '+ $('.content-data').height() +'px'});
        } else {
            $(this).height($(this).find('.content-data-text').height());
        }
        if($(this).attr('id') == "contact"){
            var text = $(this).find('.content-data-text');
            var contact = text.find('.contact-text');
            if(contactHeight < $(window).height()){
                text.height($(window).height());
                contact.height($(window).height());
            } else {
                text.height(contactHeight);
                contact.height(contactHeight);
            }
        }
    });
});