$( document ).ready(function() {
    $(".menu").click(function(){
        $('.navbar').toggleClass("active")
    })
    $('.start_cards-mobile').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
        }
    })
})