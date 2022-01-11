$(document).ready(function(){ 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.icon-up').fadeIn('slow');
        } else {
            $('.icon-up').fadeOut('slow');
        }

        
    });

    $(function(){
        $("a[href^='#']").click(function(){
                const _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });
});