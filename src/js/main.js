document.addEventListener('DOMContentLoaded', () => {

    // scroll page up
    const upBtn = document.querySelector('.icon-up');
    window.addEventListener('scroll', () => {
        if(window.pageYOffset >= 1060) {
            upBtn.classList.add('active');
        } else {
            upBtn.classList.remove('active');
        };
    }, {passive: true});

    upBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })

    // animation 
    window.addEventListener('scroll', function() {
        if( $(window).scrollTop() <= 3000 || $(window).scrollTop() >= 4730 ) {
            $('.wow').removeClass('animated');
            $('.wow').removeAttr('style');
            new WOW().init();
        }
     });

})

