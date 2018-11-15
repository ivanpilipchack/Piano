$(document).ready(() => {
    $('.key').on('mousedown', () => {
        $(event.currentTarget).addClass('addKey');
    });
    $('.key').on('mouseleave', () => {
        $(event.currentTarget).removeClass('addKey');
    })
})