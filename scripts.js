$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#button').fadeIn();
        } else {
            $('#button').fadeOut();
        }
    });
    $('#button').click(function() {
        $('body,html').animate({scrollTop:0},700);
    });
});