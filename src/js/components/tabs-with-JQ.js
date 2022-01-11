$('div.catalogue__tabs').on('click', 'button:not(.active)', function(){
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.catalogue__container').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
})

function toggleCard(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.tabs__inner').eq(i).toggleClass('active');
            $('.tabs__outer').eq(i).toggleClass('active');
        })
    })
}

toggleCard('.tabs__back-link');
toggleCard('.tabs__link');