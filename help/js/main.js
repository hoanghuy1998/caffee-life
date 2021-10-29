$('#btn_search').click(() => {
    $('#search').toggleClass('slider-search')
    if ($('.nav__menu ul').hasClass('slider-search')) {
        $('.nav__menu ul').removeClass('slider-search')
    }
})

$('.nav__bar .fa-bars').click(() => {
    $('.nav__menu ul').toggleClass('slider-search')
    if ($('#search').hasClass('slider-search')) {
        $('#search').removeClass('slider-search')
    }
})
$(window).scroll(() => {
    if (this.scrollY > 0) {
        $('.nav').addClass('bg-black')
    } else {
        $('.nav').removeClass('bg-black')
    }

})
var input = $('input[name]')
var label = $('label[for]')
console.log(input)
console.log(label)
for (let i = 0; i < input.length; i++) {


    $(input[i]).focusin(() => {
        $(label[i]).css('transform', 'translateY(0px)')
        $(input[i]).removeClass('bd-red')
            // translateY(24px)
    })
    $(input[i]).blur(() => {
        var v = $(input[i]).val().length
        if (v == 0) {
            $(label[i]).css('transform', 'translateY(24px)')
            $(input[i]).addClass('bd-red')
        } else {
            $(input[i]).removeClass('bd-red')
        }
    })

}