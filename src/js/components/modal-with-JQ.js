$('.consult-btn').on('click', () => {
    $('.modal-consultation').fadeIn('slow');
});

$('.consult-btn-with-modal').on('click', () => {
    $('.modal-consultation').fadeIn('slow');
})

$('.close-btn').on('click', () => {
    $('.modal-consultation, .modal-order, .modal-thankYou').fadeOut('slow')
})

$('.price-btn').each(function(i) {
    $(this).on('click', () => {
        $('.modal-order .modal__text').text($('.tabs__title').eq(i).text());
        $('.modal-order').fadeIn('slow');
    })
})